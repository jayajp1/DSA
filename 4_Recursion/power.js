function power(base,exponent) {
    if (exponent===0) return 1;
    return base * power(base, exponent - 1);
}
console.log(power(2,0)); // 1
console.log(power(2,2)); // 4
console.log(power(2,4) );// 16
// console.log(power(3,3));
// 2 * power(2,2)
//     2 * power(2,1)
//     2 * 2;
// 2*2*2    

// Missing Odd Number
//-----------------------------------------
// const arr = [5, 7, 9, 11, 15];
// let i = 0;
// let j = 1;
// while (j < arr.length) {
//   if (arr[i] + 2 !== arr[j]) {
//     return arr[i] + 2;
//   }
//   i++;
//   j++;
// }
