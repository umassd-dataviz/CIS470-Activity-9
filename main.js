const lastDayOfMonth = require('./modules/lastDayOfMonth');
const isValidDate = require('./modules/isValidDate');
const getNextDate = require('./modules/getNextDate');
const getPreviousDate = require('./modules/getPreviousDate');
const getDayOfWeek = require('./modules/getDayOfWeek');
const getZodiacSign = require('./modules/getZodiacSign');
const friday13th = require('./modules/friday13th');

function main(dateUnderStudy) {

    if(!isValidDate(dateUnderStudy.month, dateUnderStudy.day, dateUnderStudy.year)){
        return 'Invalid Date'
    }
    else{

        console.log("getNextDate:",getNextDate)
        const result = {
            'Test Date': dateUnderStudy,
            'Next Day': getNextDate(dateUnderStudy.month, dateUnderStudy.day, dateUnderStudy.year),
            'Previous Day': getPreviousDate(dateUnderStudy.month, dateUnderStudy.day, dateUnderStudy.year),
            'Day of the Week': getDayOfWeek(dateUnderStudy.month, dateUnderStudy.day, dateUnderStudy.year),
            'Zodiac Sign': getZodiacSign(dateUnderStudy.month, dateUnderStudy.day),
            'Last Day of Month': lastDayOfMonth(dateUnderStudy.month, dateUnderStudy.year),
            'Friday 13th': friday13th(dateUnderStudy.month, dateUnderStudy.day, dateUnderStudy.year)
          
        };
    
        return result;
        }
    }

module.exports = main;
