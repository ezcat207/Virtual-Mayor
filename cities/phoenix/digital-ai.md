# 数字政府与 AI（凤凰城 · 市长视角）

> [S#] 对应 `sources.md`。(?) = 需核验。

## 1. 一页结论
- 凤凰城在**透明度/数据**方面基础较好（Open Data portal、Performance Dashboard、Bloomberg What Works Cities 铂金级认证），在 **AI 治理**方面已有公开的 GenAI Code of Conduct 与应用清单，但公开文件偏 "原则"，缺少可核查的**影响评估、审计、采购条款**（未在公开页面找到 (?)）。
- 最值得注意的真实案例：**Phoenix PD 的 AI 非紧急电话分流（CallTriage）**——$643K，2025-08-13 上线，供应商 Versaterm，引发治理争议（该产品曾在 Portland 被停用）[S55][S56]。
- 对新市长：AI 是 "可控的小成本效率工具 + 重大声誉风险"。先治理、后规模化。

## 2. 市府 GenAI 政策
- 页面 "City of Phoenix Use of Generative Artificial Intelligence"（ITS 部门）：发布 **Code of Conduct**，原则包括：尊重隐私与不歧视、**透明披露**使用 AI、**可解释性**、数据保护合规、**数据最小化**、**以人为中心**（AI 补充而非取代人类判断）、合法合规、创新与伦理价值一致 [S34]。
- 治理：称所有 GenAI 使用都经过 "rigorous technical review and committee approval process"；具体委员会组成、频率、公开记录**页面未说明** [S34]。
- 公开应用清单（约 23 个）包括：Synthesia（培训视频）、**Copilot Studio**（虚拟助手）、Grammarly、GitHub Copilot、**ServiceNow Assist**、Adobe Firefly/Express/Acrobat、Webex AI、**Pano AI（野火探测）** [S34]。生效日期页面未写 (?)。
- 对比：州级政策 Arizona ADOA/ASET **P2000 Generative AI Policy**（2024-10 版，2026-02 更新版存在，PDF 抓取被拒，仅见搜索结果）[S57]。市府政策是否引用州政策 (?)。
- **差距清单（市长可推动）**：① 公开 AI 使用年度登记簿（含风险等级）；② 采购标准条款（数据不用于训练、可审计、可退出）；③ 对居民面向的 AI 强制 "你正在与 AI 对话" 披露与转人工通道；④ 事件上报机制。

## 3. 居民面向的 AI / 数字服务
| 项目 | 说明 | 来源/置信度 |
|---|---|---|
| **Phoenix PD CallTriage** | 非紧急（Crime Stop）电话由对话式 AI 应答，支持 36 种语言；可短信发送在线报案链接、转接话务员、或转 PHX C.A.R.E.S.、myPHX311、Arizona Humane Society 等；$643K，由警察通信预算出资，Vice Mayor Ann O'Brien 推动；2025-08-13 上线 | [S55] 高-中 |
| **311 / myPHX311** | 311 聊天机器人：与 ASU Smart City Cloud Innovation Center + AWS 共同设计的开源机器人，自 2020 年起建设；现网上线状态/覆盖率 (?) | [S58] 中 |
| **Open Data Portal** | phoenixopendata.com；"open by default"（除 PII/机密）；含财务、Sky Harbor、Google Transit、地块、自行车道、能耗等；展示 City Manager Performance Dashboard、ESG Dashboard、Police Use of Force Dashboard | [S59] 高 |
| **Performance Dashboard** | 2022-06 上线，170+ 指标、31+ 部门 | [S33] 高 |
| **Kando Pulse 污水监测** | AI 传感器检测下水道污染物/工业排放；美国第二个使用的城市 | [S33] 高 |
| **Sky Harbor 电致变色智能窗** | AI 调光，节能最多 20% | [S33] 高 |
| **智能饮水站** | 近公交/公园，24/7 远程用水监测与漏损检测，与热应对联动 | [S33] 高 |
| **AR 开发可视化工具** | 居民可预览拟建项目 | [S33] |
| **Digital Equity Centers (The Hive)** | 两处免费计算机/3D 打印/数字技能 | [S33] |
| **Innovate PHX Challenge** | Office of Innovation 的黑客松 | [S33] |
| **野火 AI 探测 Pano AI** | 列于 GenAI 清单 | [S34] 中 |

## 4. 自动驾驶 / Waymo
- 覆盖 >350 平方英里（Phoenix 都会区），含 Sky Harbor、Scottsdale Airpark；2026-08 扩 55 平方英里至 Gilbert/Chandler/San Tan Ranch，将接入 Mesa Gateway [S54]。
- 高速路服务：2025-11 起，**2026-05 暂停**（施工区问题），2026-07 起逐步恢复 [S54]。
- **监管现实**：AV 主要受州法管辖；市能控制的是：机场准入合同、路缘/上下客区、数据共享、事故/应急协议（与 Phoenix Fire/Police）、与公交整合。
- 市长议题：减少停车需求（可释放土地）vs. 公交客流分流、就业冲击（网约车司机）、安全事件响应、对盲人/残障友好。

## 5. Arizona 州级 AI 举措
- **AI Steering Committee**：Gov. Hobbs 2025-05-09 宣布，19 名成员（含本地政府代表），任务：政策框架、采购/治理模型、AI 素养；初步建议预计 2026 春 [S60]。（建议是否已发布 (?)）
- **Arizona Capacity and Efficiency Initiative**（2026-03）：以 AI 等手段节约 $4,000 万–1 亿，州政府效率计划 [S61]。
- **Future Economy AZ**（Office of Strategic Innovation）[S62]（页面未深读 (?)）。
- **数据中心**：Arizona 地下水与 AI 数据中心供水议题；Phoenix 分区规则见 `urban-planning.md` §8 [S18]。
- 对市长的含义：州政策是下限；市属 AI 采购可借州合同，但**不要因州层面宽松而放松披露**。

## 6. 新市长必须知道的 10 件事
1. 市府已在用约 23 个 GenAI 应用，原则文本好，**操作层细则不透明**——先要一份内部清单和风险分级。
2. Phoenix PD CallTriage 是 "最高关注度" 项目：要求 3 个月/6 个月评估（转人工率、误分类、语言覆盖、投诉）并公开。同类产品曾在 Portland 停用 [S56]。
3. 数据：Open Data 以门户（URL 结构疑似 CKAN，未验证）为主，**数据质量与更新频率**（非仅数量）是改进点。
4. Performance Dashboard 可以直接成为市长 "热 / 水 / 住房" 公开计分卡的底座。
5. 311 机器人项目（ASU+AWS）自 2020 年起，评估其真实 containment rate。
6. 采购：避免单一厂商锁定（ServiceNow、Microsoft Copilot、Adobe 已是多供应商）；要求合同条款禁用居民数据训练模型。
7. 隐私与记录法：Arizona Public Records Law 适用于 AI 生成的内部记录与提示词 (?)——需 City Attorney 澄清。
8. 劳动力：AI 提升效率应通过 attrition 而非裁员；与工会（预算中已有 $50M 薪酬谈判）沟通。
9. 热与水场景的 AI 价值最高：热预警/热点预测、漏损检测、Kando 污水监测、Pano AI 野火探测。
10. 数字公平：The Hive 等中心；多语言（西班牙语为主）；机器人必须有人工兜底。

## 7. 未找到 / 待补
- 市级 AI 策略负责人（CIO/CDO）与 AI 治理委员会成员。
- 2026 年 AI 项目预算行项（未在 FY26-27 Trial Budget 中检索）。
- Phoenix 311 的 AI 在 2026 年的现状。
- Waymo 与市府的合同条款与数据共享安排。
