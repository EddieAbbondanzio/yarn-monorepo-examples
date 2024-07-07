const foo = require("@js-commonjs/foo");
const bar = require("@js-commonjs/bar");

function main() {
  console.log("main()");
  foo();
  bar();
}
main();
