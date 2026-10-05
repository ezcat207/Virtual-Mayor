# sources-gathering-2.md —— 10-where-they-gather.md 第二轮核验来源（前缀 [G2-xx]）

> 格式遵循 SOURCE-STANDARD.md（本轮按任务指定使用前缀 G2）。访问日期 2026-10-04。第一轮来源见 sources-gathering.md（[G-xx]）。
> 口径：只有"读到正文"的才标 #conf/high；仅搜索摘要的标 med/low 并在备注写"仅摘要"。

## 0. 访问方法与限制（诚实披露）
1. reddit.com / old.reddit.com 的 about.json、rules.json、wiki：curl 返回 403 "Blocked"，WebFetch 直接拒绝（"unable to fetch from old.reddit.com"）。**未绕过。**
2. 改用 **Internet Archive Wayback Machine 保存的 old.reddit.com 侧栏快照**（archive.org 公开存档，经 curl 取回 HTML 后本地抽文本）。侧栏里的 Rules 是子版版主写的原文，所以规则文字可信；但**是快照日期的版本**，不是今天的。成员数（"readers"）也是快照日期的数，只有 3 个快照带数。
3. 快照里侧栏缺失或只写"见新版 Reddit"的：r/Etsy、r/DataAnnotationTech（侧栏空）。r/WorkReform 只读到规则标题，未读到条文。
4. 中国公司用户数多为搜索摘要，IR 官网 WebFetch 超时（快手、丽水市政府页超时两次）。
5. 本轮没有取得：豆瓣小组、淘宝大学、拼多多商学院、微信群/视频号的平台规则、ASU、丽水技能培训具体机构。

## A. Reddit 侧栏/规则快照（Wayback，#type/primary-text #conf/med #region/northamerica）

### [G2-01] r/povertyfinance 侧栏
- 出处：版主侧栏，Wayback 快照 2026-07-26
- URL：http://web.archive.org/web/20260726214312/https://old.reddit.com/r/povertyfinance/
- Tags：#type/primary-text #conf/med #region/northamerica #topic/poverty
- Use：10 §A.1。读到规则 1-11 全文。要点：(7) "No gatekeeping. This sub is for anyone who self identifies as struggling financially"；(8) 善意建议，疑似诈骗/get-rich-quick/加密货币会删；(9) 外链须标题清楚，**允许自己的内容链接但必须披露关联；推荐码须同时给非推荐链接，假期禁推荐链接**；(10) 禁止公开或私下索取/提供捐款、借款、众筹，援助只限信息与建议。**规则 1-11 中没有任何调研/问卷条款**（既不允许也不禁止），因此调研帖按 (2) 离题与 (9) 披露规则处理，必须先问版主。
- 备注：快照无成员数。侧栏另有 wiki 链接。

### [G2-02] r/beermoney 侧栏
- 出处：Wayback 快照 2025-10-11
- URL：http://web.archive.org/web/20251011000347/https://old.reddit.com/r/beermoney/
- Tags：#type/primary-text #conf/med #region/northamerica #topic/gig
- Use：10 §A.1。要点：违规可能被封；新账号须满 1 个月且活跃才可发推荐码；**"Users must be verified before advertising their own website, task, survey, etc"（要先通过版主验证，才能推广自己的网站/任务/问卷）**；"All information must be in your post/comment. No blogs, YouTube videos, 'PM Me'"；有 "Survey Rant Megathread"；侧栏写"FREECASH IS A SCAM"、"别直接私信个别版主，发 modmail"。自述"不要指望靠它谋生"。
- 备注：条款细节在 "More Info" 链接，未读。第一轮读到的"IGNORE UNSOLICITED DMS/CHATS"属另一版本侧栏，本快照未见该句。

### [G2-03] r/doordash_drivers 侧栏与规则页
- 出处：Wayback 快照 2026-05-19（侧栏）、2024-11-27（规则页）
- URL：http://web.archive.org/web/20260519011407/https://old.reddit.com/r/doordash_drivers/ ；http://web.archive.org/web/20241127180817/https://www.reddit.com/r/doordash_drivers/about/rules/
- Tags：#type/primary-text #conf/med #region/northamerica #topic/gig
- Use：10 §A.1。**成员 422,014（快照 2026-05-19）**。规则 6 原文："Please do not post surveys or seek any type of demographics info. This especially applies to app developers. Please do not drop links without permission."；规则 3 禁一切个人信息（姓名、地址、车牌、电话、他人照片）；规则 5 禁推广码；规则 6 禁自我推广。→ **这里不能发问卷、不能收人口统计信息**。
- 备注：与聚合站 491k（2026-10）并列，口径与日期不同，未调和（见 [G-06]）。

