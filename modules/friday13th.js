const isFriday = require('./isFriday')
function friday13th(currentMonth, currentDay, currentYear) {

    let month = currentMonth;
    let day = currentDay;
    let year = currentYear;
    
    // update the initial day,month and year
    day = 13; // set to next 13th
    month++; // set to next month
    if(month>12){
        month=1; // if month greater than 12
        year++;
    }
    while(true)
    { // we are looking for the first upcoming Friday 13th
        if(isFriday(month,day,year)) return `${month}/${day}/${year}`
        else{
            month++; // set to next month
            if(month>12){
                month=1; // if month greater than 12
                year++;
            }
        }
    }
}

module.exports = friday13th;