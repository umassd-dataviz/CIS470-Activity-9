const getZodiacSign = require('../modules/getZodiacSign');

test('Zodiac sign test', () => {
    expect(getZodiacSign(3, 21)).toBe('Aries');
    expect(getZodiacSign(5, 4)).toBe('Taurus');
    expect(getZodiacSign(12, 22)).toBe('Capricorn');
});