### [G2-04] r/uberdrivers 侧栏与规则页
- 出处：Wayback 快照 2025-11-22（侧栏）、2025-07-28（规则页）
- URL：http://web.archive.org/web/20250728221959/https://old.reddit.com/r/uberdrivers/about/rules/
- Tags：#type/primary-text #conf/med #region/northamerica #topic/gig
- Use：10 §A.1。**成员 431,261（快照 2025-07-28）**。规则 5 "No outside surveys or polls" 原文："If you want to gather information from this community to help your business or academic study... you must buy a reddit ad. They are cheap. In rare circumstances we will allow surveys. Message us..."；通过的问卷会有版主评论标明理由。规则 2 禁推广，须事先得版主许可；可经一次 AMA 帖介绍新公司/技术，须先与版主协调。
- 备注：这是目前读到的唯一一条"明说可以申请/买广告"的调研路径。

### [G2-05] r/InstacartShoppers 规则页
- 出处：Wayback 快照 2024-12-16（规则）、2026-06-10（侧栏）
- URL：http://web.archive.org/web/20241216111412/https://old.reddit.com/r/InstacartShoppers/about/rules/
- Tags：#type/primary-text #conf/med #region/northamerica #topic/gig
- Use：10 §A.1。**成员 198,302（快照 2024-12-16）**——注意聚合站说 260k（2026-10），差异与时间一致但未核实。规则 1 把 "Surveys / Studies / Interviews / Petitions / Offers / Outside sites" 明列为 spam；规则 2 禁个人信息；规则 13 AMA 须版主批准并证明与 Instacart 的关系。→ **访谈招募与问卷均被明确禁止**。
- 备注：2024 年的规则页，现行可能变。

### [G2-06] r/Frugal 规则页
- 出处：Wayback 快照 2026-08-05
- URL：http://web.archive.org/web/20260805054917/https://old.reddit.com/r/Frugal/about/rules
- Tags：#type/primary-text #conf/med #region/northamerica #topic/poverty
- Use：10 §A.1。规则 4 "No self-promotion, solicitation, or market research"；原文含 "Surveys or petitions... Market research. Breaking this rule will get you a PERMANENT BAN on the first offense"；另禁推荐/联盟链接、商业链接、物质援助请求。
- 备注：无成员数。

### [G2-07] r/WorkReform 侧栏
- 出处：Wayback 快照 2026-08-02（侧栏）、2024-11-26（规则页，只有标题）
- URL：http://web.archive.org/web/20260802024537/https://old.reddit.com/r/WorkReform/
- Tags：#type/primary-text #conf/med #region/northamerica #topic/labor
- Use：10 §A.1。规则标题：Play to win / Be respectful / No drama / **No self-promotion / No data collection** / No meta / No trivial / Reposts allowed / Naming and shaming allowed / Reddit content policy / No unendorsed candidates / No AI-generated content。"No data collection" 条文**未读到**，按字面应视为禁问卷与数据采集 #inference。
- 备注：无成员数。

### [G2-08] r/Assistance 侧栏
- 出处：Wayback 快照 2026-07-12
- URL：http://web.archive.org/web/20260712101621/https://old.reddit.com/r/Assistance/
- Tags：#type/primary-text #conf/med #region/northamerica #topic/poverty
- Use：10 §A.1。使命"Redditors helping redditors ranging from financial assistance and wishlist fulfillment to advice, support, contest votes, and surveys"，**flair 含 "Votes/Surveys"**，所以是少数明确有问卷类别的求助版。发请求须评论 karma ≥400、近 60 天活跃、先登记；两次未满足请求间隔 72 小时；**严禁向求助者发未经请求的私信**；不得写 CashApp/PayPal 等个人信息；禁止借贷请求；使用 Universal Scammer List。
- 备注：问卷类别是给"求助者自己的投票/问卷"，我们能否使用须问版主，未读 Full Rules wiki。无成员数。

