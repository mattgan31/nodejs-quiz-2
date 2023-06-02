function isCharsUnique(string) {
    const splitString = string.split('').sort()
    let isUnique = true;
    for (let i = 0; i < string.length; i++){
        if (splitString[i] == splitString[i + 1]) {
            isUnique = false;
        }
    }
    return isUnique;
}

console.log(isCharsUnique('abcdefg'));//true
console.log(isCharsUnique('abcdefga'));//false
