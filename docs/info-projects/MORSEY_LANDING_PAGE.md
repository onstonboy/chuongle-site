---
portfolio: true
id: morsey
name: Morsey
tagline: Same words. A different world.
description: Transform ordinary text into custom secret slang, nostalgic 2004 teencode, or phrase-locked private messages only your inner circle can decode.
landingPageUrl: morsey.chuongle.dev
appStoreId: 6810303356
playStoreId: com.cdev.morsey
imageUrl: /images/morsey.png
category: mobile
technologies:
  - Flutter
  - Three.js
  - Cryptography
  - Local-first
features:
  - Custom Slang & Dialect Builder to create personalized cipher rules
  - Natural Chat Disguise & passphrase-locked private messages
  - 1-Tap TeenCode 2004 & Gen Z secret language styler
  - Secret QR Cards for fast scanning and sharing across social apps
  - 100% Offline with Biometric Face ID / Fingerprint vault protection
screenshots:
  - /images/morsey/01_home.png
  - /images/morsey/04_encrypt.png
  - /images/morsey/06_share_qr.png
  - /images/morsey/07_keyboard.png
---

# 🚀 Morsey Landing Page Specification & Implementation Guide

# landing page url: morsey.chuongle.dev

> **Tech Stack:** Node.js • Vite • Three.js • Vanilla CSS3 / Modern Glassmorphism  
> **Target:** High-conversion, 3D interactive marketing website for **Morsey: Secret Language & Teencode**

---

