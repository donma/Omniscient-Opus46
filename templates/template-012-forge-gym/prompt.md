# Forge 健身工廠 — AI 生成提示詞

## 使用說明
將以下提示詞完整複製，貼入 Claude、ChatGPT 或任何 AI 助理，即可生成與本模板相同風格的完整網站。

---

## 完整提示詞

請為「Forge 健身工廠」設計並生成一套完整的高強度健身房網站，包含 12 個獨立 HTML 頁面。每個頁面必須是完全獨立的 HTML 文件（inline CSS，不依賴外部 CSS 檔案），並包含完整的 header、footer 和 RWD 手機選單。所有內容以繁體中文撰寫。

---

### 品牌設定

- **品牌名稱**：Forge 健身工廠
- **英文名**：FORGE GYM
- **副標語**：鍛造更強的自己 — Forge Your Limits
- **地點**：台北市信義區松仁路 100 號 B1（台北 101 旁）
- **創立年份**：2019 年
- **定位**：台北信義區旗艦高強度健身中心，200 坪專業器材，主打 CrossFit 功能性訓練、重量訓練與搏擊格鬥三大領域，是台北商業菁英與運動愛好者首選的高端健身場所
- **規模**：200 坪空間 / 800+ 會員 / 15 位專業教練 / 每週 100+ 堂課程
- **合作機構**：CrossFit Level 2 認證訓練中心、中華奧林匹克舉重協會認可場地
- **聯絡資訊**：
  - 電話：+886-2-2723-6688
  - Email：train@forge-gym.tw
  - 地址：台北市信義區松仁路 100 號 B1（101/世貿站步行 5 分鐘）
  - 開放時間：週一至週五 06:00–23:00 / 週六 07:00–21:00 / 週日 08:00–20:00
  - Instagram：@forge.gym.taipei
  - Facebook：Forge 健身工廠
  - YouTube：FORGE GYM TV

---

### 設計規格

- **主題**：Dark / 紅黑烈焰
- **色彩變數**：
  - `--bg: #0d0d0d`（主背景，極深黑）
  - `--surface: #1a1111`（卡片/區塊背景，暗紅黑）
  - `--red: #e63946`（主要強調色，鮮烈紅）
  - `--red-dark: #c0222e`（深紅，hover 狀態）
  - `--text: #f5f5f0`（主文字，溫暖白）
  - `--muted: #888880`（次要文字，灰）
  - `--border: #2a1a1a`（邊框，暗紅邊）
  - `--surface-2: #221212`（次層背景）
- **字體**：
  - 主標題：`"Anton"` (Google Fonts，weight 400；Anton 只有一個字重，自帶粗壯感)
  - 副標/說明：`"Noto Sans TC"` (Google Fonts，weights: 300, 400, 500)
  - Anton 特性：天生 uppercase 感，字母緊密，視覺衝擊強烈；搭配 `letter-spacing: 0.02em`
- **視覺語言**：
  - 粗暴排版：Anton 標題要超大（5–10rem），讓字體本身就是設計
  - 高對比：黑底紅字/白字，極強視覺衝擊
  - 工業紋理：`background-image: repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 50%)` 製作斜紋質感
  - 數字崇拜：大型計數器數字佔據版面，Oswald 或 Anton 超大字
  - 切角設計：部分元素使用 `clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)` 製作平行四邊形效果
  - 紅色強調：所有 CTA、數字、hover 狀態一律使用 `--red`

---

### 技術規格

