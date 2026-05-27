# Nexus 智能協作平台 — AI 生成提示詞

## 使用說明
將以下提示詞完整複製，貼入 Claude、ChatGPT 或任何 AI 助理，即可生成與本模板相同風格的完整網站。

---

## 完整提示詞

請為「Nexus 智能協作平台」設計並生成一套完整的 B2B SaaS 產品網站，包含 12 個獨立 HTML 頁面。每個頁面必須是完全獨立的 HTML 文件（inline CSS 寫在 `<style>` 標籤內，不依賴任何外部 CSS 檔案），並包含完整的 header、footer 和 RWD 手機版選單。

---

### 品牌設定

**品牌名稱：** Nexus（「連結點」之意）
**產品類型：** B2B SaaS — AI 驅動的企業智能協作與專案管理平台
**成立年份：** 2021 年，台北市信義區（遠東金融廣場）
**核心產品：** Nexus Core（專案管理）、Nexus AI（智能助手）、Nexus Flow（工作流自動化）、Nexus Insights（商業智能儀表板）
**品牌理念：** 「讓 AI 成為每個團隊的第七位成員」——Nexus 不只是管理工具，而是能理解脈絡、預測瓶頸、自動分派任務的智能協作夥伴，幫助 5 人新創到 5000 人企業都能以同樣的效率運轉。
**服務企業數：** 1,247 個企業客戶（包含 87 家上市公司）
**主要競爭者：** Asana、Monday.com、Notion（Nexus 的差異化是原生 AI + 亞太市場本地化）
**目標客群：** B2B 決策者——IT 主管、PMO、COO、CTO，企業規模 50–5000 人，科技業、金融業、顧問業、製造業。
**定價模式：** 按月訂閱，依人數計費（Starter / Professional / Enterprise 三層）
**品牌個性：** 精準、前瞻、值得信賴。不過度科幻，強調實際工作效率提升。深色界面象徵深夜仍在運轉的伺服器。

---

### 設計規格

**色彩系統 (CSS Variables)：**
```css
:root {
  --bg: #0b0b1a;          /* 主背景：深宇宙藍黑 */
  --surface: #12122a;     /* 卡片背景：略亮的深藍 */
  --surface-2: #1a1a3a;   /* 次層卡片：更亮 */
  --purple: #7c5cff;      /* 主品牌色：電子紫 */
  --purple-light: #9d82ff;/* 淺紫：hover 狀態 */
  --teal: #06d6a0;        /* 輔助色：翠綠（AI 功能標示） */
  --teal-light: #4de8c0;  /* 淺翠綠 */
  --text: #e8e8f0;        /* 主文字：暖白 */
  --muted: #8888aa;       /* 次要文字：灰紫 */
  --border: #2a2a4a;      /* 邊框：深藍紫 */
  --gradient: linear-gradient(135deg, #7c5cff 0%, #06d6a0 100%); /* 主漸層 */
}
```

**字體 (Google Fonts)：**
- 英文/數字標題：`Inter`，weight 400、500、600、700（SaaS 工具感，現代科技）
- 中文內文與 UI：`Noto Sans TC`，weight 300、400、500
- 程式碼/技術文字：`JetBrains Mono`，weight 400（用於程式碼區塊、技術規格）
- Google Fonts 引入語法：
  ```html
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+TC:wght@300;400;500&family=JetBrains+Mono:wght@400&display=swap" rel="stylesheet">
  ```

