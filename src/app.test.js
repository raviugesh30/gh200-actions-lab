const test = require("node:test");
const assert = require("node:assert");

const { add } = require("./app");

test("adds two numbers correctly", () => {
  assert.strictEqual(add(2, 3), 5);
});

test("adds negative numbers correctly", () => {
  assert.strictEqual(add(-2, 3), 1);
});