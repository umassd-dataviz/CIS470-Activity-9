const lastDayOfMonth = require('./lastDayOfMonth');

function getNextDate(month, day, year) {
    const lastDay = lastDayOfMonth(month, year);
    if (day < lastDay) {
        return { month, day: day + 1, year };
    } else {
        if (month < 12) {
            return { month: month + 1, day: 1, year };
        } else {
            return { month: 1, day: 1, year: year + 1 };
        }
    }
}

module.exports = getNextDate;