### [G2-09] r/Flipping 侧栏
- 出处：Wayback 快照 2026-08-07
- URL：http://web.archive.org/web/20260807010414/https://old.reddit.com/r/Flipping/
- Tags：#type/primary-text #conf/med #region/northamerica #topic/gig
- Use：10 §A.1。**自我推广只能发在每周日的 Self Promotion 周帖**；周六为客户问题/抱怨周帖；禁推荐链接与短链；禁个人信息（含截图中他人用户名）。无调研条款。
- 备注：无成员数。

### [G2-10] r/AmazonFC 侧栏
- 出处：Wayback 快照 2026-08-13
- URL：http://web.archive.org/web/20260813114833/https://old.reddit.com/r/AmazonFC/
- Tags：#type/primary-text #conf/med #region/northamerica #topic/labor
- Use：10 §A.1。"Disclaimer: not owned or maintained by Amazon"；规则：禁冒犯、禁 spam（含任何自我推广与站外链接）、禁个人信息（全名、脸、年龄、地址、证件）、勿讨论保密内容（设施内照片）；侧栏有 Discord 邀请。无调研条款。
- 备注：无成员数。

### [G2-11] r/Etsy 与 r/DataAnnotationTech 快照（没有规则原文）
- 出处：Wayback 快照 2026-08-02（Etsy）、2026-04-20（DAT）
- URL：http://web.archive.org/web/20260802195235/https://old.reddit.com/r/Etsy/ ；http://web.archive.org/web/20260420160612/https://old.reddit.com/r/DataAnnotationTech/
- Tags：#type/primary-text #conf/low #region/northamerica #topic/gig #topic/data-labeling
- Use：10 §A.1。r/Etsy 侧栏仅写"Please view new Reddit for our sub rules"，**规则未读**；有版主置顶的每周 "Share Your Stuff" 周帖。r/DataAnnotationTech 侧栏在快照中为空，**规则未读**；置顶有 "FAQ & Welcome Thread"（781 条评论）和双语者公告帖；热帖话题为双语资格、简历、推荐码、"有无项目"、任务过期、电话号码被占用。规则线索仍只有 [G-08]（聚合站摘要）。
- 备注：这两个子版本轮仍是缺口。

## B. 中国法规（官方）

### [G2-20] 《中华人民共和国个人信息保护法》全文（全国人大网）
- 出处：中国人大网，2021-08-20 第十三届全国人大常委会第三十次会议通过；访问 2026-10-04（读了页面正文）
- URL：http://www.npc.gov.cn/npc/c2/c30834/202108/t20210820_313088.html
- Tags：#type/official #conf/high #region/china #topic/data-compliance
- Use：10 §C 合规与 §E.1。条文：**第七十四条 "本法自2021年11月1日起施行"**；第五条 合法正当必要诚信，禁止误导欺诈胁迫；第六条 目的明确合理，限于最小范围；第十三条 处理须有合法基础（取得同意，或合同必需，或"依照本法规定在合理的范围内处理个人自行公开或者其他已经合法公开的个人信息"等）；第十四条 同意须"充分知情、自愿、明确"，目的/方式/种类变更须重新取得同意；第十五条 可撤回同意；第二十八条 敏感个人信息含生物识别、宗教信仰、特定身份、医疗健康、金融账户、行踪轨迹，及不满十四周岁未成年人信息；**第二十九条 处理敏感个人信息应当取得个人的"单独同意"**；第三十一条 不满14岁须监护人同意；第三十八条 向境外提供个人信息须满足安全评估/认证/标准合同等条件之一；正文另有"自然人因个人或者家庭事务处理个人信息的，不适用本法"一条（条号本轮未核对，不引）。
- 备注：条文版本为 2021 通过版；是否有后续修订本轮未查。

### [G2-21] 《中华人民共和国数据安全法》全文（全国人大网）
- 出处：中国人大网，2021-06-10 第十三届全国人大常委会第二十九次会议通过；访问 2026-10-04（读了页面正文）
- URL：http://www.npc.gov.cn/npc/c2/c30834/202106/t20210610_311888.html
- Tags：#type/official #conf/high #region/china #topic/data-compliance
- Use：10 §C/§E。正文最后一条："本法自2021年9月1日起施行"；第三十一条涉及向境外提供重要数据。
- 备注：未逐条通读。

