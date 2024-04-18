const isLeap = require('./isLeap');

function lastDayOfMonth(month, year) {
    let FebDays =28
    if(isLeap(year)){
        FebDays = 29
    }
    const daysInMonth = [31, FebDays, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return daysInMonth[month - 1];
}

module.exports = lastDayOfMonth;
