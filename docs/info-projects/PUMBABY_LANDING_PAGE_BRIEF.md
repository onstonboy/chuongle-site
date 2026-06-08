---
portfolio: true
id: pumbaby
name: PumBaby
tagline: Gentle tracking for tired parents.
description: Log feeding, sleep, diapers, and more in under 2 seconds — even one-handed in the dark. Local-first baby tracking that respects your privacy.
landingPageUrl: https://pumbaby.app
playStoreId: com.cdev.pumbaby
imageUrl: /images/pumbaby.png
category: mobile
technologies:
  - Flutter
  - Firebase
  - Local-first
features:
  - One-tap logging for feeding, sleep, diapers & 11 tracker types
  - Concurrent timers with lock-screen notifications and widgets
  - Local-first — no account required, data stays on your device
  - Night mode built for 3 AM logging with warm, low-glare theme
  - Export CSV/JSON and optional iCloud sync & family sharing
---

# PumBaby — Landing Page Content & Build Brief

**Document purpose:** Everything a designer or developer needs to build a modern, parent-friendly marketing site for PumBaby — including copy, structure, design tokens, screenshot slots, store CTAs, sample reviews, hero animation direction, and full **Privacy Policy** + **Terms of Service** page content.

**Last updated:** June 8, 2026  
**App version referenced:** 1.0.0  
**Target audience:** New and expecting parents, caregivers, partners, grandparents — especially those logging at 3 AM with one hand free.

---

## Table of Contents

