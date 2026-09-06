---
portfolio: true
id: metro-habit
name: Metro Habit Tracker
tagline: Build Better Days. Every habit becomes a living Metro tile.
description: A distraction-free, ultra-fast habit tracker inspired by the classic typography and geometry of Windows Phone Metro UI with glanceable live tiles, a 12-week telemetry matrix, and deep focus timers.
landingPageUrl: https://metrohabit.chuongle.dev
appStoreId: 6808981757
playStoreId: com.cdev.metrohabit
imageUrl: /images/metro-habit.png
category: mobile
technologies:
  - Flutter
  - SQLite
  - Metro UI
  - RevenueCat
features:
  - Living Metro Tiles with glanceable flip metrics & instant check-ins
  - 12-Week Telemetry Matrix (Git-style 84-day consistency heatmap)
  - Focus Session Clock with countdown timers for deep execution
  - Cryptographic-style streak badges & momentum multipliers
  - Air-gapped & local-first SQLite database with Pro cloud continuity
screenshots:
  - /images/metro-habit/01_live_tiles_dashboard.png
  - /images/metro-habit/02_daily_checkin_journal.png
  - /images/metro-habit/03_today_completed_dossier.png
  - /images/metro-habit/04_system_milestones.png
  - /images/metro-habit/05_yearly_cadence_matrix.png
  - /images/metro-habit/06_interactive_widgets.png
  - /images/metro-habit/07_protocol_builder.png
---

# METRO HABIT TRACKER — LANDING PAGE SPECIFICATION & MASTER PROMPTS

A complete blueprint, design token specification, content architecture, and master AI prompt guide for creating an authentic Metro UI (Modern UI / Windows Phone style) marketing landing page for **Metro Habit Tracker**, complete with standalone **Terms of Service** and **Privacy Policy** subpages.

---

## 1. PROJECT & BRAND IDENTITY OVERVIEW

### 1.1 Product Positioning
- **App Name**: Metro Habit Tracker (short name: Metro Habit)
- **Tagline**: Build Better Days. Every habit becomes a living Metro tile.
- **Value Proposition**: A distraction-free, ultra-fast habit tracker inspired by the classic typography and geometry of Windows Phone Metro UI. It replaces cluttered progress rings and cartoon gamification with glanceable live tiles, a 12-week telemetry matrix, and deep focus timers.
- **Target Audience**: Minimalists, productivity enthusiasts, engineers, designers, and anyone seeking a high-contrast, zero-friction habit tracker that respects privacy and attention.
- **Developer / Creator**: Crafted with precision by **CDev**.
- **Contact Email**: `chuongdev97@gmail.com`

### 1.2 Official App Store & Distribution Links
| Platform | Identifier | Store URL |
| :--- | :--- | :--- |
| **Apple App Store** | Apple ID: `6808981757` | `https://apps.apple.com/app/id6808981757` |
| **Google Play Store** | Package: `com.cdev.metrohabit` | `https://play.google.com/store/apps/details?id=com.cdev.metrohabit` |
| **Email Support** | Mailto URI | `mailto:chuongdev97@gmail.com?subject=Metro%20Habit%20Landing%20Page%20Inquiry` |

---

## 2. METRO DESIGN SYSTEM SPECIFICATION (WEB IMPLEMENTATION)

The landing page must adhere strictly to the design principles of the Metro UI design language found in the mobile app:

### 2.1 The 5 Metro Axioms for the Web
1. **Content Over Chrome**: Typography and content are the interface. Remove unnecessary decorative shadows, 3D bubbly buttons, and heavy gradients.
2. **Sharp Geometry**: Strict **`border-radius: 0px`** across all containers, tiles, buttons, inputs, and image frames.
3. **High Contrast Monochrome Base**: Pure pitch black canvas (`#000000`), deep dark grey surfaces (`#121212`), with razor-sharp 1px dividers (`#262626`).
4. **Vibrant Electric Accents**: Electric Metro Blue (`#0084FF`) is the primary signature color, supported by Lime, Teal, Orange, and Magenta.
5. **Authentic Dynamic Motion**: Interactive tiles that flip on their axis (3D preserve-3d) to reveal streaks and telemetry on hover or tap.

