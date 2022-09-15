# Typesript npm workspace example 

Directores
```
    app-2   executable application using the shared library
    lib     shared library
    app-test test suite for it
```

## Requirements
-   node version `^16.17.0`
-   npm version `^8.15.0`

## Installation
-   Download and install nvm onto your system
-   Run `nvm install 16.17.0`
-   `nvm use v16.17.0`

## To use
Change into project directory `cd project/`
Start with a single `npm install` at the top level

To run the tests (from the `app-test/` directory):

-   `npm run build:all`
-   `npm run test`
-   `npm run test --workspaces`


To run the app tool (from the `app-2/` directory):

-   `npm run build`
-   `npm run go`