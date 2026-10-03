# 数字与 AI 治理 (Digital & AI) — 市长视角

> 研究日期：2026-10-03。来源见 [sources.md](./sources.md)。**[待核实]** 表示未确认。

## 1. 现状速览

- **Seattle IT (ITD)**：负责城市技术、隐私、数据与 AI。IT 总监 **Rob Lloyd 于 2026-02 辞职**（OPB）。
- **AI 政策时间线**：
  - **2023-04**：Seattle 发布 Generative AI 政策（全美最早之一），**2023-10** 迭代并全面实施；七项原则：innovation、accountability、reliability、fairness、privacy、explainability、security。Seattle IT 自己评价该版"以合规为中心，没有战略方向"。
  - **2025-09**：Harrell 发布 **2025–2026 AI Plan** + **第二代 AI Policy**，范围从 GenAI 扩展到所有 AI；四大支柱：**Data Excellence、Infrastructure & Compliance、Workforce Upskilling、Partnerships**；优先领域：公共安全、加速许可与住房建设、市民响应与信任、无障碍与白话沟通；要求**人工复核 (HITL)**，大量 AI 文本需署名。培训三级：Fundamentals / Approaches / Solutions。
  - **2026-02/03**：Wilson 就职后**暂停** Copilot 全市推广（原定 2026 年 2 月底）。试点：2025 年 9–11 月、两批共 **500 名**员工；185 名受访者好评，平均每周节省 **2.5 小时**；另有 **>18% 的 12,000 名员工**曾在工作设备上使用未批准的 AI 工具（ChatGPT、Gemini、Claude 等）。
  - **2026-05-04**：Wilson 发布 AI 愿景 "centering human flourishing and serving the public good"：全体员工可使用 **Microsoft Copilot Chat**，**未批准 AI 工具被封锁**，培训鼓励但不强制；设 **City AI Officer（CAIO）**；一年内公布面向公众的 AI 框架，四年内形成完整内部 AI 政策。另有媒体称行政命令含 AI Advisory Board 和各部门 AI Liaison（三层治理）——**该细节仅见于一个二手来源，[待核实]**。
- **Council 监督**：2025 年秋季预算过程中，议会通过 SLI **ITD-010S-A**，要求 Seattle IT **季度**报告 AI 使用（Q1 4/1、Q2 7/1、Q3 10/1、Q4 12/31/2026）。Sponsor：Councilmember Alexis Mercedes Rinck。
- **Q1 2026 AI Usage Report（已下载）要点**：**22 个已批准在用 AI 软件；16 个 AI 试点**（1 个即将开始、4 个执行中、8 个已完成有决定、1 个暂停、2 个评审中）；**17 个部门**询问新 AI 软件，**6 个部门**在跑试点；**AI Innovation Fund $400,000**（2025 年终补充预算，一次性配套资金）；**$750,000** 拨给 2026 Construction and Inspections（许可）相关 AI；Copilot Chat 在现有 Microsoft 合同下**无额外许可费**；PowerBI/Tableau 内置 AI（如 Einstein）尚未做安全隐私评估；**2026-01 与 UW 签订合作协议**；MITS（Mayor's IT Subcabinet）AI Workgroup 于 2025 年底成立，按 4 条标准评审项目（价值、安全隐私检查、可量化服务改善、持续监控）。
- **使用中的工具**：Microsoft Copilot Chat、Copilot Studio；出现过 Amazon Q、Claude、ChatGPT 的试点/使用提及；CaseX 即将上线。

## 2. 隐私与监控 (Privacy Program & Surveillance Ordinance)

- **Surveillance Ordinance (SMC 14.18)**，2017-09-01 生效：城市获取"监控技术"前需议会批准；现有技术需经 ordinance 批准；CTO 每季度向议会报告技术获取清单；每项技术要有 **Surveillance Impact Report (SIR)**。
- **规模**：Seattle IT Privacy Office 2025 年 Q1 收到 **45 项**隐私评审请求。2025 年 9 月 Master List：**SPD 13 项 + SDOT 1 项 = 14 项**监控技术。
- **近期争议（Wilson 任内）**：
  - **2026-03-19**：Wilson 暂停 SPD 车载 **ALPR** 数据收集，并暂停议会去年批准的 **65 台 CCTV 扩张**。
  - 议会通过法案，赋予市长在认为数据可能被滥用时**暂停**监控项目的权力，并限制移民问询（2026-04）。
  - 议会公共安全主席 Bob Kettle 要求 **CCTV / Real-Time Crime Center (RTCC) 审计在 6 月世界杯前完成**；OIG 发布 TAPS（Technology Assisted Public Safety）审计。ACLU-WA 反对。
  - 议会澄清 ICE/DHS 不能以移民目的访问 ALPR 数据（KOMO，以议会说法为准）。