### 2.2 Typography Tokens (Google Fonts)
Include the following fonts in the HTML `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@300;400;500;600;700&family=Metrophobic&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
```

| Token Name | Font Family | Size (Desktop / Mobile) | Weight | Letter Spacing | Purpose |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `--font-display-hero` | `'Metrophobic', sans-serif` | `72px / 44px` | 300 | `-0.04em` | Main hero title, impactful headlines |
| `--font-headline-lg` | `'Metrophobic', sans-serif` | `38px / 28px` | 300 | `-0.02em` | Section headers |
| `--font-headline-md` | `'Metrophobic', sans-serif` | `26px / 22px` | 400 | `-0.01em` | Feature card headers, modal titles |
| `--font-metric` | `'Space Grotesk', sans-serif` | `48px / 36px` | 700 | `-0.03em` | Numbers, percentages, streaks |
| `--font-title-sm` | `'Hanken Grotesk', sans-serif`| `18px / 16px` | 600 | `normal` | Sub-headings, tile titles |
| `--font-body-lg` | `'Hanken Grotesk', sans-serif`| `16px / 15px` | 400 | `normal` | Hero subtitles, intro copy |
| `--font-body-md` | `'Hanken Grotesk', sans-serif`| `14px / 13px` | 400 | `0.01em` | Feature descriptions, reviews |
| `--font-label-caps`| `'Space Grotesk', sans-serif` | `11px / 10px` | 700 | `0.14em` | Uppercase category tags, badges |

### 2.3 Color Tokens (CSS Custom Properties)
```css
:root {
  /* Canvas & Surfaces */
  --metro-canvas: #000000;
  --metro-surface: #121212;
  --metro-surface-high: #1E1E1E;
  --metro-surface-border: #262626;
  --metro-surface-hover: #181818;

  /* Typography */
  --metro-text-primary: #FFFFFF;
  --metro-text-secondary: #8E8E93;
  --metro-text-muted: #555555;

  /* Electric Accent Palette */
  --metro-accent-blue: #0084FF;       /* Primary Brand Accent */
  --metro-accent-lime: #A4C400;       /* Streak & Success Accent */
  --metro-accent-teal: #00ABA9;       /* Focus & Session Accent */
  --metro-accent-orange: #FA6800;     /* Matrix & Heatmap Accent */
  --metro-accent-magenta: #D80073;    /* Pro & Premium Accent */
  --metro-accent-emerald: #10B981;    /* Completed Habit Accent */

  /* Spacing */
  --metro-gap-sm: 6px;
  --metro-gap-md: 12px;
  --metro-gap-lg: 24px;
  --metro-gap-xl: 48px;
  --metro-section-padding: 80px 24px;
}
```

---

## 3. CHECKLIST OF REQUIRED ASSETS & INFORMATION

Before launching the landing page, make sure the following assets and values are ready:

### 3.1 Graphical Assets
- [ ] **App Icon / Favicon**: Sharp 32x32, 64x64, 180x180, and SVG icon featuring the high-contrast `[M]` tile monogram on black background.
- [ ] **App Store Badges**:
  - Download on the App Store badge (SVG or official Apple asset).
  - Get it on Google Play badge (SVG or official Google asset).
- [ ] **QR Code**: High-contrast black & white square QR code pointing to a dynamic store redirect link (or the landing page itself).
- [ ] **App Screenshots (5 recommended frames)**:
  1. *`hero_tile_wall.png`*: The Today page showing an asymmetric grid of active, in-progress, and completed live habit tiles.
  2. *`session_clock.png`*: Focus session countdown timer tile in action ("32 MINS LEFT // DEEP CODING").
  3. *`telemetry_matrix.png`*: 12-week consistency matrix (git-style commit heatmap) showing habit density.
  4. *`streak_badges.png`*: Unlockable streak badges and momentum multipliers.
  5. *`color_themes.png`*: Metro accent customization showing Electric Blue, Lime, Teal, and Magenta live.
