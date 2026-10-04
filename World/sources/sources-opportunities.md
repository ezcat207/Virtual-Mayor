# 机会研究来源清单（对应 07-ai-income-opportunities.md，编号 [O-xx]）

说明：本轮 WebSearch 未触及额度上限。能下载的开放 PDF 已存入 `World/pdfs/`（前缀 O_）并用 pdftotext 核对摘要/关键数字；其余多数条目只读到搜索摘要或 WebFetch 的二次摘要，一律标 med/low 并写明"仅摘要"。数字口径冲突并列。访问日期均为 2026-10。
WebFetch 失败记录：Axios（403）、OpenAI×Digital Green 页面（403）、中国经济网 AI 培训文章（504）、FTC Click Profit 旧链接（404，改用搜索摘要）。

---
## A. AI 数据工作（公平薪酬 / 对照组）

### [O-01] The Indian Startup Making AI Fairer—While Helping the Poor
- 出处：TIME，2023；访问 2026-10
- URL：https://time.com/6297403/the-workers-behind-ai-rarely-see-its-rewards-this-indian-startup-wants-to-fix-that/
- Tags：#type/news #conf/med #region/world #topic/data-labeling #topic/coop
- Use：07 §2.1 支撑"Karya 约 $5/小时（约印度最低工资 20 倍）、个人年收入上限 $1,500、约 3 万农村工人、累计工资约 6,500 万卢比（近 $80 万）、约 4,000 人从数据转售拿到合计 $11.6 万版税、扩张瓶颈是'可用工作量'而非工人"
- 备注：WebFetch 二次摘要（读到正文要点，未逐字核对）；数字是 2023 年时点。示例：一名工人约 6 小时 + 50% 质量奖金得 2,570 卢比（$31.3）。

### [O-02] Workers in rural India are receiving 20 times their minimum wage: Karya（及 impact.karya.in 搜索摘要）
- 出处：Forbes India / Karya 官网，日期不详；访问 2026-10
- URL：https://www.forbesindia.com/article/storyboard18/workers-in-rural-india-are-receiving-20-times-their-minimum-wage-karya/90003/1 ；https://impact.karya.in/
- Tags：#type/news #type/company #conf/low #region/world #topic/data-labeling
- Use：07 §2.1 支撑"Karya 工人 >60% 女性、60% 以上此前没工作过、需低于贫困线、200+ 本地 NGO 合作伙伴、自称是'补充收入'；官网自述 13 万+ 工人、数据合同收入 81% 付为工资、平均 ₹350/小时（$4.40）"
- 备注：官网数字为公司自述且搜索摘要来源。与 [O-01] 的 $5/小时并列（不同年份/口径）。无独立审计。

### [O-03] OpenAI Used Kenyan Workers on Less Than $2 Per Hour
- 出处：TIME，2023-01；访问 2026-10
- URL：https://time.com/6247678/openai-chatgpt-kenya-workers/
- Tags：#type/news #conf/med #region/world #topic/data-labeling #topic/labor
- Use：07 §2.2 支撑"Sama 肯尼亚标注员税后约 $1.32–2/小时；合同里 OpenAI 付 Sama $12.50/小时，是工人到手的 6–9 倍"
- 备注：仅搜索摘要。Sama 对此有回应与改革（见 [O-06]）。

### [O-04] Kenya 拟出台 AI 数据工作者保护政策
- 出处：WeeTracker 2026-07-24；Business Daily Africa；ITWeb
- URL：https://weetracker.com/2026/07/24/kenya-ai-minimum-pay-mental-healthcare-workers/ ；https://www.businessdailyafrica.com/bd/corporate/technology/ai-giants-face-new-minimum-pay-mental-healthcare-rule-in-kenya-5536272
- Tags：#type/news #conf/med #region/world #topic/data-labeling #topic/policy
- Use：07 §2.2 支撑"肯尼亚 AI 数据工 $1.46–3.74/小时，对比美国审核员 $21–27；草案要求薪酬参照国际水平披露、心理健康支持；征求意见截止 2026-08-04"
- 备注：WebFetch 摘要，草案阶段，未生效。

