# sources-world.md —— 01-world-income-map.md 的来源表（编号 W-xx）

格式遵循 World/SOURCE-STANDARD.md。访问日期均为 2026-10。
说明：本文件撰写时 WebSearch 配额已用尽；部分来源只能通过 WebFetch（小模型摘要）读取，已在"备注"中注明，并相应降低 #conf。

### [W-01] World Bank Data Blog：June 2025 Global Poverty Update, 2021 PPPs
- 出处：World Bank Data Blog，2025-06-05，访问日期 2026-10
- URL：https://blogs.worldbank.org/en/opendata/june-2025-global-poverty-update-from-the-world-bank--2021-ppps-a
- 本地副本：无（见 W-02 的 PDF 版）
- Tags：#type/official  #conf/med  #region/world  #topic/income
- Use：01-world-income-map.md §1 支撑"三条国际贫困线 $3.00/$4.20/$8.30（2021 PPP）"；"2022 年极端贫困 8.38 亿、10.5%"；"撒哈拉以南非洲占极端贫困人口约 67%"。
- 备注：经 WebFetch 摘要读取，非逐字通读；数字与 W-02 的表格交叉核对一致（838.0M、10.5%、20.1%、48.0%）。

### [W-02] World Bank：June 2025 Update to the Poverty and Inequality Platform (PIP)
- 出处：World Bank，2025-06，访问日期 2026-10
- URL：https://documents1.worldbank.org/curated/en/099510306052516849/pdf/IDU-eb272b02-ecd1-4633-9e37-9297e20a711c.pdf
- 本地副本：pdfs/wb-2025-06-pip-update.pdf
- Tags：#type/official  #conf/high  #region/world  #topic/income
- Use：01-world-income-map.md §1 表 1-A 的"官方 2025-06 口径"一栏（2022 年 $3.00：838.0M/10.5%；$4.20：1,603.0M/20.1%；$8.30：3,831.8M/48.0%；撒哈拉以南非洲 $3.00 为 558.8M/45.5%）。
- 备注：用 pdftotext 抽取并核对关键表格行（World 行、Sub-Saharan Africa 行）；未通读全部 50 页。

### [W-03] World Bank Poverty and Inequality Platform (PIP) API，release 20260922（2021 PPP）
- 出处：World Bank PIP，API 版本 20260922_2021_01_02_PROD，查询日期 2026-10-04
- URL：https://api.worldbank.org/pip/v1/pip-grp?country=WLD&year=2023&povline=3&group_by=wb ；国家级 https://api.worldbank.org/pip/v1/pip?country=CHN&year=2023&povline=8.3&fill_gaps=true （povline 取 3、4.2、8.3、15、30）
- 本地副本：无（原始 JSON 在 scratchpad，未入库；可复现，见 01 文件 §1 方法注记）
- Tags：#type/official  #conf/high  #region/world  #topic/income
- Use：01-world-income-map.md §1 表 1-B（全球 6 档人口，2023 年 PIP 全球聚合）、§2 表 2-B（中国全国/农村/城镇、美国、加拿大、墨西哥在同一 PPP 档位的分布）；中国 2023 年平均消费 $18.41/天、中位数 $14.39/天。
- 备注：我们直接调用 API，数值为官方发布的最新版本（比 W-02 的 2025-06 版又有修订，如 2022 年全球 $3.00 人口由 838M 变为 869M）。中国、加拿大、墨西哥 2023 年为插值（is_interpolated=True），美国为调查值。福利指标：中国为消费（人均家庭），美/加/墨为收入。档位 $15、$30 为我们自选（非世行官方贫困线）。

### [W-04] World Bank Country and Lending Groups（FY2027）
- 出处：World Bank Data Help Desk，FY2027 分类（基于 2025 年 GNI per capita，Atlas 法），访问日期 2026-10
- URL：https://datahelpdesk.worldbank.org/knowledgebase/articles/906519-world-bank-country-and-lending-groups
- 本地副本：无
- Tags：#type/official  #conf/med  #region/world  #topic/income
- Use：01-world-income-map.md §1 表 1-C（四类收入组阈值与经济体数量；中国/墨西哥=上中等，美/加=高，印度=下中等）。
- 备注：经 WebFetch 摘要读取（阈值 $1,175 / $4,635 / $14,375；25/47/59/87 个经济体），未核对全文列表。

