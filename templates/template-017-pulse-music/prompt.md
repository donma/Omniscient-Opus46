# Pulse 音樂工作室 — AI 生成提示詞

## 使用說明
將以下提示詞完整複製，貼入 Claude、ChatGPT 或任何 AI 助理，即可生成與本模板相同風格的完整網站。

---

## 完整提示詞

請幫我建立一個名為「Pulse 音樂工作室」的專業錄音室完整靜態網站，使用純 HTML、CSS、JavaScript，不使用任何框架。所有頁面都必須包含完整內容，使用繁體中文撰寫。

---

### 品牌背景設定

品牌名稱：Pulse 音樂工作室（英文副標：Professional Recording Studio · Taipei）
創立年份：2018 年
所在地：台北市松山區南京東路四段 101 號 3 樓（捷運松山站步行 3 分鐘）
品牌故事：由知名混音師林哲宇（業界人稱「Z」）創立，曾任職環球音樂台灣分部錄音工程師 8 年，2018 年辭職獨立創業。配備 SSL 9000 錄音台、Pro Tools HDX、NEVE 前置放大器等頂級設備，錄音室面積 200 坪，含 3 間錄音室（A/B/C 棚）。累計服務超過 100 位藝人與品牌，作品曾入圍第 34 屆金曲獎最佳錄音。
核心主張：「聲音是有靈魂的。我們的工作，是幫你找到屬於自己的聲音。」
服務範圍：錄音、混音、母帶後期（Mastering）、Podcast 製作、音樂製作（Composition）
語言：全站繁體中文，英文術語保留原文（如 SSL, Pro Tools, Mastering 等）

---

### 設計規格

**主視覺風格：Dark 暗色系 + 紫橘漸層 / 音波感 / 霓虹流光**

**色彩系統（CSS 變數，必須完全遵照）：**
```css
--bg: #0d0d14;
--surface: #14141f;
--card: #1a1a28;
--purple: #8b5cf6;
--orange: #f97316;
--pink: #ec4899;
--text: #f0f0f8;
--muted: #8888aa;
--border: #2a2a3e;
--gradient: linear-gradient(135deg, #8b5cf6, #f97316);
```

**字體：**
- 標題：Google Fonts「Poppins」，weight 600/800，用於所有主標、品牌名、數字
- 內文：Google Fonts「Noto Sans TC」，weight 300/400，用於說明段落、表單、列表
- 強調性英文（服務名稱、技術術語）：Poppins weight 700，--purple 色

**版面設計原則：**
- Border-radius：16px（現代感圓角）
- 深黑底色，紫橘漸層做強調（按鈕、hover、active 狀態）
- 音波裝飾：用 CSS 或 SVG 繪製音波線條（waveform）做背景裝飾元素
- 卡片：--card 背景，border: 1px solid --border
- hover：漸層邊框出現（border-image 或 outline），背景微微提亮
- 按鈕：background: var(--gradient)，hover 時 opacity 0.9 + scale(1.03)
- 流光效果：部分標題可加 CSS 漸層動畫 background-clip: text

**導航列：**
- --bg 深色背景，backdrop-filter blur(16px)
- 品牌 logo：「Pulse」Poppins weight 800，漸層色文字
- 手機版選單從「右側」滑入，--surface 背景
- 導覽連結（10個）：首頁、關於我們、錄音服務、作品試聽、設備介紹、收費方案、合作藝人、音樂專欄、常見問題、聯絡預約
- 右上角「預約工作室」按鈕（漸層背景）

---

### 頁面清單與詳細內容

#### 1. index.html（首頁）

**Hero 區塊（全螢幕）：**
- 深黑背景，背景以 CSS SVG 波形圖案（音波形狀）裝飾，紫色微光
- 中央：英文裝飾小字（Poppins）：「TAIPEI · PROFESSIONAL RECORDING STUDIO」
- 主標題（Poppins weight 800）：「讓你的聲音，被世界聽見」
- 副標題：「SSL 9000 頂級錄音台 · 100+ 藝人合作 · 金曲獎入圍工程師主理」
- 兩個按鈕：「探索服務」（漸層填色）、「試聽作品」（紫色邊框）
- 背景動效：CSS animation 緩慢脈衝波形（純 CSS 實現）

