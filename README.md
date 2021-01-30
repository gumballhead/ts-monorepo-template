ts-monorepo-template
--------------------

[![tests](https://github.com/gumballhead/ts-monorepo-template/workflows/tests/badge.svg)](https://github.com/gumballhead/ts-monorepo-template/actions?query=workflow%3Atests)

## Setup

You'll need [docker](https://www.docker.com/products/docker-desktop) and [docker-compose](https://docs.docker.com/compose/install/).
You'll also need [node](https://nodejs.org/en/download/) and [yarn](https://yarnpkg.com/getting-started/install).

To install the dependencies:
```bash
yarn install
```

To activate the git hooks:
```bash
git config core.hooksPath .githooks
```

## Commands
### start

Start the app in production mode

```bash
yarn start
```

By appending a service name to the dev and start commands, you can bring up part of the stack, eg:
`yarn start migrate` or `yarn dev api`

### dev
Start the app in dev mode. The api and app will restart on changes to source code.

```bash
yarn dev
```

Services will expose their ports for connections from the host:
* `app` [http://localhost:8080](http://localhost:8080)
* `api` [http://localhost:8080/api](http://localhost:8080/api), routed to [http://localhost:3000](http://localhost:3000)  
* `db` [postgres://postgres:postgres@localhost:5432](postgres://postgres:postgres@localhost:5432)

After starting the app in dev mode, you will probably also want to run the test suites in watch mode:
```bash
yarn workspace tests start
```

and the acceptance test runner in watch mode:
```bash
yarn workspace features start
```

### test
Run  headless acceptance tests, typically used in CI.

```bash
yarn test
```

### lint
Lint source code. Runs automatically before committing when githooks are activated.

```bash
yarn lint
```

Attempt to automatically fix lint issues.
```bash
yarn lint --fix
```