### [G2-22] 《网络数据安全管理条例》（国务院令第790号）
- 出处：新华网/生态环境部网站转载国务院令；搜索摘要
- URL：http://www.news.cn/politics/leaders/20240930/fb049fa508894e57aa41cfa94d5f3203/c.html ；https://www.mee.gov.cn/zcwj/gwywj/202410/t20241003_1087417.shtml
- Tags：#type/official #conf/med #region/china #topic/data-compliance
- Use：10 §E。"2024年8月30日国务院第40次常务会议通过……自2025年1月1日起施行"。
- 备注：仅摘要，未读正文。

## C. 中国：规模与规范

### [G2-23] 全国总工会：工会驿站
- 出处：央广网引全总，2025-04-28（WebFetch 读了报道）
- URL：https://health.cnr.cn/jkgdxw/20250428/t20250428_527151630.shtml
- Tags：#type/news #conf/med #region/china #topic/labor
- Use：10 §C。"全国现已建成劳动驿站18.61万个"（截至 2024 年底），提供饮水、如厕、饭食、休息、手机充电等；搜索摘要另称 2024 年服务近 8 亿人次（报道正文未见该数，仅摘要）。更早口径：2023-07 约 12 万个，2021-07 约 7.8 万个（搜索标题）。
- 备注：名称在不同年份有"户外劳动者服务站点/劳动驿站/工会驿站"，口径不完全一致。

### [G2-24] 新华网：超 1000 万外卖骑手
- 出处：新华网"民生直通车·外卖观察"，2025-01-16（WebFetch 读了正文）
- URL：https://www.news.cn/politics/20250116/76ec3cf62fb7416aa7abd94938bc078e/c.html
- Tags：#type/news #conf/med #region/china #topic/gig
- Use：10 §C。"全国外卖骑手超1000万"；饿了么活跃骑手超 400 万；美团骑手"以年均近20%增速攀升至745万人"；近半数骑手累计工作不满 3 个月，只有 11% 累计满 260 天；2021 年每天劳动超 10 小时的骑手占 62.6%；一个站点近百名专送骑手中两三人月薪过万（个案）。
- 备注：骑手总数口径多样（另见搜索摘要 1300 万，占新就业形态劳动者 15%）。

### [G2-25] 新就业形态劳动者 8400 万
- 出处：新华网 2023-03-27；中国就业网（人社部）等搜索摘要
- URL：http://www.news.cn/politics/2023-03/27/c_1129466522.htm
- Tags：#type/news #conf/med #region/china #topic/gig
- Use：10 §C。全总第九次全国职工队伍调查：新就业形态劳动者 8400 万，占职工总数 21%，含货车司机、网约车司机、快递员、外卖员。
- 备注：仅摘要；2023 年数据。

### [G2-26] 美团 2025 社会责任报告
- 出处：搜狐/IT之家等转载，美团 CSR 报告；搜索摘要
- URL：https://m.sohu.com/a/1007787101_120285954 ；https://www.ithome.com/0/865/843.htm
- Tags：#type/company #conf/low #region/china #topic/gig
- Use：10 §C。2024 年月均有单骑手 336 万；2025 年来自国家乡村振兴重点帮扶县的骑手 63.6 万；"骑手友好社区"近 3 万个（2025 上半年，150+城市）；也有"4.5 万个/279 城"的说法（口径冲突，并列）。
- 备注：仅摘要，PDF 未读；与 [G2-24] 的 745 万并列，口径不同（月均有单 vs 注册/活跃）。

### [G2-27] 腾讯 2026Q2 业绩：微信
- 出处：腾讯，2026-08-12 业绩公告（搜索摘要，PDF 未读）
- URL：https://www.tencent.com/wp-content/uploads/2026/08/Tencent-Announces-2026-Second-Quarter-Results.pdf
- Tags：#type/company #conf/med #region/china #topic/platform
- Use：10 §C。微信及 WeChat 合并月活 14.39 亿（2026Q2）。
- 备注：仅摘要。**无视频号/群的单独数据。**

