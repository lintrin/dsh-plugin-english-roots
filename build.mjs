// Generates the two shipped artifacts from the single source of truth
// (src/morphemes.json), so the Host and browser halves of the bundle can never
// drift apart.
//
//   node build.mjs
//
// Host half:    data.js   — an ES module exporting MORPHEME_DATA.
// Browser half: client.js — src/client.template.js with the dictionary inlined.
//
// The browser half must stay one self-contained artifact: the Client module
// system serves only the package's `./client` entry, so a sibling data script
// would never be fetched.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Script } from 'node:vm';

const here = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(here, 'src', 'morphemes.json');
const legacyPath = join(here, 'src', 'roots.json');

/** Learning order, also the order `levels` is published in. */
const LEVEL_ORDER = ['基础', '进阶', '高级', '高阶'];
/** Morpheme classes; `root` is the default for a plain stem. */
const KINDS = ['root', 'prefix', 'suffix'];
/** Minimum entries a (kind, level) quiz pool needs to offer four options. */
const MIN_BUCKET = 4;
/**
 * Example words every entry must carry. The panel lists them all and the quiz
 * draws its options from the pool's first examples, so the floor is a content
 * contract, not a formality: raising it is the point of editing this file.
 */
const MIN_EXAMPLES_PER_ENTRY = 6;

/**
 * Reviewed exceptions to the attachment rule below.
 *
 * The rule is that every example word visibly carries its morpheme: a prefix at
 * the start of the word, a suffix at its end, a stem somewhere inside. Most
 * entries satisfy it outright. These pairs are real etymologies whose morpheme
 * was worn away by sound change or latinization, so the learner cannot see it:
 * `reign` is reg-, `faith` is fid-, `deliver` is liber-, `degree` is grad-,
 * `universal` is val-, `circulate` is circum-. They are kept because the words
 * themselves are worth learning; the entry's `note` explains the pattern.
 *
 * Keyed `form|word`. Nothing may be added here without reading the pair first:
 * the rule is what stops a plausible-looking but unrelated word from slipping
 * into the dictionary. An entry that no example uses any more fails the build,
 * so the list cannot rot.
 */
const REVIEWED_EXEMPT = new Set([
  'dict|dedicate',
  'mit / miss|promise',
  'fac / fact / fect|difficult',
  'grad / gress|degree',
  'spir|expire',
  'manu|manage',
  'the / theo|enthusiasm',
  '-logy / -log|logic',
  '-logy / -log|dialogue',
  'string / strict|restrain',
  'ver / veri|genuine',
  'fid|federal',
  'fid|faith',
  'junct / join|adjacent',
  'aqua / aque / aqui|aqueduct',
  'aqua / aque / aqui|aquifer',
  'voc|convoke',
  'voc|revoke',
  'voc|provoke',
  'voc|evoke',
  'val / vail|universal',
  'lev|relieve',
  'reg|reign',
  'tang / tact / ting|contagious',
  'secut / sequ|execute',
  'phil-|bibliophile',
  'cogn / gnos|ignore',
  'mem / mnem|amnesia',
  'dict（jud）|justice',
  'pot|possible',
  'vac / van / void|vain',
  'cern（cert）/ cret / crim|certain',
  'ple / plen / plet|supply',
  'prehend（pris）|comprehensive',
  'sanct|saint',
  'sanct|sacred',
  'clin|climate',
  'spir（spirit）|morale',
  'brev / brief|abridge',
  'liber|deliver',
  'liber|library',
  'luc / lum|illustrate',
  'nutri|nurture',
  'vac（van）|vain',
  'sequ（secut）|execute',
  'syn- / sym-|system',
  'counter- / contra-|controversy',
  'circum-|circulate',
  'vice-|vicarious',
]);

/**
 * Reviewed overlaps inside one class and level, keyed `form|word`.
 *
 * These are the entries where a shared example is the lesson rather than a
 * mistake: `cosmopolitan` genuinely holds both `cosm` and `poli`, and the three
 * `vac` entries (空 / 空闲 / 徒劳) are deliberately taught against the same words.
 * New entries may not add overlaps here; every pair below is shipped history.
 */
