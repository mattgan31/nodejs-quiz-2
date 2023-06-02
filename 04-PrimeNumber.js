
function showPrimeNumber(n) {
    const primes = isPrime(n);
    let counter = 0;
    let matrix = '';

    for (let i = 0; i < 5; i++) {
        let row = "";
        for (let j = 0; j < 5; j++) {
        row += primes[counter++] + "\t";
        }
        matrix += row +'\n';
    }
    return matrix;
}

function isPrime(n) {
    let prime = [2, 3, 5, 7];
    for (let i = 2; i <= n; i++){
        if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0) {
            prime.push(i);
        }
    }
    return prime;
}

console.log(showPrimeNumber(100));
/**

2	3	5	7	11
13	17	19	23	29
31	37	41	43	47
53	59	61	67	71
73	79	83	89	97

 */


