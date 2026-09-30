# 英语词根词缀（DSH 插件）

一个 Harness bundle，把同一份英语词素词典同时做成一页界面和一个模型工具。

- **界面**：左侧边栏新增「英语词根词缀」入口，中央面板分三个页签。
  - **背诵**：只看词素形式回忆含义，翻面核对，自评「记住了 / 还要练」，掌握进度存本地。
  - **词库**：搜索、按**类别**（词根 / 前缀 / 后缀）与**难度**筛选、收藏，查看类别、来源、释义说明与例词。
  - **练习**：四选一选择题，可按类别出题，问句用对类别词（含词根 / 含前缀 / 含后缀），带累计正确率。
- **工具**：注册 `english_roots`，模型可以 `list` / `lookup` / `search` / `quiz` 查询同一份词典，`list` / `search` / `quiz` 支持 `kind` 与 `level` 过滤。
- **配色**：面板自己注册一层强调色 token（词根蓝 / 前缀紫 / 后缀琥珀 / 收藏玫红），明暗切换由宿主处理；顶栏三色渐变、类别徽标、背诵卡片、反馈块都跟着类别走。
- **词库**：110 个词根 + 48 个前缀 + 40 个后缀 = 198 条（基础 / 进阶 / 高级 / 高阶四档），792 个例词，全部内置离线可用。

## 安装

本仓库的根目录**就是** bundle 包目录（`package.json` 在根上），克隆下来直接指向该目录安装：

```powershell
git clone https://github.com/lintrin/dsh-plugin-english-roots.git
```

```
plugin_manager  action: install_bundle   target: <克隆下来的目录>
```

`data.js` 与 `client.js` 是 `build.mjs` 生成的产物、**已随仓库提交**（`package.json` 里没有
`scripts`，安装时不会重新构建），所以克隆之后不需要 `npm install`，也不需要先构建。

新装的 bundle 通过 HMR 生效，不必重启；**改动已安装包的 JS 后**若工具行为没变，用
`plugin_manager` 的 `set_plugin` 把 `include:english-roots` 关一次再开一次即可重新导入，
不必重启进程。

## 目录结构

| 文件 | 作用 |
| --- | --- |
| `src/morphemes.json` | 唯一数据源：`kind` / `form` / 含义 / 来源 / 难度 / 释义说明 / 例词 |
| `src/client.template.js` | 浏览器半的**作者文件**（带 `@morpheme-data` 标记） |
| `build.mjs` | 由数据源生成两份产物，并承担全部结构性校验 |
| `data.js` | 生成的 Host 数据（`export const MORPHEME_DATA`） |
| `client.js` | 生成的浏览器半：模板 + 内联词库 |
| `index.js` | Host 半：注册 `english_roots` 工具 |
| `cordis.patch.yml` | bundle 补丁：插入一行插件 |
| `package.json` | 清单：`dsh.bundle.patch`、`dsh.client`、图标与显示文案 |
| `locale/{zh,en}.json` | 插件管理页显示的标题与描述 |
| `host-smoke.mjs` | 离线测试：注册 `english_roots`，四个 action × 三类 × 四档逐项核对 |
| `client-smoke.mjs` | 离线测试：像浏览器一样加载 `client.js`，校验工厂、槽位注册、查找与出题 |

## 构建与测试

改完 `src/morphemes.json` 或 `src/client.template.js` 后：

```powershell
node build.mjs          # 重新生成 data.js 与 client.js，并校验数据
node host-smoke.mjs     # Host 半：工具注册、四个 action、输出 schema
node client-smoke.mjs   # 浏览器半：产物加载、槽位注册、组件调用、查找与出题
```

装进当前 profile 的做法见上面的「安装」一节：把 `install_bundle` 的 `target` 指向你正在改的
这份克隆目录即可（需要 Full access 或本次调用批准）。**改完 `src/` 下的源码一定要先跑
`node build.mjs`**，否则装进去的还是上一版产物。

