/**
 * Host half of the English-roots bundle.
 *
 * Owns the morpheme dictionary (roots, prefixes, suffixes) and exposes it to the
 * agent as one tool, `english_roots`. The browser half (`client.js`) renders the
 * same dictionary as a panel; it ships its own copy generated from the same
 * `src/morphemes.json` source, because the two halves run in different processes.
 *
 * This file imports nothing from the Harness. A bundle installed from a workspace
 * directory resolves its bare specifiers from its own location, not from the dsh
 * installation, so `@deepseek-ai/dsh-tools` (`defineTool`) is unavailable here. The
 * tool is therefore registered in the registry-ready form `ctx.tools.register`
 * accepts directly, with the raw JSON Schema subset the registry enforces. The
 * schemas below are written exactly as `defineTool`'s author DSL would compile them:
 * `required` is a top-level array on objects, never a per-property flag.
 */
import { MORPHEME_DATA } from './data.js';

/** Level names in learning order, used by `list` and the level filter. */
const LEVEL_ORDER = ['基础', '进阶', '高级', '高阶'];

/** Morpheme classes. `root` covers any position-neutral stem. */
const KIND_ORDER = ['root', 'prefix', 'suffix'];

/** Chinese noun for each class, used in question and result wording. */
const KIND_NOUN = { root: '词根', prefix: '前缀', suffix: '后缀' };

/** Hard bound on how much a single tool result puts into the transcript. */
const MAX_RESULT_MORPHEMES = 60;

/** How many ranked candidates a failed `lookup` offers instead. */
const MAX_LOOKUP_FALLBACK = 8;

const MORPHEMES = MORPHEME_DATA.morphemes;

/**
 * Split one display form into its lookup variants with their attachment side.
 * A trailing hyphen marks a prefix (`en-`), a leading one a suffix (`-en`), and
 * neither marks a position-neutral form such as a stem (`spect / spic`).
 * Full-width parentheses are separators too, so `dict（jud）` answers to `jud`.
 *
 * The browser half carries its own copy of this function; keep the two in step.
 * @param form - the entry's display form.
 * @returns lookup variants with hyphen- and case-normalized keys.
 */
