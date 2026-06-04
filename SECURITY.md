# Security

This repository is public by design for GitHub Pages hosting.

## What is protected

- GitHub secret scanning is enabled.
- Secret-scanning push protection is enabled.
- `main` requires pull requests, linear history, and resolved conversations.

## What to keep out of the repo

- API keys, tokens, passwords, private certificates, and `.env` files
- SMTP credentials, webhook secrets, and private service credentials
- Personal or business data that should not be public

## Safe workflow

- Use branches for changes and merge through pull requests when possible.
- Rotate any credential that is ever exposed in git history.
- Keep third-party keys restricted by origin/referrer where supported.

