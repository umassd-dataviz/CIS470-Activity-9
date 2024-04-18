function getDayOfWeek(month, day, year) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const date = new Date(year, month - 1, day);
    return days[date.getDay()];
}

module.exports = getDayOfWeek;
