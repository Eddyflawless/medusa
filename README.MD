# Typesript npm workspace example 

Directores
```
    app-2   executable application using the shared library
    lib     shared library
    app-test test suite for it
```

## To use

Start with a single `npm install` at the top level

To run the tests (from the `app-test/` directory):

-   `npm run build:all`
-   `npm run test`

To run the app tool (from the `app-2/` directory):

-   `npm run build`
-   `npm run go`