/**
 * Browser half of the English-roots bundle — AUTHORED TEMPLATE.
 *
 * `build.mjs` copies this file to `client.js` and replaces the `@morpheme-data`
 * marker with the dictionary from `src/morphemes.json`. Edit this file, never
 * `client.js`.
 *
 * The Client module system serves exactly one artifact per plugin (the `./client`
 * export); a sibling script is never fetched, so the dictionary must be inlined
 * here. Only `react` is imported: it is part of the frozen platform module table.
 */
window.__ModuleLoader__.load({
  id: '@local/dsh-plugin-english-roots',
  factory(require) {
    const React = require('react');
    const h = React.createElement;

    // Inlined by build.mjs from src/morphemes.json.
    const MORPHEME_DATA = /* @morpheme-data */ null;
    const morphemes = Array.isArray(MORPHEME_DATA?.morphemes) ? MORPHEME_DATA.morphemes : [];
    const LEVELS = ['基础', '进阶', '高级', '高阶'];
    const KINDS = ['root', 'prefix', 'suffix'];
    /** Display noun per class; the only place the tokens become Chinese. */
    const KIND_LABEL = { root: '词根', prefix: '前缀', suffix: '后缀' };

    /**
     * Split one display form into its lookup variants with their attachment side.
     * A trailing hyphen marks a prefix (`en-`), a leading one a suffix (`-en`),
     * and neither marks a position-neutral stem (`spect / spic`). Full-width
     * parentheses are separators too, so `dict（jud）` answers to `jud`.
     *
     * The Host half carries its own copy of this function; keep the two in step.
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

    const BY_LABEL = new Map();
    const BY_VARIANT = new Map();
    for (const entry of morphemes) {
      BY_LABEL.set(entry.form.toLowerCase(), entry);
      for (const { key } of variantForms(entry.form)) {
        const list = BY_VARIANT.get(key);
        if (list === undefined) BY_VARIANT.set(key, [entry]);
        else list.push(entry);
      }
    }

    /**
     * Resolve one user-supplied morpheme: an exact label wins, otherwise every
     * entry carrying a matching variant, so an ambiguous spelling answers with
     * all of them instead of silently picking one.
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

    /** Free-text search across form, meaning, origin, note, and example words. */
    function searchMorphemes(query, level, kind) {
      const normalized = String(query ?? '').trim().toLowerCase();
      const pool = morphemes.filter((entry) => (level === undefined || level === null || entry.level === level)
        && (kind === undefined || kind === null || entry.kind === kind));
      if (normalized.length === 0) return pool;
      return pool.filter((entry) => {
        if (entry.form.toLowerCase().includes(normalized)) return true;
        if (entry.meaning.includes(normalized)) return true;
        if (entry.meaningEn.toLowerCase().includes(normalized)) return true;
        if (entry.origin.toLowerCase().includes(normalized)) return true;
        if (entry.note.includes(normalized)) return true;
        return entry.examples.some((example) => example.word.toLowerCase().includes(normalized)
          || example.meaning.includes(normalized));
      });
    }

    // Exposed for the offline artifact test (`client-smoke.mjs`) and console debugging.
    window.__ENGLISH_MORPHEMES__ = {
      data: MORPHEME_DATA,
      morphemes,
      counts: MORPHEME_DATA?.counts ?? { total: morphemes.length },
      levels: LEVELS,
      kinds: KINDS,
      kindLabel: KIND_LABEL,
      findMorphemes,
      searchMorphemes,
      variantForms,
    };

    // ------------------------------------------------------------- palette
    //
    // Colour lives in a token layer this panel registers on the host theme
    // service, never as a literal in the stylesheet. `theme.overrideTokens`
    // only validates the value shape (a `{ light, dark }` pair per name) and
    // folds unknown names into the active theme, so the presenter applies them
    // to `body` and re-picks the right value whenever the user switches
    // color scheme. The stylesheet only ever reads `var(--er-…)`.
    //
    // Every hex below is lifted from a light/dark pair the host already ships in
    // its own palette (the static scale and the code-highlight tokens), so the
    // hues belong to the application vocabulary and their contrast was vetted by
    // the host for both schemes.
    const ACCENT_SOURCE = '@local/dsh-plugin-english-roots';
    const ACCENT_TOKENS = {
      '--er-kind-root': { light: '#4176e6', dark: '#7aaaff' },
      '--er-kind-prefix': { light: '#6741d9', dark: '#b197fc' },
      '--er-kind-suffix': { light: '#dd8629', dark: '#f7ad31' },
      '--er-favorite': { light: '#d6336c', dark: '#faa2c1' },
    };
    /** Fallback used by every accent read, so a missing layer degrades, not breaks. */
    const BRAND = 'var(--dsw-alias-brand-primary)';

    /** Per-class accent for the `--er-accent` property an element carries. */
    function accentOf(kind) {
      return `var(--er-kind-${kind}, ${BRAND})`;
    }

    /** Accent for favourites and mastered progress. */
    function favoriteAccent() {
      return `var(--er-favorite, ${BRAND})`;
    }

    // Built here but returned at the very END of this factory: `apply` runs long
    // after the factory returns, so every module-level `const` below (styles,
    // storage key, tab table) must be initialized before the factory exits.
    // Returning early would strand those bindings in their temporal dead zone and
    // make the panel throw on its first render, blanking the shell's main slot.
    const plugin = {
      inject: ['slots'],
      apply(ctx) {
        // The palette is decoration: read the theme service optionally and never
        // let it throw, because a throwing `apply` blanks the shell's main slot.
        // `ctx.effect` gives the layer back when the plugin unloads, so the host
        // is left without orphan body variables.
        ctx.effect(() => {
          const theme = typeof ctx.get === 'function' ? ctx.get('theme') : undefined;
          if (theme === undefined || theme === null || typeof theme.overrideTokens !== 'function') {
            return () => {};
          }
          try {
            return theme.overrideTokens(ACCENT_SOURCE, ACCENT_TOKENS) ?? (() => {});
          } catch (error) {
            if (typeof console !== 'undefined') {
              console.warn('[english-roots] accent tokens unavailable; falling back to brand colour', error);
            }
            return () => {};
          }
        }, 'english-roots: accent tokens');

        // The sidebar row and the central panel share the id `roots`: the sidebar
        // resolves each panellist id against the matching `main` key, so the
        // shell's own button selects the panel and no navigation code lives here.
        ctx.slots.inject('sidebar.panellist', () => ctx.slots.register(
          { name: 'sidebar.panellist', id: 'roots', order: 20, label: '英语词根词缀' },
          RootIcon,
        ));
        ctx.slots.inject('main', () => ctx.slots.register(
          { name: 'main', key: 'roots' },
          RootsPanel,
        ));
      },
    };

    // ---------------------------------------------------------------- styles

    const STYLE_ID = 'english-roots-styles';
    const STYLES = `
.er-root { --er-accent: var(--dsw-alias-brand-primary);
  display: flex; flex-direction: column; height: 100%; min-height: 0;
  background: var(--dsw-alias-bg-base); color: var(--dsw-alias-label-primary);
  font-size: 14px; line-height: 1.55; }
.er-head { display: flex; align-items: center; gap: 12px; flex-wrap: wrap;
  padding: 14px 20px; border-bottom: 1px solid var(--dsw-alias-border-l1);
  background-image: linear-gradient(90deg, var(--er-kind-root, var(--dsw-alias-brand-primary)),
    var(--er-kind-prefix, var(--dsw-alias-brand-primary)), var(--er-kind-suffix, var(--dsw-alias-brand-primary)));
  background-repeat: no-repeat; background-position: bottom left; background-size: 100% 2px; }
.er-title { font-size: 15px; font-weight: 600; margin: 0; }
.er-count { color: var(--dsw-alias-label-secondary); font-size: 12px;
  font-variant-numeric: tabular-nums; }
.er-tabs { display: flex; gap: 4px; margin-left: auto;
  background: var(--dsw-alias-bg-layer-1); border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 8px; padding: 2px; }
.er-tab { appearance: none; border: 0; background: transparent; cursor: pointer;
  color: var(--dsw-alias-label-secondary); font: inherit; font-size: 13px;
  padding: 4px 12px; border-radius: 6px; }
.er-tab:hover { color: var(--dsw-alias-label-primary); }
.er-tab[aria-selected='true'] {
  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 14%, transparent);
  color: var(--dsw-alias-brand-primary); font-weight: 600; }
.er-input { flex: 1 1 220px; min-width: 160px; box-sizing: border-box;
  background: var(--dsw-alias-bg-layer-1); color: var(--dsw-alias-label-primary);
  border: 1px solid var(--dsw-alias-border-l1); border-radius: 8px;
  padding: 7px 11px; font: inherit; }
.er-input::placeholder { color: var(--dsw-alias-label-secondary); }
.er-input:focus { outline: none; border-color: var(--dsw-alias-brand-primary); }
.er-chips { display: flex; gap: 6px; flex-wrap: wrap; align-items: center; }
.er-sep { width: 1px; align-self: stretch; min-height: 16px;
  background: var(--dsw-alias-border-l1); margin: 0 4px; }
.er-chip { appearance: none; cursor: pointer; font: inherit; font-size: 12px;
  padding: 4px 10px; border-radius: 999px; color: var(--dsw-alias-label-secondary);
  background: var(--dsw-alias-bg-layer-1); border: 1px solid var(--dsw-alias-border-l1); }
.er-chip:hover { color: var(--dsw-alias-label-primary); }
.er-chip[aria-pressed='true'] { border-color: var(--er-accent, var(--dsw-alias-brand-primary));
  color: var(--er-accent, var(--dsw-alias-brand-primary));
  background: color-mix(in srgb, var(--er-accent, var(--dsw-alias-brand-primary)) 12%, transparent); }
.er-body { display: flex; flex: 1 1 auto; min-height: 0; }
.er-list { width: 292px; flex: 0 0 auto; overflow-y: auto; padding: 8px;
  border-right: 1px solid var(--dsw-alias-border-l1); }
.er-row { display: flex; align-items: baseline; gap: 8px; width: 100%;
  text-align: left; appearance: none; cursor: pointer; font: inherit;
  border: 1px solid transparent; border-left: 2px solid transparent;
  background: transparent; border-radius: 8px;
  padding: 8px 10px; color: inherit; }
.er-row:hover {
  background: color-mix(in srgb, var(--er-accent, var(--dsw-alias-brand-primary)) 7%, transparent); }
.er-row[aria-current='true'] {
  background: color-mix(in srgb, var(--er-accent, var(--dsw-alias-brand-primary)) 11%, transparent);
  border-color: var(--dsw-alias-border-l2);
  border-left-color: var(--er-accent, var(--dsw-alias-brand-primary)); }
.er-row-root { font-weight: 600; }
.er-row-meaning { color: var(--dsw-alias-label-secondary); font-size: 12.5px;
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.er-row-kind { margin-left: auto; height: 18px; font-size: 10px; line-height: 16px;
  color: var(--er-accent, var(--dsw-alias-brand-primary));
  border: 1px solid color-mix(in srgb, var(--er-accent, var(--dsw-alias-brand-primary)) 45%, transparent);
  background: color-mix(in srgb, var(--er-accent, var(--dsw-alias-brand-primary)) 10%, transparent);
  border-radius: 999px; padding: 0 7px; }
.er-row-level { height: 18px; font-size: 10px; line-height: 16px;
  color: var(--dsw-alias-label-secondary);
  border: 1px solid var(--dsw-alias-border-l1); border-radius: 999px; padding: 0 7px; }
.er-detail { flex: 1 1 auto; overflow-y: auto; padding: 20px 24px 40px; min-width: 0; }
.er-detail-head { display: flex; align-items: baseline; gap: 12px; flex-wrap: wrap;
  padding-left: 12px; border-left: 3px solid var(--er-accent, var(--dsw-alias-brand-primary)); }
.er-detail-root { font-size: 26px; font-weight: 700; letter-spacing: 0.5px; }
.er-detail-meaning { font-size: 16px; }
.er-detail-en { color: var(--dsw-alias-label-secondary); font-size: 13px; }
.er-actions { display: flex; gap: 8px; margin: 14px 0 18px; flex-wrap: wrap; }
.er-btn { appearance: none; cursor: pointer; font: inherit; font-size: 13px;
  padding: 5px 12px; border-radius: 8px; color: var(--dsw-alias-label-primary);
  background: var(--dsw-alias-bg-layer-1); border: 1px solid var(--dsw-alias-border-l1); }
.er-btn:hover { border-color: var(--dsw-alias-border-l2); }
.er-btn[aria-pressed='true'] { border-color: var(--er-accent, var(--dsw-alias-brand-primary));
  color: var(--er-accent, var(--dsw-alias-brand-primary));
  background: color-mix(in srgb, var(--er-accent, var(--dsw-alias-brand-primary)) 12%, transparent); }
.er-meta { display: grid; grid-template-columns: 64px 1fr; gap: 4px 12px;
  margin: 0 0 16px; font-size: 13px; }
.er-meta dt { color: var(--dsw-alias-label-secondary); }
.er-meta dd { margin: 0; }
.er-note { background: color-mix(in srgb, var(--er-accent, var(--dsw-alias-brand-primary)) 7%,
    var(--dsw-alias-bg-layer-1));
  border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 10px; padding: 10px 14px; color: var(--dsw-alias-label-secondary);
  margin: 0 0 18px; }
.er-section { font-size: 12px; font-weight: 600; text-transform: uppercase;
  letter-spacing: 0.6px; color: var(--dsw-alias-label-secondary); margin: 0 0 8px; }
.er-words { list-style: none; margin: 0; padding: 0; border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 10px; overflow: hidden; }
.er-word { display: flex; align-items: baseline; gap: 10px; padding: 9px 14px;
  border-top: 1px solid var(--dsw-alias-border-l1); }
.er-word:first-child { border-top: 0; }
.er-word-text { font-weight: 600; min-width: 132px; }
.er-word-pos { color: var(--dsw-alias-label-secondary); font-size: 12px; }
.er-word-meaning { color: var(--dsw-alias-label-primary); }
.er-empty { color: var(--dsw-alias-label-secondary); padding: 40px 24px; text-align: center; }
.er-practice { flex: 1 1 auto; overflow-y: auto; padding: 24px; }
.er-card { max-width: 680px; margin: 0 auto;
  background: color-mix(in srgb, var(--er-accent, var(--dsw-alias-brand-primary)) 5%,
    var(--dsw-alias-bg-layer-1));
  border: 1px solid var(--dsw-alias-border-l1);
  border-top: 3px solid var(--er-accent, var(--dsw-alias-brand-primary));
  border-radius: 12px; padding: 20px 22px; }
.er-question { font-size: 16px; font-weight: 600; margin: 0 0 6px; }
.er-hint { color: var(--dsw-alias-label-secondary); font-size: 12.5px; margin: 0 0 16px; }
.er-options { display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px; }
.er-option { display: flex; align-items: center; gap: 10px; text-align: left;
  appearance: none; cursor: pointer; font: inherit; color: inherit;
  background: var(--dsw-alias-bg-layer-2); border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 9px; padding: 10px 14px; }
.er-option:hover:enabled {
  border-color: color-mix(in srgb, var(--dsw-alias-brand-primary) 45%, transparent); }
.er-option:disabled { cursor: default; }
.er-option[data-state='right'] { border-color: var(--dsw-alias-state-success-primary);
  color: var(--dsw-alias-state-success-primary);
  background: color-mix(in srgb, var(--dsw-alias-state-success-primary) 10%, transparent); }
.er-option[data-state='wrong'] { border-color: var(--dsw-alias-state-error-primary);
  color: var(--dsw-alias-state-error-primary);
  background: color-mix(in srgb, var(--dsw-alias-state-error-primary) 10%, transparent); }
.er-option-key { color: var(--dsw-alias-label-secondary); font-size: 12px; min-width: 14px; }
.er-feedback { border-radius: 9px; padding: 10px 14px; margin-bottom: 16px;
  background: var(--dsw-alias-bg-layer-2); border: 1px solid var(--dsw-alias-border-l1); }
.er-feedback-good {
  background: color-mix(in srgb, var(--dsw-alias-state-success-primary) 10%, transparent);
  border-color: color-mix(in srgb, var(--dsw-alias-state-success-primary) 40%, transparent); }
.er-feedback-bad {
  background: color-mix(in srgb, var(--dsw-alias-state-error-primary) 10%, transparent);
  border-color: color-mix(in srgb, var(--dsw-alias-state-error-primary) 40%, transparent); }
.er-feedback-title { font-weight: 600; }
.er-feedback-good .er-feedback-title { color: var(--dsw-alias-state-success-primary); }
.er-feedback-bad .er-feedback-title { color: var(--dsw-alias-state-error-primary); }
.er-stats { display: flex; gap: 18px; flex-wrap: wrap; align-items: center;
  color: var(--dsw-alias-label-secondary); font-size: 12.5px; margin-top: 14px;
  font-variant-numeric: tabular-nums; }
.er-stats b { color: var(--dsw-alias-label-primary); font-size: 14px; }
.er-footer { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }
.er-error { padding: 24px; color: var(--dsw-alias-state-error-primary); }
.er-flash { text-align: center; padding: 8px 0 4px; }
.er-flash-label { font-size: 12px; font-weight: 600; letter-spacing: 0.6px;
  text-transform: uppercase; color: var(--er-accent, var(--dsw-alias-brand-primary));
  margin: 0 0 10px; }
.er-flash-root { font-size: 40px; font-weight: 700; letter-spacing: 1px;
  margin: 0 0 6px; word-break: break-word; }
.er-flash-sub { color: var(--dsw-alias-label-secondary); font-size: 13px; margin: 0 0 18px; }
.er-flash-answer { text-align: left; border-top: 1px solid var(--dsw-alias-border-l1);
  padding-top: 16px; margin-bottom: 4px; }
.er-flash-meaning { font-size: 20px; font-weight: 600; margin: 0 0 2px; }
.er-flash-en { color: var(--dsw-alias-label-secondary); font-size: 13px; margin: 0 0 14px; }
.er-bar { height: 6px; border-radius: 999px; background: var(--dsw-alias-bg-layer-2);
  border: 1px solid var(--dsw-alias-border-l1); overflow: hidden; margin-top: 8px; }
.er-bar-fill { height: 100%; background: var(--er-accent, var(--dsw-alias-brand-primary)); }
.er-root * { box-sizing: border-box; }
`;

    /** Insert the stylesheet once per document. */
    function ensureStyles() {
      if (typeof document === 'undefined') return;
      if (document.getElementById(STYLE_ID) !== null) return;
      const node = document.createElement('style');
      node.id = STYLE_ID;
      node.textContent = STYLES;
      document.head.appendChild(node);
    }

    // ---------------------------------------------------------- persistence

    const STORAGE_KEY = 'dsh.english-roots.v1';

    /** Read persisted favorites, mastered forms, and practice totals; never throws. */
    function loadState() {
      const empty = { favorites: [], mastered: [], stats: { attempts: 0, correct: 0 } };
      try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (raw === null) return empty;
        const parsed = JSON.parse(raw);
        const strings = (value) => (Array.isArray(value)
          ? value.filter((item) => typeof item === 'string')
          : []);
        return {
          favorites: strings(parsed?.favorites),
          mastered: strings(parsed?.mastered),
          stats: {
            attempts: Number.isInteger(parsed?.stats?.attempts) ? parsed.stats.attempts : 0,
            correct: Number.isInteger(parsed?.stats?.correct) ? parsed.stats.correct : 0,
          },
        };
      } catch {
        return empty;
      }
    }

    /** Persist favorites, mastered forms, and totals; never throws. */
    function saveState(state) {
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      } catch {
        /* storage may be unavailable; the panel still works for this session */
      }
    }

    // ------------------------------------------------------------ components

    /** Global panel icon: a root glyph with a branch mark. */
    function RootIcon(props) {
      const size = props?.size ?? 16;
      const active = props?.active === true;
      const accent = active ? 'var(--dsw-alias-brand-primary)' : 'currentColor';
      return h('svg', {
        width: size,
        height: size,
        viewBox: '0 0 20 20',
        'aria-hidden': true,
        style: { display: 'block' },
      },
      h('path', {
        d: 'M7.4 2.8v14.4',
        stroke: accent,
        strokeWidth: 1.6,
        strokeLinecap: 'round',
        fill: 'none',
      }),
      h('path', {
        d: 'M7.4 7.4h5.2M7.4 11.4h3.4',
        stroke: 'currentColor',
        strokeWidth: 1.4,
        strokeLinecap: 'round',
        opacity: 0.75,
        fill: 'none',
      }));
    }

    /** Turn a quiz question into one client-side multiple-choice item. */
    function makeQuizItem(level, kind) {
      const pool = morphemes.filter((entry) => (level === undefined || level === null || entry.level === level)
        && (kind === undefined || kind === null || entry.kind === kind));
      const source = pool.length >= 4 ? pool : morphemes;
      if (source.length < 4) return null;
      // Different morphemes may share an example word, so keep drawing until four
      // distinct words are available.
      const chosen = [];
      const usedIndexes = new Set();
      const usedWords = new Set();
      let guard = 0;
      while (chosen.length < 4 && guard < 400) {
        guard += 1;
        const index = Math.floor(Math.random() * source.length);
        if (usedIndexes.has(index)) continue;
        const entry = source[index];
        const answerWord = entry.examples[0].word;
        if (usedWords.has(answerWord)) continue;
        usedIndexes.add(index);
        usedWords.add(answerWord);
        chosen.push({ entry, answerWord });
      }
      if (chosen.length < 4) return null;

      const answerIndex = Math.floor(Math.random() * chosen.length);
      const answer = chosen[answerIndex];
      const options = [answer.answerWord, ...chosen
        .filter((candidate) => candidate !== answer)
        .map((candidate) => candidate.answerWord)];
      for (let index = options.length - 1; index > 0; index -= 1) {
        const swap = Math.floor(Math.random() * (index + 1));
        const held = options[index];
        options[index] = options[swap];
        options[swap] = held;
      }
      const noun = KIND_LABEL[answer.entry.kind];
      return {
        key: `${answer.entry.form}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        question: `哪个单词含有${noun} ${answer.entry.form}？`,
        prompt: `${answer.entry.form} — ${answer.entry.meaning}`,
        options,
        answerWord: answer.answerWord,
        explanation: `${answer.answerWord}（${answer.entry.examples[0].pos} ${answer.entry.examples[0].meaning}）含${noun} ${answer.entry.form}，意为「${answer.entry.meaning}」，源自${answer.entry.origin}。`,
      };
    }

    /** One example-word row. */
    function WordRow(props) {
      const example = props.example;
      return h('li', { className: 'er-word' },
        h('span', { className: 'er-word-text' }, example.word),
        h('span', { className: 'er-word-pos' }, example.pos),
        h('span', { className: 'er-word-meaning' }, example.meaning));
    }

    /** The example-word table shared by the detail and memorize views. */
    function WordList(props) {
      return h(React.Fragment, null,
        h('p', { className: 'er-section' }, `例词 ${props.entry.examples.length}`),
        h('ul', { className: 'er-words' },
          props.entry.examples.map((example) => h(WordRow, { key: example.word, example }))));
    }

    /** Stable per-entry identity inside the panel: the class plus the display form. */
    function keyOf(entry) {
      return `${entry.kind}:${entry.form}`;
    }

    /** Class chip row, shared by all three tabs. `null` means every class. */
    function KindChips(props) {
      const kind = props.kind;
      const onKind = props.onKind;
      return h(React.Fragment, null,
        h('button', {
          type: 'button',
          className: 'er-chip',
          'aria-pressed': kind === null,
          onClick: () => onKind(null),
        }, '全部类别'),
        KINDS.map((token) => h('button', {
          key: token,
          type: 'button',
          className: 'er-chip',
          // Each class chip presses into its own accent, so the row itself shows
          // which colour belongs to which class.
          style: { '--er-accent': accentOf(token) },
          'aria-pressed': kind === token,
          onClick: () => onKind(kind === token ? null : token),
        }, KIND_LABEL[token])));
    }

    /** Level chip row, shared by all three tabs. `null` means every level. */
    function LevelChips(props) {
      const level = props.level;
      const onLevel = props.onLevel;
      return h(React.Fragment, null,
        h('button', {
          type: 'button',
          className: 'er-chip',
          'aria-pressed': level === null,
          onClick: () => onLevel(null),
        }, '全部难度'),
        LEVELS.map((name) => h('button', {
          key: name,
          type: 'button',
          className: 'er-chip',
          'aria-pressed': level === name,
          onClick: () => onLevel(level === name ? null : name),
        }, name)));
    }

    /** Build the memorize deck for one class, level, and scope selection. */
    function buildDeck(kind, level, scope, favorites, mastered) {
      let pool = morphemes.filter((entry) => (kind === null || entry.kind === kind)
        && (level === null || entry.level === level));
      if (scope === 'favorites') pool = pool.filter((entry) => favorites.includes(entry.form));
      if (scope === 'todo') pool = pool.filter((entry) => !mastered.includes(entry.form));
      return pool;
    }

    /** Detail view for one morpheme. */
    function RootDetail(props) {
      const entry = props.entry;
      const favorite = props.favorite;
      const onToggleFavorite = props.onToggleFavorite;
      const onStep = props.onStep;
      // One `--er-accent` on the container colours the class stripe and the note
      // inside it; the favourite button overrides it with the favourite accent.
      return h('div', { className: 'er-detail', style: { '--er-accent': accentOf(entry.kind) } },
        h('div', { className: 'er-detail-head' },
          h('span', { className: 'er-detail-root' }, entry.form),
          h('span', { className: 'er-detail-meaning' }, entry.meaning),
          h('span', { className: 'er-detail-en' }, entry.meaningEn)),
        h('div', { className: 'er-actions' },
          h('button', {
            type: 'button',
            className: 'er-btn',
            style: { '--er-accent': favoriteAccent() },
            'aria-pressed': favorite,
            onClick: onToggleFavorite,
          }, favorite ? '已收藏' : '收藏'),
          h('button', {
            type: 'button',
            className: 'er-btn',
            onClick: () => onStep(-1),
          }, '上一个'),
          h('button', {
            type: 'button',
            className: 'er-btn',
            onClick: () => onStep(1),
          }, '下一个')),
        h('dl', { className: 'er-meta' },
          h('dt', null, '类别'),
          h('dd', null, KIND_LABEL[entry.kind]),
          h('dt', null, '来源'),
          h('dd', null, entry.origin),
          h('dt', null, '难度'),
          h('dd', null, entry.level)),
        h('p', { className: 'er-note' }, entry.note),
        h(WordList, { entry }));
    }

    /** Browse tab: search, class and level filters, list, detail. */
    function BrowseTab(props) {
      const [query, setQuery] = React.useState('');
      const [level, setLevel] = React.useState(null);
      const [kind, setKind] = React.useState(null);
      const [selected, setSelected] = React.useState(morphemes[0] === undefined ? '' : keyOf(morphemes[0]));
      const [favorites, setFavorites] = React.useState(props.favorites);
      const [onlyFavorites, setOnlyFavorites] = React.useState(false);

      const matches = React.useMemo(() => {
        const found = searchMorphemes(query, level, kind);
        return onlyFavorites
          ? found.filter((entry) => favorites.includes(entry.form))
          : found;
      }, [query, level, kind, onlyFavorites, favorites]);

      // Keep the detail pane on a row that is still visible in the list.
      const current = matches.find((entry) => keyOf(entry) === selected) ?? matches[0];

      const toggleFavorite = (form) => {
        const next = favorites.includes(form)
          ? favorites.filter((value) => value !== form)
          : [...favorites, form];
        setFavorites(next);
        props.onFavoritesChange(next);
      };

      const step = (delta) => {
        if (matches.length === 0) return;
        const index = matches.findIndex((entry) => keyOf(entry) === (current === undefined ? '' : keyOf(current)));
        const nextIndex = (index + delta + matches.length) % matches.length;
        setSelected(keyOf(matches[nextIndex]));
      };

      return h(React.Fragment, null,
        h('div', { className: 'er-head' },
          h('input', {
            className: 'er-input',
            type: 'search',
            value: query,
            placeholder: '搜索词根、前缀、后缀、含义或例词，如 spect / re- / -tion / 看',
            'aria-label': '搜索词素、含义或例词',
            onChange: (event) => setQuery(event.target.value),
          }),
          h('div', { className: 'er-chips' },
            h(KindChips, { kind, onKind: setKind }),
            h('span', { className: 'er-sep' }),
            h(LevelChips, { level, onLevel: setLevel }),
            h('span', { className: 'er-sep' }),
            h('button', {
              type: 'button',
              className: 'er-chip',
              style: { '--er-accent': favoriteAccent() },
              'aria-pressed': onlyFavorites,
              onClick: () => setOnlyFavorites(!onlyFavorites),
            }, `收藏 ${favorites.length}`))),
        h('div', { className: 'er-body' },
          h('div', { className: 'er-list', role: 'listbox', 'aria-label': '词素列表' },
            matches.length === 0
              ? h('div', { className: 'er-empty' }, '没有匹配的词素')
              : matches.map((entry) => h('button', {
                key: keyOf(entry),
                type: 'button',
                role: 'option',
                'aria-selected': current !== undefined && keyOf(entry) === keyOf(current),
                'aria-current': current !== undefined && keyOf(entry) === keyOf(current),
                className: 'er-row',
                // The row carries its class accent, so the hover and selected
                // washes, the left stripe and the badge all match that class.
                style: { '--er-accent': accentOf(entry.kind) },
                onClick: () => setSelected(keyOf(entry)),
              },
              h('span', { className: 'er-row-root' }, entry.form),
              h('span', { className: 'er-row-meaning' }, entry.meaning),
              h('span', { className: 'er-row-kind' }, KIND_LABEL[entry.kind]),
              h('span', { className: 'er-row-level' }, entry.level)))),
          current === undefined
            ? h('div', { className: 'er-detail' },
              h('div', { className: 'er-empty' }, '从左侧选择一个词素开始学习'))
            : h(RootDetail, {
              entry: current,
              favorite: favorites.includes(current.form),
              onToggleFavorite: () => toggleFavorite(current.form),
              onStep: step,
            })));
    }

    /** Memorize tab: recall the meaning from the form alone, then self-grade. */
    function MemorizeTab(props) {
      const { favorites, mastered, onMasteredChange } = props;
      const [kind, setKind] = React.useState(null);
      const [level, setLevel] = React.useState(null);
      const [scope, setScope] = React.useState('all');
      const [revealed, setRevealed] = React.useState(false);
      const [current, setCurrent] = React.useState(null);

      const deck = React.useMemo(
        () => buildDeck(kind, level, scope, favorites, mastered),
        [kind, level, scope, favorites, mastered],
      );
      // Follow the deck: keep the pinned entry while it is still in it.
      const entry = deck.find((candidate) => keyOf(candidate) === current) ?? deck[0];

      const advance = () => {
        setRevealed(false);
        if (deck.length <= 1) return;
        const others = deck.filter((candidate) => keyOf(candidate) !== (entry === undefined ? '' : keyOf(entry)));
        setCurrent(keyOf(others[Math.floor(Math.random() * others.length)]));
      };

      const grade = (known) => {
        if (entry === undefined) return;
        const already = mastered.includes(entry.form);
        if (known && !already) onMasteredChange([...mastered, entry.form]);
        if (!known && already) onMasteredChange(mastered.filter((value) => value !== entry.form));
        advance();
      };

      const doneInDeck = deck.filter((candidate) => mastered.includes(candidate.form)).length;
      const ratio = deck.length === 0 ? 0 : doneInDeck / deck.length;

      return h('div', { className: 'er-practice' },
        h('div', {
          className: 'er-card',
          // The whole card takes the current entry's class accent; with no class
          // filter the deck mixes classes and the card keeps the panel default.
          style: { '--er-accent': entry === undefined ? BRAND : accentOf(entry.kind) },
        },
          h('div', { className: 'er-chips', style: { marginBottom: '14px' } },
            h(KindChips, { kind, onKind: (next) => { setKind(next); setRevealed(false); } }),
            h('span', { className: 'er-sep' }),
            h(LevelChips, { level, onLevel: (next) => { setLevel(next); setRevealed(false); } }),
            h('span', { className: 'er-sep' }),
            h('button', {
              type: 'button',
              className: 'er-chip',
              'aria-pressed': scope === 'all',
              onClick: () => { setScope('all'); setRevealed(false); },
            }, '全部'),
            h('button', {
              type: 'button',
              className: 'er-chip',
              style: { '--er-accent': favoriteAccent() },
              'aria-pressed': scope === 'todo',
              onClick: () => { setScope('todo'); setRevealed(false); },
            }, '未掌握'),
            h('button', {
              type: 'button',
              className: 'er-chip',
              style: { '--er-accent': favoriteAccent() },
              'aria-pressed': scope === 'favorites',
              onClick: () => { setScope('favorites'); setRevealed(false); },
            }, `收藏 ${favorites.length}`)),
          entry === undefined
            ? h('p', { className: 'er-empty' },
              scope === 'favorites'
                ? '还没有收藏的词素，先在「词库」里收藏几个'
                : '这一组都掌握了，换个范围或重置进度')
            : h(React.Fragment, null,
              h('div', { className: 'er-flash' },
                h('p', { className: 'er-flash-label' }, `看${KIND_LABEL[entry.kind]}，想含义`),
                h('p', { className: 'er-flash-root' }, entry.form),
                h('p', { className: 'er-flash-sub' }, `${entry.origin} · ${entry.level}`)),
              revealed
                ? h('div', { className: 'er-flash-answer' },
                  h('p', { className: 'er-flash-meaning' }, entry.meaning),
                  h('p', { className: 'er-flash-en' }, entry.meaningEn),
                  h('p', { className: 'er-note' }, entry.note),
                  h(WordList, { entry }))
                : h('p', { className: 'er-hint', style: { textAlign: 'center' } },
                  '先自己回忆，再翻面核对'),
              h('div', { className: 'er-footer', style: { marginTop: '16px' } },
                revealed
                  ? h(React.Fragment, null,
                    h('button', {
                      type: 'button',
                      className: 'er-btn',
                      'aria-pressed': true,
                      onClick: () => grade(true),
                    }, '记住了'),
                    h('button', {
                      type: 'button',
                      className: 'er-btn',
                      onClick: () => grade(false),
                    }, '还要练'),
                    h('button', {
                      type: 'button',
                      className: 'er-btn',
                      onClick: advance,
                    }, '换一个'))
                  : h(React.Fragment, null,
                    h('button', {
                      type: 'button',
                      className: 'er-btn',
                      onClick: () => setRevealed(true),
                    }, '显示答案'),
                    h('button', {
                      type: 'button',
                      className: 'er-btn',
                      onClick: advance,
                    }, '换一个')))),
          h('div', { className: 'er-stats' },
            h('span', null, '本组已掌握 ', h('b', null, String(doneInDeck)), ' / ',
              String(deck.length)),
            h('span', null, '累计已掌握 ', h('b', null, String(mastered.length)), ' / ',
              String(morphemes.length)),
            h('button', {
              type: 'button',
              className: 'er-chip',
              onClick: () => onMasteredChange([]),
            }, '重置进度')),
          h('div', { className: 'er-bar' },
            h('div', {
              className: 'er-bar-fill',
              style: { width: `${Math.round(ratio * 100)}%` },
            }))));
    }

    /** Practice tab: four-choice quiz with running totals. */
    function PracticeTab(props) {
      const [kind, setKind] = React.useState(null);
      const [level, setLevel] = React.useState(null);
      const [item, setItem] = React.useState(() => makeQuizItem(null, null));
      const [picked, setPicked] = React.useState(null);
      const [stats, setStats] = React.useState(props.stats);

      const next = (nextLevel = level, nextKind = kind) => {
        setItem(makeQuizItem(nextLevel, nextKind));
        setPicked(null);
      };

      const choose = (option) => {
        if (picked !== null || item === null) return;
        const correct = option === item.answerWord;
        const nextStats = {
          attempts: stats.attempts + 1,
          correct: stats.correct + (correct ? 1 : 0),
        };
        setPicked(option);
        setStats(nextStats);
        props.onStatsChange(nextStats);
      };

      const accuracy = stats.attempts === 0
        ? '—'
        : `${Math.round((stats.correct / stats.attempts) * 100)}%`;

      return h('div', { className: 'er-practice' },
        h('div', { className: 'er-card' },
          h('div', { className: 'er-chips', style: { marginBottom: '14px' } },
            h(KindChips, {
              kind,
              onKind: (nextKind) => {
                setKind(nextKind);
                next(level, nextKind);
              },
            }),
            h('span', { className: 'er-sep' }),
            h(LevelChips, {
              level,
              onLevel: (nextLevel) => {
                setLevel(nextLevel);
                next(nextLevel, kind);
              },
            })),
          item === null
            ? h('p', { className: 'er-empty' }, '词库不足，无法出题')
            : h(React.Fragment, null,
              h('p', { className: 'er-question' }, item.question),
              h('p', { className: 'er-hint' }, item.prompt),
              h('div', { className: 'er-options' },
                item.options.map((option, index) => {
                  const answered = picked !== null;
                  const state = !answered
                    ? undefined
                    : option === item.answerWord
                      ? 'right'
                      : option === picked
                        ? 'wrong'
                        : undefined;
                  return h('button', {
                    key: option,
                    type: 'button',
                    className: 'er-option',
                    disabled: answered,
                    'data-state': state,
                    onClick: () => choose(option),
                  },
                  h('span', { className: 'er-option-key' }, String.fromCharCode(65 + index)),
                  h('span', null, option));
                })),
              picked === null
                ? null
                : h('div', {
                  className: picked === item.answerWord
                    ? 'er-feedback er-feedback-good'
                    : 'er-feedback er-feedback-bad',
                },
                h('div', { className: 'er-feedback-title' },
                  picked === item.answerWord ? '答对了' : '答错了'),
                h('div', null, item.explanation)),
              h('div', { className: 'er-footer' },
                h('button', {
                  type: 'button',
                  className: 'er-btn',
                  onClick: () => next(),
                }, picked === null ? '换一题' : '下一题'))),
          h('div', { className: 'er-stats' },
            h('span', null, '已练 ', h('b', null, String(stats.attempts)), ' 题'),
            h('span', null, '答对 ', h('b', null, String(stats.correct)), ' 题'),
            h('span', null, '正确率 ', h('b', null, accuracy)))));
    }

    const TABS = [
      { id: 'memorize', label: '背诵' },
      { id: 'browse', label: '词库' },
      { id: 'practice', label: '练习' },
    ];

    /** Per-class totals, e.g. `110 词根 · 48 前缀 · 40 后缀`. */
    function countSummary() {
      const counts = MORPHEME_DATA?.counts;
      if (counts === undefined) return `${morphemes.length} 个词素`;
      return KINDS.map((token) => `${counts[token] ?? 0} ${KIND_LABEL[token]}`).join(' · ');
    }

    /** The registered main panel: header, tabs, and the active view. */
    function RootsPanel() {
      ensureStyles();
      const [tab, setTab] = React.useState('memorize');
      const [state, setState] = React.useState(loadState);

      const update = (patch) => {
        const next = { ...state, ...patch };
        setState(next);
        saveState(next);
      };

      return h('div', { className: 'er-root' },
        h('div', { className: 'er-head' },
          h('h2', { className: 'er-title' }, '英语词根词缀'),
          h('span', { className: 'er-count' }, countSummary()),
          h('div', { className: 'er-tabs', role: 'tablist' },
            TABS.map((entry) => h('button', {
              key: entry.id,
              type: 'button',
              role: 'tab',
              className: 'er-tab',
              'aria-selected': tab === entry.id,
              onClick: () => setTab(entry.id),
            }, entry.label)))),
        tab === 'memorize'
          ? h(MemorizeTab, {
            favorites: state.favorites,
            mastered: state.mastered,
            onMasteredChange: (mastered) => update({ mastered }),
          })
          : tab === 'browse'
            ? h(BrowseTab, {
              favorites: state.favorites,
              onFavoritesChange: (favorites) => update({ favorites }),
            })
            : h(PracticeTab, {
              stats: state.stats,
              onStatsChange: (stats) => update({ stats }),
            }));
    }

    return plugin;
  },
});
