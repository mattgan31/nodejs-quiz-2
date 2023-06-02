/** ubah value string ke date
 *  gunakan split
 *  inputan s = bulan/hari/tahun
*/


function strToDate(s){
    sArray = s.split("/");
    if (isNaN(sArray[0]) || isNaN(sArray[1]) || isNaN(sArray[2])) {
        return `${s} bad format date`;
    }
    dates = new Date(s);
    return dates;
}

console.log(strToDate('12/30/2021'));//Thu Dec 30 2021 00:00:00 GMT+0700 (Western Indonesia Time)
console.log(strToDate('12/aa/bb')); //12/aa/bb bad format date
