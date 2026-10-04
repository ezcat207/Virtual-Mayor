# sources-gathering.md —— 10-where-they-gather.md 的来源登记（前缀 [G-xx]）

> 格式遵循 SOURCE-STANDARD.md。访问日期均为 2026-10-04。
> **重要访问限制记录**（本轮诚实披露）：
> 1. reddit.com / old.reddit.com / api.reddit.com 的 about.json、/about/rules 对 WebFetch 直接拒绝（"unable to fetch"），curl 返回反爬页面，未绕过。**因此没有任何一个 subreddit 的规则原文被读到。**
> 2. 订阅数来自聚合站 gummysearch.com 的 r/NAME 页面（经 WebFetch 摘要）。该站非官方，页面自带"最后更新日期"（2026-09-30 至 10-04）；增速为该站口径。整体标 #conf/med，且 **未用 Reddit 官方页面交叉核对**。
> 3. 大量 subreddit 页面在聚合站返回 404（用大小写变体重试后仍失败）：r/CNA、r/Caregivers、r/Handyman、r/NewToCanada、r/remotasks、r/target、r/warehouse、r/ESL、r/ChineseAmerican、r/Phoenix、r/Mechanicalturk、r/PovertyFinanceCanada、r/ebayselling。这些**无成员数**。
> 4. Reddit 官方帮助中心页（Reddit for Researchers、Developer Platform）、SAGE/ACM 论文页均返回 403，只能用 WebSearch 摘要。
> 5. **会话额度在 B/C/D 部分检索中途触顶**（"You've hit your session limit · resets 6:40pm PT"）。触顶前只读到 LUCHA、Rideshare Drivers United 官网和 Los Deliveristas Unidos 的搜索摘要。**第 B（除上述三者外）、C（中国全部）、D 部分没有做到检索验证**，10 号文件里这些内容全部标 #conf/low 并注明"未核验"。

## A. Reddit 订阅数（聚合站 gummysearch.com，经 WebFetch 摘要；统一 Tags：#type/aggregator #conf/med #region/northamerica #topic/labor|gig）

格式：[G-xx] r/NAME | 成员数 | 年增（站点口径） | 页面标注日期 | 页面里读到的规则/说明

