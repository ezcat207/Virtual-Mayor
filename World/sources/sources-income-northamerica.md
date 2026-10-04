# 北美低收入人群收入来源：来源清单（对应 06-income-sources-northamerica.md，编号 [IN-xx]）

说明：
- 本轮 WebSearch 未触及配额上限；WebFetch 对 EPI、Forbes、Upwork、SSA、Gridwise 全文等站点返回 403/404，因此这些来源只能依靠搜索摘要，一律标 med/low 并写"仅摘要"。
- 读过正文（PDF 经 pdftotext 或页面全文）才标 high。访问日期均为 2026-10。
- 与前稿的交叉引用：[N-xx] 见 sources/sources-northamerica.md；[W-xx] 见 sources/sources-world.md。

### [IN-01] Economic Well-Being of U.S. Households in 2024（SHED 2024）
- 出处：Federal Reserve Board，2025-05（调查 2024-10）；访问 2026-10
- URL：https://www.federalreserve.gov/publications/files/2024-report-economic-well-being-us-households-202505.pdf
- 本地副本：pdfs/IN_fed_shed_2024.pdf
- Tags：#type/official #conf/high #region/northamerica #topic/income #topic/gig #topic/savings
- Use：06 §1、§3、§4(c)(f)：收入来源构成（labor 66%、Social Security 27%、SSI/TANF 6%）；$400 应急 63%；零工 20%（卖东西 13%、短期任务 9%、平台 4%）；零工 96% 每周<35 小时、70%<5 小时、21% 视为主业；收入波动 29%（零工 41% vs 26%）；<$25k 家庭 3 个月储蓄 24%、账单未全付 34%、缺食 19%、放弃医疗 41%、unbanked 22%
- 备注：读 pdftotext 表格与正文。SHED 是网络问卷（Ipsos KnowledgePanel），收入为区间自报；报告自述收入<$50k 的比例低于 CPS。2024 版修改了"短期任务"题，与往年不严格可比。

### [IN-02] Economic Well-Being of U.S. Households in 2025（SHED 2025）
- 出处：Federal Reserve Board，2026-05-13（调查 2025-10，约 13,000 人）；访问 2026-10
- URL：https://www.federalreserve.gov/publications/files/2025-report-economic-well-being-us-households-202605.pdf ；摘要页 https://www.federalreserve.gov/publications/2026-economic-well-being-of-us-households-in-2025-executive-summary.htm
- 本地副本：pdfs/IN_fed_shed_2025.pdf
- Tags：#type/official #conf/high #region/northamerica #topic/income #topic/savings
- Use：06 §1、§3：doing okay 73%（<$25k 为 45%，较 2024 -4pp）；$400 现金 63%；3 个月储蓄 55%（<$25k 21%）；账单未全付 16%（<$25k 34%；Black 32%、Hispanic 25%）；<$25k 放弃医疗 38%、缺食 21%；<$25k 77% 有银行账户；labor 68%、Social Security 27%、SSI/TANF/福利 5%、失业金 3%；<$25k 仅 19% "常有结余"；欺诈 20%；<30 岁 49% 与父母同住、15% 因找不到工作而未就业
- 备注：读 PDF 与摘要页。在 2025 报告正文 grep "gig" 无匹配，说明 2025 版没有零工章节，零工数据只能用 2024 版 [IN-01]。

### [IN-03] Poverty in the United States: 2025（P60-290）
- 出处：U.S. Census Bureau，2026-09-15；访问 2026-10
- URL：https://www2.census.gov/library/publications/2026/demo/p60-290.pdf
- 本地副本：pdfs/IN_census_p60_290_poverty2025.pdf
- Tags：#type/official #conf/high #region/northamerica #topic/poverty #topic/race
- Use：06 §1、§4：官方贫困率 10.2%、SPM 13.1%；分群官方贫困率（Black 17.3、AIAN 16.7、Hispanic 13.9、White non-Hispanic 7.5、Asian 7.7、65+ 9.8）与 SPM（Black 20.3、Hispanic 20.0、AIAN 18.1、65+ 15.4、White non-Hispanic 9.2、Asian 12.8）
- 备注：读 pdftotext 表格；官方 vs SPM 两栏的对应关系是从版面行判断的，引用前建议对照原表。

### [IN-04] Income, Poverty and Health Insurance Coverage in the United States: 2025（新闻稿）
- 出处：U.S. Census Bureau，2026-09-15；访问 2026-10
- URL：https://www.census.gov/newsroom/press-releases/2026/income-poverty-health-insurance-coverage.html
- Tags：#type/official #conf/high #region/northamerica #topic/income
- Use：06 §1：中位家庭收入 $87,460（实际值，历史最高）；贫困人口 3,450 万；Social Security 使 2,880 万人脱离 SPM 贫困；无保险 7.9%
- 备注：WebFetch 读新闻稿正文。

### [IN-05] ALICE 2025 National Report（Essentials Index）
- 出处：United For ALICE，2025；访问 2026-10
- URL：https://www.unitedforalice.org/Attachments/ALICEEssentials/alice-essentials-index-2025.pdf
- 本地副本：pdfs/IN_alice_national_2025.pdf
- Tags：#type/ngo #conf/high #region/northamerica #topic/income #topic/cost-of-living
- Use：06 §1：ALICE 定义；2023 年单亲+1 学龄儿童的 Household Survival Budget $52,620；托育工人中位 $14.60/小时（全职 $30,370）缺口 $22,250；2010 年 240 个职业中位工资撑不起该预算，2023 年仍无一个；Essentials Index 2024 预计 5.9% vs CPI 3%
- 备注：该 PDF 为 Essentials Index 专题，不含"42%"这个全国占比；42% 来自 [IN-06]。ALICE 是 NGO（United Way 体系）方法，预算为其自定义。