## 📑 Table of Contents
1. [Architecture & Concept Overview](#1-architecture--concept-overview)
2. [Project Setup & Quick Start](#2-project-setup--quick-start)
3. [Complete Source Code](#3-complete-source-code)
   - [`package.json`](#packagejson)
   - [`index.html`](#indexhtml)
   - [`src/style.css`](#srcstylecss)
   - [`src/main.js` (Three.js 3D Hero + Interactive Demo)](#srcmainjs)
4. [Sections & ASO Marketing Strategy](#4-sections--aso-marketing-strategy)
5. [Screenshot Gallery Integration](#5-screenshot-gallery-integration)
6. [Deployment Guide](#6-deployment-guide)

---

## 1. Architecture & Concept Overview

### 🎨 Visual Identity & Theme
- **Vibe:** Dark cyber-mystic, glassmorphism, neon amber/violet accents, retro-Y2K meets sleek modern iOS/Android aesthetic.
- **Color Palette:**
  - Background: `#0B0D14` (Deep obsidian dark)
  - Card Glass: `rgba(255, 255, 255, 0.05)` with `backdrop-filter: blur(16px)`
  - Accent Primary: `#8B5CF6` (Mystic Violet) & `#EC4899` (Cyber Pink)
  - Accent Secondary: `#06B6D4` (Neon Cyan) & `#F59E0B` (Amber Gold)
  - Typography: `Outfit` & `JetBrains Mono` / `Inter`

### 🔮 Three.js Hero 3D Animation Concept
- **Interactive Holographic Polyhedron (Cipher Core):** An Icosahedron with wireframe bloom glowing at the center that rotates smoothly and morphs speed based on cursor proximity.
- **Particle Constellation (Floating Secret Runes):** 1,500 glowing stars and floating cipher runes (`✦`, `✨`, `0`, `1`, `🔒`, `k`, `h`, `u`, `m`) floating in a 3D gravitational field.
- **Mouse Parallax / Touch Gyroscope:** Responsive camera tilt giving a tactile depth effect.

---

## 2. Project Setup & Quick Start

Create and run the landing page in a standalone folder:

```bash
# 1. Create a new folder and enter it
mkdir morsey-landing && cd morsey-landing

# 2. Initialize project with files below
npm init -y
npm install three lucide

# 3. Install Vite as dev dependency
npm install -D vite

# 4. Start the local dev server
npx vite
```

---

## 3. Complete Source Code

### `package.json`
```json
{
  "name": "morsey-landing",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "lucide": "^0.475.0",
    "three": "^0.174.0"
  },
  "devDependencies": {
    "vite": "^6.2.0"
  }
}
```

---

### `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Morsey — Same words. A different world.</title>
  <meta name="description" content="Turn everyday text into custom secret languages, teencode styles, and phrase-locked private messages. 100% on-device privacy." />
  
  <!-- Open Graph / Meta -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Morsey: Secret Language & Teencode" />
  <meta property="og:description" content="Style your text, create custom slang, and disguise secret notes behind passphrases." />
  <meta property="og:image" content="/feature_graphic.png" />
  <meta name="theme-color" content="#0B0D14" />

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&family=Outfit:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  
  <link rel="stylesheet" href="/src/style.css" />
</head>
<body>
  <!-- Three.js Background Canvas -->
  <canvas id="hero-canvas"></canvas>

  <!-- Navigation Bar -->
  <header class="navbar">
    <div class="nav-container">
      <a href="#" class="brand">
        <span class="brand-icon">✨</span>
        <span class="brand-name">Morsey</span>
      </a>
      <nav class="nav-links">
        <a href="#demo">Live Demo</a>
        <a href="#features">Features</a>
        <a href="#screenshots">Screenshots</a>
        <a href="#faq">FAQ</a>
      </nav>
      <a href="#download" class="btn btn-primary nav-cta">Get App</a>
    </div>
  </header>

  <main>
    <!-- HERO SECTION -->
    <section class="hero-section">
      <div class="hero-badge">
        <span class="pulse-dot"></span> Available on iOS & Android
      </div>
      <h1 class="hero-title">
        Same words.<br />
        <span class="gradient-text">A different world.</span>
      </h1>
      <p class="hero-subtitle">
        Transform ordinary text into custom secret slang, nostalgic 2004 teencode, or phrase-locked private messages only your inner circle can decode.
      </p>

      <div class="hero-actions">
        <a href="https://apps.apple.com/app/id6810303356" target="_blank" class="store-badge apple">
          <svg class="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.64-.78 1.08-1.86.96-2.94-1 .04-2.16.66-2.83 1.44-.59.68-1.12 1.77-.98 2.82 1.11.09 2.22-.54 2.85-1.32z"/></svg>
          <div>
            <span class="label">Download on the</span>
            <span class="store-name">App Store</span>
          </div>
        </a>

        <a href="https://play.google.com" target="_blank" class="store-badge google">
          <svg class="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.793 12 3.61 22.186c-.347-.282-.563-.71-.563-1.186V3c0-.476.216-.904.562-1.186zm11.602 11.602l2.308 2.308-11.83 6.643 9.522-8.951zm2.308-2.832L5.69 3.94l11.83 6.644-2.308 2.308zm1.414 1.416l3.204 1.802c.866.487.866 1.283 0 1.77l-3.204 1.802-2.122-2.122 2.122-2.252z"/></svg>
          <div>
            <span class="label">GET IT ON</span>
            <span class="store-name">Google Play</span>
          </div>
        </a>
      </div>

      <div class="hero-stats">
        <div class="stat-item">
          <span class="stat-num">100%</span>
          <span class="stat-desc">Offline & On-Device</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <span class="stat-num">0 Cloud</span>
          <span class="stat-desc">No Account Required</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <span class="stat-num">Face ID</span>
          <span class="stat-desc">Biometric Protected</span>
        </div>
      </div>
    </section>

    <!-- LIVE INTERACTIVE PLAYGROUND -->
    <section id="demo" class="demo-section">
      <div class="section-header">
        <span class="section-tag">Interactive Preview</span>
        <h2>Try Morsey Live In Your Browser</h2>
        <p>Type anything below to see real-time teencode styling and cipher camouflage.</p>
      </div>

      <div class="demo-card">
        <div class="demo-controls">
          <button class="style-tab active" data-style="teencode">✨ TeenCode 2004</button>
          <button class="style-tab" data-style="genz">🔥 Gen Z Vibe</button>
          <button class="style-tab" data-style="disguised">🔒 Phrase Locked</button>
        </div>

        <div class="demo-grid">
          <div class="demo-box input-box">
            <label>Plain Message</label>
            <textarea id="demo-input" placeholder="Type something secret here...">Hôm nay bạn có rảnh không đi uống trà sữa nha?</textarea>
          </div>
          <div class="demo-arrow">➔</div>
          <div class="demo-box output-box">
            <div class="output-header">
              <label>Morsey Output</label>
              <button id="copy-demo-btn" class="copy-btn">Copy</button>
            </div>
            <div id="demo-output" class="output-content">H0m n4y b4n k0 r4nh khum dj u0ng tr4 su4 nh4? ✨</div>
          </div>
        </div>
      </div>
    </section>

    <!-- SCREENSHOTS SHOWCASE -->
    <section id="screenshots" class="screenshots-section">
      <div class="section-header">
        <span class="section-tag">Experience</span>
        <h2>Designed For Privacy & Style</h2>
        <p>Explore the stunning screens built with Flutter and crafted for modern aesthetics.</p>
      </div>

      <div class="screenshots-carousel">
        <div class="screen-card">
          <div class="mockup-header">✨ Teencode Styler</div>
          <div class="mockup-img" style="background: linear-gradient(135deg, #4f46e5, #7c3aed);">
            <div class="mockup-pill">TeenCode 2004</div>
            <p>Rewrites any sentence into sweet nostalgic or trendy cipher text with 1-tap copy.</p>
          </div>
        </div>

        <div class="screen-card featured">
          <div class="mockup-header">🔒 Lock a Secret</div>
          <div class="mockup-img" style="background: linear-gradient(135deg, #9333ea, #c026d3);">
            <div class="mockup-pill">Phrase Locked</div>
            <p>Camouflages your message as ordinary chat. Only decrypted with your shared secret phrase.</p>
          </div>
        </div>

        <div class="screen-card">
          <div class="mockup-header">📷 Secret QR Cards</div>
          <div class="mockup-img" style="background: linear-gradient(135deg, #0284c7, #2563eb);">
            <div class="mockup-pill">Scan & Decode</div>
            <p>Generate aesthetic scannable QR cards to send via Instagram, Zalo, or Messenger.</p>
          </div>
        </div>

        <div class="screen-card">
          <div class="mockup-header">🧩 Daily Cipher</div>
          <div class="mockup-img" style="background: linear-gradient(135deg, #d97706, #ea580c);">
            <div class="mockup-pill">Solve & Streak</div>
            <p>Daily brain-training cryptograms and interactive "Decode Me" games.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURE GRID -->
    <section id="features" class="features-section">
      <div class="section-header">
        <span class="section-tag">Capabilities</span>
        <h2>Everything You Need For Secret Chats</h2>
      </div>

      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">✨</div>
          <h3>Custom Slang Builder</h3>
          <p>Create your own secret dictionary. Replace words, letters, and phrases with your own rules.</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">🎭</div>
          <h3>Natural Chat Disguise</h3>
          <p>Lock secrets into innocent-looking sentences. Prying eyes will just see casual everyday conversations.</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">🛡️</div>
          <h3>Biometric Face ID Lock</h3>
          <p>Keep your saved secret history guarded behind Apple Face ID / Android Fingerprint.</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">⚡</div>
          <h3>100% Offline by Design</h3>
          <p>Zero data is uploaded to the cloud. Everything is encrypted and decrypted locally on your device.</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">⌨️</div>
          <h3>System Keyboard Integration</h3>
          <p>Type in your secret styles directly within WhatsApp, Messenger, Instagram DMs, and Discord.</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">🧩</div>
          <h3>Cryptographic Riddles</h3>
          <p>Sharpen your problem-solving skills with daily decoding challenges and shareable badges.</p>
        </div>
      </div>
    </section>

    <!-- FAQ SECTION -->
    <section id="faq" class="faq-section">
      <div class="section-header">
        <span class="section-tag">FAQ</span>
        <h2>Frequently Asked Questions</h2>
      </div>

      <div class="faq-accordion">
        <details class="faq-item">
          <summary>Does Morsey upload my messages to any server?</summary>
          <p>No! Morsey is 100% offline-first. All styling, phrase-locking, and encryption happen strictly on your device.</p>
        </details>
        <details class="faq-item">
          <summary>How does the Secret Phrase locking work?</summary>
          <p>When you lock a message, you set a passphrase (like "tra-sua-size-L"). The receiver pastes the locked code and enters the exact same phrase to unlock and read the original message.</p>
        </details>
        <details class="faq-item">
          <summary>Can I create my own slang and languages?</summary>
          <p>Yes! In the Styles tab, tap "+ Create style" to set your own character mappings and custom vocabulary replacements.</p>
        </details>
      </div>
    </section>

    <!-- CTA FOOTER SECTION -->
    <section id="download" class="cta-section">
      <div class="cta-container">
        <h2>Start Speaking Your Own Language Today</h2>
        <p>Download Morsey for free on iOS and Android.</p>
        <div class="hero-actions center">
          <a href="#" class="btn btn-primary">Download on App Store</a>
          <a href="#" class="btn btn-secondary">Get on Google Play</a>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="footer-container">
      <div class="footer-brand">
        <span>✨ Morsey</span>
        <p>Personal slang, secret languages & phrase-locked privacy.</p>
      </div>
      <div class="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="mailto:support@cdev.app">Contact Support</a>
      </div>
    </div>
    <div class="footer-bottom">
      &copy; 2026 Morsey by CDev. All rights reserved.
    </div>
  </footer>

  <script type="module" src="/src/main.js"></script>
</body>
</html>
```

---

### `src/style.css`
```css
:root {
  --bg-dark: #0B0D14;
  --bg-card: rgba(255, 255, 255, 0.04);
  --bg-card-hover: rgba(255, 255, 255, 0.08);
  --border-card: rgba(255, 255, 255, 0.1);
  --primary: #8B5CF6;
  --primary-glow: rgba(139, 92, 246, 0.35);
  --accent-pink: #EC4899;
  --accent-cyan: #06B6D4;
  --text-main: #F8FAFC;
  --text-muted: #94A3B8;
  --font-main: 'Outfit', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--bg-dark);
  color: var(--text-main);
  font-family: var(--font-main);
  line-height: 1.6;
  overflow-x: hidden;
}

/* Three.js Background */
#hero-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  pointer-events: none;
}

/* Navbar */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  backdrop-filter: blur(16px);
  background: rgba(11, 13, 20, 0.7);
  border-bottom: 1px solid var(--border-card);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 800;
  font-size: 1.3rem;
  color: var(--text-main);
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: var(--text-muted);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-links a:hover {
  color: var(--text-main);
}

/* Buttons */
.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
  border: none;
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary), var(--accent-pink));
  color: #fff;
  box-shadow: 0 4px 20px var(--primary-glow);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(236, 72, 153, 0.5);
}

.btn-secondary {
  background: var(--bg-card);
  color: var(--text-main);
  border: 1px solid var(--border-card);
}

/* Hero Section */
.hero-section {
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 8rem 1.5rem 4rem;
  max-width: 900px;
  margin: 0 auto;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 1rem;
  background: rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #C4B5FD;
  margin-bottom: 1.5rem;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background-color: #10B981;
  border-radius: 50%;
  box-shadow: 0 0 10px #10B981;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1.15;
  margin-bottom: 1.5rem;
}

.gradient-text {
  background: linear-gradient(135deg, #C4B5FD, var(--accent-pink), var(--accent-cyan));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: var(--text-muted);
  max-width: 650px;
  margin-bottom: 2.5rem;
}

.hero-actions {
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 3.5rem;
}

.store-badge {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  padding: 0.75rem 1.5rem;
  border-radius: 14px;
  color: #fff;
  text-decoration: none;
  backdrop-filter: blur(10px);
  transition: all 0.2s;
}

.store-badge:hover {
  background: var(--bg-card-hover);
  border-color: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
}

.store-badge .icon {
  width: 28px;
  height: 28px;
}

.store-badge .label {
  display: block;
  font-size: 0.65rem;
  text-transform: uppercase;
  color: var(--text-muted);
}

.store-badge .store-name {
  font-weight: 700;
  font-size: 1.1rem;
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1rem 2rem;
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  border-radius: 9999px;
  backdrop-filter: blur(10px);
}

.stat-num {
  display: block;
  font-weight: 800;
  font-size: 1.1rem;
  color: var(--text-main);
}

.stat-desc {
  font-size: 0.75rem;
  color: var(--text-muted);
}

.stat-divider {
  width: 1px;
  height: 24px;
  background: var(--border-card);
}

/* Sections Common */
section {
  padding: 6rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.section-tag {
  color: var(--primary);
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 0.1em;
}

.section-header h2 {
  font-size: 2.4rem;
  font-weight: 800;
  margin-top: 0.5rem;
}

.section-header p {
  color: var(--text-muted);
  max-width: 550px;
  margin: 0.5rem auto 0;
}

/* Live Demo Interactive Card */
.demo-card {
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  border-radius: 24px;
  padding: 2rem;
  backdrop-filter: blur(20px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.5);
}

.demo-controls {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.style-tab {
  background: rgba(255,255,255,0.05);
  border: 1px solid var(--border-card);
  color: var(--text-muted);
  padding: 0.5rem 1.2rem;
  border-radius: 9999px;
  font-family: inherit;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.style-tab.active {
  background: var(--primary);
  color: #fff;
  border-color: var(--primary);
}

.demo-grid {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 1.5rem;
  align-items: center;
}

.demo-box {
  background: rgba(0,0,0,0.4);
  border: 1px solid var(--border-card);
  border-radius: 16px;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  height: 180px;
}

.demo-box label {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.demo-box textarea {
  background: transparent;
  border: none;
  outline: none;
  color: var(--text-main);
  font-family: var(--font-main);
  font-size: 1.05rem;
  resize: none;
  height: 100%;
}

.output-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.copy-btn {
  background: rgba(255,255,255,0.1);
  border: none;
  color: #fff;
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.75rem;
}

.output-content {
  font-family: var(--font-mono);
  color: #A7F3D0;
  font-size: 1.05rem;
  word-break: break-word;
  overflow-y: auto;
  height: 100%;
}

.demo-arrow {
  font-size: 1.5rem;
  color: var(--primary);
}

/* Screenshots Carousel */
.screenshots-carousel {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}

.screen-card {
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  border-radius: 20px;
  padding: 1rem;
  backdrop-filter: blur(10px);
  transition: transform 0.3s;
}

.screen-card:hover {
  transform: translateY(-8px);
}

.mockup-header {
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 0.8rem;
}

.mockup-img {
  height: 320px;
  border-radius: 14px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: #fff;
}

.mockup-pill {
  display: inline-block;
  align-self: flex-start;
  background: rgba(0,0,0,0.4);
  padding: 0.3rem 0.7rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

/* Features Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
}

.feature-card {
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s;
}

.feature-card:hover {
  background: var(--bg-card-hover);
  border-color: rgba(139, 92, 246, 0.4);
  transform: translateY(-4px);
}

.feature-icon {
  font-size: 2.2rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.feature-card p {
  color: var(--text-muted);
}

/* FAQ */
.faq-accordion {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.faq-item {
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  border-radius: 14px;
  padding: 1.2rem;
  cursor: pointer;
}

.faq-item summary {
  font-weight: 700;
  font-size: 1.1rem;
}

.faq-item p {
  margin-top: 0.8rem;
  color: var(--text-muted);
}

/* CTA */
.cta-section {
  text-align: center;
}

.cta-container {
  background: linear-gradient(135deg, rgba(139,92,246,0.15), rgba(236,72,153,0.15));
  border: 1px solid rgba(139,92,246,0.3);
  border-radius: 30px;
  padding: 4rem 2rem;
}

/* Footer */
footer {
  border-top: 1px solid var(--border-card);
  padding: 3rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
}

.footer-links a {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.9rem;
}

.footer-bottom {
  text-align: center;
  margin-top: 2rem;
  color: var(--text-muted);
  font-size: 0.8rem;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title { font-size: 2.5rem; }
  .demo-grid { grid-template-columns: 1fr; }
  .demo-arrow { transform: rotate(90deg); text-align: center; }
  .nav-links { display: none; }
}
```

---

### `src/main.js`
```javascript
import * as THREE from 'three';

/* ==========================================================================
   1. THREE.JS 3D HERO ANIMATION (Floating Cipher Orb & Constellation)
   ========================================================================== */
function initThreeHero() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 8;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // 1. Central Holographic Cipher Polyhedron
  const geometry = new THREE.IcosahedronGeometry(2.2, 1);
  const wireMaterial = new THREE.MeshBasicMaterial({
    color: 0x8B5CF6,
    wireframe: true,
    transparent: true,
    opacity: 0.25,
  });
  const coreMaterial = new THREE.MeshBasicMaterial({
    color: 0xEC4899,
    wireframe: false,
    transparent: true,
    opacity: 0.08,
  });

  const cipherSphere = new THREE.Mesh(geometry, wireMaterial);
  const innerSphere = new THREE.Mesh(geometry, coreMaterial);
  innerSphere.scale.set(0.85, 0.85, 0.85);

  const orbGroup = new THREE.Group();
  orbGroup.add(cipherSphere);
  orbGroup.add(innerSphere);
  scene.add(orbGroup);

  // 2. Glowing Particle Constellation
  const particleCount = 1200;
  const particleGeometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  const colorViolet = new THREE.Color(0x8B5CF6);
  const colorCyan = new THREE.Color(0x06B6D4);
  const colorPink = new THREE.Color(0xEC4899);

  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 20;
    positions[i + 1] = (Math.random() - 0.5) * 20;
    positions[i + 2] = (Math.random() - 0.5) * 15;

    const chosenColor = Math.random() > 0.6 ? colorViolet : (Math.random() > 0.3 ? colorCyan : colorPink);
    colors[i] = chosenColor.r;
    colors[i + 1] = chosenColor.g;
    colors[i + 2] = chosenColor.b;
  }

  particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const particleMaterial = new THREE.PointsMaterial({
    size: 0.04,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
  });

  const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
  scene.add(particleSystem);

  // Mouse Parallax Effect
  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;

  window.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
  });

  // Animation Loop
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

    // Rotate Central Orb
    orbGroup.rotation.x = elapsedTime * 0.15;
    orbGroup.rotation.y = elapsedTime * 0.2;

    // Slowly Rotate Stars
    particleSystem.rotation.y = elapsedTime * 0.03;

    // Smooth Mouse Tracking
    targetX += (mouseX - targetX) * 0.05;
    targetY += (mouseY - targetY) * 0.05;

    orbGroup.position.x = targetX * 1.5;
    orbGroup.position.y = -targetY * 1.2;

    camera.position.x = targetX * 0.5;
    camera.position.y = -targetY * 0.5;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
  }

  animate();

  // Resize Handler
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

/* ==========================================================================
   2. INTERACTIVE TEENCODE PLAYGROUND CONVERTER
   ========================================================================== */
function initInteractiveDemo() {
  const input = document.getElementById('demo-input');
  const output = document.getElementById('demo-output');
  const styleTabs = document.querySelectorAll('.style-tab');
  const copyBtn = document.getElementById('copy-demo-btn');

  let currentStyle = 'teencode';

  function transformText(text, style) {
    if (!text.trim()) return 'Type a message to see the secret…';

    if (style === 'teencode') {
      return text
        .replace(/không/gi, 'khum')
        .replace(/khong/gi, 'khum')
        .replace(/bạn/gi, 'b4n')
        .replace(/ban/gi, 'b4n')
        .replace(/anh/gi, '4nh')
        .replace(/em/gi, '3m')
        .replace(/uống/gi, 'u0ng')
        .replace(/đi/gi, 'dj')
        .replace(/hôm/gi, 'h0m')
        + ' ✨';
    } else if (style === 'genz') {
      return text
        .replace(/thật/gi, 'real')
        .replace(/quá/gi, 'xỉu')
        .replace(/đi/gi, 'gét gô')
        .replace(/vui/gi, 'mlem')
        + ' 💅 [Vibe Check Pass]';
    } else if (style === 'disguised') {
      return `[Morsey-Lock: ${btoa(unescape(encodeURIComponent(text))).slice(0, 16)}...] 🔒`;
    }
    return text;
  }

  function update() {
    if (input && output) {
      output.innerText = transformText(input.value, currentStyle);
    }
  }

  if (input) {
    input.addEventListener('input', update);
  }

  styleTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      styleTabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      currentStyle = tab.getAttribute('data-style');
      update();
    });
  });

  if (copyBtn && output) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(output.innerText);
      copyBtn.innerText = 'Copied! ✓';
      setTimeout(() => {
        copyBtn.innerText = 'Copy';
      }, 2000);
    });
  }

  update();
}

document.addEventListener('DOMContentLoaded', () => {
  initThreeHero();
  initInteractiveDemo();
});
```

---

## 4. Sections & ASO Marketing Strategy

| Section | Strategic Objective & User Impact |
| :--- | :--- |
| **Hero + 3D Canvas** | Creates an instant high-tech, mysterious vibe. The 3D rotating polyhedron and star constellation retain user attention and reduce bounce rates. |
| **Interactive Live Demo** | Demonstrates the core value immediately without requiring app download first. Users experience the delight of typing and seeing teencode transformations live. |
| **App Store Badges** | Provides instant 1-tap download links with trust badges (100% Offline, Face ID protected, No Cloud). |
| **Screenshots Grid** | Displays the real UI/UX of Morsey (TeenCode Styler, Phrase Lock, Secret QR, Daily Ciphers) to build conversion confidence. |
| **Feature Cards** | Explains the practical benefits: custom dialect creation, disguised chat modes, and system-wide custom keyboard. |
| **FAQ Accordion** | Addresses critical security and privacy questions upfront to boost conversion trust. |

---

## 5. Screenshot Gallery Integration

To connect real screenshots generated from the Flutter app:
1. Copy the images from `docs/screenshot/feature_graphic.png` and `docs/screenshot/play_store/` to the web project's `public/` folder.
2. Update the `.screen-card` image tags with:
```html
<img src="/screenshots/screen_1.png" alt="Morsey Teencode Styler" class="device-screenshot" />
```

---

## 6. Deployment Guide

### Deploy to Vercel (Recommended)
```bash
npm run build
npx vercel deploy --prod
```

### Deploy to Firebase Hosting / Cloudflare Pages
```bash
npm run build
# Deploy the generated `dist/` directory
```
