const lastDayOfMonth = require('./lastDayOfMonth');

function isValidDate(mm, dd, yyyy) {
    
    // Check if each parameter is a number
    if (isNaN(mm) || isNaN(dd) || isNaN(yyyy)) return false;
  
    // Check for valid month range (1-12)
    if (mm < 1 || mm > 12) return false;
  
    // Get the last day of the month, and if it's invalid, return false
  
    if(dd>lastDayOfMonth(mm, yyyy) || dd<1) return false;
  
    // If all checks pass, it's a valid date
    return true;
  }

module.exports = isValidDate;