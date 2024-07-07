# js-esm

A Yarn workspace mono repo using plain JS and ES modules.

Package `main` depends on `foo`, and `bar`.

Install via `yarn`.

Run via `node main/index.js`.

Output should be:

```
main()
foo()
bar()
```

## How the mono repo was created

1. Set up a root `package.json` with `"private": true` set and a `workspaces` that points to the directory of each workspace.
2. Within the `main` workspace `foo` and `bar` were added as dependencies with: `yarn add yarn add @js-commonjs/bar@1.0.0 @js-commonjs/bar@1.0.0`. (Dependencies are installed via their name from `package.json`, not their path.)

After performing the above steps, `foo` and `bar` can be imported from `main`.

## Differences from CommonJS

The main differences in this example compared to the js-commonjs example is the use of import / export in the code, and specifying `"type": "module"` in the `package.json` of each workspace, along with specifying an `exports` for each workspace instead of `main`.