function variantForms(form) {
  return String(form ?? '')
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

/** Exact display label (case-insensitive) to its entries. */
const BY_LABEL = new Map();
/** Normalized variant to the entries carrying it. */
const BY_VARIANT = new Map();
for (const entry of MORPHEMES) {
  BY_LABEL.set(entry.form.toLowerCase(), entry);
  for (const { key } of variantForms(entry.form)) {
    const list = BY_VARIANT.get(key);
    if (list === undefined) BY_VARIANT.set(key, [entry]);
    else list.push(entry);
  }
}

/**
 * Resolve one user-supplied morpheme.
 *
 * An exact display label wins outright; otherwise every entry carrying a matching
 * variant is returned, so an ambiguous spelling such as `en` answers with both the
 * prefix `en- / em-` and the suffix `-en` instead of silently picking one.
 * @param query - exact label, one of its variants, or any case or hyphen variant.
 * @returns matching entries, in declaration order.
 */
function findMorphemes(query) {
  const raw = String(query ?? '').trim();
  if (raw.length === 0) return [];
  const exact = BY_LABEL.get(raw.toLowerCase());
  if (exact !== undefined) return [exact];
  const found = [];
  const seen = new Set();
  for (const { key } of variantForms(raw)) {
    for (const entry of BY_VARIANT.get(key) ?? []) {
      if (seen.has(entry)) continue;
      seen.add(entry);
      found.push(entry);
    }
  }
  return found;
}

/** The first variant of a form, used for relevance scoring: `re- / ri-` → `re`. */
function primaryForm(form) {
  return variantForms(form)[0]?.key ?? String(form ?? '').toLowerCase();
}

/**
 * Rank a morpheme against a free-text query across form, meaning, origin, words, notes.
 * @param entry - candidate entry.
 * @param query - normalized query.
 * @returns 0 when the entry does not match, higher is a better match.
 */
function scoreMorpheme(entry, query) {
  let score = 0;
  const formText = entry.form.toLowerCase();
  if (primaryForm(entry.form).startsWith(query)) score += 100;
  else if (formText.includes(query)) score += 60;
  if (entry.meaning.includes(query)) score += 40;
  if (entry.meaningEn.toLowerCase().includes(query)) score += 30;
  if (entry.origin.toLowerCase().includes(query)) score += 10;
  if (entry.note.includes(query)) score += 5;
  for (const example of entry.examples) {
    if (example.word.toLowerCase().startsWith(query)) score += 25;
    else if (example.word.toLowerCase().includes(query)) score += 15;
    if (example.meaning.includes(query)) score += 8;
  }
  return score;
}

/**
 * Every morpheme that matches, most relevant first, in class then learning-level order.
 * @param query - free text; empty matches every entry.
 * @param kind - optional class filter.
 * @param level - optional level filter.
 * @returns matching entries; the caller bounds how many it consumes.
 */
function rankMorphemes(query, kind, level) {
  const pool = MORPHEMES.filter((entry) => (kind === undefined || entry.kind === kind)
    && (level === undefined || entry.level === level));
  const normalized = String(query ?? '').trim().toLowerCase();
  const ranked = normalized.length === 0
    ? pool.map((entry) => ({ entry, score: 0 }))
    : pool
      .map((entry) => ({ entry, score: scoreMorpheme(entry, normalized) }))
      .filter((row) => row.score > 0);
  ranked.sort((left, right) => {
    const byKind = KIND_ORDER.indexOf(left.entry.kind) - KIND_ORDER.indexOf(right.entry.kind);
    if (byKind !== 0) return byKind;
    const byLevel = LEVEL_ORDER.indexOf(left.entry.level) - LEVEL_ORDER.indexOf(right.entry.level);
    if (byLevel !== 0) return byLevel;
    if (right.score !== left.score) return right.score - left.score;
    return left.entry.form.localeCompare(right.entry.form);
  });
  return ranked.map((row) => row.entry);
}

/**
 * Search the dictionary.
 * @param query - free text; empty returns everything in class and level order.
 * @param opts - class filter, level filter, and result bound.
 * @returns matching entries, most relevant first.
 */
function searchMorphemes(query, opts = {}) {
  const { kind, level, limit = MAX_RESULT_MORPHEMES } = opts;
  const ranked = rankMorphemes(query, kind, level);
  return { entries: ranked.slice(0, limit), total: ranked.length };
}

/** Project one entry onto the tool-facing shape. */
function project(entry) {
  return {
    form: entry.form,
    kind: entry.kind,
    meaning: entry.meaning,
    origin: entry.origin,
    level: entry.level,
    words: entry.examples.map((example) => `${example.word}（${example.pos} ${example.meaning}）`),
  };
}

/**
 * Build one multiple-choice question. Candidate entries are drawn until four distinct
 * example words are available, because different morphemes may share an example word.
 * @param entries - the pool the question draws from.
 * @returns a question, or undefined when the pool is too small.
 */
function buildQuestion(entries) {
  const pool = entries.length >= 4 ? entries : MORPHEMES;
  if (pool.length < 4) return undefined;

  const chosen = [];
  const usedIndexes = new Set();
  const usedWords = new Set();
  let guard = 0;
  while (chosen.length < 4 && guard < 400) {
    guard += 1;
    const index = Math.floor(Math.random() * pool.length);
    if (usedIndexes.has(index)) continue;
    const entry = pool[index];
    const answerWord = entry.examples[0].word;
    if (usedWords.has(answerWord)) continue;
    usedIndexes.add(index);
    usedWords.add(answerWord);
    chosen.push({ entry, answerWord });
  }
  if (chosen.length < 4) return undefined;

  const answerIndex = Math.floor(Math.random() * chosen.length);
  const answer = chosen[answerIndex];
  const options = [answer.answerWord, ...chosen
    .filter((candidate) => candidate !== answer)
    .map((candidate) => candidate.answerWord)];
  // Shuffle the words so the answer is not always first.
  for (let index = options.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(Math.random() * (index + 1));
    [options[index], options[swap]] = [options[swap], options[index]];
  }
  const noun = KIND_NOUN[answer.entry.kind];
  return {
    question: `下列哪个单词含有${noun} ${answer.entry.form}（${answer.entry.meaning}）？`,
    options,
    answer: `${answer.entry.form} → ${answer.answerWord}`,
    explanation: `${answer.answerWord}（${answer.entry.examples[0].pos} ${answer.entry.examples[0].meaning}）含有${noun} ${answer.entry.form}，意为「${answer.entry.meaning}」，源自${answer.entry.origin}。`,
  };
}

/**
 * Render the tool result for the transcript.
 * @param value - the structured tool value.
 * @returns one text block.
 */
function renderResult(value) {
  const lines = [];
  if (value.kind === 'quiz') {
    lines.push(value.question.question, '');
    value.question.options.forEach((option, index) => {
      lines.push(`${String.fromCharCode(65 + index)}. ${option}`);
    });
    lines.push('', `（答案：${value.question.answer}）`, value.question.explanation);
    return lines.join('\n');
  }
  if (value.kind === 'lookup' && value.morphemes.length === 1) {
    const [entry] = value.morphemes;
    lines.push(`${entry.form} — ${entry.meaning}（${entry.origin}，${KIND_NOUN[entry.kind]}，${entry.level}）`, '');
    const source = MORPHEMES.find((candidate) => candidate.kind === entry.kind && candidate.form === entry.form);
    if (source !== undefined) lines.push(source.note, '');
    for (const word of entry.words) lines.push(`- ${word}`);
    return lines.join('\n');
  }
  lines.push(`匹配 ${value.total} 个词素，显示 ${value.morphemes.length} 个：`, '');
  for (const entry of value.morphemes) {
    lines.push(`${entry.form}（${KIND_NOUN[entry.kind]}）— ${entry.meaning}（${entry.level}）：${entry.words.join('，')}`);
  }
  return lines.join('\n');
}

/**
 * Model-facing parameter schema, in the raw JSON Schema subset the tool registry
 * enforces: `type`/`properties`/`required`/`items`/`enum` plus annotations.
 */
const PARAMETERS = {
  type: 'object',
  properties: {
    action: {
      type: 'string',
      enum: ['list', 'lookup', 'search', 'quiz'],
      description: 'list = 按类别与难度浏览全部词素；lookup = 查询一个指定词根/前缀/后缀；search = 用关键词搜索；quiz = 出一道选择题。',
    },
    query: {
      type: 'string',
      description: 'lookup 的词素（如 spect、dict、re-、-tion），或 search 的关键词（中文含义、英文单词片段均可）。',
    },
    kind: {
      type: 'string',
      enum: [...KIND_ORDER],
      description: '限定类别：root=词根 / prefix=前缀 / suffix=后缀。list / search / quiz 可用。',
    },
    level: {
      type: 'string',
      enum: [...LEVEL_ORDER],
      description: '限定难度：基础 / 进阶 / 高级 / 高阶。list 与 search 可用。',
    },
    limit: {
      type: 'integer',
      description: `最多返回多少条，默认 ${MAX_RESULT_MORPHEMES}，上限 ${MAX_RESULT_MORPHEMES}。`,
    },
  },
  required: ['action'],
};

/** Output declaration: the registry validates every returned value against this. */
const OUTPUT_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    kind: { type: 'string' },
    total: { type: 'integer' },
    morphemes: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          form: { type: 'string' },
          kind: { type: 'string', enum: [...KIND_ORDER] },
          meaning: { type: 'string' },
          origin: { type: 'string' },
          level: { type: 'string' },
          words: { type: 'array', items: { type: 'string' } },
        },
        required: ['form', 'kind', 'meaning', 'origin', 'level', 'words'],
      },
    },
    question: {
      type: 'object',
      additionalProperties: false,
      properties: {
        question: { type: 'string' },
        options: { type: 'array', items: { type: 'string' } },
        answer: { type: 'string' },
        explanation: { type: 'string' },
      },
      required: ['question', 'options', 'answer', 'explanation'],
    },
  },
  required: ['kind', 'total', 'morphemes'],
};