### [G2-28] 快手 2026Q2
- 出处：快手 IR 新闻稿，2026-08（搜索摘要；IR 页 WebFetch 超时）
- URL：https://ir.kuaishou.com/news-releases/news-release-details/kuaishou-technology-announces-second-quarter-and-interim-2026
- Tags：#type/company #conf/med #region/china #topic/platform
- Use：10 §C。快手 App 平均日活 4.12 亿、月活 7.97 亿。
- 备注：仅摘要。

### [G2-29] B 站 2026Q2
- 出处：Bilibili 新闻稿，2026-08-27（搜索摘要）
- URL：https://www.nasdaq.com/press-release/bilibili-inc-announces-second-quarter-2026-financial-results-2026-08-27
- Tags：#type/company #conf/med #region/china #topic/platform
- Use：10 §C。日活 1.165 亿、月活 3.71 亿；日均使用 113 分钟。
- 备注：仅摘要。

### [G2-30] 知乎 2026Q2
- 出处：Zhihu Inc. 业绩，2026-08-26（搜索摘要）
- URL：https://www.nasdaq.com/press-release/zhihu-inc-reports-unaudited-second-quarter-2026-financial-results-2026-08-26
- Tags：#type/company #conf/low #region/china #topic/platform
- Use：10 §C。月均付费会员 1,310 万；收入 6.901 亿元（同比 -3.7%）。**摘要中没有 MAU，所以不写知乎月活。**
- 备注：仅摘要。

### [G2-31] 小红书月活 3.5 亿+
- 出处：新浪财经转自小红书官方表态，2025-08-29（摘要）
- URL：https://finance.sina.com.cn/stock/t/2025-08-29/doc-infnsira2488811.shtml
- Tags：#type/news #conf/med #region/china #topic/platform
- Use：10 §C。"月活跃用户已超过 3.5 亿"（报道标题）。摘要里的 "85% 为 19-35 岁女性" 来自千瓜数据等第三方，不引。
- 备注：仅摘要；摘要英文把 3.5 亿写成 "3.5 billion" 属误译，以中文标题为准。

### [G2-32] 抖音规模（第三方）
- 出处：新浪科技引 QuestMobile，2026-04-29；财联社（摘要）
- URL：https://finance.sina.com.cn/tech/discovery/2026-04-29/doc-inhwckrh8029807.shtml ；https://www.cls.cn/detail/715859
- Tags：#type/aggregator #conf/low #region/china #topic/platform
- Use：10 §C。QuestMobile：2026 年 3 月抖音月活突破 10 亿；其他来源说日活 6 亿+/8.3 亿/8.5 亿——**口径冲突，并列**。抖音母公司不披露官方 DAU。
- 备注：仅摘要；非官方。

### [G2-33] 小红书社区公约 2.0
- 出处：中国日报网，2026-01-20（摘要）；界面新闻关于商业公约
- URL：https://cn.chinadaily.com.cn/a/202601/20/WS696eef27a310942cc499bf9f.html
- Tags：#type/news #conf/med #region/china #topic/platform-rules
- Use：10 §C。2026-01-19 上线社区公约 2.0，25 条；站外导流（在笔记、评论、简介、私信里留微信/QQ/二维码）违规；私信骚扰、广告导流违规；"不得伪装成普通用户进行不当营销或过度发送营销内容骚扰他人"；处罚分级。→ **在小红书上用私信拉访谈对象有封号风险。**
- 备注：仅摘要，公约原文未读。

### [G2-34] 贴吧"外卖骑手吧"
- 出处：百度贴吧页面搜索摘要（日期不明）
- URL：https://wapforum.baidu.com/f?kw=%E5%A4%96%E5%8D%96%E9%AA%91%E6%89%8B&mo_device=1
- Tags：#type/primary-text #conf/low #region/china #topic/gig
- Use：10 §C。关注 2,288、帖子 9,532（摘要所见时点，日期不明）。→ **规模很小，且今天是否活跃未核实。**
- 备注：仅摘要。

### [G2-35] 知识星球
- 出处：官网/百科/蓝鲸财经搜索摘要
- URL：https://doc.zsxq.com/about-zsxq.html
- Tags：#type/company #conf/low #region/china #topic/platform
- Use：10 §C。自称服务 90 万+ 创作者、沉淀上千万用户；"累计用户超 4000 万人次"来自第三方，未核对。付费社群为主。
- 备注：自述；仅摘要。

