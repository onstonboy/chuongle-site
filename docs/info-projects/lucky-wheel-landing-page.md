---
appStoreId: 1602451497
playStoreId: com.chuongdever.luckywheel
category: mobile
technologies:
  - Flutter
  - Firebase
  - RevenueCat
features:
  - Fair spin with random, unbiased results every time
  - Create & save custom wheels with up to 30 items
  - Ready-made party game templates built-in
  - 13 themes — free and premium looks
  - Confetti celebrations & win sounds on every spin
name: Lucky Wheel
tagline: Spin. Win. Celebrate.
description: Fair, fun spin-wheel for parties, game nights, and everyday decisions.
landingPageUrl: https://luckywheel.chuongle.dev
---

# Lucky Wheel — Landing Page Brief

# landing page url: luckywheel.chuongle.dev

**Document version:** 1.0  
**Date:** 2026-07-08  
**Purpose:** Single source of truth for building the marketing website with **Vite + Node.js + Three.js**

---

## 1. Product snapshot

| Field | Value |
|-------|-------|
| **Public app name** | Lucky Wheel |
| **Design system name** | Lucky Wheel |
| **Tagline** | Spin. Win. Celebrate. |
| **One-liner** | Fair, fun spin-wheel for parties, game nights, and everyday decisions. |
| **Platforms** | iOS · Android |
| **Languages** | English · Vietnamese |
| **Developer** | CDEV (Chuong) |
| **Contact email** | chuongdev97@gmail.com |
| **Location** | Da Nang, Vietnam |
| **Android package** | `com.chuongdever.luckywheel` |
| **iOS bundle ID** | `com.chuongdev.luckywheel` |
| **App Store ID** | `1602451497` |
| **Google Play** | https://play.google.com/store/apps/details?id=com.chuongdever.luckywheel |
| **App Store** | https://apps.apple.com/app/id1602451497 |

---

## 2. Site map (3 pages)

```
/                 → Marketing landing (hero + features + download)
/privacy          → Privacy Policy (standalone)
/terms            → Terms of Service (standalone)
```

**Global footer (all pages):** Logo · Download · Privacy · Terms · Contact (`mailto:chuongdev97@gmail.com`)

---

## 3. Tech stack

### Core

| Layer | Choice | Notes |
|-------|--------|-------|
| Build tool | **Vite** | Fast HMR, static export friendly |
| Runtime | **Node.js** (LTS 20+) | Dev server + optional Express preview |
| 3D / motion | **Three.js** | Hero wheel scene, ambient particles, scroll-linked motion |
| Routing | `vite-plugin-pages` or lightweight client router | `/`, `/privacy`, `/terms` |
| Styling | CSS modules or Tailwind | Match Lucky Pop tokens below |
| Fonts | Google Fonts (self-host preferred) | Outfit + Plus Jakarta Sans |
| Deploy | Vercel / Netlify / Cloudflare Pages | Static `dist/` output |

### Suggested project layout

```
lucky-wheel-landing/
├── package.json
├── vite.config.ts
├── index.html
├── public/
│   ├── favicon.ico
│   ├── og-image.png          # 1200×630
│   ├── apple-touch-icon.png
│   └── fonts/                # Outfit + Plus Jakarta Sans (woff2)
├── src/
│   ├── main.ts
│   ├── router.ts
│   ├── styles/
│   │   └── tokens.css        # Lucky Pop design tokens
│   ├── three/
│   │   ├── scene.ts          # Wheel mesh, lights, camera
│   │   ├── particles.ts      # Confetti / gold sparkles
│   │   └── scroll-sync.ts    # GSAP or native scroll listener
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── FeatureStrip.tsx
│   │   ├── ThemeGallery.tsx
│   │   ├── DownloadCta.tsx
│   │   ├── Footer.tsx
│   │   └── LegalLayout.tsx
│   └── pages/
│       ├── index.html        # or index.vue / index.tsx
│       ├── privacy.html
│       └── terms.html
└── server/                   # optional
    └── preview.mjs           # Express static serve for prod preview
```