## 修改词库

只编辑 `src/morphemes.json`。每条必须写全 `kind` / `form` / `meaning` / `meaningEn` /
`origin` / `level` / `note`，以及至少一个含 `word` / `pos` / `meaning` 的例词。`build.mjs`
会校验所有字段非空、同类同形不重复，缺字段直接报错而不是生成半个词库。

它对数据还有三条硬约束，改词时最容易踩：

1. **每个「类别 × 难度」桶至少 4 条，且首例词至少 4 个互不相同。** 练习题的四选一
   就是从同一个桶里取各条的首例词，不够就只能回退到整库、混进别的类别。
2. **跨类别不得撞形**（归一化后比较：去空格、去首尾连字符、按空格与斜杠切分，全角
   括号也当分隔符）。唯一的例外是**位置可区分**的一对，例如前缀 `en-` 与后缀 `-en`：
   它们拼写相同但语素不同，构建放行，查找时两个都会返回。
3. **同类内的近重复是允许的**（`voc / vok` 与 `voc`、`prehend / pris` 与 `prehend（pris）`
   等），这是有意保留的设计；查找优先精确标签，其次按类别与难度顺序，结果确定。

`form` 的写法沿用界面惯例：变体用 ` / ` 连接，前缀带尾连字符（`re-`、`in- / im- / il- / ir-`），
后缀带首连字符（`-tion / -sion`），词根不带连字符（`spect / spic`）。

### 分类约定

- **前缀**：不能独立成词、固定出现在词首的黏着词首（`un-`、`re-`、`bene-`、`tele-`、`mis-`…）。
- **后缀**：固定出现在词尾并改变词性或构成名词形容词的成分为后缀（`-tion`、`-ness`、`-logy`、`-cracy`…）。
- **词根**：其余的词干，以及希腊语组合形式 `geo`、`bio`、`psych`、`phon`、`cosm`、`hydr`、`therm`、
  `astr / aster`、`arch` 与 `graph / gram`、`path`、`nom / nym`、`aqua`、`terr`、`dem`——按中文
  词根表的惯例保留为词根，不当前缀。

`client.js` 是浏览器半唯一的产物：Client 模块系统只提供包的 `./client` 入口，**不会**去取同目录下的
第二个脚本，所以词库必须内联在 `client.js` 里。`build.mjs` 在找不到 `@morpheme-data` 标记时会报错。

## 开发笔记

- **工厂函数必须把 `return` 放在最后。** `client.js` 的 `factory()` 里，样式表、
  `STORAGE_KEY`、`TABS` 这些都是 `const`，在工厂体执行到它们之前处于暂时性死区。
  曾经写成在查找函数之后就 `return { inject, apply }`，工厂提前退出，这些绑定**永远
  不会初始化**；`apply` 依旧正常注册（所以侧边栏图标和槽位看起来都对），但面板第一次
  渲染走到 `ensureStyles()` 时就抛 `ReferenceError: Cannot access 'STYLE_ID' before
  initialization`，外壳把 `main` 槽位清空，中间区域一片空白。`client-smoke.mjs` 现在会
  真的调用一次两个组件来守住这一点——只调图标是抓不住的。
- **两个半侧都不能 import Harness 自己的包。** 从工作区目录安装的 bundle，其裸模块说明符
  是按**插件自身位置**解析的，而不是按 dsh 安装位置，所以 `index.js` 里写
  `import { defineTool } from '@deepseek-ai/dsh-tools'` 会让整个条目 `failed to import`。
  workspace bundle 只能用相对路径 import（如 `./data.js`）和渲染进程的 React。
  `host-smoke.mjs` 因此显式断言两个 Host 文件里没有 `from '@…'`。