- [G-01] r/povertyfinance | 2.9M | +508k（21%） | 2026-10-02 | 描述"A support group for those who are struggling financially…"；"No Judgement, just advice!"。URL https://gummysearch.com/r/povertyfinance/
- [G-02] r/personalfinance | 21.9M | +440k（2.1%） | 2026-10-02 | 规则页面未列出
- [G-03] r/Frugal | 6.9M | +258k（3.9%） | 2026-10-04 | 规则页面未列出
- [G-04] r/WorkReform | 824k | +57k（7.5%） | 2026-10-01 | 口号"Food, Healthcare, Housing, Education & Justice For All"
- [G-05] r/antiwork | 3.0M | +129k（4.5%） | 2026-10-04 | 热门含"employment automation"担忧
- [G-06] r/doordash_drivers | 491k | +117k（31.1%） | 2026-10-01 | "largest unofficial sub for DoorDash drivers"
- [G-07] r/uberdrivers（聚合站 slug 小写） | 474k | +39k（8.9%） | 2026-10-01 | 自述"zero corporate influence"；同页并列 r/Lyft 67k、r/lyftdrivers 101k、r/uber 104k、r/UberEATS 223k
- [G-08] r/DataAnnotationTech | 62k | +28k（85%） | 2026-10-01 | 规则（摘要）：禁止讨论项目细节、禁止发项目可得性帖、禁止不尊重/垃圾/人身攻击
- [G-09] r/jobs | 2.8M | +410k（16.8%） | 2026-10-02 | 热门含 AI 求职工具
- [G-10] r/KitchenConfidential | 1.9M | +272k（16.9%） | 2026-10-01 | 
- [G-11] r/walmart | 377k | +19k（5.3%） | 2026-09-30 | "current and former Walmart associates"
- [G-12] r/AmazonFlexDrivers | 178k | +33k（22.5%） | 2026-10-01 | 规则：DSP 话题去 r/amazondspdrivers
- [G-13] r/beermoney | 1.6M | +121k（8.4%） | 2026-10-01 | 侧栏"IGNORE UNSOLICITED DMS/CHATS"；"You shouldn't expect to make a living"
- [G-14] r/WorkOnline | 773k | +87k（12.7%） | 2026-09-30 | 
- [G-15] r/slavelabour | 491k | +69k（16.4%） | 2026-10-02 | 自我推销为主；支付 PayPal/礼品卡/加密货币
- [G-16] r/EtsySellers | 257k | +51k（24.6%） | 2026-10-03 | 
- [G-17] r/Flipping | 511k | +72k（16.3%） | 2026-10-01 | 
- [G-18] r/mturk | 90k | +1k（1.5%） | 2026-10-01 | 有 Newbie 置顶、Requester Announcement flair（说明允许需求方发公告，具体规则未读）
- [G-19] r/Upwork | 200k | +65k（48.6%） | 2026-09-30 | "independent, unofficial subreddit"
- [G-20] r/freelance | 701k | +79k（12.7%） | 2026-10-01 | "Violating the rules will cause your post/comment will be removed and you will be banned permanently."
- [G-21] r/retail | 34k | +6k（20.8%） | 2026-10-01 | （注意：r/Retail 大小写在聚合站对应此页，非 r/RetailWorkers 等）
- [G-22] r/InstacartShoppers | 260k | +38k（16.9%） | 2026-10-03 | "Not affiliated with Instacart"
- [G-23] r/Assistance | 446k | +73k（19.5%） | 2026-09-30 | 描述含"financial assistance… advice, support, contest votes, and surveys"
- [G-24] r/Etsy | 322k | +43k（15.5%） | 2026-10-03 | 非官方
- [G-25] r/Construction | 594k | +72k（13.9%） | 2026-10-04 | "construction professionals only"；DIY/业主问题会被删
- [G-26] r/Truckers | 355k | +36k（11.2%） | 2026-10-02 | 
- [G-27] r/immigration | 271k | +43k（18.7%） | 2026-09-30 | 
- [G-28] r/China_irl | 440k | +85k（24.1%） | 2026-10-03 | 中文社区，"NOT a satire/meme sub"
- [G-29] r/outlier_ai | 89k | +36k（67.2%） | 2026-10-01 | flair：Suspended by Outlier / Payments / Confirmed Violation
- [G-30] r/starbucks | 343k | +29k（9.1%） | 2026-09-30 | 
- [G-31] r/AmazonFC | 200k | +45k（29.4%） | 2026-10-02 | 
- [G-32] r/arizona | 368k | +28k（8.1%） | 2026-10-01 | "for residents… not tourist/visitor questions"
- [G-33] r/nursing | 1.1M | +69k（6.4%） | 2026-10-01 | 注册护士为主，非 CNA 专版
- [G-34] r/lyftdrivers | 101k | +16k（18.2%） | 2026-09-30 | 
- [G-35] r/UberEATS | 223k | +29k（14.8%） | 2026-10-02 | "NOT affiliated with Uber Eats"
- [G-36] r/mexico | 3.2M | +110k（3.5%） | 2026-10-01 | 西班牙语；"read the rules"

通用备注（适用 G-01~G-36）：仅摘要；成员数 ≠ 活跃数（本轮无法取得 Reddit 官方的周访客/周贡献者）；聚合站"热门话题"来自抽样帖子，不可当作全量统计。

## A'. Reddit 与研究伦理

### [G-37] Reddit 研究规范与社区对研究的态度（WebSearch 摘要，未读正文）
- 出处：对 Reddit for Researchers Program（support.reddithelp.com）、ACM 系统综述 doi 10.1145/3633070、SAGE（Zapcic 等 2023, doi 10.1177/16094069231162674）的搜索摘要
- URL：https://support.reddithelp.com/hc/en-us/articles/49381918834964-Reddit-for-Researchers-Program ；https://dl.acm.org/doi/pdf/10.1145/3633070 ；https://journals.sagepub.com/doi/full/10.1177/16094069231162674
- Tags：#type/academic #conf/low #region/world #topic/ethics
- Use：10 §A、§E 支撑"先联系版主取得许可再招募""有些子版明确要求研究帖须经版主批准（摘要举例 r/depression、r/SuicideWatch、r/IndianCountry）""官方研究者计划要求 IRB/伦理豁免证明并要求披露身份"
- 备注：**仅摘要**，三页 WebFetch 全 403。"r/depression 等规则"来自摘要转述，我们没有看到这些子版规则原文。

### [G-38] UGA 研究：Caplan 等，用 Reddit 帖子研究贫困
- 出处：University of Georgia 新闻稿，约 2017
- URL：https://news.uga.edu/reddit-discussion
- Tags：#type/academic #conf/med #region/northamerica #topic/poverty
- Use：10 §A 说明"贫困人群在 Reddit 上自我披露"有学术先例：分析 14,000+ 条回答，问题为"What do insanely poor people buy that ordinary people know nothing about?"，帖子存档于 2014 秋至 2015 夏
- 备注：读了新闻稿全文；未读论文。该研究针对的是 r/AskReddit 的一个问题而非 r/povertyfinance（WebFetch 摘要明确说明未研究该子版）。

