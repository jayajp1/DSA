// Write a recursive function called fib which accepts a number and returns the 
// nth number in the Fibonacci sequence. 

// Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... 
// which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

// fib(4) //  3
// fib(10) // 55
//->1,1,2,3,5,8,13,21,34,55
// fib(28) // 317811
// fib(35) // 9227465
function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

// Print fibonacci 
function Fibonacci(num) {
  let arr = [0,1];
  console.log(arr);
  for (let index = 1; index < num; index++) {
    arr.push(arr[index] + arr[index - 1]);
  }
  return arr.join(',');
}
console.log(Fibonacci(5));
console.log(Fibonacci(10));

// n = 4
//     fib(4-1) + fib(4-2)
//     fib(3) + fib(2)
//     fib(3) + 1
//     fib(3-1) + fib(3-2) + 1
//     fib(2) +  fib(1) + 1
//      1  +  1 + 1 = 3