- **HTML5 語義標籤**：`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- **全部 CSS inline**：每頁 `<style>` 標籤內，不引用外部 .css 檔案
- **Google Fonts**：引入 `Anton` + Noto Sans TC
- **RWD 斷點**：768px（平板）/ 480px（手機）
- **手機選單**：從**左側**滑入，背景 `var(--surface)`，紅色 Anton 大字連結，`border-right: 2px solid var(--red)`
- **Hero 視覺**：全螢幕黑色背景 + 巨型 Anton 文字，純排版驅動，不依賴背景圖
- **動畫**：
  - 數字計數器（JS）：頁面滾動至統計區時從 0 動畫到目標數字
  - CTA 按鈕：hover 時背景從左側展開（`transform: scaleX`，`transform-origin: left`）
  - 標題字母：可選擇性加入 letter-by-letter 進入動畫
- **按鈕**：主按鈕（紅色實心，切角 clip-path，uppercase Anton）；次按鈕（紅色邊框，透明背景）
- **課表**：深色背景 grid，紅色標示今日課程，hover 高亮
- **計時器/倒數**：訓練挑戰倒數計時 widget（可選）

---

### 導覽列規格

**桌面版 Header**：
- 左側：`FORGE` 品牌名（Anton，2rem，`--red`）+ `GYM` （Anton，2rem，`--text`）
- 右側：水平導覽連結（Noto Sans TC，0.85rem，uppercase，letter-spacing: 0.1em）+ 「免費體驗」CTA（紅色實心，切角）
- 背景：`rgba(13, 13, 13, 0.96)`，`position: sticky; backdrop-filter: blur(8px)`
- 底部：`border-bottom: 1px solid var(--border)` + 左側 `border-left: 3px solid var(--red)` 於 active 連結

**導覽項目**（繁體中文，建議 uppercase）：
首頁 / 關於我們 / 訓練課程 / 教練團隊 / 設備空間 / 會員方案 / 課表時間 / 訓練誌 / 常見問題 / 聯絡我們

**手機選單**：左側滑入，黑紅背景，Anton 大字，超霸氣

---

### 頁面清單與詳細內容要求

#### 1. `index.html` — 首頁

**Hero（Bold Typography Hero，100vh）**：
- 純黑背景 + 斜紋工業紋理
- 超巨型 Anton 文字（主視覺，無圖片）：
  - 行 1（白色，8rem）：`FORGE`
  - 行 2（紅色，8rem）：`YOUR`
  - 行 3（白色邊框字，8rem `color: transparent; -webkit-text-stroke: 2px #f5f5f0`）：`LIMITS`
  - 副標（Noto Sans TC，1rem，muted）：「台北信義區最強高強度訓練中心 · 200坪 · 15位教練 · CrossFit認證」
  - 按鈕組：「免費體驗一週 →」（紅色）+ 「查看訓練課程」（outline）
- 右下角：滾動指示器（紅色直線 + SCROLL 文字）

**數字震撼區（全黑，4欄）**：
- `800+` 會員 / `15` 位教練 / `100+` 週課時 / `200` 坪場地
- 每格：Anton 超大紅色數字（5rem）+ Noto Sans TC 說明文字

**訓練課程預覽（3欄，深色卡片）**：
- **CrossFit 功能性訓練**：以多樣化、高強度動作提升整體運動表現，適合挑戰者
- **重量訓練**：奧林匹克舉重、健力訓練、增肌減脂，全方位力量發展
- **搏擊格鬥**：泰拳、綜合格鬥（MMA）、巴西柔術入門課，強化身心韌性
- 每卡：深紅背景 + 課程名（Anton，2rem）+ 說明（Noto Sans TC）+ 「查看課程 →」

**精選教練（橫向捲動或4欄）**：
- 4位教練卡片：照片（深色佔位）+ 姓名 + 專長 + 認證

**本週挑戰 WOD（Workout of the Day）**：
- 大型紅框區塊，Anton 大字顯示本週訓練
- 「WEEK 8 WOD」
- 訓練內容：「21-15-9 Thrusters (42.5kg) / Pull-ups / Box Jumps（目標：20分鐘內完成）」
- 「加入挑戰」按鈕

**會員見證（黑底白字，大引號）**：
- 林志豪（業務主管）：「加入 Forge 六個月，體脂從 28% 降到 15%，精神和工作效率都提升了。教練真的把每個人的目標當自己的目標在衝。」
- 陳雅琪（設計師）：「本來以為 CrossFit 只是男生的運動，但 Forge 的女性會員比例超高，課程設計很有彈性。絕對值這個價格。」
- 黃俊明（工程師）：「器材超齊全，環境超乾淨，教練素質超高。台北找不到第二家這個等級的健身房。」

**免費體驗 CTA（全版紅色帶）**：
- Anton 大標：「FIRST WEEK FREE」
- Noto Sans TC 副標：「新會員免費體驗一週，感受 Forge 的訓練強度」
- 「立即申請體驗 →」按鈕（黑色，切角）

---

#### 2. `about.html` — 關於我們