### [G-39] 苏黎世大学 r/changemyview 未经授权 AI 实验
- 出处：SAN、Slashdot、Winbuzzer 等对 2025-04 事件的报道（WebSearch 摘要）
- URL：https://san.com/cc/university-of-zurichs-unauthorized-ai-experiment-on-reddit-sparks-controversy/
- Tags：#type/news #conf/med #region/world #topic/ethics
- Use：10 §E 反面教材："未披露、未经版主同意"的研究被版主投诉、Reddit 公开谴责并称考虑法律行动
- 备注：仅摘要；不同报道细节（评论数 1,700+、子版 3.8M 成员）并列未核对。

### [G-40] Reddit 开发者/数据条款（商业使用、AI 训练限制）
- 出处：对 support.reddithelp.com、ppc.land、redditapis.com 等页的搜索摘要
- URL：https://support.reddithelp.com/hc/en-us/articles/14945211791892-Developer-Platform-Accessing-Reddit-Data
- Tags：#type/aggregator #conf/low #region/world #topic/data-compliance
- Use：10 §A/§E 支撑"商业用途与用 Reddit 内容训练模型须先获 Reddit 书面许可，所以我们不抓取"
- 备注：仅摘要，官方页 403；条款会变，行动前需重读。

### [G-44] r/povertyfinance 社区基金项目
- 出处：Reddit for Community 博客（WebFetch 摘要）
- URL：https://redditforcommunity.com/blog/community-stories/community-funds-poverty-finance
- Tags：#type/company #conf/med #region/northamerica #topic/poverty
- Use：10 §A 说明该子版版主有组织能力（在 100 万订阅时派发 500 个 Costco 会员，跨美/加/英），版主通过标记优质贡献者招募新版主
- 备注：只读摘要；无日期。

## B. 美国组织

### [G-41] LUCHA 官网（Living United for Change in Arizona）
- 出处：LUCHA，访问日期 2026-10-04（已读首页摘要）
- URL：https://www.luchaaz.org/
- Tags：#type/ngo #conf/med #region/northamerica #topic/labor #topic/immigrant
- Use：10 §B 凤凰城社区组织：会员制社区组织，聚焦移民权利、经济正义、民主参与；项目含 Liberation Academy、LUCHA Blue、Barrio Dinners、DACA 与移民服务；可通过 orientation、志愿者、会员加入
- 备注：自我描述；未核实会员规模。

### [G-42] Rideshare Drivers United 官网
- 出处：RDU 官网（WebFetch 摘要）
- URL：https://www.drivers-united.org/
- Tags：#type/ngo #conf/med #region/northamerica #topic/gig
- Use：10 §B"网站称 20,000+ 会员"，司机主导、加州为主（LA/SF/SD）、做工资盗窃诉讼、仲裁退出工具、司机薪酬研究
- 备注：成员数为组织自称。

### [G-43] Los Deliveristas Unidos（LDU）
- 出处：搜索摘要（Palabra/NAHJ、In These Times、Civil Eats、Worker's Lab 等）
- URL：https://www.palabranahj.org/archive/the-ongoing-battles-of-deliveristas-mbhkt
- Tags：#type/news #conf/low #region/northamerica #topic/gig #topic/immigrant
- Use：10 §B"超过 4,000 会员，主要为危地马拉与墨西哥裔外卖工，不少无合法身份、英语有限"；已推动 NYC 6 项法案（含卫生间、小费透明、最低薪酬）
- 备注：仅摘要，会员数日期不明。

### [G-45] 访问失败与未验证清单
- Chispa AZ、Working Washington、Gig Workers Rising、azfoodbanks.org、AZ 211、Maricopa Community Colleges、Phoenix Public Library、Buy Nothing：WebFetch/WebSearch 因额度触顶**未取得内容**（Working Washington 官网仅返回 301 重定向）。
- Tags：#type/primary-text #conf/low
- Use：10 §B/§D 里这些条目全部标"未核验"。

## C/D. 中国部分、线下机构
- **本轮无检索来源**。10 号文件 §C、§D 的所有平台特征与法规提示来自写作者既有知识，标 #conf/low，必须在下一轮用额度重新核验后再引用。

### [G-46] 法规背景（来自记忆，未取得原文）
- 内容：《个人信息保护法》2021-11-01 施行；《数据安全法》2021-09-01 施行；《网络数据安全管理条例》2025-01-01 施行
- Tags：#type/official #conf/low #region/china #topic/data-compliance
- Use：10 §E 中国合规提示
- 备注：未读原文，日期凭记忆，使用前须核对 flk.npc.gov.cn。
