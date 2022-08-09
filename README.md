## Getting Started

React + TypeScript login app using playground.tesonet API.

#### Testing user credentials

```
{"username": "tesonet", "password": "partyanimal"}
```

Run the development server:

```bash
npm i
 # then
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Tests

Used [Cypress](https://www.cypress.io/) for E2E testing

Github Actions are set to run them on each `push`

running E2E tests locally:

```bash
npm run cypress
```

App also has Jest with React-Testing-Library
running jest tests locally:

```bash
npm run jest
# or
npm run jest:watch # for --watch mode
```

### Pre-commit

Husky runs liters and tests

### Vercel - CI / CD

App is built on Next.js with Vercel deployment, live version can be found:
[login-app-servers.vercel.app](https://login-app-servers.vercel.app/login)

`master` branch is deployed automatically when merging feature branches, each `feature branch` can be tested separately thanks to Vercel atomic deployment

### Styles

App uses Tailwind.css
