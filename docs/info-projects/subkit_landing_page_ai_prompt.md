---
appStoreId: 6760972367
playStoreId: com.cdev.subkit
---

# Subkit — AI landing page generation prompt

Use the block below as a **single system + user prompt** (or paste into Figma AI, v0, Lovable, Framer AI, Midjourney for hero stills, etc.). It includes **product boundaries** (manual entry, no bank link), **data model** hints, **dashboard/widgets/premium** behavior aligned with the Subkit codebase, and **motion/marketing** cues from `docs/subkit_appplan.md` / `docs/micro_interaction.md`. Replace bracketed placeholders with your real App Store / Play Store URLs, bundle name, and legal links when you ship.

---

## Copy-paste prompt

```
You are a senior product designer and front-end motion designer. Design a single-page marketing site for a mobile app called **Subkit**.

### What Subkit is
Subkit is a **subscription tracker** for people who juggle many recurring charges (streaming, music, apps, fitness, cloud storage, etc.). It helps users **see total monthly spend at a glance**, **know when the next bill hits**, and **feel the weight of recurring costs** through tasteful visuals—not a boring spreadsheet.

### One-line positioning
“The most beautiful way to see where your money goes.”

### Who it’s for
Gen Z and young professionals (roughly 18–30) who care about **aesthetic UI**, **smooth motion**, and **emotional awareness** of spending—not corporate finance software.

### Core problems it solves
- “I forget what I’m paying for every month.”
- “My subscriptions are scattered; I need one clear total.”
- “I want upcoming charges on a timeline so I’m not surprised.”
- “I want a quick, visceral sense of what that total ‘feels like’ in real life.”
- “I want to mark something paid or fix the next date without fighting a spreadsheet.”

### What Subkit is **not** (avoid misleading copy)
- **Not** a bank connector: users **manually** add subscriptions (no Plaid-style account linking, no automatic transaction import).
- **Not** investment, tax, or debt advice; it is a **visibility and organization** tool for recurring personal expenses.
- **Not** an AI assistant app unless you are explicitly told otherwise.

### Platform & stack (context only—don’t nerd out on the landing page)
- **Mobile app**: built with **Flutter**; ships on **iOS and Android**.
- **Data**: subscription records are stored **on-device** (local database); good for privacy and offline use. Frame as “your list, your phone” rather than “cloud vault” unless sync is explicitly a shipped feature.
- **Money display**: amounts are tracked in a consistent way and the UI can respect **locale/currency formatting**; the app is for **personal clarity**, not corporate accounting.

### What a “subscription” means in Subkit (be precise in feature copy)
Each entry can include:
- **Name**, **price**, **billing cycle** (monthly, yearly, or **custom** interval in days).
- **Next billing date** (and optional **last paid** tracking).
- **Brand look**: icon from a **curated brand icon set** and/or **recognizable service logos** where available—so rows feel like Netflix/Spotify/etc., not generic gray rows.
- Optional **category** and **payment method** labels for the user’s own notes (e.g. “Card ending 4242”).
- The app derives a **monthly equivalent** from yearly and custom cycles so the **big total** compares apples to apples.

### Key product facts (must appear clearly on the page)
1. **Fast add flow** — target **under ~5 seconds** for a typical add; fields: name, price, cycle, next bill date, visual/icon.
2. **Dashboard** — **hero monthly total** (large type) plus **subscription cards** (logo/icon, name, price, next bill). Support **list or grid** presentation where it fits the mockup story.
3. **Gestures & control** — **swipe** for actions such as **edit** and **delete**; **long-press reorder**; ability to **mark as paid** / adjust timing so the timeline stays honest.
4. **Upcoming charges timeline** — horizontal “what’s due next” with stronger visual emphasis when a bill is **imminent** (pulse, color, or weight—not alarmist).
5. **Insights carousel (hero area)** — the dashboard treats the total as a story, not one static number. Plausible slides to illustrate in marketing mockups: **largest subscription vs the rest**, **projected yearly spend** (from current monthly picture), **pain / coffee-style equivalent**, **average per day**, **how many subs you track**, and richer **charts** (share of spend, quick comparisons, trends). **Do not** promise every chart on the free tier—position **full insight set** as part of **Premium** if you show many variants.
6. **Pain meter / equivalents** — reframes monthly total into a **relatable everyday equivalent** (e.g. coffees); purpose is **emotional awareness** and shareable “aha,” not shame.
7. **Widgets (Premium)** — **home screen widgets** for at-a-glance: e.g. **spend pulse**, **next renewal**, **compact timeline**, **equivalent line**, **top costs**; tapping can **deep link back into the app**. On **iOS**, widgets rely on the system widget extension; mention widgets as a **Premium** perk.
8. **Premium vs Free** — **Free**: up to **5** tracked subscriptions. **Premium**: **unlimited** subscriptions, **widgets**, **extra dashboard charts / insights**, **themes**—purchased via standard **App Store / Play Store** in-app subscription flows (e.g. **RevenueCat**-style paywall behind the scenes). Include **restore purchases** in FAQ-style copy where appropriate.
9. **Billing hub** — in-app place to **upgrade**, **restore**, and see **plan status** (Free vs Premium)—keep landing page copy simple: “Manage your Subkit plan in the app.”

### Design & motion principles (align landing with the product spec)
- **First impression ~2 seconds**: hero should feel **instantly premium** (dark, glass, gradient accent, readable type).
- **Motion = emotion**: money-related UI should feel **responsive** (quick tap feedback), **physical** (springs, ease-out), not stiff.
- **Reference timings** for hero/mockup storytelling (optional for implementers): **200–400ms** transitions, **count-up ~600ms** with ease-out cubic; **staggered list entrance ~40ms** between items; avoid janky blur on full-width scrolling panels.
- **WOW without clutter**: show **one** strong dashboard story in the hero; avoid “accounting dashboard” density.

### Marketing angles (optional sections or ad snippets)
- Short-form friendly hooks (from product strategy): “I didn’t know I was spending **$X**/month,” “Finally **one total** for every subscription,” “**See what’s due next** before it charges.”
- Channels the product cares about: **TikTok**, **Threads**—landing can include a **“Made for quick demos”** line (looping UI video placeholder).

### Localization
- The real app is **localized** (multiple languages). If the landing page is English-first, add a note: “Available in [list or ‘multiple languages’]” using placeholders if unknown.

### Visual & brand direction (must follow)
- **Dark-first** landing page (optional short light section allowed, but hero is dark).
- **Premium, calm, lifestyle + finance** hybrid—Apple-level polish, not gimmicky crypto aesthetic.
- **Glassmorphism** cards: subtle frosted panels, soft borders, gentle inner highlights.
- **Background**: deep near-black `#0F0F0F` or `#0E0E0E` (pick one and stay consistent).
- **Primary accent**: use a **cyan–teal gradient** for primary CTAs and key highlights, e.g. `#2193B0` → `#6DD5ED` (if you need a secondary accent, a soft purple→blue gradient is acceptable for small details only—do not clash with the teal hero).
- **Typography**: clean geometric sans; **very large numerals** for money in mock UI previews; body text at ~60% white opacity for secondary labels.
- **Danger / delete** accent only if showing UI chrome: `#FF5A5A` (sparingly).

