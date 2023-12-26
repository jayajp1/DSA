function countDown(num) {
  if (num <= 0) {
    console.log("Countdown Finish");
    return; // We MUST return other wise it will goto infinite loop.
  }
  console.log(num);
  num--;
  countDown(num);
}

countDown(5);

//Explanation:
// countDown(5)
  // 5<=0 false;
  // console.log(5);
  // countDown(4);
// Same until num is 0;
   // if number is 0 then we console.log(Countdown Finish)
   // We MUST return other wise it will goto infinite loop.