// RecursiveRange
// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to
// the number passed to the function

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55
function recursiveRange(x) {
  if (x === 0) return 0;
  return x + recursiveRange(x - 1);
}

// function recursiveRange(range){
//     function getSum(r) {
//         if(r===1)  return 1;
//         return r + getSum(r-1);
//     }
//     return getSum(range);
// }

console.log(recursiveRange(5));
console.log(recursiveRange(6));
console.log(recursiveRange(10));