### npm scripts (starter)

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "start": "node server/preview.mjs"
  }
}
```

### Dependencies (recommended)

```json
{
  "dependencies": {
    "three": "^0.170.0"
  },
  "devDependencies": {
    "vite": "^6.0.0",
    "typescript": "^5.0.0",
    "@types/three": "^0.170.0"
  }
}
```

Optional: `gsap` (scroll choreography), `lenis` (smooth scroll), `vite-plugin-glsl` (custom shaders).

---

## 4. Brand & visual direction

### Personality

Playful arcade · sticker-book energy · fair & social · **not** corporate blue slabs.

### Color tokens (Lucky Pop)

```css
:root {
  /* Surfaces */
  --surface: #FFFBF5;
  --surface-elevated: #FFFFFF;
  --on-surface: #1E293B;
  --outline: #E2E8F0;

  /* Accents — one gold CTA everywhere */
  --primary: #FFB020;        /* Lucky Gold */
  --on-primary: #1A1208;
  --secondary: #FF6B4A;      /* Coral Pop */
  --tertiary: #2DD4BF;       /* Mint Pop */

  /* Dark mode (optional toggle or prefers-color-scheme) */
  --surface-dark: #0B1020;
  --surface-elevated-dark: #151D32;
  --on-surface-dark: #F1F5F9;
}
```

**Rules:** No AI purple gradients. Gold is the only primary CTA color. Decorative blobs at ~8–12% opacity in corners.

### Typography

| Role | Font | Weight | Size (desktop) |
|------|------|--------|----------------|
| Display / H1 | Outfit | 800 | 48–64px |
| Section title | Outfit | 700 | 28–36px |
| Body | Plus Jakarta Sans | 400 | 16–18px |
| Labels / badges | Plus Jakarta Sans | 600 | 12–14px |
| CTA button | Plus Jakarta Sans | 700 | 16px |

### Shape & components

| Element | Spec |
|---------|------|
| Sticker cards | `border-radius: 20px`, hard shadow `0 4px 0 rgba(30,41,59,0.15)` |
| Primary button | Pill, height 52px, fill `--primary`, press scale 0.94 |
| Section spacing | 80–120px vertical rhythm |
| Max content width | 1120px |
| Touch targets | min 44px |

### Assets to copy from app repo

| Asset | Path |
|-------|------|
| Logo (PNG) | `assets/images/logo_lucky_wheel.png` |
| Logo (SVG) | `assets/images/logo_lucky_wheel.svg` |
| Launcher icon | `assets/launcher/icon.png` |
| Onboarding art | `assets/images/onboarding/*.webp` |
| Fonts | `assets/fonts/Outfit-Variable.ttf`, `assets/fonts/PlusJakartaSans-Variable.ttf` |

---

## 5. Landing page — wireframe (minimal text)

```
┌─────────────────────────────────────────────────────────────────┐
│  [Logo]                              Privacy · Terms · Contact  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Spin. Win. Celebrate.              ┌─────────────────────┐   │
│   [App Store] [Google Play]          │  THREE.JS WHEEL     │   │
│                                      │  (auto-spin, glow)  │   │
│                                      │  + confetti burst   │   │
│                                      └─────────────────────┘   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  ◆ Spin fair        ◆ Custom wheels      ◆ 13 themes           │
│  ◆ Party templates  ◆ Confetti wins      ◆ Premium unlock      │
├─────────────────────────────────────────────────────────────────┤
│  [ phone mockup carousel — wheel · store · themes · win ]       │
├─────────────────────────────────────────────────────────────────┤
│  THEMES — horizontal scroll chips (gold ring on active)         │
│  Light · Dark · Coral Pop · Galaxy Star · Lunar New Year …      │
├─────────────────────────────────────────────────────────────────┤
│  TEMPLATES — icon grid (6 cards, 2 lines max each)              │
│  Yes/No · Truth or Dare · Do or Drink · Numbers · Couple …      │
├─────────────────────────────────────────────────────────────────┤
│        Ready to spin?                                             │
│        [ Download free ]                                          │
├─────────────────────────────────────────────────────────────────┤
│  © Lucky Wheel · chuongdev97@gmail.com · Privacy · Terms        │
└─────────────────────────────────────────────────────────────────┘
```

---

## 6. Copy deck (keep it short)

### Hero

| Element | Copy |
|---------|------|
| H1 | Spin. Win. Celebrate. |
| Sub (max 12 words) | Fair picks for parties, game nights, and tough calls. |
| Primary CTA | Download free |
| Secondary CTA | See features ↓ |

### Feature strip (6 chips — 2–4 words each)

| # | Headline | Micro (optional, hidden on mobile) |
|---|----------|-------------------------------------|
| 1 | Spin fair | Random, unbiased results |
| 2 | Your wheels | Create & save many |
| 3 | Ready templates | Party games built-in |
| 4 | 13 themes | Free + premium looks |
| 5 | Win moments | Confetti & sounds |
| 6 | Go Premium | No ads · all themes |

### Theme section

**Title:** Make it yours  
**Subtitle:** 13 themes. One tap.

### Templates section

**Title:** Play instantly  
**Subtitle:** Pick a template. Spin.

| Template | One-line |
|----------|----------|
| Yes or No | Settle debates fast |
| Stay or Leave | Big life questions |
| Truth or Dare | Party classic |
| Numbers | Pick 1–30 |
| Do or Drink | Group game night |
| Strong & Daring | Spicy questions |
| Couple | For two |

### Premium strip

**Title:** Lucky Wheel Premium  
**Bullets (icons only + 3 words):** No ads · All themes · All celebrations  
**Note:** One-time purchase · Yours forever

### Final CTA

**Title:** Ready to spin?  
**Button:** Get the app

### Footer

`Lucky Wheel` · `chuongdev97@gmail.com` · Privacy · Terms

---

## 7. Three.js — animation specification

### Hero scene concept

A **3D spin wheel** floating center-right (mobile: above fold, smaller). Not a flat image — a low-poly torus/wedge segments mesh with:

- **6–8 visible segments** (colors from app palette: gold, coral, mint, slate)
- **Gold pointer** fixed at top (triangle mesh)
- **Hub:** metallic gold ring (`MeshStandardMaterial`, `metalness: 0.6`)
- **Ambient:** warm cream background + subtle dot pattern (shader or CSS overlay)
- **Particles:** 40–80 instanced confetti planes, slow drift, burst on “win” cycle

### Motion timeline (loop ~8s)

| Time | Action |
|------|--------|
| 0s | Idle float (sine Y ±8px, slow rotation 0.2°/frame) |
| 1s | User-hover / scroll-in: scale 0.92 → 1, spring ease |
| 2s | Spin accelerates (ease-in cubic, 3–4 full rotations) |
| 5s | Decelerate (ease-out expo), land on gold segment |
| 5.5s | Hub glow pulse (`emissive` #FFB020), confetti burst |
| 6–8s | Hold winner highlight, fade confetti, reset |

### Scroll-linked sections

| Section | Three.js / motion behavior |
|---------|---------------------------|
| Hero | Full canvas, wheel spin |
| Features | Canvas fades to 30% opacity; floating geometric blobs (coral/mint circles) parallax |
| Themes | Theme color swaps on wheel segment materials (crossfade 400ms) |
| Templates | Disable heavy 3D on mobile; static SVG wheel fallback |
| CTA | Confetti rain from top (CSS or lightweight particles) |

### Performance budget

| Target | Value |
|--------|-------|
| Draw calls | < 50 |
| Triangles | < 20k |
| FPS | 60 desktop, 30+ mobile |
| Fallback | `prefers-reduced-motion` → static PNG + CSS spin animation |
| Lazy load | Dynamic `import('three')` after hero in viewport |

### Lighting

- `AmbientLight` 0.4 warm white  
- `DirectionalLight` from top-right, soft shadows off (perf)  
- `PointLight` gold tint on hub during win pulse  

### Camera

- PerspectiveCamera, FOV 45, position `(0, 0, 6)`  
- Subtle mouse parallax: camera X/Y ±0.15 based on pointer  

---

## 8. UI motion (non-Three.js)

| Element | Animation |
|---------|-----------|
| Page enter | Fade + translateY 12px, stagger 50ms per block |
| Sticker cards | Hover: translateY -4px, shadow deepens |
| CTA buttons | Scale 0.94 on active, spring stiffness 400 / damping 18 |
| Feature chips | Scroll-triggered fade-up (Intersection Observer) |
| Phone mockups | Horizontal auto-scroll, pause on hover |
| Theme chips | Active: gold ring 2px, scale 1.05 |
| Nav | Blur backdrop on scroll (`backdrop-filter`) |

Respect `prefers-reduced-motion: reduce` — disable all non-essential motion.

---

## 9. SEO & social meta

```html
<title>Lucky Wheel — Spin. Win. Celebrate.</title>
<meta name="description" content="Free spin wheel app for parties and decisions. Custom wheels, templates, themes, and confetti celebrations. iOS & Android." />
<meta property="og:title" content="Lucky Wheel" />
<meta property="og:description" content="Spin. Win. Celebrate. Fair, fun picks for every occasion." />
<meta property="og:image" content="/og-image.png" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
<link rel="canonical" href="https://YOUR_DOMAIN/" />
```

**Keywords (natural use only):** spin wheel, lucky wheel, decision wheel, party games, truth or dare wheel, random picker

**Structured data:** `SoftwareApplication` JSON-LD with `operatingSystem: iOS, Android`, `applicationCategory: GameApplication`, store URLs.

---

## 10. Privacy Policy page (`/privacy`)

> Legal review recommended before publish. Outline below reflects actual app SDKs.

### Suggested sections

1. **Introduction** — Lucky Wheel by CDEV; contact chuongdev97@gmail.com  
2. **Information we collect**
   - Device info (model, OS) via Firebase Analytics & Crashlytics  
   - Usage analytics (screens, events) — aggregated  
   - Advertising ID (IDFA / GAID) when user consents — Google AdMob  
   - Purchase status via RevenueCat (no payment card stored in app)  
   - Local data: wheels, settings stored on device (SQLite / preferences) — not uploaded  
3. **How we use information** — improve app, crash fixes, personalized ads (if consented), subscription validation  
4. **Third-party services**
   - Google Firebase (Analytics, Crashlytics, Remote Config)  
   - Google AdMob & ad partners  
   - RevenueCat (in-app purchases)  
   - Apple App Store / Google Play (payments)  
5. **Advertising & consent (EEA/UK)** — UMP consent flow; link to Google ad settings  
6. **Children** — not directed under 13; parental contact if data collected  
7. **Data retention** — analytics per Firebase defaults; local data until app uninstall  
8. **Your rights** — access, deletion requests via email  
9. **Security** — reasonable measures; no method 100% secure  
10. **Changes** — policy updates posted on this page with date  
11. **Contact** — chuongdev97@gmail.com, Da Nang, Vietnam  

**Last updated:** `[PUBLISH DATE]`

---

## 11. Terms of Service page (`/terms`)

### Suggested sections

1. **Acceptance** — Using Lucky Wheel means you agree to these terms  
2. **License** — Personal, non-commercial use; no reverse engineering  
3. **User content** — Custom wheel labels are your responsibility; no illegal/hateful content  
4. **Premium purchase** — One-time IAP via App Store / Google Play; subject to store refund policies  
5. **Restore purchases** — Available in-app; tied to store account  
6. **Advertisements** — Free tier may show ads; Premium removes ads  
7. **Disclaimer** — App outcomes are random entertainment; not gambling; use responsibly (alcohol templates = 18+ user discretion)  
8. **Limitation of liability** — As permitted by law  
9. **Termination** — We may update or discontinue features  
10. **Governing law** — Vietnam (adjust if needed)  
11. **Contact** — chuongdev97@gmail.com  

**Last updated:** `[PUBLISH DATE]`

---

## 12. App features reference (for visuals & screenshots)

Use these when building mockups and feature sections.

### Core gameplay

- Spin wheel with physics gesture  
- Up to 30 items per wheel  
- Shuffle, repeat count, vertical text toggle  
- Custom colors per segment  
- Custom wheel icon (image picker)  
- Spin duration setting  
- Spinning + congratulation sounds  
- Winner list history  
- Disable / highlight chosen items  

### Wheel library

- Save multiple wheels in Store  
- Duplicate, edit, delete wheels  
- Template gallery for quick start  

### Themes (13 total)

| Tier | Themes |
|------|--------|
| Free | Light, Dark, Dark 2 |
| Premium | Lunar New Year, Coral Pop, Mint Pop, Midnight Gold, Sunset Light, Arcade Night, Galaxy Star, Ocean Wave, Candy Bubble, Retro Paper |

### Celebration animations (Premium unlocks all)

Confetti variants: star, snowflake, coin, medal, car, thumbs up, unicorn, Christmas, New Year, and more (Lottie-driven in app).

### Premium (one-time)

- Remove all advertisements  
- Unlock every premium theme  
- Unlock all celebration animations  
- Future premium features included  

### Integrations (privacy-relevant)

- Firebase Analytics, Crashlytics, Remote Config  
- Google Mobile Ads (AdMob) + UMP consent  
- RevenueCat subscriptions / IAP  
- App Tracking Transparency (iOS)  

---

## 13. Download CTAs

### Badge links

```html
<!-- Apple -->
<a href="https://apps.apple.com/app/id1602451497" aria-label="Download on the App Store">
  <!-- Apple badge SVG -->
</a>

<!-- Google Play -->
<a href="https://play.google.com/store/apps/details?id=com.chuongdever.luckywheel" aria-label="Get it on Google Play">
  <!-- Google Play badge SVG -->
</a>
```

### Deep link pattern (optional)

- iOS: `https://apps.apple.com/app/id1602451497`  
- Android: `market://details?id=com.chuongdever.luckywheel` (web fallback to Play URL)

---

## 14. Accessibility checklist

- [ ] Color contrast WCAG AA on gold CTA (`#FFB020` on `#1A1208` text = pass)  
- [ ] All animations respect `prefers-reduced-motion`  
- [ ] Three.js canvas has `aria-hidden="true"`; hero text carries meaning  
- [ ] Focus states on nav, CTAs, theme chips  
- [ ] Alt text on mockups and onboarding illustrations  
- [ ] Legal pages: semantic headings, skip link, readable line length (~70ch)  

---

## 15. Performance checklist

- [ ] Self-host fonts (woff2 subset)  
- [ ] WebP images with PNG fallback  
- [ ] Lazy-load Three.js bundle  
- [ ] `loading="lazy"` on below-fold images  
- [ ] Lighthouse target: 90+ Performance, 100 Accessibility  
- [ ] Total JS < 200KB gzipped (excluding Three.js lazy chunk)  

---

## 16. Domain & deployment notes

| Item | Recommendation |
|------|----------------|
| Domain ideas | `luckywheel.app`, `getluckywheel.com`, `luckywheel.cdev.dev` |
| HTTPS | Required (store policies, AdMob site verification if needed) |
| Privacy URL | Must match store listing URL exactly |
| `robots.txt` | Allow all; link sitemap |
| `sitemap.xml` | `/`, `/privacy`, `/terms` |

---

## 17. Content NOT on landing page

Keep the marketing site focused. Do **not** duplicate:

- Full template question text (party games — keep PG on web)  
- In-app settings screens  
- Debug / developer options  
- RevenueCat paywall UI (mention Premium only as a strip)  

---

## 18. Implementation priority

| Phase | Deliverable |
|-------|-------------|
| **P0** | Vite scaffold, tokens, hero + footer, store CTAs, `/privacy`, `/terms` |
| **P1** | Three.js hero wheel + confetti loop |
| **P2** | Feature strip, theme gallery, phone mockup carousel |
| **P3** | Scroll animations, dark mode, OG image, JSON-LD, analytics (privacy-friendly) |

---

## 19. Open items (fill before launch)

- [ ] Final domain URL  
- [ ] Legal review of Privacy & Terms  
- [ ] High-res phone mockups (iOS + Android)  
- [ ] 1200×630 OG image with logo + wheel  
- [ ] Vietnamese locale (`/vi/` or language toggle) — optional P2  
- [ ] Cookie/consent banner if adding web analytics (EEA)  

---

## 20. Quick reference — brand at a glance

```
Name:     Lucky Wheel (Lucky Pop design system)
Tagline:  Spin. Win. Celebrate.
Gold:     #FFB020
Coral:    #FF6B4A
Mint:     #2DD4BF
Surface:  #FFFBF5
Fonts:    Outfit + Plus Jakarta Sans
Email:    chuongdev97@gmail.com
iOS:      id1602451497
Android:  com.chuongdever.luckywheel
```

---

*Generated from Lucky Wheel app repo v2.2.0 — design tokens, localization, and store identifiers verified against source.*
