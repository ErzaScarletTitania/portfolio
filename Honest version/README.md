# Honest Version

This folder is a proposal that separates editable content from the stable website structure.

## Structure

```text
Honest version/
├── index.html
├── content/
│   └── site-content.json
└── assets/
    ├── styles.css
    ├── app.js
    ├── cv-en.pdf
    └── cv-es.pdf
```

## How it works

- `index.html` is the fixed shell for layout and sections.
- `assets/styles.css` controls presentation only.
- `content/site-content.json` holds all copy, labels, links, and repeated content.
- `assets/app.js` loads the JSON and renders the page.

## Editing workflow

Update `content/site-content.json` when you want to change text, links, or the order of items. Leave the HTML and CSS alone unless you want to change the site structure or visual system.

## Local preview

Serve this folder with a local static server so `fetch()` can load the JSON file:

```powershell
cd "D:\1. Escritorio\CV\2026\May. 2026\from claude\portfolio-site\Honest version"
python -m http.server 8080
```

Then open `http://localhost:8080`.