### [O-05] Mapping Data Labour Supply Chain in Africa in an Era of Digital Apartheid
- 出处：arXiv:2512.04269 v2，2026-05-11；访问 2026-10
- URL：https://arxiv.org/pdf/2512.04269
- 本地副本：pdfs/O_arxiv_data_labour_africa_2512.04269.pdf
- Tags：#type/academic #conf/med #region/world #topic/data-labeling #topic/labor
- Use：07 §2.2 支撑"81 名受访数据工作者中 83% 受访时失业；雇主以 Sama(48)、Meta 相关(15)、Majorel(14)、CloudFactory(7) 为主"；搜索摘要另称 72.4% 月收入 ≤$500、多数 $251–500
- 备注：读了 PDF 第 5 节开头；样本小（n=81，自述需谨慎）；"72.4%"仅来自搜索摘要，未在 PDF 文本中核到，**待核**。

### [O-06] Sama：影响力主张与独立评估
- 出处：Sama 官网自述；J-PAL/IPA/MIT（Atkin）评估；Springer "The poverty of ethical AI"
- URL：https://www.sama.com/blog/building-an-ethical-supply-chain ；https://www.povertyactionlab.org/evaluation/impact-tech-training-and-job-referrals-youth-kenya ；https://link.springer.com/article/10.1007/s00146-023-01824-9
- Tags：#type/company #type/academic #conf/low #region/world #topic/data-labeling
- Use：07 §2.2 支撑"Sama 自称加入后收入平均 3.6 倍、月薪为法定最低工资 2.5 倍；J-PAL 评估称培训+岗位推荐使收入 +37%、失业率 -10 个百分点；批评者指出最低工资≠生活工资（内罗毕家庭生活成本约 $394/月 vs 最低工资约 $119）"
- 备注：仅搜索摘要；评估针对 Sama 的培训+就业项目整体，并非 AI 标注本身；公司数字未审计。

### [O-07] CloudFactory：影响与薪酬
- 出处：S4YE 案例研究（World Bank）；Glassdoor；[O-05]
- URL：https://www.s4ye.org/sites/default/files/S4YE%20Digital%20Jobs%20Case%20Study%20-%204.%20CloudFactory.pdf （下载得到 HTML 拦截页，未存）
- Tags：#type/ngo #conf/low #region/world #topic/data-labeling
- Use：07 §2.2 支撑"CloudFactory 2015 年新雇 1,021 人、总 2,800 人；案例研究称受益青年毕业后月均 $240；调研中肯尼亚 CloudFactory 受访者有收入 <$250/月"
- 备注：仅搜索摘要，年份早；low。

### [O-08] Scale AI / Outlier / Remotasks 薪酬与争议
- 出处：CBS News 60 Minutes；Inc.；Washington Post（2023，经摘要）；ProGigFinder 等聚合站
- URL：https://www.cbsnews.com/news/ai-work-kenya-exploitation-60-minutes/ ；https://www.inc.com/sam-blum/its-a-scam-accusations-of-mass-non-payment-grow-against-scale-ais-subsidiary-outlier-ai.html
- Tags：#type/news #type/aggregator #conf/med #region/world #topic/data-labeling #topic/gig
- Use：07 §2.2 支撑"Outlier 宣称 $15–50/小时；Remotasks 入门 $3–15；肯尼亚 Remotasks 2022 年底降到 $1–3/小时而美国 $15–25；华盛顿邮报采访 36 名工人、34 人称付款被延迟/削减/取消；按国别差别定价（葡萄牙语：葡萄牙 $8.20 vs 巴西 $3.97）"
- 备注：仅搜索摘要；时薪区间部分来自聚合站（low），争议事实来自新闻（med）。

### [O-09] Mercor 等 AI 训练专家平台的诉讼
- 出处：Bloomberg Law；Law360；IC Legal News 2026-06-09
- URL：https://news.bloomberglaw.com/daily-labor-report/ai-data-trainers-suits-open-new-misclassification-fight-frontier ；https://www.independentcontractorcompliance.com/2026/06/09/artificial-intelligence-firms-continue-to-be-targeted-for-independent-contractor-misclassification-claims-may-2026-ic-legal-news-update/
- Tags：#type/news #conf/med #region/northamerica #topic/data-labeling #topic/gig
- Use：07 §2.2 支撑"Mercor 平均约 $85/小时、最高 $200（聚合）；2025-10 加州与 2026 年德州集体诉讼指控约 3 万名专家被错分为独立承包人、被监控软件追踪、未付准备时间；2026-03 供应链泄露引发多起诉讼"
- 备注：指控≠判决；仅摘要。