const REVIEWED_SHARED = new Set([
  'poli|cosmopolitan',
  'voc / vok|advocate',
  'voc / vok|provoke',
  'voc / vok|revoke',
  'vac / van / void|vain',
  'vac / van / void|vanish',
  'vac / van / void|vacant',
  'vac / van / void|vacation',
  'vac / van / void|vacuum',
  'vac / van / void|evacuate',
  'vac（van）|vain',
  'vac（van）|vanish',
  'vac（van）|vanity',
  'vac（van）|evanescent',
  'vac（van）|evacuate',
  'vac（voc）|vacancy',
  'vac（voc）|vacuum',
  'vac（voc）|evacuate',
  'vac（voc）|vacate',
  'vac（voc）|vacant',
]);

if (existsSync(legacyPath)) {
  throw new Error('src/roots.json still exists — src/morphemes.json is the only source of truth');
}
const entries = JSON.parse(readFileSync(sourcePath, 'utf8'));

/**
 * Split one display form into its lookup variants with their attachment side.
 * A trailing hyphen marks a prefix (`en-`), a leading one a suffix (`-en`), and
 * neither marks a position-neutral form such as a stem (`spect / spic`).
 * Full-width parentheses are separators too, so `dict（jud）` answers to `jud`.
 * @param form - the entry's display form.
 * @returns variants with hyphen- and case-normalized keys and an attachment side.
 */
function attachmentParts(form) {
  return form
    .toLowerCase()
    .replace(/[（）()]/gu, ' ')
    .split(/[\s/]+/u)
    .map((part) => part.trim())
    .filter((part) => part.length > 0)
    .map((part) => {
      const leading = part.startsWith('-');
      const trailing = part.endsWith('-');
      const key = part.replace(/^-+|-+$/gu, '').trim();
      const side = leading && !trailing ? 'suffix' : trailing && !leading ? 'prefix' : 'neutral';
      return { key, side };
    })
    // One empty variant can appear when a form is written as a bare hyphen.
    // Single letters stay: `-y` and `-cy` are different suffixes, and the
    // cross-class ambiguity check below needs both keys to compare sides.
    .filter((variant) => variant.key.length > 0);
}

/**
 * Does one example word actually carry its morpheme, at the right end of the word?
 *
 * A prefix has to open the word, a suffix has to close it, and a position-neutral
 * stem may sit anywhere. Matching by side is what keeps a short prefix such as
 * `in-` from "matching" every word that happens to contain the letters `in`.
 * @param form - the entry's display form.
 * @param word - one example word.
 * @returns true when a variant attaches where its hyphen says it should.
 */
function carries(form, word) {
  const normalized = word.toLowerCase();
  return attachmentParts(form).some(({ key, side }) => {
    if (side === 'prefix') return normalized.startsWith(key);
    if (side === 'suffix') return normalized.endsWith(key);
    return normalized.includes(key);
  });
}

// ------------------------------------------------------------- validation

