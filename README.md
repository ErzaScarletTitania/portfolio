# Liliet Gonzalez Polanco — Portfolio Site

Single-page personal portfolio for **Liliet Gonzalez Polanco** — Senior QA Manager, Test Automation Lead, AI-Enabled Quality Engineering.

🌎 **Live:** <https://erzascarlettitania.github.io/portfolio/>
🔗 LinkedIn: [lilypolanco](https://www.linkedin.com/in/lilypolanco/)
💻 GitHub: [ErzaScarletTitania](https://github.com/ErzaScarletTitania)
📩 [liliet.polanco.peru@gmail.com](mailto:liliet.polanco.peru@gmail.com)

---

## What this is

A fast, static, single-page portfolio that mirrors the same story told on the CV, LinkedIn, and GitHub profile. Zero build step, zero dependencies (only Google Fonts), and no tracking.

**Features**
- 🌐 **EN / ES language toggle** — fully bilingual content, persisted in `localStorage`
- 🌙 **Light / dark theme** — auto-detects system preference, persisted in `localStorage`
- 📱 **Responsive** — mobile-first, works on every screen size
- ⚡ **Static** — pure HTML / CSS / vanilla JS, instant load
- ♿ **Accessible** — semantic HTML, ARIA labels, sufficient color contrast
- 📄 **CV downloads** — EN and ES PDFs bundled under `/assets`
- 🔍 **SEO-ready** — Open Graph metadata, meta description, semantic structure

---

## Local preview

The site is static. You can open `index.html` directly in a browser, **but** for the language/theme toggles and CV downloads to work reliably (and to avoid `file://` quirks), serve it with a tiny local server.

### Option 1 — Python (already installed on most systems)
```powershell
cd "D:\1. Escritorio\CV\2026\May. 2026\from claude\portfolio-site"
python -m http.server 8080
```
Then open <http://localhost:8080>.

### Option 2 — Node.js
```powershell
npx serve .
```

### Option 3 — VS Code "Live Server" extension
Right-click `index.html` → **Open with Live Server**.

---

## Project structure

```
portfolio-site/
├── index.html                  # single-page entry
├── assets/
│   ├── styles.css              # all styles (light + dark)
│   ├── script.js               # i18n + theme + year
│   ├── cv-en.pdf               # English CV (downloadable)
│   └── cv-es.pdf               # Spanish CV (downloadable)
├── .github/workflows/
│   └── pages.yml               # GitHub Pages deploy workflow
├── .gitignore
├── LICENSE                     # MIT
└── README.md
```

---

## Editing content

- **Text** lives in two places:
  1. `index.html` — the initial English copy (also acts as fallback if JS is disabled).
  2. `assets/script.js` — the `I18N` object holds both EN and ES translations keyed by `data-i18n` attributes.
- To change a sentence, update **both** the HTML and the matching key in `I18N.en` / `I18N.es`.
- **Colors / fonts:** tweak CSS variables at the top of `assets/styles.css` (`:root { --navy: ...; }` and `[data-theme="dark"] { ... }`).
- **Projects:** edit the `<article class="project">` blocks in `index.html` and the `projects.*` keys in `script.js`.

---

## Deploying (when you have a domain)

This site is ready to deploy to any static host. Pick one:

### A. GitHub Pages (free, easiest)
1. Create a public repo, e.g. `lilypolanco.github.io` or `portfolio`.
2. Push this folder to it.
3. In repo **Settings → Pages**, set source to **GitHub Actions** — the included `.github/workflows/pages.yml` will deploy automatically on push to `main`.
4. (Optional, when domain is bought) Add a `CNAME` file at the repo root containing your domain (e.g. `lilypolanco.com`), and configure DNS:
   - `CNAME` record `www` → `<github-username>.github.io`
   - `A` records for the apex pointing to GitHub Pages IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.

### B. Cloudflare Pages (recommended for speed + analytics)
1. Push to GitHub.
2. Go to <https://dash.cloudflare.com/> → **Pages** → **Connect to Git** → pick the repo.
3. Build command: _(leave empty)_  ·  Output directory: `/` (root).
4. After deploy, **Custom domains** → add your domain. Cloudflare handles DNS + SSL automatically.

### C. Netlify
1. Push to GitHub.
2. <https://app.netlify.com/> → **Add new site → Import from Git** → pick the repo.
3. Build command: _(leave empty)_  ·  Publish directory: `/`.
4. **Domain settings** → add custom domain after purchase.

---

## After buying your domain

1. Decide a name. Suggestions (in order):
   - `lilypolanco.com` — short, brand-matching the LinkedIn handle
   - `liliet.dev` — modern, dev-focused
   - `polanco.qa` — niche, memorable
2. Buy from Namecheap, Cloudflare Registrar (cheapest renewals), Porkbun, or Google Domains successor (Squarespace).
3. Point DNS to your chosen host (instructions above).
4. Update the following files with the final URL:
   - `index.html` → `og:url` meta (add one), `og:image` (add a banner image)
   - LinkedIn "Websites" field
   - GitHub profile README → "Website" link
   - CVs → add domain to header (regenerate via `build_cv.py` if needed)

---

## License

MIT — see [LICENSE](LICENSE). Copy is © Liliet Gonzalez Polanco; reuse the code freely, but don't pass her bio off as your own.
