const getDayOfWeek = require('./getDayOfWeek');

function isFriday(month, day, year) {
    const result = getDayOfWeek(month, day, year)
    if(result === 'Friday'){
        return true
    }
    else{
        return false
    }
}

module.exports = isFriday;