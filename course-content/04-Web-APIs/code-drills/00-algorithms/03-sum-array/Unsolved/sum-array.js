// Write code to add all the numbers in `arr` and return the total
var arr = [3, 1, 5, 6];
// array declared

var sumArray = function (arr) {
  // function declared taking arr inpur
  let total = 0;
  // to find the total we must initialize first
  for (let i = 0; i < arr.length; i++) {
    // for loop for looping through array and attaching integers to i
    total += arr[i];
    // total is updated by adding values in arr
  }
  return total;
  // the total is returned
};
sumArray();
// function called providing updated values
