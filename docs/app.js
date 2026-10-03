/* VisualLass · Virtual Mayor — 数据来自仓库各城市调研文档 (2026-10-03) */
const REPO = 'https://github.com/ezcat207/Virtual-Mayor/tree/main';

const CITIES = {
hangzhou: {
  name:'杭州', en:'Hangzhou, China · 副省级省会',
  tags:['Claude Code'], verdict:'AI+ 先发优势，财政紧平衡：2026 年预算收入目标仅 +2%，土地出让下滑，债务≈预算收入 1.9 倍。',
  attention:[
    {area:'AI+ 与六小龙',level:5,why:'城市品牌 + 税基未来',evidence:'数字经济6780亿占GDP 29.5%；具身智能条例全国首部；市长Top优先级#1'},
    {area:'土地财政软着陆',level:5,why:'财政生存',evidence:'市本级基金收入863亿→635亿（-26%）；2026年预算收入目标仅+2%'},
    {area:'人才流入与留存',level:4,why:'长期税基',evidence:'每年35-43万大学生流入；常住人口+7.6万'},
    {area:'城市大脑 3.0',level:4,why:'治理政绩',evidence:'应用320个、用户1981万；要办件时长等可感知指标'},
    {area:'通勤与都市圈',level:3,why:'民生体感',evidence:'地铁四期2026年底9、10号线二期通车；运营里程516km'}
  ],
  leverage:[
    {opp:'AI 政务智能体',mapsTo:'城市大脑 3.0',fit:'高',logic:'场景即市场：320个应用、1981万用户，市长要的是可感知的获得感',risk:'采购周期长；补贴退坡后付费能力待验证'},
    {opp:'具身智能应用层',mapsTo:'AI+ 与六小龙',fit:'高',logic:'不做本体做场景：条例+三镇一港产业空间，应用公司吃政策红利',risk:'大厂挤压；IPO后总部是否留杭影响生态'},
    {opp:'数据标注与语料服务',mapsTo:'AI+ 与六小龙',fit:'中',logic:'数据交易所+算力券/模型券/语料券补贴，需求真实存在',risk:'低附加值锁定；价格战'},
    {opp:'大学生就业服务',mapsTo:'人才流入与留存',fit:'中',logic:'流入大、留存难是市长心病，服务缺口明显',risk:'C端付费弱，主要靠政府/高校买单'}
  ],
  stats:[['1270.0万','常住人口（+7.6万）'],['23011亿','GDP（+5.2%）'],['2693.2亿','预算收入（+2.0%）'],['5089.8亿','政府债务余额']],
  tabs:{
    briefing:{title:'市长简报',sections:[
      {h:'城市快照',t:'kv',items:[['1270.0万','常住人口（+7.6万），城镇化率85.3%'],['23011亿','GDP（+5.2%）'],['2693.2亿','一般公共预算收入（+2.0%），税收占85.5%'],['2849亿','一般公共预算支出（+5.9%）'],['863.2亿','市本级政府性基金收入（2026预算635亿）'],['6780亿','数字经济核心产业（+9.3%，占GDP 29.5%）'],['4600亿','规上AI核心产业营收（+23.1%）[存疑：与走廊口径冲突]'],['80017元','居民人均可支配收入（+4.2%）']]},
      {h:'财政画像（市长最该盯的）',t:'list',items:['2026年预算收入目标仅+2%、支出+1.5%，紧平衡','土地出让下滑：本级基金收入 863亿→635亿（-26%）','债务余额5090亿≈一般预算收入1.9倍','税收占比高（85.5%）是质量优势，但增速仅0.8%，税基承压']},
      {h:'如果我是市长：Top 优先级',t:'list',items:['守住"AI+"先发优势，但别只押六小龙——税基和就业仍靠平台经济与制造业','稳住房地产与土地财政"软着陆"：消化库存、保障房、城中村改造','通勤与都市圈：地铁四期收尾，确保2026年底9、10号线二期通车','人才留存而非只靠引进：每年35-43万大学生流入是核心资产','城市大脑3.0做"可感知的获得感"：办件时长、AI差错率公开指标','亚运遗产与拥江发展做活：场馆向公众开放+赛事运营','民生底线：就业25万+、新开工市属高中4所']},
      {h:'关键产业',t:'list',items:['数字经济（阿里、网易、蚂蚁、海康）','人工智能与具身智能机器人（DeepSeek、宇树、云深处、强脑；具身智能集群产值1068亿）','高端装备/生物医药/新能源汽车','文旅（西湖、国际旅游目的地）','跨境电商']}]},
    briefing_note:'内容来自 cities/hangzhou/README.md（Claude Code，2026-10-03）',
    fiscal:{title:'财政深水区',sections:[
      {h:'说明',t:'note',text:'杭州卷暂无独立 fiscal.md，以下为 README 快照中的财政要点。'},
      {h:'核心数字',t:'kv',items:[['2693.2亿','2025预算收入（+2.0%）'],['85.5%','税收占比'],['863.2亿→635亿','市本级基金收入（土地为主）'],['5089.8亿','债务余额（≈收入1.9倍）'],['+2% / +1.5%','2026年收支预算目标']]},
      {h:'判断',t:'list',items:['紧平衡：收入目标+2%、支出+1.5%','土地财政收缩是最直接的压力源','债务规模约为年预算收入的1.9倍，需盯偿债节奏']}]},
    fiscal_note:'来源：cities/hangzhou/README.md',
    ai:{title:'数字 AI',sections:[
      {h:'全景数字',t:'kv',items:[['6780亿','数字经济核心产业（+9.3%）'],['4600亿','规上AI核心产业营收（+23.1%）'],['57→75 EFLOPS','智算供给（年底目标）'],['56款','大模型备案（占全省86.2%）']]},
      {h:'城市大脑 3.0',t:'list',items:['2025-03-31启动，主线"智能化、中枢化、产业化"','全国首个政务模型训练场；率先部署 DeepSeek-R1 系列','"城市大脑 GPT"；应用320个、用户1981万[存疑]','智能体10+：依保儿（医保）、亲清小Q、杭小忆、警小爱等']},
      {h:'六小龙与具身智能',t:'list',items:['DeepSeek、游戏科学、宇树、云深处、强脑、群核','具身智能集群产值1068亿，机器人企业700+','《杭州市促进具身智能机器人产业发展条例》2026-05-01施行（全国首部）','"三镇一港"产业空间布局']},
      {h:'数据要素',t:'list',items:['《数据流通交易促进条例》2025-03-01施行','杭州数据交易所：上架数据产品4682个、交易额128.51亿','算力券/模型券/语料券补贴工具']},
      {h:'新市长必知',t:'list',items:['六小龙≠产业基本盘，盯IPO后总部是否留杭','补贴工具要有退出与绩效评估，否则与紧平衡预算冲突','数据交易额相对GDP微小，警惕口号大于实收','公共服务AI设"人工兜底"与适老通道']}]},
    ai_note:'内容来自 cities/hangzhou/digital-ai.md（Claude Code）',
    sentiment:{title:'社媒舆情',sections:[{h:'说明',t:'note',text:'杭州卷暂无 sentiment vertical。仓库中舆情专题目前覆盖：丽水、凤凰城、西雅图（🏷️ Muse）。'}]},
    planning:{title:'城市规划',sections:[
      {h:'国土空间总体规划 2021-2035',t:'list',items:['国务院2024-10批复；城市性质提升为"东部地区重要的中心城市"','空间格局"一主六辅三城、三江两脉八带"','底线：城镇开发边界≤1647.90 km²，转向存量更新']},
      {h:'城市更新',t:'list',items:['2025-03获批，首批30个重点片区先行','2025年更新项目1804个、城中村改造1.2万户','入选全国首批城市更新行动城市']},
      {h:'城西科创大走廊',t:'list',items:['产业增加值4223.6亿（2016年1063亿，年均+17.5%）','之江实验室+浙大+西湖大学+阿里，规上AI营收2520亿占全市60%+','目标：万亿级数字产业集群']},
      {h:'轨道与住房',t:'list',items:['地铁运营516km，年客流15亿人次；四期152.9km约1388亿','2024-05全面取消住房限购；新房/二手房价差拉大','公租房1.4万套+货币补贴16万户']}]},
    planning_note:'内容来自 cities/hangzhou/urban-planning.md（Claude Code）'}
  }
,
phoenix: {
  name:'凤凰城', en:'Phoenix, Arizona, USA · 议会-经理制',
  tags:['Claude Code','🏷️ Muse'], verdict:'财政纪律在线，但35%收入捏在州议会手里，养老金$50亿UAAL是长期负债；舆情的火是水和热。',
  attention:[
    {area:'水安全',level:5,why:'城市存续',evidence:'科罗拉多河供水约40%；联邦10年削减计划2026-08出台；民调第一关切是水费'},
    {area:'极端高温',level:5,why:'人命 + 民生',evidence:'2025年Maricopa County约430例热相关死亡；Shade Phoenix计划$6000万/5年'},
    {area:'住房可负担',level:4,why:'民生压力',evidence:'64,000+套住房中仅约22%可负担；住房信托基金仅$3.5M'},
    {area:'财政纪律',level:4,why:'市长承诺',evidence:'三年内避免新增永久性支出；州政策两年已冲击-$140M'},
    {area:'TSMC 半导体生态',level:3,why:'经济名片',evidence:'总承诺$265B、规划12座厂；但对一般基金直接贡献有限'}
  ],
  leverage:[
    {opp:'智慧水务（智能水表/漏损检测）',mapsTo:'水安全',fit:'高',logic:'Pure Water Phoenix投资$3亿；水费上涨期节水=省钱，付费意愿最强',risk:'公用事业采购慢；需过认证'},
    {opp:'降温技术（反射涂层/遮阳结构）',mapsTo:'极端高温',fit:'高',logic:'Cool Corridors试点+Shade计划$6000万，政府是现成甲方',risk:'效果验证周期长'},
    {opp:'住宅建造降本技术',mapsTo:'住房可负担',fit:'中',logic:'5万套目标达成但缺可负担，降本技术对开发商有吸引力',risk:'建筑行业保守，推广慢'},
    {opp:'半导体本地配套服务',mapsTo:'TSMC 半导体生态',fit:'中',logic:'12座厂的供应链本地化缺口：物流、维保、人力服务',risk:'大厂账期长；直面现有供应商竞争'}
  ],
  stats:[['166.5万','人口（全美第5）'],['$2.19B','FY2025-26一般基金'],['35%','收入依赖州共享'],['$37.2亿','PSPRS养老金缺口']],
  tabs:{
    briefing:{title:'市长简报',sections:[
      {h:'城市快照',t:'kv',items:[['166.5万','人口（Census 2025估计），美国第5大城市'],['议会-经理制','市长Kate Gallego（任期至2029-04）；市经理Ed Zuercher（5-4复任）'],['$2.19B','FY2025-26一般基金（+2.9%）'],['$2.29B','FY2026-27一般基金资源（+4.5%，一致通过）'],['$115亿','五年资本计划（CIP）'],['$265B','TSMC Arizona总承诺（2026-07确认，12座厂）'],['$44.3B','Sky Harbor机场年产出']]},
      {h:'市长的法定权力边界',t:'list',items:['市长是议会主席+一票，不是strong-mayor；预算由市经理提案','真正的杠杆：议程设置、议会联盟、对外代表（科罗拉多河谈判、联邦拨款）','州议会（共和党多数）有强先占权：35%收入依赖州共享']},
      {h:'如果我是市长：优先级',t:'list',items:['水安全（最高优先）：科罗拉多河~40%供水，联邦2027-28框架拟大削；加速Pure Water Phoenix','极端高温：2025年Maricopa County约430例热死亡；Cool Corridors、树冠25%目标','住房：5万套目标超额完成，但可负担仅~20%','财政稳健：三年内避免新增永久性支出，保AAA叙事','轻轨：Capitol延伸7-2被砍，转向Indian School Road西向']}]},
    briefing_note:'内容来自 cities/phoenix/README.md（Claude Code，2026-10-03）',
    fiscal:{title:'财政深水区',sections:[
      {h:'一般基金五年轨迹',t:'table',head:['财年','收入','关键驱动'],rows:[['FY2019-20','$1.259B','疫情前基数'],['FY2023-24','$1.905B','疫情后强劲反弹'],['FY2024-25（实际）','$1.846B（-3.1%）','州所得税固定税+取消租赁销售税'],['FY2025-26（预算）','$1.9369B（+6.5%）','TPT税率上调至2.8%'],['FY2026-27（已采用）','$1.987B（+3.4%）','温和增长，被San Tan Valley建市部分抵消']]},
      {h:'收入结构（2026-05市预算主任口径）',t:'kv',items:[['~42%','本地销售税'],['~35%','州共享收入'],['~12%','主物业税']]},
      {h:'州依赖风险：35%的命门',t:'list',items:['SB 1131+SB 1828两年合计冲击 -$140M（FY24-25 -$54M，FY25-26 -$86M）','San Tan Valley建市 FY2026-27再 -$10M+','联邦OBBBA条款 -$56.7M/三年','"人在家中坐，锅从州里来"']},
      {h:'养老金：$50亿量级',t:'kv',items:[['$37.22亿','PSPRS缺口（筹资率48.87%），目标2042年100%'],['$13.2亿','COPERS缺口（筹资率74.65%）'],['$4.86亿','FY2026-27 GF养老金成本，占运营23.9%']]},
      {h:'债务与信用',t:'list',items:['GO评级：Fitch AAA / S&P AA+ / Moody\'s Aa1（"AAA叙事"仅Fitch成立）','五年CIP $115亿，GF直接出资仅$1.866亿（~1.6%）','债务存量总额[存疑]']},
      {h:'增长点：谁真正养一般基金？',t:'list',items:['TSMC $265B是城市名片，但运营期对GF直接贡献有限','真相：住宅建设＞TSMC建设期＞数据中心建设期——盖房子比盖晶圆厂更养人','数据中心被2025新分区规则+Prop 207索赔卡住']},
      {h:'一句话诊断',t:'text',ps:['财政病是"州政策风险+养老金长期负债"，不是没钱——收入温和增长、纪律在线，真正的雷在州议会和精算表里。']}]},
    fiscal_note:'内容来自 cities/phoenix/fiscal.md（🏷️ Muse，2026-10-03），数字多为索引抓取未逐项复核',
    ai:{title:'数字 AI',sections:[
      {h:'2026年动态',t:'list',items:['警局非紧急电话AI分诊2025-08-13上线（36语种、$64.3万）','警局GenAI治理政策GO 2027（2025-08-21生效）——治理先行','Smart City PHX Roadmap（IDC编制，130+项目）','Adobe DX统一网站+GEO优化','"~23个GenAI应用清单"未找到2026官方确认[存疑]']},
      {h:'策略',t:'list',items:['低成本高杠杆：311+非紧急线路AI分流','Open Data/Performance Dashboard透明化','GenAI治理先行、试点可审计']}]},
    ai_note:'内容来自 cities/phoenix/digital-ai.md（Claude Code）+ sentiment.md AI章节（🏷️ Muse）',
    sentiment:{title:'社媒舆情',sections:[
      {h:'总体',t:'text',ps:['议题导向、烈度中等。不像西雅图那样出现对市府整体的不信任；市经理5-4复任显示议会分裂，但预算一致通过。']},
      {h:'六大痛点',t:'table',head:['#','痛点','要点'],rows:[['1','极端高温死亡','2025年约430例（2023峰值645）；2026年跟踪快于去年'],['2','水：削减+水费','联邦10年削减计划2026-08出台，约40%供水受影响；民调第一关切是水费上涨'],['3','住房可负担性','64,000+套中仅约22%可负担；住房信托仅$3.5M'],['4','无家可归者','2021年以来投入超$1.8亿但体感有限'],['5','轻轨Capitol延伸被砍','2026-01-28以7-2暂停，退出约$2.5亿联邦拨款'],['6','数据中心vs水电','新分区规则约束；至少11家Prop 207索赔']]},
      {h:'市长视角一句话',t:'text',ps:['舆情的火是水和热点的——沙漠城市的宿命议题，也是市长真正的长期KPI；轻轨、数据中心都是"水约束"母题的子集。']}]},
    sentiment_note:'内容来自 cities/phoenix/sentiment.md（🏷️ Muse，2026-10-03）；r/phoenix系统性情绪数据稀薄',
    planning:{title:'城市规划',sections:[
      {h:'水与热',t:'list',items:['水源：科罗拉多河（CAP）~40%、Salt/Verde ~58%、地下水~2%','Pure Water Phoenix 2029投运（$3亿）；Shade Phoenix Plan $6000万/5年','树冠目标25%（现状~9-11%）']},
      {h:'住房与交通',t:'list',items:['"Housing Phoenix"5万套目标提前5年达成（>53,000套）','South Central轻轨延伸5.5英里2025-06通车；Capitol延伸被砍','4,850英里公共街道、41,000英亩沙漠公园']}]},
    planning_note:'内容来自 cities/phoenix/urban-planning.md（Claude Code）'}
  }
,
seattle: {
  name:'西雅图', en:'Seattle, Washington, USA · 强市长制',
  tags:['Claude Code','🏷️ Muse'], verdict:'富城市的穷税基：债务空间充裕，但税基绑在少数科技巨头身上，增收工具已用尽；舆情的火是治安体感。',
  attention:[
    {area:'公共安全体感',level:5,why:'政治生命线',evidence:'市长好感度57%→37%（4个月）；recall请愿已提交；可部署巡警仅约864人'},
    {area:'无家可归结果问责',level:4,why:'舆情焦点',evidence:'PIT 18,365人（+9%），露宿+21%；政策从买床位转向结果问责'},
    {area:'许可提速',level:4,why:'市长运营指标',evidence:'SDCI许可量较2019年-60%；许可储备从$80-100M崩到$30M'},
    {area:'JumpStart 与税基',level:4,why:'财政命脉',evidence:'前10大公司贡献约70%；Amazon岗位西雅图-10,000/Bellevue+12,000'},
    {area:'市中心复苏',level:3,why:'经济面子',evidence:'空置率约37%全美最差；一年流失13,000个岗位'}
  ],
  leverage:[
    {opp:'Permit-tech（许可预审/流程SaaS）',mapsTo:'许可提速',fit:'高',logic:'市长把SDCI许可时间当第一运营指标；SDCI已在试点4个审图AI，场景已开',risk:'政府采购流程长；工会与数据合规'},
    {opp:'公共安全数据透明度工具',mapsTo:'公共安全体感',fit:'中',logic:'NYU审计+38家企业联名，数据叙事有市场，帮市府自证清白',risk:'政治敏感；监控伦理争议'},
    {opp:'Downtown 空间活化运营',mapsTo:'市中心复苏',fit:'中',logic:'空置37%全美最差，业主急需方案，快闪/混合空间有议价权',risk:'治安体感不改善则流量起不来'},
    {opp:'无家可归服务效果追踪',mapsTo:'无家可归结果问责',fit:'中',logic:'问责时代效果数据值钱，非营利组织+政府都需要',risk:'数据获取难；付费方分散'}
  ],
  stats:[['81.7万','人口（+2.4%，首破80万）'],['$2.02B','FY2026一般基金'],['$175M','$488M','FY2027缺口/三年累计'],['$929M','GO债务（上限$75亿）']],
  tabs:{
    briefing:{title:'市长简报',sections:[
      {h:'城市快照',t:'kv',items:[['816,600','人口（WA OFM 2025-04估计，+2.4%）'],['强市长制','市长提预算、任免部门首长；9席市议会'],['Katie Wilson','2025-11击败Harrell（50.2%），2026-01-02就职，自称democratic socialist'],['$8.9B','2026采纳预算总拨款；一般基金约$2.0B'],['$9.1B','Wilson 2027-28提案（两年），补$175M缺口，不加新税，裁128岗'],['18,365人','King County无家可归者（2026点数，+9%）'],['$385.4M','$392.7M','JumpStart 2025预测/2026预期']]},
      {h:'经济结构',t:'list',items:['Amazon总部（西雅图）；2026-02裁员WA州2,303人','Microsoft总部在Redmond；AI2+UW构成AI研究生态','Wilson口径：区域400+AI公司、200+AI初创','风险：税基集中于少数大雇主，downtown经济"脆弱"']},
      {h:'如果我是市长：优先级',t:'list',items:['守住财政底盘：JumpStart情景压力测试，建雨天缓冲','住房供给+许可速度：把SDCI许可时间当第一号运营指标','无家可归：从"买床位"转向"结果问责"','公共安全与技术治理：SPD招聘vs监控技术的价值冲突','交通：$1.55B交通税交付+Vision Zero+Sound Transit $35B缺口','AI与数字治理：接住Harrell的AI Plan，按Wilson价值观调整']}]},
    briefing_note:'内容来自 cities/seattle/README.md（Claude Code，2026-10-03）',
    fiscal:{title:'财政深水区',sections:[
      {h:'一般基金收入：三年轨迹',t:'table',head:['财年','收入','说明'],rows:[['FY2024（实际）','$1,715.2M','—'],['FY2025（采纳）','$1,936.3M','—'],['FY2026（采纳）','$2,019.2M','跳升靠两项新税，非税基自然增长；评估值连降两年']]},
      {h:'2026年分税种',t:'table',head:['税种','FY2025','FY2026','变化原因'],rows:[['房产税','$388.3M','$402.5M','—'],['销售税','$344.0M','$401.9M','2025-10新增0.1%公共安全销售税'],['B&O税','$369.5M','$479.1M','Seattle Shield税改约+$81M（选民通过）']]},
      {h:'JumpStart：从印钞机到波动源',t:'list',items:['2021-2023大幅跑赢：2023年预测$223M→实际$315M','2024年首次明显低于预测（约$360M，低$47M）','2025-04 OERF把两年预测一刀下调$167M','前10大公司贡献约70%税收；股价涨≠税基涨（2024年三巨头股价+38~95%，纳税义务仅+13.9%）','Amazon西雅图-10,000人/Bellevue+12,000人（2020-2024）：岗位搬家直接侵蚀税基','资金用途漂移：2026年$211.2M转入一般基金；监督委员会2024-11被取消']},
      {h:'赤字对账：$175M vs $488M',t:'list',items:['$175M = FY2027单年缺口（市长"必须今年解决的政治数字"）','$488M = OERF预测的2027-2029三年累计（9月更新，恶化$113M）','对账：175+150+163≈488','Wilson填法：削减>$90M、裁128岗、住房办公室一次性转$65M、JumpStart预测上调$58M','声称2028年盈余$15.1M、到2030年无赤字（2019年以来首次）；批评者指仍依赖一次性资金']},
      {h:'债务与储备：债务不是压力源',t:'kv',items:[['$929M','未偿GO债务（上限$75亿，余量$65.7亿）'],['$12.5M','2026年GF还本付息（仅占GF 0.6%）'],['75.8%','SCERS充足率（资产$40亿）'],['$87.7M','紧急基金2026年目标'],['$30M','SDCI储备（从$80-100M崩塌）⚠️']]},
      {h:'一句话诊断',t:'text',ps:['财政病不是"没钱"（债务空间大、储备在回补），而是税基结构单一+增收工具用尽+支出刚性——"富城市的穷税基"。']}]},
    fiscal_note:'内容来自 cities/seattle/fiscal.md（🏷️ Muse，2026-10-03）',
    ai:{title:'数字 AI',sections:[
      {h:'2026年动态',t:'list',items:['首任AI Officer Lisa Qian（2025-12上任，前LinkedIn）','Q2 2026 AI使用报告：22个工具在用（SDCI 4个审图试点、SPD报案聊天机器人CaseX）','Wilson 2026-03暂停全市Copilot推广（与Harrell路线切割）','消防局自2023-12用Corti AI未公开分诊911电话（Seattle Times曝光）']},
      {h:'监控治理争议',t:'list',items:['3-19暂停RTCC摄像头扩张，委托NYU Policing Project审计','审计报告时间线出入（Wilson称9月底出，实际预计10月底）被质疑','世界杯期间短暂重启体育场区摄像头，7/7关闭','9-10有38家企业联名要求重启摄像头']},
      {h:'Harrell遗产',t:'list',items:['AI Plan 2025-2026、AI孵化器（2025-03启动）','Seattle IT FY2025 workplan、AI使用报告制度']}]},
    ai_note:'内容来自 cities/seattle/digital-ai.md（Claude Code）+ sentiment.md AI章节（🏷️ Muse）',
    sentiment:{title:'社媒舆情',sections:[
      {h:'总体：负面偏强，信任承压',t:'list',items:['Wilson好感度57%→37%（2026-04→08，商会/Fulcrum民调）','仅34%相信市府有有效治安计划','导火索：7-26 Bite of Seattle枪击案（3死4伤）+摄像头暂停争议','8-11罢免请愿已提交——上任不到一年','商界对无新税预算谨慎欢迎；进步派基本盘部分流失']},
      {h:'六大痛点',t:'table',head:['#','痛点','要点'],rows:[['1','公共安全/SPD人手','可部署巡警仅约864人；SPD预算$556M（+$68M）拉到1,250人编制'],['2','无家可归者','PIT 2026：18,365人（+9%），露宿11,829人（+21%）'],['3','住房可负担+建设停滞','许可量较2019年-60%；MHA减免或激活6,000+停滞单元'],['4','税收/商业环境','JumpStart冻结；King County 2025年WARN裁员预警+72%'],['5','市中心复苏','空置率约37%全美最差；一年流失13,000岗位'],['6','执政信任','摄像头政策反复；NYU审计时间线争议']]},
      {h:'市长视角一句话',t:'text',ps:['舆情的火是治安体感点的——好感度半年掉20个点、recall请愿已提交，新市长的政治资本消耗得比财政还快。']}]},
    sentiment_note:'内容来自 cities/seattle/sentiment.md（🏷️ Muse）；Reddit/X一手帖文未直接获取，以媒体+民调为代理',
    planning:{title:'城市规划',sections:[
      {h:'One Seattle Plan',t:'list',items:['2025-12通过、2026-01-21生效：全市上调密度、30个neighborhood centers','"能不能盖出来"取决于许可、融资成本和MHA费率','6起法律挑战待解']},
      {h:'交通',t:'list',items:['$1.55B交通税（Levy to Move继任者）交付','Vision Zero：2025年30人死亡、221人重伤，2030目标渐行渐远','Sound Transit $35B缺口：Ballard仅建到Seattle Center']}]},
    planning_note:'内容来自 cities/seattle/urban-planning.md（Claude Code）'}
  }
,
lishui: {
  name:'丽水', en:'Lishui, Zhejiang, China · 生态试点市',
  tags:['🏷️ Muse'], verdict:'生态优等生、财政困难生：GDP增速全省第二，但自给率仅32%、债务顶格、土地财政暴露。',
  attention:[
    {area:'债务到期兑付',level:5,why:'财政生存',evidence:'2025年到期还本90.89亿，约占预算收入46%；债务限额基本顶格'},
    {area:'生态产品价值实现',level:4,why:'全国试点招牌',evidence:'全国首个试点市；GDP/GEP双核算双考核全国独有'},
    {area:'旅游康养变现',level:4,why:'现金流最快',evidence:'机场2025-07-18通航；十五五GDP破3000亿目标'},
    {area:'AI 应用示范',level:3,why:'政策生态位',evidence:'山区县AI应用示范；市级规划仍是征求意见稿，窗口期'},
    {area:'城市存在感',level:3,why:'招商前提',evidence:'被浙江遗忘是跨平台共识；农民增收17连冠是现成故事'}
  ],
  leverage:[
    {opp:'碳汇与生态数据服务',mapsTo:'生态产品价值实现',fit:'中',logic:'全国独有双考核，方法学和数据服务可向外输出',risk:'碳汇交易仅26.37万，市场极早期'},
    {opp:'康养旅居产品',mapsTo:'旅游康养变现',fit:'高',logic:'机场通航+生态全省第一，流量变过夜消费是市长KPI',risk:'季节性强；需本地运营伙伴'},
    {opp:'数据标注基地',mapsTo:'AI 应用示范',fit:'中',logic:'百度智能云丽水基地已有，成本洼地+就业蓄水池',risk:'低附加值锁定'},
    {opp:'政策资金项目包装',mapsTo:'债务到期兑付',fit:'中',logic:'560亿政策资金要变成项目，帮政府把输血变造血',risk:'回款依赖财政，账期风险'}
  ],
  stats:[['253.9万','常住人口（+0.7万）'],['2301.4亿','GDP（+6.4%）'],['198.0亿','预算收入（+2.5%）'],['32.1%','财政自给率']],
  tabs:{
    briefing:{title:'市长简报',sections:[
      {h:'城市快照',t:'kv',items:[['253.9万','常住人口（+0.7万），连续三年微增；户籍268.5万'],['2301.4亿','GDP（+6.4%）；"十五五"目标破3000亿'],['198.0亿','一般公共预算收入（+2.5%，增速放缓）'],['617.7亿','一般公共预算支出（-5.0%，连降两年）'],['32.1%','财政自给率；转移支付依赖约75.3%'],['1396.95亿','债务余额（限额1397.02亿，基本顶格）'],['52979元','人均可支配收入（+5.9%）；农民增收17连冠全省第一']]},
      {h:'财政画像',t:'list',items:['自给率仅三成：每花10块，7块靠转移支付','债务限额基本用满，2025年到期还本90.89亿（约占预算收入46%）','土地基金收入一年掉27.4%，房地产开发投资连降20%+','GDP增速全省第二（2026上半年+6.4%）但财政全省最紧一档']},
      {h:'如果我是市长：Top 优先级',t:'list',items:['先止血：90.89亿到期还本逐笔锁定再融资方案','稳税基：装备制造+13.2%、数字经济制造业+11.8%是唯一增量','把560亿政策资金转化为产业项目（输血换造血）','旅游康养：机场通航，把流量变过夜消费','AI不等省考：先立本地可考核指标，占"山区县AI应用示范"生态位','GEP变现给十年耐心：碳汇交易仅26.37万','舆情无火缺存在感：讲好农民增收17连冠、高增速故事']},
      {h:'治理标签',t:'list',items:['全国首个生态产品价值实现机制试点市（2019）','GDP/GEP双核算双考核（全国独有）','"十五五"：GDP破3000亿、"2310"产业集群、AI赋能千行百业']}]},
    briefing_note:'内容来自 cities/lishui/README.md（🏷️ Muse，2026-10-03）',
    fiscal:{title:'财政深水区',sections:[
      {h:'三张表',t:'table',head:['项目','2024年','2025年'],rows:[['预算收入','193.20亿（+3.8%）','198.0亿（+2.5%）'],['预算支出','650.1亿（-0.5%）','617.7亿（-5.0%）'],['自给率','29.7%','32.1%'],['基金收入','294.61亿（-27.4%）','预期308.53亿（+4.7%）'],['债务余额/限额','1396.95/1397.02亿','—'],['转移支付依赖','75.3%','—']]},
      {h:'五个结构性病灶',t:'list',items:['土地财政加速暴露：基金收入-27.4%，全国性收缩指望不上V型反转','债务顶格：债务率723%，还本付息吃掉近半预算收入','税源单一：增值税-2.6%、个税-21.2%，税基跟地产走','转移支付依赖75.3%：560亿是输血不是造血','人口侵蚀税基：自然增长率-3.1‰，但常住人口连增三年是积极信号']},
      {h:'增长点评级',t:'table',head:['增长点','评级'],rows:[['生态产品价值实现（GEP）','长期主义，短期难补财政（碳汇交易仅26.37万）'],['数字经济/特色半导体','值得下注，见效慢（省内AI版图存在感弱）'],['旅游康养','现金流最快的一块（机场通航）'],['"山区26县"政策红利','输血窗口，用来换造血'],['新能源/低碳','观察']]},
      {h:'一句话诊断',t:'text',ps:['三高一低：高债务、高依赖、高土地敞口、低自给。']}]},
    fiscal_note:'内容来自 cities/lishui/fiscal.md（🏷️ Muse）',
    ai:{title:'数字 AI',sections:[
      {h:'政策：起步晚、未定型',t:'list',items:['《丽水市人工智能产业发展规划（2026-2030）（征求意见稿）》2026-08发布，截至10月仍是征求意见稿','落后杭州等先发城市至少一个身位','省内AI版图存在感弱：2024浙江AI产值破5700亿、杭州利润超七成，省级报道未提丽水']},
      {h:'落地：配套环节为主',t:'list',items:['经开区《打造和开放创新应用场景三年行动》（2025-11）：联动杭州AI计算中心、中国移动浙西南智算中心','百度智能云（丽水）基础数据产业基地：多模态数据标注','点创科技3套低空经济数据集上架省级数据专区','智慧流动医院：2025年1-11月下村2105次、服务6.1万人次','5G智慧渔业、AI饲喂等智慧农业']},
      {h:'考核判断',t:'list',items:['"发展驱动+政策跟随"，而非"考核驱动"：经开区先行（2025-11）、市级规划跟进（2026-08）','省综合考核中AI权重未披露[存疑]','建议：不等省考，先把"AI赋能千行百业"拆成本地可考核指标']},
      {h:'新市长必知',t:'list',items:['生态位：不拼大模型，占"山区县AI应用示范"','数据标注是最现实的AI就业蓄水池，警惕低附加值锁定','算力靠"联动杭州"而非自建']} ]},
    ai_note:'内容来自 cities/lishui/digital-ai.md（🏷️ Muse）',
    sentiment:{title:'社媒舆情',sections:[
      {h:'总体',t:'list',items:['正面标签统一："江南最后的秘境""浙江绿谷"，生态全省第一','海外社媒（IG/FB/Threads）实测：4条相关内容全是旅游向，无民生讨论','"存在感低/被浙江遗忘"是跨平台最大共识']},
      {h:'六大痛点',t:'table',head:['痛点','要点'],rows:[['就业','高薪岗位少，年轻人倾向去杭州、宁波'],['房价收入比','观感"相对收入不低"，缺硬数据[存疑]'],['交通','机场2025-07-18通航被寄予厚望；衢丽铁路预计2027建成'],['教育医疗','高校仅2所；智慧流动医院部分缓解山区就医难'],['年轻人外流','户籍比常住多约15万人；但常住连增三年，回流企稳'],['工业基础','"九山半水半分田"，结构性短板']]},
      {h:'市长视角一句话',t:'text',ps:['舆论场没有火，缺的是存在感。机场通航+"十五五"3000亿目标是提存在感的两个抓手。']}]},
    sentiment_note:'内容来自 cities/lishui/sentiment.md（🏷️ Muse）；国内社媒（微博/抖音/小红书）未系统抓取',
    planning:{title:'城市规划',sections:[{h:'说明',t:'note',text:'丽水卷 urban-planning.md 待补充。目前已知：丽水机场2025-07-18通航；高铁约1.5小时到杭州；衢丽铁路预计2027年建成；莲都区"三江口"教科人一体化发展示范区。'}]}
  }
}
};

