function factorial(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}
console.log(factorial(5));
// factorial(3)
//         3 * factorial(2)
//             2 *  factorial(1) -> If num =1 then it will return 1.
//             2 * 1
//         3 * 2
// return 6;

[1, 2, 3].slice();
