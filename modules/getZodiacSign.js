/* Zodiac signs table - Wiki*/
/*
Month       | Cusp Date     | Sign
January     | 19            | Capricorn 
February    | 19            | Aquarius
March       | 21            | Pisces
April       | 20            | Aries
May         | 20            | Taurus
June        | 20            | Gemini
July        | 22            | Cancer
August      | 22            | Leo
September   | 22            | Virgo
October     | 22            | Libra
November    | 21            | Scorpio
December    | 21            | Sagittarius 
*/

function getZodiacSign(month, day) {
    const zodiacMap = {
        1: { sign: 'Capricorn', cuspDate: 19 },
        2: { sign: 'Aquarius', cuspDate: 19 },
        3: { sign: 'Pisces', cuspDate: 21 },
        4: { sign: 'Aries', cuspDate: 20 },
        5: { sign: 'Taurus', cuspDate: 20 },
        6: { sign: 'Gemini', cuspDate: 20 },
        7: { sign: 'Cancer', cuspDate: 22 },
        8: { sign: 'Leo', cuspDate: 22 },
        9: { sign: 'Virgo', cuspDate: 22 },
        10: { sign: 'Libra', cuspDate: 22 },
        11: { sign: 'Scorpio', cuspDate: 21 },
        12: { sign: 'Sagittarius', cuspDate: 21 }
    };
    const { sign, cuspDate } = zodiacMap[month];
    if (day < cuspDate) {
        // the same month's Zodiac sign
        return sign
    } else {
        if(month<12){
            return zodiacMap[month+1]["sign"]
        }
        else{
            return zodiacMap[1]["sign"]
        }
    }
}

module.exports = getZodiacSign;