### [W-05] Pew Research Center：The Pandemic Stalls Growth in the Global Middle Class（Kochhar, 2021-03-18）
- 出处：Pew Research Center，2021-03-18，访问日期 2026-10
- URL：https://www.pewresearch.org/wp-content/uploads/sites/20/2021/03/PG_2021.03.18_Global-Middle-Class_FINAL.pdf
- 本地副本：pdfs/pew-2021-global-middle-class.pdf
- Tags：#type/academic  #conf/high  #region/world  #topic/income
- Use：01-world-income-map.md §1 表 1-D（Pew 五档 $2/$10/$20/$50，2011 PPP，2020 年人数：贫困 8.03 亿，低收入 39.56 亿，中等 13.24 亿，中上 11.40 亿，高 5.31 亿）。
- 备注：2011 PPP，已过时，仅作"框架与量级"参照；Pew 后续未见 2021 PPP 版本（本次未能再搜索确认）。

### [W-06] Al Jazeera：Where in the world are wealth and income most unequal?（引用 WIR 2026）
- 出处：Al Jazeera，2025-12-10，访问日期 2026-10
- URL：https://aljazeera.com/news/2025/12/10/where-in-the-world-are-wealth-and-income-most-unequal
- 本地副本：无
- Tags：#type/news  #conf/med  #region/world  #topic/income
- Use：01-world-income-map.md §1 表 1-E（全球收入前 10% 占 53%、后 50% 占 8%；财富前 10% 占 75%、后 50% 占 2%；墨西哥前 10% 约 60% 收入；中国前 10% 财富约 65–68%；北美与大洋洲人均收入为世界均值 290%）。
- 备注：二手转述 World Inequality Report 2026；WebFetch 摘要读取。

### [W-07] World Inequality Report 2026（WID.world / World Inequality Lab）搜索摘要
- 出处：World Inequality Lab，2025-12 发布，访问日期 2026-10
- URL：https://wir2026.wid.world/insight/global-economic-inequity/ ；全文 PDF https://prod.wid.world/www-site/uploads/2025/12/World_Inequality_Report_2026.pdf
- 本地副本：无（本环境无法解析 wir2026.wid.world / prod.wid.world，下载失败）
- Tags：#type/academic  #conf/low  #region/world  #topic/income
- Use：01-world-income-map.md §1 表 1-E（前 10% 约 5.6 亿成年人；后 50% 约 28 亿成年人；后 50% 人均年收入约 $5,100、前 10% 约 $159,300；前 10% 人均财富约 $100 万、后 50% 约 $6,500；前 1% 约 5,600 万人收入为后 50% 的 2.5 倍）。
- 备注：仅搜索结果摘要，未读原文；人均金额的货币口径（据称为 PPP）未能核实。待补：下载全文 PDF。

### [W-08] IMF Staff Discussion Note SDN/2024/001：Gen-AI: Artificial Intelligence and the Future of Work
- 出处：Cazzaniga et al., IMF，2024-01，访问日期 2026-10
- URL：https://www.imf.org/en/Publications/Staff-Discussion-Notes/Issues/2024/01/14/Gen-AI-Artificial-Intelligence-and-the-Future-of-Work-542379 （本地副本取自 developmentaid 镜像）
- 本地副本：pdfs/imf-genai-2024-dev.pdf
- Tags：#type/official  #conf/high  #region/world  #topic/ai-exposure
- Use：01-world-income-map.md §3 表 3-A（全球约 40% 岗位暴露；发达 60%、新兴 40%、低收入 26%；暴露岗位中约一半为替代风险、一半为互补）。
- 备注：读摘要与第 7 页等正文片段；"暴露"≠"被替代"。