### [O-10] Appen / CrowdGen 薪酬区间
- 出处：aitraining.jobs、Glassdoor、remowork.life 等聚合站
- URL：https://aitraining.jobs/platforms/appen ；https://www.glassdoor.com/Hourly-Pay/Appen-Search-Engine-Evaluator-Hourly-Pay-E667913_D_KO6,29.htm
- Tags：#type/aggregator #conf/low #region/world #topic/data-labeling
- Use：07 §2.2 支撑"微任务 $2.5–14/小时、评估员 $20–40、多语种 $7–25；低资源语言有 2–3 倍溢价；薪酬略高于当地最低工资"
- 备注：聚合站/用户自报，无官方来源；仅作量级参考。

### [O-11] Uber AI Solutions "digital tasks"
- 出处：Axios 2025-10-20（403 未读正文）；PYMNTS；Computerworld（印度试点 2025-09-08，WebFetch 读到）；Bloomberg 2025-10-16
- URL：https://www.pymnts.com/artificial-intelligence-2/2025/uber-lets-us-drivers-earn-extra-income-with-ai-data-labeling-tasks/ ；https://www.computerworld.com/article/4052881/uber-turns-drivers-into-ai-data-labelers-in-india-pilot.html
- Tags：#type/news #conf/med #region/world #region/northamerica #topic/data-labeling #topic/gig
- Use：07 §2.2/§3 支撑"2025-09 印度 12 个城市试点（图像分类、文本、音频转录、票据数字化）；2025-10 美国部分司机可做上传菜单、录多语种音频等短任务，固定价、24 小时内到账"
- 备注：未找到单任务价格或司机实际时薪。这是'平台把 AI 数据工作塞给已有零工'的重要信号，也是竞争者。

### [O-12] 国家四部委《关于促进数据标注产业高质量发展的实施意见》及相关
- 出处：国家发改委/国家数据局/财政部/人社部，2025-01；武汉市数据局转载；知乎/本地宝（低）
- URL：https://home.wuhan.gov.cn/zcfg/202501/t20250113_2517180.shtml ；http://gz.bendibao.com/peixun/2026528/peixun368597.shtml
- Tags：#type/official #type/aggregator #conf/med #region/china #topic/data-labeling #topic/policy
- Use：07 §2.3 支撑"目标 2027 年行业年复合增速 >20%；7 个国家级数据标注基地试点（大同已培训约 2 万人）；AI 训练师是正式职业，三级证书补贴 3,120 元（聚合站，low）"
- 备注：补贴数字来自本地宝，需向人社部门核实；"标注突围行动"为聚合站转述（low）。与 [C-08][C-10] 互补。

### [O-13] 中国县域数据标注工资与转包（媒体）
- 出处：腾讯新闻《县城里的数据标注员》2025-01；甲子光年；猎聘/职友集（聚合）
- URL：https://news.qq.com/rain/a/20250102A09TUP00 ；https://www.jazzyear.com/article_info.html?id=1048
- Tags：#type/news #type/aggregator #conf/low #region/china #topic/data-labeling
- Use：07 §2.3 支撑"云南蒙自个案：计件约 120 元/天，月入三千出头，扣抽成后税后可能不到 2,500；转包链条采购价从月 6,710→5,677→4,817 元；RLHF 类高阶标注时薪 80–200 元（聚合，low）"
- 备注：仅搜索摘要；个案；与 [C-11][C-12] 一致但不独立。

## B. 微型创业者 / 农业 / 电商 AI 工具

