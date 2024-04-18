const isValidDate = require('../modules/isValidDate'); // Assuming this is the path to your function

describe('isValidDate function', () => {
  // Test cases for invalid dates
  it('should return false for non-numeric month', () => {
    expect(isValidDate('January', 1, 2024)).toBeFalsy();
  });

  it('should return false for non-numeric day', () => {
    expect(isValidDate(1, 'first', 2024)).toBeFalsy();
  });

  it('should return false for non-numeric year', () => {
    expect(isValidDate(1, 1, 'two thousand twenty four')).toBeFalsy();
  });

  it('should return false for month out of range (less than 1)', () => {
    expect(isValidDate(0, 1, 2024)).toBeFalsy();
  });

  it('should return false for month out of range (greater than 12)', () => {
    expect(isValidDate(13, 1, 2024)).toBeFalsy();
  });

  it('should return false for day less than 1', () => {
    expect(isValidDate(1, 0, 2024)).toBeFalsy();
  });

  // Test cases for valid dates (considering mocked lastDayOfMonth)
  it('should return true for a valid date within range (Jan 1, 2024)', () => {
    jest.fn(isValidDate.lastDayOfMonth).mockReturnValue(31); // Mock last day of Jan 2024
    expect(isValidDate(1, 1, 2024)).toBeTruthy();
  });

  it('should return true for a valid date within range (Feb 29, 2024 in a leap year)', () => {
    jest.fn(isValidDate.lastDayOfMonth).mockReturnValue(29); // Mock last day of Feb 2024 (leap year)
    expect(isValidDate(2, 29, 2024)).toBeTruthy();
  });

  it('should return false for a date exceeding last day of month (Feb 30, 2024)', () => {
    jest.fn(isValidDate.lastDayOfMonth).mockReturnValue(29); // Mock last day of Feb 2024 (leap year)
    expect(isValidDate(2, 30, 2024)).toBeFalsy();
  });

});