/**
 * Run one tool action.
 * @param args - raw tool arguments, however malformed.
 * @returns the structured result value.
 */
function run(args) {
  const action = typeof args?.action === 'string' ? args.action : 'list';
  const level = LEVEL_ORDER.includes(args?.level) ? args.level : undefined;
  const kind = KIND_ORDER.includes(args?.kind) ? args.kind : undefined;
  const limit = Number.isInteger(args?.limit)
    ? Math.max(1, Math.min(MAX_RESULT_MORPHEMES, args.limit))
    : MAX_RESULT_MORPHEMES;

  if (action === 'lookup') {
    const query = typeof args?.query === 'string' ? args.query.trim() : '';
    if (query.length === 0) return { kind: 'lookup', total: 0, morphemes: [] };
    const entries = findMorphemes(query);
    if (entries.length === 0) {
      const ranked = rankMorphemes(query, kind, level).slice(0, MAX_LOOKUP_FALLBACK);
      return { kind: 'lookup', total: ranked.length, morphemes: ranked.map(project) };
    }
    return { kind: 'lookup', total: entries.length, morphemes: entries.map(project) };
  }

  if (action === 'quiz') {
    const pool = MORPHEMES.filter((entry) => (kind === undefined || entry.kind === kind)
      && (level === undefined || entry.level === level));
    const question = buildQuestion(pool);
    if (question === undefined) throw new Error('题库不足，无法生成练习题');
    return { kind: 'quiz', total: 1, morphemes: [], question };
  }

  const query = action === 'search' && typeof args?.query === 'string' ? args.query : '';
  const { entries, total } = searchMorphemes(query, { kind, level, limit });
  return { kind: action === 'search' ? 'search' : 'list', total, morphemes: entries.map(project) };
}

/** Host plugin body: registers the dictionary tool on the calling context. */
export function apply(ctx) {
  ctx.tools.register({
    name: 'english_roots',
    description: [
      '查英语词根词缀词典：给出词根、前缀或后缀的来源、中文含义和例词。',
      'action=list 按类别与难度浏览（可选 kind / level）；action=lookup 精确查询一个词素（query，可给变体如 spect 或 spic，也可给 re- 或 -tion）；',
      'action=search 用关键词搜索（中文含义、英文单词片段都行）；action=quiz 返回一道四选一练习题（可选 kind / level）。',
      `词库共 ${MORPHEME_DATA.counts.root} 个词根、${MORPHEME_DATA.counts.prefix} 个前缀、${MORPHEME_DATA.counts.suffix} 个后缀，覆盖 ${LEVEL_ORDER.join(' / ')} 四档。`,
    ].join(''),
    parameters: PARAMETERS,
    output: {
      schema: OUTPUT_SCHEMA,
      render: (_args, value) => [{ type: 'text', text: renderResult(value) }],
    },
    timeoutMs: 10_000,
    isConcurrencySafe: () => true,
    execute(args) {
      return run(args);
    },
  });
}

/** Required Host services. */
export const inject = ['tools'];
