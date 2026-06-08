---
portfolio: true
id: pillary
name: Pillary
tagline: Calm, reliable medication reminders & adherence insights
description: Pillary helps you stay consistent with medications using smart schedules, fast logging, and clear adherence insights.
landingPageUrl: pillary.chuongle.dev
appStoreId: 6768251990
playStoreId: com.cdev.pillary
imageUrl: /images/pillary.png
category: mobile
technologies:
  - Flutter
  - Firebase
  - Smart schedules
features:
  - Smart schedules with flexible reminders for complex regimens
  - Fast dose logging — log a dose in seconds without clutter
  - Adherence insights with clear trends to improve your routine
  - Exports & sharing for caregivers and clinicians (Premium)
  - Backup & restore to keep history safe across devices (Premium)
---

# Pillary — Landing Page + Terms + Privacy (Source of Truth)

**Project:** Pillary  
**Last updated:** 2026-05-06  

This document contains the **necessary information** to create a marketing landing page for Pillary, including:
- Home landing page structure + copy (with an **animated HERO** spec)
- A separate **Terms** page
- A separate **Privacy** page
- Brand tokens aligned to the app design system

---

## Brand tokens (use these in the site theme)

- **Primary (Calm Blue):** `#005D90`
- **Primary container (accent / gradient end):** `#0077B6`
- **Background / surface:** `#F8F9FA`
- **Text (on-surface):** `#191C1D`
- **Fonts:** Headlines **Manrope**, body/labels **Inter**

### Primary CTA styling guidance

- **Button fill:** subtle gradient from `#005D90` → `#0077B6`
- **Button radius:** fully rounded (“pill”)
- **Tap target height:** minimum 56px

---

## Site map + routes

- **`/`** Home (landing)
- **`/terms`** Terms of Service
- **`/privacy`** Privacy Policy

---

## Home page (copy + layout spec)

### SEO

- **Title:** Pillary — Calm, reliable medication reminders & adherence insights
- **Meta description:** Pillary helps you stay consistent with medications using smart schedules, fast logging, and clear adherence insights. Premium unlocks advanced tools like exports and deeper analytics.

---

## Wireframe (desktop-first; responsive stacks on mobile)

```
┌──────────────────────────────────────────────────────────────────────┐
│ Top Nav: [Pillary Logo]             [Features] [Premium] [FAQ] [CTA]  │
├──────────────────────────────────────────────────────────────────────┤
│ HERO                                                                  │
│  Headline + subheadline + CTAs        Animated mock + progress ring    │
│  Trust line (small)                  (cards slide in, ring draws)      │
├──────────────────────────────────────────────────────────────────────┤
│ Social Proof: 3 reviews (carousel or 3 columns)                        │
├──────────────────────────────────────────────────────────────────────┤
│ Features (5 items) + lightweight visuals                               │
├──────────────────────────────────────────────────────────────────────┤
│ Premium teaser + plan tiles + subscription note                        │
├──────────────────────────────────────────────────────────────────────┤
│ FAQ (accordion)                                                        │
├──────────────────────────────────────────────────────────────────────┤
│ Final CTA                                                              │
├──────────────────────────────────────────────────────────────────────┤
│ Footer: links (Terms/Privacy), support, copyright                      │
└──────────────────────────────────────────────────────────────────────┘
```

---

## HERO section

### Copy (hero)

- **Headline:** Take your meds on time—calmly.
- **Subheadline:** Smart reminders, fast dose logging, and gentle insights that fit real life.
- **Primary CTA:** Download / Get started
- **Secondary CTA:** See Premium
- **Trust line (small):** Designed for clarity. Built to reduce missed doses.

### Animated hero spec (implementation-ready)

**Goal:** “Calm, premium, editorial” motion—subtle and reassuring.

- **Animation elements:**
  - **Dose-progress ring** (thin circular progress) animates from 0% → 70%
  - **Reminder cards** (2–3 lightweight cards) slide in with staggered timing
  - **Background wash** (very subtle gradient tint) fades in

- **Timing + easing:**
  - Duration per element: 250–450ms
  - Stagger: 80–140ms between cards
  - Easing: `easeOutCubic` (or equivalent)
  - **No bounce** / no spring overshoot