### [G2-36] 社区团购团长
- 出处：第一财经 CBNData、腾讯新闻等，2021-2022（摘要）
- URL：http://www.cbndata.com/information/118282 ；https://www.cbndata.com/information/283331
- Tags：#type/news #conf/low #region/china #topic/gig
- Use：10 §C。团长以便利店主和有 200+ 人微信群的宝妈为主；兴盛优选团长 30 万+；头部 5-10% 贡献 80-90% 销售；多数日订单不超 50 单。美团优选/多多买菜不公布团长数。
- 备注：2021-2022 年数据，今天已过时；仅摘要。

### [G2-37] 人社部等八部门《关于维护新就业形态劳动者劳动保障权益的指导意见》
- 出处：应急管理部转载，2022-01-19（摘要）
- URL：https://www.mem.gov.cn/gk/zfxxgkpt/fdzdgknr/202201/t20220119_406920.shtml
- Tags：#type/official #conf/med #region/china #topic/labor
- Use：10 §C。国家要求在新就业形态劳动者集中居住区、商业区设置临时休息场所；地方可利用"职工之家""小哥驿站"做调解等服务。证明"服务站/驿站"是政策性存在，不等于各地都有。
- 备注：仅摘要。

## D. 丽水

### [G2-40] 丽水山耕
- 出处：丽水市人民政府网站多篇（含 2024-12-18 生态农业协会会员代表大会与"品牌发展蓝皮书"、2022-12-16、2021-05-26）搜索摘要；市政府页 WebFetch 两次超时
- URL：https://www.lishui.gov.cn/art/2024/12/18/art_1229218390_57366926.html
- Tags：#type/official #conf/med #region/china #topic/rural-brand
- Use：10 §C 丽水。全国首个"全区域、全品类、全产业链"的地市级农产品区域公用品牌；2017-07 注册集体商标；由丽水市生态农业协会注册、委托市农业投资发展公司运营；**数字冲突并列**：摘要之一称"会员 352 家、授权产品 956 款"（2024 蓝皮书说法），另一称"协会会员 523 家、授权产品 834 款"，累计销售破百亿、溢价率超 30%。
- 备注：仅摘要；会员/产品数字不可采用单一值。

### [G2-41] 缙云烧饼
- 出处：中国农村网，2024-07-01（读了正文）；其他搜索摘要（人民网浙江频道 2025-02-07、中新网 2023-04-28 等）
- URL：https://www.crnews.net/zt/jjzjx/xccyfz/964294_20240701092845.html
- Tags：#type/news #conf/med #region/china #topic/rural-brand
- Use：10 §C 丽水。正文：2023 年产值 34.8 亿元、相关从业 2.4 万人、带动近 5 万人增收、累计培训 11,577 人次、中级师傅 769 人、高级师傅 482 人、烧饼大师 10 人、示范店 768 家、全国 20 多个省市、16 个国家和地区。**另有摘要称 2024 年产值 38.9 亿（"超 40 亿"）、从业 2.5 万、示范店 791 家、师傅 1.2 万——不同年份/口径，并列**。2014 年缙云在全国率先成立"烧饼办"和烧饼协会；缙云烧饼制作技艺 2021 年入选第五批国家级非遗。
- 备注：此来源为农业农村系统媒体转述县政府材料；师傅分级人数两个来源不一致（中级 769 vs 273，高级 482 vs 392），未调和。

### [G2-42] 青田侨情
- 出处：中国日报网浙江频道，2022-12-03（摘要）
- URL：https://zj.chinadaily.com.cn/a/202212/03/WS638ae18fa3102ada8b2250fa.html
- Tags：#type/news #conf/med #region/china #topic/diaspora
- Use：10 §C 丽水。青田县海外华侨华人 38.1 万，分布 146 个国家和地区；前十为西班牙、意大利、葡萄牙、巴西、法国、奥地利、德国、荷兰、比利时、塞尔维亚；西班牙、意大利各超 10 万。
- 备注：仅摘要；2022 数据。