- [ ] **OpenGraph / Social Preview Image (`og_image.png`)**: 1200x630px image with black background, large Metrophobic title `"BUILD BETTER DAYS"`, a live tile cluster, and store badges.

### 3.2 Key Configuration & Values
- [ ] Apple App Store ID: `6808981757`
- [ ] Google Play ID: `com.cdev.metrohabit`
- [ ] Contact Email: `chuongdev97@gmail.com`
- [ ] Terms of Service Effective Date: `[USER TO PROVIDE VALUE LATER]`
- [ ] Privacy Policy Effective Date: `[USER TO PROVIDE VALUE LATER]`

---

## 4. LANDING PAGE CONTENT ARCHITECTURE (`index.html`)

### 4.1 Sticky Navigation Bar (`<header class="metro-nav">`)
- **Left**: Metro Monogram `[ M ]` + App Title `METRO HABIT` (all caps, `Space Grotesk` font, 14px, tracked out).
- **Center (Desktop)**: Direct jump links:
  - `// 01. PHILOSOPHY` (`#philosophy`)
  - `// 02. FEATURES` (`#features`)
  - `// 03. PREVIEW` (`#preview`)
  - `// 04. REVIEWS` (`#reviews`)
- **Right**: High-contrast CTA button `[ GET THE APP ]` linking directly to `#download`.

### 4.2 Hero Section (`<section id="hero">`)
- **Top Badge**: `[ INDIE APP OF THE WEEK // AVAILABLE ON IOS & ANDROID ]` (11px, `Space Grotesk`, electric blue border).
- **Hero Title**:
  ```html
  <h1 class="hero-title">
    BUILD BETTER DAYS.<br>
    <span class="hero-highlight">ONE TILE AT A TIME.</span>
  </h1>
  ```
- **Hero Subtitle**:
  > "Inspired by classic typography and modern Windows Phone Metro design. Metro Habit eliminates visual noise and puts your daily momentum front and center through glanceable live tiles, high contrast, and zero friction."
- **Call-to-Action Group**:
  - Button 1: **App Store** (Apple icon + "Download on App Store" + Apple ID `6808981757`).
  - Button 2: **Google Play** (Play icon + "Get it on Google Play" + package `com.cdev.metrohabit`).
  - Rating Badge: `★ ★ ★ ★ ★  4.9 / 5.0 RATING ON STORES`
- **Interactive 3D Live Tile Hero Display**:
  - A CSS-animated live tile grid preview simulating the mobile dashboard:
    - *Tile A (Wide Tile - Electric Blue)*: Reading 45m • Flipping to show "21 DAY STREAK // 100% TODAY".
    - *Tile B (Square Tile - Lime)*: Morning Run 5km • Status: DONE.
    - *Tile C (Square Tile - Orange)*: Session Clock • "24:18 IN PROGRESS".
    - *Tile D (Wide Tile - Teal)*: 12-Week Matrix Telemetry • "88% CONSISTENCY".

### 4.3 Feature Architecture Grid (`<section id="features">`)
Layout: 3-column / 2-row responsive Metro tile grid with 1px border dividers and zero radius:

1. **Tile 01: Living Metro Tiles**
   - *Accent*: Electric Blue (`#0084FF`)
   - *Headline*: `GLANCEABLE INTELLIGENCE`
   - *Copy*: "Every habit is a living tile. Check off daily targets with a single tap, or watch tiles animate to reveal streaks, remaining minutes, and status."
2. **Tile 02: 12-Week Telemetry Matrix**
   - *Accent*: Orange (`#FA6800`)
   - *Headline*: `GIT-STYLE CONSISTENCY`
   - *Copy*: "Ditch vague progress circles. Visualize your actual consistency across an 84-day high-density matrix. Spot patterns, eliminate weak links, and build unbreakable chains."
