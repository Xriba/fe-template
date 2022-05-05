# FE Project Template

This template is already configured for:

**Libraries**<br>
&#x2705; **i18n** => `i18next`<br>
&#x2705; **Data fetching and caching** => `RTK Query`<br>
&#x2705; **API mocking** => `msw`<br>

**Static analysis**<br>
&#x2705; **code linting** => `ESLint`<br>
&#x2705; **style linting** => `Stylelint`<br>
&#x2705; **code and style formatting** => `Prettier`<br>

**Testing**<br>
&#x2705; **unit testing + code coverage** => `Vitest`<br>
&#x2705; **E2E testing + code coverage** => `Playwright`<br>

**Tooling**<br>
&#x2705; **package handling** => `pnpm`<br>
&#x2705; **project building** => `Vite`<br>
&#x2705; **Git hooks handling** => `Husky`<br>

## Requirements

```bash
# Installs the package manager
npm install -g pnpm
```

## Installation

```bash
# Clones the project
git clone git@github.com:Xriba/fe-template.git
pnpm i
```

## Configuration
In the root of the project, create a file named `.dev.env` with this content:


```dotenv
# URLS
APP_URL=http://localhost:3000
SERVER_URL=http://localhost:4000

# COVERAGE
SOURCE_ROOT="absolute path of the project root"
COVERAGE_FOLDER=./coverage
```

## Development

```bash
# Runs the app in development mode
pnpm run dev
```

## Testing
### Unit tests
Configuration settings are in the `vite.config.ts` and the
 `vitest.setup.ts` files.

```bash
# Runs unit tests
pnpm run test

# Runs unit tests with code coverage
pnpm run coverage
```

### E2E tests
Configuration settings are in the `playwright.config.ts` file.

```bash
# Runs E2E tests with code coverage
pnpm run e2e
```

## Building

```bash
# Builds the project
pnpm run build:ci
```


