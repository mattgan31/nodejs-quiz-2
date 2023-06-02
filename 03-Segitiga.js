/** buat segitiga  */
let triangle1 = '';
let r = 5;
for (let i = 0; i < 6; i++) {
    for (let j = 1; j < r; j++){
        triangle1 += j+' ';
    }
    triangle1 += '\n';
    r -= 1;
}
console.log(triangle1);
// output
// 1 2 3 4
// 1 2 3
// 1 2
// 1

let triangle2 = '';
for (let i = 5; i > 0; i--) {
    let row = '';
    for (let j = i; j > 0; j--){
        row += j+' ';
    }
    triangle2 += row + '\n';
}

console.log(triangle2);
// output
// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1

