// Importing the main function
const main = require('../main');


// Step 1: Making Stub Functions for all modules used by the main function

// Stub function for isValidDate

jest.mock('../modules/isValidDate'.isValidDate, () => ({
  isValidDate: jest.fn().mockReturnValue(true)
}))


// Stub function for getNextDate
jest.mock('../modules/getNextDate'.getNextDate, () => ({
  getNextDate: jest.fn().mockImplementation((month, day, year) => {
    return { month: 4, day: 18, year: 2024 }; // Mocked output for 4/18/2024
  })
}));


// Stub function for getPreviousDate
jest.mock('../modules/getPreviousDate'.getPreviousDate, () => ({
  getPreviousDate: jest.fn().mockImplementation((month, day, year) => {
    return { month: 4, day: 16, year: 2024 }; // Mocked output for 4/16/2024
  })
}));




// Stub function for getDayOfWeek
jest.mock('../modules/getDayOfWeek'.getDayOfWeek, () => ({
  getDayOfWeek: jest.fn().mockReturnValue('Wednesday') // Mocked output for Wednesday (4/17/2024)
}));

// Stub function for getZodiacSign
jest.mock('../modules/getZodiacSign'.getZodiacSign, () => ({
  getZodiacSign: jest.fn().mockReturnValue('Aries') // Mocked output for Aries (4/16/2024)
}));

// Stub function for friday13th
jest.mock('../modules/friday13th'.friday13th, () => ({
  friday13th: jest.fn().mockReturnValue('9/13/2024') // Mocked output for the first Friday 13th (9/13/2024)
}));


// Stub function for lastDayOfMonth
jest.mock('../modules/lastDayOfMonth'.lastDayOfMonth, () => ({
  lastDayOfMonth: jest.fn().mockReturnValue(30) // Mocked output for the first Friday 13th (9/13/2024)
}));


// Step 2: Test the main function
  
describe('Top-Down Integration Test for the Main Function', () => {
  test('Main function should correctly integrate all stubbed functions', () => {
    const expectedOutput = {
      'Test Date': { month: 4, day: 17, year: 2024 },
      'Next Day': { month: 4, day: 18, year: 2024 },
      'Previous Day': { month: 4, day: 16, year: 2024 },
      'Day of the Week': 'Wednesday',
      'Zodiac Sign': 'Aries',
      'Last Day of Month': 30,
      'Friday 13th': '9/13/2024'
    };

    // Call the main function
    // in this call, the main function will call all the stubbed functions
    // and return the expected output
    const result = main({ month: 4, day: 17, year: 2024 });

// Step 3: Verify that the result matches the expected output

    expect(result).toEqual(expectedOutput);
  });
});