### [IN-06] ALICE 全国占比（2023 年数据，2025 年报告）
- 出处：United Way NCA / United Way Suncoast 等转述 United For ALICE 2025；搜索摘要；访问 2026-10
- URL：https://unitedwaynca.org/newsroom/steady-stats-shifting-lives-united-way-ncas-2025-alice-update-reveals-widening-gap-between-income-and-survival/
- Tags：#type/ngo #conf/med #region/northamerica #topic/income
- Use：06 §1：2023 年全国 3,800 万 ALICE 户（29%）；ALICE + 贫困线以下合计 5,500 万户（42%）
- 备注：仅摘要，未读全国主报告；2026 年可能已有新一轮（2023 年数据为 2025 版）。

### [IN-07] The State of Gig Work in 2021
- 出处：Pew Research Center，2021-12-08（调查 2021-08）；访问 2026-10
- URL：https://www.pewresearch.org/internet/2021/12/08/the-state-of-gig-work-in-2021/
- 本地副本：pdfs/IN_pew_gig_2021.pdf
- Tags：#type/official #conf/high #region/northamerica #topic/gig
- Use：06 §4(c)：16% 曾通过线上零工平台赚钱、9% 过去 12 个月；31% 视为主业；低收入者中 42% 视为主业（占低收入成年人 7%）；23% 说"essential"、35% "important"；Hispanic 30%、Black 20%、Asian 19%、White 12%
- 备注：读 PDF 关键段。2021 年数据，仅含"平台"口径，窄于 SHED。

### [IN-08] Gridwise Annual Gig Mobility Report 2026（含 2025 年数据）
- 出处：Gridwise Analytics，2026；PR Newswire 摘要；访问 2026-10
- URL：https://gridwise.io/analytics/2026-annual-gig-mobility-report ；https://www.prnewswire.com/news-releases/gridwise-analytics-annual-gig-mobility-report-finds-customer-rideshare-prices-rose-nearly-10-as-platform-fees-surged-and-driver-pay-lagged-302704761.html
- Tags：#type/company #conf/med #region/northamerica #topic/gig
- Use：06 §4(c)：2025 年 Uber 司机每"活跃小时"毛收入 $23.88、Lyft $22.45；2025-12 同比：司机每单毛收入 +3.6%、每小时 +4.1%，乘客价格 +9.6%；平台费每单 +33%；rideshare 小费 $1.58/单；配送小费 $4.16/单；AV 城市司机每小时订单数下降约快一倍（PR 标题）
- 备注：页面 WebFetch 只拿到部分文字，$23.88/$22.45 与"AV 快一倍"来自搜索摘要；"活跃小时"=载客/送单时间，不含空驶等待；样本是装了 Gridwise App 的司机（自选择偏差）；全文报告需下载未取得。

### [IN-09] How Much Do DoorDash Drivers Make（Gridwise）
- 出处：Gridwise blog，2026；访问 2026-10
- URL：https://gridwise.io/blog/how-much-do-doordash-drivers-make
- Tags：#type/company #conf/med #region/northamerica #topic/gig
- Use：06 §4(c)：2025 年 DoorDash 毛收入 $12.43/活跃小时；基础薪酬仅占每单总收入 42–43%，其余是小费（>$7/活跃小时）；每英里约 $0.92；不含车辆成本与空驶
- 备注：读页面。Shipt $17.44、Grubhub $15.38 中位数来自搜索摘要。Amazon Flex $18–25/小时来自二手聚合（ZipRecruiter/TheRideshareGuy），low，未采用为事实。

### [IN-10] Uber Rideshare Driver Earnings and Benchmarking Study（HR&A，Uber 委托）
- 出处：HR&A Advisors（受 Uber Technologies 委托），2025-11；访问 2026-10
- URL：https://www.hraadvisors.com/wp-content/uploads/2025/11/HRA_Uber-Rideshare-Driver-Net-Earnings-Study_11_2025.pdf
- 本地副本：pdfs/IN_hra_uber_net_earnings_chicago_2025.pdf
- Tags：#type/company #conf/med #region/northamerica #topic/gig
- Use：06 §4(c)：2024 年芝加哥/费城/波特兰 Uber 司机毛时薪 $29.35/$27.83/$29.08，成本 $6.34/$6.54/$7.26 每小时（$0.33–0.35/英里），净时薪 $23.01/$21.29/$21.82；对比当地最低工资 $16.20/$7.25/$15.95
- 备注：读正文表 1。利益相关方委托、使用 Uber 内部数据、仅三个城市、"小时"口径为活跃小时（需核对方法章）。与 Gridwise 的 $23.88 毛口径明显不同，并列呈现。

### [IN-11] 其他估算：网约车司机扣成本后净时薪 $11–16
- 出处：shifttrackerapp.com、mystrodriver.com 等聚合博客；搜索摘要；访问 2026-10
- URL：https://shifttrackerapp.com/uber-earnings-calculator
- Tags：#type/aggregator #conf/low #region/northamerica #topic/gig
- Use：06 §4(c)：作为与 [IN-10] 对立的低端估计，并注明"成本占毛收入 25–40%"一说
- 备注：商业 App 博客，方法不透明，仅作对照，不作结论。

