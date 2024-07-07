# ts-commonjs

A Yarn workspace mono repo using TS that compiles to JS with CommonJS.

Package `main` depends on `foo`, and `bar`.

Install via `yarn`.

Compile via

Run via `node main/index.js`.

Output should be:

```
main()
foo()
bar()
```

## How the mono repo was created

Steps for creating the TS projects foo and bar are skipped.

1. Set up a root `package.json` with `"private": true` set and a `workspaces` that points to the directory of each workspace.
2. Within the `main` workspace `foo` and `bar` were added as dependencies with: `yarn add yarn add @ts-commonjs/bar@1.0.0 yarn add @ts-commonjs/bar@1.0.0`. (Dependencies are installed via their name from `package.json`, not their path.)
3. For workspaces `foo` and `bar`, ensure `tsconfig.json` has `"declaration": true` set under compiler options. This will default to true, unless it's been explicitly set to false.
4. Add `"types": "/dist/src/index.d.ts"` to the `package.json of foo and bar so TS can find their type declarations. **Ensure path matches `outDir`.
5. Build `foo` and `bar`.
6. Build `main`.