**4個核心服務（大卡片 2x2）：**
各附圖標（SVG）、服務名、一行描述、「了解更多」連結
- 專業錄音 Recording — 「A/B/C 三棚，依需求選擇，獨唱至管弦樂均可錄製」
- 混音 Mixing — 「SSL 主控台，數位/類比混合流程，為你的音樂帶來立體厚度」
- 母帶 Mastering — 「串流平台標準化、黑膠規格、實體 CD 規格，三種母帶方案」
- Podcast 製作 — 「從錄音到後期，一站式完成，含節目開頭音樂製作」

**精選作品展示（音波 UI + 播放鈕）：**
模擬 3 首作品的播放介面（非實際可播放，視覺效果）：
- 《霧》— 李明翰 feat. 陳之喬，流行 R&B，2023
- 《Gravity》— 黃柔 Soft Hsu，Indie Pop，2023
- 《無聲》— 潮浪樂團，後搖滾，2022

**設備亮點（橫向滾動）：**
SSL 9000 / Pro Tools HDX / NEVE 1073 / Neumann U87 / KRK Rokit 8

**統計數字（4格，大字）：**
- 100+ 合作藝人
- 6 座 錄音棚（含離島外包）
- 200 坪 錄音空間
- 1 座 金曲獎入圍

---

#### 2. about.html（關於我們）

**主理人介紹：**
林哲宇（Z）— 主錄音師 & 創辦人
「從小在父親的廣播室裡長大，大學念輔大音樂系，畢業後在唱片公司做了八年的錄音工程師。2018 年拿著全部積蓄，把松山區這三層樓的辦公室改建成今天的 Pulse。我只想做一件事——讓台灣的聲音更好聽。」

學歷：輔仁大學音樂系 / 美國 MI Hollywood 進修
代表作品：金曲入圍《山川》歌手林采霈 / 白金認證《你在哪》李明翰

**4位團隊成員（卡片）：**
1. 林哲宇（Z）— 主錄音師 & 創辦人，專長：錄音工程、聲音設計
2. 蔡依倫（Erin）— 混音師，曾任職 Sony Music，專長：人聲混音、R&B
3. 陳柏宇（Baron）— 母帶工程師，專長：串流母帶、黑膠轉製
4. 許雅文（Yuki）— Podcast 製作人 & 行政，管理客戶預約與節目後製

**工作室時間軸：**
- 2018：Pulse 創立，A 棚開業，第一位錄音客戶：新生代唱作人蘇品妤
- 2019：B 棚啟用，Podcast 服務上線
- 2020：疫情期間推出遠端混音服務，業績反而成長 40%
- 2021：C 棚擴建，引進 SSL 9000 主控台
- 2023：金曲獎最佳錄音入圍，團隊擴展至 4 人

---

#### 3. services.html（錄音服務）

頁面標題：「我們的服務」副標：「Sound is everything.」

**5個服務大卡片（附詳細說明）：**

1. 專業錄音 Recording
「A/B/C 三間錄音室各有特色：A 棚適合樂團/室內樂，B 棚主攻人聲，C 棚為 Podcast 與有聲書。可依需求混搭使用。」
適合：獨立歌手、樂團、配樂、廣告配音

2. 混音 Mixing
「以 SSL 數位/類比混合流程，人聲、樂器分軌逐一處理，最終呈現符合藝人品牌的聲音風格。」
交付：高品質 WAV + MP3，無限次修改（依方案）

3. 母帶後期 Mastering
「串流平台（Spotify/Apple Music/YouTube）標準化、實體 CD 母帶、黑膠刻片母帶，三種規格。」

4. Podcast 製作
「從節目企劃、錄音棚使用、剪輯、音效、封面設計，到上架協助，一站式完成。」

5. 音樂製作 Composition
「提供 Beat 製作、編曲、弦樂編寫等服務，由駐棚音樂製作人協助。」

→ 服務詳細頁連結 service-detail.html 以「專業錄音」為示範