- Hero：Anton 排版 `ABOUT FORGE`（全黑，無圖）
- 品牌故事（左圖右文）：「2019 年，前國家羽球選手陳宏偉在退役後，決定把台灣運動訓練的水準提升到世界等級。Forge 的誕生，是對台灣健身文化的一個宣言：訓練不是健身，訓練是鍛造。」
- 創辦人：陳宏偉（CEO / Head Coach）— 前國家羽球隊隊員、CrossFit Level 3 認證教練
- 品牌時間軸：
  - 2019：信義區旗艦店開幕，首批會員 80 人
  - 2020：獲 CrossFit Level 2 認證訓練中心資格
  - 2021：推出搏擊格鬥課程，與泰拳冠軍林大偉合作
  - 2022：會員突破 500 人，擴大場地至 200 坪
  - 2023：被《GQ 台灣》評為「台北最值得加入的健身房」
  - 2026：會員突破 800 人，推出企業訓練方案
- 訓練哲學（3 大原則）：
  - **強度第一**：舒適圈不會讓你進步，只有超越極限才能鍛造實力
  - **科學訓練**：每個計畫都有數據支撐，追蹤每一公斤、每一秒的進步
  - **社群力量**：Forge 不只是健身房，是一群彼此驅動的人

---

#### 3. `programs.html` — 訓練課程

**課程分類 Tab**：CrossFit / 重量訓練 / 搏擊格鬥 / 個人訓練

**詳細課程列表**：

CrossFit 功能性訓練：
- CF Foundation（入門）— 4 週 CrossFit 基礎動作課，零基礎必修
- CF Regular WOD — 每日不同訓練（Workout of the Day），中高強度
- CF Compete — 競技導向，針對 CrossFit Open 備賽

重量訓練：
- 奧林匹克舉重 — 抓舉、上搏挺舉技術課，每週 2 次
- 健力訓練 — 臥推、深蹲、硬舉，力量競技方向
- 增肌減脂班 — 體態改造課程，8 週一期，限 8 人

搏擊格鬥：
- 泰拳入門（Muay Thai）— 泰拳基礎踢打，同時具備自衛與減脂效果
- MMA 綜合格鬥 — 泰拳 + 摔角 + 地面技，需有泰拳基礎
- BJJ 巴西柔術 — 地面技術，由巴西黑帶 Carlos Mendez 授課

個人訓練：
- 1 對 1 私教 / 2 對 1 共享私教 / 線上遠端訓練

---

#### 4. `program-detail.html` — 課程詳情

以「CF Foundation 入門班」為範例：
- Anton 大標：`CF FOUNDATION`
- 紅色 badge：「新會員首選」
- 課程說明（250字）：「CF Foundation 是 Forge 為零基礎新會員設計的 4 週導向課程。每堂課系統性介紹 CrossFit 的核心動作：深蹲、硬舉、推系列動作、拉系列動作、Olympic Lifting 基礎、Kettlebell 操作，以及 WOD 規則與安全準則。完成 Foundation 後，你將具備進入 Regular WOD 的所有基礎能力。」
- 課程資訊（深色 table）：期間 4 週 / 每週 2 堂 / 每堂 90 分鐘 / 定員 6 人 / 費用 NT$6,800（含首月會員費）
- 你將學到（checklist，紅色勾）：深蹲系列 / Push Press / Deadlift / Kettlebell Swing / 繩索攀爬 / WOD 執行策略
- 負責教練：林建宏（CrossFit L2）
- 「立即報名」大型紅色按鈕

---

#### 5. `trainers.html` — 教練團隊

**教練陣容（深色大卡，hover 翻轉效果）**：

主力教練（5位詳細介紹）：
- **陳宏偉**（Head Coach / CEO）— CrossFit L3 / 前國家羽球隊 / 在地訓練 15 年
- **林建宏**（CrossFit 主任教練）— CrossFit L2 / NSCA-CSCS / 健力全國紀錄保持人（93kg 級）
- **林大偉**（泰拳/MMA 主任教練）— 泰拳職業選手 / WBC 亞洲冠軍 / 泰國 Tiger Muay Thai 授課資格
- **Carlos Mendez**（BJJ 主任教練）— BJJ 黑帶（巴西 Nova União） / 台灣公開賽三冠
- **張雅涵**（體態/女性訓練教練）— NASM CPT / 孕期產後訓練認證 / 健美選手背景

助理教練（4位名字 + 專長簡列）：
- 王志明（舉重 / 奧運舉重 L1）
- 吳怡芳（瑜伽 / 柔軟度訓練）
- 黃俊賢（跑步 / 肌力訓練）
- 蔡佩珊（TRX / 核心訓練）

每位主力教練：全版深色照片佔位 + 姓名（Anton）+ 專長 + 認證徽章列 + 個人訓練哲學一句話

