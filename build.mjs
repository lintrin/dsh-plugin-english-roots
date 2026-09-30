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

const here = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(here, 'src', 'morphemes.json');
const legacyPath = join(here, 'src', 'roots.json');

/** Learning order, also the order `levels` is published in. */
const LEVEL_ORDER = ['基础', '进阶', '高级', '高阶'];
/** Morpheme classes; `root` is the default for a plain stem. */
const KINDS = ['root', 'prefix', 'suffix'];
/** Minimum entries a (kind, level) quiz pool needs to offer four options. */
const MIN_BUCKET = 4;

if (existsSync(legacyPath)) {
  throw new Error('src/roots.json still exists — src/morphemes.json is the only source of truth');
}
const entries = JSON.parse(readFileSync(sourcePath, 'utf8'));

/**
 * Split one display form into its lookup variants with their attachment side.
 * A trailing hyphen marks a prefix (`en-`), a leading one a suffix (`-en`), and
 * neither marks a position-neutral form such as a stem (`spect / spic`).
 * @param form - the entry's display form.
 * @returns lookup variants with hyphen- and case-normalized keys.
 */
function variantForms(form) {
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
    .filter((variant) => variant.key.length > 0);
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
  for (const example of entry.examples) {
    for (const field of ['word', 'pos', 'meaning']) {
      if (typeof example[field] !== 'string' || example[field].length === 0) {
        throw new Error(`example in ${entry.form} is missing ${field}`);
      }
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
  }
}

// A variant shared across classes makes lookup ambiguous unless the attachment
// sides differ, as they do for the prefix `en-` and the suffix `-en`.
const owners = new Map();
for (const entry of entries) {
  for (const { key, side } of variantForms(entry.form)) {
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
writeFileSync(
  join(here, 'client.js'),
  [
    '// GENERATED FILE — edit src/client.template.js and run `node build.mjs`.',
    `// ${counts.root} roots, ${counts.prefix} prefixes, ${counts.suffix} suffixes; ${words} example words.`,
    '',
    // A function replacement keeps `$&`-style sequences in the payload literal.
    template.replace(marker, () => JSON.stringify(payload)),
  ].join('\n'),
  'utf8',
);

const summary = KINDS.map((kind) => `${counts[kind]} ${kind}`).join(', ');
console.log(`generated data.js and client.js (${summary}; ${entries.length} entries, ${words} example words, levels: ${levels.join(', ')})`);
