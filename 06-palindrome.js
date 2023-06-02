
function isPalindrome(word){
    newWord = word.toLowerCase().split('');
    if (word.toLowerCase() != newWord.reverse().join('')) {
        return false;
    }
    return true;
}

console.log(isPalindrome('kasur ini rUsak'));//true