### [O-14] The Uneven Impact of Generative AI on Entrepreneurial Performance
- 出处：Otis, Clarke, Delecourt, Holtz, Koning（Berkeley Haas/HBS），工作论文；访问 2026-10
- URL：https://www.nicholasotis.com/Res/Otis_et_al_2023_UnevenImpactOfAI.pdf （另见 ictworks 镜像）
- 本地副本：pdfs/O_otis_kenya_uneven_ai.pdf
- Tags：#type/academic #conf/high #region/world #topic/micro-entrepreneur #topic/ai-use
- Use：07 §2.4 支撑"640 名肯尼亚创业者 RCT；GPT-4 WhatsApp 导师；总体无显著效应；高绩效者约 +15%、低绩效者约 -8%；低绩效者去问更难的任务"
- 备注：读了摘要；工作论文，未同行评议；样本是肯尼亚小企业主，外推中国/美国需谨慎。

### [O-15] Generative AI at Work
- 出处：Brynjolfsson, Li, Raymond，QJE 140(2)；arXiv 2304.11771；访问 2026-10
- URL：https://arxiv.org/pdf/2304.11771
- 本地副本：pdfs/O_brynjolfsson_genai_at_work.pdf
- Tags：#type/academic #conf/high #region/northamerica #topic/ai-use #topic/labor
- Use：07 §2.4/§3 支撑"5,172 名客服：平均生产率 +15%；新手/低技能 +34%（最低技能五分位 +36%），资深者几乎无变化"
- 备注：已核 PDF 摘要。对象是一家公司的客服，不是低收入创业者。

### [O-16] Still Waters, Rapid Currents（原名 Large Language Models, Small Labor Market Effects）
- 出处：Humlum & Vestergaard，NBER WP 33777（2025-05，2026-03 修订）
- URL：https://www.nber.org/papers/w33777
- 本地副本：pdfs/O_humlum_nber_w33777.pdf
- Tags：#type/academic #conf/high #region/world #topic/ai-use #topic/income
- Use：07 §1 支撑"丹麦 11 个高暴露职业：聊天机器人对工资与工时的效应是精确的零（修订版排除 >2% 的效应；旧版 >1%）；改变的是任务结构"
- 备注：已核修订版摘要；NBER 工作论文，未同行评议；丹麦高收入国家。

### [O-17] Digital Green Farmer.Chat
- 出处：Digital Green、FAO STI、SAS-P；OpenAI 页面（403）
- URL：https://digitalgreen.org/ ；https://sti-portal.fao.org/innovations/farmerchat
- Tags：#type/ngo #conf/low #region/world #topic/agriculture #topic/ai-use
- Use：07 §2.4 支撑"Farmer.Chat 自述：250,000+ 农户与推广员；'17% 收入提升'（项目自述，口径未见）；推广成本从 $35/农户降到 $0.35（早期估计）"
- 备注：仅搜索摘要；"17%"无独立评估；4.1 百万与 15 万/25 万用户口径并存，**不一致，未调和**。

### [O-18] Apollo Agriculture
- 出处：GSMA；Africanist；BII 投资页
- URL：https://www.gsma.com/solutions-and-impact/connectivity-for-good/mobile-for-development/programme/agritech/ai-driven-smallholder-farmer-lending-in-africa-insights-from-apollo-agriculture/
- Tags：#type/ngo #type/company #conf/low #region/world #topic/agriculture
- Use：07 §2.4 支撑"2021 年对比：使用者玉米单产约 3.5 吨/公顷 vs 非使用者约 2.0；43% 客户日收入 <$3.2；AI 用于信贷评分"
- 备注：公司主导的非随机对比，选择偏差严重；仅摘要。未找到 RCT。

### [O-19] Farmerline / Darli AI
- 出处：PACT 2025-06；WEF；Farmerline
- URL：https://africanpact.org/2025/06/12/the-new-face-of-african-agriculture/
- Tags：#type/ngo #conf/low #region/world #topic/agriculture
- Use：07 §2.4 支撑"培训项目调查：57% 农户应用所学、56% 称产量提高、至少 10% 称收入增加；覆盖 220 万农户（自述）"
- 备注：自报问卷、无对照组；仅摘要。