### [G2-43] 景宁畲族自治县
- 出处：景宁县政府网站、国家民委网站搜索摘要
- URL：http://www.jingning.gov.cn/col/col1376099/index.html
- Tags：#type/official #conf/med #region/china #topic/minority
- Use：10 §C 丽水。1984 年建县，全国唯一畲族自治县、华东唯一民族自治县；2023 年末户籍人口 166,174，其中畲族 18,410（约 11%）；第七次人口普查（2020-11-01）常住人口 111,011。
- 备注：仅摘要（户籍与常住口径不同，已并列）。

### [G2-44] 淘宝村与丽水农村电商
- 出处：阿里研究院数据的二手转载；中国日报网 2024-03-01（丽水就业创业）（摘要）
- URL：https://cn.chinadaily.com.cn/a/202403/01/WS65e1a392a3109f7860dd3982.html
- Tags：#type/aggregator #conf/low #region/china #topic/ecommerce
- Use：10 §C 丽水。2022 年全国淘宝村 7,780 个（二手）；丽水点名的淘宝村含缙云北山村（户外用品）、龙泉村头村、松阳筏铺村、西山村；**未取得丽水淘宝村总数与官方名单**。摘要称 2022 年底丽水农村电商网店 1.9 万家、从业 5.3 万人、农村网络零售 412 亿元，全市网络零售额 725.7 亿（同比 +22.8%）。
- 备注：仅摘要，低置信。

### [G2-45] 丽水市电子商务促进会
- 出处：丽水市商务局网站，2015-09（摘要）
- URL：http://sswj.lishui.gov.cn/art/2015/9/15/art_1229219478_58313072.html
- Tags：#type/official #conf/med #region/china #topic/ecommerce
- Use：10 §C 丽水。**正式名称为"丽水市电子商务促进会"（非"电商协会"）**，2015-09-11 成立，初始会员约 541；下设农村电商、跨境电商、微商、快递物流等分会。
- 备注：仅摘要；今天是否活跃、会员数未知。

### [G2-46] 丽水农民培训与乡村振兴学习中心
- 出处：丽水市政府网站多份通知（2019、2022-01-28、2023）摘要
- URL：http://www.lishui.gov.cn/art/2022/1/28/art_1229418627_2391781.html ；http://www.lishui.gov.cn/art/2023/9/21/art_1229418627_2491591.html
- Tags：#type/official #conf/low #region/china #topic/training
- Use：10 §C/§D 丽水。2019 年依托丽水学院、丽水职业技术学院、丽水广播电视大学设市级乡村振兴学习中心；2022 年《丽水百万农民素质提升促共富行动暨百万农民大培训方案》；2023 年市农业农村局公布第四批"乡村振兴实训基地"。**未找到"丽水乡村振兴学院"这一名称的官方页**——只能说"培训体系存在"，不要预设有这个学院。
- 备注：仅摘要。

## E. 凤凰城/亚利桑那

### [G2-50] Chispa（LCV）
- 出处：chispalcv.org About（WebFetch 读了正文）；LCV 新闻稿摘要
- URL：https://chispalcv.org/about-us/ ；https://www.lcv.org/media-center/lcvs-chispa-arizona-launches-clean-buses-healthy-ninos-campaign/
- Tags：#type/ngo #conf/high #region/northamerica #topic/environment
- Use：10 §B.3。Chispa 是 League of Conservation Voters 的社区组织项目，对象为"拉美裔与低收入有色人群社区"，使命是气候正义、社区健康、环境保护；在 AZ、CO、FL、MD、NV、TX 活动；亚利桑那项目设在凤凰城（清洁校车等）。**不是劳工/零工组织**；与"赚钱"主题关联弱，主要价值是信任入口与家长网络。
- 备注：About 页无亚利桑那专页细节。

### [G2-51] St. Mary's Food Bank
- 出处：官网 About（WebFetch 读了正文）；维基/第三方摘要
- URL：https://www.stmarysfoodbank.org/about-us/
- Tags：#type/ngo #conf/high #region/northamerica #topic/food-assistance
- Use：10 §B.2/§D。1967 年创立，自称世界首个食物银行；600+ 非营利伙伴（食物柜、庇护所、儿童与老年营养项目）；项目含上门配送、移动发放、**Skills Center（工作培训/职业培训）**。摘要称凤凰城站点每天服务 1,000–1,200 户（日期不明，第三方，低置信）。
- 备注：官网未给年度餐数；"300,000 餐/天"等为旧摘要，不引。