- 工具用 `ctx.tools.register(...)` 直接接受**注册表就绪**的定义，schema 手写成注册表强制的
  那个 JSON Schema 子集（`type` / `properties` / `required` / `items` / `enum` /
  `additionalProperties` + 注解）。要点：`required` 是**对象上的字符串数组**，不是属性里的
  `required: true`（后者是 `defineTool` 作者写法，直接传会抛 `JsonSchemaError`）；`required`
  里的每个名字必须出现在 `properties` 里；`additionalProperties` 只能是布尔值。返回值会被
  逐字段校验，所以 `run()` 不能返回含 `undefined` 的对象。
- **查找归一化必须处理全角括号与连字符。** 早期版本只剥半角 `()`，导致 `dict（jud）` 的变体
  `jud` 查不到；带连字符的前缀后缀（`re-`、`-tion`）也无法用裸形式检索。现在 Host 与浏览器
  两半各有一份 `variantForms()`（两个进程无法共享代码，注释里互相指明），把 `（）()`、
  空格、斜杠都当分隔符，并剥掉首尾连字符，同时记录**附着侧**（prefix / suffix / neutral）
  供跨类别去歧义。
- 侧边栏与面板共用 id `roots`：`sidebar.panellist` 的每个 id 直接寻址 `main` 槽里 `key`
  相同的组件，因此打开面板不需要额外的导航代码。图标组件收到 `{ size, active }` 两个 props。
- **冻结标识符**：包名 `@local/dsh-plugin-english-roots`、补丁行 id `english-roots`、槽位
  id/key `roots`、`localStorage` 键 `dsh.english-roots.v1`、工具名 `english_roots`。改这些会
  打断已安装的行、已保存的进度或模型调用。
- 样式只用 Theme 服务列出的 `--dsw-alias-*` 令牌，浅色 / 深色两套主题都能正确显示。
- **颜色只能来自注册的 token 层，样式表里不许出现字面量颜色。** 面板在 `apply` 里用
  `ctx.get('theme').overrideTokens(包名, { '--er-kind-root': { light, dark }, … })` 注册四个
  强调色：`theme.overrideTokens` 只校验值的形状、**不限制 token 名**，`composeActive()` 会把
  自定义名字并进活动主题，presenter 再把它 setProperty 到 `body`——所以**明暗切换与卸载清理
  都由宿主负责，样式表里不需要任何 `body[data-ds-dark-theme]` 规则**。四个色值都取自宿主
  自己在同一份明暗样式表里配好的成对色（静态色阶与代码高亮 token），色相属于应用既有词汇。
  验证手段：`cordis_inspect_query`（client `Theme.listTokens`）会把这些 override-only 的名字
  列出来，这是不开浏览器就能确认配色已生效的抓手。
- 元素上只挂一个 `--er-accent`（`accentOf(kind)`），样式表统一读
  `var(--er-accent, var(--dsw-alias-brand-primary))`。**每个 `var(--er-*)` 都必须带 fallback**，
  `theme` 走 `ctx.get` 可选读取并 try/catch——配色是装饰，缺主题服务时退化成品牌色单色，
  绝不允许因为它抛错而把 `main` 槽位清空（那样面板会全白）。`client-smoke.mjs` 会对注入的
  样式表强制这三条：无字面量颜色、accent 读取必带 fallback、读到的 token 名必须已注册。
- 练习题**不按答案的类别着色**（选项挂答案的 accent 会泄露答案）：选项悬停只用品牌色，
  答题后才用 success/error。
- 收藏、掌握进度与练习统计保存在浏览器 `localStorage`，存的是 `form` 标签，因此换会话依然
  保留，也不需要迁移。
- 可见文案直接写中文，没有走 Client locale 服务；`locale/*.json` 只供插件管理页展示标题与描述。
- **本机控制台是 GBK 代码页，别用 PowerShell 的 `Get-Content` / `Set-Content` 往返文本文件**，
  那会把中文写成 `?` 并造成不可逆丢失。改文件只用编辑工具，或显式 `utf8` 的 node 脚本。

## 许可证

[MIT](./LICENSE) © 2026 lintrin