### [O-20] Meta Business AI on WhatsApp
- 出处：Meta Newsroom 2026-05（印度）、2026-06 全球上线；Yahoo Finance、Dataconomy
- URL：https://about.fb.com/news/2026/05/introducing-business-ai-on-whatsapp-for-small-businesses-in-india/
- Tags：#type/company #conf/med #region/world #topic/micro-entrepreneur #topic/ai-use
- Use：07 §2.4 支撑"印度/墨西哥/巴西试点后全球上线；试点累计超百万企业；单个商家自述销量 +40%"
- 备注：仅摘要；商家案例为 Meta 营销素材；对低收入小店的净收益无独立证据。意味着通用 AI 客服已被平台免费化。

### [O-21] 淘宝/天猫 AI 商家工具与"生意参谋全免"
- 出处：雷锋网；中新社；新浪等
- URL：https://www.leiphone.com/category/industrynews/I046be6vYTGCW56f.html ；http://www.sh.chinanews.com.cn/chanjing/2025-05-15/135812.shtml
- Tags：#type/news #conf/low #region/china #topic/micro-entrepreneur #topic/ai-use
- Use：07 §2.4 支撑"标题称超 300 万中小商家受益（WebFetch 摘要曾写成 '300+ million'，**以标题 300 万为准，存疑**）；'平均销量 +30%（引清华研究）'、618 期间 370,000 商家首日增长 100%（平台自述）；2025 年 618 称 2 亿商家使用 AI 工具、300 亿次调用（口径存疑）"
- 备注：平台自述；"2 亿商家"不合常理（淘宝活跃商家远少于此），可能含调用对象口径，**不要引用为商家数**。

### [O-22] 拼多多"多多农研""农地云拼"
- 出处：新华网 2025-05-09；中国农大新闻；软盟资讯
- URL：http://www.news.cn/tech/20250509/b5709eb5cb5040c28ea8d98bacc47d3b/c.html
- Tags：#type/news #type/company #conf/low #region/china #topic/agriculture #topic/ai-use
- Use：07 §2.4 支撑"2025-04 宣布三年投入逾 10 亿元（'千亿扶持'体系下）；云南草莓 AI 组降本（肥料 -2,500 元/亩、植保 -1,000 元/亩）、产量 +30%（比赛队伍自述）；'价格波动降低 28%'、'蓝莓年收入 8 万元'（软盟转述，low）"
- 备注：仅摘要；比赛/示范项目≠普通农户平均结果；未找到第三方评估。

### [O-23] 丽水本地：cities/lishui/ai-demand.md（仓库内部文件）
- 出处：本仓库 `cities/lishui/ai-demand.md`（2026-10-03），其内引用均为二手
- Tags：#type/aggregator #conf/med #region/china #topic/local
- Use：07 §5 支撑丽水产业、华侨（青田约 38 万华侨）、莲都 AI+跨境 OPC 基地、无人车数据运营基地、百度智能云基础数据产业基地（500+ 人）、云和共富工坊（20 余款产品年销 1,600 万）、AI 创新券、财政紧约束
- 备注：内部文件已标注多处"摘要/待核"，本文继承其置信度（med-low）；单价为推测。

### [O-24] 凤凰城本地：cities/phoenix/ai-demand.md（仓库内部文件）
- 出处：本仓库 `cities/phoenix/ai-demand.md`（2026-10-03）
- Tags：#type/aggregator #conf/med #region/northamerica #topic/local
- Use：07 §5 支撑 Arizona 小企业 706,640 家、Chandler 亚裔占比约 11.7%、AI 入门培训过剩/实施稀缺、Chinese Chamber 渠道
- 备注：同上，继承其置信度。

## C. 技能转收入与教育

