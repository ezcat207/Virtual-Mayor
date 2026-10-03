# How to benchmark and learn from competitors

Principle: you are mostly looking for (1) who pays and how much, (2) what words buyers search for, (3) where those buyers gather. Do not copy game features first.

## Step 1: Build the list (day 1)
Use competitors.md. Tag each as Game / Media / AI-roleplay / Pro tool / GovTech / Exam-prep / China.

## Step 2: Traffic and audience (day 1-2)
- Similarweb free (https://www.similarweb.com): enter each domain; record monthly visits, top countries, traffic sources (search/direct/social), top referring sites and similar sites. Free tier shows ~3 months and top-level data only. A local skill "similarweb-scraper" exists in this environment and can batch this.
- Steam: SteamDB / SteamSpy / Steam Charts for Democracy 4, Cities: Skylines (owners, concurrent players, reviews). Read the negative reviews: they list unmet needs.
- App stores: Hello History / Character.AI review counts and complaints.
- Treat all numbers as +/-50 percent. Record them in a sheet with date and source.

## Step 3: SEO and keyword demand (day 2-3)
- Google Trends (the local google-trends skill) for: "city planning game", "be a mayor game", "zoning analysis AI", "AICP exam", "how to become a planner", "城市规划 考研", "注册城乡规划师".
- Free keyword tools: Google autocomplete, People Also Ask, AnswerThePublic, Ahrefs Webmaster Tools / Keyword Generator (free), Ubersuggest limited free.
- For each competitor's top landing page, read the title tag and H1; note which keywords they target. Check ranking pages for "[city] zoning", "[city] budget explained": these are programmatic SEO opportunities (one page per city).
- Check whether AI answers (ChatGPT, Perplexity) cite competitors for queries like "what does a mayor do in [city]": this is the GEO angle.

## Step 4: Pricing pages (day 2)
- Screenshot and tabulate: TestFit, Giraffe, Forma, Archistar, Planetizen AICP, Hello History, Character.AI, Strong Towns, Polimorphic (request quote with a fake small-town persona if ethical, or read public procurement documents).
- Public procurement is a gold mine: search city council agendas / contract PDFs / BidNet for "Granicus", "CivicPlus", "Polimorphic" to get real contract values.
- Pattern to extract: individuals pay $10-$30/mo for entertainment/education, $100-$350/mo for professional zoning/feasibility tools, $1k-$15k/yr per seat for developer tools, $5k-$35k per government contract.

## Step 5: Communities (day 3-4)
Read, do not pitch yet.
- Reddit: r/urbanplanning, r/CitiesSkylines, r/Urbanism, r/YIMBY, r/stupidpol-free policy subs, r/civicservice, r/gis, r/realestateinvesting, r/MPA (check which exist and size).
- Discord: Cities Skylines servers; Strong Towns local conversation groups; Planetizen forum.
- LinkedIn: search "urban planner AI", "GovTech", "civic tech"; note recurring posts and engagement.
- China: Bilibili comments on planning exam videos, 知识星球 planning groups, 小红书 "城市规划" notes, Zhihu topics.
- Record the top 20 repeated questions/pain points verbatim.

## Step 6: Product teardown (day 4-5)
Sign up and use: Democracy 4 demo, Cities: Skylines (or watch), Hello History, Character.AI (build a "mayor" persona), Giraffe free plan, Archistar free plan, iCivics mayor game. Note onboarding, time-to-first-value, paywall position, what data is shown.

## Step 7: Customer discovery interviews (week 2, most important)
Competitor data cannot tell you willingness to pay. Do 15-20 interviews, 5 each across 3-4 personas in business-paths.md. Script: what did you do last time you had to learn a new city's rules; what tools do you pay for; what does a bad miss cost; would you pay $X.

## Step 8: Decide
Score each path (business-paths.md) on: buyer reachable, existing budget, pain frequency, AI-leverage, competition. Kill paths with no evidence by day 30.

## Tracking sheet columns
Competitor | URL | Segment | Price | Traffic (source/date) | Top keywords | Community links | Strength | Gap | Partner/Threat