### Hero section (critical): smooth animated hero
Design the hero as the **emotional centerpiece** with **smooth, premium motion** (describe animation precisely enough that a developer can implement with CSS/JS or a motion tool):

- **Layout**: full-viewport hero. Left (or top on mobile): headline + subcopy + CTAs. Right (or below): **device mockup** (phone) showing a stylized Subkit dashboard with a **large monthly total** and a **timeline strip** of upcoming charges.
- **Motion concepts** (pick 3–5 that work together, all subtle and 60fps-friendly):
  - Soft **gradient mesh or aurora** behind the phone that **slowly drifts** (15–25s loop).
  - **Hero number** (e.g. “$247”) **counts up** on scroll-into-view or on load (600–900ms, ease-out cubic).
  - **Staggered fade + slight Y translation** (8–16px) for headline, subcopy, and CTAs (80–120ms stagger).
  - **Glass cards** in the mockup with **gentle parallax** on mouse move / tilt on mobile (very subtle).
  - **Timeline pills** with a **soft pulse** when “due soon.”
- **Performance**: prefer opacity and transform; avoid heavy blur on huge scroll areas; if blur is used, keep it on small panels only.
- **Accessibility**: respect `prefers-reduced-motion`—static but still beautiful fallback.

### Page structure (single scrolling page)
1. **Nav** — logo wordmark “Subkit”, links: Features, How it works, Pricing snapshot, FAQ; primary **Download** button.
2. **Hero** — as above.
3. **Social proof strip** (lightweight, honest)—e.g. “Built for people with 5–20+ subscriptions” or “Designed for clarity, not clutter” (no fake testimonials unless provided).
4. **Feature grid** — 8–10 cards (merge visually if needed): Quick add (manual), Monthly/yearly/custom cycles, Next bill + mark paid, List/grid dashboard, Swipe actions + reorder, Timeline + “due soon” emphasis, Hero insights (split, yearly estimate, daily average, equivalents—note Premium for full chart set), Brand icons & logos, Home screen widgets (Premium), Themes (Premium), Works offline / on-device.
5. **How it works** — 3 steps with simple illustrations: **Add** what you pay for → **See** one monthly total + what’s next → **Adjust** (cancel, reorder, mark paid) with clarity.
6. **Pricing snapshot** — Free (**5** subs) vs Premium (**unlimited** + **widgets** + **themes** + **full insights/charts**); mention **restore purchases**; no dark patterns or fake countdowns.
7. **FAQ** — 8–10 questions suggested:
   - Does Subkit connect to my bank? (**No—manual entry.**)
   - Where is my data stored? (**On your device**; keep high-level.)
   - iOS and Android? (**Yes**, Flutter app.)
   - What counts as a subscription? (**Any recurring charge you want to track.**)
   - Custom billing intervals? (**Yes**, e.g. every N days.)
   - Free limit? (**5** tracked subscriptions.)
   - What does Premium add? (Unlimited, widgets, themes, deeper dashboard charts.)
   - How do I restore Premium? (Use in-app restore / same store account.)
   - Widgets on both platforms? (Yes; note **iOS home screen widgets** need the app installed; Android supported.)
   - Refunds / subscription management? (Managed by **Apple/Google**; link placeholders.)
