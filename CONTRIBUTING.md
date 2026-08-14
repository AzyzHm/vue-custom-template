# Contributing

Thanks for considering a contribution to this project! The following guidelines keep changes
consistent and easy to review.

## Getting set up

```bash
git clone https://github.com/AzyzHm/vue-custom-template.git
cd vue-custom-template
npm install
cp .env.example .env
npm run dev
```

## Workflow

1. Fork the repository and create a branch from `main`:
   `git checkout -b feat/short-description` or `fix/short-description`.
2. Make your changes, following the project structure and layering described in the
   [README](README.md#architecture).
3. Add or update tests for any behavior you change (unit, integration, and/or e2e as appropriate).
4. Run the full local check suite before opening a PR:
   ```bash
   npm run lint
   npm run type-check
   npm run test:unit
   npm run test:integration
   npm run test:e2e
   ```
5. Commit using [Conventional Commits](https://www.conventionalcommits.org/), e.g.
   `feat: add user detail view`, `fix: correct pagination offset`, `docs: update README`.
6. Open a pull request against `main` and fill out the PR template.

## Code style

- ESLint (flat config) and Prettier are enforced in CI and via a pre-commit hook, run
  `npm run lint:fix` and `npm run format` before committing if the hook doesn't catch everything.
- Prefer the Composition API with `<script setup lang="ts">` for components.
- Keep components small and push data-fetching logic into composables, not into components.
- Never call `api/` modules directly from a view or component, go through a composable.

## Testing expectations

- **Unit tests** (`tests/unit`) cover composables, stores, and utility functions in isolation,
  no DOM, no network.
- **Integration tests** (`tests/integration`) mount components with Vue Test Utils / Testing Library
  and exercise them against MSW-mocked API responses.
- **End-to-end tests** (`tests/e2e`) use Playwright against a real build and should cover critical
  user flows, not every edge case.

## Reporting bugs / requesting features

Please use the issue templates under **Issues → New Issue** rather than opening a blank issue.

## Code of Conduct

This project follows the [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you agree to
uphold it.
