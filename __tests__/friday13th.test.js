const friday13th = require('../modules/friday13th');

describe('friday13th function', () => {
    test('returns the first upcoming Friday the 13th', () => {
        const currentDate= {month:3, day:16, year:2024}
        const expectedDate = '9/13/2024'; 
        const result = friday13th(currentDate.month, currentDate.day, currentDate.year);
        expect(result).toBe(expectedDate);
    });
});