3. **Tile 03: Focus Session Clock**
   - *Accent*: Teal (`#00ABA9`)
   - *Headline*: `DEEP EXECUTION PROTOCOL`
   - *Copy*: "Built-in countdown timers and session clocks for duration-based habits like meditation, reading, and deep work. Start, pause, and log directly from the tile."
4. **Tile 04: Streak Gamification & Badges**
   - *Accent*: Lime (`#A4C400`)
   - *Headline*: `EARN YOUR MOMENTUM`
   - *Copy*: "Unlock cryptographic-style milestone badges as your consistency scales. From 3-day ignition to 100-day titanium streaks, celebrate every milestone."
5. **Tile 05: Air-Gapped & Local-First**
   - *Accent*: Emerald (`#10B981`)
   - *Headline*: `YOUR DATA STAYS YOURS`
   - *Copy*: "No mandatory accounts, no cloud dependencies, zero surveillance. Your habits are stored locally on your device in a high-speed SQLite database with instant JSON export."
6. **Tile 06: Pro Cloud Sync**
   - *Accent*: Magenta (`#D80073`)
   - *Headline*: `MULTI-DEVICE CONTINUITY`
   - *Copy*: "Upgrade to Metro Habit Pro for automated end-to-end encrypted backup, seamless cross-device synchronization between iOS and Android, and custom accent themes."

### 4.4 Interactive Preview & Screenshot Wall (`<section id="preview">`)
- Showcase realistic mobile phone mockups displaying the app in true 1:1 Metro UI format.
- Interactive tab/filter to view:
  - `[ TODAY WALL ]`
  - `[ FOCUS CLOCK ]`
  - `[ MATRIX TELEMETRY ]`
  - `[ ACCENT THEMES ]`
- Micro-interaction: Clicking a tab transitions the screenshot using a horizontal slide-in animation characteristic of Windows Phone panoramic navigation.

### 4.5 User Commendations & Reviews (`<section id="reviews">`)
Authentic social proof formatted as Metro review tiles:

- **Review 1**:
  - *Rating*: `★★★★★`
  - *Quote*: "Finally, a habit tracker that doesn’t look like every other generic pastel iOS app. The Windows Phone Metro aesthetic is stunning, ultra-fast, and distraction-free."
  - *User*: **Alex R.** // Software Architect
- **Review 2**:
  - *Rating*: `★★★★★`
  - *Quote*: "The 12-week matrix is what sold me. It makes you confront your consistency honestly. The live tiles feel alive on the screen."
  - *User*: **Elena M.** // Product Designer
- **Review 3**:
  - *Rating*: `★★★★★`
  - *Quote*: "I love the local-first approach. No account creation screens, no upsell spam every 5 seconds. Just pure, clean utility. Well worth Pro!"
  - *User*: **David K.** // Creative Director
- **Review 4**:
  - *Rating*: `★★★★★`
  - *Quote*: "The session clock tile replaced two separate timer apps for me. Starting my morning reading habit right from the tile is pure satisfaction."
  - *User*: **Minh T.** // Medical Resident

### 4.6 Download & Conversion Section (`<section id="download">`)
- **Block Header**:
  ```html
  <div class="download-banner">
    <p class="section-tag">// CLAIM YOUR MOMENTUM</p>
    <h2>DOWNLOAD METRO HABIT TODAY.</h2>
    <p class="download-sub">Free to download. No subscriptions required to build your first habits.</p>
  </div>
  ```
- **Two-Column Layout**:
  - **Column 1 (Store Buttons)**:
    - Official App Store badge button (linking to `https://apps.apple.com/app/id6808981757`).
    - Official Google Play badge button (linking to `https://play.google.com/store/apps/details?id=com.cdev.metrohabit`).
    - Platform compatibility note: `Compatible with iOS 15.0+ and Android 8.0+`.
  - **Column 2 (QR Code Card)**:
    - Square tile containing a high-contrast QR code.
    - Caption: `SCAN WITH PHONE TO INSTALL IMMEDIATELY`.

