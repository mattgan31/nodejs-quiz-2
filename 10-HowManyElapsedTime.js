/** berapa banyak tahun kabisat antara tahun1 ke tahun2 */

function howManyKabisat(year1, year2) {
    totalKabisat = 0;
    for (year1; year1 <= year2; year1++){
        let kabisat = isKabisat(year1);
        if (kabisat == true) {
            totalKabisat += 1;
        }
    }
    return totalKabisat;
}

function isKabisat(year) {
    let kabisat = false;
    if (year % 400 != 0 && year % 100 != 0 && year % 4 == 0) {
        kabisat = true;
    } else if (year % 400 == 0) {
        kabisat = true;
    }
    return kabisat;
}

console.log(howManyKabisat(1997,2021));