- **市长要点**：在数据共享协议中，明确**联邦移民执法排除条款**；定期公布 ALPR 保留期限；在法律允许下做第三方审计。

## 3. 开放数据 (Open Data)

- **data.seattle.gov**（Socrata）：包含 Issued Building Permits、Land Use Permits（2005 起）、Rent and Income Restricted Housing、Housing Tenure and Costs 等数据集；OPCD/OH 发布仪表盘（如 Affordable Home Pipeline Development Dashboard）。
- **机会**：用开放数据公开"许可天数"、AI 清单、监控技术使用报告。
- **缺口**：本次未检索到最新 Open Data Plan/政策原文 **[待核实]**。

## 4. AI 用于政府的具体用例与优先级

- AI Plan 优先：加速许可与住房建设（与 One Seattle 实施直接相关）、公共安全、市民响应、无障碍。
- 具体用例（Q1 2026 报告提及）：Vision Zero 相关联邦资助项目、模板化沟通、数据分析 (BI)。完整清单见 Appendix A（22 套软件/16 试点），**建议市长团队逐项阅读**。
- 注意：**许可 AI（审图辅助）与住房产能直接挂钩**，$750K 的投入应设置公开的前后对比指标（周期天数）。

## 5. 生态 (Microsoft / Amazon / AI2 / UW)

- **Microsoft**：Redmond 总部，城市主要供应商（M365、Copilot）。**供应商锁定风险**：Copilot Chat 无额外许可费，但数据治理、退出成本需评估。
- **Amazon**：西雅图最大私营雇主、JumpStart 最大缴纳方之一；Amazon Q 在城市试点中出现；Amazon 的 AI 驱动裁员（"ongoing AI push"，KOMO）直接减少 PET 收入，**城市同时是 AI 的监管者、使用者与受害税基**。
- **AI2 (Allen Institute for AI)**、**UW**：UW 与 Seattle IT 2026-01 合作协议；Seattle University 也参与学术合作。Wilson 数据：区域 400+ AI 公司、200+ 初创。具体 AI2 与市府合作细节 **[待核实]**。
- **Seattle 社区技术咨询委员会 (CTAB)** 参与 AI 政策制定。

## 6. 华盛顿州层面

- **WA AI Task Force**（SB 5838，2024 年设立，19 名成员、8 个小组委员会、75+ 次会议）：初期报告 2024-12、中期报告 2025-12、**最终报告 2026-07**。累计 **11 项**政策建议；2025–26 立法年议员对 8 项提出议案，**至少 4 项全部或部分成法**：伴侣型 AI 聊天机器人监管、医疗预授权透明、执法使用 AI 披露、AI 生成 CSAM 执法。2026-04-24 最终会议新增：设立永久性 AI 与新兴技术咨询机构、监管伴侣 AI。AG：Nick Brown。
- **含义**：市级 AI 政策应与州法对齐；**执法使用 AI 披露**直接影响 SPD。

## 7. 新市长要知道的 10 件事

1. Wilson 已经定了 AI 基调（Copilot 开放、封锁未批准工具、CAIO）。前任遗留的 AI Plan 仍在，但 Q2 起报告将反映 Wilson 战略。
2. Copilot 的价值来自员工实证（2.5 小时/周），但 **"影子 AI"**（>18% 员工）是实际风险。
3. IT 总监 2026-02 离职，注意领导力与连续性。
4. 议会通过 SLI 要求季度 AI 报告，意味着**信息透明已成为议会杠杆**。
5. 监控技术：市长现在有**暂停权**，但也承担政治后果。
6. AI 与劳工：AI Plan 承诺与劳工伙伴合作、保护工作；工会协议是真实约束。
7. 许可 AI 是与住房最相关的数字投资点。
8. PET 税基：AI 带来的裁员会冲击 JumpStart。
9. 州法：AI Task Force 建议正在成为法律，注意合规。
10. 数据开放不是附加项：许可、住房、监控都需要机器可读发布。

## 8. 局限

- 采购金额（Microsoft 合同总额）、AI2 合作、Open Data Plan 的原文本次未取得。
- 部分来源（GeekWire）403，只用标题/摘要。