const seenForms = new Set();
for (const entry of entries) {
  for (const field of ['kind', 'form', 'meaning', 'meaningEn', 'origin', 'level', 'note']) {
    if (typeof entry[field] !== 'string' || entry[field].length === 0) {
      throw new Error(`entry ${JSON.stringify(entry.form)} is missing ${field}`);
    }
  }
  if (!KINDS.includes(entry.kind)) {
    throw new Error(`${entry.form}: kind must be one of ${KINDS.join(', ')}`);
  }
  if (!LEVEL_ORDER.includes(entry.level)) {
    throw new Error(`${entry.form}: level must be one of ${LEVEL_ORDER.join(', ')}`);
  }
  if (!Array.isArray(entry.examples) || entry.examples.length === 0) {
    throw new Error(`${entry.form} has no examples`);
  }
  if (entry.examples.length < MIN_EXAMPLES_PER_ENTRY) {
    throw new Error(`${entry.form} has ${entry.examples.length} examples; at least ${MIN_EXAMPLES_PER_ENTRY} are required`);
  }
  const seenWords = new Set();
  for (const example of entry.examples) {
    for (const field of ['word', 'pos', 'meaning']) {
      if (typeof example[field] !== 'string' || example[field].length === 0) {
        throw new Error(`example in ${entry.form} is missing ${field}`);
      }
    }
    const normalizedWord = example.word.toLowerCase();
    if (seenWords.has(normalizedWord)) {
      throw new Error(`${entry.form} lists the example word ${example.word} twice`);
    }
    seenWords.add(normalizedWord);
    const pair = `${entry.form}|${example.word}`;
    // An exemption also covers a word that only *now* carries its morpheme
    // because a variant was declared for it (`certain` is exact once `cert` is
    // listed) — what it must never be is unused, which the check below enforces.
    if (!carries(entry.form, example.word) && !REVIEWED_EXEMPT.has(pair)) {
      throw new Error(`${pair} does not carry ${entry.form} where its hyphen says it should `
        + '(prefix at the start, suffix at the end, stem inside); fix the word or add a reviewed exemption');
    }
  }
  const key = `${entry.kind}:${entry.form.toLowerCase()}`;
  if (seenForms.has(key)) throw new Error(`duplicate ${entry.kind} form: ${entry.form}`);
  seenForms.add(key);
}

/** Entries of one class and level; a quiz draws its four options from here. */
function bucket(kind, level) {
  return entries.filter((entry) => entry.kind === kind && entry.level === level);
}

for (const kind of KINDS) {
  for (const level of LEVEL_ORDER) {
    const pool = bucket(kind, level);
    if (pool.length < MIN_BUCKET) {
      throw new Error(`${kind}/${level} has ${pool.length} entries; a quiz needs ${MIN_BUCKET}`);
    }
    const firstWords = new Set(pool.map((entry) => entry.examples[0].word));
    if (firstWords.size < MIN_BUCKET) {
      throw new Error(`${kind}/${level} has only ${firstWords.size} distinct first example words; a quiz needs ${MIN_BUCKET}`);
    }
    // The quiz only ever shows first examples, so a word that is *not* first must
    // not collide with another entry's first example inside the same pool: two
    // options spelled the same would make the question unanswerable. The reviewed
    // overlaps below are the only exception, and they are cross-checked there.
    for (const entry of pool) {
      for (const example of entry.examples.slice(1)) {
        const pair = `${entry.form}|${example.word}`;
        if (firstWords.has(example.word) && !REVIEWED_SHARED.has(pair)) {
          throw new Error(`${kind}/${level}: ${example.word} is a later example of ${entry.form} but the first example of another entry; `
            + 'pick another word or add the pair to REVIEWED_SHARED after reading it');
        }
      }
    }
    // Inside one class and level a word must belong to one entry: the panel shows
    // one morpheme at a time, so two same-class entries sharing `vacant` invite the
    // learner to file it under both. The shipped data already does this in a few
    // places — `cosmopolitan` really is cosm + poli, and the three `vac` entries
    // teach three senses of one root — so REVIEWED_SHARED names those pairs. They
    // cannot recur by accident: the dictionary grows only through this build, and
    // an unreviewed word now fails here.
    const ownerOfWord = new Map();
    for (const entry of pool) {
      for (const example of entry.examples) {
        const pair = `${entry.form}|${example.word}`;
        const owner = ownerOfWord.get(example.word);
        if (owner !== undefined && !REVIEWED_SHARED.has(pair)) {
          throw new Error(`${kind}/${level}: ${example.word} is an example of both ${owner} and ${entry.form}; `
            + 'pick another word or add the pair to REVIEWED_SHARED after reading it');
        }
        if (owner === undefined) ownerOfWord.set(example.word, entry.form);
      }
    }
  }
}

// Every exemption must earn its place: an unused one is a stale claim about a
// pair that no entry carries any more.
const usedExemptions = new Set();
for (const entry of entries) {
  for (const example of entry.examples) {
    const pair = `${entry.form}|${example.word}`;
    if (REVIEWED_EXEMPT.has(pair)) usedExemptions.add(pair);
  }
}
for (const pair of REVIEWED_EXEMPT) {
  if (!usedExemptions.has(pair)) {
    throw new Error(`REVIEWED_EXEMPT lists "${pair}" but no entry carries that exact form and word`);
  }
}

