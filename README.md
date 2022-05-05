# FE Project Template

This template is already configured for:

CODING<br>
&#x2705; i18n =>  `i18next`<br>
&#x2705; Data fetching and caching =>  `RTK Query`<br>
&#x2705; API mocking =>  `msw`<br>

STATIC ANALYSIS<br>
&#x2705; code linting =>  `ESLint`<br>
&#x2705; style linting =>  `Stylelint`<br>
&#x2705; code and style formatting =>  `Prettier`<br>

**TESTING**<br>
&#x2705; unit testing + code coverage =>  `Vitest`<br>
&#x2705; E2E testing + code coverage =>  `Playwright`<br>

**TOOLING**<br>
&#x2705; package handling =>  `pnpm`<br>
&#x2705; project building =>  `Vite`<br>
&#x2705; Git hooks handling =>  `Husky`<br>

## Requirements

```bash
# Installs the package manager
npm install -g pnpm
```

## Installation
Before installing the dependencies, [authentication must be set up](https://docs.microsoft.com/en-us/azure/devops/artifacts/get-started-npm?view=azure-devops&tabs=Windows#set-up-authentication-on-your-development-machine) in order to install the UI Library.<br>
At the end of the process you will have a file similar to the following in your personal directory.

```config
; begin auth token
//pkgs.dev.azure.com/soluzionetasse/_packaging/xriba-clients/npm/registry/:username=[your-email]
//pkgs.dev.azure.com/soluzionetasse/_packaging/xriba-clients/npm/registry/:_password=[your-base64-password]
//pkgs.dev.azure.com/soluzionetasse/_packaging/xriba-clients/npm/registry/:email=[your-email]
//pkgs.dev.azure.com/soluzionetasse/_packaging/xriba-clients/npm/:username=[your-email]
//pkgs.dev.azure.com/soluzionetasse/_packaging/xriba-clients/npm/:_password=[your-base64-password]
//pkgs.dev.azure.com/soluzionetasse/_packaging/xriba-clients/npm/:email=[your-email]
; end auth token
```

After doing authentication you can clone the project and install the dependencies.

```bash
# Clones the project
git clone git@github.com:Xriba/fe-template.git

# Installs the dependencies, included the UI Library
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
## Project structure
In the `src` folder we can find the following sub-folders:
- `components`: components shared in different parts of the app
- `features`: the structure of the pages, it has three sub-folders:
  - `layout`: page template files
  - `pages`: page files and folders
  - `router`: routing files
- `mapping`: files for mapping API responses to internal objects
- `mocks`: API mocking files
- `services`:
  - `i18n` configuration files
  - `API client` configuration files
- `store`: redux store configuration file
- `types`: TypeScript type definitions file
