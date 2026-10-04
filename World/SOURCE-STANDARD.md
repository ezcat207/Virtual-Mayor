# World 研究：出处与 Tag 标准（所有文件必须遵守）

## 1. 行内引用
每个事实/数字后面跟 `[W-xx]`（xx = 该文件对应 sources 文件里的编号，如 `[W-03]`、中国 `[C-07]`、北美 `[N-12]`、方法 `[M-02]`）。
无来源的判断必须标 `#inference` 或 `#speculation`。

## 2. 论断 Tag（claim tags，放在行末）
- `#fact` 来源直接陈述
- `#estimate` 来源的估计/模型值（说明口径）
- `#calc` 我们自己算的（写出公式）
- `#inference` 基于事实的推论
- `#speculation` 推测，无直接证据

## 3. 来源条目格式（sources/*.md）
```
### [W-01] 标题
- 出处：机构/作者，发布日期，访问日期 2026-10
- URL：https://...
- 本地副本：pdfs/xxx.pdf（如有）
- Tags：#type/official|academic|ngo|news|company|aggregator|primary-text  #conf/high|med|low  #region/world|china|northamerica  #topic/income|ai-exposure|labor|digital-divide|gig|data-labeling|...
- Use（用在哪、支撑什么）：具体到文件+论断，例如"01-world-income-map.md §2 支撑'全球 X% 人口日收入低于 $Y'"
- 备注：局限、口径问题、是否只读了摘要
```
`#conf`：high=原始官方/同行评议且读过正文；med=可信二手或只读摘要；low=聚合站/单一来源/记忆。

## 4. 规则
- 读过正文的才可标 high；只看到搜索摘要的必须标 med/low 并在备注写"仅摘要"。
- 数字写明年份、口径（PPP/名义、家庭/个人、税前/税后）。
- 冲突数字并列写出，不要默默选一个。
- 能下载的开放 PDF 放 `World/pdfs/`。