// The same staleness rule for the reviewed overlaps.
const usedShares = new Set();
for (const entry of entries) {
  for (const example of entry.examples) {
    const pair = `${entry.form}|${example.word}`;
    if (REVIEWED_SHARED.has(pair)) usedShares.add(pair);
  }
}
for (const pair of REVIEWED_SHARED) {
  if (!usedShares.has(pair)) {
    throw new Error(`REVIEWED_SHARED lists "${pair}" but no entry carries that exact form and word`);
  }
}

// A variant shared across classes makes lookup ambiguous unless the attachment
// sides differ, as they do for the prefix `en-` and the suffix `-en`.
const owners = new Map();
for (const entry of entries) {
  for (const { key, side } of attachmentParts(entry.form)) {
    const previous = owners.get(key);
    if (previous === undefined) {
      owners.set(key, { form: entry.form, kind: entry.kind, side });
      continue;
    }
    const ambiguous = previous.kind !== entry.kind
      && (previous.side === 'neutral' || side === 'neutral' || previous.side === side);
    if (ambiguous) {
      throw new Error(`ambiguous cross-kind form "${key}": ${previous.form} (${previous.kind}) vs ${entry.form} (${entry.kind})`);
    }
  }
}

// ---------------------------------------------------------------- emit

const counts = Object.fromEntries(KINDS.map((kind) => [kind, entries.filter((entry) => entry.kind === kind).length]));
const levels = LEVEL_ORDER.filter((level) => entries.some((entry) => entry.level === level));
const words = entries.reduce((total, entry) => total + entry.examples.length, 0);
const payload = { version: 2, counts: { ...counts, total: entries.length }, levels, morphemes: entries };

const banner = [
  '// GENERATED FILE — edit src/morphemes.json and run `node build.mjs`.',
  `// ${counts.root} roots, ${counts.prefix} prefixes, ${counts.suffix} suffixes; ${words} example words.`,
  '',
].join('\n');

writeFileSync(
  join(here, 'data.js'),
  `${banner}export const MORPHEME_DATA = ${JSON.stringify(payload, null, 2)};\n`,
  'utf8',
);

const templatePath = join(here, 'src', 'client.template.js');
const template = readFileSync(templatePath, 'utf8');
const marker = '/* @morpheme-data */ null';
const hits = template.split(marker).length - 1;
if (hits !== 1) {
  throw new Error(`src/client.template.js must contain "${marker}" exactly once, found ${hits}`);
}
const clientOutput = [
  '// GENERATED FILE — edit src/client.template.js and run `node build.mjs`.',
  `// ${counts.root} roots, ${counts.prefix} prefixes, ${counts.suffix} suffixes; ${words} example words.`,
  '',
  // A function replacement keeps `$&`-style sequences in the payload literal.
  template.replace(marker, () => JSON.stringify(payload)),
].join('\n');

// The browser half is one script that the module loader evaluates as-is, so a stray
// backtick inside the stylesheet template literal — a CSS comment is the easy place to
// leave one — breaks the whole panel with a syntax error no test of the data would see.
// Parsing the emitted artifact here turns that into a build failure instead.
try {
  new Script(clientOutput, { filename: 'client.js' });
} catch (error) {
  throw new Error(`generated client.js does not parse: ${error.message}`);
}

writeFileSync(join(here, 'client.js'), clientOutput, 'utf8');

const summary = KINDS.map((kind) => `${counts[kind]} ${kind}`).join(', ');
const perEntry = new Set(entries.map((entry) => entry.examples.length));
console.log(`generated data.js and client.js (${summary}; ${entries.length} entries, ${words} example words, levels: ${levels.join(', ')})`);
console.log(`examples per entry: ${[...perEntry].sort((left, right) => left - right).join('/')} `
  + `(minimum ${MIN_EXAMPLES_PER_ENTRY}); reviewed exemptions: ${REVIEWED_EXEMPT.size}`);