### [IN-12] Direct Care Workers in the United States: Key Facts 2025
- 出处：PHI，2025-09；访问 2026-10
- URL：https://www.phinational.org/wp-content/uploads/2025/09/PHI-DCW-Key-Facts-Report-2025.pdf
- 本地副本：pdfs/IN_phi_dcw_key_facts_2025.pdf
- Tags：#type/ngo #conf/high #region/northamerica #topic/care-work
- Use：06 §4(d)：直接照护工人 ~540 万（2024），中位时薪 $17.36、居家照护 $16.77；居家照护中位年收入 $22,429；15% 家庭低于贫困线、41% <200% FPL；59% 领某种公共援助；48% 靠公共医保（多为 Medicaid）、11% 无保险；仅 48% 全职全年；中位年龄 48、多为女性/有色人种/移民
- 备注：读 pdftotext。PHI 为倡导型 NGO，数据来自 ACS/CPS。BLS 的同名职业时薪略高（见 [IN-13]），并列。

### [IN-13] Home Health and Personal Care Aides（BLS OOH）
- 出处：BLS，2026（May 2025 工资）；访问 2026-10
- URL：https://www.bls.gov/ooh/healthcare/home-health-aides-and-personal-care-aides.htm
- Tags：#type/official #conf/med #region/northamerica #topic/care-work
- Use：06 §4(d)：中位年薪 $35,800（$17.21/小时）、10 分位 <$27,040；4,677,100 个岗位；2025–35 增长 18%
- 备注：仅搜索摘要（页面未用 WebFetch 读）。BLS 年薪假设全职，而 PHI 的 $22,429 是实际年收入，两者口径不同，不冲突。

### [IN-14] BLS OOH：cashiers / retail sales / janitors / food & beverage serving / hand laborers
- 出处：BLS Occupational Outlook Handbook（May 2025 工资）；访问 2026-10
- URL：https://www.bls.gov/ooh/sales/cashiers.htm ；https://www.bls.gov/ooh/sales/retail-sales-workers.htm ；https://www.bls.gov/ooh/building-and-grounds-cleaning/janitors-and-building-cleaners.htm ；https://www.bls.gov/ooh/food-preparation-and-serving/food-and-beverage-serving-and-related-workers.htm ；https://www.bls.gov/ooh/transportation-and-material-moving/hand-laborers-and-material-movers.htm
- Tags：#type/official #conf/high #region/northamerica #topic/labor #topic/wages
- Use：06 §4(a)(b)(f)：Cashiers $15.81/小时、$32,880、310.6 万人、2025–35 -6%；Retail sales $17.10、427 万人（retail salespersons $17.03）；Janitors $17.71、243 万人；Food & beverage serving $15.24、514 万人（fast food/hosts $15.00）、part-time 常见、多数无小费；Hand laborers $18.38、$38,220、692 万人、伤病率最高之一
- 备注：均为 WebFetch 读取的页面；BLS 为中位数，不含福利。fast-food cooks $14.85、maids $17.07 等来自搜索摘要，未单独核实，故未写入正文。

### [IN-15] 最低工资水平（美国联邦/州）
- 出处：联邦 $7.25 自 2009-07-24 未变（多家聚合与 DOL 说明）；EPI 2026 年 1 月调薪文章；搜索摘要；访问 2026-10
- URL：https://www.epi.org/blog/over-8-3-million-workers-will-benefit-from-minimum-wage-increases-on-january-1-nineteen-states-will-raise-their-minimum-wages-heres-where/ ；https://www.paycom.com/resources/blog/minimum-wage-rate-by-state/
- Tags：#type/aggregator #conf/med #region/northamerica #topic/wages
- Use：06 §2：联邦 $7.25；30 个州 + DC 高于联邦，20 个州仍用 $7.25（含 AL、GA、ID、IN、IA、KS、KY、LA、MS、NH、NC、ND、OK、PA、SC、TN、TX、UT、WI、WY）；DC 约 $18.40
- 备注：仅摘要；州数与金额随年度变动，需用 DOL 州最低工资表复核。"州数"为聚合博客口径。

### [IN-16] EPI 工资分位（State of Working America Data Library，2025）
- 出处：Economic Policy Institute，2026；搜索摘要；访问 2026-10
- URL：https://data.epi.org/wages/hourly_wage_median/line/year/national/real_wage_median_2025/overall ；https://www.epi.org/blog/low-wage-workers-faced-worsening-affordability-in-2025/
- Tags：#type/ngo #conf/med #region/northamerica #topic/wages
- Use：06 §2：2025 年 10 分位时薪 $14.56（-0.3% 实际）、20 分位 $17.22、中位 $25.67
- 备注：EPI 页面 WebFetch 返回 403，仅摘要。数据为 CPS 衍生，2025 美元。

### [IN-17] Domestic Workers Chartbook（EPI/NDWA）
- 出处：EPI，2020 版及 2022 版；搜索摘要；访问 2026-10
- URL：https://www.epi.org/publication/domestic-workers-chartbook-2022/
- Tags：#type/ngo #conf/med #region/northamerica #topic/domestic-work
- Use：06 §4(f)：家政工人中位时薪 $13.79（其他工人 $21.76）；house cleaners $13.04；居家照护 $13.85–14.00；23.4% 居家工人低于贫困线；多数无带薪假
- 备注：仅摘要；数据年代偏旧（2020 前后），应与 [IN-12][IN-14] 的 2024–25 年数据区分。

### [IN-18] 日结工人（day laborers）工资与工资盗窃
- 出处：NDLON/UCLA Day Labor Survey 及学术论文（新奥尔良、丹佛）；搜索摘要；访问 2026-10
- URL：https://pmc.ncbi.nlm.nih.gov/articles/PMC9746697/ ；https://link.springer.com/article/10.1007/s12134-013-0303-7
- Tags：#type/academic #conf/low #region/northamerica #topic/day-labor
- Use：06 §4(e)：时薪约 $11.32、每周约 23 小时、周收入约 $259（旧调查，未做通胀调整）；新奥尔良调查 78% 遭遇工资盗窃；另一项 62%
- 备注：仅摘要，年代与样本不明（疑为 2005–2006 年全国日结工人调查），只能作为"方向性"线索，绝不能当 2026 年水平。

