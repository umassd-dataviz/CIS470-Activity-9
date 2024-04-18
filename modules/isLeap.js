function isLeap(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;  // It's a leap year
      } else {
        return false; // It's not a leap year
      }
}
module.exports = isLeap;
