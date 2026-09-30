// Offline test for the generated browser half (`client.js`).
//
// The real module system serves exactly one artifact per plugin, so this test
// loads that artifact the same way the browser does — as a plain script that
// registers a lazy factory — and then exercises the factory against a fake
// `react` and fake `slots` service. Rendering is not covered; everything up to
// and including invoking both components is.
//
//   node client-smoke.mjs
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

const PACKAGE_NAME = '@local/dsh-plugin-english-roots';
const KINDS = ['root', 'prefix', 'suffix'];
const LEVELS = ['基础', '进阶', '高级', '高阶'];
const EXPECTED_COUNTS = { root: 110, prefix: 48, suffix: 40, total: 198 };
const source = readFileSync(new URL('./client.js', import.meta.url), 'utf8');

function fail(message) {
  throw new Error(`client.js: ${message}`);
}

// The dictionary must be inlined; a sibling artifact is never fetched.
for (const stale of ['__ENGLISH_ROOTS_DATA__', '__ENGLISH_ROOTS__']) {
  if (source.includes(stale)) fail(`still references the removed global ${stale}`);
}

const registrations = [];
const styleNodes = [];
const sandbox = {
  console,
  document: {
    getElementById: () => null,
    createElement: () => ({ id: '', textContent: '' }),
    head: { appendChild: (node) => styleNodes.push(node) },
  },
  window: {
    localStorage: { getItem: () => null, setItem: () => {} },
    __ModuleLoader__: {
      load(registration) {
        registrations.push(registration);
      },
    },
  },
};
runInNewContext(source, sandbox, { filename: 'client.js' });

if (registrations.length !== 1) fail(`registered ${registrations.length} factories, expected 1`);
const [registration] = registrations;
if (registration.id !== PACKAGE_NAME) fail(`factory id is ${registration.id}`);
if (typeof registration.factory !== 'function') fail('factory is not a function');

// Materialize the module with the frozen platform module table's `react`, shimmed
// just far enough to invoke each component once. This is not an appearance check:
// it proves the components do not throw when the shell mounts them, which is the
// difference between a visible panel and a blanked slot entry. A factory that
// returns before its module-level `const`s are initialized passes every other
// assertion here and still blanks the panel, so this check is load-bearing.
const elements = [];
const react = {
  createElement(type, props, ...children) {
    elements.push({ type, props, children });
    return { type, props, children };
  },
  Fragment: Symbol('Fragment'),
  useState(initial) {
    return [typeof initial === 'function' ? initial() : initial, () => {}];
  },
  useMemo(factory) {
    return factory();
  },
  Component: class Component {
    constructor(props) { this.props = props; this.state = {}; }
    setState() {}
  },
};
const mod = registration.factory((id) => {
  if (id === 'react') return react;
  throw new Error(`client.js required an unexpected module: ${id}`);
});

const injected = [];
const slots = [];
const themeCalls = [];
/** Accent tokens the panel is expected to register, with a sane light/dark pair each. */
const EXPECTED_TOKENS = ['--er-kind-root', '--er-kind-prefix', '--er-kind-suffix', '--er-favorite'];
/** Custom properties the stylesheet is allowed to read; only `--er-accent` is not registered. */
const STYLESHEET_PROPS = new Set(['--er-accent']);

const fakeTheme = {
  overrideTokens(source, tokens) {
    themeCalls.push({ source, tokens });
    return () => {};
  },
};

function makeCtx(options = {}) {
  return {
    effect(callback) {
      return callback();
    },
    get(key) {
      return key === 'theme' ? options.theme : undefined;
    },
    slots: {
      inject(key, callback) {
        injected.push(key);
        return callback();
      },
      register(options2, component) {
        slots.push({ options: options2, component });
      },
    },
  };
}

if (typeof mod.apply !== 'function') fail('module has no apply()');
mod.apply(makeCtx({ theme: fakeTheme }));