const COMPARE = {
  head:['指标','杭州 🇨🇳','凤凰城 🇺🇸','西雅图 🇺🇸','丽水 🇨🇳'],
  rows:[
    ['人口','1270.0万（+7.6万）','166.5万（全美第5）','81.7万（+2.4%）','253.9万（+0.7万）'],
    ['GDP/经济规模','23011亿元（+5.2%）','都会区经济强劲（TSMC $265B）','—（区域AI重镇）','2301.4亿元（+6.4%）'],
    ['年度预算收入','2693.2亿元（+2.0%）','GF $2.19B','GF $2.02B','198.0亿元（+2.5%）'],
    ['财政结构','税收占85.5%，质量优但增速仅0.8%','州共享依赖35%，命门在州议会','JumpStart依赖：前10大公司贡献~70%','自给率32.1%，转移支付依赖75.3%'],
    ['债务','余额5089.8亿（≈收入1.9x）','GO评级Fitch AAA；养老金$50亿UAAL','GO $929M（上限$75亿），债务非压力源','余额1397亿顶格，债务率723%'],
    ['核心风险','土地出让下滑（863→635亿）','州政策风险+养老金长期负债','税基集中+岗位外迁Bellevue','土地财政暴露+债务顶格'],
    ['一句话诊断','AI+先发，财政紧平衡','纪律在线，雷在州议会和精算表','富城市的穷税基','生态优等生、财政困难生']
  ],
  note:'口径说明：中美财年与统计口径不同，数字仅供横向体感，不做严格可比。西雅图/凤凰城数字多为索引抓取；杭州/丽水为官方公报。'
};