---

#### 6. `facilities.html` — 設備空間

- Anton Hero：`200 SQM. BUILT FOR WAR.`
- 區域分介（圖文交錯，深色卡片）：
  - **CrossFit 功能區（80坪）**：30+ Rigs、Barbell、Bumper Plate 全套、GHD、Echo Bike × 8、Rower × 6、Ski Erg × 4
  - **重量訓練區（50坪）**：Olympic Platform × 4、Power Rack × 8、Dumbell 5–60kg 全套、Cable Machine × 6
  - **搏擊格鬥區（40坪）**：Boxing Ring（標準尺寸）、Muay Thai Bag × 10、BJJ Mat（防護地板全覆蓋）
  - **有氧心肺區（20坪）**：Treadmill × 6、Spin Bike × 6、Elliptical × 4、Stair Climber × 2
  - **更衣 SPA 區**：男女分設、乾濕分離淋浴、蒸氣房、冰浴槽（選手訓練恢復）
  - **補給站**：蛋白質飲品、運動補給品、毛巾租借服務
- 設備品牌展示：Rogue / Concept2 / LifeFitness / Technogym / Combat Corner
- 「預約參觀 →」按鈕

---

#### 7. `pricing.html` — 會員方案

**方案卡片（三欄，中間卡片有紅色邊框「最受歡迎」badge）**：

| | 基礎會員 | 精英會員 | 頂峰會員 |
|---|---|---|---|
| 器材使用 | ✓ 全開放 | ✓ 全開放 | ✓ 全開放 |
| 團體課程 | 每月 8 堂 | 無限堂 | 無限堂 |
| 個人訓練 | — | 每月 1 次 | 每月 4 次 |
| 營養諮詢 | — | — | 每月 1 次 |
| 優先預約 | — | ✓ | ✓ 最優先 |
| 月費 | NT$2,800 | NT$4,500 | NT$7,800 |
| 半年繳費 | NT$2,500/月 | NT$4,000/月 | NT$7,000/月 |

**加購選項**：
- 私人教練（1對1）：NT$2,500/50分鐘
- 搏擊格鬥專班：+NT$1,200/月
- 奧舉特訓班：+NT$1,500/月

**企業方案**：
- 10人以上企業團辦：每人 NT$2,000/月（含無限堂課）
- 企業挑戰賽：客製化設計

- 新會員優惠：「首週免費體驗，體驗後加入立即享入會費豁免（原 NT$3,000）」

---

#### 8. `schedule.html` — 課表時間

- 週課表（CSS Grid，深黑背景）：
  - 時段從 06:00 到 22:00，每小時或每 90 分鐘一格
  - 課程色碼：CrossFit（紅色）/ 重量訓練（橙色）/ 搏擊格鬥（紫色）/ 私教（灰色）
  - 每格：課程名 + 教練 + 空位數（顯示「滿」或剩餘人數）
- 本週 WOD 特別展示區（週一至日每日 WOD）
- 「預約課程」說明：透過 APP / Line / 電話預約，課前 24 小時截止

---

#### 9. `blog.html` — 訓練誌

- Anton Hero：`TRAIN HARD. TRAIN SMART.`
- 精選大文章 + 3欄小卡
- 文章列表（深色卡片）：
  - 「CrossFit 入門完全指南：你的第一個月該怎麼訓練？」
  - 「深蹲技術全解析：林建宏教練親授六大常見錯誤」
  - 「泰拳 vs MMA：哪個適合你？林大偉教練解析」
  - 「增肌飲食法：訓練後的 24 小時黃金窗口」
  - 「心率訓練區間完整指南：Zone 2 為何如此重要？」
  - 「Forge 會員故事：從 90 公斤到完成第一場 CrossFit Open」
- 分類 Tag：CrossFit / 技術教學 / 營養補給 / 會員故事 / 賽事報導

---

#### 10. `blog-detail.html` — 訓練誌文章

以「深蹲技術全解析」為範例：
- Anton Hero：`SQUAT DEPTH MATTERS`（大標）
- 文章資訊：林建宏 教練 / 2026.01.20 / 閱讀 10 分鐘 / 分類：技術教學
- 正文（600字，含小標，大量技術細節）：
  - 為什麼深蹲最重要 / 六大常見錯誤（膝蓋內夾/屁股眨眼/重心前移）/ 修正訓練方法 / Forge 的深蹲程式設計理念
