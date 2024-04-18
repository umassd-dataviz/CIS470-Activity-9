const getDayOfWeek = require('../modules/getDayOfWeek');

test('Day of week test', () => {
    expect(getDayOfWeek(4, 15, 2024)).toBe('Monday');
    expect(getDayOfWeek(9, 1, 2023)).toBe('Friday');
    expect(getDayOfWeek(2, 29, 2020)).toBe('Saturday');
});