**設計風格：**
- **整體氛圍：** 深色科技感，如 Linear、Vercel、或 Stripe 的產品官網。深色背景配合亮色強調，玻璃擬態（glassmorphism）卡片，帶有微妙的光暈效果。
- **Hero 版型：** 置中型 Hero，標題上方帶有動態漸層光暈（用 CSS `radial-gradient` 製造紫色/翠綠光球效果）。
- **Bento Grid（核心版型）：** 功能展示區使用 Bento Box 不等比格狀排列（大小卡片交錯），每個格子展示一個核心功能，有玻璃擬態效果。
- **玻璃擬態卡片：** `background: rgba(255,255,255,0.04)`，`backdrop-filter: blur(20px)`，`border: 1px solid rgba(255,255,255,0.08)`，`border-radius: 16px`，`box-shadow: 0 8px 32px rgba(0,0,0,0.3)`。
- **漸層強調：** 重要標題的關鍵詞使用漸層文字（`background: var(--gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent`）。
- **按鈕設計：** 主按鈕為紫色漸層（`background: linear-gradient(135deg, var(--purple), #5c3df7)`），白色文字，`border-radius: 8px`，hover 加亮 + 微縮放 `transform: scale(1.02)`。次要按鈕為透明玻璃樣式（`border: 1px solid var(--border)`，`color: var(--text)`）。
- **AI 功能標示：** 翠綠色（`var(--teal)`）標籤與圖示，代表 AI 相關功能。
- **數據展示：** 大數字（Inter 700，字級 48–64px）＋細小說明（Noto Sans TC 300，muted）。
- **程式碼區塊：** `background: #0d0d1f`，`border: 1px solid var(--border)`，`font-family: JetBrains Mono`，帶有語法高亮（紫色關鍵字、翠綠字串）。

**Border Radius：** `16px`（大卡片）、`8px`（按鈕、小元素）、`4px`（標籤）
**手機選單方向：** 右側滑入（`right: 0`）

---

### 技術規格

- 純 HTML + inline `<style>` 標籤，**不使用**任何外部 CSS 檔案
- 使用 Google Fonts（`<link>` 引入）
- 圖片全部使用 Unsplash 真實 URL（格式：`https://images.unsplash.com/photo-XXXXXXXX?w=800&q=80`）
- RWD 響應式設計，主要 breakpoint：`768px`、`1024px`
- 手機版漢堡選單（JS toggle，從右側滑入，深色玻璃效果背景）
- 所有文字內容使用**繁體中文**（產品功能名稱和技術術語保留英文）
- 每頁 header：深色背景（`var(--bg)`），左側 Nexus logo（紫色漸層文字），中間桌面版導覽，右側「免費試用」CTA 按鈕（紫色），`position: sticky; backdrop-filter: blur(20px); border-bottom: 1px solid var(--border)`
- 每頁 footer：深色4欄 footer，底部版權行，帶有漸層分隔線

---

### 導覽列項目（繁體中文）
首頁 (`index.html`) | 產品功能 (`features.html`) | 定價方案 (`pricing.html`) | 客戶案例 (`case-studies.html`) | 整合生態系 (`integrations.html`) | 開發者文件 (`docs.html`) | 關於我們 (`about.html`) | 部落格 (`blog.html`) | 加入我們 (`careers.html`) | 聯絡我們 (`contact.html`)

---

### 需要生成的頁面清單

1. **`index.html`** — 首頁
2. **`features.html`** — 產品功能
3. **`pricing.html`** — 定價方案
4. **`case-studies.html`** — 客戶案例列表
5. **`case-study-detail.html`** — 單一案例詳細頁
6. **`integrations.html`** — 整合生態系
7. **`docs.html`** — 開發者文件（快速起步）
8. **`about.html`** — 關於我們
9. **`blog.html`** — 部落格列表
10. **`blog-detail.html`** — 單篇文章內頁
11. **`careers.html`** — 加入我們
12. **`contact.html`** — 聯絡我們

---

### 各頁面詳細內容要求

#### 1. `index.html` — 首頁

**Section 1 — Hero（背景帶漸層光暈）：**
- 背景：`var(--bg)`，加上用 CSS `::before` 偽元素製作的紫色+翠綠 radial-gradient 光球效果
- Badge（頂部小標籤）：翠綠色帶圖示「✦ AI-Powered — 2026 亞太最佳 SaaS 新創 Top 10」
- 主標題 H1（兩行）：「讓 AI 成為」 / 「你團隊的智能核心」（「AI」和「智能核心」使用漸層文字）
- 副標題：「Nexus 整合 AI 專案管理、自動化工作流與即時商業智能，讓 1,247 個企業團隊每週節省 12 小時。」
- CTA 群：「免費試用 14 天」（紫色主按鈕）+ 「觀看功能演示」（玻璃次要按鈕，帶播放圖示）
- 小字：「無需信用卡 · 5 分鐘完成設定 · 隨時取消」
- Hero 下方：客戶 logo 橫幅（greyscale），標題「1,247 家企業的信任選擇」，放 6 個虛構企業 logo 名稱（文字型）

