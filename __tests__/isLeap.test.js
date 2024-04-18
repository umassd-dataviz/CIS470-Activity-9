// isLeap.test.js
const isLeap = require('../modules/isLeap');

test('Leap year test', () => {
    expect(isLeap(2020)).toBe(true);
    expect(isLeap(2021)).toBe(false);
    expect(isLeap(2000)).toBe(true);
    expect(isLeap(1900)).toBe(false);
});