### [O-25] WorkAdvance 7 年随访（含 Per Scholas）
- 出处：MDRC（Kanengiser & Schaberg），2022-03；Arnold Ventures 页面（早期随访）
- URL：https://www.mdrc.org/sites/default/files/WorkAdvance_7-Year_Report.pdf ；https://www.arnoldventures.org/stories/long-term-follow-up-of-the-workadvance-study-evaluating-the-effectiveness-of-four-different-sector-focused-workforce-development-programs-for-unemployed-and-low-wage-working-adults
- 本地副本：pdfs/O_mdrc_workadvance_7yr.pdf
- Tags：#type/academic #conf/high #region/northamerica #topic/workforce
- Use：07 §3 支撑"RCT：Per Scholas 站点第 7 年平均收入 +14%（MDRC 报告），其余 3 个站点无显著效应；另一较早随访（2018，Arnold Ventures/Straight Talk）称 +$6,281（+20%）"
- 备注：已核 PDF 摘要要点。**+14%（7 年）与 +20%（约 6 年）并列，口径/年份不同**。这些项目训练的是 IT 技能，不是 AI 副业。

### [O-26] Per Scholas Phoenix 年度/学校目录
- 出处：Per Scholas 2024 Annual Report；azfamily 2025-09-29
- URL：https://perscholas.org/2024-annual-report/ ；https://perscholas.org/locations/phoenix/
- Tags：#type/ngo #conf/low #region/northamerica #topic/workforce
- Use：07 §5.2 支撑"凤凰城站 2023 年招 117 人、85% 毕业、毕业生首份工作平均 $23+/小时（机构自报）；训练前平均年收入约 $10,000→$42,000（自报）"
- 备注：机构自报，仅搜索摘要。

### [O-27] Tutor CoPilot
- 出处：Wang et al.，EdWorkingPaper 24-1054（Stanford）
- URL：https://edworkingpapers.com/sites/default/files/ai24_1054_v2.pdf
- 本地副本：pdfs/O_tutor_copilot_ednwp.pdf
- Tags：#type/academic #conf/high #region/northamerica #topic/education #topic/ai-use
- Use：07 §3/§2.5 支撑"RCT：900 名辅导员、1,800 名学生；学生掌握率 +4 个百分点，较低评分辅导员 +9；成本约 $20/辅导员/年"
- 备注：已核 PDF 摘要；结果是学习而非辅导员收入。

### [O-28] Rori AI 数学辅导（加纳）
- 出处：Henkel et al.，arXiv 2402.09809（Oxford/Rising Academies/J-PAL NA）
- URL：https://arxiv.org/pdf/2402.09809
- 本地副本：pdfs/O_rori_ghana_2402.09809.pdf
- Tags：#type/academic #conf/med #region/world #topic/education
- Use：07 §2.5 支撑"初步评估：效应量 0.36（约一年学习）、边际成本约 $5/学生"
- 备注：已核摘要：约 500 名学生、一年的初步评估；搜索摘要称 637 名/11 校，**样本数不一致**。结果为学习，不是收入。

### [O-29] Upwork 自由职业者与 AI 技能
- 出处：Upwork 2026 In-Demand Skills / Future Workforce Index（搜索摘要，经 toolnav、investors.upwork.com）
- URL：https://investors.upwork.com/news-releases/news-release-details/upworks-future-workforce-index-2026-how-ai-redefining-value-work
- Tags：#type/company #conf/med #region/world #topic/gig #topic/ai-use
- Use：07 §3 支撑"AI 相关技能 2025 年同比 +109%；做 AI 工作的自由职业者每小时多赚 34%（平台自述，未控制选择）；AI 数据标注 +154%；生成式 AI 创意类合同数 +90% 但单合同收入 -13%"
- 备注：仅摘要；平台利益相关；34% 非因果。

### [O-30] Fiverr 受 AI 冲击
- 出处：Calcalist 2026；Self Employed；Haaretz 2026-02
- URL：https://www.selfemployed.com/news/fiverr-q2-2026-earnings-ai-freelance/ ；https://www.calcalistech.com/ctechnews/article/ryiwuedhml
- Tags：#type/news #conf/med #region/world #topic/gig #topic/ai-exposure
- Use：07 §3 支撑"Fiverr 活跃买家降 21.9% 至 270 万；2026 全年收入指引 $3.56–3.72 亿（较 2025 降 14–17%）；基础文案/简单设计/初级编程需求萎缩；写作、翻译类降 22–32%（含来源不明的聚合数字，low）"
- 备注：公司数字 med；类别百分比来自聚合站 low。

## D. 合作社 / 数据授权

