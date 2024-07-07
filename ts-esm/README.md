# ts-esm

A Yarn workspace mono repo using TS that compiles to JS with ES modules.

Package `main` depends on `foo`, and `bar`.

Install via `yarn`.

Compile via:

```
yarn workspace @ts-esm/foo build
yarn workspace @ts-esm/bar build
yarn workspace @ts-esm/main build
```

Run via `yarn workspace @ts-esm/main start`.

Output should be:

```
main()
foo()
bar()
```

## How the mono repo was created

Steps for creating the TS projects foo and bar are skipped.

1. Set up a root `package.json` with `"private": true` set and a `workspaces` that points to the directory of each workspace.
2. Within the `main` workspace `foo` and `bar` were added as dependencies with: `yarn add yarn add @ts-esm/bar@1.0.0 @ts-esm/bar@1.0.0`. (Dependencies are installed via their name from `package.json`, not their path.)
3. For workspaces `foo` and `bar`, ensure `tsconfig.json` has `"declaration": true` set under compiler options. This will default to true, unless it's been explicitly set to false.
4. Add `foo` and `bar` as references in `main/tsconfig.json`, and ensure `foo` and `bar` have `"composite": true` set in their `tsconfig.json` files.
5. Ensure `"exports"` is set in the `package.json` of `foo` and `bar`. `exports.default`will be what `main` used to be, and `exports.types` will be what `types` used to be.
6. Build `foo` and `bar`.
7. Build `main`.

Main should be runnable now: `yarn workspace @ts-esm/main start`