### [IN-19] 墨西哥 2025 年汇款（Banxico）
- 出处：Banco de México；La Jornada 2026-02-03、UnoTV、Funds Society 等转述；访问 2026-10
- URL：https://www.jornada.com.mx/noticia/2026/02/03/economia/mexico-recibio-remesas-por-61-mil-791-mdd-cayeron-45-en-2025-bdem
- Tags：#type/news #conf/med #region/northamerica #topic/remittances
- Use：06 §6：2025 年汇款 US$617.91 亿，同比 -4.5%（-4.56%），2024 年 US$647.46 亿；自 2013 年首次年度下降
- 备注：媒体转述 Banxico；未读 Banxico 原始新闻稿。UnoTV 标题为 63.7→60.8 十亿美元，口径与修订不同，并列：61,791 vs 60.8。

### [IN-20] 墨西哥汇款与家庭收入（ENIGH 2024）
- 出处：INEGI ENIGH 2024；IMCO、México ¿cómo vamos?；Yahoo/Monitor Financiero 转述；搜索摘要；访问 2026-10
- URL：https://mexicocomovamos.mx/publicaciones/2025/08/enigh-2024-como-vamos-con-los-ingresos-y-gastos-de-los-hogares/ ；https://imco.org.mx/wp-content/uploads/2025/07/Analisis-ENIGH-2024_IMCO-1.pdf
- Tags：#type/news #conf/low #region/northamerica #topic/remittances
- Use：06 §6：2024 年约 11.3% 的墨西哥家庭收汇款；最低收入十分位中汇款约占 33% 当期收入；ENIGH 只捕获 Banxico 汇款额的约 7.8%
- 备注：仅摘要，数字来自媒体与智库转述；"7.8%"是单一分析，低可信。

### [IN-21] 墨西哥最低工资与劳动非正规性
- 出处：CONASAMI（2025-12-03 决议）；Littler 2026 年分析；INEGI ENOE 2026 Q2（La Silla Rota 2026-08-25、Mundo Ejecutivo）；搜索摘要；访问 2026-10
- URL：https://www.littler.com/news-analysis/asap/mexico-aumenta-el-salario-minimo-para-el-2026 ；https://lasillarota.com/negocios/2026/8/25/mexico-suma-495-mil-personas-a-la-informalidad-laboral-en-un-ano-inegi-525783.html
- Tags：#type/news #conf/med #region/northamerica #topic/wages #topic/informal
- Use：06 §6：2026 年起一般最低工资 315.04 比索/日，北部边境自由区 440.87 比索/日；2026 Q2 非正规就业 3,308 万人，占就业 55.1%
- 备注：仅摘要；ENOE 其他月份有 54.3%、54.8% 等不同口径（Threads 转述，未采用）。

### [IN-22] 墨西哥平台工人社保试点（IMSS）
- 出处：IMSS/STPS；El Imparcial 2026-01-15、IDC Online；搜索摘要；访问 2026-10
- URL：https://www.gob.mx/imss/prensa/imss-y-stps-informan-sobre-la-reforma-laboral-en-materia-de-personas-trabajadoras-de-plataformas-digitales?idiom=es
- Tags：#type/news #conf/med #region/northamerica #topic/gig #topic/policy
- Use：06 §6：2025-07-01 起 180 天试点；月净收入达一个最低工资（约 8,364 比索）才须由平台参保；试点期间受益 91.2 万人，2025-12 有 206,521 人超过门槛
- 备注：仅摘要；"912 万"之类误读已排除，使用 912,000。

### [IN-23] 加拿大：低收入、食品银行、最低工资、零工
- 出处：Statistics Canada（Canadian Income Survey 2023，2025-05-01）；Food Banks Canada HungerCount 2025；Canada.ca 联邦最低工资通知 2026-03；StatCan 零工与平台工作；搜索摘要；访问 2026-10
- URL：https://www150.statcan.gc.ca/n1/daily-quotidien/250501/dq250501b-eng.htm ；https://foodbankscanada.ca/hunger-in-canada/hungercount/ ；https://www.canada.ca/en/employment-social-development/news/2026/03/government-of-canada-raises-the-federal-minimum-wage.html
- Tags：#type/official #conf/med #region/northamerica #topic/canada
- Use：06 §6：LIM-AT 12.0%（2023）、官方贫困率（MBM）10.2%（2023）、中位税后收入 C$74,200；2024 年约 24% 加拿大人处于食物不安全家庭；2025-03 食品银行约 220 万次访问（记录高位），19.4% 的使用者有工作；联邦最低工资 2026-04-01 由 C$17.75 升至 C$18.15（仅联邦管辖行业）；2022Q4 有 87.1 万人以零工为主业；2024 年约 70 万人做数字平台工作（占 15–69 岁 2.3%）
- 备注：全为摘要。联邦最低工资只覆盖联邦监管雇主，多数工人适用省级最低工资（本稿未取省级）。零工数字在不同口径下相差大（46.8 万 vs 约 70 万）。