**Section 2 — 產品預覽（假 UI 截圖）：**
- 大型深色仿 SaaS 介面截圖（用 HTML/CSS 繪製假儀表板 UI，或使用 Unsplash 科技圖）
- 帶有瀏覽器框架（圓角矩形，有紅黃綠三點）
- 周圍浮動小卡片（玻璃效果）：「本週完成 47 項任務」「AI 預測風險 3 項」「團隊效率 +34%」

**Section 3 — Bento Grid 功能區（不等比格狀，6個格子）：**
- 大格（2:1寬）：**Nexus AI 助手** — 自然語言指派任務、自動生成進度報告
- 中格：**智能甘特圖** — 即時更新、依賴關係視覺化
- 中格（翠綠色主題）：**自動化工作流** — 500+ 條件觸發器，無需寫程式
- 小格：**即時協作** — 多人同時編輯，變更即時同步
- 小格：**商業智能** — 自訂儀表板，一鍵匯出報告
- 中格：**整合生態系** — 已整合 200+ 第三方工具

**Section 4 — 數字牆（深色橫幅）：**
- **1,247** 企業客戶 ｜ **12 小時** 平均每週節省 ｜ **99.97%** 系統可用率 ｜ **200+** 整合工具

**Section 5 — 功能亮點（左右交替 Split，3組）：**
- Nexus AI：左圖（假 AI 對話介面截圖）右文
- Nexus Flow：左文右圖
- Nexus Insights：左圖右文

**Section 6 — 客戶見證（3則，玻璃卡片）：**
- 每則含：公司名稱、聯絡人職稱（如 CTO）、頭像初始、評語（100字）、成效數字（「使用後專案延遲率降低 67%」）

**Section 7 — 定價 CTA 橫幅（漸層背景）：**
- 「14 天免費試用，不需要信用卡」大標題
- 按鈕：「立即開始」（白色按鈕，深色文字）

---

#### 2. `features.html` — 產品功能

- **Tab 切換（4個模組）：** Nexus Core / Nexus AI / Nexus Flow / Nexus Insights
- **Nexus Core（專案管理）：**
  - 智能甘特圖（自動依賴排程）
  - Kanban 看板（拖拉式，支援自訂欄位）
  - OKR 目標追蹤（目標→關鍵結果→任務三層關聯）
  - 時程衝突偵測（AI 自動警示）
  - 資源管理（人力容量視覺化）
- **Nexus AI（智能助手）：**
  - 自然語言建立任務（「幫我建一個下週五前完成的設計審查任務，指派給 Amy」）
  - 自動進度摘要（每週自動生成進度報告郵件）
  - 風險預測（基於歷史資料預測潛在延遲）
  - 智能建議（依據工作模式推薦最佳截止日）
- **Nexus Flow（工作流自動化）：**
  - 視覺化流程編輯器（拖拉節點）
  - 500+ 觸發條件
  - 跨系統自動化（當 Salesforce 成交 → 自動建立 Nexus 交付專案）
- **Nexus Insights（BI 儀表板）：**
  - 20+ 預建報表模板
  - 自訂儀表板（拖拉式小工具）
  - 匯出 PDF/Excel

---

#### 3. `pricing.html` — 定價方案

- **方案切換：** 月付 / 年付（年付省 20%，JS toggle）
- **三個方案（卡片，Professional 加亮框和「最熱門」標籤）：**

  **Starter：NT$299 /人/月（年付）**
  - 5–20 人團隊
  - Nexus Core 全功能
  - 最多 50 個啟用專案
  - 5GB 儲存空間
  - Email 技術支援
  - 「免費試用 14 天」按鈕

  **Professional：NT$599 /人/月（年付）**（最熱門，紫色邊框）
  - 20–200 人團隊
  - Nexus Core + Nexus AI + Nexus Flow
  - 無限專案
  - 50GB 儲存空間
  - Nexus Insights 基礎版
  - 100+ 整合工具
  - 即時聊天技術支援
  - 「立即升級」按鈕（紫色實心）

  **Enterprise：自訂報價**
  - 200+ 人企業
  - 全模組功能
  - 私有雲部署選項
  - SSO / SAML 整合
  - 合規稽核記錄（SOC 2 Type II）
  - 專屬客戶成功經理
  - SLA 99.99% 保障
  - 「聯絡銷售」按鈕

