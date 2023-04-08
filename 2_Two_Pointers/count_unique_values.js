// countUniqueValues:
// Implement a function called countUniqueValues, which accepts a sorted array, and counts the 
// unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// Example:
// countUniqueValues ( [1,1,1,1,1,21]) // 2
// countUniqueValues ( [1,2,3,4,4,4,7,7,12,12,131])
// countUniqueValues ( [1]) //0
// countUniqueValues ( [-2 ,-1,-1,0,1]) // 4

//--------------------------------------------------------------
// Approach 1: Using Set
//--------------------------------------------------------------
// function countUniqueValues(arr) {
//     if (!arr || arr.length === 0) {
//         return "Invalid Data";
//     }
//     return [...new Set(arr)].length;
// }

//--------------------------------------------------------------
// Approach 2: Using 2 pointers
//--------------------------------------------------------------
// function countUniqueValues(arr) { 
//     if (!arr || arr.length) { return 0; }

//     let count = 1;
//     let pointer1 = 0;
//     let pointer2 = 1;
//     // [-2 ,-1,-1,0,1]
//     // pointer1: -2, pointer2: -1, If both are not same then increment counter and increase both the pointers.
//     while (pointer2 < arr.length) { 
//         if (arr[pointer1] !== arr[pointer2]) { 
//             count++;
//         } 
//         pointer2++;
//         pointer1++;
//     }
//     return count;
// }

//--------------------------------------------------------------
// Approach 3: Using 2 pointers
//--------------------------------------------------------------
// function countUniqueValues(arr) {
//   if (!arr.length) return 0;
//   // [1,1,1,1,2];
//   //  i = 1; j = 1;
//   let i = 0, j = 1;
//   while (j < arr.length) {
//     if (arr[i] !== arr[j]) {
//       arr[i + 1] = arr[j];
//       i++;
//     }
//     j++;
//   }
//   return i+1;
// }

//--------------------------------------------------------------
// Udemy approach:
//--------------------------------------------------------------
function countUniqueValues(arr){
    if(arr.length) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}

console.log(countUniqueValues([1,1,1,1,1,21])) // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,131])) // 7
console.log(countUniqueValues([])) //0
console.log(countUniqueValues([-2 ,-1,-1,0,1])) // 4
console.log(countUniqueValues([0,0,0])) // 1