### [O-31] The Blown Head Gasket Effect: The Drivers Cooperative NYC
- 出处：Internet Policy Review
- URL：https://policyreview.info/articles/analysis/drivers-cooperative-new-york-city
- Tags：#type/academic #conf/med #region/northamerica #topic/coop #topic/gig
- Use：07 §2.6 支撑"2022 营收约 $610 万、约 16.5 万单、9,000+ 司机入社（部分为'将入社'）；平台开发 2022 年花 $60 万；工程月成本近 $5 万，与付完司机后的收入相当；到 2024 全职司机不足 50；收入较 2022 降约 60%；最终放弃自研 App"
- 备注：WebFetch 摘要。另一搜索摘要写 2022 营收 $590 万、162,294 单，**并列：$5.9M vs $6.1M**。"成员比 Uber/Lyft 每单多赚 8–10%"为合作社自述。

### [O-32] Up&Go
- 出处：CoLab Cooperative；Barclays 2017；platform.coop 目录
- URL：https://colab.coop/work/upandgo/ ；https://www.upandgo.coop/cms/press
- Tags：#type/company #conf/low #region/northamerica #topic/coop
- Use：07 §2.6 支撑"工人合作社清洁平台：工人拿走每单约 95%、自述约 $21/小时；纽约起步，扩到费城"
- 备注：自述、仅摘要；未找到工人年收入或规模。

### [O-33] Stocksy United
- 出处：Wikipedia；Start.coop 案例；PetaPixel
- URL：https://en.wikipedia.org/wiki/Stocksy_United ；https://www.start.coop/case-studies/stocksy
- Tags：#type/aggregator #conf/med #region/world #topic/coop #topic/creator-licensing
- Use：07 §2.6 支撑"艺术家持股合作社：标准授权 50%、扩展授权 75% 分成+年终分红；2015 年付成员分红 $20 万、版税 $430 万；累计付艺术家超 $5,000 万"
- 备注：二手；与 AI 无关，是'创作者分成'的参照物。

### [O-34] Shutterstock Contributor Fund（AI 授权分成）
- 出处：PetaPixel 2023-07-12；Shutterstock 帮助页
- URL：https://petapixel.com/2023/07/12/shutterstock-may-have-paid-out-over-4-million-from-its-ai-contributor-fund/
- Tags：#type/news #conf/med #region/world #topic/creator-licensing
- Use：07 §2.7 支撑"首轮约 $424 万（摄影师 Kneschke 基于调查的估算）；每图平均约 $0.0078；约 20% 平均企业版税率"
- 备注：估算基于自愿调查；仅摘要。

### [O-35] Created by Humans / Authors Guild FAQ
- 出处：Authors Guild；NPR 2025-01-17
- URL：https://authorsguild.org/advocacy/artificial-intelligence/created-by-humans-ai-licensing-faq/
- Tags：#type/ngo #conf/med #region/northamerica #topic/creator-licensing
- Use：07 §2.7 支撑"作者拿授权收入扣除 CBH 20% 手续费后全部"
- 备注：只是分成规则；未找到实际已付金额。

### [O-36] Cloudflare 收购 Human Native；Pay Per Crawl
- 出处：CNBC 2026-01-15；TechCrunch 2026-07-01；Leaky Paywall
- URL：https://www.cnbc.com/2026/01/15/cloudflare-ai-human-native-acquisition.html ；https://techcrunch.com/2026/07/01/cloudflares-new-policy-pushes-ai-companies-to-pay-for-publishers-content/
- Tags：#type/news #conf/med #region/world #topic/creator-licensing
- Use：07 §2.7 支撑"Human Native 提供版权方上传、收入分成/订阅/按次付费；2026-01 被 Cloudflare 收购；Pay Per Crawl 最低 $0.001/次；高流量站点月入 $5–20 万，小站'只能接受很低价格'，只有两个具名合作伙伴"
- 备注：仅摘要。结论：对低收入创作者的实际收入证据几乎没有。