1. [Brand Overview](#1-brand-overview)
2. [Site Map & Pages](#2-site-map--pages)
3. [Design System (Modern UI)](#3-design-system-modern-ui)
4. [Global Layout & Navigation](#4-global-layout--navigation)
5. [Home Page — Section-by-Section](#5-home-page--section-by-section)
6. [Hero Section & Animation Spec](#6-hero-section--animation-spec)
7. [Screenshot Gallery](#7-screenshot-gallery)
8. [Feature Deep-Dives (Parent Copy)](#8-feature-deep-dives-parent-copy)
9. [Premium / Pricing Section](#9-premium--pricing-section)
10. [User Reviews Section](#10-user-reviews-section)
11. [Download & Store CTAs](#11-download--store-ctas)
12. [FAQ for Parents](#12-faq-for-parents)
13. [Footer](#13-footer)
14. [Privacy Policy Page (Full Text)](#14-privacy-policy-page-full-text)
15. [Terms of Service Page (Full Text)](#15-terms-of-service-page-full-text)
16. [SEO, Social & Analytics](#16-seo-social--analytics)
17. [Asset Checklist](#17-asset-checklist)
18. [Implementation Notes](#18-implementation-notes)

---

## 1. Brand Overview

| Field | Value |
|-------|-------|
| **App name** | PumBaby |
| **Tagline** | Gentle tracking for tired parents. |
| **One-line pitch** | Log feeding, sleep, diapers, and more in under 2 seconds — even one-handed in the dark. |
| **Design persona** | *Nurturing Companion* — calm, reassuring, never clinical |
| **Core promise** | Local-first baby tracking that respects your privacy, works offline, and never gets in the way at 3 AM |
| **Platforms** | iOS & Android (Flutter) |
| **Languages in app** | English, Vietnamese, Chinese, Spanish |
| **Bundle IDs** | iOS/Android prod: `com.cdev.pumbaby` · dev: `com.cdev.pumbaby.dev` |
| **Support email** | chuongdev97@gmail.com |
| **Store links** | *Placeholder until published — see [§11](#11-download--store-ctas)* |

### Brand voice (for all copy)

- **Warm, not cute.** Speak to exhausted adults with empathy — no baby-talk overload.
- **Plain language.** “Last feed 2h ago” beats “feeding interval analytics.”
- **Reassuring.** “Your data stays on your device” — privacy is a feature, not fine print.
- **Honest about Premium.** Free core logging is generous; Premium unlocks sync, insights, and family tools.

### Three pillars (use across hero, features, and meta description)

1. **Frictionless logging** — concurrent timers + one-tap quick logs  
2. **Outside-the-app convenience** — home widgets, live timer notifications, quick actions  
3. **Privacy & data ownership** — no mandatory account, full export, optional family sharing  

---

## 2. Site Map & Pages

```
/                     → Home (marketing landing)
/privacy              → Privacy Policy (standalone page)
/terms                → Terms of Service (standalone page)
/support              → Optional: FAQ + contact (can live on home as anchor sections)
```

**Recommended home anchors:**

| Anchor ID | Section |
|-----------|---------|
| `#features` | Why PumBaby |
| `#screenshots` | App gallery |
| `#how-it-works` | 3-step flow |
| `#premium` | Plans |
| `#reviews` | Parent stories |
| `#faq` | Questions |
| `#download` | Store badges |

---

## 3. Design System (Modern UI)

Align with the in-app **“Lullaby & Growth”** design system. Landing page should feel like an extension of the app — soft-modern, sage & cream, generous whitespace.

### 3.1 Color tokens

| Token | Hex | Usage |
|-------|-----|-------|
| **Primary (Sage-Teal)** | `#006b5c` | CTAs, links, active states, hero accent |
| **Primary container** | `#5bb5a2` | Soft badges, icon backgrounds |
| **Primary fixed / glow** | `#7dd7c3`, `#99f3de` | Hero glow, animated orbs |
| **Surface / background** | `#fbf9f8` | Page background (warm off-white) |
| **Surface container** | `#efeded` | Card backgrounds |
| **On-surface (text)** | `#1b1c1c` | Body text |
| **On-surface variant** | `#3e4946` | Secondary text |
| **Tertiary (Indigo)** | `#4f56ab` | Insights / analytics accents |
| **Error** | `#ba1a1a` | Rare; avoid on marketing except legal |

**Category colors** (for feature icons / screenshot labels):

| Category | Suggested accent |
|----------|------------------|
| Feed | Soft coral `#E8A598` |
| Sleep | Muted indigo `#8B9DC3` |
| Diaper | Warm amber `#D4A574` |
| Pump | Soft teal (primary) |
| Health | Soft rose `#C9A0A0` |
| Growth | Sage green `#7BA898` |

### 3.2 Typography

| Role | Font | Size / weight | Notes |
|------|------|---------------|-------|
| **Display / H1** | Quicksand | 40–56px / 700 | Hero headline |
| **Headline** | Quicksand | 24–32px / 600 | Section titles |
| **Body** | Nunito Sans | 16–18px / 400 | Paragraphs; line-height 1.5–1.6 |
| **Label / eyebrow** | Nunito Sans | 14px / 700, letter-spacing 0.05em | “FOR TIRED PARENTS” badges |
| **Stats / numbers** | Quicksand | 32–48px / 700 | “2 sec”, “11 trackers” |

**Google Fonts import:**

```html
<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&family=Quicksand:wght@600;700&display=swap" rel="stylesheet">
```

### 3.3 Shape, spacing & motion

| Rule | Value |
|------|-------|
| Grid unit | 8px |
| Section vertical gap | 80–120px (desktop), 64px (mobile) |
| Side margins | 24px mobile, max-width container ~1140px |
| Card radius | 16–24px |
| Button radius | Full pill (`9999px`) for primary CTAs |
| Min tap target | 56px (64px for primary download buttons) |
| Shadows | Soft, tonal layering — avoid heavy drop shadows |
| Motion | Gentle fades, subtle float; respect `prefers-reduced-motion` |

### 3.4 Modern UI style direction

**Recommended landing style:** *Soft-modern SaaS* — clean sections, floating phone mockups, subtle gradient mesh in hero (sage → cream), glass-style cards optional at 8–12% opacity.

**Avoid:** Clinical/medical dashboards, harsh pure white `#FFFFFF` backgrounds, stock photos of smiling models, icon-only CTAs without labels.

---

## 4. Global Layout & Navigation

### Header (sticky, blur on scroll)

```
┌──────────────────────────────────────────────────────────────┐
│  [PumBaby logo]     Features  Screenshots  Premium  FAQ     │
│                                      [Download free ↓]       │
└──────────────────────────────────────────────────────────────┘
```

- Logo: app icon + wordmark “PumBaby”
- Desktop: inline nav links scroll to anchors
- Mobile: hamburger → full-screen menu; **Download** always visible
- Optional: language switcher (EN / VI / ZH / ES) if site is localized later

---

## 5. Home Page — Section-by-Section

Recommended scroll order:

1. Hero  
2. Social proof strip (optional: “Built for the 3 AM feed”)  
3. Why PumBaby / Features grid  
4. How it works (3 steps)  
5. Screenshot gallery  
6. Night mode & privacy callout  
7. Premium  
8. User reviews  
9. FAQ  
10. Final download CTA  
11. Footer  

---

### 5.1 Hero section — copy

**Eyebrow:** `FOR TIRED PARENTS`

**Headline (H1):**  
`Log anything in 2 seconds — even one-handed in the dark.`

**Subheadline:**  
PumBaby is a gentle baby tracker for feeding, sleep, diapers, pumping, growth, and more. No account required. Your data stays on your device until you choose to share or back it up.

**Primary CTA:** `Download free` → scroll to `#download` or direct store links  

**Secondary CTA:** `See how it works` → `#how-it-works`

**Trust micro-copy (below CTAs):**  
`Free to start · Works offline · iOS & Android · English, Vietnamese, Chinese, Spanish`

**Hero visual:** Phone mockup showing dashboard — see [§6](#6-hero-section--animation-spec) and [§7](#7-screenshot-gallery).

---

### 5.2 Social proof strip (optional, below hero)

| Stat | Label |
|------|-------|
| `< 2 sec` | Average quick-log time |
| `11` | Tracker types |
| `0` | Accounts required to start |
| `100%` | Offline-first |

*Note: Replace with real metrics post-launch if available.*

---

### 5.3 Why PumBaby — feature grid intro

**Section title:** `Everything you need. Nothing you don't.`

**Section subtitle:**  
From the first night home to pediatrician visits — one calm place for your baby's day.

**6-card grid (icon + title + 2-line description):**

| # | Title | Description |
|---|-------|-------------|
| 1 | **One-tap logging** | Wet, dirty, or mixed diaper? Bottle or breast? Save in one tap from the quick-log sheet — no digging through menus. |
| 2 | **Smart timers** | Run sleep, breastfeeding, pumping, and tummy-time timers at once. They survive app restarts and show on your lock screen. |
| 3 | **Calm dashboard** | See last feed, last diaper, and active timers at a glance. Pin your most-used trackers to the home grid. |
| 4 | **Timeline & insights** | Review the day in a color-coded timeline. Spot sleep and feeding patterns with friendly charts — not spreadsheets. |
| 5 | **Night mode built in** | A warm, dim nursery theme so 3 AM logging never blinds you or wakes the baby. |
| 6 | **Your data, your rules** | Export CSV or JSON for your pediatrician. Optional iCloud backup and family snapshot sharing — no forced cloud account. |

---

### 5.4 How it works — 3 steps

**Section title:** `Up and running before the next feed`

| Step | Title | Body |
|------|-------|------|
| **1** | Add your baby | Name, date of birth, optional photo. One profile free; Premium adds twins and siblings. |
| **2** | Log in seconds | Tap Feed, Sleep, or Diaper on the dashboard — or open the quick-log sheet for every tracker type. |
| **3** | See the full picture | Check today's timeline, weekly insights, and growth charts. Export anytime for doctor visits. |

**Visual:** Horizontal stepper (desktop) or vertical cards (mobile) with small UI snippets.

---

### 5.5 Night mode & privacy callout (split section)

**Left — Night mode**

- **Title:** `Designed for 3 AM`
- **Body:** Light, dark, auto, and a dedicated **Night** theme — warm, low-glare, and easy to read with one thumb. Because nobody wants a flashlight to the face during a dream feed.

**Right — Privacy**

- **Title:** `Yours and private`
- **Body:** Start without signing up. Logs live on your device first. Export, backup, or share snapshots only when *you* decide. We built PumBaby for families, not data brokers.

---

## 6. Hero Section & Animation Spec

### 6.1 Layout wireframe

```
┌─────────────────────────────────────────────────────────────────┐
│  [floating orb glow - animated]                                  │
│                                                                  │
│   FOR TIRED PARENTS                    ┌─────────────────────┐  │
│                                        │  [Phone mockup]     │  │
│   Log anything in 2 seconds            │  Dashboard UI       │  │
│   — even one-handed in the dark.       │  + active timer     │  │
│                                        │  banner pulsing     │  │
│   Gentle tracking for tired parents.   └─────────────────────┘  │
│                                                                  │
│   [Download free]  [See how it works]                            │
│   Free to start · Works offline · iOS & Android                  │
│                                                                  │
│   [optional: small widget preview card floating near phone]      │
└─────────────────────────────────────────────────────────────────┘
```

### 6.2 Animation elements (modern, subtle)

| Element | Animation | Duration | Easing |
|---------|-----------|----------|--------|
| **Background gradient mesh** | Slow drift / morph between sage and cream blobs | 12–20s loop | ease-in-out |
| **Hero phone mockup** | Gentle float (translateY ±8px) | 4s loop | ease-in-out |
| **Active timer on mockup** | Digit tick every second (or CSS counter) | 1s | linear |
| **Timer banner pulse** | Soft opacity pulse on category color ring | 2s loop | ease-in-out |
| **CTA primary button** | Subtle scale on hover (1.02) + shadow deepen | 200ms | ease-out |
| **Scroll reveal** | Sections fade-up 24px on enter viewport | 500ms | ease-out |
| **Floating widget card** | Parallax offset vs scroll (desktop only) | — | — |

**Accessibility:** Wrap all continuous motion in `@media (prefers-reduced-motion: reduce) { animation: none; }`.

**Tech suggestions:** CSS `@keyframes`, Framer Motion (React), or GSAP ScrollTrigger. Lottie optional for app icon breathe effect.

### 6.3 Hero phone content (static mock data for demo)

Use consistent demo baby **Mia** (matches in-app widget demos):

| Field | Value |
|-------|-------|
| Active timer | Sleep · 00:42:13 |
| Last feed | 2h ago |
| Last diaper | 45m ago |
| Quick actions visible | Feed · Sleep · Diaper |

---

## 7. Screenshot Gallery

### 7.1 Gallery layout

**Section title:** `A calm home for everything about your little one`

**Section subtitle:**  
Soft, readable, and built for one hand — day or night.

**Layout:** Carousel (mobile) or 2×3 grid (desktop) with device frames. Each slide: screenshot + caption + category tag.

### 7.2 Screenshot slots (replace paths when assets exported)

| # | Filename (suggested) | Screen | Caption | Tag |
|---|----------------------|--------|---------|-----|
| 1 | `screenshot-dashboard.png` | Home dashboard | Last feed, active timers, and one-tap quick log — everything at a glance. | Dashboard |
| 2 | `screenshot-quicklog.png` | Quick-log bottom sheet | Log wet, dirty, bottle, or temperature without leaving the moment. | Quick log |
| 3 | `screenshot-sleep-timer.png` | Sleep timer | Start nap or night sleep; timer keeps running if you switch apps. | Timers |
| 4 | `screenshot-breastfeeding.png` | Breastfeeding timer | Left/right split timers with side memory for the next session. | Feeding |
| 5 | `screenshot-timeline.png` | Timeline / logs | Color-coded day view — swipe to edit any entry. | Timeline |
| 6 | `screenshot-insights.png` | Insights | Sleep averages, feeding trends, and growth at a glance. | Insights |
| 7 | `screenshot-growth-chart.png` | Growth chart + WHO percentiles | Track weight, length, and head — compare to WHO standards (Premium). | Growth |
| 8 | `screenshot-night-mode.png` | Night theme | Warm, dim UI that won't wake the room. | Night mode |
| 9 | `screenshot-widget.png` | Home-screen widget | Last feed and quick actions from your home screen (Premium). | Widgets |
| 10 | `screenshot-family-export.png` | Export / family sharing | CSV for your pediatrician or JSON snapshot for your partner. | Data |

**Asset specs:**

- Export from iOS simulator or Android emulator at **@2x/@3x**
- Recommended frame: iPhone 15 Pro + Pixel 8 templates
- Format: WebP or PNG; max width 1290px per image
- Alt text: use Caption column for accessibility

**Source references in repo:**  
`.cursor/uiux_reference/uiux_screenshot/` HTML mockups (dashboard, timers, timeline, insights, etc.)

---

## 8. Feature Deep-Dives (Parent Copy)

Use as expandable accordions or dedicated sub-sections under `#features`.

### 8.1 All tracker types (11)

| Tracker | What parents log | Why it matters |
|---------|------------------|----------------|
| **Breastfeeding** | Left/right duration, side memory | Know which side next time; track session length for lactation consults |
| **Bottle feeding** | Volume (oz/ml), type (breast milk, formula, water, mixed) | Share intake totals with pediatrician |
| **Solids** | Food name, reaction (loved / refused), optional amount | Spot allergy patterns early |
| **Sleep** | Nap vs night, timer or manual duration | Understand wake windows and total daily sleep |
| **Diaper** | Wet, dirty, mixed + optional notes | Track hydration and digestive changes |
| **Pumping** | Single/double session, volume | Manage supply and stash |
| **Temperature** | Reading with fever indicator | Record illness without scrambling for paper |
| **Medication** | Doses, schedules, reminders | Never miss Tylenol or prescribed meds |
| **Vaccines** | Name, date, dose notes | Keep immunization history in one place |
| **Growth** | Weight, length, head circumference | Plot on charts; WHO percentiles with Premium |
| **Milestones** | First smile, rolled over, sat up, etc. | Capture memories alongside health data |
| **Tummy time** | Duration timer | Build strength; pediatricians often ask about totals |

### 8.2 Timers & reliability

- **Concurrent timers:** Sleep + breast + pump can run together; app warns before starting a conflicting timer.
- **Crash-safe:** Elapsed time recomputed from timestamps — not lost if the app closes.
- **Live notification (iOS/Android):** Ongoing notification with elapsed time and Stop action while a timer runs.
- **Live Activities (iOS):** Dynamic Island / lock-screen glance for active timers where supported.

### 8.3 Insights & pediatrician-ready export

- **Timeline:** Daily summary — feeds, sleep total, diaper count.
- **Sleep analytics:** Average hours/day, patterns over 7 or 30 days (30-day = Premium).
- **Feeding analytics:** Sessions and volume trends.
- **Growth charts:** Weight, length, head circumference curves; WHO percentiles (Premium).
- **Export CSV:** Spreadsheet-friendly for doctor visits.
- **Export JSON:** Full backup — profiles, logs, reminders, settings.

### 8.4 Family & sync

- **Free:** Local-first; manual JSON export/share.
- **Premium — iCloud backup (iOS):** Auto-sync full app backup to personal iCloud.
- **Premium — Family snapshot sharing:** Export JSON; partner imports via merge or replace on their device.
- **Security note for parents:** Snapshots are not encrypted — share only via private channels with people you trust.

### 8.5 Personalization

- Light / Dark / Auto / **Night** themes
- Accent colors: Sage (default), Indigo, Amber, Coral, Lavender
- Hide unused trackers to reduce clutter
- Custom app icons (Premium): Classic, Sage, Midnight, Sunset, Nightlight, and more
- Languages: English, Vietnamese, Chinese, Spanish

---

## 9. Premium / Pricing Section

**Section title:** `Go further with Premium`

**Section subtitle:**  
Core logging is free forever. Premium unlocks sync, deeper insights, and tools for growing families.

### 9.1 Free vs Premium comparison

| Feature | Free | Premium |
|---------|------|---------|
| Single baby profile | ✅ | ✅ |
| All 11 trackers & timers | ✅ | ✅ |
| Dashboard, timeline, 7-day insights | ✅ | ✅ |
| Light / dark / night themes | ✅ | ✅ |
| CSV & JSON export | ✅ | ✅ |
| **Multiple baby profiles** (twins/siblings) | — | ✅ |
| **iCloud backup sync** (iOS) | — | ✅ |
| **Home-screen widgets** | — | ✅ |
| **30-day insights** | — | ✅ |
| **Advanced sleep & feeding analytics** | — | ✅ |
| **WHO growth percentiles** | — | ✅ |
| **Custom app icons** | — | ✅ |
| **Family snapshot sharing** | — | ✅ |

### 9.2 Pricing copy (placeholders — set from RevenueCat / store)

```
Premium subscription — price shown in App Store / Google Play at purchase.
Subscriptions renew automatically unless cancelled.
Manage or cancel anytime in your Apple ID or Google Play account settings.
Restore purchases available in-app.
```

**CTA:** `See plans in the app` (links to store) — do not hardcode prices on the website unless synced with RevenueCat.

**Legal footnote (required):**  
*Subscriptions renew automatically unless cancelled. Manage or cancel in your App Store or Google Play account.*

---

## 10. User Reviews Section

**Section title:** `Loved by tired parents`

**Section subtitle:**  
Real routines, real relief — from families who log at all hours.

> **Important:** Replace placeholder quotes below with verified App Store / Google Play reviews after launch. Until then, label section as “Early feedback” or use beta tester quotes with permission.

### 10.1 Review card layout

```
┌─────────────────────────────────────┐
│  ★★★★★                              │
│  "Quote text..."                    │
│  — Name, role/context               │
│  [Apple App Store | Google Play]    │
└─────────────────────────────────────┘
```

### 10.2 Sample reviews (placeholders — customize post-launch)

| Rating | Quote | Attribution | Source |
|--------|-------|-------------|--------|
| ★★★★★ | *Finally a baby app that doesn't feel like a hospital chart. I log diaper changes while nursing with one hand.* | Sarah M., first-time mom | App Store |
| ★★★★★ | *The night theme alone is worth it. No more blinding myself at 3 AM checking when she last ate.* | James T., dad of two | Google Play |
| ★★★★★ | *We export CSV before every pediatrician visit. Doctor actually thanked us for the clear feed log.* | Linh P., mom | App Store |
| ★★★★★ | *Timers keep running when I switch apps — huge for pumping at work.* | Alex R., working parent | Google Play |
| ★★★★★ | *No account signup. I own my data. That mattered more than I expected.* | Morgan K., privacy-conscious parent | App Store |
| ★★★★☆ | *Clean, fast, and the quick-log sheet saves us during cluster feeds.* | Priya & Dev, parents of twins | Google Play |

### 10.3 Aggregate rating block (post-launch)

```
★★★★★ 4.8 average
Based on [N] reviews on the App Store and Google Play
[App Store badge]  [Google Play badge]
```

---

## 11. Download & Store CTAs

### 11.1 Primary download section

**Section title:** `Ready for a calmer routine?`

**Body:**  
Download PumBaby free on iPhone and Android. Start logging in minutes — no account required.

**Buttons:** Official **Download on the App Store** and **Get it on Google Play** badges (SVG from Apple / Google brand guidelines).

### 11.2 Store URLs (update when live)

| Store | URL placeholder |
|-------|-----------------|
| **Apple App Store** | `https://apps.apple.com/app/idXXXXXXXXX` |
| **Google Play** | `https://play.google.com/store/apps/details?id=com.cdev.pumbaby` |

### 11.3 QR code (optional)

- Single QR linking to smart app banner page (`/download`) that detects platform
- Print-ready for packaging / pediatrician office flyers

### 11.4 Badge HTML placeholders

```html
<!-- App Store -->
<a href="https://apps.apple.com/app/idXXXXXXXXX" aria-label="Download PumBaby on the App Store">
  <img src="/assets/badges/app-store.svg" alt="Download on the App Store" width="160" height="48" />
</a>

<!-- Google Play -->
<a href="https://play.google.com/store/apps/details?id=com.cdev.pumbaby" aria-label="Get PumBaby on Google Play">
  <img src="/assets/badges/google-play.svg" alt="Get it on Google Play" width="160" height="48" />
</a>
```

### 11.5 Repeated CTAs

Place download badges in: hero, after screenshots, after reviews, and sticky mobile footer bar (`Download free`).

---

## 12. FAQ for Parents

**Section title:** `Questions? We've got you.`

| Question | Answer |
|----------|--------|
| **Do I need an account?** | No. PumBaby works fully offline from first launch. Your logs stay on your device until you export or back up. |
| **Is PumBaby free?** | Yes — all core trackers, timers, timeline, and export are free. Premium adds multiple babies, iCloud sync, widgets, advanced insights, WHO percentiles, custom icons, and family sharing. |
| **Can both parents use it?** | Yes. With Premium, export a JSON snapshot and your partner imports it on their phone. iCloud sync (iOS, Premium) also keeps devices aligned. |
| **Does it work at night without waking the baby?** | Yes. Use **Night** theme — warm, dim, and designed for low-light nursery use. |
| **Can I share data with our pediatrician?** | Export CSV or JSON anytime from Settings → Export data. |
| **What if I have twins?** | Add multiple baby profiles with Premium. Switch profiles from the dashboard in one tap. |
| **Are timers reliable if the app closes?** | Timers are persisted and recomputed from timestamps — they recover after restarts. |
| **What languages are supported?** | English, Vietnamese, Chinese, and Spanish in-app. |
| **How do I restore Premium on a new phone?** | Open Settings → My Plan → Restore Purchases (same Apple ID or Google account). |
| **How do I contact support?** | Email [chuongdev97@gmail.com](mailto:chuongdev97@gmail.com) or use Send feedback in the app. |

---

## 13. Footer

```
┌─────────────────────────────────────────────────────────────────┐
│  [PumBaby logo]                                                  │
│  Gentle tracking for tired parents.                              │
│                                                                  │
│  Product          Legal              Contact                     │
│  Features         Privacy Policy     chuongdev97@gmail.com       │
│  Screenshots      Terms of Service                               │
│  Premium                                                         │
│  FAQ                                                             │
│                                                                  │
│  [App Store]  [Google Play]                                      │
│                                                                  │
│  © 2026 PumBaby. All rights reserved.                            │
│  Apple and the Apple logo are trademarks of Apple Inc.           │
│  Google Play and the Google Play logo are trademarks of Google LLC. │
└─────────────────────────────────────────────────────────────────┘
```

---

## 14. Privacy Policy Page (Full Text)

**Route:** `/privacy`  
**Page title:** Privacy Policy — PumBaby  
**Last updated:** June 8, 2026

---

### Privacy Policy

**PumBaby** (“we,” “our,” or “the app”) is a baby tracking application for iOS and Android operated by the PumBaby development team. This Privacy Policy explains how we handle information when you use PumBaby.

We built PumBaby **local-first**: most of your data stays on your device. We do not require you to create an account to use the app.

#### 1. Information we collect

**1.1 Baby and caregiver data you enter (stored locally)**  
You may enter information such as:

- Baby name, date of birth, sex, photo, and birth measurements  
- Logs: feeding, sleep, diapers, pumping, temperature, medication, vaccines, growth, milestones, tummy time  
- Reminders, notes, app settings, theme preferences, and visible tracker configuration  

This data is stored **primarily on your device** in a local database. We do not automatically upload it to our servers.

**1.2 Optional cloud backup (Premium, iOS)**  
If you enable **iCloud backup**, a full JSON backup of your app data is stored in **your personal iCloud account**, governed by Apple’s iCloud terms and privacy policy. We do not receive or host this backup on our servers.

**1.3 Export and family sharing (your choice)**  
If you export CSV/JSON or share a snapshot file with a partner or caregiver, **you control** where that file goes (email, AirDrop, messaging apps, etc.). Shared snapshot files are **not encrypted** by default — share only through private channels with people you trust.

**1.4 Purchases**  
Subscription and purchase status is processed by **Apple App Store** or **Google Play** and **RevenueCat** (subscription management). We receive limited purchase entitlement information (e.g., whether Premium is active) — not your payment card details.

**1.5 Diagnostics and crash reports (optional)**  
The app may use **Firebase Crashlytics** to collect crash logs and diagnostic information to improve stability. Crash reports may include device model, OS version, app version, and stack traces. They should not include your baby’s name or log content unless accidentally included in a crash context. Diagnostics are used for debugging, not for advertising profiles.

**1.6 Advertising (if enabled in your build)**  
If ad-supported features are present, ad networks (e.g., Google Mobile Ads and mediation partners) may collect device identifiers and usage data per their policies. Where required (e.g., EEA), we request consent through the **Google User Messaging Platform (UMP)** before personalized ads. Premium subscribers should not receive ads where gating is implemented.

**1.7 Support communications**  
If you email us at **chuongdev97@gmail.com**, we receive the information you choose to include in your message.

#### 2. How we use information

We use information to:

- Provide core app functionality (logging, timers, insights, export)  
- Validate Premium entitlements and restore purchases  
- Send **local notifications** you enable (medication reminders, live timer notifications)  
- Improve app reliability via crash diagnostics  
- Respond to support requests  

We **do not sell** your personal information or baby log data.

#### 3. Legal bases (EEA/UK users)

Where applicable, we process data based on:

- **Contract / service delivery** — providing app features you request  
- **Legitimate interests** — app security, crash fixing, fraud prevention for billing  
- **Consent** — notifications, ads (where shown), optional analytics beyond essential diagnostics  

#### 4. Data retention

- **On-device data:** Retained until you delete logs, profiles, or use “Clear all data” in Settings.  
- **iCloud backups:** Retained per your iCloud settings until you delete them.  
- **Crash logs:** Retained per Firebase/Google retention policies, typically rolling deletion.  
- **Support emails:** Retained as long as needed to resolve your inquiry.

#### 5. Children’s privacy

PumBaby is intended for **parents and caregivers**, not for use directly by children. Information about babies is entered by adults. We do not knowingly collect personal information directly from children under 13 (or applicable age in your region). If you believe a child has provided us personal information, contact us and we will delete it.

#### 6. Your rights and choices

Depending on your location, you may have rights to access, correct, delete, or restrict processing of personal information.

**You can always:**

- Export or delete your data inside the app  
- Disable notifications in device Settings  
- Cancel Premium via App Store / Google Play  
- Decline ad personalization via consent prompts (where shown)  
- Contact us at **chuongdev97@gmail.com** for privacy questions  

#### 7. International transfers

If you use services that process data outside your country (e.g., Firebase, RevenueCat, ad networks), data may be transferred internationally with appropriate safeguards as described in those providers’ policies.

#### 8. Security

We use industry-standard measures appropriate to a local-first mobile app. No method of storage or transmission is 100% secure. **Exported and shared snapshot files are not encrypted** — treat them like sensitive health records.

#### 9. Third-party services

PumBaby may integrate with:

| Service | Purpose |
|---------|---------|
| Apple App Store / Google Play | App distribution and payments |
| RevenueCat | Subscription entitlements |
| Apple iCloud | Optional backup (Premium, iOS) |
| Firebase Crashlytics | Crash reporting |
| Google Mobile Ads (+ mediators) | Advertising (if enabled) |
| Google UMP | GDPR/EEA consent |

Each third party has its own privacy policy.

#### 10. Changes to this policy

We may update this Privacy Policy. We will post the new date at the top of this page. Continued use after changes constitutes acceptance where permitted by law.

#### 11. Contact us

**Email:** chuongdev97@gmail.com  
**App:** PumBaby — Settings → Send feedback  

---

## 15. Terms of Service Page (Full Text)

**Route:** `/terms`  
**Page title:** Terms of Service — PumBaby  
**Last updated:** June 8, 2026

---

### Terms of Service

Please read these Terms of Service (“Terms”) before using **PumBaby** (“the app,” “we,” “us”). By downloading or using PumBaby, you agree to these Terms. If you do not agree, do not use the app.

#### 1. Who may use PumBaby

PumBaby is for **parents, guardians, and caregivers** tracking infant and child care routines. You must be at least the age of majority in your jurisdiction or have parental consent. You are responsible for ensuring anyone you share exported data with handles it appropriately.

#### 2. Not medical advice

PumBaby is a **personal logging and organizational tool**. It does **not** provide medical advice, diagnosis, or treatment. Charts, percentiles, and insights are for informational purposes only. Always consult a qualified healthcare provider for medical decisions about your child.

Do not rely on the app in emergencies. Call local emergency services when needed.

#### 3. Your account and data

**3.1 No mandatory account**  
You may use core features without creating an account.

**3.2 Your responsibility**  
You are responsible for:

- Accuracy of data you enter  
- Securing your device and backups  
- Who you share exports and snapshots with  

**3.3 Data loss**  
We are not liable for loss of data caused by device failure, uninstallation, or failure to back up. Use export or iCloud backup (Premium, iOS) regularly.

#### 4. Subscriptions and Premium

**4.1 Premium features**  
Premium features (multiple babies, iCloud sync, widgets, advanced insights, WHO percentiles, custom icons, family sharing, etc.) require an active subscription or lifetime purchase as offered in the app.

**4.2 Billing**  
Payments are processed by **Apple** or **Google**. Pricing, renewal, free trials, and refunds are governed by the store’s terms. We do not process payment card data directly.

**4.3 Auto-renewal**  
Subscriptions renew automatically unless cancelled at least 24 hours before the end of the current period in your App Store or Google Play account settings.

**4.4 Restore purchases**  
Use in-app Restore Purchases with the same store account used to buy Premium.

#### 5. Acceptable use

You agree not to:

- Use the app for unlawful purposes  
- Reverse engineer or attempt to extract source code except as allowed by law  
- Interfere with app security or infrastructure  
- Misrepresent medical information to third parties as if generated by a healthcare provider  

#### 6. Intellectual property

PumBaby, its design, logos, and content are owned by the PumBaby team and protected by applicable laws. You receive a limited, non-exclusive, non-transferable license to use the app for personal, non-commercial purposes.

#### 7. Disclaimer of warranties

THE APP IS PROVIDED **“AS IS”** AND **“AS AVAILABLE”** WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE OPERATION.

#### 8. Limitation of liability

TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF DATA, PROFITS, OR GOODWILL, ARISING FROM YOUR USE OF PUMBaby.

OUR TOTAL LIABILITY FOR ANY CLAIM SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE TWELVE (12) MONTHS BEFORE THE CLAIM, OR USD $10 IF YOU USE THE FREE VERSION.

Some jurisdictions do not allow certain limitations; in those cases, limits apply to the fullest extent permitted.

#### 9. Indemnification

You agree to indemnify and hold us harmless from claims arising from your misuse of the app, your data entries, or your violation of these Terms.

#### 10. Termination

You may stop using the app at any time by uninstalling it. We may suspend or discontinue features where required by law or for abuse. Sections that by nature should survive (disclaimers, liability limits, governing law) will survive termination.

#### 11. Changes to the app and Terms

We may update the app and these Terms. Material changes will be posted on this page with an updated date. Continued use after changes constitutes acceptance where permitted.

#### 12. Governing law

These Terms are governed by the laws of **[Your jurisdiction — e.g., Vietnam / state of incorporation]**, without regard to conflict-of-law rules. Disputes shall be resolved in the courts of **[Your jurisdiction]**, unless mandatory consumer protection laws in your country require otherwise.

> **Action required before publish:** Replace bracketed jurisdiction placeholders with your legal entity location.

#### 13. Contact

**Email:** chuongdev97@gmail.com  

---

## 16. SEO, Social & Analytics

### 16.1 Meta tags (home)

```html
<title>PumBaby — Gentle Baby Tracker for Tired Parents</title>
<meta name="description" content="Log feeding, sleep, diapers, and more in under 2 seconds. Local-first, private, and built for 3 AM. Free on iOS and Android." />
<meta name="keywords" content="baby tracker, newborn log, feeding timer, sleep tracker, diaper log, pumping app, baby app no account" />
<link rel="canonical" href="https://pumbaby.app/" />
```

### 16.2 Open Graph / Twitter

```html
<meta property="og:title" content="PumBaby — Gentle tracking for tired parents" />
<meta property="og:description" content="One-handed logging. Night mode. Your data stays on your device." />
<meta property="og:image" content="https://pumbaby.app/og/pumbaby-og-1200x630.png" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
```

**OG image spec:** 1200×630px — sage background, phone mockup, tagline.

### 16.3 Structured data (SoftwareApplication)

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "PumBaby",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "iOS, Android",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Gentle baby tracking for feeding, sleep, diapers, and more. Local-first and private.",
  "author": {
    "@type": "Organization",
    "name": "PumBaby"
  }
}
```

---

## 17. Asset Checklist

| Asset | Spec | Status |
|-------|------|--------|
| App icon (SVG/PNG) | 1024×1024 source | From `.cursor/uiux_reference/uiux_screenshot/app_icon.svg` |
| Logo wordmark | SVG, sage on transparent | To create |
| Hero phone mockup | PNG/WebP, 2× | Export from simulator |
| 10 screenshots | See §7.2 | To export |
| App Store badge | Official SVG | Download from Apple |
| Google Play badge | Official SVG | Download from Google |
| OG image | 1200×630 | To design |
| Favicon | 32×32, 180×180 apple-touch | From app icon |
| Demo widget card | Optional hero element | From widget HTML mockup |
| Lottie / animation JSON | Optional hero breathe | To create |

---

## 18. Implementation Notes

### 18.1 Recommended tech stack (landing site)

| Option | Pros |
|--------|------|
| **Next.js / Astro** | Fast SEO, static `/privacy` and `/terms`, easy i18n later |
| **Framer / Webflow** | Design-first, quick hero animations |
| **Plain HTML + Tailwind** | Matches existing UI mockups in repo |

### 18.2 Performance

- Lazy-load screenshot carousel images  
- Use WebP with PNG fallback  
- Preload Quicksand + Nunito Sans (already in design system)  
- Target Lighthouse 90+ mobile  

### 18.3 Accessibility

- WCAG AA contrast on body text (`#1b1c1c` on `#fbf9f8`)  
- Visible focus rings on all interactive elements  
- Alt text on every screenshot  
- Honor `prefers-reduced-motion`  

### 18.4 Legal before launch

- [ ] Replace App Store URL with real app ID  
- [ ] Confirm Google Play listing is live  
- [ ] Set governing law jurisdiction in Terms (§15.12)  
- [ ] Replace placeholder reviews with verified store reviews  
- [ ] Have a lawyer review Privacy Policy and Terms if operating in EU/US at scale  

### 18.5 Domain suggestions

- `pumbaby.app`  
- `getpumbaby.com`  
- `pumbaby.com`  

---

## Quick Copy Reference Card

| Element | Text |
|---------|------|
| **H1** | Log anything in 2 seconds — even one-handed in the dark. |
| **Tagline** | Gentle tracking for tired parents. |
| **CTA** | Download free |
| **Privacy headline** | Yours and private — no account needed. |
| **Night mode headline** | Designed for 3 AM. |
| **Premium headline** | Go further with Premium. |
| **Closing CTA** | Ready for a calmer routine? |

---

*This document was generated from PumBaby app source, localization strings, design system, and product roadmap. Update store links, pricing, reviews, and legal jurisdiction before publishing.*
