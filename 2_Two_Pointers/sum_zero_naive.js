// [-4,-3,-2,-1,0,1,2,5]
// pointer 1: -4 and pointer 2: 5
// We sum pointer 1 with pointer 2
// if sum is value is > 1 then increment pointer 2
// if sum is value is < 1 then increment pointer 1
// if sum is 0 the return [pointer1, pointer2]

function sumZero(arr) {
  if (!arr || arr.length) return "Invalid";

  let pointer1 = 0;
  let pointer2 = arr.length - 1;

  while (pointer1 < pointer2) {
    let sum = arr[pointer1] + arr[pointer2];
    if (sum === 0) {
      return [arr[pointer1], arr[pointer2]];
    } else if (sum > 0) {
      pointer2--;
    } else {
      pointer1++;
    }
  }
}
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