const expectedSlots = [
  { name: 'sidebar.panellist', id: 'roots', order: 20, label: '英语词根词缀' },
  { name: 'main', key: 'roots' },
];
if (injected.length !== expectedSlots.length
  || injected.some((key, index) => key !== expectedSlots[index].name)) {
  fail(`injected ${JSON.stringify(injected)}`);
}
for (const [index, expected] of expectedSlots.entries()) {
  const slot = slots[index];
  if (slot === undefined) fail(`no registration for ${expected.name}`);
  for (const [field, value] of Object.entries(expected)) {
    if (slot.options[field] !== value) {
      fail(`${expected.name}.${field} is ${JSON.stringify(slot.options[field])}`);
    }
  }
  for (const field of Object.keys(slot.options)) {
    if (!(field in expected)) fail(`${expected.name} registers unexpected option ${field}`);
  }
  if (typeof slot.component !== 'function') fail(`${expected.name} component is not a function`);
}
// The sidebar entry id is what the shell resolves against the `main` key, and both
// are frozen identifiers: changing either breaks the installed row.
if (slots[0].options.id !== slots[1].options.key) fail('sidebar id does not address the main key');

// ------------------------------------------------------------- accent layer

// The panel's colour lives in a theme token layer, never in the stylesheet. It is
// decoration, so a missing or broken theme service must degrade instead of throwing
// (a throwing apply blanks the shell's main slot).
if (themeCalls.length !== 1) fail(`registered ${themeCalls.length} theme layers, expected 1`);
const [layer] = themeCalls;
if (layer.source !== PACKAGE_NAME) fail(`accent layer source is ${JSON.stringify(layer.source)}`);
const tokenNames = Object.keys(layer.tokens);
if (tokenNames.slice().sort().join(',') !== EXPECTED_TOKENS.slice().sort().join(',')) {
  fail(`accent tokens are ${JSON.stringify(tokenNames)}`);
}
for (const [name, value] of Object.entries(layer.tokens)) {
  if (typeof value !== 'object' || value === null) fail(`${name} is not a { light, dark } pair`);
  if (typeof value.light !== 'string' || value.light.length === 0) fail(`${name}.light is empty`);
  if (typeof value.dark !== 'string' || value.dark.length === 0) fail(`${name}.dark is empty`);
  if (value.light === value.dark) fail(`${name} uses the same value for both schemes`);
}

for (const [label, override] of [
  ['without a theme service', { theme: undefined, warns: false }],
  ['with a theme service lacking overrideTokens', { theme: {}, warns: false }],
  ['with a throwing theme service', { theme: { overrideTokens() { throw new Error('nope'); } }, warns: true }],
]) {
  const before = slots.length;
  const warnings = [];
  const originalWarn = console.warn;
  console.warn = (...args) => warnings.push(args.join(' '));
  try {
    mod.apply(makeCtx(override));
  } catch (error) {
    fail(`apply() threw ${label}: ${error?.message ?? error}`);
  } finally {
    console.warn = originalWarn;
  }
  if (slots.length - before !== expectedSlots.length) {
    fail(`apply() ${label} registered ${slots.length - before} slots, expected ${expectedSlots.length}`);
  }
  if (warnings.length > 0 !== override.warns) {
    fail(`apply() ${label} warned ${warnings.length} time(s); expected ${override.warns ? 'a warning' : 'none'}`);
  }
}

// The panel icon receives { size, active } and must render without throwing.
elements.length = 0;
slots[0].component({ size: 16, active: true });
if (elements.length === 0) fail('the sidebar icon rendered no element');

// Invoking the panel must not throw: the shell blanks the main slot when it does.
// It also has to reach ensureStyles(), or the panel mounts unstyled.
styleNodes.length = 0;
elements.length = 0;
slots[1].component({});
if (elements.length === 0) fail('the main panel rendered no element');
if (styleNodes.length !== 1) fail(`the main panel injected ${styleNodes.length} stylesheets`);
if (typeof styleNodes[0].textContent !== 'string' || styleNodes[0].textContent.length === 0) {
  fail('the injected stylesheet is empty');
}

// -------------------------------------------------------- stylesheet guards

