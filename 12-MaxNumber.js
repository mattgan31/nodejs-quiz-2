const numbers = [44,131,335,223,21,66,87];
// This syntax is not allowed. The result is NaN.

function maxNumber(arrays) {
    let maxNum = 0;
    for (let i = 0; i < arrays.length; i++){
        if (maxNum < arrays[i]) {
            maxNum = arrays[i];
        }
    }
    return maxNum;
}

console.log(maxNumber(numbers));
