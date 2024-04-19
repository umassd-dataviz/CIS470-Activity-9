// Here your code for the get previous date function goes
// you can refer to the getNextDate function and make minor changes

const lastDayOfMonth = require('./lastDayOfMonth');

function getNextDate(month, day, year) {
    if (day == 1 && month == 1) { //first day of year - 1
        return { month: 12, day: 31, year: year - 1}
    }
    else {
        if (day == 1 && month > 1){ //first day of month except jan - 1
            const lastDay = lastDayOfMonth(month - 1, year);
            return { month: month - 1, day: lastDay, year: year}
        }
        else { //any other day of month
            return { month: month, day: day - 1, year: year}
        }
    }
}

module.exports = getNextDate;