### [IN-24] SNAP 参保与福利水平
- 出处：Pew Research Center 2025-11-14（引 USDA）；KFF；搜索摘要；访问 2026-10
- URL：https://www.pewresearch.org/short-reads/2025/11/14/what-the-data-says-about-food-stamps-in-the-us/
- Tags：#type/official #conf/med #region/northamerica #topic/transfers
- Use：06 §5：2025-05 有 4,170 万人、2,240 万户领 SNAP；人均 $188.45/月、户均 $350.89；成年受益人中 61% 2023 年无就业、26.8% 全年工作、12.2% 间歇工作；儿童 35%、65+ 15%；FY2025 平均 4,210 万人、$187.94/人/月（搜索摘要，low-med）
- 备注：Pew 页面 WebFetch 读取。"成年受益人 61% 无就业"含老人、残障，不等于"不愿工作"。

### [IN-25] OBBBA 对 SNAP 与 Medicaid 的工作要求
- 出处：CMS 2025-12 通知与 Interim Final Rule；AMA 摘要；CNBC 2026-02-03；搜索摘要；访问 2026-10
- URL：https://www.cms.gov/newsroom/fact-sheets/medicaid-community-engagement-requirement-certain-individuals-interim-final-rule-comment-period-cms ；https://www.cnbc.com/2026/02/03/medicaid-snap-work-requirements-retirement.html
- Tags：#type/official #conf/med #region/northamerica #topic/transfers #topic/policy
- Use：06 §5：SNAP ABAWD 工作要求年龄上限由 54 提高到 64、每月 80 小时，各州自 2025-11-01 起实施；Medicaid 19–64 岁"社区参与"每月 80 小时，各州最迟 2027-01-01 起
- 备注：仅摘要，免责群体（孕妇、残障、抚养幼儿者等）未逐条核对；执行细节各州不同。

### [IN-26] Social Security 与 SSI 金额
- 出处：SSA（2026 COLA 2.8%；SSI 联邦基准 $994/月个人、$1,491/月夫妇）；搜索摘要；SSA Fact Sheet（65+ 受益人对 SS 的依赖）；访问 2026-10
- URL：https://www.ssa.gov/oact/cola/SSIamts.html ；https://www.ssa.gov/news/assets/materials/press/factsheets/basicfact-alt.pdf
- Tags：#type/official #conf/med #region/northamerica #topic/transfers #topic/elderly
- Use：06 §5：2026 年平均退休金约 $2,071/月；SSI 个人 $994/月；65+ 受益人中 39% 男/44% 女靠 SS 获得 ≥50% 收入、12% 男/15% 女靠 SS 获得 ≥90%
- 备注：SSA 页面 WebFetch 403，仅摘要；SSA Fact Sheet 的统计年份未核实（可能为 2020 年前后），依赖度数字可能已变。

### [IN-27] EITC 与 TANF
- 出处：IRS EITC（2023 年度：约 2,300 万人、$570 亿、均值约 $2,541）；ACF FY2024 TANF 特征数据（均值 $673/月、儿童单独户占 40.9%）；CBPP（2023 年每 100 个贫困家庭仅 21 个领 TANF，1996 年为 68）；搜索摘要；访问 2026-10
- URL：https://www.irs.gov/credits-deductions/individuals/earned-income-tax-credit/eitc-fast-facts ；https://acf.gov/ofa/news/ofa-releases-fy-2024-tanf-characteristics-data ；https://www.cbpp.org/research/income-security/tanf-cash-assistance-helps-families-but-program-is-not-the-success-some
- Tags：#type/official #conf/med #region/northamerica #topic/transfers
- Use：06 §5
- 备注：IRS 页面 WebFetch 404；EITC 数字取自搜索摘要，注意 EITC 为一次性年度退税，不在 SHED 的"non-labor income"中（[IN-01] 脚注）。2025 年度最新数字未取得。

### [IN-28] 多份工作与"非标准"就业
- 出处：BLS CPS（2026-07：多职者占就业 5.3%，约 858.5 万；因经济原因兼职 480 万）；BLS Contingent and Alternative Employment（2023-07：独立承包人 7.4%，contingent 4.3%）；搜索摘要；访问 2026-10
- URL：https://www.bls.gov/web/empsit/cpseea39.htm ；https://www.bls.gov/news.release/pdf/conemp.pdf
- Tags：#type/official #conf/med #region/northamerica #topic/labor
- Use：06 §3
- 备注：仅摘要。BLS 多职者比例 5.3% 远低于 SHED 的 20%（"零工活动"）与 Bankrate 的 27%（"副业"），三者概念不同。

### [IN-29] 服务业排班不稳定（Shift Project 等）
- 出处：Harvard Shift Project（Schneider & Harknett）；NWLC 2025-12；搜索摘要；访问 2026-10
- URL：https://shift.hks.harvard.edu/its-about-time-how-work-schedule-instability-matters-for-workers-families-and-racial-inequality/
- Tags：#type/academic #conf/med #region/northamerica #topic/hours-volatility
- Use：06 §4(a)：大型零售与餐饮连锁工人中约三分之二不足两周通知、三分之一以上不足一周；11% 月内至少一次班次被取消、57% 至少一次班次时间被改（2021 调查）
- 备注：仅摘要，数据为 2021 年，仅针对大连锁。

### [IN-30] Amazon：加薪与自动化内部文件
- 出处：Amazon 2025-09-18 公告（均薪 >$23/小时，起薪 >$20.50；2026 起入门医保 $5/周）；The New York Times 2025-10 披露内部文件，经 Gizmodo、Fox Business 等转述；搜索摘要；访问 2026-10
- URL：https://www.aboutamazon.com/news/workplace/amazon-wage-increase-2025-fulfillment-transportation-employees ；https://gizmodo.com/leaked-amazon-plans-say-robots-will-help-it-avoid-hiring-600000-workers-2000674920
- Tags：#type/company #conf/med #region/northamerica #topic/warehouse #topic/automation
- Use：06 §4(b)：仓库工资；核实 [N-35] 项"到 2033 年避免雇用约 60 万人"——文件称到 2027 年避免 16 万、到 2033 年 60 万以上，目标自动化 75% 作业，Shreveport 新仓用工少四分之一
- 备注：仅摘要，NYT 原文未读；这是"泄露/内部规划"而非 Amazon 官方承诺，Amazon 对外有不同表述。