---

#### 4. service-detail.html（專業錄音詳細頁）

標題：「專業錄音 — Recording」

技術規格：
- 錄音介面：Pro Tools HDX 2，192kHz / 32bit 錄製
- 麥克風：Neumann U87、AKG C414、Shure SM7B（人聲）；Shure SM57、Sennheiser e906（樂器）
- 前置放大：NEVE 1073，API 512、Universal Audio 610
- 監聽喇叭：PMC twotwo.8、KRK Rokit 8、NS10M（三種監聽環境）

**A/B/C 棚說明：**
- A 棚：面積 80 坪，獨立 Live Room + Control Room，可容納 6 人樂團
- B 棚：面積 40 坪，人聲/樂器，隔音 55dB NRC，超靜音環境
- C 棚：面積 30 坪，Podcast 專用，直播設備、綠幕、鏡頭

費率：A 棚 NT$3,000/小時，B 棚 NT$2,000/小時，C 棚 NT$1,200/小時（含工程師）
最低租借：3 小時

---

#### 5. portfolio.html（作品試聽）

頁面標題：「精選作品試聽」副標：「聽見 Pulse 的聲音」

**8件作品（音波 UI 設計）：**
每件作品：假照片（藝人宣傳照風格）、藝人名稱、歌曲名稱、曲風標籤、年份、「播放」按鈕（視覺裝飾，非真實播放）
1. 《霧》— 李明翰 × 陳之喬，R&B，2023
2. 《Gravity》— 黃柔 Soft Hsu，Indie Pop，2023
3. 《山川》— 林采霈，Folk，2022（金曲入圍作品）
4. 《無聲》— 潮浪樂團，Post-Rock，2022
5. 《你在哪》— 李明翰，Pop，2021（白金認證）
6. 《Catch Me》— 蘇品妤，Electronic Pop，2021
7. 《節氣》— 林采霈，Folk Pop，2020
8. 《深夜廣播》— Podcast 節目，2023

---

#### 6. equipment.html（設備介紹）

頁面標題：「設備規格」副標：「Top-tier gear for top-tier sound」

**12件設備（卡片，含品牌圖示/照片）：**
主控台類：SSL 9000G（混音主控台）、Neve 8078 復刻台
前置放大：NEVE 1073 × 16ch、API 512 × 8ch、Universal Audio 6176
麥克風：Neumann U87Ai × 4、AKG C414 × 2、Shure SM7B × 2、Shure SM57 × 4
監聽：PMC twotwo.8（主監聽）、KRK Rokit 8 × 2、Yamaha NS10M
數位轉換：Prism Sound Titan、Antelope Orion 32+

---

#### 7. pricing.html（收費方案）

頁面標題：「收費方案」副標：「透明定價，無隱藏費用」

**4個方案比較表格：**

方案一：小試牛刀 Starter — NT$8,000
含：3小時錄音（B棚）+ 1 首混音
適合：EP 試作、Demo 錄製

方案二：EP 方案 — NT$28,000
含：12 小時錄音 + 4 首混音 + 2 首母帶
適合：4 首歌 EP

方案三：專輯方案 — NT$68,000
含：30 小時錄音 + 10 首混音 + 10 首母帶
適合：Full Album 10 首

方案四：Podcast 方案 — NT$3,600/月
含：每月 4 集錄音（C棚）+ 後製 + 封面設計更新
適合：定期更新的 Podcast 節目

---

#### 8. blog.html（音樂專欄）

頁面標題：「音樂專欄」副標：「林哲宇的聲音筆記」

**4篇文章：**
1. 「混音入門 5 技巧：讓你的 Demo 聲音更專業」— 2026/03/01
2. 「Podcast 錄音怎麼做才好聽？空間選擇很重要」— 2026/02/10
3. 「串流時代的母帶製作：Spotify Loudness Normalization 是什麼？」— 2026/01/20
4. 「找到你的聲音：歌手如何在錄音室發揮最好的狀態」— 2026/01/05

---

#### 9. blog-detail.html（混音入門 5 技巧）

