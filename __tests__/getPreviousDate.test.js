
const getNextDate = require('../modules/getPreviousDate');

test('Previous date test', () => {
    expect(getNextDate(4, 15, 2024)).toEqual({ month: 4, day: 14, year: 2024 });
    expect(getNextDate(3, 1, 2023)).toEqual({ month: 2, day: 28, year: 2023 });
    expect(getNextDate(1, 1, 2021)).toEqual({ month: 12, day: 31, year: 2020 });
});