### [IN-31] Instacart 价格测试
- 出处：Consumer Reports、Groundwork Collaborative、More Perfect Union，2025-12-09；PYMNTS、CP24 转述；NY AG 2026 来函；搜索摘要；访问 2026-10
- URL：https://groundworkcollaborative.org/work/instacart/ ；https://www.pymnts.com/news/retail/2025/instacart-ends-price-testing-following-consumer-reports-study/
- Tags：#type/ngo #conf/med #region/northamerica #topic/pricing
- Use：06 §7：核实 [N-35] 项"Instacart 价格测试"：437 名购物者、4 个城市；74% 的商品出现不同价格，最高差 23%；Instacart 2025-12-22 宣布停止该价格测试
- 备注：仅摘要；是对消费者的影响，对低收入家庭预算有关，但不是工人收入。

### [IN-32] SafeRent 和解
- 出处：Cohen Milstein；Fortune 2024-11-21；搜索摘要；访问 2026-10
- URL：https://www.cohenmilstein.com/case-study/louis-et-al-v-saferent-solutions-et-al/
- Tags：#type/news #conf/med #region/northamerica #topic/housing #topic/algorithm
- Use：06 §7：核实 [N-35]：2024-11-20 联邦法院最终批准 $2.275M 和解，不得对住房券申请人提供评分
- 备注：仅摘要。

### [IN-33] Mobley v. Workday
- 出处：Law and the Workplace 2025-06；Labor & Employment Law Insights 2025-07；搜索摘要；访问 2026-10
- URL：https://www.lawandtheworkplace.com/2025/06/ai-bias-lawsuit-against-workday-reaches-next-stage-as-court-grants-conditional-certification-of-adea-claim/
- Tags：#type/news #conf/med #region/northamerica #topic/hiring #topic/algorithm
- Use：06 §7：核实 [N-35]：2025-05-16 ADEA 集体诉讼获有条件认证；2026 年法院确认申请人受 ADEA 差别影响保护（搜索摘要，其他博客，low-med）
- 备注：2026 年的进展来自多个二手博客，未读法院文书。

### [IN-34] 参议院 99-1 撤销州 AI 法暂停条款
- 出处：Reason 2025-07-01；Time；Nextgov 等；搜索摘要；访问 2026-10
- URL：https://reason.com/2025/07/01/senate-votes-99-1-to-remove-ai-moratorium-from-big-beautiful-bill/
- Tags：#type/news #conf/med #region/northamerica #topic/policy
- Use：06 §7：核实 [N-35]：2025-07-01 参议院以 99–1 删除（仅 Tillis 反对）；法案 7-4 签署
- 备注：多家媒体一致。

### [IN-35] Arkansas ARChoices 与 Idaho K.W. v. Armstrong
- 出处：Arkansas Times、Legal Aid of Arkansas、Justia（9th Cir. 2015）；搜索摘要；访问 2026-10
- URL：https://arlegalaid.org/news-events/newsroom.html/article/2017/01/30/seven-individuals-with-disabilities-continue-the-legal-fight-against-secretive-medicaid-home-care-cuts ；https://law.justia.com/cases/federal/appellate-courts/ca9/14-35296/14-35296-2015-06-05.html
- Tags：#type/news #conf/med #region/northamerica #topic/benefits-automation
- Use：06 §7：核实 [N-35]：Arkansas 2016 起用 RUGs 算法，居家照护由每周 56 小时降到 32 小时（个案）；Legal Aid 2017 起诉，2022-12 联邦第八巡回法院胜诉；Idaho 预算工具被第九巡回法院 2015 维持禁令
- 备注：仅摘要；"算法"在这两案中是评估/预算公式，不是现代 ML。

### [IN-36] Williams v. City of Detroit
- 出处：ACLU；Michigan Public 2024-06-28；搜索摘要；访问 2026-10
- URL：https://www.aclu.org/cases/williams-v-city-of-detroit-face-recognition-false-arrest
- Tags：#type/ngo #conf/med #region/northamerica #topic/policing
- Use：06 §7：核实 [N-35]：2024-06-28 和解，$300,000；逮捕须有独立证据；复查 2017–2023 年案件
- 备注：仅摘要。

### [IN-37] 加拿大 AIDA 作废
- 出处：Schwartz Reisman Institute；多家法律与合规博客；搜索摘要；访问 2026-10
- URL：https://srinstitute.utoronto.ca/news/whats-next-for-aida
- Tags：#type/academic #conf/med #region/northamerica #topic/policy
- Use：06 §7：核实 [N-35]：2025-01-06 国会休会使 C-27（含 AIDA）作废；2026-06-15 提出 C-36 重启隐私改革但不含 AIDA（后一点仅个别博客，low）
- 备注：仅摘要。Illinois HB 3773 与 California CRD 规章本轮仍未核实。