/* ---------- rendering ---------- */
const app = document.getElementById('app');
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;')}

function tagHtml(tags){
  return '<div class="tags">'+tags.map(t=>
    '<span class="tag'+(t.includes('Muse')?' muse':'')+'">'+esc(t)+'</span>').join('')+'</div>';
}
function sectionHtml(s){
  let h='<h3>'+esc(s.h)+'</h3>';
  if(s.t==='kv') return h+'<div class="kv">'+s.items.map(i=>'<div><b>'+esc(i[0])+'</b><span>'+esc(i[1])+'</span></div>').join('')+'</div>';
  if(s.t==='list') return h+'<ul>'+s.items.map(i=>'<li>'+esc(i)+'</li>').join('')+'</ul>';
  if(s.t==='table') return h+'<div class="cmp-scroll"><table class="cmp"><thead><tr>'+s.head.map(x=>'<th>'+esc(x)+'</th>').join('')+'</tr></thead><tbody>'+s.rows.map(r=>'<tr>'+r.map(c=>'<td>'+esc(c)+'</td>').join('')+'</tr>').join('')+'</tbody></table></div>';
  if(s.t==='text') return h+s.ps.map(p=>'<p>'+esc(p)+'</p>').join('');
  if(s.t==='note') return '<div class="note">'+esc(s.text)+'</div>';
  return h;
}
function renderHome(){
  document.querySelectorAll('.nav a').forEach(a=>a.classList.toggle('active',a.dataset.nav==='home'));
  app.innerHTML =
    '<div class="hero"><h1>当一天市长，<em>先看清这座城</em></h1>'+
    '<p>Virtual Mayor 虚拟市长调研的可视化：四座城市的财政家底、AI 布局与社媒舆情，全部站在市长视角写成。点一张卡片进去看完整简报，含市长注意力地图与创业借力点。</p></div>'+
    '<div class="cards">'+Object.keys(CITIES).map(id=>{const c=CITIES[id];
      return '<div class="card"><h2>'+esc(c.name)+'</h2><div class="en">'+esc(c.en)+'</div>'+tagHtml(c.tags)+
      '<div class="stat-grid">'+c.stats.map(s=>'<div class="stat"><b>'+esc(s[0])+'</b><span>'+esc(s[1])+'</span></div>').join('')+'</div>'+
      '<div class="verdict">'+esc(c.verdict)+'</div>'+
      '<a class="go" href="#/city/'+id+'">进入简报 →</a></div>'}).join('')+'</div>';
}

