// Write a function called same, which accepts two arrays.
// The function should return true if every value in the
// array has it's corresponding value squared in the second
// array. The frequency of values must be the same.

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  // [1,2,3,2,5], [9,1,4,4,11]
  console.log(frequencyCounter1);
  // {'1': 1,'2':2,'3':1,'5':1}
  console.log(frequencyCounter2);
  // {'9': 1,'1':1,'4':2,'11':1}
  for (let key in frequencyCounter1) {
    // key = 3;
    // '9' as key present in frequencyCounter2 object
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    // Compare value of frequencyCounter1[3**2] => 1 with  frequencyCounter2[3]
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]);
