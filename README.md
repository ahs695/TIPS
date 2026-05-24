# The Indian Public Secondary School (TIPS) - Frontend Website

This project contains the frontend website for **TIPS - The Indian Public Secondary School, Jaipur**. It has been refactored into **production/deployment-grade directory structure** for optimal loading performance, maintainability, and clean code.

## 📂 Project Structure

The project has been organized into a modular structure following standard industry best practices:

```text
TIPS/
├── assets/                  # Assets directory (styles, scripts, images)
│   ├── css/                 # Stylesheets directory
│   │   └── style.css        # Extracted site styles (~34KB)
│   ├── images/              # Images and graphics
│   │   └── logo.jpg         # Decoded & optimized school logo (~48KB)
│   └── js/                  # JavaScript files
│       └── main.js          # Client-side scripts (~2.2KB)
├── index.html               # Main entry point (highly optimized, ~22KB)
└── README.md                # Project documentation (this file)
```

## 🚀 Key Improvements & Performance Benefits

1. **Dramatic Code Size Reduction**:
   - The initial `index.html` file was over **250KB** due to bloated inline styles and triple-duplicated base64-encoded image data.
   - The refactored `index.html` is now just **22KB** (a **91% reduction in file size**!), allowing it to download, parse, and render almost instantaneously.

2. **Asset Separation & Caching**:
   - **CSS (`assets/css/style.css`)**: Over 1,300 lines of CSS have been extracted. This separation allows the browser to cache the stylesheet independently, meaning repeat visitors won't have to download the style sheet again.
   - **JavaScript (`assets/js/main.js`)**: All interactive scripts are now decoupled. They are loaded asynchronously with the `defer` attribute, meaning they won't block the initial HTML page rendering.
   - **Logo Image (`assets/images/logo.jpg`)**: The heavy, repeating base64 inline image (which was duplicated three times!) has been extracted, decoded to a standard `.jpg` file, and stored in `assets/images/`. The HTML now simply links to it, reducing DOM size, enabling image-specific browser caching, and improving page-load speed.

3. **Production Readiness**:
   - Cleaner and more readable markup.
   - Fully optimized for CDNs and fast delivery.
   - Built to run seamlessly on a local dev server or static hosting provider (Vercel, Netlify, GitHub Pages, etc.).

## 🛠️ How to Run Locally

You can open `index.html` directly in any modern browser, or run a simple local server in this directory:

### Using Python:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000` in your web browser.

### Using Node.js (via `http-server` or `serve`):

```bash
npx http-server
```
