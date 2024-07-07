# js-commonjs

A Yarn workspace mono repo using plain JS and CommonJS modules.

Package main depends on foo, and bar.

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
2. Within the `main` workspace `foo` and `bar` were added as dependencies with: `yarn add yarn add @js-commonjs/bar@1.0.0 yarn add @js-commonjs/bar@1.0.0`.

After performing the above steps, `foo` and `bar` can be required from `main`.