### [O-37] Reddit / Stack Overflow 数据授权：贡献者未获分成
- 出处：多篇新闻综述（mpost、HN、TechRadar 等）
- URL：https://mpost.io/stack-overflow-joins-reddit-in-charging-tech-giants-for-ai-training-data/
- Tags：#type/news #conf/low #region/northamerica #topic/creator-licensing
- Use：07 §2.7 支撑"Reddit 与 Google/OpenAI 的授权据报约 $6,000 万/$7,000 万每年，贡献者无直接分成"
- 备注：仅搜索摘要，金额为媒体报道。

## E. 骗局与监管

### [O-38] FTC：Click Profit
- 出处：FTC 新闻稿 2025-03；2025-08 和解/永久禁令
- URL：https://www.ftc.gov/news-events/news/press-releases/2025/03/ftc-acts-stop-click-profit-online-business-opportunity-has-cost-consumers-least-14-million ；https://www.ftc.gov/news-events/news/press-releases/2025/08/ftc-case-against-e-commerce-business-opportunity-scheme-its-operators-results-permanent-ban-industry
- Tags：#type/official #conf/med #region/northamerica #topic/scam
- Use：07 §6 支撑"以'AI 驱动'电商店铺，收客户至少 $45,000–75,000；FTC 称至少 $1,400 万；约 14% 的店铺零销售、约 1/3 终生销售 <$5,000，扣费后约 21% 零收入、店铺终生销售中位数约 $7,200；和解金额合计超 $2,000 万"
- 备注：数字来自搜索摘要对新闻稿的转述，未读新闻稿全文（旧链接 404）。

### [O-39] FTC：Ecommerce Empire Builders、Air AI、Operation AI Comply
- 出处：FTC；Mondaq；Benesch；CNBC 2025-03-18
- URL：https://www.mondaq.com/unitedstates/advertising-marketing-branding/1660472/ftc-shuts-down-ai-driven-business-opportunity-scheme-continues-sweep-of-deceptive-income-claims ；https://www.cnbc.com/2025/03/18/ftc-amazon-ai-scammers-defrauded-users-with-passive-income-scheme.html
- Tags：#type/official #type/news #conf/med #region/northamerica #topic/scam
- Use：07 §6 支撑"EEB 培训近 $2,000/店铺'代建'数万美元，2025-05 同意禁令；FTC 起诉 Air AI 夸大'小企业几天赚数万美元'；FTC 'Operation AI Comply' 持续执法"
- 备注：仅摘要。

### [O-40] 中国"AI 副业/AI 培训"割韭菜风险提示
- 出处：中国经济网 2024-12-16；咸宁市社会信用平台风险提示 2024-12-23；国家大学生就业服务平台（ncss.cn）2024-10-31；36氪
- URL：http://tech.ce.cn/yw/202412/16/t20241216_39235757.shtml ；http://credit.xianning.gov.cn/fxts/202412/t20241223_3850913.shtml ；https://www.ncss.cn/ncss/jydt/jy/202410/20241031/2293346490.html
- Tags：#type/news #type/official #conf/low #region/china #topic/scam
- Use：07 §6 支撑"常见套路：9.9 元引流—万元课程；变现截图无法证实；卖课才是主营；退款难（收款主体与运营主体不同、'虚拟商品不退'）；刷单、代理加盟、网贷"
- 备注：仅搜索摘要（正文 504/未读）；缺受害人数/金额的官方统计，不要把它当量化证据。

## F. 资金来源

### [O-41] OpenAI People-First AI Fund；Google.org AI Opportunity Fund
- 出处：OpenAI；OpenAI Foundation 更新；Google 2025-03 更新
- URL：https://openai.com/index/people-first-ai-fund/ ；https://openaifoundation.org/news/update-on-the-people-first-ai-fund ；https://blog.google/company-news/outreach-and-initiatives/google-org/ai-opportunity-fund-march-2025-update/
- Tags：#type/company #conf/med #region/northamerica #topic/funding
- Use：07 §7 支撑"People-First：$5,000 万计划、向 208 家非营利发放 $4,050 万无限制资金（仅限美国 501(c)(3)）；Google.org AI Opportunity Fund 已投入 $7,500 万、目标培训 100 万美国人"
- 备注：仅摘要；对营利性创业公司不适用，须以非营利/联合体身份申请。其他国别'AI for Good 微资助'未逐一核实。