### [W-09] ILO Working Paper 140：Generative AI and Jobs: A Refined Global Index of Occupational Exposure
- 出处：Gmyrek, Berg, Kamiński, Konopczyński, Ładna, Nafradi, Rosłaniec, Troszyński，ILO，2025-05-20，访问日期 2026-10
- URL：https://www.ilo.org/sites/default/files/2025-05/WP140_web.pdf
- 本地副本：pdfs/ilo-wp140-genai-index-2025.pdf
- Tags：#type/official  #conf/high  #region/world  #topic/ai-exposure
- Use：01-world-income-map.md §3 表 3-A（全球 1/4 工人处于有一定 GenAI 暴露的职业；3.3% 处于最高暴露级；低收入国家总就业 11% vs 高收入国家 34%；女性最高级 4.7% vs 男性 2.4%）。
- 备注：pdftotext 抽取并核对摘要与正文 Income-based differences 段；未通读全文。

### [W-10] ITU：Measuring Digital Development: Facts and Figures 2025
- 出处：ITU，2025-11-17，访问日期 2026-10
- URL：https://www.itu.int/en/mediacentre/Pages/PR-2025-11-17-Facts-and-Figures.aspx ；PDF https://www.itu.int/dms_pub/itu-d/opb/ind/d-ind-ict_mdd-2025-3-pdf-e.pdf
- 本地副本：pdfs/itu-facts-figures-2025.pdf
- Tags：#type/official  #conf/high  #region/world  #topic/digital-divide
- Use：01-world-income-map.md §3 表 3-B（60 亿人在线=75%；22 亿离线；高收入国家 94% vs 低收入国家 23%；城 85% vs 乡 58%；男 77% vs 女 71%；96% 的离线者在低/中等收入国家；5G 覆盖：高收入 84%、低收入 4%；约 60% 的低/中等收入国家移动宽带负担不起）。
- 备注：PDF 文本核对了 94%/23%/22 亿；5G、城乡、性别数字来自新闻稿页面（WebFetch 摘要）。

### [W-11] Anthropic Economic Index report: Uneven geographic and enterprise AI adoption
- 出处：Appel, McCrory, Tamkin et al., Anthropic，2025-09-15，访问日期 2026-10
- URL：https://www.anthropic.com/research/anthropic-economic-index-september-2025-report
- 本地副本：pdfs/N_anthropic_econ_index_geo_arxiv.pdf（由另一研究线程下载）
- Tags：#type/company  #conf/high  #region/world  #topic/ai-exposure
- Use：01-world-income-map.md §3 表 3-C（Claude.ai 使用强度 AUI：新加坡 4.6、美国 3.62、加拿大 2.91、印尼 0.36、印度 0.27、尼日利亚 0.2；人均 GDP 每高 1%，Claude 人均使用高 0.7%；R²≈0.71；低使用国家更偏"整任务委托/编程"）。
- 备注：只覆盖 Claude.ai 一家的数据；中国大陆不在该服务可用地区，故无中国 AUI；样本期为 2025 年 8 月前后，之后版本未读。

### [W-12] 国家统计局：2025 年全国居民收入和消费支出情况（人均可支配收入、中位数、城乡）
- 出处：国家统计局，2026-01-19，访问日期 2026-10
- URL：https://www.stats.gov.cn/sj/zxfbhjd/202601/t20260119_1962321.html
- 本地副本：无
- Tags：#type/official  #conf/high  #region/china  #topic/income
- Use：01-world-income-map.md §2 表 2-A（人均可支配收入 43,377 元；中位数 36,231 元（为均值 83.5%）；城镇 56,502 元、中位数 51,115 元；农村 24,456 元、中位数 20,711 元）。
- 备注：WebFetch 取得逐句引文；口径：居民人均可支配收入，税后、含转移性收入与自有住房估算租金，为人均而非户均。

