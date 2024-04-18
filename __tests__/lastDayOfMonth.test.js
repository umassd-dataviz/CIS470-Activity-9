const lastDayOfMonth = require('../modules/lastDayOfMonth');

test('Last day of month test', () => {
    expect(lastDayOfMonth(2, 2020)).toBe(29);
    expect(lastDayOfMonth(2, 2021)).toBe(28);
    expect(lastDayOfMonth(4, 2021)).toBe(30);
    expect(lastDayOfMonth(12, 2021)).toBe(31);
});