- **功能比較表（完整 Table，所有功能逐項對比）**
- **FAQ（5題）：** 如何計費、是否可降級、企業資料安全、試用結束後資料如何處理、是否有教育機構優惠

---

#### 4. `case-studies.html` — 客戶案例列表

- **篩選器（Tag）：** 全部 / 科技業 / 金融業 / 製造業 / 顧問業
- **案例卡片 Grid（6個）：**
  1. 台灣某科技公司（500人）：「導入後專案準時交付率從 62% 提升至 91%」
  2. 新加坡金融服務公司（200人）：「法規合規報告時間從 3 天縮短至 4 小時」
  3. 日本製造商台灣子公司（150人）：「跨部門溝通成本降低 45%」
  4. 台灣管理顧問公司（80人）：「顧問人均服務客戶數提升 30%」
  5. 香港電商公司（300人）：「行銷活動上線週期縮短 2 週」
  6. 台北新創公司（35人）：「從 5 個工具整合為 1 個平台，節省 60% 工具費用」
- 每個卡片含：公司（匿名化，只顯示產業和規模）、核心成效數字、使用方案標籤、「查看詳情」按鈕

---

#### 5. `case-study-detail.html` — 單一案例詳細頁

以台灣科技公司為範例：
- **頂部數字橫幅（3個關鍵成效）：** +29% 準時交付率 ｜ 週省 14 小時 ｜ 導入時間 3 週
- **客戶背景：** 台灣 SaaS 軟體公司（約 500 人），工程與產品部門共 120 人使用
- **挑戰（3點）：** 多工具分散（Jira+Slack+Excel）、跨部門資訊斷鏈、主管無法即時掌握整體進度
- **解決方案（分步說明）：** 如何導入 Nexus、設定哪些工作流、AI 功能如何被實際使用
- **成果（數據圖表，用 CSS 繪製 bar chart 效果）**
- **客戶引言（大型 quote block，帶頭像）**

---

#### 6. `integrations.html` — 整合生態系

- **搜尋框（顯示用，非真實搜尋）**
- **分類 Grid（6個分類）：** 溝通協作 / CRM 銷售 / 雲端儲存 / 開發工具 / 財務 / 行銷
- **熱門整合（大卡片 Grid，12個）：**
  - Slack、Microsoft Teams、Google Workspace、Salesforce、HubSpot、GitHub、Jira、Figma、Notion、Zapier、LINE Works、AWS
  - 每個含 logo（文字模擬）、名稱、整合說明（30字）、「查看文件」連結
- **API 介紹（CTA 區）：** 「沒找到你的工具？使用 Nexus API 自行整合」、程式碼範例

---

#### 7. `docs.html` — 開發者文件（快速起步）

- **左側 Sidebar 導覽（固定，桌面版）：** 快速開始 / API 參考 / Webhook / SDK / 範例程式碼 / 版本更新
- **主內容區（右側）：** 快速起步指南
  - 申請 API Key
  - 安裝 SDK（`npm install @nexus/sdk`）
  - 第一個請求範例（程式碼 block，含語法顏色）
  - 建立任務範例（POST `/api/v2/tasks`）
  - 回應格式說明
  - 錯誤代碼表
- **程式碼區塊使用 JetBrains Mono，深色主題**

---

#### 8. `about.html` — 關於我們

- **創辦人與使命：** Nexus 由前 Google PM 陳維安與前 AWS 工程師林大峰共同創立，故事：2020年 WFH 期間感受到遠端協作痛點，2021年創立 Nexus
- **團隊（6人照片卡片）：** 陳維安（CEO）、林大峰（CTO）、王心悅（CPO）、張家豪（Head of AI）、Lisa Chen（Sales Director）、吳文哲（Customer Success Lead）
- **公司文化 4 價值觀：** 透明、自主、AI-First、客戶成功即我們的成功
- **辦公室：** 台北信義區遠東金融廣場 20 樓（帶 Unsplash 辦公室圖片）
- **媒體報導：** TechCrunch、DealStreetAsia、數位時代等

---

#### 9. `blog.html` — 部落格