// Colour only ever enters the panel through the registered token layer, so the
// stylesheet must stay free of literal colours, and every accent read must carry a
// fallback so a missing layer degrades to the brand colour instead of going blank.
const css = styleNodes[0].textContent;
const hex = css.match(/#[0-9a-fA-F]{3,8}\b/gu) ?? [];
if (hex.length > 0) fail(`stylesheet contains literal colours: ${[...new Set(hex)].join(', ')}`);
const functional = css.match(/\b(?:rgb|rgba|hsl|hsla)\(/gu) ?? [];
if (functional.length > 0) fail(`stylesheet contains literal colours: ${[...new Set(functional)].join(', ')}`);
const reads = [...css.matchAll(/var\((--er-[a-z-]+)\s*([,)])/gu)];
if (reads.length === 0) fail('stylesheet reads no accent token at all');
const bare = reads.filter((match) => match[2] === ')');
if (bare.length > 0) fail(`accent reads without a fallback: ${[...new Set(bare.map((m) => m[1]))].join(', ')}`);
for (const name of new Set(reads.map((match) => match[1]))) {
  if (!EXPECTED_TOKENS.includes(name) && !STYLESHEET_PROPS.has(name)) {
    fail(`stylesheet reads unregistered accent token ${name}`);
  }
}
// The header hairline is what makes the three class accents visible at once.
if (!css.includes('linear-gradient(90deg')) fail('stylesheet lost the header accent gradient');
// The morpheme mark is the panel's whole teaching device in the example table, and the
// one thing it must never do is paint: the colour is the mark. A `background` here —
// whether written as a tint or inherited from a mark element's UA default — repaints the
// very words the reader is reading, and the rule would still look correct.
const markRule = css.match(/\.er-word-hl\s*\{([^}]*)\}/u);
if (markRule === null) fail('stylesheet lost the morpheme mark rule');
if (!/color:/u.test(markRule[1])) fail('the morpheme mark must set the colour');
if (/background/u.test(markRule[1])) {
  fail(`the morpheme mark must not paint a background, found ${JSON.stringify(markRule[1].trim())}`);
}
if (/border-bottom|text-decoration/u.test(markRule[1])) {
  fail(`the morpheme mark must not underline, found ${JSON.stringify(markRule[1].trim())}`);
}

// ------------------------------------------------------------------- data

const api = sandbox.window.__ENGLISH_MORPHEMES__;
if (api === undefined) fail('the debug surface is missing');
const morphemes = api.morphemes;
if (!Array.isArray(morphemes) || morphemes.length !== EXPECTED_COUNTS.total) {
  fail(`inlined ${morphemes?.length} entries, expected ${EXPECTED_COUNTS.total}`);
}
for (const kind of KINDS) {
  if (api.counts[kind] !== EXPECTED_COUNTS[kind]) {
    fail(`counts.${kind} is ${api.counts[kind]}, expected ${EXPECTED_COUNTS[kind]}`);
  }
  if (morphemes.filter((entry) => entry.kind === kind).length !== EXPECTED_COUNTS[kind]) {
    fail(`kind=${kind} entry count does not match counts.${kind}`);
  }
}
if (api.kinds.join(',') !== KINDS.join(',')) fail(`kinds is ${JSON.stringify(api.kinds)}`);
if (api.kindLabel.prefix !== '前缀' || api.kindLabel.suffix !== '后缀') {
  fail('kindLabel does not map the class tokens');
}

/** Resolve one query through the module's own lookup. */
function lookup(query) {
  return api.findMorphemes(query).map((entry) => `${entry.kind}:${entry.form}`);
}

for (const [query, expected] of [
  ['spect', ['root:spect / spic']],
  ['spect / spic', ['root:spect / spic']],
  ['SPECT', ['root:spect / spic']],
  ['re', ['prefix:re-']],
  ['re-', ['prefix:re-']],
  ['-tion', ['suffix:-tion / -sion']],
  ['tion', ['suffix:-tion / -sion']],
  ['jud', ['root:dict（jud）']],
  ['-cracy', ['suffix:-cracy / -crat']],
]) {
  const found = lookup(query);
  if (found.join('|') !== expected.join('|')) {
    fail(`lookup ${JSON.stringify(query)} returned ${JSON.stringify(found)}, expected ${JSON.stringify(expected)}`);
  }
}
if (lookup('zzzznope').length !== 0) fail('an unknown query must not resolve');
// `en-` and `-en` share a spelling; both must come back.
if (lookup('en').length !== 2) fail(`lookup en returned ${JSON.stringify(lookup('en'))}`);

// The attachment side is what lets the shared spelling stay unambiguous.
const sides = Object.fromEntries(KINDS.map((kind) => [kind, 0]));
for (const entry of morphemes) for (const { side } of api.variantForms(entry.form)) sides[side] += 1;
if (sides.prefix === 0 || sides.suffix === 0) fail(`no positional variants: ${JSON.stringify(sides)}`);

// ------------------------------------------------------------- morpheme mark

// The panel marks the morpheme inside every example word, and a mark is never
// decorative: it has to be one of the entry's own variants, sitting where its hyphen
// says it should. Every one of the example words is checked here, because a wrong mark
// teaches the wrong split and is worse than no mark at all.
if (typeof api.locateMorpheme !== 'function' || typeof api.wordSegments !== 'function') {
  fail('the morpheme-marking helpers are missing from the debug surface');
}

/**
 * Words whose morpheme sound change has worn away: the `REVIEWED_EXEMPT` pairs in
 * `build.mjs` that spell nothing the panel can mark. The list holds 49 pairs; the
 * other six became visible once a variant such as `cert` was declared for them. The
 * count is exact on purpose — adding an exemption means reading the pair, then
 * updating that list and this number together.
 */
const EXPECTED_OBSCURED = 43;
/** The longest matching form wins, so a mark never claims less than the word shows. */
function longestKey(candidates) {
  return Math.max(...candidates.map((candidate) => candidate.key.length));
}

let markedWords = 0;
let obscuredWords = 0;
for (const entry of morphemes) {
  const variants = api.variantForms(entry.form);
  for (const example of entry.examples) {
    const word = example.word;
    const lower = word.toLowerCase();
    const segments = api.wordSegments(entry.form, word);
    if (segments.map((segment) => segment.text).join('') !== word) {
      fail(`${entry.form}/${word}: the marked segments do not rejoin the word`);
    }
    if (segments.some((segment) => segment.text.length === 0)) {
      fail(`${entry.form}/${word}: an empty segment`);
    }
    const hits = segments.filter((segment) => segment.hit);
    if (hits.length === 0) {
      obscuredWords += 1;
      if (api.locateMorpheme(entry.form, word) !== null) {
        fail(`${entry.form}/${word}: locateMorpheme disagrees with wordSegments`);
      }
      continue;
    }
    markedWords += 1;
    if (hits.length !== 1) fail(`${entry.form}/${word}: ${hits.length} marked runs, expected 1`);
    const hit = hits[0].text.toLowerCase();
    const at = api.locateMorpheme(entry.form, word);
    const variant = variants.find((candidate) => candidate.key === hit);
    if (variant === undefined) {
      fail(`${entry.form}/${word}: marked "${hits[0].text}", which is no variant of the form`);
    }
    // A variant attached where its hyphen says it should be is the normal case, and
    // then both the placement and the longest-match preference are guaranteed. A
    // reviewed exemption that only *spells* the morpheme inside the word (`-log` in
    // `logic`) is the one case where neither can hold, so only the variant check above
    // applies to it.
    const attached = variants.filter((candidate) => (candidate.side === 'prefix' && lower.startsWith(candidate.key))
      || (candidate.side === 'suffix' && lower.endsWith(candidate.key)));
    const stems = variants.filter((candidate) => candidate.side === 'neutral' && lower.includes(candidate.key));
    if (attached.length > 0) {
      if (hit.length !== longestKey(attached)) {
        fail(`${entry.form}/${word}: marked "${hits[0].text}" while a longer attached variant matches`);
      }
      if (variant.side === 'prefix' && at.start !== 0) {
        fail(`${entry.form}/${word}: marked a prefix away from the start of the word`);
      }
      if (variant.side === 'suffix' && at.end !== word.length) {
        fail(`${entry.form}/${word}: marked a suffix away from the end of the word`);
      }
    } else if (stems.length > 0) {
      if (variant.side !== 'neutral' || hit.length !== longestKey(stems)) {
        fail(`${entry.form}/${word}: marked "${hits[0].text}" while a longer stem matches`);
      }
    }
  }
}
if (obscuredWords !== EXPECTED_OBSCURED) {
  fail(`${obscuredWords} example words show no morpheme, expected ${EXPECTED_OBSCURED}; if the data changed, `
    + 'read the pair and update build.mjs REVIEWED_EXEMPT and this count together');
}
console.log(`marking ok: ${markedWords} of ${markedWords + obscuredWords} example words marked, `
  + `${obscuredWords} worn away by sound change`);

// Rendering, not just the mapping: one row colours its morpheme and nothing else, a row
// whose morpheme is invisible stays plain and explains itself, and an open question
// colours nothing at all — a coloured run there would point straight at the right option.
const [stem, stemWord] = ['spect / spic', 'inspect'];
const stemParts = api.wordSegments(stem, stemWord);
if (stemParts.map((segment) => segment.text).join('') !== stemWord
  || stemParts.filter((segment) => segment.hit).map((segment) => segment.text).join('') !== 'spect') {
  fail(`${stem}/${stemWord} should mark "spect", got ${JSON.stringify(stemParts)}`);
}
/** The coloured run, recognised the way the stylesheet does: by its class. */
const marked = (list) => list.filter((element) => element.props?.className === 'er-word-hl');
const rowEntry = morphemes.find((entry) => entry.kind === 'root' && entry.form === stem);
const rowExample = rowEntry?.examples.find((example) => example.word === stemWord);
if (rowExample === undefined) fail(`the dictionary no longer carries ${stem} → ${stemWord}`);
elements.length = 0;
api.components.WordRow({ entry: rowEntry, example: rowExample });
const rows = marked(elements);
if (rows.length !== 1) fail(`one example row rendered ${rows.length} marks, expected 1`);
// A `mark` element would bring the browser's own yellow background along with it, which
// is exactly the repaint this panel must not have.
if (rows[0].type !== 'span') fail(`the mark is a ${String(rows[0].type)}, not a span`);
if (String(rows[0].children[0]) !== 'spect') fail(`the row marked ${JSON.stringify(rows[0].children[0])}`);

const obscuredEntry = morphemes.find((entry) => entry.form === 'reg');
const obscuredExample = obscuredEntry?.examples.find((example) => example.word === 'reign');
if (obscuredExample === undefined) fail('the dictionary no longer carries reg → reign');
elements.length = 0;
api.components.WordRow({ entry: obscuredEntry, example: obscuredExample });
if (marked(elements).length > 0) {
  fail('reign cannot be marked: sound change left no trace of reg- in it');
}
const cell = elements.find((element) => element.props?.className === 'er-word-text');
if (typeof cell?.props?.title !== 'string' || !cell.props.title.includes('不可见')) {
  fail(`an unmarked example word must explain itself, got title ${JSON.stringify(cell?.props?.title)}`);
}

elements.length = 0;
api.components.PracticeTab({ stats: { attempts: 0, correct: 0 }, onStatsChange() {} });
if (marked(elements).length > 0) {
  fail('an unanswered quiz question already marks a morpheme, which gives the answer away');
}

// Replica of the module's quiz draw: four distinct words must always be found.
function makeQuizItem(level, kind) {
  const pool = morphemes.filter((entry) => (level == null || entry.level === level)
    && (kind == null || entry.kind === kind));
  const candidates = pool.length >= 4 ? pool : morphemes;
  const chosen = [];
  const usedIndexes = new Set();
  const usedWords = new Set();
  let guard = 0;
  while (chosen.length < 4 && guard < 400) {
    guard += 1;
    const index = Math.floor(Math.random() * candidates.length);
    if (usedIndexes.has(index)) continue;
    const entry = candidates[index];
    const answerWord = entry.examples[0].word;
    if (usedWords.has(answerWord)) continue;
    usedIndexes.add(index);
    usedWords.add(answerWord);
    chosen.push({ entry, answerWord });
  }
  if (chosen.length < 4) return null;
  const answer = chosen[Math.floor(Math.random() * chosen.length)];
  return {
    options: [answer.answerWord, ...chosen
      .filter((candidate) => candidate !== answer)
      .map((candidate) => candidate.answerWord)],
    answerWord: answer.answerWord,
    kind: answer.entry.kind,
  };
}

for (const kind of KINDS) {
  for (const level of LEVELS) {
    for (let round = 0; round < 200; round += 1) {
      const item = makeQuizItem(level, kind);
      if (item === null) fail(`${kind}/${level}: no question`);
      if (item.options.length !== 4) fail(`${kind}/${level}: wrong option count`);
      if (new Set(item.options).size !== 4) fail(`${kind}/${level}: duplicate options`);
      if (!item.options.includes(item.answerWord)) fail(`${kind}/${level}: answer missing`);
      if (item.kind !== kind) fail(`${kind}/${level}: drew a ${item.kind} entry`);
    }
  }
  console.log(`quiz ok: kind=${kind} (4 levels x 200 rounds)`);
}

console.log(`morphemes=${morphemes.length} counts=${JSON.stringify(api.counts)} levels=${api.levels.join('/')}`);
console.log('client artifact test passed');