const XTABS={attention:'注意力地图',leverage:'创业借力'};
function attentionHtml(c){
  return '<h3>市长注意力地图</h3><p style="font-size:13px;color:var(--muted)">按注意力强度排序，证据来自各城市调研文档（财政/舆情/市长优先级）。</p>'+
  c.attention.map((a,i)=>'<div style="margin:14px 0"><div style="display:flex;justify-content:space-between;gap:10px;font-size:14px;flex-wrap:wrap"><b>'+(i+1)+'. '+esc(a.area)+'</b><span style="color:var(--muted);font-size:12.5px">'+esc(a.why)+'</span></div>'+
  '<div style="background:#e9e4d8;border-radius:6px;height:8px;margin-top:6px"><div style="width:'+(a.level*20)+'%;background:var(--accent);height:8px;border-radius:6px"></div></div>'+
  '<div style="font-size:13px;color:var(--muted);margin-top:4px">'+esc(a.evidence)+'</div></div>').join('')+
  '<div class="note">注意力强度为研究者按文档证据的定性判断（1-5）。</div>';
}
function leverageHtml(c){
  return '<h3>创业借力点</h3><p style="font-size:13px;color:var(--muted)">机会如何契合市长注意力：顺着城市议程借力，而不是逆着卖方案。</p>'+
  '<div class="cmp-scroll"><table class="cmp"><thead><tr><th>机会</th><th>对接注意力</th><th>契合度</th><th>借力逻辑</th><th>风险</th></tr></thead><tbody>'+
  c.leverage.map(l=>'<tr><td><b>'+esc(l.opp)+'</b></td><td>'+esc(l.mapsTo)+'</td><td>'+esc(l.fit)+'</td><td>'+esc(l.logic)+'</td><td>'+esc(l.risk)+'</td></tr>').join('')+
  '</tbody></table></div><div class="note">契合度为定性判断，非投资建议。</div>';
}
function renderLeverageIndex(){
  document.querySelectorAll('.nav a').forEach(a=>a.classList.toggle('active',a.dataset.nav==='leverage'));
  let rows='';
  Object.keys(CITIES).forEach(id=>{const c=CITIES[id];
    c.leverage.forEach(l=>{rows+='<tr><td><b>'+esc(c.name)+'</b></td><td>'+esc(l.mapsTo)+'</td><td><b>'+esc(l.opp)+'</b></td><td>'+esc(l.fit)+'</td><td>'+esc(l.logic)+'</td></tr>';});
  });
  app.innerHTML='<div class="hero"><h1>创业 <em>借力总览</em></h1><p>以市长注意力为坐标：机会顺着城市议程走，才能借到力。每行一个借力点。</p></div>'+
  '<div class="cmp-scroll"><table class="cmp"><thead><tr><th>城市</th><th>对接的注意力</th><th>借力机会</th><th>契合度</th><th>为什么契合</th></tr></thead><tbody>'+rows+'</tbody></table></div>'+
  '<div class="note">借力逻辑来自各城市调研文档；契合度为定性判断，非投资建议。</div><div style="margin-bottom:46px"></div>';
}