- **Accessibility (required):**
  - If `prefers-reduced-motion` is enabled: show **static** ring and cards (no movement)

- **Suggested animated states:**
  - Ring: 0 → 70%
  - Card 1: “Next dose” appears
  - Card 2: “Logged” confirmation appears
  - Card 3 (optional): “Weekly trend” mini chart stub appears

---

## Social proof (3 reviews)

1) **“Finally consistent.”**  
I used to miss doses when my day got busy. Pillary’s reminders and quick logging made it effortless to stay on track.  
— Maya

2) **“The insights are eye‑opening.”**  
Seeing my adherence trends helped me spot the exact times I slip up, and I fixed my routine in a week.  
— Daniel

3) **“Perfect for caregivers.”**  
I can export a clear report and share it with my partner and doctor. It saves time at appointments.  
— Linh

---

## Features section

### Section title

Everything you need to stay consistent

### Feature bullets

- **Smart schedules:** Flexible reminders for complex regimens.
- **Fast dose logging:** Log a dose in seconds—without clutter.
- **Adherence insights:** Clear trends that help you improve your routine.
- **Exports & sharing (Premium):** Share reports with caregivers/clinicians.
- **Backup & restore (Premium):** Keep your history safe across devices.

---

## Premium teaser (paywall-aligned)

### Copy

- **Headline:** Unlock Pillary Premium
- **Body:** Go deeper with insights, exports, and advanced tools for long-term consistency.
- **CTA:** See plans

### Plan tiles (display only; app stores handle billing)

- **1 Month**
- **12 Months**
- **Lifetime**

### Subscription note (small print)

Payment will be charged to your account at confirmation. Subscription renews automatically unless cancelled at least 24 hours before the end of the current period. Manage or cancel anytime in your account settings. Restore purchases available.

---

## FAQ (suggested)

- **Is Pillary free?** Core tracking is free; Premium unlocks advanced features.
- **Can I restore purchases?** Yes—use Restore Purchases.
- **Will Pillary share my health data?** See our Privacy Policy for details.
- **Can I use it for multiple medications?** Yes; Premium may unlock unlimited/advanced capabilities depending on your plan.
- **Does it work offline?** Core logging works offline; some features may require connectivity.

---

## Final CTA

- **Headline:** Make consistency feel easy.
- **CTA:** Download / Get started
- **Links:** Terms, Privacy

---

## Footer

- **Links:** Home, Terms, Privacy
- **Support:** `{{SUPPORT_EMAIL}}`
- **Legal:** © `{{YEAR}}` `{{LEGAL_ENTITY_NAME}}`. All rights reserved.

---

## Terms of Service (separate page)

**Page title:** Terms of Service — Pillary  
**Effective date:** `{{EFFECTIVE_DATE}}`  
**Legal entity:** `{{LEGAL_ENTITY_NAME}}`  
**Support email:** `{{SUPPORT_EMAIL}}`  

### 1. Acceptance of Terms

By accessing or using Pillary (the “App”), you agree to these Terms. If you do not agree, do not use the App.

### 2. Changes to Terms

We may update these Terms from time to time. Changes are effective when posted. Continued use means you accept the updated Terms.

### 3. Eligibility

You must be legally able to form a binding contract in your jurisdiction to use the App.

### 4. Medical Disclaimer

Pillary is not a medical device and does not provide medical advice. The App is for informational and organizational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. In an emergency, contact local emergency services immediately.

### 5. Subscriptions, Billing, and Purchases

Premium features may be offered via in-app purchases. Billing and renewals are handled by the platform provider (Apple App Store / Google Play).

- Payment is charged at confirmation of purchase.
- Subscriptions auto-renew unless cancelled at least 24 hours before the end of the current period.
- You can manage or cancel subscriptions in your platform account settings.
- If available, “Restore Purchases” can be used to re-enable prior purchases.

Refunds are handled according to the platform provider’s policies unless otherwise required by law.

### 6. License to Use the App

We grant you a personal, non-exclusive, non-transferable, revocable license to use the App for your personal, non-commercial use, subject to these Terms.