### [G2-52] 211 Arizona
- 出处：Maricopa County 新闻稿与 KTAR 摘要；211arizona.org 目录页
- URL：https://www.maricopa.gov/m/newsflash/Home/Detail/2742?arc=4984 ；https://ktar.com/arizona-news/maricopa-county-resource-directory-to-be-absorbed-by-211-arizona/5504199/
- Tags：#type/official #conf/med #region/northamerica #topic/social-services
- Use：10 §B.2/§D。24/7 电话（拨 2-1-1）与网站，提供食物、住房、水电、医疗、就业教育等资源；母机构 Solari；Maricopa County 的 Find Help Phoenix 目录并入 211 Arizona。
- 备注：仅摘要；未取得年接触量。

### [G2-53] Maricopa Community Colleges
- 出处：maricopa.edu 新闻稿（2026）摘要
- URL：https://www.maricopa.edu/news/2026/college-back-maricopa-community-colleges-enrollment-rises-demand-career-driven-education-increases
- Tags：#type/official #conf/med #region/northamerica #topic/education
- Use：10 §B.2/§D。10 所学院、31 个分点、600+ 项目；2026 春季入学增 8%，预计近 10 万学生；有微证书、短期证书；Maricopa Corporate College 做企业培训。
- 备注：仅摘要；未查成人教育/ESL 具体课程。

### [G2-54] Phoenix Public Library
- 出处：phoenix.gov、phoenixpubliclibrary.org 页面摘要
- URL：https://www.phoenix.gov/newsroom/public-library-news/phoenix-public-library-highlights-free-resources--programs--and-.html ；https://www.phoenixpubliclibrary.org/documents/ESL(ELAA)7.17.25.pdf
- Tags：#type/official #conf/med #region/northamerica #topic/education
- Use：10 §B.2/§D。PHXWorks（简历、面试、电脑使用等求职帮助）、College Depot（Burton Barr 二楼，66 台电脑）、MACH1 创客空间、线上 ESL（Rosetta Stone）与线下英语会话班；有 "Second Chance Job Fair" 活动页。
- 备注：仅摘要；未核实这些项目当前是否仍在运行及场地规则。

### [G2-55] 亚利桑那工人中心
- 出处：Grassroots Justice Network 目录、tucson.com 报道（摘要）
- URL：https://grassrootsjusticenetwork.org/connect/organization/az-worker-rights-center/ ；https://tucson.com/news/article_3381166b-3e6e-5ba1-a63f-b47444bbc2ad.html
- Tags：#type/ngo #conf/low #region/northamerica #topic/labor
- Use：10 §B.3。**AZ Worker Rights Center / Centro de Trabajadores**（凤凰城，劳动权益）；**Macehualli Work Center**（Tonatierra 运营，2003 年设立，凤凰城零工中心，每日数十名零工求职：建筑、园艺、家政）。
- 备注：仅摘要与目录页；两者现状、规模未核实。

### [G2-56] 亚利桑那零工司机组织：未发现
- 出处：搜索摘要（uberpeople.net 论坛帖、维基）
- URL：https://www.uberpeople.net/threads/app-based-drivers-association-in-phoenix.134091/
- Tags：#type/aggregator #conf/low #region/northamerica #topic/gig
- Use：10 §B.3。**没有找到亚利桑那本地的网约车/外卖司机组织**；Rideshare Drivers United 的活动区域为加州 [G-42]，是否在 AZ 有成员未核实。论坛有人询问凤凰城是否有司机协会，说明至少在该帖时点没有成熟的。
- 备注：否定性结论，只是"未找到"，不等于不存在。

## F. 本轮未取得（保持"未核验"）
- 豆瓣小组、淘宝大学/拼多多商学院、微信群/视频号社群规则、知乎/B站/抖音的调研相关社区规则原文。
- r/DataAnnotationTech、r/Etsy、r/WorkReform（规则 5 条文）规则原文；r/outlier_ai、r/mturk、r/Truckers 等第一轮子版的规则。
- Reddit 官方成员数（仅 3 个快照数）。
- ASU 与凤凰城社区组织的具体项目；丽水技能培训具体机构；丽水淘宝村总数。