標題：「混音入門 5 技巧：讓你的 Demo 聲音更專業」
作者：林哲宇（Z）
日期：2026 年 3 月 1 日

內文（各技巧含標題 + 說明 100 字）：
1. 增益調整先行（Gain Staging）：在任何效果器之前，先確保每個軌道電平適當
2. EQ 先減後加：寧可 Cut 不需要的頻率，不要一味 Boost
3. 低音收緊（High Pass Filter）：所有非 Bass 樂器，150Hz 以下切掉
4. 創造前後層次（Depth）：利用 Reverb Pre-delay 創造空間感
5. 參考曲（Reference Track）：隨時與商業混音作品對比，不閉門造車

---

#### 10. artists.html（合作藝人）

頁面標題：「合作藝人」副標：「100+ 位信任我們的聲音」

**6位代表性藝人（大卡片）：**
1. 李明翰 — 流行 R&B 歌手，合作作品：《霧》《你在哪》，累計 2 張 EP
2. 林采霈 — 民謠創作歌手，合作作品：《山川》（金曲入圍），《節氣》
3. 黃柔 Soft Hsu — 獨立流行，首張個人專輯《Gravity》
4. 潮浪樂團 — 後搖滾四人樂團，在 Pulse 錄製兩張 EP
5. 蘇品妤 — 電子流行創作人，2018 年 Pulse 第一位客戶
6. 《深夜廣播》— 科技 Podcast，穩定合作 2 年，月均 5 萬次播放

---

#### 11. faq.html（常見問題）

Accordion 形式，10 題：
- 錄音前需要自備設備嗎？
- 可以帶自己的樂手一起來嗎？
- 如何預約錄音時段？
- 費用如何計算，超時怎麼辦？
- 遠端混音服務如何進行？
- 可以試聽混音成品後再決定要不要修改嗎？
- 母帶交付格式有哪些？
- 錄音檔案版權歸誰？
- 有學生優惠嗎？
- 企業廣告配音有特別方案嗎？

---

#### 12. contact.html（聯絡預約）

左側：
地址：台北市松山區南京東路四段 101 號 3 樓
電話：(02) 2763-9988
Email：booking@pulse-studio.tw
LINE：@pulse.studio
Instagram：@pulse_studio_taipei
營業時間：週一至週日 10:00-22:00（全年無休）

右側：預約表單（漸層強調色欄位邊框）：
姓名/藝名、電話、Email、服務類型（下拉：錄音/混音/母帶/Podcast/其他）、偏好棚別（A/B/C/不指定）、預計日期與時段、預計時數、補充說明

---

### 圖片使用說明

Unsplash 搜尋關鍵字：
- Hero：「recording studio dark」、「mixing console neon」
- 設備：「SSL mixing desk」、「studio microphone」、「pro tools」
- 藝人：「musician studio singer」、「band recording」
- 人物：「audio engineer headphones dark」

---

### 文案風格要求

- 語調：專業、帶點藝術家氣質，有自信但不傲慢
- 英文音樂術語保留原文（Mastering / Mixing / Pro Tools / SSL）
- 技術說明清晰但不刻板，讓非音樂人也能理解
- 標題可用音樂隱喻（如「讓你的聲音發光」、「找到屬於你的頻率」）
- 價格以「NT$XX,XXX」格式
- 頁尾：「© 2026 Pulse 音樂工作室 · 台北松山 · Sound is everything.」

---

### 技術要求

- 純 HTML5 + CSS3 + 原生 JavaScript
- CSS 漸層（--gradient）廣泛運用於按鈕、hover、強調元素
- 音波 SVG 裝飾背景（可用 CSS path 或 inline SVG）
- border-radius: 16px 全站統一
- 手機版選單從右側滑入，--surface 深色背景
- 作品試聽頁的音波 UI：CSS 偽元素模擬進度條 + 播放按鈕（視覺裝飾）
- 標題漸層文字：background: var(--gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent
- Intersection Observer 滾動淡入 + slide-up 動畫
- 所有頁面可直接在瀏覽器開啟

請生成完整的 12 個 HTML 檔案，每個檔案含完整 CSS 與 JavaScript，可直接使用。
