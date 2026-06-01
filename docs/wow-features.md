# Wow Features — CDev Portfolio

> Feature ideas ranked by impact and implementation effort, tailored to the dark cyberpunk aesthetic.

---

## Tier 1 — High Impact, Quick to Ship

### 1. Terminal Easter Egg
- **Trigger:** Press `` ` `` anywhere on the page
- **What it does:** Opens a CLI overlay with commands like `ls projects`, `cat maskshot`, `contact`, `help`, `clear`
- **Why:** Dead-on-brand for a developer portfolio. Visitors who discover it will share it.
- **Effort:** Medium (client component, command parser, command registry)

### 2. Mount the CursorTrail (already built)
- **What it does:** Activates the cyan canvas trail following the cursor
- **Why:** `CursorTrail` is fully implemented in `app/components/ui/` but never imported in `layout.tsx`
- **Effort:** Trivial — one import and one JSX tag

### 3. Magnetic Buttons
- **What it does:** CTAs like "View Project →" subtly pull toward the cursor within ~80px radius
- **Why:** Feels premium and tactile — reinforces the glassmorphism card design
- **Effort:** Low (mousemove listener + CSS transform on hover)

### 4. Text Glitch / Scramble on Scroll
- **What it does:** Section headings cycle through random characters and resolve to real text when entering the viewport
- **Why:** Visually striking in a cyberpunk theme; fits the existing scanline/grid aesthetic perfectly
- **Effort:** Low (requestAnimationFrame loop + IntersectionObserver)

---

## Tier 2 — Medium Effort, Big Visual Payoff

### 5. Animated Phone Mockups with App Screenshots
- **What it does:** Each `ProjectCard` shows the app inside a CSS 3D phone frame that auto-scrolls through 2–3 screenshots
- **Why:** Transforms generic icon cards into live product demos — the single biggest upgrade to the projects section
- **Effort:** Medium (CSS 3D phone frame, screenshot data in markdown frontmatter, auto-scroll animation)

### 6. Download Stats / Metrics Counter (finished)
- **What it does:** Animated count-up row — e.g. `7 apps · 50K+ downloads · 4 platforms` — in the Hero or above Projects
- **Why:** Establishes credibility at a glance; the count-up on scroll-into-view is very satisfying
- **Effort:** Low–Medium (IntersectionObserver + requestAnimationFrame counter)

### 7. Matrix Code Rain Loading Screen
- **What it does:** 1–2s intro of falling cyan/green characters that dissolve into the Hero; shown once per session via `sessionStorage`
- **Why:** Classic cyberpunk opener, makes the first impression unforgettable
- **Effort:** Medium (canvas animation, session flag, fade-out transition)

---

## Tier 3 — More Involved, Maximum Wow

### 8. Interactive Skills Constellation
- **What it does:** A force-directed canvas graph of tech nodes — Swift, Flutter, Kotlin, React, Gemini AI, etc. — connected by glowing lines, with project names orbiting them. Hover a node to highlight which apps use it.
- **Why:** Nothing on a typical portfolio looks like this; a genuine conversation-starter
- **Effort:** High (D3.js or custom canvas physics, tech data per project)

### 9. AI Chat Widget ("Ask CDev")
- **What it does:** Floating chat button opens a panel; an API route calls an LLM with the markdown docs as context so visitors can ask "What does MaskShot do?" or "What tech does CDev use?"
- **Why:** Real AI answering questions about real work is an extraordinary differentiator in 2026
- **Effort:** High (API route, LLM integration, chat UI component, RAG over markdown)

### 10. Project "Behind the Build" Flip Panel
- **What it does:** Each card has a back face (CSS `rotateY`) revealing the real tech stack, challenges solved, and a "Why I built this" line
- **Why:** The `technologies` field is already parsed from markdown but unused on the card — this surfaces hidden data
- **Effort:** Medium (CSS 3D flip, back-face content, toggle state)

---

## Priority Summary

| # | Feature | Effort | Impact | Ship First? |
|---|---------|--------|--------|-------------|
| 2 | Mount CursorTrail | Trivial | Medium | ✅ Today |
| 4 | Glitch/Scramble Text | Low | High | ✅ Today |
| 3 | Magnetic Buttons | Low | Medium | ✅ Today |
| 6 | Download Stats Counter | Low–Medium | High | Next |
| 7 | Matrix Loading Screen | Medium | High | Next |
| 10 | Behind the Build Flip | Medium | High | Next |
| 5 | Phone Mockup Cards | Medium | Very High | Soon |
| 1 | Terminal Easter Egg | Medium | Very High | Soon |
| 8 | Skills Constellation | High | Very High | Later |
| 9 | AI Chat Widget | High | Extraordinary | Later |
