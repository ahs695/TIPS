# TIPS – The Indian Public Secondary School, Jaipur

[![Website Status](https://img.shields.io/website?url=http%3A%2F%2F127.0.0.1%3A5500&logo=googlechrome&logoColor=white)](http://127.0.0.1:5500)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A premium, fully responsive, and high-performance website for **The Indian Public Secondary School (TIPS)**, Jaipur. Built with a modern aesthetic that celebrates traditional Indian school values through a "Crimson and Gold" design language.

## ✨ Key Features

- **Premium Visual Design**: A "Royal Indian" aesthetic using sophisticated gradients, smooth micro-animations, and high-quality typography.
- **Dynamic Hero Section**: Features a cinematic horizontal panning background and elegant school typography.
- **Comprehensive Administration**: Dedicated sections for the school's legacy (Founder) and current leadership (Director & Principal).
- **Interactive Fee Structure**: A detailed, crystal-clear fee breakdown for the 2026-27 session, optimized with a horizontal "card-scroll" view for mobile users.
- **Performance Showcase**: Dedicated "Results" section highlighting top performers and subjects toppers from the 2025-26 academic year.
- **Tabbed Gallery**: Organized visual journeys through Educational Visits, Annual Functions, and Fun Outings.
- **Google Apps Script Backend**: A custom serverless backend to handle admission enquiries directly from the contact form to Google Sheets.

## 🚀 Tech Stack

- **Frontend**: HTML5, CSS3 (Vanilla), JavaScript (ES6+)
- **Backend**: Google Apps Script (Serverless Inquiry Handling)
- **Database**: Google Sheets (via Apps Script)
- **Deployment**: Optimized for static hosting environments

## 🛠️ Installation & Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/TIPS.git
   cd TIPS
   ```

2. **Run a local server**:
   You can use any local server. Using `http-server` (Node.js):
   ```bash
   npx http-server -p 5500 ./
   ```
   The site will be available at `http://127.0.0.1:5500`.

## ⚙️ Backend Configuration (Enquiry Form)

The enquiry form uses Google Apps Script to save data to a spreadsheet.

1. Create a new Google Sheet.
2. Go to **Extensions -> Apps Script** and paste the contents of `GoogleAppsScript.js`.
3. Deploy as a **Web App**:
   - Execute as: `Me`
   - Who has access: `Anyone`
4. Copy the Web App URL and paste it into the `SCRIPT_URL` constant in `assets/js/main.js`.

## 📂 Project Structure

```bash
├── assets/
│   ├── css/
│   │   └── style.css      # Custom premium animations & styles
│   ├── js/
│   │   └── main.js        # Form handling, navigation, and reveals
│   └── images/            # Optimized assets and photographs
├── index.html             # Main entry point with semantic HTML5
├── GoogleAppsScript.js    # Backend script for spreadsheet integration
└── README.md              # Project documentation
```

## 📜 Metadata & SEO

- **Title**: TIPS – The Indian Public Secondary School, Jaipur
- **Theme**: Academic Excellence & Indian Heritage
- **Target Session**: 2026–2027

---
*Created with ❤️ for The Indian Public Secondary School.*
