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
