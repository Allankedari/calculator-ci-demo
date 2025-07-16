// test.js
const assert = require('assert');
const { add, subtract, multiply } = require('./index');

assert.strictEqual(add(2, 3), 5);
assert.strictEqual(subtract(5, 2), 3);
assert.strictEqual(multiply(3, 4), 12);

console.log("All tests passed!");