8. **Footer** — support email placeholder, privacy, terms, “Not financial advice” one-liner if appropriate.

### CTAs (must be irresistible but honest)
- Primary: **Download on the App Store** / **Get it on Google Play** (use official badge styles where applicable).
- Secondary: **See your monthly total in 60 seconds** (scroll to how-it-works) or **Join the waitlist** if stores are not live—specify which applies in brackets for the implementer.
- Optional tertiary: **Watch the 15s demo** (looping video/GIF placeholder)—product strategy favors **short**, **motion-heavy** social clips; the landing page can echo that.
- Microcopy near buttons: emphasize **speed**, **clarity**, and **control**—e.g. “Know your recurring spend before it sneaks up on you,” “No bank login. Just your subscriptions, organized.”

### Tone
Confident, warm, slightly witty—**never preachy or guilt-tripping**. The pain meter is **awareness**, not shame.

### Deliverables
- Desktop + mobile layouts.
- Written spec for **hero animations** (durations, easing, triggers).
- All final copy in the mockup (headlines, body, buttons, FAQ).
- Optional: component list (Hero, FeatureCard, PricingTable, FAQ accordion) for handoff.

### Do not
- Invent **automatic bank linking**, **transaction import**, **bill negotiation**, **investment advice**, or **AI chat** unless explicitly specified.
- Promise **cloud sync across devices** or **family sharing** as shipped unless confirmed—treat as **future** if mentioned at all.
- Confuse **Subkit Premium** (paying for the app) with **the user’s Netflix/Spotify bills** (what they track).
- Use stock “corporate fintech” blue gradients as the dominant brand (stay on the dark + teal/cyan system above).
- Use tiny low-contrast text for critical CTAs or pricing limits.
- Make the UI look like **accounting software** or dense **ERP** dashboards—stay **lifestyle + clarity**.
```

---

## Quick reference (human-readable)

| Item | Detail |
|------|--------|
| **App name** | Subkit |
| **Category** | Subscription / recurring spend tracker (manual entry) |
| **Tagline** | The most beautiful way to see where your money goes |
| **Platforms** | iOS & Android (Flutter), localized |
| **Data** | On-device; no bank linking |
| **Per-sub fields** | Name, price, monthly/yearly/custom cycle, next bill, optional category & payment note, brand icon/logo |
| **Dashboard** | Big monthly total, cards, list/grid, swipe edit/delete, reorder, mark paid, hero insight slides + charts (full set → Premium) |
| **Widgets (Premium)** | Spend pulse, next renewal, timeline, equivalent, top costs; tap opens app |
| **Hero motion** | Drifting gradient, count-up total, staggered text, subtle parallax on mockup, timeline pulse |
| **Palette** | `#0F0F0F` / `#0E0E0E` bg, CTA gradient `#2193B0` → `#6DD5ED`, danger `#FF5A5A` sparingly |
| **Free tier** | Max 5 tracked subscriptions |
| **Premium** | Unlimited subs, home screen widgets, themes, full dashboard charts/insights, in-app purchase + restore |
| **Monetization (app)** | RevenueCat-style IAP; not the same as tracked services |

---

## Optional: combine with a style reference

If your tool accepts a style module, pair this prompt with **Modern Dark** or **Minimal Dark** from `.cursor/uiux_reference/landing_page_prompts/` (`02-modern-dark.md`, `18-minimal-dark.md`) and ask the model to **merge** Subkit’s teal accent and glass cards with that style’s layout rules.