### 7. Prohibited Use

You agree not to:
- Use the App for unlawful purposes
- Attempt to disrupt, damage, or reverse engineer the App
- Circumvent access controls or misuse Premium entitlements

### 8. Intellectual Property

The App and all related trademarks, content, and intellectual property are owned by `{{LEGAL_ENTITY_NAME}}` or its licensors.

### 9. Third-Party Services

The App may rely on third-party services for functionality (for example, subscription infrastructure). Your use of third-party services may be subject to their terms.

### 10. Disclaimer of Warranties

The App is provided “as is” and “as available” without warranties of any kind, to the maximum extent permitted by law.

### 11. Limitation of Liability

To the maximum extent permitted by law, `{{LEGAL_ENTITY_NAME}}` will not be liable for indirect, incidental, special, consequential, or punitive damages, or any loss of data, profits, or goodwill.

### 12. Indemnification

You agree to indemnify and hold harmless `{{LEGAL_ENTITY_NAME}}` from claims arising out of your use of the App or violation of these Terms.

### 13. Governing Law

These Terms are governed by the laws of `{{GOVERNING_LAW_JURISDICTION}}`, without regard to conflict of law rules.

### 14. Contact

Questions about these Terms:

- Email: `{{SUPPORT_EMAIL}}`

---

## Privacy Policy (separate page)

**Page title:** Privacy Policy — Pillary  
**Effective date:** `{{EFFECTIVE_DATE}}`  
**Legal entity (data controller):** `{{LEGAL_ENTITY_NAME}}`  
**Contact email:** `{{SUPPORT_EMAIL}}`  

### 1. Overview

This Privacy Policy explains how we collect, use, and share information when you use Pillary.

### 2. Information We Collect

Depending on how you use the App, we may collect:
- **App data you provide:** medication schedules, reminders, dose logs, notes you enter (if applicable)
- **Device/app information:** app version, device model, OS version, language, basic diagnostics
- **Purchase information:** subscription status and entitlement metadata (processed via platform providers and our subscription infrastructure)

### 3. How We Use Information

We use information to:
- Provide and improve core app functionality (reminders, logging, insights)
- Maintain security and prevent abuse
- Provide customer support

### 4. Purchases and Subscription Processing

Subscriptions and purchases are processed through Apple App Store / Google Play. We may use a third-party subscription service to validate entitlements and manage access to Premium features.

### 5. Sharing of Information

We do not sell your personal information. We may share information with:
- **Service providers** that help operate the App (e.g., subscription validation, hosting)
- **Legal requests** when required by law

### 6. Data Retention

We retain information as long as necessary to provide the App and for legitimate business purposes, unless a longer period is required by law.

### 7. Your Choices and Rights

Depending on your jurisdiction, you may have rights to:
- Access, correct, or delete your data
- Export your data (if supported in-app)

To request help, contact `{{SUPPORT_EMAIL}}`.

### 8. Security

We use reasonable technical and organizational measures designed to protect information. No method of transmission or storage is 100% secure.

### 9. Children’s Privacy

The App is not intended for children under the age of `{{MINIMUM_AGE}}` (or the minimum age required in your jurisdiction). We do not knowingly collect personal information from children.

### 10. International Transfers

If you access the App from outside `{{COUNTRY_OR_REGION}}`, your information may be processed in other locations with different data protection laws.

### 11. Changes to this Policy

We may update this Privacy Policy from time to time. Changes are effective when posted.

### 12. Contact

Questions or requests:

- Email: `{{SUPPORT_EMAIL}}`

---

## Placeholders to fill (recommended defaults)

- `{{LEGAL_ENTITY_NAME}}`: your company / developer legal name (or personal name if you ship as an individual)
- `{{SUPPORT_EMAIL}}`: support inbox for users
- `{{EFFECTIVE_DATE}}`: e.g., 2026-05-06
- `{{YEAR}}`: e.g., 2026
- `{{GOVERNING_LAW_JURISDICTION}}`: e.g., your country/state/province
- `{{MINIMUM_AGE}}`: e.g., 13 or 16 (depends on region)
- `{{COUNTRY_OR_REGION}}`: where your entity is based

