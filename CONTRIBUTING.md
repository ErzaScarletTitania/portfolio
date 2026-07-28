# Contributing

## Commit identity rule

**All commits in this repository must be authored with:**

```
101874050+ErzaScarletTitania@users.noreply.github.com
```

GitHub links a commit to an account by its author email. Any other address —
including a personal Gmail address — produces a commit that shows a bare name
with no avatar, no link to the profile, and no contribution-graph credit.

### One-time setup after cloning

```powershell
git config user.email "101874050+ErzaScarletTitania@users.noreply.github.com"
git config core.hooksPath .githooks
```

The first command sets the identity. The second installs the repository's
`pre-commit` hook, which refuses any commit made with the wrong email before it
is created.

### How the rule is enforced

| Layer | Location | When it runs |
| --- | --- | --- |
| Local hook | `.githooks/pre-commit` | Before each commit is created |
| CI check | `commit-identity` job in `.github/workflows/pages.yml` | On every push and pull request |

The CI job inspects only the commits introduced by the push or pull request, so
pre-existing history is not re-validated. Deployment depends on this job, so a
commit with an unlinked identity will block the site from publishing.

### Verifying your setup

```powershell
git config user.email
git log -1 --pretty=format:"%an <%ae>"
```

### If a commit was already made with the wrong email

Amend the most recent commit, preserving its original author date:

```powershell
git config user.email "101874050+ErzaScarletTitania@users.noreply.github.com"
git commit --amend --no-edit --reset-author --date="$(git log -1 --format=%aD)"
```

Note that `main` is protected and rejects force pushes, so rewriting a commit
that has already been pushed requires temporarily relaxing that protection.
Prefer catching the problem locally via the hook.

## Validation

Run the regression suite before pushing:

```powershell
powershell -ExecutionPolicy Bypass -File .\tests\Invoke-RegressionSuite.ps1
```
