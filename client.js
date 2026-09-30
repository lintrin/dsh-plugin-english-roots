// GENERATED FILE — edit src/client.template.js and run `node build.mjs`.
// 110 roots, 48 prefixes, 40 suffixes; 1188 example words.

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
    const MORPHEME_DATA = {"version":2,"counts":{"root":110,"prefix":48,"suffix":40,"total":198},"levels":["基础","进阶","高级","高阶"],"morphemes":[{"kind":"root","form":"spect / spic","meaning":"看","meaningEn":"to look, to see","origin":"拉丁语 specere","level":"基础","note":"眼睛做的事：spect 看，spic 是它的另一种拼法。","examples":[{"word":"inspect","pos":"v.","meaning":"检查；视察"},{"word":"respect","pos":"v./n.","meaning":"尊重；方面"},{"word":"spectator","pos":"n.","meaning":"观众"},{"word":"suspicious","pos":"adj.","meaning":"可疑的"},{"word":"aspect","pos":"n.","meaning":"方面；外观（a- 朝向 + spect 看）"},{"word":"conspicuous","pos":"adj.","meaning":"显眼的；引人注目的（con- 完全 + spic 看 + -uous）"}]},{"kind":"root","form":"vis / vid","meaning":"看","meaningEn":"to see","origin":"拉丁语 videre","level":"基础","note":"与 spect 同义，但更常出现在「看见/视觉」这类词里。","examples":[{"word":"visible","pos":"adj.","meaning":"可见的"},{"word":"vision","pos":"n.","meaning":"视力；愿景"},{"word":"provide","pos":"v.","meaning":"提供（pro- 预先 + vid 看）"},{"word":"evidence","pos":"n.","meaning":"证据（e- 向外 + vid 看）"},{"word":"evident","pos":"adj.","meaning":"明显的（e- 向外 + vid 看 + -ent）"},{"word":"visual","pos":"adj.","meaning":"视觉的"}]},{"kind":"root","form":"dict","meaning":"说","meaningEn":"to say, to speak","origin":"拉丁语 dicere","level":"基础","note":"凡与「说、断言」有关的词，几乎都带 dict。","examples":[{"word":"predict","pos":"v.","meaning":"预测（pre- 提前 + dict 说）"},{"word":"contradict","pos":"v.","meaning":"反驳；与…矛盾"},{"word":"dictionary","pos":"n.","meaning":"词典"},{"word":"dedicate","pos":"v.","meaning":"奉献；致力于"},{"word":"dictate","pos":"v.","meaning":"口述；命令（dict 说 + -ate）"},{"word":"verdict","pos":"n.","meaning":"裁决；判决（ver- 真实 + dict 说）"}]},{"kind":"root","form":"duc / duct","meaning":"引导","meaningEn":"to lead","origin":"拉丁语 ducere","level":"基础","note":"把人和物「带着走」：引导、传导、生产。","examples":[{"word":"conduct","pos":"v./n.","meaning":"指挥；实施；行为"},{"word":"produce","pos":"v.","meaning":"生产（pro- 向前 + duc 引导）"},{"word":"introduce","pos":"v.","meaning":"介绍；引入"},{"word":"reduce","pos":"v.","meaning":"减少（re- 向后 + duc 引）"},{"word":"education","pos":"n.","meaning":"教育（e- 向外 + duc 引导 + -ation 把潜能引出来）"},{"word":"deduct","pos":"v.","meaning":"扣除；减去（de- 向下 + duct 引）"}]},{"kind":"root","form":"ject","meaning":"投掷","meaningEn":"to throw","origin":"拉丁语 jacere","level":"基础","note":"把一个东西「扔出去」，引申为投射、拒绝、目标。","examples":[{"word":"project","pos":"n./v.","meaning":"项目；投射"},{"word":"reject","pos":"v.","meaning":"拒绝（re- 回 + ject 扔）"},{"word":"object","pos":"n./v.","meaning":"物体；反对"},{"word":"subject","pos":"n.","meaning":"主题；主语（sub- 在下 + ject 投）"},{"word":"inject","pos":"v.","meaning":"注射；注入（in- 进入 + ject 投）"},{"word":"eject","pos":"v.","meaning":"弹出；驱逐（e- 向外 + ject 扔）"}]},{"kind":"root","form":"mit / miss","meaning":"送；派","meaningEn":"to send","origin":"拉丁语 mittere","level":"基础","note":"把人或物「送出去」：派遣、提交、允许通行。","examples":[{"word":"submit","pos":"v.","meaning":"提交；屈服"},{"word":"permit","pos":"v./n.","meaning":"允许；许可证"},{"word":"mission","pos":"n.","meaning":"任务；使命"},{"word":"promise","pos":"n./v.","meaning":"承诺（pro- 向前 + miss 送）"},{"word":"admit","pos":"v.","meaning":"承认；准许进入（ad- 向 + mit 送）"},{"word":"transmit","pos":"v.","meaning":"传送；传播（trans- 越过 + mit 送）"}]},{"kind":"root","form":"port","meaning":"搬运；港口","meaningEn":"to carry; harbor","origin":"拉丁语 portare","level":"基础","note":"把东西从一处「搬」到另一处，港口正是搬运的地方。","examples":[{"word":"transport","pos":"v./n.","meaning":"运输"},{"word":"import","pos":"v./n.","meaning":"进口"},{"word":"support","pos":"v./n.","meaning":"支持（sup- 在下 + port 扛）"},{"word":"portable","pos":"adj.","meaning":"便携的"},{"word":"export","pos":"v./n.","meaning":"出口（ex- 向外 + port 搬运）"},{"word":"deport","pos":"v.","meaning":"驱逐出境（de- 离开 + port 搬运）"}]},{"kind":"root","form":"pos / pon","meaning":"放置","meaningEn":"to place, to put","origin":"拉丁语 ponere","level":"基础","note":"「摆在哪里」决定了词义方向：compose 摆在一起即组成。","examples":[{"word":"compose","pos":"v.","meaning":"组成；创作"},{"word":"expose","pos":"v.","meaning":"暴露（ex- 向外 + pos 放）"},{"word":"position","pos":"n.","meaning":"位置；职位"},{"word":"component","pos":"n.","meaning":"组成部分"},{"word":"propose","pos":"v.","meaning":"提议；求婚（pro- 向前 + pos 放）"},{"word":"deposit","pos":"n./v.","meaning":"存款；存放（de- 向下 + pos 放）"}]},{"kind":"root","form":"scrib / script","meaning":"写","meaningEn":"to write","origin":"拉丁语 scribere","level":"基础","note":"用笔「写」下来：描述、订阅、手稿。","examples":[{"word":"describe","pos":"v.","meaning":"描述（de- 向下 + scrib 写）"},{"word":"subscribe","pos":"v.","meaning":"订阅；赞同"},{"word":"prescription","pos":"n.","meaning":"处方；药方"},{"word":"manuscript","pos":"n.","meaning":"手稿"},{"word":"transcript","pos":"n.","meaning":"成绩单；文字记录（trans- 转移 + script 写）"},{"word":"inscription","pos":"n.","meaning":"铭文；题词（in- 在上 + script 写 + -ion）"}]},{"kind":"root","form":"sens / sent","meaning":"感觉","meaningEn":"to feel","origin":"拉丁语 sentire","level":"基础","note":"感官与情绪都从这里来：感觉、情绪、同意（感觉一致）。","examples":[{"word":"sense","pos":"n./v.","meaning":"感觉；意义"},{"word":"sensitive","pos":"adj.","meaning":"敏感的"},{"word":"consent","pos":"n./v.","meaning":"同意（con- 共同 + sent 感觉）"},{"word":"sentiment","pos":"n.","meaning":"情感；看法"},{"word":"sensible","pos":"adj.","meaning":"明智的；通情达理的（sens 感觉 + -ible）"},{"word":"resent","pos":"v.","meaning":"怨恨；不满（re- 反复 + sent 感觉）"}]},{"kind":"root","form":"tract","meaning":"拉；拖","meaningEn":"to pull, to draw","origin":"拉丁语 trahere","level":"基础","note":"把东西「拉」过来或拉走，于是有吸引、抽取、合同（拉到一起）。","examples":[{"word":"attract","pos":"v.","meaning":"吸引（at- 向 + tract 拉）"},{"word":"extract","pos":"v.","meaning":"提取；摘录"},{"word":"contract","pos":"n./v.","meaning":"合同；收缩"},{"word":"distract","pos":"v.","meaning":"使分心"},{"word":"subtract","pos":"v.","meaning":"减去（sub- 在下 + tract 拉）"},{"word":"abstract","pos":"adj./n.","meaning":"抽象的；摘要（abs- 离开 + tract 拉）"}]},{"kind":"root","form":"struct","meaning":"建造","meaningEn":"to build","origin":"拉丁语 struere","level":"基础","note":"一层层「垒起来」：结构、构造、指导（在心里建）。","examples":[{"word":"structure","pos":"n./v.","meaning":"结构；构建"},{"word":"construct","pos":"v.","meaning":"建造；构建"},{"word":"instruct","pos":"v.","meaning":"指导；指示"},{"word":"destruction","pos":"n.","meaning":"破坏（de- 去掉 + struct 建）"},{"word":"obstruct","pos":"v.","meaning":"阻碍；阻塞（ob- 阻挡 + struct 建造）"},{"word":"infrastructure","pos":"n.","meaning":"基础设施（infra- 在下 + struct 建造 + -ure）"}]},{"kind":"root","form":"form","meaning":"形状；形成","meaningEn":"shape, to form","origin":"拉丁语 forma","level":"基础","note":"给某物「一个形状」：形成、改革、信息（放入心中的形状）。","examples":[{"word":"form","pos":"n./v.","meaning":"形式；形成"},{"word":"reform","pos":"n./v.","meaning":"改革"},{"word":"inform","pos":"v.","meaning":"通知（in- 进入 + form 形）"},{"word":"uniform","pos":"adj./n.","meaning":"统一的；制服"},{"word":"perform","pos":"v.","meaning":"表演；执行（per- 彻底 + form 形成）"},{"word":"transform","pos":"v.","meaning":"改变；转化（trans- 转变 + form 形状）"}]},{"kind":"root","form":"fac / fact / fect","meaning":"做；制造","meaningEn":"to do, to make","origin":"拉丁语 facere","level":"基础","note":"英语里最高产的一组：做出来的东西叫 fact，做得好的叫 perfect。","examples":[{"word":"factory","pos":"n.","meaning":"工厂"},{"word":"effect","pos":"n.","meaning":"效果；影响"},{"word":"perfect","pos":"adj.","meaning":"完美的（per- 彻底 + fect 做）"},{"word":"difficult","pos":"adj.","meaning":"困难的（dif- 不 + fic 做 + -ult）"},{"word":"manufacture","pos":"v./n.","meaning":"制造；产品（manu 手 + fact 做 + -ure）"},{"word":"infect","pos":"v.","meaning":"感染；传染（in- 进入 + fect 做）"}]},{"kind":"root","form":"prehend / pris","meaning":"抓住","meaningEn":"to seize, to grasp","origin":"拉丁语 prehendere","level":"进阶","note":"用手或用心「抓住」：理解就是抓住含义，监狱就是抓住人。","examples":[{"word":"comprehend","pos":"v.","meaning":"理解；包含"},{"word":"prison","pos":"n.","meaning":"监狱"},{"word":"surprise","pos":"n./v.","meaning":"惊讶（sur- 在上 + pris 抓）"},{"word":"enterprise","pos":"n.","meaning":"企业；事业心"},{"word":"apprehend","pos":"v.","meaning":"理解；逮捕（ap- 向 + prehend 抓住）"},{"word":"comprise","pos":"v.","meaning":"包含；由…组成（com- 共同 + pris 抓 + -e）"}]},{"kind":"root","form":"cred / creed","meaning":"相信","meaningEn":"to believe, to trust","origin":"拉丁语 credere","level":"进阶","note":"「信」是这一族的共同线索：信用、凭证、难以置信。","examples":[{"word":"credit","pos":"n./v.","meaning":"信用；学分"},{"word":"credible","pos":"adj.","meaning":"可信的"},{"word":"incredible","pos":"adj.","meaning":"难以置信的"},{"word":"credentials","pos":"n.","meaning":"资格证书"},{"word":"credulous","pos":"adj.","meaning":"轻信的；易受骗的（cred 相信 + -ulous）"},{"word":"credence","pos":"n.","meaning":"相信；可信度"}]},{"kind":"root","form":"cur / curs","meaning":"跑","meaningEn":"to run","origin":"拉丁语 currere","level":"进阶","note":"「跑」出来的词：发生（跑出来）、流通（跑一圈）、当前（跑到现在）。","examples":[{"word":"occur","pos":"v.","meaning":"发生"},{"word":"current","pos":"adj./n.","meaning":"当前的；水流"},{"word":"excursion","pos":"n.","meaning":"短途旅行"},{"word":"currency","pos":"n.","meaning":"货币"},{"word":"cursor","pos":"n.","meaning":"光标（curs 跑 + -or 会跑的东西）"},{"word":"precursor","pos":"n.","meaning":"先驱；前兆（pre- 在前 + curs 跑 + -or）"}]},{"kind":"root","form":"flu","meaning":"流动","meaningEn":"to flow","origin":"拉丁语 fluere","level":"进阶","note":"像水一样「流」：流畅、影响（流入）、富裕（源源不断）。","examples":[{"word":"fluent","pos":"adj.","meaning":"流利的"},{"word":"influence","pos":"n./v.","meaning":"影响（in- 进入 + flu 流）"},{"word":"fluid","pos":"n./adj.","meaning":"流体；流动的"},{"word":"flush","pos":"v.","meaning":"冲洗；脸红"},{"word":"fluctuate","pos":"v.","meaning":"波动；起伏（fluct 流动 + -ate）"},{"word":"affluent","pos":"adj.","meaning":"富裕的（af- 向 + flu 流 + -ent 财源滚滚）"}]},{"kind":"root","form":"grad / gress","meaning":"走；步","meaningEn":"to step, to go","origin":"拉丁语 gradi","level":"进阶","note":"一步步「走」：逐步升级是 progress，越过界限是 transgress。","examples":[{"word":"gradual","pos":"adj.","meaning":"逐渐的"},{"word":"progress","pos":"n./v.","meaning":"进步（pro- 向前 + gress 走）"},{"word":"degree","pos":"n.","meaning":"程度；学位"},{"word":"congress","pos":"n.","meaning":"国会；代表大会"},{"word":"upgrade","pos":"v./n.","meaning":"升级；提升（up- 向上 + grad 走）"},{"word":"graduate","pos":"v./n.","meaning":"毕业；毕业生（grad 步 + -uate 走完学业）"}]},{"kind":"root","form":"fer","meaning":"带来；拿","meaningEn":"to bear, to carry","origin":"拉丁语 ferre","level":"进阶","note":"把东西「带」过来：转移、提供、参考（带回来对照）。","examples":[{"word":"transfer","pos":"v./n.","meaning":"转移；换乘"},{"word":"offer","pos":"v./n.","meaning":"提供；提议"},{"word":"prefer","pos":"v.","meaning":"更喜欢（pre- 在前 + fer 拿）"},{"word":"refer","pos":"v.","meaning":"参考；提到"},{"word":"conference","pos":"n.","meaning":"会议；研讨会（con- 共同 + fer 带来 + -ence 把意见带到一起）"},{"word":"interfere","pos":"v.","meaning":"干扰；干涉（inter- 之间 + fer 带来 + -e）"}]},{"kind":"root","form":"rupt","meaning":"断裂","meaningEn":"to break","origin":"拉丁语 rumpere","level":"进阶","note":"「断」得突然：打断、破产、爆发、腐败（坏到断掉）。","examples":[{"word":"interrupt","pos":"v.","meaning":"打断"},{"word":"bankrupt","pos":"adj./v.","meaning":"破产的"},{"word":"erupt","pos":"v.","meaning":"爆发（e- 向外 + rupt 断）"},{"word":"corrupt","pos":"adj./v.","meaning":"腐败的；贿赂"},{"word":"disrupt","pos":"v.","meaning":"扰乱；使中断（dis- 分开 + rupt 断）"},{"word":"abrupt","pos":"adj.","meaning":"突然的；生硬的（ab- 离开 + rupt 断）"}]},{"kind":"root","form":"sist / sta","meaning":"站立","meaningEn":"to stand","origin":"拉丁语 stare / sistere","level":"进阶","note":"「站住」就是坚持、稳定、抵抗；state 是站住的状态。","examples":[{"word":"insist","pos":"v.","meaning":"坚持（in- 在上 + sist 站）"},{"word":"resist","pos":"v.","meaning":"抵抗"},{"word":"stable","pos":"adj.","meaning":"稳定的"},{"word":"assist","pos":"v.","meaning":"协助（as- 在旁边 + sist 站）"},{"word":"consist","pos":"v.","meaning":"由……组成（con- 一起 + sist 站）"},{"word":"statue","pos":"n.","meaning":"雕像（sta 站 + -tue 名词后缀，站着的像）"}]},{"kind":"root","form":"pel / puls","meaning":"推；驱使","meaningEn":"to drive, to push","origin":"拉丁语 pellere","level":"进阶","note":"被「推」着走：推动、驱逐、冲动、脉搏（血液被推）。","examples":[{"word":"compel","pos":"v.","meaning":"强迫"},{"word":"expel","pos":"v.","meaning":"驱逐；开除"},{"word":"impulse","pos":"n.","meaning":"冲动"},{"word":"pulse","pos":"n.","meaning":"脉搏"},{"word":"propel","pos":"v.","meaning":"推进；驱使（pro- 向前 + pel 推）"},{"word":"repulsive","pos":"adj.","meaning":"令人厌恶的（re- 回 + puls 推，把人推开）"}]},{"kind":"root","form":"ven / vent","meaning":"来","meaningEn":"to come","origin":"拉丁语 venire","level":"进阶","note":"「来」到哪里，就构成哪种词：prevent 先来一步即阻止。","examples":[{"word":"prevent","pos":"v.","meaning":"阻止（pre- 先 + vent 来）"},{"word":"convention","pos":"n.","meaning":"会议；惯例"},{"word":"invent","pos":"v.","meaning":"发明（in- 进入 + vent 来）"},{"word":"avenue","pos":"n.","meaning":"大街；途径"},{"word":"convene","pos":"v.","meaning":"召集；集会（con- 一起 + ven 来）"},{"word":"advent","pos":"n.","meaning":"到来；出现（ad- 向 + vent 来）"}]},{"kind":"root","form":"voc / vok","meaning":"叫；声音","meaningEn":"to call, voice","origin":"拉丁语 vocare","level":"进阶","note":"用声音「叫」：叫来是召集，叫出去是唤起。","examples":[{"word":"vocal","pos":"adj.","meaning":"嗓音的；直言的"},{"word":"invoke","pos":"v.","meaning":"援引；祈求"},{"word":"provoke","pos":"v.","meaning":"激起；挑衅"},{"word":"vocabulary","pos":"n.","meaning":"词汇"},{"word":"advocate","pos":"v./n.","meaning":"提倡；拥护者（ad- 向 + voc 叫，为某人发声）"},{"word":"revoke","pos":"v.","meaning":"撤销；吊销（re- 回 + vok 叫，叫回来）"}]},{"kind":"root","form":"spir","meaning":"呼吸","meaningEn":"to breathe","origin":"拉丁语 spirare","level":"进阶","note":"「气」是生命线索：精神、灵感、野心都是气息的比喻。","examples":[{"word":"spirit","pos":"n.","meaning":"精神；情绪"},{"word":"inspire","pos":"v.","meaning":"激励；启发"},{"word":"expire","pos":"v.","meaning":"到期；去世"},{"word":"aspiration","pos":"n.","meaning":"志向；渴望"},{"word":"respiratory","pos":"adj.","meaning":"呼吸的（re- 反复 + spir 呼吸 + -atory 形容词后缀）"},{"word":"conspiracy","pos":"n.","meaning":"阴谋（con- 一起 + spir 呼吸，同声共气）"}]},{"kind":"root","form":"ten / tain / tin","meaning":"握住；保持","meaningEn":"to hold","origin":"拉丁语 tenere","level":"进阶","note":"「拿住不放」：维持、包含、继续、保留。","examples":[{"word":"maintain","pos":"v.","meaning":"维持；主张"},{"word":"contain","pos":"v.","meaning":"包含"},{"word":"continue","pos":"v.","meaning":"继续（con- 一起 + tin 握）"},{"word":"tennis","pos":"n.","meaning":"网球（源自「接住」的喊声）"},{"word":"retain","pos":"v.","meaning":"保留；记住（re- 回 + tain 握住）"},{"word":"tenant","pos":"n.","meaning":"房客；租户（ten 握住 + -ant 人，握住使用权的人）"}]},{"kind":"root","form":"manu","meaning":"手","meaningEn":"hand","origin":"拉丁语 manus","level":"进阶","note":"凡与「手」有关的操作，都能看到 manu 的身影。","examples":[{"word":"manual","pos":"adj./n.","meaning":"手工的；手册"},{"word":"manufacture","pos":"v./n.","meaning":"制造"},{"word":"manuscript","pos":"n.","meaning":"手稿"},{"word":"manage","pos":"v.","meaning":"管理；设法做到"},{"word":"manumit","pos":"v.","meaning":"解放（奴隶）（manu 手 + mit 送，送到手中放走）"},{"word":"manubrium","pos":"n.","meaning":"胸骨柄；柄状部（manu 手 + -brium 名词后缀，手柄状）"}]},{"kind":"root","form":"ped / pod","meaning":"脚","meaningEn":"foot","origin":"拉丁语 pes / 希腊语 pous","level":"进阶","note":"「脚」既指身体部位，也指走路的工具（踏板、步行者）。","examples":[{"word":"pedal","pos":"n./v.","meaning":"踏板；踩踏板"},{"word":"pedestrian","pos":"n./adj.","meaning":"行人；平淡的"},{"word":"tripod","pos":"n.","meaning":"三脚架"},{"word":"expedition","pos":"n.","meaning":"远征；探险"},{"word":"impede","pos":"v.","meaning":"阻碍（im- 进入 + ped 脚，缠住脚）"},{"word":"centipede","pos":"n.","meaning":"蜈蚣（centi 百 + ped 脚）"}]},{"kind":"root","form":"mort","meaning":"死","meaningEn":"death","origin":"拉丁语 mors","level":"进阶","note":"「死」的拉丁名：凡人会死，抵押是把东西「交到死」。","examples":[{"word":"mortal","pos":"adj./n.","meaning":"致死的；凡人"},{"word":"immortal","pos":"adj.","meaning":"不朽的"},{"word":"mortgage","pos":"n./v.","meaning":"抵押贷款"},{"word":"mortuary","pos":"n.","meaning":"太平间"},{"word":"mortality","pos":"n.","meaning":"死亡率；必死性（mort 死 + -ality 名词后缀）"},{"word":"postmortem","pos":"adj./n.","meaning":"死后的；尸检（post- 之后 + mort 死）"}]},{"kind":"root","form":"vit / viv","meaning":"生命","meaningEn":"life, to live","origin":"拉丁语 vita / vivere","level":"进阶","note":"「活」的力量：维生素、活力、幸存者都是这一族。","examples":[{"word":"vital","pos":"adj.","meaning":"至关重要的；生命的"},{"word":"vitamin","pos":"n.","meaning":"维生素"},{"word":"survive","pos":"v.","meaning":"幸存"},{"word":"vivid","pos":"adj.","meaning":"生动的"},{"word":"revive","pos":"v.","meaning":"复苏；使复活（re- 再 + viv 活）"},{"word":"vivacious","pos":"adj.","meaning":"活泼的；生机勃勃的（viv 活 + -acious 形容词后缀）"}]},{"kind":"prefix","form":"bene-","meaning":"好","meaningEn":"good, well","origin":"拉丁语 bene","level":"进阶","note":"「好」的前缀：好处、恩惠、仁慈都由此而来。","examples":[{"word":"benefit","pos":"n./v.","meaning":"好处；受益"},{"word":"benevolent","pos":"adj.","meaning":"仁慈的"},{"word":"beneficial","pos":"adj.","meaning":"有益的"},{"word":"benefactor","pos":"n.","meaning":"捐助人"},{"word":"benediction","pos":"n.","meaning":"祝福（bene- 好 + dict 说 + -ion 名词后缀）"},{"word":"beneficiary","pos":"n.","meaning":"受益人（bene- 好 + fic 做 + -iary 人）"}]},{"kind":"prefix","form":"mal-","meaning":"坏","meaningEn":"bad, evil","origin":"拉丁语 malus","level":"进阶","note":"与 bene 正好相反：一切「坏」都从 mal 开始。","examples":[{"word":"malicious","pos":"adj.","meaning":"恶意的"},{"word":"malfunction","pos":"n./v.","meaning":"故障"},{"word":"malnutrition","pos":"n.","meaning":"营养不良"},{"word":"malice","pos":"n.","meaning":"恶意"},{"word":"malevolent","pos":"adj.","meaning":"有恶意的（mal- 坏 + vol 意愿 + -ent 形容词后缀）"},{"word":"malpractice","pos":"n.","meaning":"玩忽职守；医疗事故（mal- 坏 + practice 执业）"}]},{"kind":"root","form":"dem","meaning":"人民","meaningEn":"people","origin":"希腊语 demos","level":"进阶","note":"「人民」当家：民主、人口、流行病（在人群中传播）。","examples":[{"word":"democracy","pos":"n.","meaning":"民主"},{"word":"demographic","pos":"adj./n.","meaning":"人口的"},{"word":"epidemic","pos":"n./adj.","meaning":"流行病"},{"word":"pandemic","pos":"n./adj.","meaning":"大流行病"},{"word":"democrat","pos":"n.","meaning":"民主主义者（dem 人民 + crat 统治）"},{"word":"demotic","pos":"adj.","meaning":"民众的；通俗的（dem 人民 + -otic 形容词后缀）"}]},{"kind":"root","form":"the / theo","meaning":"神","meaningEn":"god","origin":"希腊语 theos","level":"进阶","note":"「神」的话题：神学、无神论者都是这一族。","examples":[{"word":"theology","pos":"n.","meaning":"神学"},{"word":"atheist","pos":"n.","meaning":"无神论者"},{"word":"enthusiasm","pos":"n.","meaning":"热情（en- 在内 + the 神）"},{"word":"theoretical","pos":"adj.","meaning":"理论的"},{"word":"monotheism","pos":"n.","meaning":"一神教（mono- 单一 + the 神 + -ism 主义）"},{"word":"apotheosis","pos":"n.","meaning":"神化；极致（apo- 成为 + theo 神 + -sis 名词后缀）"}]},{"kind":"suffix","form":"-logy / -log","meaning":"言；学科","meaningEn":"word, speech, study","origin":"希腊语 logos","level":"进阶","note":"「说法、学问」：几乎所有学科名都以 -logy 结尾。","examples":[{"word":"logic","pos":"n.","meaning":"逻辑"},{"word":"dialogue","pos":"n.","meaning":"对话"},{"word":"biology","pos":"n.","meaning":"生物学"},{"word":"apology","pos":"n.","meaning":"道歉"},{"word":"psychology","pos":"n.","meaning":"心理学（psycho 心灵 + -logy 学科）"},{"word":"technology","pos":"n.","meaning":"技术；工艺（techno 技艺 + -logy 学科）"}]},{"kind":"root","form":"graph / gram","meaning":"写；画","meaningEn":"to write, to draw","origin":"希腊语 graphein","level":"进阶","note":"「写画」留下的痕迹：图表、语法、telegram 电文。","examples":[{"word":"photograph","pos":"n./v.","meaning":"照片；拍照"},{"word":"grammar","pos":"n.","meaning":"语法"},{"word":"diagram","pos":"n.","meaning":"图表"},{"word":"program","pos":"n./v.","meaning":"程序；节目"},{"word":"paragraph","pos":"n.","meaning":"段落（para- 旁边 + graph 写）"},{"word":"telegram","pos":"n.","meaning":"电报（tele 远 + gram 写下的东西）"}]},{"kind":"root","form":"phon","meaning":"声音","meaningEn":"sound","origin":"希腊语 phone","level":"进阶","note":"「声音」相关的词：电话、交响乐、同音词。","examples":[{"word":"telephone","pos":"n.","meaning":"电话"},{"word":"symphony","pos":"n.","meaning":"交响乐"},{"word":"phonetic","pos":"adj.","meaning":"语音的"},{"word":"microphone","pos":"n.","meaning":"麦克风"},{"word":"saxophone","pos":"n.","meaning":"萨克斯管（saxo 发明者名 + phon 声音）"},{"word":"phonograph","pos":"n.","meaning":"留声机（phon 声音 + graph 写录）"}]},{"kind":"root","form":"bio","meaning":"生命","meaningEn":"life","origin":"希腊语 bios","level":"进阶","note":"希腊语的「生命」，与拉丁 vit/viv 是同一概念的两种来源。","examples":[{"word":"biology","pos":"n.","meaning":"生物学"},{"word":"biography","pos":"n.","meaning":"传记"},{"word":"biochemistry","pos":"n.","meaning":"生物化学"},{"word":"antibiotic","pos":"n./adj.","meaning":"抗生素"},{"word":"biodiversity","pos":"n.","meaning":"生物多样性（bio 生命 + diversity 多样性）"},{"word":"biosphere","pos":"n.","meaning":"生物圈（bio 生命 + sphere 圈层）"}]},{"kind":"root","form":"geo","meaning":"土地；地球","meaningEn":"earth, land","origin":"希腊语 ge","level":"进阶","note":"「大地」相关：地理、地质、几何（测量土地）。","examples":[{"word":"geography","pos":"n.","meaning":"地理"},{"word":"geology","pos":"n.","meaning":"地质学"},{"word":"geometry","pos":"n.","meaning":"几何（geo 地 + metry 测量）"},{"word":"geothermal","pos":"adj.","meaning":"地热的"},{"word":"geocentric","pos":"adj.","meaning":"地心的（geo 地球 + centr 中心 + -ic 形容词后缀）"},{"word":"geophysics","pos":"n.","meaning":"地球物理学（geo 地球 + physics 物理学）"}]},{"kind":"root","form":"psych","meaning":"心灵；精神","meaningEn":"mind, soul","origin":"希腊语 psyche","level":"进阶","note":"「心」的世界：心理学、精神病、让人费解的。","examples":[{"word":"psychology","pos":"n.","meaning":"心理学"},{"word":"psychiatrist","pos":"n.","meaning":"精神科医生"},{"word":"psychic","pos":"adj./n.","meaning":"通灵的；灵媒"},{"word":"psychopath","pos":"n.","meaning":"精神变态者"},{"word":"psychoanalysis","pos":"n.","meaning":"精神分析（psycho 精神 + analysis 分析）"},{"word":"psyche","pos":"n.","meaning":"心灵；灵魂（psych 心灵 + -e）"}]},{"kind":"root","form":"path","meaning":"感觉；痛苦","meaningEn":"feeling, suffering","origin":"希腊语 pathos","level":"进阶","note":"「感受到的」可以是同情，也可以是病痛，还可能是「无感」。","examples":[{"word":"sympathy","pos":"n.","meaning":"同情（sym- 共同 + path 感）"},{"word":"pathetic","pos":"adj.","meaning":"可怜的；差劲的"},{"word":"apathy","pos":"n.","meaning":"冷漠"},{"word":"pathology","pos":"n.","meaning":"病理学"},{"word":"empathy","pos":"n.","meaning":"共情；同理心（em- 进入 + path 感觉 → 感同身受）"},{"word":"pathogen","pos":"n.","meaning":"病原体（path 病痛 + gen 产生）"}]},{"kind":"root","form":"mob / mot / mov","meaning":"移动","meaningEn":"to move","origin":"拉丁语 movere","level":"进阶","note":"「移动」是这一族的主线：动机、情绪（心动）、汽车。","examples":[{"word":"mobile","pos":"adj.","meaning":"移动的"},{"word":"motive","pos":"n.","meaning":"动机"},{"word":"emotion","pos":"n.","meaning":"情绪（e- 向外 + mot 动）"},{"word":"promote","pos":"v.","meaning":"促进；晋升"},{"word":"motionless","pos":"adj.","meaning":"静止不动的（mot 动 + -ion + -less 无）"},{"word":"automobile","pos":"n.","meaning":"汽车（auto- 自己 + mob 移动 → 自己会动的车）"}]},{"kind":"root","form":"sec / sequ","meaning":"跟随","meaningEn":"to follow","origin":"拉丁语 sequi","level":"进阶","note":"「跟在后面」：连续、结果、随之而来。","examples":[{"word":"sequential","pos":"adj.","meaning":"连续的；按顺序的"},{"word":"consequence","pos":"n.","meaning":"结果（con- 一起 + sequ 跟）"},{"word":"obsequious","pos":"adj.","meaning":"谄媚的；顺从的"},{"word":"consecutive","pos":"adj.","meaning":"连续的"},{"word":"persecute","pos":"v.","meaning":"迫害；烦扰（per- 一直 + secut 跟随 → 追着不放）"},{"word":"sequacious","pos":"adj.","meaning":"盲从的；一味追随的"}]},{"kind":"root","form":"string / strict","meaning":"拉紧；束缚","meaningEn":"to tighten, to bind","origin":"拉丁语 stringere","level":"进阶","note":"「拉紧」是限制也是约束：严格、限制、地区（划定的范围）。","examples":[{"word":"strict","pos":"adj.","meaning":"严格的"},{"word":"restrict","pos":"v.","meaning":"限制"},{"word":"district","pos":"n.","meaning":"地区；行政区"},{"word":"restrain","pos":"v.","meaning":"抑制；约束"},{"word":"restrictive","pos":"adj.","meaning":"限制性的"},{"word":"stringent","pos":"adj.","meaning":"严格的；紧缩的（string 拉紧 + -ent）"}]},{"kind":"root","form":"tend / tens","meaning":"伸展；拉紧","meaningEn":"to stretch","origin":"拉丁语 tendere","level":"进阶","note":"把东西「拉长」：紧张、延伸、倾向（心伸向一边）。","examples":[{"word":"extend","pos":"v.","meaning":"延伸；扩展"},{"word":"tension","pos":"n.","meaning":"紧张；张力"},{"word":"intend","pos":"v.","meaning":"打算（in- 向内 + tend 伸）"},{"word":"intense","pos":"adj.","meaning":"强烈的"},{"word":"contend","pos":"v.","meaning":"争辩；争夺（con- 一起 + tend 伸 → 一起用力）"},{"word":"extensive","pos":"adj.","meaning":"广泛的；大量的"}]},{"kind":"root","form":"ver / veri","meaning":"真实","meaningEn":"true","origin":"拉丁语 verus","level":"进阶","note":"「真」的一族：验证、真实、判决（查明真相）。","examples":[{"word":"verify","pos":"v.","meaning":"验证"},{"word":"verdict","pos":"n.","meaning":"裁决（ver 真 + dict 说）"},{"word":"genuine","pos":"adj.","meaning":"真正的"},{"word":"average","pos":"n./adj.","meaning":"平均；普通的"},{"word":"veracity","pos":"n.","meaning":"诚实；真实性（ver 真 + -acity 性质）"},{"word":"veritable","pos":"adj.","meaning":"名副其实的（veri 真 + -table 可…的）"}]},{"kind":"root","form":"fid","meaning":"信任","meaningEn":"trust, faith","origin":"拉丁语 fides","level":"进阶","note":"与「信」有关：信心、忠诚、自信。","examples":[{"word":"confident","pos":"adj.","meaning":"自信的"},{"word":"fidelity","pos":"n.","meaning":"忠诚；保真度"},{"word":"federal","pos":"adj.","meaning":"联邦的（源自「盟约」）"},{"word":"faith","pos":"n.","meaning":"信念；信仰"},{"word":"confidant","pos":"n.","meaning":"知己；密友（con- 完全 + fid 信任 + -ant 人）"},{"word":"confide","pos":"v.","meaning":"倾诉；信赖（con- 完全 + fid 信任）"}]},{"kind":"root","form":"grat / grac","meaning":"感激；愉快","meaningEn":"pleasing, thanks","origin":"拉丁语 gratus","level":"进阶","note":"「讨人喜欢」引出感谢、优雅、免费（令人愉快所以不必付钱）。","examples":[{"word":"grateful","pos":"adj.","meaning":"感激的"},{"word":"gratitude","pos":"n.","meaning":"感激"},{"word":"grace","pos":"n.","meaning":"优雅；恩典"},{"word":"congratulate","pos":"v.","meaning":"祝贺"},{"word":"graciousness","pos":"n.","meaning":"亲切；优雅（grac 愉快 + -ous + -ness）"},{"word":"gratify","pos":"v.","meaning":"使满足；使高兴（grat 愉快 + -ify 使…）"}]},{"kind":"root","form":"serv","meaning":"服务；保持","meaningEn":"to serve, to keep","origin":"拉丁语 servire / servare","level":"进阶","note":"两组同形：service 是服务，preserve 是保存，靠语境分辨。","examples":[{"word":"service","pos":"n./v.","meaning":"服务"},{"word":"preserve","pos":"v.","meaning":"保存；保护"},{"word":"observe","pos":"v.","meaning":"观察；遵守"},{"word":"reserve","pos":"n./v.","meaning":"预订；储备"},{"word":"conserve","pos":"v.","meaning":"保存；节约（con- 一起 + serv 保持）"},{"word":"deserve","pos":"v.","meaning":"值得；应得（de- 完全 + serv 服务 → 服务到位）"}]},{"kind":"root","form":"fin","meaning":"结束；界限","meaningEn":"end, limit","origin":"拉丁语 finis","level":"进阶","note":"「到边界就结束」：最终的、精炼的、定义（划出界限）。","examples":[{"word":"final","pos":"adj./n.","meaning":"最终的；决赛"},{"word":"finish","pos":"v./n.","meaning":"完成"},{"word":"define","pos":"v.","meaning":"定义（de- 完全 + fin 界限）"},{"word":"infinite","pos":"adj.","meaning":"无限的"},{"word":"confine","pos":"v./n.","meaning":"限制；范围（con- 一起 + fin 界限）"},{"word":"definitive","pos":"adj.","meaning":"决定性的；最终的（de- 完全 + fin 界限 + -itive）"}]},{"kind":"root","form":"cap / cept / cip","meaning":"拿；抓","meaningEn":"to take, to seize","origin":"拉丁语 capere","level":"进阶","note":"「拿」的家族：接受、能力（能拿住）、概念（抓住的想法）。","examples":[{"word":"accept","pos":"v.","meaning":"接受"},{"word":"capture","pos":"v./n.","meaning":"捕获"},{"word":"capacity","pos":"n.","meaning":"容量；能力"},{"word":"concept","pos":"n.","meaning":"概念"},{"word":"municipal","pos":"adj.","meaning":"市政的；地方自治的"},{"word":"except","pos":"prep./v.","meaning":"除…之外；排除（ex- 出 + cept 拿 → 拿出去）"}]},{"kind":"root","form":"lect / leg / lig","meaning":"选择；收集；读","meaningEn":"to choose, to gather, to read","origin":"拉丁语 legere","level":"进阶","note":"「挑出来、聚起来」：收集是聚，选举是挑，阅读是把字挑出来。","examples":[{"word":"collect","pos":"v.","meaning":"收集"},{"word":"select","pos":"v.","meaning":"选择"},{"word":"elect","pos":"v.","meaning":"选举"},{"word":"intelligent","pos":"adj.","meaning":"聪明的（在两者间会挑）"},{"word":"legend","pos":"n.","meaning":"传说；传奇人物（leg 读 + -end → 值得一读的东西）"},{"word":"eligible","pos":"adj.","meaning":"有资格的（e- 出 + lig 挑选 + -ible → 可被挑出的）"}]},{"kind":"root","form":"junct / join","meaning":"连接","meaningEn":"to join","origin":"拉丁语 jungere","level":"进阶","note":"把两处「接起来」：连接、结合、junction 交叉口。","examples":[{"word":"junction","pos":"n.","meaning":"交叉口；接合处"},{"word":"conjunction","pos":"n.","meaning":"连词；结合"},{"word":"adjacent","pos":"adj.","meaning":"相邻的"},{"word":"joint","pos":"adj./n.","meaning":"联合的；关节"},{"word":"adjoin","pos":"v.","meaning":"毗连；紧挨（ad- 向 + join 连接）"},{"word":"disjoint","pos":"v.","meaning":"使脱节；拆开"}]},{"kind":"root","form":"nov","meaning":"新","meaningEn":"new","origin":"拉丁语 novus","level":"进阶","note":"「新」的一族：新颖、革新、新手。","examples":[{"word":"novel","pos":"adj./n.","meaning":"新奇的；小说"},{"word":"innovate","pos":"v.","meaning":"创新"},{"word":"renovate","pos":"v.","meaning":"翻新"},{"word":"novice","pos":"n.","meaning":"新手"},{"word":"novelty","pos":"n.","meaning":"新奇；新颖的事物（nov 新 + -elty）"},{"word":"innovative","pos":"adj.","meaning":"创新的；新颖的（in- 使 + nov 新 + -ative）"}]},{"kind":"root","form":"sol","meaning":"太阳；独自","meaningEn":"sun; alone","origin":"拉丁语 sol / solus","level":"进阶","note":"两个 sol 同形：太阳的 sol 与「独自」的 solus，注意分辨。","examples":[{"word":"solar","pos":"adj.","meaning":"太阳的"},{"word":"solid","pos":"adj./n.","meaning":"坚固的；固体"},{"word":"solo","pos":"n./adj.","meaning":"独奏；独自的"},{"word":"isolate","pos":"v.","meaning":"隔离（使成孤岛）"},{"word":"solitude","pos":"n.","meaning":"孤独；独处（sol 独自 + -itude 状态）"},{"word":"solitary","pos":"adj.","meaning":"独自的；孤独的（sol 独自 + -itary）"}]},{"kind":"root","form":"terr","meaning":"土地","meaningEn":"earth, land","origin":"拉丁语 terra","level":"进阶","note":"拉丁语的「土地」，与希腊 geo 呼应：领域、领土、恐怖（令人发抖的土地）。","examples":[{"word":"territory","pos":"n.","meaning":"领土；领域"},{"word":"terrain","pos":"n.","meaning":"地形"},{"word":"terrace","pos":"n.","meaning":"露台；梯田"},{"word":"Mediterranean","pos":"n./adj.","meaning":"地中海（medi 中 + terr 地）"},{"word":"terrestrial","pos":"adj.","meaning":"陆地的；地球的（terr 土地 + -estrial）"},{"word":"extraterrestrial","pos":"adj./n.","meaning":"地球之外的；外星人（extra- 之外 + terrestrial 地球的）"}]},{"kind":"root","form":"aqua / aque / aqui","meaning":"水","meaningEn":"water","origin":"拉丁语 aqua","level":"进阶","note":"「水」的拉丁名：水族馆、水上运动、含水层。","examples":[{"word":"aquarium","pos":"n.","meaning":"水族馆"},{"word":"aquatic","pos":"adj.","meaning":"水生的"},{"word":"aqueduct","pos":"n.","meaning":"渡槽；输水道"},{"word":"aquifer","pos":"n.","meaning":"含水层"},{"word":"aqueous","pos":"adj.","meaning":"水的；水状的（aqua 水 + -eous）"},{"word":"aquaplane","pos":"n.","meaning":"滑水板"}]},{"kind":"root","form":"greg","meaning":"群","meaningEn":"flock, group","origin":"拉丁语 grex","level":"高级","note":"「成群」是关键词：聚合在一起，或从群体中分开。","examples":[{"word":"gregarious","pos":"adj.","meaning":"群居的；爱社交的"},{"word":"aggregate","pos":"n./v.","meaning":"总计；聚集"},{"word":"congregation","pos":"n.","meaning":"集会；会众"},{"word":"segregate","pos":"v.","meaning":"隔离（se- 分开 + greg 群）"},{"word":"segregation","pos":"n.","meaning":"隔离；种族隔离（se- 分开 + greg 群 + -ation）"},{"word":"egregious","pos":"adj.","meaning":"极其恶劣的（e- 出 + greg 群 → 突出于群体之外）"}]},{"kind":"root","form":"loqu / locut","meaning":"说话","meaningEn":"to speak","origin":"拉丁语 loqui","level":"高级","note":"比 dict 更「文雅」的说话：健谈、独白、口才。","examples":[{"word":"eloquent","pos":"adj.","meaning":"雄辩的"},{"word":"soliloquy","pos":"n.","meaning":"独白"},{"word":"loquacious","pos":"adj.","meaning":"健谈的"},{"word":"colloquial","pos":"adj.","meaning":"口语的"},{"word":"eloquence","pos":"n.","meaning":"口才；雄辩（e- 出 + loqu 说 + -ence）"},{"word":"circumlocution","pos":"n.","meaning":"迂回的说法（circum- 环绕 + locut 说 + -ion）"}]},{"kind":"root","form":"voc","meaning":"召唤","meaningEn":"to call","origin":"拉丁语 vocare","level":"高级","note":"和 voc/vok「叫」是同一支，重点在「被叫去做什么」：职业即天职。","examples":[{"word":"vocation","pos":"n.","meaning":"职业；使命感"},{"word":"advocate","pos":"v./n.","meaning":"提倡；倡导者"},{"word":"provoke","pos":"v.","meaning":"激起；挑衅"},{"word":"evoke","pos":"v.","meaning":"唤起（e- 向外 + vok 叫）"},{"word":"convoke","pos":"v.","meaning":"召集（con- 共同 + vok 叫）"},{"word":"revoke","pos":"v.","meaning":"撤销；吊销（re- 回 + vok 叫）"}]},{"kind":"root","form":"spond / spons","meaning":"承诺；回答","meaningEn":"to promise, to answer","origin":"拉丁语 spondere","level":"高级","note":"「郑重应答」就是承诺：回应、负责、赞助（出钱承诺）。","examples":[{"word":"respond","pos":"v.","meaning":"回应"},{"word":"responsible","pos":"adj.","meaning":"负责的"},{"word":"sponsor","pos":"n./v.","meaning":"赞助商；赞助"},{"word":"correspond","pos":"v.","meaning":"通信；相符"},{"word":"despondent","pos":"adj.","meaning":"沮丧的（de- 去掉 + spond 承诺）"},{"word":"responsive","pos":"adj.","meaning":"反应灵敏的；回应的"}]},{"kind":"root","form":"val / vail","meaning":"强壮；价值","meaningEn":"to be strong, to be worth","origin":"拉丁语 valere","level":"高级","note":"「有力、有用」即有价值：有效、勇敢、普遍（对所有人有效）。","examples":[{"word":"valid","pos":"adj.","meaning":"有效的"},{"word":"value","pos":"n./v.","meaning":"价值；重视"},{"word":"prevail","pos":"v.","meaning":"盛行；获胜"},{"word":"universal","pos":"adj.","meaning":"普遍的"},{"word":"convalesce","pos":"v.","meaning":"康复（con- 完全 + val 强壮）"},{"word":"evaluate","pos":"v.","meaning":"评估；评价"}]},{"kind":"root","form":"lev","meaning":"举起；轻","meaningEn":"light, to raise","origin":"拉丁语 levare","level":"高级","note":"「使变轻」既是举起也是缓解：减轻、提升、相关。","examples":[{"word":"elevate","pos":"v.","meaning":"提升"},{"word":"relieve","pos":"v.","meaning":"缓解；减轻"},{"word":"relevant","pos":"adj.","meaning":"相关的（能抬得起来）"},{"word":"lever","pos":"n.","meaning":"杠杆"},{"word":"alleviate","pos":"v.","meaning":"减轻；缓和（al- 加强 + lev 轻）"},{"word":"levity","pos":"n.","meaning":"轻浮；轻率"}]},{"kind":"root","form":"reg","meaning":"统治；规则","meaningEn":"to rule, king","origin":"拉丁语 rex / regere","level":"高级","note":"「定规矩」：规则、管理、地区（受管辖范围）。","examples":[{"word":"regular","pos":"adj.","meaning":"规律的"},{"word":"region","pos":"n.","meaning":"地区"},{"word":"regulate","pos":"v.","meaning":"管理；调节"},{"word":"reign","pos":"n./v.","meaning":"统治；在位"},{"word":"regency","pos":"n.","meaning":"摄政；摄政期"},{"word":"regime","pos":"n.","meaning":"政权；制度"}]},{"kind":"root","form":"tang / tact / ting","meaning":"接触","meaningEn":"to touch","origin":"拉丁语 tangere","level":"高级","note":"「碰到」产生两种结果：接触与感染，以及被触动的感觉。","examples":[{"word":"contact","pos":"n./v.","meaning":"接触；联系"},{"word":"tangible","pos":"adj.","meaning":"可触摸的；确实的"},{"word":"contagious","pos":"adj.","meaning":"传染性的"},{"word":"tactile","pos":"adj.","meaning":"触觉的"},{"word":"intangible","pos":"adj.","meaning":"无形的；难以捉摸的（in- 否 + tangible 可触的）"},{"word":"tact","pos":"n.","meaning":"得体；圆通（懂得怎么「碰」人）"}]},{"kind":"root","form":"secut / sequ","meaning":"跟随","meaningEn":"to follow","origin":"拉丁语 sequi（分词 secutus）","level":"高级","note":"sec/sequ 的分词形式，多见于 execute（跟进到做完）。","examples":[{"word":"execute","pos":"v.","meaning":"执行；处决"},{"word":"prosecute","pos":"v.","meaning":"起诉；检控"},{"word":"persecute","pos":"v.","meaning":"迫害"},{"word":"consecutive","pos":"adj.","meaning":"连续的"},{"word":"sequence","pos":"n.","meaning":"顺序；序列（一个跟一个）"},{"word":"subsequent","pos":"adj.","meaning":"随后的（sub- 在下 + secut 跟随）"}]},{"kind":"root","form":"arch","meaning":"首领；古老","meaningEn":"chief, ancient","origin":"希腊语 archein / arche","level":"高级","note":"「为首」或「起初」：建筑（arch 拱）、考古（研究古老）、君主。","examples":[{"word":"architecture","pos":"n.","meaning":"建筑学"},{"word":"archaeology","pos":"n.","meaning":"考古学"},{"word":"monarch","pos":"n.","meaning":"君主（mono 单一 + arch 首领）"},{"word":"hierarchy","pos":"n.","meaning":"等级制度（hier 神圣 + arch 统治）"},{"word":"anarchy","pos":"n.","meaning":"无政府状态（an- 无 + arch 首领）"},{"word":"archetype","pos":"n.","meaning":"原型；典型（arche 起初 + type 型）"}]},{"kind":"suffix","form":"-cracy / -crat","meaning":"统治；权力","meaningEn":"power, rule","origin":"希腊语 kratos","level":"高级","note":"「谁掌权」：民主、官僚、专制，全靠这个词尾表态。","examples":[{"word":"democracy","pos":"n.","meaning":"民主"},{"word":"bureaucracy","pos":"n.","meaning":"官僚体制"},{"word":"autocrat","pos":"n.","meaning":"独裁者"},{"word":"aristocracy","pos":"n.","meaning":"贵族统治"},{"word":"theocracy","pos":"n.","meaning":"神权政治（theo 神 + cracy 统治）"},{"word":"bureaucrat","pos":"n.","meaning":"官僚（bureau 衙门 + crat 掌权者）"}]},{"kind":"prefix","form":"pan-","meaning":"全部","meaningEn":"all","origin":"希腊语 pan","level":"高级","note":"「全都包括」：全景、大流行、万神殿。","examples":[{"word":"panorama","pos":"n.","meaning":"全景"},{"word":"pandemic","pos":"n./adj.","meaning":"大流行病"},{"word":"pantheon","pos":"n.","meaning":"万神殿；众神"},{"word":"panic","pos":"n.","meaning":"恐慌（源自牧神 Pan）"},{"word":"panacea","pos":"n.","meaning":"万能药（pan- 全 + acea 治疗）"},{"word":"pantheism","pos":"n.","meaning":"泛神论（pan- 全 + the 神 + -ism 主义）"}]},{"kind":"prefix","form":"tele-","meaning":"远","meaningEn":"far off","origin":"希腊语 tele","level":"高阶","note":"「远远地」：电视、电话、望远镜，都是把远处拉近。","examples":[{"word":"telephone","pos":"n.","meaning":"电话"},{"word":"television","pos":"n.","meaning":"电视"},{"word":"telescope","pos":"n.","meaning":"望远镜"},{"word":"telecommunications","pos":"n.","meaning":"电信"},{"word":"telepathy","pos":"n.","meaning":"心灵感应（tele- 远 + path 感觉）"},{"word":"telegram","pos":"n.","meaning":"电报（tele- 远 + gram 写）"}]},{"kind":"prefix","form":"micro-","meaning":"小","meaningEn":"small","origin":"希腊语 mikros","level":"高阶","note":"「极小」：显微镜、微生物、麦克风（把小声放大）。","examples":[{"word":"microscope","pos":"n.","meaning":"显微镜"},{"word":"microbe","pos":"n.","meaning":"微生物"},{"word":"microphone","pos":"n.","meaning":"麦克风"},{"word":"microwave","pos":"n.","meaning":"微波；微波炉"},{"word":"microbiology","pos":"n.","meaning":"微生物学（micro- 微小 + biology 生物学）"},{"word":"microchip","pos":"n.","meaning":"微芯片（micro- 微小 + chip 芯片）"}]},{"kind":"prefix","form":"macro-","meaning":"大；宏观","meaningEn":"large, long","origin":"希腊语 makros","level":"高阶","note":"与 micro 相对：宏观世界、大型经济、宏指令。","examples":[{"word":"macroeconomics","pos":"n.","meaning":"宏观经济学"},{"word":"macrocosm","pos":"n.","meaning":"宏观世界"},{"word":"macroscopic","pos":"adj.","meaning":"宏观的"},{"word":"macro","pos":"n.","meaning":"宏指令"},{"word":"macromolecule","pos":"n.","meaning":"大分子（macro- 大 + molecule 分子）"},{"word":"macrobiotic","pos":"adj.","meaning":"长寿饮食的（macro- 大 + bio 生命）"}]},{"kind":"prefix","form":"phil-","meaning":"爱","meaningEn":"love","origin":"希腊语 philos","level":"高阶","note":"「喜爱」：哲学是爱智慧，慈善家是爱人，集邮是爱邮。","examples":[{"word":"philosophy","pos":"n.","meaning":"哲学（爱智慧）"},{"word":"philanthropy","pos":"n.","meaning":"慈善（爱人）"},{"word":"philharmonic","pos":"adj.","meaning":"爱乐的"},{"word":"bibliophile","pos":"n.","meaning":"藏书家"},{"word":"philology","pos":"n.","meaning":"语文学（phil- 爱 + log 言辞）"},{"word":"philately","pos":"n.","meaning":"集邮（phil- 爱 + ately 免税）"}]},{"kind":"prefix","form":"mis-","meaning":"恨；错误","meaningEn":"hatred; wrong","origin":"希腊语 misein / 古英语 mis-","level":"高阶","note":"同形两组：misanthrope 是恨人者，mistake 是拿错了。","examples":[{"word":"misanthrope","pos":"n.","meaning":"厌恶人类者"},{"word":"misogyny","pos":"n.","meaning":"厌女"},{"word":"misunderstanding","pos":"n.","meaning":"误解"},{"word":"mislead","pos":"v.","meaning":"误导"},{"word":"misconception","pos":"n.","meaning":"误解；错误观念（mis- 错误 + conception 概念）"},{"word":"misinterpret","pos":"v.","meaning":"曲解；误释（mis- 错误 + interpret 解释）"}]},{"kind":"root","form":"nom / nym","meaning":"名字","meaningEn":"name","origin":"希腊语 onoma / 拉丁语 nomen","level":"高阶","note":"「名字」相关：命名、同义词、匿名。","examples":[{"word":"nominate","pos":"v.","meaning":"提名；命名"},{"word":"synonym","pos":"n.","meaning":"同义词"},{"word":"anonymous","pos":"adj.","meaning":"匿名的"},{"word":"acronym","pos":"n.","meaning":"首字母缩写"},{"word":"pseudonym","pos":"n.","meaning":"笔名；假名（pseud 假 + nym 名）"},{"word":"misnomer","pos":"n.","meaning":"用词不当；错误名称（mis- 错 + nom 名）"}]},{"kind":"root","form":"sci","meaning":"知道","meaningEn":"to know","origin":"拉丁语 scire","level":"高阶","note":"「知道」才有科学：意识是共同知道，良知是心里知道。","examples":[{"word":"science","pos":"n.","meaning":"科学"},{"word":"conscious","pos":"adj.","meaning":"有意识的"},{"word":"conscience","pos":"n.","meaning":"良心"},{"word":"omniscient","pos":"adj.","meaning":"无所不知的"},{"word":"prescient","pos":"adj.","meaning":"有先见之明的（pre- 预先 + sci 知道）"},{"word":"subconscious","pos":"adj.","meaning":"潜意识的（sub- 在下 + conscious 有意识的）"}]},{"kind":"root","form":"cogn / gnos","meaning":"认识","meaningEn":"to know","origin":"拉丁语 cognoscere / 希腊语 gnosis","level":"高阶","note":"比 sci 更强调「认出、识别」的过程：认知、识别、诊断（彻底认识）。","examples":[{"word":"recognize","pos":"v.","meaning":"认出；承认"},{"word":"cognitive","pos":"adj.","meaning":"认知的"},{"word":"diagnosis","pos":"n.","meaning":"诊断"},{"word":"ignore","pos":"v.","meaning":"忽视（i- 否 + gnos 知）"},{"word":"prognosis","pos":"n.","meaning":"预后；预判（pro- 预先 + gnos 认识）"},{"word":"agnostic","pos":"adj./n.","meaning":"不可知论的；不可知论者（a- 否 + gnost 知）"}]},{"kind":"root","form":"mem / mnem","meaning":"记忆","meaningEn":"memory","origin":"拉丁语 memor / 希腊语 mneme","level":"高阶","note":"「记住」：纪念、备忘录、失忆、记忆术。","examples":[{"word":"memory","pos":"n.","meaning":"记忆"},{"word":"memorial","pos":"n./adj.","meaning":"纪念碑；纪念的"},{"word":"amnesia","pos":"n.","meaning":"失忆症"},{"word":"mnemonic","pos":"n./adj.","meaning":"助记法"},{"word":"memorize","pos":"v.","meaning":"记住；背下来"},{"word":"commemorate","pos":"v.","meaning":"纪念（com- 共同 + memor 记忆）"}]},{"kind":"root","form":"cosm","meaning":"宇宙；秩序","meaningEn":"world, order","origin":"希腊语 kosmos","level":"高阶","note":"希腊人把有秩序的整个世界叫 cosmos，与「混乱」相对。","examples":[{"word":"cosmos","pos":"n.","meaning":"宇宙"},{"word":"cosmic","pos":"adj.","meaning":"宇宙的"},{"word":"cosmopolitan","pos":"adj.","meaning":"世界性的（cosm 世界 + polit 城市）"},{"word":"microcosm","pos":"n.","meaning":"微观世界"},{"word":"cosmonaut","pos":"n.","meaning":"宇航员（cosm 宇宙 + naut 航行者）"},{"word":"cosmology","pos":"n.","meaning":"宇宙学（cosm 宇宙 + -logy 学科）"}]},{"kind":"root","form":"astr / aster","meaning":"星星","meaningEn":"star","origin":"希腊语 astron","level":"高阶","note":"「星」的希腊名：天文学、宇航员、星号、灾难（星位不吉）。","examples":[{"word":"astronomy","pos":"n.","meaning":"天文学"},{"word":"astronaut","pos":"n.","meaning":"宇航员"},{"word":"asterisk","pos":"n.","meaning":"星号"},{"word":"disaster","pos":"n.","meaning":"灾难（dis- 坏 + aster 星）"},{"word":"astrology","pos":"n.","meaning":"占星术（astro 星 + logy 学说）"},{"word":"asteroid","pos":"n.","meaning":"小行星（aster 星 + -oid 像……的）"}]},{"kind":"root","form":"hydr","meaning":"水","meaningEn":"water","origin":"希腊语 hydor","level":"高阶","note":"希腊语的「水」，与拉丁 aqua 对应：水力、脱水、氢。","examples":[{"word":"hydrogen","pos":"n.","meaning":"氢（水的生成者）"},{"word":"hydraulic","pos":"adj.","meaning":"水力的"},{"word":"dehydrate","pos":"v.","meaning":"脱水"},{"word":"hydroelectric","pos":"adj.","meaning":"水力发电的"},{"word":"hydrofoil","pos":"n.","meaning":"水翼船；水翼"},{"word":"hydrant","pos":"n.","meaning":"消防栓（取水之物）"}]},{"kind":"root","form":"therm","meaning":"热","meaningEn":"heat","origin":"希腊语 therme","level":"高阶","note":"「热」的一族：温度计、恒温、地热。","examples":[{"word":"thermometer","pos":"n.","meaning":"温度计"},{"word":"thermal","pos":"adj.","meaning":"热的"},{"word":"thermostat","pos":"n.","meaning":"恒温器"},{"word":"hypothermia","pos":"n.","meaning":"体温过低"},{"word":"geothermal","pos":"adj.","meaning":"地热的（geo- 地 + therm 热）"},{"word":"thermos","pos":"n.","meaning":"保温瓶；热水瓶"}]},{"kind":"root","form":"dict（jud）","meaning":"法律；宣判","meaningEn":"law, to judge","origin":"拉丁语 judex / dicere","level":"高阶","note":"审判就是「宣说法律」：司法、判决、法官。","examples":[{"word":"judge","pos":"n./v.","meaning":"法官；判断"},{"word":"judicial","pos":"adj.","meaning":"司法的"},{"word":"prejudice","pos":"n.","meaning":"偏见（预先判断）"},{"word":"justice","pos":"n.","meaning":"正义；司法"},{"word":"judgement","pos":"n.","meaning":"判断；判决"},{"word":"adjudicate","pos":"v.","meaning":"裁定；判决（ad- 向 + judic 法官 + -ate）"}]},{"kind":"root","form":"leg","meaning":"法律","meaningEn":"law","origin":"拉丁语 lex / legis","level":"高阶","note":"与 lect/leg「选择」同形，靠搭配分辨：legal 是法律的。","examples":[{"word":"legal","pos":"adj.","meaning":"合法的"},{"word":"legislation","pos":"n.","meaning":"立法"},{"word":"privilege","pos":"n.","meaning":"特权（私人的法律）"},{"word":"legitimate","pos":"adj.","meaning":"合法的；正当的"},{"word":"legalize","pos":"v.","meaning":"使合法化"},{"word":"illegal","pos":"adj.","meaning":"非法的（il- 不 + legal 合法的）"}]},{"kind":"root","form":"poli","meaning":"城市；政治","meaningEn":"city, state","origin":"希腊语 polis","level":"高阶","note":"「城邦」是政治的原点：政治、政策、大都市、警察。","examples":[{"word":"politics","pos":"n.","meaning":"政治"},{"word":"policy","pos":"n.","meaning":"政策"},{"word":"metropolitan","pos":"adj.","meaning":"大都市的"},{"word":"cosmopolitan","pos":"adj.","meaning":"世界性的"},{"word":"political","pos":"adj.","meaning":"政治的"},{"word":"politician","pos":"n.","meaning":"政治家；政客"}]},{"kind":"root","form":"pot","meaning":"能力；力量","meaningEn":"power, ability","origin":"拉丁语 potis / posse","level":"高阶","note":"「能做到」就是有力量：潜能、可能、强大。","examples":[{"word":"potential","pos":"adj./n.","meaning":"潜在的；潜力"},{"word":"possible","pos":"adj.","meaning":"可能的"},{"word":"potent","pos":"adj.","meaning":"强有力的"},{"word":"omnipotent","pos":"adj.","meaning":"全能的"},{"word":"potency","pos":"n.","meaning":"效力；力量"},{"word":"impotent","pos":"adj.","meaning":"无力的（im- 不 + pot 能 + -ent）"}]},{"kind":"root","form":"vac / van / void","meaning":"空","meaningEn":"empty","origin":"拉丁语 vacare / vanus","level":"高阶","note":"「空」：假期（空出来的时间）、真空、消失、徒劳。","examples":[{"word":"vacation","pos":"n.","meaning":"假期"},{"word":"vacant","pos":"adj.","meaning":"空的；空缺的"},{"word":"vanish","pos":"v.","meaning":"消失"},{"word":"vain","pos":"adj.","meaning":"徒劳的；虚荣的"},{"word":"vacuum","pos":"n.","meaning":"真空；吸尘器"},{"word":"evacuate","pos":"v.","meaning":"疏散；撤离（e- 出 + vac 空 + -ate）"}]},{"kind":"root","form":"cern（cert）/ cret / crim","meaning":"分辨；筛选","meaningEn":"to sift, to separate","origin":"拉丁语 cernere","level":"高阶","note":"「筛出差别」：辨别、秘密（分开的）、犯罪（被判定）。","examples":[{"word":"discern","pos":"v.","meaning":"辨别"},{"word":"discriminate","pos":"v.","meaning":"区别；歧视"},{"word":"secret","pos":"n./adj.","meaning":"秘密（被分离出来的）"},{"word":"certain","pos":"adj.","meaning":"确定的"},{"word":"ascertain","pos":"v.","meaning":"查明；确定（as- 使 + certain 确定的）"},{"word":"discernment","pos":"n.","meaning":"洞察力；辨别力"}]},{"kind":"root","form":"prob / prov / proof","meaning":"证明；试验","meaningEn":"to test, to prove","origin":"拉丁语 probare","level":"高阶","note":"「检验过才为真」：证明、可能（可检验）、批准、概率。","examples":[{"word":"prove","pos":"v.","meaning":"证明"},{"word":"probable","pos":"adj.","meaning":"很可能的"},{"word":"approve","pos":"v.","meaning":"批准；赞成"},{"word":"probation","pos":"n.","meaning":"试用期；缓刑"},{"word":"proof","pos":"n.","meaning":"证据；证明"},{"word":"improbable","pos":"adj.","meaning":"不太可能的（im- 不 + probable 可能的）"}]},{"kind":"root","form":"sent / sens（path）","meaning":"感受；情绪","meaningEn":"feeling","origin":"拉丁语 sentire","level":"高阶","note":"sens/sent 的引申：情绪与看法往往藏在「感觉」里。","examples":[{"word":"sentiment","pos":"n.","meaning":"情感；观点"},{"word":"consensus","pos":"n.","meaning":"共识（感觉一致）"},{"word":"resent","pos":"v.","meaning":"怨恨（反复感觉）"},{"word":"sensation","pos":"n.","meaning":"感觉；轰动"},{"word":"sensitive","pos":"adj.","meaning":"敏感的"},{"word":"sensible","pos":"adj.","meaning":"明智的；合情理的"}]},{"kind":"root","form":"fac（fic）","meaning":"做；使","meaningEn":"to make","origin":"拉丁语 facere","level":"高阶","note":"fic 是 fac 在词中弱化的形式：efficient 是做出效果的。","examples":[{"word":"efficient","pos":"adj.","meaning":"高效的"},{"word":"sufficient","pos":"adj.","meaning":"足够的"},{"word":"magnificent","pos":"adj.","meaning":"壮丽的（做得很大）"},{"word":"sacrifice","pos":"n./v.","meaning":"牺牲（使成神圣）"},{"word":"factory","pos":"n.","meaning":"工厂（做东西的地方）"},{"word":"manufacture","pos":"v./n.","meaning":"制造（manu 手 + fact 做）"}]},{"kind":"root","form":"grat（grad）","meaning":"步；等级","meaningEn":"step, degree","origin":"拉丁语 gradus","level":"高阶","note":"grad 表示「台阶」：等级、毕业（走完台阶）、逐渐。","examples":[{"word":"grade","pos":"n./v.","meaning":"等级；评分"},{"word":"graduate","pos":"v./n.","meaning":"毕业；毕业生"},{"word":"upgrade","pos":"v./n.","meaning":"升级"},{"word":"degrade","pos":"v.","meaning":"降级；贬低"},{"word":"centigrade","pos":"adj.","meaning":"摄氏的（百分度的）"},{"word":"retrograde","pos":"adj.","meaning":"倒退的（retro- 向后 + grad 步）"}]},{"kind":"root","form":"ple / plen / plet","meaning":"满","meaningEn":"to fill, full","origin":"拉丁语 plere","level":"高阶","note":"「填满」：complete 完全填满，supply 从下面补满。","examples":[{"word":"complete","pos":"adj./v.","meaning":"完整的；完成"},{"word":"supply","pos":"v./n.","meaning":"供应"},{"word":"plenty","pos":"n.","meaning":"充足"},{"word":"complement","pos":"n./v.","meaning":"补充；补足物"},{"word":"plentiful","pos":"adj.","meaning":"丰富的；充裕的"},{"word":"replenish","pos":"v.","meaning":"补充；重新装满（re- 再 + plen 满 + -ish）"}]},{"kind":"root","form":"prehend（pris）","meaning":"理解；抓取","meaningEn":"to grasp mentally","origin":"拉丁语 prehendere","level":"高阶","note":"pris 是它的过去分词形式，comprise 也是「抓在一起」。","examples":[{"word":"comprehensive","pos":"adj.","meaning":"全面的"},{"word":"apprehend","pos":"v.","meaning":"逮捕；理解"},{"word":"comprise","pos":"v.","meaning":"包含；构成"},{"word":"reprehend","pos":"v.","meaning":"责备"},{"word":"comprehend","pos":"v.","meaning":"理解；包含"},{"word":"prison","pos":"n.","meaning":"监狱（抓人之地）"}]},{"kind":"root","form":"part","meaning":"部分；分开","meaningEn":"part, to divide","origin":"拉丁语 pars","level":"高阶","note":"「分」与「份」同源：参与（取得一份）、分离、政党。","examples":[{"word":"participate","pos":"v.","meaning":"参与（取得一份）"},{"word":"partial","pos":"adj.","meaning":"部分的；偏袒的"},{"word":"depart","pos":"v.","meaning":"离开；出发"},{"word":"particle","pos":"n.","meaning":"微粒"},{"word":"partition","pos":"n./v.","meaning":"隔断；分割"},{"word":"apart","pos":"adv.","meaning":"分开地；相隔"}]},{"kind":"root","form":"popul / publ","meaning":"公众；人民","meaningEn":"people, public","origin":"拉丁语 populus","level":"高阶","note":"拉丁的「人民」，与希腊 dem 平行：流行、人口、公共、出版。","examples":[{"word":"popular","pos":"adj.","meaning":"流行的"},{"word":"population","pos":"n.","meaning":"人口"},{"word":"public","pos":"adj./n.","meaning":"公共的；公众"},{"word":"publish","pos":"v.","meaning":"出版"},{"word":"republic","pos":"n.","meaning":"共和国（res 事务 + public 公众的）"},{"word":"popularity","pos":"n.","meaning":"流行；受欢迎"}]},{"kind":"root","form":"sanct","meaning":"神圣","meaningEn":"holy","origin":"拉丁语 sanctus","level":"高阶","note":"「神圣不可侵犯」：圣所、制裁（维护神圣）、批准。","examples":[{"word":"sanctuary","pos":"n.","meaning":"避难所；圣所"},{"word":"sanction","pos":"n./v.","meaning":"制裁；批准"},{"word":"saint","pos":"n.","meaning":"圣人"},{"word":"sacred","pos":"adj.","meaning":"神圣的"},{"word":"sanctity","pos":"n.","meaning":"神圣；圣洁"},{"word":"sanctify","pos":"v.","meaning":"使神圣；赐福于"}]},{"kind":"root","form":"clin","meaning":"倾斜","meaningEn":"to lean, to bend","origin":"拉丁语 clinare","level":"高阶","note":"「身体倾斜」引出两种词义：倾向（心歪向一边）与临床（床前）。","examples":[{"word":"incline","pos":"v./n.","meaning":"倾向；斜坡"},{"word":"decline","pos":"v./n.","meaning":"下降；拒绝"},{"word":"climate","pos":"n.","meaning":"气候（地带的倾斜）"},{"word":"clinical","pos":"adj.","meaning":"临床的"},{"word":"recline","pos":"v.","meaning":"斜倚；躺下（re- 向后 + clin 倾斜）"},{"word":"inclination","pos":"n.","meaning":"倾向；倾斜（in- 向 + clin 倾斜 + -ation）"}]},{"kind":"root","form":"sed / sess / sid","meaning":"坐","meaningEn":"to sit","origin":"拉丁语 sedere","level":"高阶","note":"「坐下来」：开会（坐在一起）、居住、继承、主席。","examples":[{"word":"session","pos":"n.","meaning":"会议；一段时期"},{"word":"resident","pos":"n./adj.","meaning":"居民；居住的"},{"word":"president","pos":"n.","meaning":"总统；校长（坐在前面）"},{"word":"sediment","pos":"n.","meaning":"沉淀物（坐下之物）"},{"word":"supersede","pos":"v.","meaning":"取代；接替（super- 在上 + sed 坐）"},{"word":"assess","pos":"v.","meaning":"评估（坐在旁边审定）"}]},{"kind":"root","form":"spir（spirit）","meaning":"精神；气","meaningEn":"spirit, breath","origin":"拉丁语 spiritus","level":"高阶","note":"spir 的名词形式：灵性、士气、团队精神都源于「一口气」。","examples":[{"word":"spiritual","pos":"adj.","meaning":"精神的；灵性的"},{"word":"morale","pos":"n.","meaning":"士气"},{"word":"conspiracy","pos":"n.","meaning":"阴谋（一起呼吸）"},{"word":"respiration","pos":"n.","meaning":"呼吸"},{"word":"aspiration","pos":"n.","meaning":"志向；渴望（a- 向 + spir 气 → 向往）"},{"word":"dispirit","pos":"v.","meaning":"使气馁（dis- 去掉 + spirit 精神）"}]},{"kind":"root","form":"trib","meaning":"给予；分配","meaningEn":"to give, to assign","origin":"拉丁语 tribuere","level":"高阶","note":"「分给」：贡献是给出，归因是分派原因，部落是被分配的群体。","examples":[{"word":"contribute","pos":"v.","meaning":"贡献；投稿"},{"word":"distribute","pos":"v.","meaning":"分发；分布"},{"word":"attribute","pos":"v./n.","meaning":"归因于；属性"},{"word":"tribute","pos":"n.","meaning":"致敬；贡品"},{"word":"tributary","pos":"n./adj.","meaning":"支流；进贡的（tribut 给予 + -ary）"},{"word":"retribution","pos":"n.","meaning":"报应；惩罚（re- 回 + tribut 给 + -ion）"}]},{"kind":"root","form":"vac（voc）","meaning":"空闲；空缺","meaningEn":"vacant, empty","origin":"拉丁语 vacare","level":"高阶","note":"vac 强调「空着的位置」：空缺、真空、使无效。","examples":[{"word":"vacancy","pos":"n.","meaning":"空缺；空房"},{"word":"vacuum","pos":"n.","meaning":"真空"},{"word":"evacuate","pos":"v.","meaning":"疏散（腾空）"},{"word":"vacate","pos":"v.","meaning":"腾出；辞去"},{"word":"vacant","pos":"adj.","meaning":"空的；空缺的（vac 空 + -ant）"},{"word":"vacuousness","pos":"n.","meaning":"空洞；茫然"}]},{"kind":"root","form":"veh / vect","meaning":"运送","meaningEn":"to carry","origin":"拉丁语 vehere","level":"高阶","note":"「载着走」：车辆是载具，向量是把点搬过去。","examples":[{"word":"vehicle","pos":"n.","meaning":"车辆；载体"},{"word":"vector","pos":"n.","meaning":"向量；载体"},{"word":"convection","pos":"n.","meaning":"对流"},{"word":"vehement","pos":"adj.","meaning":"激烈的（被带着冲）"},{"word":"vehicular","pos":"adj.","meaning":"车辆的；运输工具的"},{"word":"vehemence","pos":"n.","meaning":"激烈；猛烈"}]},{"kind":"root","form":"arm","meaning":"武器；装备","meaningEn":"weapon, tool","origin":"拉丁语 arma","level":"高阶","note":"「装备」既可以是武器，也可以是盔甲：军队、解除武装。","examples":[{"word":"army","pos":"n.","meaning":"军队"},{"word":"armor","pos":"n.","meaning":"盔甲；装甲"},{"word":"disarm","pos":"v.","meaning":"解除武装"},{"word":"armament","pos":"n.","meaning":"军备"},{"word":"armistice","pos":"n.","meaning":"停战（arm 武器 + -istice 停止）"},{"word":"disarmament","pos":"n.","meaning":"裁军（dis- 解除 + arm 武装 + -ament）"}]},{"kind":"root","form":"brev / brief","meaning":"短","meaningEn":"short","origin":"拉丁语 brevis","level":"高阶","note":"「短」的一族：简洁、缩写、短暂。","examples":[{"word":"brief","pos":"adj./n.","meaning":"简短的；简报"},{"word":"abbreviate","pos":"v.","meaning":"缩写"},{"word":"brevity","pos":"n.","meaning":"简短"},{"word":"abridge","pos":"v.","meaning":"删节；缩短"},{"word":"brevet","pos":"n.","meaning":"名誉晋升令（brev 短 + -et → 简短文书）"},{"word":"briefcase","pos":"n.","meaning":"公文包（brief 简短 + case 箱）"}]},{"kind":"root","form":"celer","meaning":"快","meaningEn":"swift","origin":"拉丁语 celer","level":"高阶","note":"拉丁的「迅速」，今天主要留在 accelerate 一族里。","examples":[{"word":"accelerate","pos":"v.","meaning":"加速"},{"word":"acceleration","pos":"n.","meaning":"加速度"},{"word":"celerity","pos":"n.","meaning":"迅速"},{"word":"decelerate","pos":"v.","meaning":"减速"},{"word":"accelerator","pos":"n.","meaning":"加速器；油门（ac- 向 + celer 快 + -ator）"},{"word":"celeriac","pos":"n.","meaning":"块根芹（celer 快 + -iac）"}]},{"kind":"root","form":"doc / doct","meaning":"教；文档","meaningEn":"to teach","origin":"拉丁语 docere","level":"高阶","note":"「教」与「被教的内容」同源：医生（被教过的人）、文档、教条。","examples":[{"word":"doctor","pos":"n.","meaning":"医生；博士"},{"word":"document","pos":"n./v.","meaning":"文件；记录"},{"word":"doctrine","pos":"n.","meaning":"教义；主义"},{"word":"docile","pos":"adj.","meaning":"温顺的（易教的）"},{"word":"doctrinaire","pos":"adj./n.","meaning":"教条主义的（人）（doctrin 教义 + -aire）"},{"word":"documentary","pos":"n./adj.","meaning":"纪录片；文件的（document 文件 + -ary）"}]},{"kind":"root","form":"err","meaning":"漫游；犯错","meaningEn":"to wander, to err","origin":"拉丁语 errare","level":"高阶","note":"「走偏了」既是漫游也是错误：错误、反常、漂泊。","examples":[{"word":"error","pos":"n.","meaning":"错误"},{"word":"erroneous","pos":"adj.","meaning":"错误的"},{"word":"aberrant","pos":"adj.","meaning":"异常的"},{"word":"erratic","pos":"adj.","meaning":"不稳定的；古怪的"},{"word":"aberration","pos":"n.","meaning":"偏差；反常（ab- 离开 + err 漫游 + -ation）"},{"word":"inerrant","pos":"adj.","meaning":"绝无错误的（in- 不 + err 错 + -ant）"}]},{"kind":"root","form":"gen","meaning":"产生；种类","meaningEn":"to produce, kind","origin":"拉丁语 genus / gignere","level":"高阶","note":"「生出来」既指生育也指种类：基因、天才、慷慨（出身高贵）。","examples":[{"word":"generate","pos":"v.","meaning":"产生"},{"word":"genius","pos":"n.","meaning":"天才"},{"word":"genuine","pos":"adj.","meaning":"真正的（天生的）"},{"word":"generous","pos":"adj.","meaning":"慷慨的"},{"word":"progeny","pos":"n.","meaning":"后代；子孙（pro- 向前 + gen 生 + -y）"},{"word":"degenerate","pos":"v./adj.","meaning":"退化；堕落的（de- 向下 + gener 种类）"}]},{"kind":"root","form":"her / hes","meaning":"粘附","meaningEn":"to stick","origin":"拉丁语 haerere","level":"高阶","note":"「粘住」：粘附、坚持、犹豫（被粘住动不了）、连贯。","examples":[{"word":"adhere","pos":"v.","meaning":"粘附；坚持"},{"word":"coherent","pos":"adj.","meaning":"连贯的"},{"word":"hesitate","pos":"v.","meaning":"犹豫"},{"word":"inherent","pos":"adj.","meaning":"固有的（内在粘着）"},{"word":"adhesive","pos":"n./adj.","meaning":"粘合剂；有粘性的（ad- 向 + hes 粘 + -ive）"},{"word":"incoherent","pos":"adj.","meaning":"语无伦次的（in- 不 + coherent 连贯的）"}]},{"kind":"root","form":"liber","meaning":"自由；书","meaningEn":"free; book","origin":"拉丁语 liber","level":"高阶","note":"两个 liber 同形：自由的 liber 与树皮（书）的 liber，意义分流。","examples":[{"word":"liberty","pos":"n.","meaning":"自由"},{"word":"liberal","pos":"adj.","meaning":"自由的；开明的"},{"word":"deliver","pos":"v.","meaning":"递送；释放"},{"word":"library","pos":"n.","meaning":"图书馆"},{"word":"liberate","pos":"v.","meaning":"解放；释放（liber 自由 + -ate）"},{"word":"liberalize","pos":"v.","meaning":"使自由化；放宽限制"}]},{"kind":"root","form":"luc / lum","meaning":"光","meaningEn":"light","origin":"拉丁语 lux / lumen","level":"高阶","note":"「光」照亮也启发：透明、光辉、阐明（让光进来）。","examples":[{"word":"translucent","pos":"adj.","meaning":"半透明的"},{"word":"luminous","pos":"adj.","meaning":"发光的"},{"word":"illuminate","pos":"v.","meaning":"照亮；阐明"},{"word":"illustrate","pos":"v.","meaning":"说明；举例（使有光）"},{"word":"elucidate","pos":"v.","meaning":"阐明（e- 向外 + lucid 明亮 + -ate）"},{"word":"luminary","pos":"n.","meaning":"发光体；杰出人物（lumin 光 + -ary）"}]},{"kind":"root","form":"nutri","meaning":"营养","meaningEn":"to nourish","origin":"拉丁语 nutrire","level":"高阶","note":"「喂养」：营养、营养师、滋养。","examples":[{"word":"nutrition","pos":"n.","meaning":"营养"},{"word":"nutrient","pos":"n.","meaning":"营养素"},{"word":"nurture","pos":"v./n.","meaning":"养育；培育"},{"word":"malnutrition","pos":"n.","meaning":"营养不良"},{"word":"nutritious","pos":"adj.","meaning":"有营养的（nutrit 营养 + -ious）"},{"word":"nutriment","pos":"n.","meaning":"营养物（nutri 营养 + -ment）"}]},{"kind":"root","form":"put","meaning":"思考；计算","meaningEn":"to think, to reckon","origin":"拉丁语 putare","level":"高阶","note":"「掂量、核算」：计算、声誉（被评估的印象）、争论（反复算）。","examples":[{"word":"compute","pos":"v.","meaning":"计算"},{"word":"reputation","pos":"n.","meaning":"名声"},{"word":"dispute","pos":"n./v.","meaning":"争论"},{"word":"deputy","pos":"n.","meaning":"副手；代表"},{"word":"impute","pos":"v.","meaning":"归咎于；归因于（im- 向 + put 计算）"},{"word":"amputate","pos":"v.","meaning":"截肢（am- 周围 + put 修剪）"}]},{"kind":"root","form":"solv / solut","meaning":"松开；解决","meaningEn":"to loosen, to solve","origin":"拉丁语 solvere","level":"高阶","note":"「解开绳结」：解决、溶解、绝对（完全解开）。","examples":[{"word":"solve","pos":"v.","meaning":"解决"},{"word":"solution","pos":"n.","meaning":"解决方案；溶液"},{"word":"absolute","pos":"adj.","meaning":"绝对的"},{"word":"dissolve","pos":"v.","meaning":"溶解；解散"},{"word":"solvent","pos":"n./adj.","meaning":"溶剂；有偿付能力的（solv 松开 + -ent）"},{"word":"dissolute","pos":"adj.","meaning":"放荡的（dis- 散开 + solut 松开）"}]},{"kind":"root","form":"temp / tempor","meaning":"时间","meaningEn":"time","origin":"拉丁语 tempus","level":"高阶","note":"「时间」相关：临时（限时的）、脾气（当下的情绪）、节奏。","examples":[{"word":"temporary","pos":"adj.","meaning":"临时的"},{"word":"contemporary","pos":"adj./n.","meaning":"当代的；同龄人"},{"word":"tempo","pos":"n.","meaning":"节奏；速度"},{"word":"temper","pos":"n./v.","meaning":"脾气；调和"},{"word":"temporal","pos":"adj.","meaning":"时间的；世俗的（tempor 时间 + -al）"},{"word":"contemporaneous","pos":"adj.","meaning":"同时代的（con- 共同 + tempor 时间 + -aneous）"}]},{"kind":"root","form":"vac（van）","meaning":"徒劳；空","meaningEn":"vain, empty","origin":"拉丁语 vanus","level":"高阶","note":"「空无一物」引申为徒劳与虚荣：vain、vanish、vanity。","examples":[{"word":"vain","pos":"adj.","meaning":"徒劳的；自负的"},{"word":"vanity","pos":"n.","meaning":"虚荣；无用"},{"word":"vanish","pos":"v.","meaning":"消失"},{"word":"evanescent","pos":"adj.","meaning":"短暂的；易逝的"},{"word":"evanescence","pos":"n.","meaning":"短暂易逝（转瞬消失）"},{"word":"evacuate","pos":"v.","meaning":"撤空；疏散（e- 出 + vac 空 + -ate）"}]},{"kind":"root","form":"ven（vent）","meaning":"来；发生","meaningEn":"to come","origin":"拉丁语 venire","level":"高阶","note":"ven/vent 的名词化：事件是发生的事，收入是进来的东西。","examples":[{"word":"event","pos":"n.","meaning":"事件（e- 向外 + vent 来）"},{"word":"revenue","pos":"n.","meaning":"收入（re- 回 + ven 来）"},{"word":"intervene","pos":"v.","meaning":"干预（来到中间）"},{"word":"adventure","pos":"n.","meaning":"冒险（来到面前的事）"},{"word":"avenue","pos":"n.","meaning":"大道；途径（a- 向 + ven 来 + -ue）"},{"word":"convention","pos":"n.","meaning":"会议；惯例（con- 共同 + vent 来 + -ion）"}]},{"kind":"root","form":"sequ（secut）","meaning":"跟随；连续","meaningEn":"to follow","origin":"拉丁语 sequi","level":"高阶","note":"sequ 与 secut 分工：前者构成名词，后者多见动词。","examples":[{"word":"sequence","pos":"n.","meaning":"顺序"},{"word":"consecutive","pos":"adj.","meaning":"连续的"},{"word":"execute","pos":"v.","meaning":"执行"},{"word":"prosecute","pos":"v.","meaning":"起诉"},{"word":"consequence","pos":"n.","meaning":"后果；结果（con- 共同 + sequ 跟随 + -ence）"},{"word":"subsequent","pos":"adj.","meaning":"随后的（sub- 在后 + sequ 跟随 + -ent）"}]},{"kind":"prefix","form":"un-","meaning":"不；相反","meaningEn":"not; the reverse of","origin":"古英语 un-","level":"基础","note":"最常用的否定前缀，直接加在形容词或过去分词前表示「不」，不改变词性。","examples":[{"word":"unhappy","pos":"adj.","meaning":"不快乐的"},{"word":"unable","pos":"adj.","meaning":"不能的（un- 不 + able 能）"},{"word":"unlock","pos":"v.","meaning":"开锁；解锁"},{"word":"unfair","pos":"adj.","meaning":"不公平的"},{"word":"unusual","pos":"adj.","meaning":"不寻常的（un- 不 + usual 平常的）"},{"word":"uncover","pos":"v.","meaning":"揭开；揭露（把覆盖物去掉）"}]},{"kind":"prefix","form":"dis-","meaning":"不；分开","meaningEn":"not; apart","origin":"拉丁语 dis-","level":"基础","note":"两条路：否定（dislike 不喜欢）与「分开、剥去」（discover 揭开盖子）。","examples":[{"word":"dislike","pos":"v./n.","meaning":"不喜欢"},{"word":"disappear","pos":"v.","meaning":"消失（dis- 不 + appear 出现）"},{"word":"discover","pos":"v.","meaning":"发现（把盖子揭开）"},{"word":"disorder","pos":"n.","meaning":"混乱；失调"},{"word":"disagree","pos":"v.","meaning":"不同意；有分歧"},{"word":"distance","pos":"n.","meaning":"距离；远方（dis- 分开 + stance 站立）"}]},{"kind":"prefix","form":"re-","meaning":"再；向后","meaningEn":"again; back","origin":"拉丁语 re-","level":"基础","note":"要么「再来一次」，要么「往回」，很多词两者兼有（return 既是回去也是归还）。","examples":[{"word":"rebuild","pos":"v.","meaning":"重建"},{"word":"return","pos":"v./n.","meaning":"返回；归还"},{"word":"review","pos":"v./n.","meaning":"复习；评论（再看一遍）"},{"word":"recall","pos":"v.","meaning":"回忆起；召回"},{"word":"recycle","pos":"v.","meaning":"回收利用（再循环一次）"},{"word":"remind","pos":"v.","meaning":"提醒（再次想起）"}]},{"kind":"prefix","form":"pre-","meaning":"预先；在前","meaningEn":"before; in front","origin":"拉丁语 prae-","level":"基础","note":"时间上提前，位置上前置，是 pre- 一族的主线。","examples":[{"word":"prepare","pos":"v.","meaning":"准备（预先弄好）"},{"word":"preview","pos":"n./v.","meaning":"预览"},{"word":"precaution","pos":"n.","meaning":"预防措施"},{"word":"precede","pos":"v.","meaning":"先于；在…之前"},{"word":"predict","pos":"v.","meaning":"预测（pre- 预先 + dict 说）"},{"word":"prevent","pos":"v.","meaning":"预防（pre- 预先 + vent 来）"}]},{"kind":"prefix","form":"pro-","meaning":"向前；支持","meaningEn":"forward; in favor of","origin":"拉丁语 pro-","level":"基础","note":"向前推进，所以也有「公开站在前面支持」之义。","examples":[{"word":"progress","pos":"n./v.","meaning":"进步；前进"},{"word":"propose","pos":"v.","meaning":"提议（把想法摆到前面）"},{"word":"protect","pos":"v.","meaning":"保护（在前面挡着）"},{"word":"propel","pos":"v.","meaning":"推进；驱动"},{"word":"promote","pos":"v.","meaning":"促进；晋升（向前推动）"},{"word":"protest","pos":"v./n.","meaning":"抗议（pro- 公开 + test 作证）"}]},{"kind":"prefix","form":"in- / im- / il- / ir-","meaning":"不；向内","meaningEn":"not; into","origin":"拉丁语 in-","level":"基础","note":"同一个前缀的两副面孔：加在形容词前是否定（incorrect），加在动词前是「进入」（include）；在 b/p/m 前写 im-，l 前写 il-，r 前写 ir-。","examples":[{"word":"invisible","pos":"adj.","meaning":"看不见的（in- 不 + vis 看）"},{"word":"incorrect","pos":"adj.","meaning":"不正确的"},{"word":"import","pos":"v./n.","meaning":"进口（im- 进入 + port 运）"},{"word":"illegal","pos":"adj.","meaning":"非法的（il- 不 + legal 合法的）"},{"word":"indirect","pos":"adj.","meaning":"间接的（in- 不 + direct 直接的）"},{"word":"irregular","pos":"adj.","meaning":"不规则的（ir- 不 + regular 规则的）"}]},{"kind":"prefix","form":"non-","meaning":"非；不","meaningEn":"not; non-","origin":"拉丁语 non","level":"基础","note":"语气比 un- 更中性、更像分类标签，常构成「非……」这一类的名词与形容词。","examples":[{"word":"nonsense","pos":"n.","meaning":"胡说；荒谬的事"},{"word":"nonprofit","pos":"adj.","meaning":"非营利的"},{"word":"nonverbal","pos":"adj.","meaning":"非语言的"},{"word":"nonstop","pos":"adj./adv.","meaning":"不停的；直达的"},{"word":"nonfiction","pos":"n.","meaning":"非虚构作品（纪实文学）"},{"word":"nonviolent","pos":"adj.","meaning":"非暴力的"}]},{"kind":"prefix","form":"over-","meaning":"过度；在上","meaningEn":"too much; above","origin":"古英语 ofer","level":"基础","note":"两种含义：「过量」（overwork）与「在上方、越过」（overlook）。","examples":[{"word":"overwork","pos":"v./n.","meaning":"过度工作"},{"word":"overlook","pos":"v.","meaning":"忽略；俯瞰"},{"word":"overcome","pos":"v.","meaning":"克服（翻过这道坎）"},{"word":"overseas","pos":"adj./adv.","meaning":"海外的；在海外"},{"word":"overweight","pos":"adj.","meaning":"超重的（超过正常体重）"},{"word":"overreact","pos":"v.","meaning":"反应过度"}]},{"kind":"prefix","form":"under-","meaning":"不足；在下","meaningEn":"too little; below","origin":"古英语 under","level":"基础","note":"与 over- 正好相对：数量上不够，或位置在下方。","examples":[{"word":"underestimate","pos":"v.","meaning":"低估"},{"word":"underground","pos":"adj./n.","meaning":"地下的；地铁"},{"word":"undergraduate","pos":"n.","meaning":"本科生（还没毕业的）"},{"word":"underline","pos":"v.","meaning":"在…下画线；强调"},{"word":"underwater","pos":"adj./adv.","meaning":"水下的；在水下"},{"word":"undertake","pos":"v.","meaning":"着手做；承担（把事情揽到手下）"}]},{"kind":"prefix","form":"sub-","meaning":"在下；次级","meaningEn":"under; secondary","origin":"拉丁语 sub-","level":"基础","note":"位置在下，引申为等级上的「次一级、分支」。","examples":[{"word":"submarine","pos":"n.","meaning":"潜水艇（在海面之下）"},{"word":"subway","pos":"n.","meaning":"地铁"},{"word":"subtitle","pos":"n.","meaning":"字幕；副标题"},{"word":"subconscious","pos":"adj.","meaning":"潜意识的"},{"word":"subtract","pos":"v.","meaning":"减去（sub- 在下 + tract 拉，往下抽走）"},{"word":"subscribe","pos":"v.","meaning":"订阅；认捐（在文件下方签名）"}]},{"kind":"prefix","form":"super-","meaning":"超过；在上","meaningEn":"above; beyond","origin":"拉丁语 super","level":"基础","note":"在……之上，引申为「超级、超越」。","examples":[{"word":"supermarket","pos":"n.","meaning":"超市"},{"word":"supervise","pos":"v.","meaning":"监督（在上面看着）"},{"word":"superior","pos":"adj./n.","meaning":"更好的；上级"},{"word":"supernatural","pos":"adj.","meaning":"超自然的"},{"word":"superpower","pos":"n.","meaning":"超级大国；超能力"},{"word":"superhuman","pos":"adj.","meaning":"超人的（超出常人的）"}]},{"kind":"prefix","form":"en- / em-","meaning":"使…；进入","meaningEn":"to make; to put into","origin":"拉丁语 in-（经法语演变）","level":"基础","note":"加在名词或形容词前构成动词，意思是「使成为」或「放进去」；在 b/p 前写作 em-。","examples":[{"word":"enable","pos":"v.","meaning":"使能够"},{"word":"enrich","pos":"v.","meaning":"使丰富"},{"word":"empower","pos":"v.","meaning":"授权；使有能力"},{"word":"enclose","pos":"v.","meaning":"围住；随信附上"},{"word":"encourage","pos":"v.","meaning":"鼓励（使有勇气）"},{"word":"embrace","pos":"v./n.","meaning":"拥抱；欣然接受"}]},{"kind":"prefix","form":"trans-","meaning":"穿过；转变","meaningEn":"across; beyond","origin":"拉丁语 trans","level":"进阶","note":"从一边到另一边，因此也指转移、转变。","examples":[{"word":"translate","pos":"v.","meaning":"翻译（从一种语言搬到另一种）"},{"word":"transfer","pos":"v./n.","meaning":"转移；调动"},{"word":"transform","pos":"v.","meaning":"改变形态"},{"word":"transparent","pos":"adj.","meaning":"透明的（光能穿过）"},{"word":"transport","pos":"v./n.","meaning":"运输（trans- 越过 + port 运）"},{"word":"transmit","pos":"v.","meaning":"传送；传播（送过去）"}]},{"kind":"prefix","form":"inter-","meaning":"在…之间；相互","meaningEn":"between; among","origin":"拉丁语 inter","level":"进阶","note":"两者之间，或彼此之间。","examples":[{"word":"international","pos":"adj.","meaning":"国际的（国与国之间）"},{"word":"interact","pos":"v.","meaning":"互动"},{"word":"interrupt","pos":"v.","meaning":"打断（在中间插进去）"},{"word":"interview","pos":"n./v.","meaning":"面试；采访"},{"word":"interfere","pos":"v.","meaning":"干扰；干涉（插到中间）"},{"word":"internet","pos":"n.","meaning":"互联网（inter- 相互 + net 网）"}]},{"kind":"prefix","form":"con- / com- / col- / cor-","meaning":"共同；一起","meaningEn":"together; with","origin":"拉丁语 cum","level":"进阶","note":"同一个前缀的四种拼法，随后面辅音同化：b/p/m 前作 com-，l 前作 col-，r 前作 cor-，其余常作 con-。","examples":[{"word":"confirm","pos":"v.","meaning":"确认（共同把话说定）"},{"word":"combine","pos":"v.","meaning":"结合"},{"word":"collaborate","pos":"v.","meaning":"合作"},{"word":"correct","pos":"adj./v.","meaning":"正确的；改正"},{"word":"connect","pos":"v.","meaning":"连接（con- 一起 + nect 系）"},{"word":"compress","pos":"v.","meaning":"压缩（com- 一起 + press 压）"}]},{"kind":"prefix","form":"de-","meaning":"向下；去除","meaningEn":"down; away","origin":"拉丁语 de-","level":"进阶","note":"向下（decline 下滑）或去掉（defrost 除霜），也有「彻底」的加强义。","examples":[{"word":"decrease","pos":"v./n.","meaning":"减少（往下走）"},{"word":"defeat","pos":"v./n.","meaning":"击败"},{"word":"defend","pos":"v.","meaning":"防御（把攻击挡开）"},{"word":"detect","pos":"v.","meaning":"发现；查明（把盖子拿掉）"},{"word":"decline","pos":"v./n.","meaning":"下降；衰退；婉拒"},{"word":"destroy","pos":"v.","meaning":"破坏；摧毁（de- 向下 + stroy 堆，把堆推倒）"}]},{"kind":"prefix","form":"ex- / ef-","meaning":"向外；前任","meaningEn":"out; former","origin":"拉丁语 ex","level":"进阶","note":"向外拿出来，所以有「出口、表达」；加在人前面则指「前任」。","examples":[{"word":"export","pos":"v./n.","meaning":"出口（运出去）"},{"word":"exclude","pos":"v.","meaning":"排除（关在门外）"},{"word":"expand","pos":"v.","meaning":"扩张（向外摊开）"},{"word":"exceed","pos":"v.","meaning":"超过（走出去）"},{"word":"exit","pos":"n./v.","meaning":"出口；退出（往外走）"},{"word":"expose","pos":"v.","meaning":"暴露；使接触（ex- 向外 + pos 放）"}]},{"kind":"prefix","form":"ad- / ac- / af-","meaning":"朝向；加强","meaningEn":"toward; to","origin":"拉丁语 ad","level":"进阶","note":"表示方向「朝向」，常因同化写成 ac-、af-、ap- 等形式，多数只剩下加强语气的作用。","examples":[{"word":"adjust","pos":"v.","meaning":"调整（调到正对）"},{"word":"adapt","pos":"v.","meaning":"适应（调整到合）"},{"word":"affect","pos":"v.","meaning":"影响"},{"word":"accompany","pos":"v.","meaning":"陪伴（跟着一起去）"},{"word":"advocate","pos":"v./n.","meaning":"提倡；拥护者（ad- 朝向 + voc 呼叫）"},{"word":"accomplish","pos":"v.","meaning":"完成；实现"}]},{"kind":"prefix","form":"ob- / oc- / op-","meaning":"反对；朝向","meaningEn":"against; toward","origin":"拉丁语 ob","level":"进阶","note":"原义是「迎面而来」，所以既有「朝向」也有「阻挡、反对」。","examples":[{"word":"obstacle","pos":"n.","meaning":"障碍（站在前面挡路）"},{"word":"occupy","pos":"v.","meaning":"占据"},{"word":"oppose","pos":"v.","meaning":"反对"},{"word":"oblige","pos":"v.","meaning":"迫使；使感激"},{"word":"obtain","pos":"v.","meaning":"获得（朝向目标拿住）"},{"word":"occur","pos":"v.","meaning":"发生；出现（迎面而来）"}]},{"kind":"prefix","form":"per-","meaning":"贯穿；彻底","meaningEn":"through; thoroughly","origin":"拉丁语 per","level":"进阶","note":"从头穿到尾，所以引申为「完全、彻底」。","examples":[{"word":"perfect","pos":"adj./v.","meaning":"完美的；使完善（彻底做完）"},{"word":"permanent","pos":"adj.","meaning":"永久的（一直留在那里）"},{"word":"persist","pos":"v.","meaning":"坚持（一直站着）"},{"word":"persuade","pos":"v.","meaning":"说服（彻底劝动）"},{"word":"perceive","pos":"v.","meaning":"察觉；理解（per- 彻底 + ceive 抓取）"},{"word":"permit","pos":"v./n.","meaning":"允许；许可证（让通过）"}]},{"kind":"prefix","form":"se-","meaning":"分开；离开","meaningEn":"apart; aside","origin":"拉丁语 se-","level":"进阶","note":"把东西分出去、单独放到一边。","examples":[{"word":"separate","pos":"v./adj.","meaning":"分开；单独的"},{"word":"secure","pos":"adj./v.","meaning":"安全的；获得（脱离忧虑）"},{"word":"seclude","pos":"v.","meaning":"使隔离；隐居"},{"word":"sever","pos":"v.","meaning":"切断；断绝"},{"word":"secession","pos":"n.","meaning":"退出；脱离（se- 分开 + cess 走）"},{"word":"segregate","pos":"v.","meaning":"隔离；分开（se- 分开 + greg 群）"}]},{"kind":"prefix","form":"syn- / sym-","meaning":"共同；一起","meaningEn":"together; with","origin":"希腊语 syn","level":"进阶","note":"在 b/p/m 前写作 sym-；与 con- 同义，但多出现在希腊语来源的词里。","examples":[{"word":"symbol","pos":"n.","meaning":"符号（放到一起以便认出）"},{"word":"system","pos":"n.","meaning":"系统（各部分站在一起）"},{"word":"syndrome","pos":"n.","meaning":"综合征（一起出现的症状）"},{"word":"synchronize","pos":"v.","meaning":"使同步"},{"word":"sympathy","pos":"n.","meaning":"同情（sym- 共同 + path 感受）"},{"word":"synthesis","pos":"n.","meaning":"合成；综合（syn- 一起 + thesis 放置）"}]},{"kind":"prefix","form":"counter- / contra-","meaning":"相反；对抗","meaningEn":"against; opposite","origin":"拉丁语 contra","level":"高级","note":"迎面顶回去：反对、抵消、反向。","examples":[{"word":"counteract","pos":"v.","meaning":"抵消；抵制"},{"word":"counterattack","pos":"n./v.","meaning":"反击"},{"word":"contrast","pos":"n./v.","meaning":"对比（并排站着相反）"},{"word":"controversy","pos":"n.","meaning":"争议（意见相背）"},{"word":"contradict","pos":"v.","meaning":"反驳；与……矛盾（contra- 相反 + dict 说）"},{"word":"counterpart","pos":"n.","meaning":"对应的人或物（counter- 相对 + part 部分）"}]},{"kind":"prefix","form":"extra-","meaning":"额外；超出","meaningEn":"outside; beyond","origin":"拉丁语 extra","level":"高级","note":"在……之外，所以是「额外的、超出的」。","examples":[{"word":"extraordinary","pos":"adj.","meaning":"非凡的（超出常规）"},{"word":"extract","pos":"v./n.","meaning":"提取；摘录（往外拉）"},{"word":"extracurricular","pos":"adj.","meaning":"课外的"},{"word":"extravagant","pos":"adj.","meaning":"奢侈的（花到外面去了）"},{"word":"extraterrestrial","pos":"adj./n.","meaning":"地球外的；外星生物（extra- 之外 + terrestrial 地球的）"},{"word":"extrasensory","pos":"adj.","meaning":"超感官的（extra- 超出 + sensory 感官的）"}]},{"kind":"prefix","form":"fore-","meaning":"预先；在前","meaningEn":"before; in front","origin":"古英语 fore","level":"高级","note":"时间上「提前」，位置或次序上「在前」。","examples":[{"word":"forecast","pos":"n./v.","meaning":"预测（提前算出）"},{"word":"forehead","pos":"n.","meaning":"额头（头的前部）"},{"word":"foresee","pos":"v.","meaning":"预见"},{"word":"foreword","pos":"n.","meaning":"前言"},{"word":"foremost","pos":"adj./adv.","meaning":"最重要的；首要地（fore- 在前 + most 最）"},{"word":"foreshadow","pos":"v.","meaning":"预示（fore- 预先 + shadow 投下影子）"}]},{"kind":"prefix","form":"hyper-","meaning":"过度；超","meaningEn":"over; excessive","origin":"希腊语 hyper","level":"高级","note":"超过正常范围，医学与科技词里最常见。","examples":[{"word":"hypertension","pos":"n.","meaning":"高血压"},{"word":"hyperactive","pos":"adj.","meaning":"极度活跃的"},{"word":"hyperlink","pos":"n.","meaning":"超链接"},{"word":"hypersensitive","pos":"adj.","meaning":"过敏的；过度敏感的"},{"word":"hypertext","pos":"n.","meaning":"超文本"},{"word":"hyperbole","pos":"n.","meaning":"夸张（hyper- 过度 + bole 扔）"}]},{"kind":"prefix","form":"hypo-","meaning":"在下；不足","meaningEn":"under; deficient","origin":"希腊语 hypo","level":"高级","note":"正好是 hyper- 的反面：低于正常水平，或在下方。","examples":[{"word":"hypothesis","pos":"n.","meaning":"假设（放在下面当地基的说法）"},{"word":"hypocrisy","pos":"n.","meaning":"虚伪（在下面演戏）"},{"word":"hypodermic","pos":"adj.","meaning":"皮下的"},{"word":"hypoglycemia","pos":"n.","meaning":"低血糖"},{"word":"hypothermia","pos":"n.","meaning":"体温过低（hypo- 低于 + therm 热）"},{"word":"hypothetical","pos":"adj.","meaning":"假设的（hypo- 在下 + thet 放置）"}]},{"kind":"prefix","form":"circum-","meaning":"环绕","meaningEn":"around","origin":"拉丁语 circum","level":"高级","note":"绕一圈：周围的情况、循环、圆周。","examples":[{"word":"circumstance","pos":"n.","meaning":"情况；环境（站在周围的东西）"},{"word":"circulate","pos":"v.","meaning":"循环；流通"},{"word":"circumference","pos":"n.","meaning":"圆周；周长"},{"word":"circumvent","pos":"v.","meaning":"规避（绕过去）"},{"word":"circumspect","pos":"adj.","meaning":"谨慎的（circum- 四周 + spect 看）"},{"word":"circumscribe","pos":"v.","meaning":"限制；划定范围（circum- 环绕 + scrib 画）"}]},{"kind":"prefix","form":"post-","meaning":"之后","meaningEn":"after; behind","origin":"拉丁语 post","level":"高级","note":"时间上在……之后，与 pre- 相对。","examples":[{"word":"postpone","pos":"v.","meaning":"推迟（放到之后）"},{"word":"postwar","pos":"adj.","meaning":"战后的"},{"word":"postgraduate","pos":"n./adj.","meaning":"研究生（本科之后）"},{"word":"posterior","pos":"adj.","meaning":"后面的；其次的"},{"word":"postscript","pos":"n.","meaning":"附言；后记（post- 之后 + script 写）"},{"word":"postnatal","pos":"adj.","meaning":"产后的（post- 之后 + natal 出生的）"}]},{"kind":"prefix","form":"semi-","meaning":"半","meaningEn":"half; partly","origin":"拉丁语 semi","level":"高级","note":"正好一半，或只有一部分。","examples":[{"word":"semicircle","pos":"n.","meaning":"半圆"},{"word":"semiconductor","pos":"n.","meaning":"半导体"},{"word":"semifinal","pos":"n.","meaning":"半决赛"},{"word":"semicolon","pos":"n.","meaning":"分号"},{"word":"semiautomatic","pos":"adj.","meaning":"半自动的"},{"word":"semitrailer","pos":"n.","meaning":"半挂车"}]},{"kind":"prefix","form":"multi-","meaning":"多","meaningEn":"many","origin":"拉丁语 multus","level":"高级","note":"数量上的「多、多重」。","examples":[{"word":"multimedia","pos":"n.","meaning":"多媒体"},{"word":"multiple","pos":"adj./n.","meaning":"多个的；倍数"},{"word":"multiply","pos":"v.","meaning":"乘；繁殖（变多）"},{"word":"multinational","pos":"adj.","meaning":"跨国的"},{"word":"multilingual","pos":"adj.","meaning":"多语言的"},{"word":"multicultural","pos":"adj.","meaning":"多元文化的"}]},{"kind":"prefix","form":"uni-","meaning":"单一","meaningEn":"one; single","origin":"拉丁语 unus","level":"高级","note":"只有一个、统一为一个。","examples":[{"word":"uniform","pos":"n./adj.","meaning":"制服；统一的（一个样式）"},{"word":"unique","pos":"adj.","meaning":"独特的（仅此一个）"},{"word":"unite","pos":"v.","meaning":"联合（变成一个）"},{"word":"unilateral","pos":"adj.","meaning":"单方面的"},{"word":"unify","pos":"v.","meaning":"统一；使一致（uni- 单一 + fy 使……）"},{"word":"unicorn","pos":"n.","meaning":"独角兽（uni- 单一 + corn 角）"}]},{"kind":"prefix","form":"bi-","meaning":"二；双","meaningEn":"two; twice","origin":"拉丁语 bi-","level":"高级","note":"两个、两倍、两边的。","examples":[{"word":"bicycle","pos":"n.","meaning":"自行车（两个轮子）"},{"word":"bilingual","pos":"adj.","meaning":"双语的"},{"word":"bilateral","pos":"adj.","meaning":"双边的"},{"word":"binary","pos":"adj.","meaning":"二进制的；二元的"},{"word":"biannual","pos":"adj.","meaning":"一年两次的（bi- 二 + annual 年的）"},{"word":"bipartisan","pos":"adj.","meaning":"两党的；跨党派的（bi- 二 + partisan 党派的）"}]},{"kind":"prefix","form":"tri-","meaning":"三","meaningEn":"three","origin":"希腊语 tri- / 拉丁语 tres","level":"高级","note":"三个、三重的。","examples":[{"word":"triangle","pos":"n.","meaning":"三角形"},{"word":"tricycle","pos":"n.","meaning":"三轮车"},{"word":"trilogy","pos":"n.","meaning":"三部曲"},{"word":"triple","pos":"adj./v.","meaning":"三倍的；增至三倍"},{"word":"tripod","pos":"n.","meaning":"三脚架（tri- 三 + pod 脚）"},{"word":"trio","pos":"n.","meaning":"三重奏；三人组"}]},{"kind":"prefix","form":"auto-","meaning":"自己；自动","meaningEn":"self; automatic","origin":"希腊语 autos","level":"高阶","note":"「自己」既能指人自己（自传），也能指机器自己动（自动）。","examples":[{"word":"automatic","pos":"adj.","meaning":"自动的"},{"word":"autobiography","pos":"n.","meaning":"自传"},{"word":"autonomy","pos":"n.","meaning":"自治；自主"},{"word":"autograph","pos":"n.","meaning":"亲笔签名"},{"word":"automobile","pos":"n.","meaning":"汽车（auto- 自己 + mobile 会动的）"},{"word":"autopilot","pos":"n.","meaning":"自动驾驶仪"}]},{"kind":"prefix","form":"co-","meaning":"共同","meaningEn":"together; jointly","origin":"拉丁语 co-（cum 的弱化形）","level":"高阶","note":"con- 的简化形式，多用于现代构词，表示「一起做」。","examples":[{"word":"cooperate","pos":"v.","meaning":"合作"},{"word":"coexist","pos":"v.","meaning":"共存"},{"word":"coordinate","pos":"v./n.","meaning":"协调；坐标"},{"word":"coincidence","pos":"n.","meaning":"巧合（一起落到同一点）"},{"word":"coauthor","pos":"n.","meaning":"合著者（co- 共同 + author 作者）"},{"word":"coworker","pos":"n.","meaning":"同事（co- 共同 + worker 工作者）"}]},{"kind":"prefix","form":"dys-","meaning":"不良；困难","meaningEn":"bad; difficult","origin":"希腊语 dys-","level":"高阶","note":"希腊语里的「坏」，与 eu- 相对，多用于医学与社科。","examples":[{"word":"dysfunction","pos":"n.","meaning":"功能障碍"},{"word":"dyslexia","pos":"n.","meaning":"阅读障碍"},{"word":"dysentery","pos":"n.","meaning":"痢疾"},{"word":"dystopia","pos":"n.","meaning":"反乌托邦"},{"word":"dyspepsia","pos":"n.","meaning":"消化不良（dys- 不良 + peps 消化）"},{"word":"dyspraxia","pos":"n.","meaning":"运用功能障碍（dys- 困难 + prax 动作）"}]},{"kind":"prefix","form":"eu-","meaning":"好；优","meaningEn":"good; well","origin":"希腊语 eu-","level":"高阶","note":"希腊语里的「好」，与 dys- 相对；euphemism 就是「说好听的」。","examples":[{"word":"euphemism","pos":"n.","meaning":"委婉语"},{"word":"euphony","pos":"n.","meaning":"悦耳之音"},{"word":"euphoria","pos":"n.","meaning":"欣快；极度兴奋"},{"word":"euthanasia","pos":"n.","meaning":"安乐死（无痛的善终）"},{"word":"eulogy","pos":"n.","meaning":"悼词；颂词（eu- 好 + log 说）"},{"word":"eugenics","pos":"n.","meaning":"优生学（eu- 优 + gen 产生）"}]},{"kind":"prefix","form":"pseudo-","meaning":"假；伪","meaningEn":"false; fake","origin":"希腊语 pseudes","level":"高阶","note":"看起来像、其实是假的。","examples":[{"word":"pseudonym","pos":"n.","meaning":"笔名；假名"},{"word":"pseudoscience","pos":"n.","meaning":"伪科学"},{"word":"pseudo","pos":"adj.","meaning":"假的；伪装的"},{"word":"pseudocode","pos":"n.","meaning":"伪代码"},{"word":"pseudorandom","pos":"adj.","meaning":"伪随机的"},{"word":"pseudopod","pos":"n.","meaning":"伪足（pseudo- 假 + pod 脚）"}]},{"kind":"prefix","form":"vice-","meaning":"副；代理","meaningEn":"deputy; acting for","origin":"拉丁语 vice（代替）","level":"高阶","note":"代替正职行使职权，所以是「副」；注意与表示「恶习」的 vice 同形不同源。","examples":[{"word":"vice-president","pos":"n.","meaning":"副总统；副总裁"},{"word":"viceroy","pos":"n.","meaning":"总督（代王治理）"},{"word":"vice-chancellor","pos":"n.","meaning":"副校长；名誉校长"},{"word":"vicarious","pos":"adj.","meaning":"间接感受到的；代人受过的"},{"word":"vice-admiral","pos":"n.","meaning":"海军中将（vice- 副 + admiral 上将）"},{"word":"vice-consul","pos":"n.","meaning":"副领事"}]},{"kind":"suffix","form":"-tion / -sion","meaning":"名词：动作或结果","meaningEn":"noun: action or its result","origin":"拉丁语 -tio / -sio","level":"基础","note":"把动词变成抽象名词的最常用后缀，重音落在它前面那个音节。","examples":[{"word":"action","pos":"n.","meaning":"行动"},{"word":"education","pos":"n.","meaning":"教育"},{"word":"decision","pos":"n.","meaning":"决定"},{"word":"expression","pos":"n.","meaning":"表达；表情"},{"word":"protection","pos":"n.","meaning":"保护（protect 的名词形式）"},{"word":"invitation","pos":"n.","meaning":"邀请；请柬"}]},{"kind":"suffix","form":"-ment","meaning":"名词：行为或结果","meaningEn":"noun: act, result, or means","origin":"拉丁语 -mentum","level":"基础","note":"加在动词后构成名词，表示行为本身、结果或工具。","examples":[{"word":"development","pos":"n.","meaning":"发展"},{"word":"government","pos":"n.","meaning":"政府（治理的机构）"},{"word":"achievement","pos":"n.","meaning":"成就"},{"word":"movement","pos":"n.","meaning":"运动；动作"},{"word":"equipment","pos":"n.","meaning":"设备；装备"},{"word":"argument","pos":"n.","meaning":"争论；论点"}]},{"kind":"suffix","form":"-ness","meaning":"名词：性质或状态","meaningEn":"noun: quality or state","origin":"古英语 -nes","level":"基础","note":"加在形容词后构成抽象名词，是最「规整」的名词化后缀。","examples":[{"word":"happiness","pos":"n.","meaning":"幸福"},{"word":"kindness","pos":"n.","meaning":"善意；亲切"},{"word":"darkness","pos":"n.","meaning":"黑暗"},{"word":"weakness","pos":"n.","meaning":"弱点；虚弱"},{"word":"sadness","pos":"n.","meaning":"悲伤"},{"word":"tiredness","pos":"n.","meaning":"疲倦"}]},{"kind":"suffix","form":"-er / -or","meaning":"名词：做…的人或物","meaningEn":"noun: one who, or that which, does","origin":"古英语 -ere / 拉丁语 -or","level":"基础","note":"表示施动者；拉丁语来源的动词多用 -or，本土动词多用 -er。","examples":[{"word":"teacher","pos":"n.","meaning":"教师"},{"word":"worker","pos":"n.","meaning":"工人"},{"word":"actor","pos":"n.","meaning":"演员"},{"word":"creator","pos":"n.","meaning":"创造者"},{"word":"writer","pos":"n.","meaning":"作家；作者"},{"word":"inventor","pos":"n.","meaning":"发明家（拉丁语来源，用 -or）"}]},{"kind":"suffix","form":"-ist","meaning":"名词：…的人；…主义者","meaningEn":"noun: person who practises or believes","origin":"希腊语 -istes","level":"基础","note":"表示从事某种活动或信奉某种主张的人。","examples":[{"word":"artist","pos":"n.","meaning":"艺术家"},{"word":"scientist","pos":"n.","meaning":"科学家"},{"word":"tourist","pos":"n.","meaning":"游客"},{"word":"optimist","pos":"n.","meaning":"乐观主义者"},{"word":"journalist","pos":"n.","meaning":"记者"},{"word":"pianist","pos":"n.","meaning":"钢琴家"}]},{"kind":"suffix","form":"-ful","meaning":"形容词：充满…的","meaningEn":"adjective: full of","origin":"古英语 -ful（full 的弱化）","level":"基础","note":"本义就是 full，所以是「装满……的」；注意它只有一个 l。","examples":[{"word":"useful","pos":"adj.","meaning":"有用的"},{"word":"careful","pos":"adj.","meaning":"小心的（心里装满了在意）"},{"word":"powerful","pos":"adj.","meaning":"强大的"},{"word":"wonderful","pos":"adj.","meaning":"精彩的"},{"word":"helpful","pos":"adj.","meaning":"有帮助的"},{"word":"thankful","pos":"adj.","meaning":"感激的（心里装满感谢）"}]},{"kind":"suffix","form":"-less","meaning":"形容词：没有…的","meaningEn":"adjective: without","origin":"古英语 -leas（失去）","level":"基础","note":"与 -ful 正好相对：没有、缺少；-less 本身不是 less 的否定用法。","examples":[{"word":"hopeless","pos":"adj.","meaning":"无望的"},{"word":"careless","pos":"adj.","meaning":"粗心的（心里没有在意）"},{"word":"endless","pos":"adj.","meaning":"无尽的"},{"word":"wireless","pos":"adj.","meaning":"无线的"},{"word":"fearless","pos":"adj.","meaning":"无畏的（没有恐惧）"},{"word":"useless","pos":"adj.","meaning":"无用的"}]},{"kind":"suffix","form":"-able / -ible","meaning":"形容词：能…的；可…的","meaningEn":"adjective: capable of being","origin":"拉丁语 -abilis / -ibilis","level":"基础","note":"表示「可以被……的」；-able 多接本土或法语词，-ible 多接拉丁语词。","examples":[{"word":"comfortable","pos":"adj.","meaning":"舒适的"},{"word":"remarkable","pos":"adj.","meaning":"非凡的；值得注意的"},{"word":"flexible","pos":"adj.","meaning":"灵活的（可以被弯的）"},{"word":"sensible","pos":"adj.","meaning":"明智的；可感知的"},{"word":"valuable","pos":"adj.","meaning":"有价值的；贵重的"},{"word":"visible","pos":"adj.","meaning":"可见的（拉丁语来源，用 -ible）"}]},{"kind":"suffix","form":"-ly","meaning":"副词：以…方式","meaningEn":"adverb: in a … manner","origin":"古英语 -lice","level":"基础","note":"形容词变副词的基本手段；少数形容词也以 -ly 结尾（friendly），要留意。","examples":[{"word":"quickly","pos":"adv.","meaning":"迅速地"},{"word":"carefully","pos":"adv.","meaning":"仔细地"},{"word":"finally","pos":"adv.","meaning":"最终"},{"word":"gradually","pos":"adv.","meaning":"逐渐地"},{"word":"sadly","pos":"adv.","meaning":"悲伤地；遗憾地"},{"word":"typically","pos":"adv.","meaning":"典型地；通常"}]},{"kind":"suffix","form":"-ous","meaning":"形容词：充满…性质的","meaningEn":"adjective: full of, having the nature of","origin":"拉丁语 -osus","level":"基础","note":"表示「富有某种性质」，多接拉丁语词根。","examples":[{"word":"dangerous","pos":"adj.","meaning":"危险的"},{"word":"famous","pos":"adj.","meaning":"著名的"},{"word":"nervous","pos":"adj.","meaning":"紧张的"},{"word":"curious","pos":"adj.","meaning":"好奇的"},{"word":"serious","pos":"adj.","meaning":"严肃的；严重的"},{"word":"generous","pos":"adj.","meaning":"慷慨的；大方的"}]},{"kind":"suffix","form":"-ity","meaning":"名词：性质或状态","meaningEn":"noun: quality or state","origin":"拉丁语 -itas","level":"进阶","note":"把 -e 结尾的形容词变成抽象名词（able → ability、secure → security）。","examples":[{"word":"ability","pos":"n.","meaning":"能力"},{"word":"quality","pos":"n.","meaning":"质量；品质"},{"word":"reality","pos":"n.","meaning":"现实"},{"word":"security","pos":"n.","meaning":"安全"},{"word":"activity","pos":"n.","meaning":"活动；活跃（active → activity）"},{"word":"possibility","pos":"n.","meaning":"可能性（possible → possibility）"}]},{"kind":"suffix","form":"-ance / -ence","meaning":"名词：状态或行为","meaningEn":"noun: state, quality, or act","origin":"拉丁语 -antia / -entia","level":"进阶","note":"对应形容词 -ant / -ent，表示性质或行为本身。","examples":[{"word":"importance","pos":"n.","meaning":"重要性"},{"word":"difference","pos":"n.","meaning":"差异"},{"word":"performance","pos":"n.","meaning":"表演；表现"},{"word":"patience","pos":"n.","meaning":"耐心"},{"word":"distance","pos":"n.","meaning":"距离"},{"word":"confidence","pos":"n.","meaning":"信心；信任"}]},{"kind":"suffix","form":"-ism","meaning":"名词：主义；行为","meaningEn":"noun: doctrine, system, or practice","origin":"希腊语 -ismos","level":"进阶","note":"三种用法：主义学说（realism）、行为做法（criticism）、特征总称（tourism）。","examples":[{"word":"realism","pos":"n.","meaning":"现实主义"},{"word":"tourism","pos":"n.","meaning":"旅游业"},{"word":"criticism","pos":"n.","meaning":"批评；批评主义"},{"word":"capitalism","pos":"n.","meaning":"资本主义"},{"word":"socialism","pos":"n.","meaning":"社会主义"},{"word":"journalism","pos":"n.","meaning":"新闻业；新闻工作"}]},{"kind":"suffix","form":"-ize / -ise","meaning":"动词：使…化","meaningEn":"verb: to make, to become","origin":"希腊语 -izein","level":"进阶","note":"构成动词表示「使成为、使……化」；英式英语常写作 -ise。","examples":[{"word":"realize","pos":"v.","meaning":"意识到；实现"},{"word":"organize","pos":"v.","meaning":"组织"},{"word":"modernize","pos":"v.","meaning":"使现代化"},{"word":"memorize","pos":"v.","meaning":"记住；背诵"},{"word":"recognize","pos":"v.","meaning":"认出；承认"},{"word":"apologize","pos":"v.","meaning":"道歉（英式亦作 apologise）"}]},{"kind":"suffix","form":"-ify / -fy","meaning":"动词：使成为","meaningEn":"verb: to make","origin":"拉丁语 -ificare","level":"进阶","note":"与 -ize 同义，但几乎只接形容词或名词词干，重音在被接词干上。","examples":[{"word":"simplify","pos":"v.","meaning":"简化"},{"word":"classify","pos":"v.","meaning":"分类"},{"word":"identify","pos":"v.","meaning":"识别；确认"},{"word":"purify","pos":"v.","meaning":"净化"},{"word":"beautify","pos":"v.","meaning":"美化（beauty → beautify）"},{"word":"satisfy","pos":"v.","meaning":"使满意（-fy 变体）"}]},{"kind":"suffix","form":"-ive","meaning":"形容词：有…倾向的","meaningEn":"adjective: tending to, having the nature of","origin":"拉丁语 -ivus","level":"进阶","note":"表示主动的性质或倾向，常与 -ion 名词成对出现（act → active → action）。","examples":[{"word":"active","pos":"adj.","meaning":"积极的；活跃的"},{"word":"creative","pos":"adj.","meaning":"有创造力的"},{"word":"effective","pos":"adj.","meaning":"有效的"},{"word":"impressive","pos":"adj.","meaning":"令人印象深刻的"},{"word":"attractive","pos":"adj.","meaning":"有吸引力的"},{"word":"expensive","pos":"adj.","meaning":"昂贵的"}]},{"kind":"suffix","form":"-al","meaning":"形容词/名词：…的；行为","meaningEn":"adjective: relating to; noun: the act of","origin":"拉丁语 -alis","level":"进阶","note":"既能把名词变形容词（nature → natural），也能构成动作名词（arrive → arrival）。","examples":[{"word":"natural","pos":"adj.","meaning":"自然的"},{"word":"personal","pos":"adj.","meaning":"个人的"},{"word":"arrival","pos":"n.","meaning":"到达"},{"word":"approval","pos":"n.","meaning":"批准；赞成"},{"word":"musical","pos":"adj.","meaning":"音乐的"},{"word":"refusal","pos":"n.","meaning":"拒绝（refuse → refusal）"}]},{"kind":"suffix","form":"-ic","meaning":"形容词：…的；…性质的","meaningEn":"adjective: relating to, of the nature of","origin":"希腊语 -ikos","level":"进阶","note":"多接希腊语来源的词干，构成学科与性质形容词；与 -ical 有时分工不同。","examples":[{"word":"basic","pos":"adj.","meaning":"基本的"},{"word":"scientific","pos":"adj.","meaning":"科学的"},{"word":"historic","pos":"adj.","meaning":"历史性的"},{"word":"dramatic","pos":"adj.","meaning":"戏剧性的"},{"word":"economic","pos":"adj.","meaning":"经济的"},{"word":"public","pos":"adj.","meaning":"公共的；公开的"}]},{"kind":"suffix","form":"-age","meaning":"名词：行为；总称；费用","meaningEn":"noun: act, collection, or charge","origin":"拉丁语 -aticum","level":"进阶","note":"三种用法：行为（marriage）、集合（package）、费用（postage）。","examples":[{"word":"marriage","pos":"n.","meaning":"婚姻"},{"word":"package","pos":"n./v.","meaning":"包裹；打包"},{"word":"storage","pos":"n.","meaning":"储存；仓储"},{"word":"shortage","pos":"n.","meaning":"短缺"},{"word":"language","pos":"n.","meaning":"语言"},{"word":"village","pos":"n.","meaning":"村庄"}]},{"kind":"suffix","form":"-ship","meaning":"名词：身份；状态；技能","meaningEn":"noun: state, office, or skill","origin":"古英语 -scipe","level":"高级","note":"从「身份」引申到「关系」与「本领」三种抽象含义。","examples":[{"word":"friendship","pos":"n.","meaning":"友谊"},{"word":"leadership","pos":"n.","meaning":"领导力；领导层"},{"word":"membership","pos":"n.","meaning":"会员资格"},{"word":"scholarship","pos":"n.","meaning":"奖学金；学问"},{"word":"relationship","pos":"n.","meaning":"关系（relation + -ship）"},{"word":"ownership","pos":"n.","meaning":"所有权（owner + -ship）"}]},{"kind":"suffix","form":"-hood","meaning":"名词：时期；身份","meaningEn":"noun: state, condition, or period","origin":"古英语 -had","level":"高级","note":"多表示人生的某段时期或某种身份状态。","examples":[{"word":"childhood","pos":"n.","meaning":"童年"},{"word":"neighborhood","pos":"n.","meaning":"社区；邻里"},{"word":"likelihood","pos":"n.","meaning":"可能性"},{"word":"adulthood","pos":"n.","meaning":"成年"},{"word":"brotherhood","pos":"n.","meaning":"兄弟情谊；同仁团体（brother + -hood）"},{"word":"nationhood","pos":"n.","meaning":"国家地位；民族独立状态（nation + -hood）"}]},{"kind":"suffix","form":"-dom","meaning":"名词：领域；状态","meaningEn":"noun: domain, state, or condition","origin":"古英语 -dom","level":"高级","note":"两种含义：「领域、国度」（kingdom）与抽象状态（freedom）。","examples":[{"word":"freedom","pos":"n.","meaning":"自由"},{"word":"kingdom","pos":"n.","meaning":"王国"},{"word":"wisdom","pos":"n.","meaning":"智慧"},{"word":"boredom","pos":"n.","meaning":"无聊"},{"word":"stardom","pos":"n.","meaning":"明星地位；明星界（star + -dom）"},{"word":"martyrdom","pos":"n.","meaning":"殉难；殉道（martyr + -dom）"}]},{"kind":"suffix","form":"-ward","meaning":"副词/形容词：朝…方向","meaningEn":"adverb/adjective: in the direction of","origin":"古英语 -weard","level":"高级","note":"表示方向，可作副词也可作形容词；英式常写 -wards。","examples":[{"word":"forward","pos":"adv./adj.","meaning":"向前"},{"word":"backward","pos":"adv./adj.","meaning":"向后"},{"word":"downward","pos":"adv./adj.","meaning":"向下"},{"word":"afterward","pos":"adv.","meaning":"之后"},{"word":"homeward","pos":"adv./adj.","meaning":"朝家的方向；回家的"},{"word":"onward","pos":"adv./adj.","meaning":"向前；继续向前的"}]},{"kind":"suffix","form":"-ary","meaning":"形容词/名词：与…有关的；场所","meaningEn":"adjective/noun: relating to; a place for","origin":"拉丁语 -arius","level":"高级","note":"既能构成形容词（necessary），也能构成表场所的名词（library、salary 原指盐钱）。","examples":[{"word":"necessary","pos":"adj.","meaning":"必要的"},{"word":"ordinary","pos":"adj.","meaning":"普通的"},{"word":"voluntary","pos":"adj.","meaning":"自愿的"},{"word":"salary","pos":"n.","meaning":"薪水"},{"word":"literary","pos":"adj.","meaning":"文学的；文人的"},{"word":"arbitrary","pos":"adj.","meaning":"任意的；专断的"}]},{"kind":"suffix","form":"-ate","meaning":"动词/形容词：使…；具有…的","meaningEn":"verb: to make; adjective: having","origin":"拉丁语 -atus","level":"高级","note":"既能构成动词（activate），也能构成形容词（fortunate）；作名词时多指职务或化合物。","examples":[{"word":"activate","pos":"v.","meaning":"激活"},{"word":"calculate","pos":"v.","meaning":"计算"},{"word":"fortunate","pos":"adj.","meaning":"幸运的"},{"word":"accurate","pos":"adj.","meaning":"准确的"},{"word":"passionate","pos":"adj.","meaning":"热情的；充满激情的"},{"word":"elaborate","pos":"v./adj.","meaning":"精心制作；精心设计的"}]},{"kind":"suffix","form":"-en","meaning":"动词/形容词：使…；由…制成的","meaningEn":"verb: to make; adjective: made of","origin":"古英语 -nian / -en","level":"高级","note":"古英语残留后缀：既能把形容词变动词（strengthen），也能构成材料形容词（wooden）。","examples":[{"word":"strengthen","pos":"v.","meaning":"加强"},{"word":"broaden","pos":"v.","meaning":"拓宽"},{"word":"wooden","pos":"adj.","meaning":"木制的"},{"word":"golden","pos":"adj.","meaning":"金色的；黄金般的"},{"word":"frighten","pos":"v.","meaning":"使害怕；吓唬"},{"word":"lengthen","pos":"v.","meaning":"加长；延长"}]},{"kind":"suffix","form":"-some","meaning":"形容词：有…倾向的","meaningEn":"adjective: tending to, causing","origin":"古英语 -sum","level":"高级","note":"表示「容易引起……的」或「有……倾向的」，多接动词或名词。","examples":[{"word":"handsome","pos":"adj.","meaning":"英俊的（原义「顺手好用的」）"},{"word":"troublesome","pos":"adj.","meaning":"麻烦的"},{"word":"awesome","pos":"adj.","meaning":"极好的；令人敬畏的"},{"word":"quarrelsome","pos":"adj.","meaning":"好争吵的"},{"word":"lonesome","pos":"adj.","meaning":"孤独的；寂寞的"},{"word":"burdensome","pos":"adj.","meaning":"繁重的；累赘的"}]},{"kind":"suffix","form":"-tude","meaning":"名词：状态；程度","meaningEn":"noun: state or degree","origin":"拉丁语 -tudo","level":"高级","note":"表示状态或程度，多接拉丁语形容词词干。","examples":[{"word":"attitude","pos":"n.","meaning":"态度"},{"word":"multitude","pos":"n.","meaning":"众多；大量"},{"word":"solitude","pos":"n.","meaning":"孤独；独处"},{"word":"altitude","pos":"n.","meaning":"高度；海拔"},{"word":"servitude","pos":"n.","meaning":"奴役；苦役"},{"word":"lassitude","pos":"n.","meaning":"疲乏；倦怠"}]},{"kind":"suffix","form":"-cy","meaning":"名词：状态；职位","meaningEn":"noun: state, quality, or office","origin":"拉丁语 -cia / -tia","level":"高级","note":"把 -t / -te 结尾的形容词变成抽象名词（accurate → accuracy）。","examples":[{"word":"accuracy","pos":"n.","meaning":"准确性"},{"word":"efficiency","pos":"n.","meaning":"效率"},{"word":"privacy","pos":"n.","meaning":"隐私"},{"word":"urgency","pos":"n.","meaning":"紧迫；紧急"},{"word":"vacancy","pos":"n.","meaning":"空缺；空房"},{"word":"redundancy","pos":"n.","meaning":"多余；裁员"}]},{"kind":"suffix","form":"-acious / -icious","meaning":"形容词：多…的；倾向…的","meaningEn":"adjective: inclined to, full of","origin":"拉丁语 -ax（词干 -ac-）","level":"高阶","note":"表示强烈的倾向或「满身都是」某种性质，属于书面高阶词。","examples":[{"word":"audacious","pos":"adj.","meaning":"大胆的；放肆的"},{"word":"tenacious","pos":"adj.","meaning":"顽强的；紧抓不放的"},{"word":"voracious","pos":"adj.","meaning":"贪婪的；狼吞虎咽的"},{"word":"judicious","pos":"adj.","meaning":"明智的；有判断力的"},{"word":"capacious","pos":"adj.","meaning":"容量大的；宽敞的"},{"word":"sagacious","pos":"adj.","meaning":"睿智的；有远见的"}]},{"kind":"suffix","form":"-escent","meaning":"形容词：正在…的；渐成…的","meaningEn":"adjective: becoming, beginning to be","origin":"拉丁语 -escens","level":"高阶","note":"表示「正在变成某个状态」，因此常与光、色、年岁有关。","examples":[{"word":"adolescent","pos":"adj./n.","meaning":"青春期的；青少年"},{"word":"fluorescent","pos":"adj.","meaning":"荧光的"},{"word":"convalescent","pos":"adj./n.","meaning":"康复中的；康复期病人"},{"word":"obsolescent","pos":"adj.","meaning":"逐渐过时的"},{"word":"iridescent","pos":"adj.","meaning":"彩虹色的；变彩的"},{"word":"luminescent","pos":"adj.","meaning":"发冷光的"}]},{"kind":"suffix","form":"-ferous","meaning":"形容词：含有…的；产生…的","meaningEn":"adjective: bearing, producing","origin":"拉丁语 ferre（携带）+ -ous","level":"高阶","note":"来自 fer（携带），表示「带着、产生着」某种东西，多用于植物学与科技词。","examples":[{"word":"coniferous","pos":"adj.","meaning":"针叶的；结球果的"},{"word":"pestiferous","pos":"adj.","meaning":"传播疾病的；有害的"},{"word":"vociferous","pos":"adj.","meaning":"喧闹的；大声疾呼的"},{"word":"somniferous","pos":"adj.","meaning":"催眠的"},{"word":"auriferous","pos":"adj.","meaning":"含金的；产金的"},{"word":"carboniferous","pos":"adj.","meaning":"含碳的；石炭纪的"}]},{"kind":"suffix","form":"-itude","meaning":"名词：状态；性质","meaningEn":"noun: state or quality","origin":"拉丁语 -itudo","level":"高阶","note":"与 -tude 同源但在拼写上固定为 -itude，几乎都是抽象名词。","examples":[{"word":"magnitude","pos":"n.","meaning":"巨大；量级"},{"word":"aptitude","pos":"n.","meaning":"才能；天资"},{"word":"fortitude","pos":"n.","meaning":"坚韧；刚毅"},{"word":"certitude","pos":"n.","meaning":"确信；确实"},{"word":"gratitude","pos":"n.","meaning":"感激；感恩"},{"word":"plenitude","pos":"n.","meaning":"充足；丰盈"}]},{"kind":"suffix","form":"-metry","meaning":"名词：测量（学）","meaningEn":"noun: the science or process of measuring","origin":"希腊语 metron（量度）","level":"高阶","note":"由希腊语「量度」构成的学科名后缀，前面接被测量的对象。","examples":[{"word":"symmetry","pos":"n.","meaning":"对称（两边量度相同）"},{"word":"trigonometry","pos":"n.","meaning":"三角学"},{"word":"telemetry","pos":"n.","meaning":"遥测"},{"word":"optometry","pos":"n.","meaning":"验光；视力测定"},{"word":"geometry","pos":"n.","meaning":"几何学（土地测量）"},{"word":"asymmetry","pos":"n.","meaning":"不对称"}]},{"kind":"suffix","form":"-pathy","meaning":"名词：感受；疾病疗法","meaningEn":"noun: feeling; disease or treatment","origin":"希腊语 pathos（感受、痛苦）","level":"高阶","note":"同一后缀两条路：表示「共感/感应」（empathy、telepathy）与表示「病」（neuropathy）。","examples":[{"word":"empathy","pos":"n.","meaning":"共情；同理心"},{"word":"telepathy","pos":"n.","meaning":"心灵感应"},{"word":"neuropathy","pos":"n.","meaning":"神经病变"},{"word":"antipathy","pos":"n.","meaning":"反感；厌恶"},{"word":"apathy","pos":"n.","meaning":"冷漠；无动于衷"},{"word":"homeopathy","pos":"n.","meaning":"顺势疗法"}]},{"kind":"suffix","form":"-phobia","meaning":"名词：恐惧症","meaningEn":"noun: irrational fear of","origin":"希腊语 phobos（恐惧）","level":"高阶","note":"前面接所恐惧的对象，构成医学或社会心理词汇。","examples":[{"word":"claustrophobia","pos":"n.","meaning":"幽闭恐惧症"},{"word":"acrophobia","pos":"n.","meaning":"恐高症"},{"word":"xenophobia","pos":"n.","meaning":"排外；仇外"},{"word":"hydrophobia","pos":"n.","meaning":"恐水症；狂犬病"},{"word":"agoraphobia","pos":"n.","meaning":"广场恐惧症；旷野恐惧"},{"word":"photophobia","pos":"n.","meaning":"畏光；恐光症"}]},{"kind":"suffix","form":"-scope","meaning":"名词：观察用的仪器","meaningEn":"noun: instrument for viewing","origin":"希腊语 skopein（看）","level":"高阶","note":"来自「看」，表示用来观察的器械；相应的动词后缀是 -scopy。","examples":[{"word":"periscope","pos":"n.","meaning":"潜望镜"},{"word":"stethoscope","pos":"n.","meaning":"听诊器"},{"word":"horoscope","pos":"n.","meaning":"星象；星座运势"},{"word":"endoscope","pos":"n.","meaning":"内窥镜"},{"word":"telescope","pos":"n.","meaning":"望远镜"},{"word":"kaleidoscope","pos":"n.","meaning":"万花筒；千变万化"}]},{"kind":"suffix","form":"-vorous","meaning":"形容词：食…的","meaningEn":"adjective: feeding on","origin":"拉丁语 vorare（吞食）+ -ous","level":"高阶","note":"前面接食物对象，用于描述动物的食性。","examples":[{"word":"carnivorous","pos":"adj.","meaning":"食肉的"},{"word":"herbivorous","pos":"adj.","meaning":"食草的"},{"word":"omnivorous","pos":"adj.","meaning":"杂食的；什么都读的"},{"word":"insectivorous","pos":"adj.","meaning":"食虫的"},{"word":"frugivorous","pos":"adj.","meaning":"食果的"},{"word":"graminivorous","pos":"adj.","meaning":"食草的；吃禾草的"}]}]};
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

    /**
     * Where the morpheme sits inside one example word, or null when it is invisible.
     *
     * The search follows the same attachment rule the build enforces: a prefix is
     * only looked for at the start of the word and a suffix only at its end, which is
     * what stops a short prefix such as `in-` from marking itself inside an unrelated
     * word. A stem may sit anywhere, and the longest variant wins so `spect` marks all
     * of `inspect` instead of the shorter `spec`.
     *
     * Null is not an error: sound change wears morphemes away (`reign` for reg-,
     * `faith` for fid-), and those rows are shown plain rather than marked at a
     * guessed position. `build.mjs` keeps that set honest — outside its reviewed
     * exemptions every example must carry its morpheme visibly.
     * @param form - the entry's display form.
     * @param word - one example word.
     * @returns `{ start, end }` in the word's own indices, or null when nothing shows.
     */
    function locateMorpheme(form, word) {
      const text = String(word ?? '');
      const lower = text.toLowerCase();
      // Longest first: for one word the longer variant is the specific answer.
      const variants = variantForms(form).slice().sort((left, right) => right.key.length - left.key.length);
      for (const { key, side } of variants) {
        if (side === 'prefix' && lower.startsWith(key)) return { start: 0, end: key.length };
        if (side === 'suffix' && lower.endsWith(key)) return { start: lower.length - key.length, end: lower.length };
      }
      for (const { key, side } of variants) {
        if (side !== 'neutral') continue;
        const at = lower.indexOf(key);
        if (at >= 0) return { start: at, end: at + key.length };
      }
      // Only a reviewed exemption gets this far: it spells part of the morpheme
      // somewhere inside without attaching it where its hyphen says, as `-log` does
      // in `logic`. Marking that teaches more than leaving the word bare.
      for (const { key } of variants) {
        const at = lower.indexOf(key);
        if (at >= 0) return { start: at, end: at + key.length };
      }
      return null;
    }

    /**
     * Split one example word around its morpheme, so a row can mark exactly that part
     * without losing the rest of the word. A word with nothing to mark arrives as one
     * unmarked segment, so callers never have to branch on null.
     * @param form - the entry's display form.
     * @param word - one example word.
     * @returns ordered `{ text, hit }` segments that rejoin into the word.
     */
    function wordSegments(form, word) {
      const text = String(word ?? '');
      const at = locateMorpheme(form, text);
      if (at === null) return [{ text, hit: false }];
      const segments = [];
      if (at.start > 0) segments.push({ text: text.slice(0, at.start), hit: false });
      segments.push({ text: text.slice(at.start, at.end), hit: true });
      if (at.end < text.length) segments.push({ text: text.slice(at.end), hit: false });
      return segments;
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
      locateMorpheme,
      wordSegments,
      // The example-word row and the quiz, so the offline test can render them and
      // assert that the morpheme is marked where it should be — and nowhere else.
      components: { WordRow, PracticeTab },
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
/* The morpheme inside an example word, marked by colour alone: the accent that
    belongs to the entry's class, at the weight the rest of the word already carries.
    A span, not a mark element: mark brings a yellow UA background (and a black UA
    colour) that would have to be reset, and any future repaint of that background
    would land straight on the words the reader is trying to read. This rule paints
    nothing — see the assertion in client-smoke.mjs that keeps it that way. */
.er-word-hl { color: var(--er-accent, var(--dsw-alias-brand-primary)); }
.er-feedback-word { font-weight: 600; }
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
        // The panel marks the morpheme inside the answer word, so the feedback keeps
        // the entry and its example instead of a finished sentence.
        answerEntry: answer.entry,
        answerExample: answer.entry.examples[0],
      };
    }

    /**
     * Render one example word as React children with its morpheme in a coloured span.
     *
     * A plain function rather than a component: the segments are already computed from
     * the arguments, so an extra element between the row and its text would buy nothing.
     */
    function markedChildren(form, word) {
      return wordSegments(form, word)
        .map((segment, index) => (segment.hit
          ? h('span', { key: `hit-${index}`, className: 'er-word-hl' }, segment.text)
          : segment.text));
    }

    /** One example-word row. */
    function WordRow(props) {
      const entry = props.entry;
      const example = props.example;
      // A word whose morpheme sound change has worn away has nothing to mark; the
      // tooltip says so, rather than letting the row look like a missed highlight.
      const obscured = locateMorpheme(entry.form, example.word) === null;
      return h('li', { className: 'er-word' },
        h('span', {
          className: 'er-word-text',
          title: obscured ? `含${KIND_LABEL[entry.kind]} ${entry.form}，但音变后词素已不可见` : undefined,
        }, markedChildren(entry.form, example.word)),
        h('span', { className: 'er-word-pos' }, example.pos),
        h('span', { className: 'er-word-meaning' }, example.meaning));
    }

    /** The example-word table shared by the detail and memorize views. */
    function WordList(props) {
      return h(React.Fragment, null,
        h('p', { className: 'er-section' }, `例词 ${props.entry.examples.length}`),
        h('ul', { className: 'er-words' },
          props.entry.examples.map((example) => h(WordRow, { key: example.word, entry: props.entry, example }))));
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
                  // The mark is held back until the question is answered: on an open
                  // question it would point straight at the right option.
                  h('span', null, answered && option === item.answerWord
                    ? markedChildren(item.answerEntry.form, option)
                    : option));
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
                h('div', null,
                  h('span', { className: 'er-feedback-word' },
                    markedChildren(item.answerEntry.form, item.answerWord)),
                  `（${item.answerExample.pos} ${item.answerExample.meaning}）`
                  + `含${KIND_LABEL[item.answerEntry.kind]} ${item.answerEntry.form}，`
                  + `意为「${item.answerEntry.meaning}」，源自${item.answerEntry.origin}。`)),
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