function renderCity(id,tab){
  const c=CITIES[id]; if(!c){location.hash='#/';return}
  document.querySelectorAll('.nav a').forEach(a=>a.classList.toggle('active',a.dataset.nav==='home'));
  const tabs=[...Object.keys(c.tabs).filter(k=>!k.endsWith('_note')),'attention','leverage'];
  tab=tabs.includes(tab)?tab:tabs[0];
  const title=k=>c.tabs[k]?c.tabs[k].title:XTABS[k];
  let body='';
  if(tab==='attention') body=attentionHtml(c);
  else if(tab==='leverage') body=leverageHtml(c);
  else {const t=c.tabs[tab]; body=t.sections.map(sectionHtml).join('')+(c.tabs[tab+'_note']?'<div class="note">'+esc(c.tabs[tab+'_note'])+'</div>':'');}
  app.innerHTML =
    '<a class="back" href="#/">← 返回城市列表</a>'+
    '<div class="city-head"><h1>'+esc(c.name)+' <span class="en">'+esc(c.en)+'</span></h1>'+tagHtml(c.tags)+
    '<div class="verdict" style="max-width:720px">'+esc(c.verdict)+'</div></div>'+
    '<div class="tabs">'+tabs.map(k=>'<a class="tab'+(k===tab?' active':'')+'" href="#/city/'+id+'/'+k+'">'+esc(title(k))+'</a>').join('')+'</div>'+
    '<div class="panel">'+body+'</div>';
}
function renderCompare(){
  document.querySelectorAll('.nav a').forEach(a=>a.classList.toggle('active',a.dataset.nav==='compare'));
  app.innerHTML='<div class="hero"><h1>财政 <em>横向对比</em></h1><p>四城财政体感对照：中美财年与统计口径不同，数字仅供横向体感，不做严格可比。</p></div>'+
  '<div class="cmp-scroll"><table class="cmp"><thead><tr>'+COMPARE.head.map(h=>'<th>'+esc(h)+'</th>').join('')+'</tr></thead><tbody>'+
  COMPARE.rows.map(r=>'<tr><th>'+esc(r[0])+'</th>'+r.slice(1).map(c=>'<td>'+esc(c)+'</td>').join('')+'</tr>').join('')+
  '</tbody></table></div><div class="note">'+esc(COMPARE.note)+'</div><div style="margin-bottom:46px"></div>';
}
function renderAbout(){
  document.querySelectorAll('.nav a').forEach(a=>a.classList.toggle('active',a.dataset.nav==='about'));
  app.innerHTML='<div class="about"><h2>关于 VisualLass</h2>'+
  '<p>VisualLass 是 Virtual Mayor（虚拟市长）调研项目的可视化前端。Virtual Mayor 模拟作为新上任的市长，深度理解城市规划与城市数字化 / AI。</p>'+
  '<ul><li>🏷️ <b>Muse</b> 标签 = Muse 做的调研 vertical（财政深水区、社媒舆情、丽水全卷）</li>'+
  '<li>无标签 = Claude Code 做的调研（城市快照、城市规划、数字 AI）</li>'+
  '<li>数字后标注 [官方]/[新闻]/[存疑]，不确定数字已标出</li>'+
  '<li>完整文档与来源见 <a href="'+REPO+'">GitHub 仓库</a></li></ul></div>';
}
function route(){
  const h=location.hash||'#/';
  const m=h.match(/^#\/city\/(\w+)(?:\/(\w+))?/);
  if(m) renderCity(m[1],m[2]);
  else if(h==='#/leverage') renderLeverageIndex();
  else if(h==='#/compare') renderCompare();
  else if(h==='#/about') renderAbout();
  else renderHome();
  window.scrollTo(0,0);
}
window.addEventListener('hashchange',route);
route();
