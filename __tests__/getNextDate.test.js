
const getNextDate = require('../modules/getNextDate');

test('Next date test', () => {
    expect(getNextDate(4, 15, 2024)).toEqual({ month: 4, day: 16, year: 2024 });
    expect(getNextDate(2, 28, 2023)).toEqual({ month: 3, day: 1, year: 2023 });
    expect(getNextDate(12, 31, 2021)).toEqual({ month: 1, day: 1, year: 2022 });
});
