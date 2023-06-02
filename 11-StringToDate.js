/** ubah value string ke date
 *  gunakan split
 *  inputan s = bulan/hari/tahun
*/


function strToDate(s){
    splitS = s.split('/');
    if (isNaN(splitS[0]) || isNaN(splitS[1]) || isNaN(splitS[2])) {
        return `${s} bad format date`;
    }

    return new Date(s);
}

console.log(strToDate('12/30/2021'));//Thu Dec 30 2021 00:00:00 GMT+0700 (Western Indonesia Time)
console.log(strToDate('12/aa/bb')); //12/aa/bb bad format date