### [W-13] 国家统计局：2025 年国民经济运行情况（五等份收入分组）
- 出处：国家统计局，2026-01-19，访问日期 2026-10
- URL：https://www.stats.gov.cn/sj/zxfb/202601/t20260119_1962330.html
- 本地副本：无
- Tags：#type/official  #conf/high  #region/china  #topic/income
- Use：01-world-income-map.md §2 表 2-A（五等份：低收入组 10,150 / 中间偏下 22,702 / 中间 35,536 / 中间偏上 55,586 / 高收入组 103,778 元）。
- 备注：WebFetch 返回原句"按全国居民五等份收入分组，低收入组人均可支配收入10150元……"。

### [W-14] 国家统计局：2025 年农民工监测调查报告（经搜索结果摘要获得）
- 出处：国家统计局，2026-04（预计），访问日期 2026-10
- URL：未取得原文 URL（搜索结果引用 stats.gov.cn、新华社、中新网、新浪财经）
- 本地副本：无
- Tags：#type/official  #conf/low  #region/china  #topic/labor
- Use：01-world-income-map.md §2 表 2-A / 2-C（农民工总量 30,115 万人，比上年增 142 万；月均收入 5,075 元，增 114 元；外出农民工约 5,774 元、本地农民工约 4,376 元）。
- 备注：仅搜索结果摘要（经 WebFetch 对搜索页的摘要提取），未读原文，且摘要中有单位笔误（"30.115 million"应为 3.0115 亿）；须待读原文后升级。

### [W-15] U.S. Census Bureau：Income in the United States: 2025（P60-289）
- 出处：U.S. Census Bureau，2026-09-15，访问日期 2026-10
- URL：https://www.census.gov/library/publications/2026/demo/p60-289.html
- 本地副本：无
- Tags：#type/official  #conf/med  #region/northamerica  #topic/income
- Use：01-world-income-map.md §2 表 2-A（家庭收入中位数 $87,460，较 2024 年估计 $85,210 增 2.6%；基尼无显著变化；P90 增 1.7%，P10 基本持平）。
- 备注：WebFetch 摘要引文；现价/实际价格口径为 2025 美元；家庭而非个人口径。

### [W-16] U.S. Census Bureau：Poverty in the United States: 2025（P60-290）
- 出处：U.S. Census Bureau，2026-09-15，访问日期 2026-10
- URL：https://www.census.gov/library/publications/2026/demo/p60-290.html
- 本地副本：无
- Tags：#type/official  #conf/med  #region/northamerica  #topic/income
- Use：01-world-income-map.md §2 表 2-A（官方贫困率 10.2%、3,450 万人；SPM 13.1%；儿童贫困率 13.4%；社会保障使 2,880 万人脱离 SPM 贫困）。
- 备注：WebFetch 摘要，未读全文；官方贫困线/SPM 的美元门槛未取得。

### [W-17] Statistics Canada Table 11-10-0135-01：Low income statistics by age, sex and economic family type
- 出处：Statistics Canada，Canadian Income Survey 系列，数据至 2024 年，下载 2026-10-04
- URL：https://www150.statcan.gc.ca/n1/tbl/csv/11100135-eng.zip （表页 https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1110013501）
- 本地副本：无（CSV 在 scratchpad）
- Tags：#type/official  #conf/high  #region/northamerica  #topic/income
- Use：01-world-income-map.md §2 表 2-A（加拿大 2024 年：LIM-AT 12.5%、5,075,700 人；MBM（2023 基期）11.0%、4,477,500 人；2023 年 LIM-AT 12.1%、MBM 11.1%）。
- 备注：直接读官方 CSV 的 "All persons / Canada" 行。LIM=家庭调整后收入中位数的 50%。

### [W-18] Wikipedia：Poverty in Mexico（转引 World Bank / CONEVAL / INEGI）
- 出处：Wikipedia，访问日期 2026-10
- URL：https://en.wikipedia.org/wiki/Poverty_in_Mexico
- 本地副本：无
- Tags：#type/aggregator  #conf/low  #region/northamerica  #topic/income
- Use：01-world-income-map.md §2 表 2-A（墨西哥 2024 年国家线下贫困约 29.6%（中度 24.2% + 极端 5.3%））。
- 备注：聚合站，仅作线索；未能取得 INEGI/CONEVAL 原文。墨西哥 PPP 档位分布以 W-03 为准。