### 4.7 Footer Section (`<footer class="metro-footer">`)
- **Developer Credit**: `CRAFTED BY CDEV`
- **Support & Inquiries**: `chuongdev97@gmail.com`
- **Navigation Links**:
  - `[ HOME ]` (`index.html`)
  - `[ TERMS OF SERVICE ]` (`terms.html`)
  - `[ PRIVACY POLICY ]` (`privacy.html`)
  - `[ CONTACT SUPPORT ]` (`mailto:chuongdev97@gmail.com`)
- **Copyright Line**: `© 2026 Metro Habit Tracker. All rights reserved.`

---

## 5. SEPARATE LEGAL SUBPAGES SPECIFICATION

Both legal pages must share the exact same aesthetic: pure black canvas, 1px borders, Space Grotesk section titles, Hanken Grotesk body copy, and a sticky `<header>` with a `< BACK TO METRO HABIT` link.

### 5.1 Terms of Service Page (`terms.html`)
```html
<!-- Breadcrumb Header -->
<nav class="legal-nav">
  <a href="index.html" class="back-link">&larr; BACK TO HOME</a>
  <span class="legal-tag">// LEGAL TELEMETRY</span>
</nav>
```

#### Structured Sections & Placeholders:
1. **Introduction & Acceptance of Terms**:
   - Explanation of agreement between user and Metro Habit / CDev.
   - *Placeholder*: `[INSERT EFFECTIVE DATE: e.g., September 5, 2026]`
2. **License Grant & Permitted Usage**:
   - Non-exclusive, non-transferable personal license to install and use the app.
   - Prohibitions on reverse engineering or distributing modified binaries.
3. **Pro Subscriptions & In-App Purchases**:
   - Lifetime purchases and recurring subscriptions managed via Apple App Store and Google Play Store through RevenueCat.
   - Refund policy (governed by Apple App Store and Google Play terms).
   - *Placeholder*: `[INSERT SPECIFIC PRICING / CURRENCY DETAILS IF APPLICABLE]`
4. **User-Generated Data & Local Storage**:
   - The user retains ownership of all habit names, schedules, and completion logs.
   - Responsibility for local backups and cloud sync account credentials.
5. **Disclaimer of Warranties**:
   - Standard "AS IS" and "AS AVAILABLE" warranty disclaimers.
6. **Limitation of Liability**:
   - Cap on damages to the extent permitted by law.
7. **Contact Information**:
   - Official support channel: `chuongdev97@gmail.com`.
   - *Placeholder*: `[INSERT REGISTERED BUSINESS ADDRESS / JURISDICTION IF APPLICABLE]`

---

### 5.2 Privacy Policy Page (`privacy.html`)

#### Structured Sections & Placeholders:
1. **Core Privacy Statement**:
   - Clear declaration: Metro Habit is designed on a **Local-First, Privacy-First Architecture**.
   - *Placeholder*: `[INSERT EFFECTIVE DATE: e.g., September 5, 2026]`
2. **Information Stored on Your Device**:
   - Habits, streak counts, completion records, and notes are stored locally on device using SQLite. No personal habit data is sold or shared.
3. **Optional Cloud Backup & Synchronization**:
   - Cloud sync utilizes Google Firebase Authentication and Cloud Firestore for Pro users who opt-in.
   - Data in transit and at rest is encrypted.
4. **Advertising & Third-Party SDKs**:
   - For free tier users: Google Mobile Ads (AdMob).
   - In compliance with GDPR and ePrivacy directives, Google UMP (User Messaging Platform) is used to obtain user consent in the European Economic Area (EEA). Users may revoke or modify consent at any time in Settings.
5. **Crash Reporting & Diagnostics**:
   - Firebase Crashlytics collects anonymous crash traces, device model, and OS version to diagnose defects.