### [IN-38] Mercor 合同工 Musen 项目终止与降薪
- 出处：Forbes 2025-11-12（Iain Martin）；Business Insider/AOL 转述；NewsBytes；搜索摘要；访问 2026-10
- URL：https://www.forbes.com/sites/iainmartin/2025/11/12/the-worlds-youngest-self-made-billionaires-just-slashed-these-workers-wages-by-a-third/
- Tags：#type/news #conf/med #region/northamerica #topic/data-labeling
- Use：06 §8：Mercor 2025-11 通知数千名 Meta 项目（Musen）合同工项目结束，高峰超 5,000 人；10 月管理者曾称至少做到 12 月；转入新项目（Nova）时薪由 $21 降到 $16；估值 $100 亿
- 备注：Forbes 页面 403，仅摘要。

### [IN-39] AI 训练数据平台薪酬与可靠性（Outlier / DataAnnotation / Mercor）
- 出处：聚合与评测博客（talentsforai.com、breakingeven.online、skillora.ai、careerseeker.ai 等）；Scale AI 诉讼与 DOL 调查（New England Biz Law Update 2025-01-28；TechCrunch 2025-05-09）；搜索摘要；访问 2026-10
- URL：https://talentsforai.com/blog/is-outlier-ai-legit/ ；https://breakingeven.online/blog/mercor-review-2026 ；https://techcrunch.com/2025/05/09/the-department-of-labor-just-dropped-its-investigation-into-scale-ai
- Tags：#type/aggregator #conf/low #region/northamerica #topic/data-labeling
- Use：06 §8：Outlier 通才 $15–25/小时、编程/专业 $30–60；DataAnnotation $15–40；Mercor 宣称均值 $112/小时（实际多为 $25–30 技术类）；"500 万注册、约 3 万人有活"一说（单一博客，仅作线索）；Scale AI 2024-12 与 2025-01 两起误分类诉讼；DOL 2025-05 撤销调查
- 备注：薪酬数字来自评测博客，无审计；有联盟营销偏向。唯一较硬的是 Scale 诉讼（法院文件）与 Forbes（[IN-38]）。

### [IN-40] Etsy Creativity Standards 与 AI/POD
- 出处：Etsy Seller Handbook；bulkmockup、listybox 等卖家博客；搜索摘要；访问 2026-10
- URL：https://www.etsy.com/seller-handbook/article/1276491338090
- Tags：#type/company #conf/med #region/northamerica #topic/ai-income #topic/platform-risk
- Use：06 §8：2025-06-10 起 Creativity Standards——须披露 AI 参与、标"Designed by"、POD 须是自己设计并披露生产伙伴；违规可下架至封店；"65% 的卖家年收入<$100"一说
- 备注：Etsy 官方页只取到标题（搜索），政策细节来自博客；"65%<$100/年"未找到原始来源，视为 low，不作事实。

### [IN-41] YouTube 的 inauthentic content 政策
- 出处：YouTube Help（Partner Program 政策），生效 2025-07-15；访问 2026-10
- URL：https://support.google.com/youtube/answer/1311392
- Tags：#type/company #conf/high #region/northamerica #topic/ai-income #topic/platform-risk
- Use：06 §8：重复、批量生产、套模板的 AI 内容不可变现；AI 辅助但体现创作者原创观点与价值则可
- 备注：WebFetch 读取官方页。

### [IN-42] 创作者收入分布（调查/聚合）
- 出处：nealschaffer.com、air.io、demandsage 等聚合站转述的 2026 创作者调查（n=1,000 US 创作者）；搜索摘要；访问 2026-10
- URL：https://nealschaffer.com/creator-economy-statistics/
- Tags：#type/aggregator #conf/low #region/northamerica #topic/creator-economy
- Use：06 §8：48.7% 年收入<$10K、5.7% >$100K（单一问卷，样本自选）；"全职创作者中位数 $141K（YouTube）"明显受幸存者偏差影响，不采用；TikTok 旧 Creator Fund 约 $0.023/千次播放，新计划 $0.40–1.00/千次（>1 分钟视频），均为聚合站数字
- 备注：低可信；没有 YouTube/TikTok 官方收入分布。

### [IN-43] Upwork Future Workforce Index 2026 与 AI 对自由职业的影响
- 出处：Upwork 2026；Quiver Quant、selfemployed.com、Medium 摘要；Mediabistro；搜索摘要；访问 2026-10
- URL：https://www.upwork.com/research/research-future-workforce-index-2026
- Tags：#type/company #conf/low #region/northamerica #topic/ai-income #topic/freelance
- Use：06 §8：AI 相关技能需求 +109%（2025）；用 AI 的自由职业者时薪高 34%；"AI 执行类"任务收入 -28%、"AI 增强型专业服务"+22%；写作类项目 -32%（2025）；翻译、写作等"可替代"技能需求 -20% 至 -50%，商品化文档翻译价格 -40% 至 -60%（后两项来自博客）
- 备注：Upwork 页面 403，所有数字来自摘要；Upwork 是平台，有营销动机；"AI 溢价"可能是选择效应（强者更愿意用 AI）。学术参照有 ScienceDirect 论文"Winners and losers of generative AI: Early evidence of shifts in freelancer demand"，未读，未引用数字。

### [IN-44] FTC：AI 赚钱类商机诈骗
- 出处：FTC 新闻稿 2025-03（Click Profit）、2025-05/08（Air AI）、2025-08（电商商机案终局）、2026-03（Air AI 和解）；ABA 通讯；搜索摘要；访问 2026-10
- URL：https://www.ftc.gov/news-events/news/press-releases/2025/03/ftc-acts-stop-click-profit-online-business-opportunity-has-cost-consumers-least-14-million ；https://www.ftc.gov/legal-library/browse/cases-proceedings/airai
- Tags：#type/official #conf/med #region/northamerica #topic/scam
- Use：06 §9：Click Profit 声称 AI 建店，收 $15,000–40,000，至少造成消费者 $1,400 万损失；其 Amazon 店铺 1/5 零收入、约 1/3 终身毛销售<$2,500；Air AI 被指对收入前景与退款虚假宣传，2026-03 被禁止推销商机；FTC 的 Operation AI Comply 持续
- 备注：仅摘要，FTC 页面未全文读；案件均为指控/和解，不等同法院事实认定。

