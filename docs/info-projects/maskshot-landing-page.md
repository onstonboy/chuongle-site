---
appStoreId: 6760220410
playStoreId: com.cdev.maskshot
---

# MaskShot — Landing Page Content

# landing page url: maskshot.chuongle.dev

Use this markdown as the single source of truth for building a landing page (static site, Notion, or CMS). Replace `[SCREENSHOT-X]` and image paths with your actual assets.

---

## Meta & SEO

| Field | Value |
|-------|--------|
| **Page title** | MaskShot — Clean Screenshots Before You Share |
| **Meta description** | Local-only screenshot cleaner. Automatically detects and redacts sensitive text (tokens, emails, URLs) on your device before you share. |
| **Keywords** | screenshot redaction, sensitive data, OCR, privacy, token redaction, share safely, on-device |
| **OG image** | `assets/launcher/ic_launcher.png` or a 1200×630 promo image |

---

## Hero

**Headline:** Clean screenshots before sharing  

**Subheadline:** MaskShot helps you share screenshots safely by hiding sensitive text. Everything happens on your device—nothing is sent to the cloud.

**Primary CTA:** Download on the App Store  
**Secondary CTA:** Get it on Google Play  

**Visual:** Hero image or app mockup (e.g. `[SCREENSHOT-HERO]`).

---

## Problem & Solution

**Problem (short):** Screenshots often contain tokens, emails, URLs, and other sensitive data. Sharing them as-is can leak secrets.

**Solution:** MaskShot analyzes your screenshot on-device, detects sensitive text, and overlays redaction boxes so you can safely save or share. Images and text never leave your device.

---

## How it works

**Section title:** How MaskShot works  

**Body:** MaskShot analyzes your screenshot on-device to detect sensitive text like tokens, emails, and URLs, then overlays black boxes so you can safely share. Images and text never leave your device.

**Steps (for a 3-step visual):**

1. **Pick or capture** — Select screenshots from your gallery or take a new one.
2. **Review & edit** — See what’s detected; add manual redaction areas, change colors, zoom to inspect.
3. **Save or share** — Save to gallery, share only, or save and share. Your choice.

---

## Key features

### Privacy first

**Title:** Privacy first  
**Text:** All detection and redaction happens on your device. Nothing is sent to the cloud.

### On-device OCR

**Title:** On-device OCR  
**Text:** Detects emails, tokens, URLs, and credit cards automatically. Your data never leaves this device.

### What gets detected

**Title:** Tokens & secrets  
**Subtitle:** Manage what gets redacted  

Built-in patterns include (use as a list or tags):

- Email addresses  
- Tokens / API keys  
- URLs with token params  
- Long numeric codes (6+ digits)  
- Database connection strings  
- Bearer tokens  
- Env-style secrets (PASSWORD, SECRET, etc.)  
- JWT-like tokens  
- Credit card numbers, expiry, CVV  
- Phone numbers, SSN, IP addresses  
- IBAN-like account numbers  
- AWS access key IDs (AKIA...)  
- GitHub tokens (ghp_, gho_, etc.)  
- Google API keys (AIza...)  
- Stripe keys (sk_live_, pk_live_, etc.)  
- Slack tokens (xoxb-, xoxp-, etc.)  
- Private key headers (PEM)  
- Redis connection strings  
- And more — plus **custom regex patterns** with Premium.

### Editor & redaction

- **Shapes:** Rectangle and oval redaction areas.  
- **Manual redaction:** Draw extra areas; move, resize, undo.  
- **Colors:** Solid black, soft grey, alert red, deep blue, safe green, or custom color with eyedropper.  
- **Preview:** Toggle between original and redacted view; long-press to peek full text.

### Secure vault

**Title:** Secure vault  
**Text:** A secure space for screenshots you’ve chosen to keep. Unlock with PIN or biometrics. Items never leave your device. Free users can secure up to 5 images; Premium unlocks unlimited and custom vaults.

### Export options

- Save to gallery  
- Share only  
- Save & share  

Default can be set in Settings.

---

## Pricing

| Plan | Summary |
|------|---------|
| **Free** | Core redaction, built-in patterns, secure vault (up to 5 images), history. |
| **Premium** | Custom detection patterns, unlimited vault images, custom vaults, batch (multi-image) editing. |

**CTA:** Upgrade to Premium (in-app).

---

## Screenshots (placeholders)

Add 3–6 screens with short captions. Suggested order:

1. **Image picker** — “Select screenshots from gallery or take a new one.” — `[SCREENSHOT-01-PICKER]`
2. **Detection / editor** — “Review detections and add manual redaction areas.” — `[SCREENSHOT-02-EDITOR]`
3. **Detection rules** — “Manage default and custom patterns.” — `[SCREENSHOT-03-RULES]`
4. **Vault** — “Keep sensitive screenshots in a secure vault.” — `[SCREENSHOT-04-VAULT]`
5. **History** — “Review what you’ve recently cleaned and shared.” — `[SCREENSHOT-05-HISTORY]`
6. **Settings** — “Language, export default, vault security, restore purchase.” — `[SCREENSHOT-06-SETTINGS]`

**Asset hint:** Use `images/01-picker.png`, etc., as in `screenshots/README.md` (e.g. from `adb exec-out screencap`), or export from simulator/device.

---

## Trust & compliance

- **Privacy:** Link to `docs/privacy.md` or your hosted privacy policy URL.  
- **Terms:** Link to `docs/termsandconditions.md` or your hosted terms URL.  
- **Local-only:** Emphasize “Processing happens entirely on your device” and “Nothing leaves your phone” where relevant.

---

## Download / App store links

| Platform | Link / ID |
|----------|-----------|
| **iOS** | App Store ID: `6760220410` → `https://apps.apple.com/app/id6760220410` |
| **Android** | Package: `com.cdev.maskshot` → `https://play.google.com/store/apps/details?id=com.cdev.maskshot` |

**Buttons:** Use official “Download on the App Store” and “Get it on Google Play” badge images and link to the URLs above.

---

## Footer

- **App name:** MaskShot  
- **Tagline:** Clean screenshots before sharing.  
- **Links:** Privacy Policy · Terms & Conditions · Contact / Feedback  
- **Contact:** chuongdev97@gmail.com (from privacy.md)  
- **Service provider:** CDev  
- **Version / copy:** Optional — “All detection and redaction happens on-device. You can change rules at any time.”

---

## Brand colors (for implementation)

Use these for buttons, accents, and backgrounds if you build a styled landing page:

| Token | Hex | Usage |
|-------|-----|--------|
| Primary | `#0E90B7` | CTAs, links, key UI |
| Background | `#050913` | Page or section background |
| Surface | `#0F172A` | Cards, panels |
| Text on dark | `#FFFFFF` | Headings, body on dark |
| Text secondary | `rgba(255,255,255,0.7)` | Subheadings, captions |

---

## Checklist before publish

- [ ] Replace all `[SCREENSHOT-X]` with real screenshot paths or hosted URLs.  
- [ ] Add App Store and Play Store badge images and correct links.  
- [ ] Publish and link `privacy.md` and `termsandconditions.md` to the URLs used in the footer.  
- [ ] Set meta title, description, and OG image in your HTML or CMS.  
- [ ] Test both store links (iOS and Android).  
- [ ] Optional: Add a simple contact form or mailto link for “Feedback” in the footer.
