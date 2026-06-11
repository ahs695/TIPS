# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static website for **The Indian Public Secondary School (TIPS), Jaipur**. Vanilla HTML/CSS/JS frontend with a Google Apps Script serverless backend for form submissions.

## Local Development

No build system or package.json. Serve the files directly:

```
npx http-server -p 5500 ./
```

Then open `http://localhost:5500` in a browser.

## Architecture

**Single-page static site** — everything lives in `index.html`. No routing, no bundler, no framework.

- `index.html` — full page with all sections (nav, hero, about, administration, features, admissions, fee structure, results, gallery, contact, footer)
- `assets/css/style.css` — all styles, "Crimson and Gold" design system (crimson `#8b0000`, gold `#c9972b`)
- `assets/js/main.js` — all interactivity: scroll animations (Intersection Observer), mobile hamburger menu, gallery tab switching, form validation and submission, toast notifications
- `GoogleAppsScript.js` — backend deployed to Google Apps Script; receives form POSTs and appends rows to a Google Sheet

## Key Implementation Details

**Form submission**: `assets/js/main.js` lines 2–3 contain the hardcoded Google Apps Script deployment URL. Form data (parent name, phone, child name, class, message) is POSTed as JSON; the script returns success/error and the JS shows a toast.

**Gallery tabs**: Four tabs (Educational Visits, Annual Functions, Prize Distribution, Fun Outings) controlled by buttons on desktop and a `<select>` dropdown on mobile. Both fire the same tab-switch logic in `main.js`.

**Scroll reveal**: A single `IntersectionObserver` watches elements with class `.reveal` and adds `.visible` when they enter the viewport.

**Responsive nav**: The hamburger menu toggles a `.nav-open` class on the `<nav>` element; the CSS handles the mobile drawer.

**Fee table**: Horizontal scroll container on mobile; desktop shows a full multi-column breakdown.

## Design System

- Fonts: Nunito (body), Fredoka One (headings), Playfair Display (display text) — loaded from Google Fonts
- Radius: 16px throughout
- Shadows: crimson-tinted (`rgba(139,0,0,0.x)`)
- All layout via CSS Grid and Flexbox; no utility-class framework