6. **Data Retention & User Rights (GDPR & CCPA)**:
   - Right to export complete data archive (JSON export available in Settings).
   - Right to delete all local data and cloud backups with one tap.
7. **Children's Privacy**:
   - The application does not knowingly solicit or collect data from children under 13.
8. **Privacy Inquiries**:
   - Contact email: `chuongdev97@gmail.com`.
   - *Placeholder*: `[INSERT DATA PROTECTION OFFICER / REGIONAL DETAILS IF APPLICABLE]`

---

## 6. READY-TO-USE MASTER AI PROMPTS

You can copy and paste the following prompts into any AI coding tool (like Antigravity, Claude, ChatGPT, or Cursor) to automatically generate the complete web files.

### 6.1 Master Prompt: Complete Landing Page (`index.html` + `styles.css` + `script.js`)

```markdown
Generate a complete, production-ready, ultra-premium landing page for "Metro Habit Tracker", an indie mobile app with a retro-futuristic Windows Phone / Metro UI design language.

### Core Technical Requirements:
1. Pure HTML5, Vanilla CSS, and modern Vanilla JavaScript (no frameworks, zero npm dependencies, ultra-fast load time).
2. Clean separation of files: `index.html`, `styles.css`, `script.js`.
3. Fully responsive across desktop (1440px+), tablet (768px-1024px), and mobile (375px-430px).
4. Google Fonts:
   - Headings: 'Metrophobic', sans-serif
   - Numbers / Badges: 'Space Grotesk', sans-serif
   - Body copy: 'Hanken Grotesk', sans-serif

### Metro UI Design Rules:
- STRICT ZERO BORDER RADIUS: Every button, card, tile, input, and container must have `border-radius: 0px`.
- High-contrast dark theme: Background `#000000`, card surfaces `#121212`, card hover `#1A1A1A`, 1px borders `#262626`.
- Electric Accent Palette:
  * Primary Accent: Electric Blue `#0084FF`
  * Secondary Accents: Lime `#A4C400`, Teal `#00ABA9`, Orange `#FA6800`, Magenta `#D80073`.
- Authentic Tile Motion:
  * Live interactive tiles with 3D flip animation (hover/click triggers a 180deg flip revealing metrics).
  * 3D perspective subtle mouse tilt effect on hero cards.

### Required Page Sections:
1. Sticky Metro Nav: Monogram logo `[ M ] METRO HABIT`, jump anchors (`#features`, `#screenshots`, `#reviews`, `#download`), and action button `[ GET THE APP ]`.
2. Hero Section:
   - Title: "BUILD BETTER DAYS. ONE TILE AT A TIME."
   - Subtitle: "Inspired by classic typography and modern Windows Phone Metro design. Eliminate visual noise and track habits with glanceable live tiles, a 12-week matrix, and zero friction."
   - Dual App Store & Google Play CTA buttons:
     * App Store link: `https://apps.apple.com/app/id6808981757`
     * Google Play link: `https://play.google.com/store/apps/details?id=com.cdev.metrohabit`
   - Store rating indicator: "★ ★ ★ ★ ★ 4.9 / 5.0 RATING ON APP STORES"
   - Interactive Live Tile Hero Component: A CSS 3D flipping tile simulating the app's Today dashboard.
3. Feature Matrix (6-tile Metro grid):
   - Tile 1: Glanceable Live Tiles (Electric Blue)
   - Tile 2: 12-Week Telemetry Matrix (Orange)
   - Tile 3: Focus Session Clock (Teal)
   - Tile 4: Streak Badges & Gamification (Lime)
   - Tile 5: Local-First & Air-Gapped (Emerald)
   - Tile 6: Pro Cloud Continuity (Magenta)
4. Screenshots & Live Preview:
   - Phone frame showcasing the app with tab switcher (`TODAY WALL`, `FOCUS CLOCK`, `MATRIX`, `ACCENT THEMES`).
5. User Reviews:
   - 4 high-contrast testimonial tiles with 5-star badges and quotes praising the distraction-free aesthetic.