- **精選文章（頂部大圖）**
- **文章 Grid（3欄，9篇）：**
  - 〈AI 如何讓你的 Sprint Planning 快3倍？〉
  - 〈從 Excel 到 AI 協作平台：中小企業轉型指南〉
  - 〈OKR 為什麼失敗？90% 企業犯的 5 個錯誤〉
  - 〈遠端團隊的非同步協作最佳實踐〉
  - 〈2026 亞太企業數位化指數報告重點整理〉
  - 〈工作流自動化：節省時間還是增加複雜度？〉
  - 〈Nexus 如何幫助一家百人顧問公司提升 30% 效率〉
  - 〈SaaS 資安最佳實踐：SOC 2 Type II 認證的意義〉
  - 〈AI 時代的 PM：技能升級生存指南〉
- **分類 Tag：** 產品更新 / 效率技巧 / 產業洞察 / 客戶故事

---

#### 10. `blog-detail.html` — 單篇文章內頁

以〈AI 如何讓你的 Sprint Planning 快3倍？〉為範例：
- **頂部：** 分類標籤（翠綠色「效率技巧」）、H1、作者（陳維安 CEO）、日期、閱讀時間（6 分鐘）
- **英雄圖（科技/辦公室相關 Unsplash）**
- **文章內容（約1000字）：** 含程式碼截圖、步驟說明、實際案例
- **Call-to-action 中插（文章中段）：** 玻璃卡片「試試 Nexus AI Sprint Planner — 免費14天」按鈕
- **側欄（桌面版）：** 作者卡片、相關文章、訂閱 Newsletter 框
- **文章底部：** 相關文章（3篇）

---

#### 11. `careers.html` — 加入我們

- **文化與福利 Section：** 股票選擇權、彈性工時、WFH Policy（混合辦公）、學習預算 NT$30,000/年、健身補助
- **開放職位（6個卡片）：**
  1. Senior Frontend Engineer（React）— 全職，台北/遠端
  2. AI/ML Engineer（LLM 應用）— 全職，台北
  3. Product Manager（B2B SaaS）— 全職，台北
  4. Enterprise Sales Manager（東南亞市場）— 全職，台北
  5. Customer Success Specialist（日文能力優）— 全職，台北/遠端
  6. Data Analyst — 全職，台北
- 每個職位含：職位名稱、部門、工作地點、類型（全職）、「了解詳情 & 申請」按鈕
- **申請流程（4步驟）：** 投遞簡歷→初步篩選→技術/案例面試→錄取 Offer

---

#### 12. `contact.html` — 聯絡我們

- **分類聯絡（3個區塊）：**
  1. 銷售諮詢（enterprise 採購）：表單或預約演示
  2. 技術支援：連結至 docs 或 support@nexus.io
  3. 媒體/合作：press@nexus.io
- **聯絡表單：** 公司名稱、姓名、職稱、Email、公司人數（下拉）、使用的現有工具（checkbox）、主要需求（textarea）、送出按鈕
- **辦公室資訊：** 台北信義區遠東金融廣場 20 樓、電話

---

### 圖片使用指引（Unsplash）

**科技辦公室：**
- `https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80`（現代辦公室）
- `https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80`（科技團隊）

**電腦/程式碼：**
- `https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&q=80`（程式碼螢幕）
- `https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80`（程式碼）

**資料/圖表：**
- `https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80`（數據圖表）

---

### 品牌文案風格

**語調：** 精準、數據導向、充滿信心但不浮誇。SaaS 產品文案的典型風格——簡短有力，強調結果，使用數字佐證。避免模糊的「提升效率」，要說「每週節省 12 小時」。

**標語範例：**
- 「讓 AI 成為你團隊的第七位成員。」
- 「1,247 個團隊已停止用 Excel 管理專案。」
- 「工作流程不應該讓你分心。」
- 「AI 不是未來。是今天下午 3 點的任務指派。」

**忌用詞：** 革命性、顛覆、最強、無縫（改用：具體數字、具體功能描述）

---

### Footer 內容

```
Nexus 智能協作平台

產品                    公司                    資源                    法律
產品功能                關於我們                 部落格                  服務條款
定價方案                加入我們                 開發者文件               隱私政策
客戶案例                聯絡我們                 系統狀態                 Cookie 政策
整合生態系              媒體資源包                Newsletter

© 2026 Nexus Technologies Inc. 版權所有
台北市信義區遠東金融廣場 20 樓 ｜ hello@nexus.io
```
