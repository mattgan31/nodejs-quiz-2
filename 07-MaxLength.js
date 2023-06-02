function maxWordLength(params) {
    let words = params.split(' ');
    maxWord = '';
    maxLength = 0;
    for (let i = 0; i < words.length; i++){
        if (maxLength < words[i].length) {
            maxLength = words[i].length;
            maxWord = words[i];
        }
    }
    return maxWord;
}

console.log(maxWordLength("aku suka bootcamp sentul city"));//bootcamp
