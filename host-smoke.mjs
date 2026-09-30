// Offline test for the generated Host half (`index.js` + `data.js`).
//
// The Host half is deliberately import-free (see its header), so plain Node can
// load it: this test registers the tool against a fake `tools` service and runs
// every action, checking each value against the tool's own output schema.
//
//   node host-smoke.mjs
import { readFileSync } from 'node:fs';
import { apply, inject } from './index.js';

const KINDS = ['root', 'prefix', 'suffix'];
const KIND_NOUN = { root: '词根', prefix: '前缀', suffix: '后缀' };
const LEVELS = ['基础', '进阶', '高级', '高阶'];
const EXPECTED_COUNTS = { root: 110, prefix: 48, suffix: 40, total: 198 };

function fail(message) {
  throw new Error(`index.js: ${message}`);
}

// A workspace bundle cannot resolve '@deepseek-ai/*', so a bare import here would
// make the whole entry fail to activate in the running Host.
for (const file of ['index.js', 'data.js']) {
  const source = readFileSync(new URL(`./${file}`, import.meta.url), 'utf8');
  for (const line of source.split('\n')) {
    if (/^\s*(import|export)\s[^;]*\bfrom\s+['"]@/u.test(line)) {
      fail(`${file} imports a bare Harness specifier: ${line.trim()}`);
    }
  }
}

// ------------------------------------------------------- raw schema checker

/** Validate a value against the raw JSON Schema subset the tool registry allows. */
function checkSchema(schema, value, path, violations) {
  if (schema.enum !== undefined && !schema.enum.includes(value)) {
    violations.push(`${path}: ${JSON.stringify(value)} is not one of ${schema.enum.join(', ')}`);
    return;
  }
  switch (schema.type) {
    case 'object': {
      if (typeof value !== 'object' || value === null || Array.isArray(value)) {
        violations.push(`${path}: expected object, got ${JSON.stringify(value)}`);
        return;
      }
      for (const key of schema.required ?? []) {
        if (!Object.hasOwn(value, key)) violations.push(`${path}.${key}: required and missing`);
      }
      for (const [key, child] of Object.entries(value)) {
        const property = schema.properties?.[key];
        if (property === undefined) {
          if (schema.additionalProperties === false) violations.push(`${path}.${key}: undeclared property`);
          continue;
        }
        checkSchema(property, child, `${path}.${key}`, violations);
      }
      return;
    }
    case 'array': {
      if (!Array.isArray(value)) {
        violations.push(`${path}: expected array, got ${JSON.stringify(value)}`);
        return;
      }
      value.forEach((item, index) => checkSchema(schema.items, item, `${path}[${index}]`, violations));
      return;
    }
    case 'string':
      if (typeof value !== 'string') violations.push(`${path}: expected string`);
      return;
    case 'integer':
      if (!Number.isInteger(value)) violations.push(`${path}: expected integer`);
      return;
    default:
      violations.push(`${path}: unsupported schema type ${JSON.stringify(schema.type)}`);
  }
}

// ------------------------------------------------------------ registration

if (!Array.isArray(inject) || !inject.includes('tools')) fail(`inject is ${JSON.stringify(inject)}`);

let tool;
apply({ tools: { register(definition) { tool = definition; } } });
if (tool === undefined) fail('apply() registered no tool');
if (tool.name !== 'english_roots') fail(`tool name is ${JSON.stringify(tool.name)}`);
if (typeof tool.execute !== 'function') fail('tool has no execute()');
if (typeof tool.output?.render !== 'function') fail('tool has no output.render()');
if (typeof tool.isConcurrencySafe !== 'function') fail('tool has no isConcurrencySafe()');
if (tool.isConcurrencySafe({}) !== true) fail('isConcurrencySafe() must accept any arguments');
if (!(tool.timeoutMs > 0)) fail('tool has no positive timeoutMs');
if (tool.parameters.type !== 'object') fail('parameters must be object-rooted');
if (tool.parameters.required?.includes('action') !== true) fail('parameters must require action');
if (tool.parameters.properties.kind?.enum?.join(',') !== KINDS.join(',')) {
  fail(`parameters.kind enum is ${JSON.stringify(tool.parameters.properties.kind?.enum)}`);
}
if (tool.output.schema.type !== 'object') fail('output.schema must be object-rooted');
if (!tool.description.includes('前缀') || !tool.description.includes('后缀')) {
  fail('tool description must mention prefixes and suffixes');
}

for (const [label, schema, value] of [
  ['parameters', tool.parameters, { action: 'list' }],
  ['output.schema', tool.output.schema, { kind: 'list', total: 0, morphemes: [] }],
]) {
  const violations = [];
  checkSchema(schema, value, label, violations);
  if (violations.length > 0) fail(`${label} fixture: ${violations.join('; ')}`);
}

/** Run one action and assert its value and rendered content satisfy the contract. */
function call(args) {
  const value = tool.execute(args);
  const violations = [];
  checkSchema(tool.output.schema, value, 'value', violations);
  if (violations.length > 0) fail(`${JSON.stringify(args)}: ${violations.join('; ')}`);
  const content = tool.output.render(args, value);
  if (!Array.isArray(content) || content.length === 0) fail(`${JSON.stringify(args)}: empty content`);
  for (const block of content) {
    if (block.type !== 'text' || typeof block.text !== 'string'
      || block.text.length === 0) fail(`${JSON.stringify(args)}: bad content block`);
  }
  return { value, text: content.map((block) => block.text).join('\n') };
}

// ------------------------------------------------------------------- list

const list = call({ action: 'list' }).value;
if (list.kind !== 'list' || list.total !== EXPECTED_COUNTS.total || list.morphemes.length !== 60) {
  fail(`list returned kind=${list.kind} total=${list.total} morphemes=${list.morphemes.length}`);
}
for (const kind of KINDS) {
  const filtered = call({ action: 'list', kind }).value;
  if (filtered.total !== EXPECTED_COUNTS[kind]) {
    fail(`list kind=${kind} returned total=${filtered.total}, expected ${EXPECTED_COUNTS[kind]}`);
  }
  if (filtered.morphemes.some((entry) => entry.kind !== kind)) {
    fail(`list kind=${kind} leaked another class`);
  }
}
for (const level of LEVELS) {
  const filtered = call({ action: 'list', level, kind: 'prefix' }).value;
  if (filtered.total === 0) fail(`list prefix/${level} is empty`);
  if (filtered.morphemes.some((entry) => entry.level !== level)) {
    fail(`list level=${level} leaked another level`);
  }
}
if (call({ action: 'list', limit: 3 }).value.morphemes.length !== 3) fail('list ignored limit');
if (call({ action: 'list', limit: 9999 }).value.morphemes.length > 60) fail('list exceeded its bound');

// ----------------------------------------------------------------- lookup

for (const [query, expected] of [
  ['spect', 'spect / spic'],
  ['spic', 'spect / spic'],
  ['SPECT', 'spect / spic'],
  [' spect ', 'spect / spic'],
  ['re', 're-'],
  ['re-', 're-'],
  ['RE', 're-'],
  ['-tion', '-tion / -sion'],
  ['tion', '-tion / -sion'],
  ['jud', 'dict（jud）'],
  ['-logy', '-logy / -log'],
]) {
  const found = call({ action: 'lookup', query }).value;
  if (found.total !== 1 || found.morphemes[0].form !== expected) {
    fail(`lookup ${JSON.stringify(query)} returned ${JSON.stringify(found.morphemes.map((entry) => entry.form))}, expected ${expected}`);
  }
}
if (call({ action: 'lookup', query: 're-' }).value.morphemes[0].kind !== 'prefix') {
  fail('lookup re- must report kind=prefix');
}
// `en-` and `-en` are different morphemes that share a spelling: the bare query
// must answer with both rather than silently picking one.
const ambiguous = call({ action: 'lookup', query: 'en' }).value;
if (ambiguous.total !== 2) fail(`lookup en returned ${ambiguous.total} entries, expected 2`);
if (ambiguous.morphemes.map((entry) => entry.form).sort().join('|') !== '-en|en- / em-') {
  fail(`lookup en returned ${JSON.stringify(ambiguous.morphemes.map((entry) => entry.form))}`);
}
const missing = call({ action: 'lookup', query: 'zzzznope' }).value;
if (missing.total !== 0 || missing.morphemes.length !== 0) fail('lookup must not invent an entry');
if (call({ action: 'lookup' }).value.total !== 0) fail('lookup without query must be empty');

// ----------------------------------------------------------------- search

if (call({ action: 'search', query: '看' }).value.total === 0) fail('search 看 found nothing');
if (call({ action: 'search', query: 'visible' }).value.total === 0) fail('search visible found nothing');
const searchedPrefixes = call({ action: 'search', query: '不', kind: 'prefix' }).value;
if (searchedPrefixes.total === 0) fail('search 不 kind=prefix found nothing');
if (searchedPrefixes.morphemes.some((entry) => entry.kind !== 'prefix')) {
  fail('search kind=prefix leaked another class');
}

// ------------------------------------------------------------------- quiz

for (const kind of KINDS) {
  for (const level of LEVELS) {
    for (let round = 0; round < 100; round += 1) {
      const quiz = call({ action: 'quiz', kind, level }).value;
      const { question, options, answer } = quiz.question;
      if (options.length !== 4) fail(`${kind}/${level} quiz options length ${options.length}`);
      if (new Set(options).size !== 4) fail(`${kind}/${level} quiz options are not distinct`);
      const word = answer.split(' → ')[1];
      if (!options.includes(word)) fail(`${kind}/${level} quiz answer ${word} is not among the options`);
      if (!question.includes(KIND_NOUN[kind])) {
        fail(`${kind}/${level} quiz wording is not about a ${KIND_NOUN[kind]}: ${question}`);
      }
      if (!question.includes(answer.split(' → ')[0])) {
        fail(`${kind}/${level} quiz question does not name the form`);
      }
    }
  }
}
// An unfiltered quiz mixes classes and still words the question for the answer.
const mixed = call({ action: 'quiz' }).value;
if (!KINDS.some((kind) => mixed.question.question.includes(KIND_NOUN[kind]))) {
  fail('mixed quiz wording names no class');
}

// Malformed arguments must stay inside the contract rather than throw.
for (const args of [undefined, null, {}, { action: 'nope' }, { action: 5 }, { action: 'list', limit: 'x' },
  { action: 'list', limit: 0 }, { action: 'list', kind: 'nope' }, { action: 'list', level: 'nope' },
  { action: 'search', query: 5 }, { action: 'lookup', query: null }, { action: 'quiz', kind: 7 }]) {
  call(args ?? {});
}

console.log(`list=${list.total} entries (${KINDS.map((kind) => `${kind}:${EXPECTED_COUNTS[kind]}`).join(' ')}), lookup/search ok`);
console.log('quiz ok: 3 classes x 4 levels x 100 rounds');
console.log('host half test passed');
