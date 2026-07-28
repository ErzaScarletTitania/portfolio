# Portfolio Site

Static bilingual portfolio site for Liliet de la Caridad Gonzalez Polanco.

## Positioning

The site positions Liliet as a **quality engineering and delivery leader** with strengths in:

- QA strategy
- release readiness
- stakeholder visibility
- evidence-based delivery
- AI-enabled workflow design

## Current messaging principles

- global remote collaboration, not US-only positioning
- leadership-first language
- outcome and scope proof
- reduced emphasis on broad automation or API-testing claims
- stronger alignment between GitHub, LinkedIn, CV, and website copy

## Main files

- `index.html` — site structure and metadata
- `assets/styles.css` — styles
- `assets/script.js` — bilingual copy and UI behavior
- `assets/cv-en.pdf` — English CV download
- `assets/cv-es.pdf` — Spanish CV download
- `scripts/Validate-Portfolio.ps1` — content and localization validation
- `tests/Invoke-RegressionSuite.ps1` — regression suite entrypoint
- `.githooks/pre-commit` — enforces the commit identity rule

## Contributing

Commits must be authored with the account's linked email address. Run this once
after cloning:

```powershell
git config user.email "101874050+ErzaScarletTitania@users.noreply.github.com"
git config core.hooksPath .githooks
```

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full rule and how it is enforced.

## Deployment

This site is static and can be deployed to:

- GitHub Pages
- Netlify
- Cloudflare Pages

## Validation and regression checks

Run the validation locally:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\Validate-Portfolio.ps1
```

Run the regression suite locally:

```powershell
powershell -ExecutionPolicy Bypass -File .\tests\Invoke-RegressionSuite.ps1
```

The GitHub Actions workflow under `.github/workflows/pages.yml` now runs the regression suite on pushes and pull requests. Deployments only proceed after validation passes.

## Notes

The live copy is intentionally aligned with the latest positioning strategy under:

`D:\1. Escritorio\CV\2026\Positioning Liliet as QA-AI enableled`