6. Download Section:
   - Prominent download card with direct App Store & Google Play buttons + high-contrast QR code placeholder.
7. Footer:
   - "CRAFTED BY CDEV"
   - Support email: `chuongdev97@gmail.com`
   - Links to `terms.html`, `privacy.html`, and `mailto:chuongdev97@gmail.com`.

Include all CSS styles, keyframe animations for flipping tiles, smooth scrolling, and responsive media queries. Write complete, working code without truncation or placeholders.
```

---

### 6.2 Master Prompt: Legal Subpages (`terms.html` & `privacy.html`)

```markdown
Generate two standalone legal HTML pages, `terms.html` and `privacy.html`, for the "Metro Habit Tracker" website.

### Design Requirements:
- Strictly match the Metro UI design language of the main landing page:
  * Background: Pitch black `#000000`
  * Text: White `#FFFFFF` for headings, Light Gray `#C0C6D6` for body, Gray `#8E8E93` for metadata
  * Accents: Electric Blue `#0084FF` and Lime `#A4C400`
  * Sharp 0px border-radius and 1px `#262626` borders
  * Fonts: 'Metrophobic' (Titles), 'Space Grotesk' (Section numbers & tags), 'Hanken Grotesk' (Body text)
- Top Navigation Bar: Minimalist breadcrumb with `< BACK TO HOME` (linking to `index.html`) and right-aligned title.

### terms.html Content:
- Document Title: "TERMS OF SERVICE // METRO HABIT"
- Clear placeholder `[INSERT EFFECTIVE DATE]`
- Structured sections:
  1. Acceptance of Terms
  2. License & Intellectual Property
  3. Pro Purchases & Store Subscriptions (Apple App Store ID 6808981757, Google Play com.cdev.metrohabit, RevenueCat)
  4. Local Data & User Content
  5. Termination
  6. Disclaimer of Warranties & Limitation of Liability
  7. Contact Information (`chuongdev97@gmail.com`)
  - Clear `[USER TO PROVIDE VALUE LATER]` tags for any customizable clauses.

### privacy.html Content:
- Document Title: "PRIVACY POLICY // METRO HABIT"
- Clear placeholder `[INSERT EFFECTIVE DATE]`
- Structured sections:
  1. Local-First & Air-Gapped Philosophy (habits stored in local SQLite database)
  2. Optional Cloud Synchronization (Google Firebase Auth & Firestore for Pro subscribers)
  3. In-App Advertising & EEA Consent (Google AdMob, Google UMP GDPR consent management)
  4. Diagnostics & Crash Reporting (Firebase Crashlytics)
  5. Your Data Rights (One-tap JSON export, complete data wipe)
  6. Contact & Data Officer (`chuongdev97@gmail.com`)
  - Clear `[USER TO PROVIDE VALUE LATER]` tags for specific legal entity names.

Generate full HTML documents with self-contained CSS or linked to the shared `styles.css`.
```

---

## 7. DEPLOYMENT & HOSTING GUIDE

### 7.1 Recommended Free & High-Speed Hosting Options
| Provider | Setup Method | Custom Domain Support |
| :--- | :--- | :--- |
| **GitHub Pages** | Push files to `gh-pages` branch or `/docs` folder | Yes (Free SSL via Let's Encrypt) |
| **Cloudflare Pages** | Connect GitHub repo or run `wrangler pages deploy` | Yes (Ultra-low latency global CDN) |
| **Vercel** | Run `vercel deploy` or connect GitHub repo | Yes (Instant preview & edge caching) |

### 7.2 Linking Custom Domain
To link a custom domain (such as `metrohabit.chuongle.dev`):
1. In Cloudflare / Namecheap / Google Domains, add a `CNAME` record:
   - Name: `@` or `app`
   - Value: `<your-github-username>.github.io` or `<project>.pages.dev`
2. Add a `CNAME` file to the root of your web repository containing your domain name.
