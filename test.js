const assert = require('assert');
const { isDate } = require('./src/dates');

assert.strictEqual(isDate(new Date()), true);
assert.strictEqual(isDate('2026-01-01'), false);
console.log('ok');
