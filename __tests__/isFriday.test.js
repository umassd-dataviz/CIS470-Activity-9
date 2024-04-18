const isFriday = require('../modules/isFriday'); // Assuming this is the path to your function


describe('isFriday function', () => {
    test('returns true for Friday', () => {
        // Test cases for Friday (day = 5)
        expect(isFriday(4, 8, 2022)).toBe(true); // April 8, 2022 (Friday)  - Corrected date
        expect(isFriday(7, 13, 2023)).toBe(false); // July 13, 2023
        expect(isFriday(2, 23, 2024)).toBe(true); // February 23, 2024
    });

    test('returns false for other days of the week', () => {
        // Test cases for other days of the week (excluding Friday)
        expect(isFriday(1, 18, 2022)).toBe(false); // January 18, 2022 (Tuesday)
        expect(isFriday(10, 31, 2023)).toBe(false); // October 31, 2023 (Wednesday)
        expect(isFriday(8, 5, 2024)).toBe(false); // August 5, 2024 (Monday)
    });

    test('handles leap years correctly', () => {
        // Test cases for leap years (February 29)
        expect(isFriday(2, 29, 2019)).toBe(true); // February 29, 2019 (Leap year, Friday)
        expect(isFriday(2, 29, 2021)).toBe(false); // February 29, 2021 (Non-leap year, Monday)
    });
});