- 側欄：作者卡片（林建宏）+ 「預約林教練私教」按鈕 + 相關文章 3 篇
- 文末 CTA：「想在 Forge 訓練你的深蹲？」+ 免費體驗按鈕

---

#### 11. `faq.html` — 常見問題

Anton 小標：`FAQ`，下方 Noto Sans TC 手風琴：

**加入前**：
- Q：沒有運動習慣可以加入嗎？A：絕對可以！CF Foundation 入門班就是為你設計的，教練會從零開始帶你
- Q：CrossFit 是否很容易受傷？A：訓練本身不危險，錯誤的技術才危險。Forge 的所有課程都有教練全程監督動作

**課程相關**：
- Q：如何預約課程？A：透過 MINDBODY APP（Forge 使用）、LINE 或電話預約，提前 1 小時可取消
- Q：可以帶訓練夥伴一起來嗎？A：加入訓練社群享有推薦獎勵，每帶一位新會員成功加入可獲 NT$500 折扣

**費用相關**：
- Q：入會費是多少？A：一般 NT$3,000，新會員體驗期結束加入可豁免
- Q：暫停會籍可以嗎？A：每年可申請一次最多 30 天暫停

**設施相關**：
- Q：有置物櫃嗎？A：有，月租置物櫃 NT$300/月或按日使用
- Q：需要攜帶自己的器材嗎？A：所有訓練器材 Forge 提供，建議自備訓練手套

---

#### 12. `contact.html` — 聯絡我們

- Anton Hero：`LET'S TALK`（紅色大標）
- 左欄（聯絡資訊，深色卡片）：
  - 📍 地址：台北市信義區松仁路 100 號 B1
  - 🚇 捷運：101/世貿站 3 號出口步行 5 分鐘
  - 📞 電話：02-2723-6688
  - 📧 Email：train@forge-gym.tw
  - 🕐 開放時間（詳列）
  - Google Maps 佔位（深色背景圓角）
- 右欄（聯絡表單，深色背景）：
  - 姓名、Email、電話
  - 詢問類型（免費體驗申請/課程諮詢/會員方案/企業合作/場地租借/教練私教/其他）
  - 訊息
  - 送出按鈕（紅色，Anton 字體，切角設計，「SEND IT」）
- 底部橫帶（全紅）：「READY TO FORGE? 立即電話 02-2723-6688」

---

### 圖片指引

- 健身器材/空間：`background-color: #1a1111`
- 訓練動作照：`background-color: #160d0d`
- 教練照片：`background-color: #1a1414`（深紅黑，可加紅色漸層 overlay）
- Hero 大圖：`background: linear-gradient(135deg, #0d0d0d 0%, #1a0808 100%)`
- 商品/補給品：`background-color: #111111`

所有圖片在深色背景下使用，若需圖片 overlay，使用 `linear-gradient(rgba(13,13,13,0.6), rgba(13,13,13,0.6))`

---

### 文案風格

- **語氣**：強硬、直接、充滿挑戰性，像教練在場邊吼你的聲音
- **句式**：短句、命令句、無廢話，每個字都要有力量
- **英文混用**：CrossFit、WOD、PR（Personal Record）等術語保留英文，品牌名 Forge 保留英文
- **Anton 標題**：視覺上建議全大寫英文或中文短句，製造視覺衝擊
- **避免**：軟弱的詞語（「也許」「可能」「建議」替換為直接陳述），過多形容詞
- **口號式文案範例**：「你的極限，是我們的起點。」/ 「休息是為了更重的重量。」/ 「痛苦是暫時的，成就是永恆的。」

---

### Footer 規格（所有頁面共用）

- 背景：`#080808`（最深黑）
- 文字：`#555550`，連結 hover：`#e63946`（紅色）
- 四欄：Logo（Anton，紅色 FORGE + 白色 GYM）+ 訓練信念 / 快速連結 / 開放時間 / 社群
- 頂部：`border-top: 2px solid var(--red)`（紅色上邊框）
- 版權：`© 2026 FORGE GYM. ALL RIGHTS RESERVED.`
- 底部 slogan（Anton，muted）：`FORGE YOUR LIMITS.`

---

請依照以上所有規格，逐一生成 12 個完整 HTML 頁面。每個頁面需包含完整的 `<!DOCTYPE html>` 到 `</html>`，所有樣式寫在 `<style>` 標籤內，JavaScript 寫在 `<script>` 標籤內，不引用任何外部 CSS 框架。