### [IN-45] Bankrate 副业调查（2025）
- 出处：Bankrate，2025；搜索摘要；访问 2026-10
- URL：https://www.bankrate.com/press-releases/fewer-americans-have-a-side-hustle-in-2025/
- Tags：#type/company #conf/med #region/northamerica #topic/side-hustle
- Use：06 §3：27% 美国成年人有副业（2024 年 36%）；平均 $885/月、中位 $200/月（2024：$891、$250）；Gen Z 34%、Millennials 31%、Gen X 23%、Boomers 22%
- 备注：仅摘要；网络问卷，口径"副业"含卖旧物、兼职，与 SHED 的"gig activities"不同。

### [IN-46] Census Nonemployer Statistics 2023（出租车与豪华车服务）
- 出处：U.S. Census Bureau，2025-05-15 / 2025-07 story；搜索摘要；访问 2026-10
- URL：https://census.gov/library/stories/2025/07/nes-gig-economy.html
- Tags：#type/official #conf/med #region/northamerica #topic/gig #topic/self-employed
- Use：06 §4(c)(g)：2023 年 taxi/limousine 类（含网约车）个体户 1,355,360 个、总收入 $399 亿，我们算均值约 $29,447（#calc）
- 备注：搜索摘要；"收入"是营业收入（gross receipts），不扣车辆费用，不能当净收入。

### [IN-47] 农村、部落、AIAN 收入与贫困
- 出处：USDA ERS（农村贫困率 13.6%，2023；非都会 13.7%）；ACS 2024 AIAN 中位家庭收入 $54,485 vs 全国 $81,604；搜索摘要；访问 2026-10
- URL：https://www.ers.usda.gov/publications/pub-details?pubid=113656 ；https://www.epi.org/blog/new-data-explore-u-s-economic-conditions-by-race-and-ethnicity-including-for-american-indian-and-alaska-native-communities/
- Tags：#type/official #conf/med #region/northamerica #topic/rural #topic/tribal
- Use：06 §4(k)：农村 13.6% vs 城市 10.7%（2023）；AIAN（non-Hispanic alone）家庭中位收入 $54,485，家庭贫困率 19.0%；保留地约 22%，Blackfeet 保留地 35.4%、中位家庭收入 $39,563
- 备注：仅摘要；全国中位数 $81,604 与 [IN-04] 的 $87,460 不同（ACS 2024 vs CPS ASEC 2025，不同年份与调查），不可直接对比。

### [IN-48] 青年与学历收入
- 出处：NCES Condition of Education（2022 年：25–34 岁 HS 完成者 $41,800 vs 学士 $66,600）；2024 年全职全年男 HS $50,780、女 $39,770；BLS 失业率 20–24 岁 2026-08 为 7.1%、16–24 岁 9.1%；搜索摘要；访问 2026-10
- URL：https://nces.ed.gov/programs/coe/pdf/2024/cba_508c.pdf ；https://www.bls.gov/news.release/youth.nr0.htm
- Tags：#type/official #conf/med #region/northamerica #topic/youth
- Use：06 §4(j)
- 备注：仅摘要；NCES 年份混合（2022 与 2024）。

### [IN-49] 小企业 AI 使用的厂商调查
- 出处：Capsule、Bluevine、Talkdesk、Simply Business 等 2026 年小企业调查；搜索摘要；访问 2026-10
- URL：https://capsulecrm.com/blog/small-business-ai-adoption-statistics/ ；https://www.talkdesk.com/news-and-press/press-releases/small-business-ai-survey/
- Tags：#type/aggregator #conf/low #region/northamerica #topic/small-business #topic/ai-use
- Use：06 §8：厂商调查称"超过四分之三中小企业常用 AI""46% 使用聊天机器人/自动客服"；与 Census BTOS（[N-08]：<20 人企业<20%）对立，并列
- 备注：样本自选、含 SMB（含数百人企业）、问"是否用生成式 AI 工具"；差异主要来自口径。BTOS 更保守。

### [IN-50] Findings from the National Agricultural Workers Survey (NAWS) 2021–2022（Research Report No. 17）
- 出处：U.S. Department of Labor, Employment and Training Administration，2024；访问 2026-10
- URL：https://www.dol.gov/sites/dolgov/files/ETA/naws/pdfs/NAWS%20Research%20Report%2017.pdf
- 本地副本：pdfs/IN_naws_report17_2021-22.pdf
- Tags：#type/official #conf/high #region/northamerica #topic/farmworkers #topic/income
- Use：06 §4(e)：作物工人平均时薪 $14.53（85% 按小时）；个人收入中位 $20,000–24,999、家庭收入中位 $30,000–34,999；21% 家庭收入低于贫困线；年均 37 周、205 天农业工作；上周平均 43 小时；58% 有工作授权（38% 公民、18% 绿卡）；57% 最舒适语言为西班牙语、27% 完全不会说英语、9% 原住民；45% UI、72% 工伤赔偿、28% 雇主提供非工伤医保、52% 有任何医保；64% 家庭用过公共援助（Medicaid 37%、SNAP 12%、WIC 7%）
- 备注：读执行摘要章节（pdftotext）。雇主端面谈调查，仅作物工人；未授权者在抽样中可能被低估。
