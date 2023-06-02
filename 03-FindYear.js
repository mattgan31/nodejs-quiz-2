// Remember, the Date constructor takes a zero-based month number, so a
// month value of 10 corresponds to the eleventh month, November
const dates = [new Date(2021, 10, 20), new Date(2020, 3, 12),
new Date(2020, 5, 23), new Date(2022, 3, 18)];
// Find the first date in 2020
function matchingDate(dates, year) {
    let firstDateInYear;
    let minMonth = 99;
    let minDate = 99;

    for (let i = 0; i < dates.length; i++) {
      if (dates[i].getFullYear() == year) {
        if (dates[i].getMonth() < minMonth) {
          minMonth = dates[i].getMonth();
          minDate = dates[i].getDate();
          firstDateInYear = dates[i];
        } else if (
          dates[i].getMonth() == minMonth &&
          dates[i].getDate() < minDate
        ) {
          minDate = dates[i].getDate();
          firstDateInYear = dates[i];
        }
      }
    }

    return firstDateInYear;
  }


console.log(matchingDate(dates,2020));//Sun Apr 12 2020 00:00:00 GMT+0700 (Western Indonesia Time)
