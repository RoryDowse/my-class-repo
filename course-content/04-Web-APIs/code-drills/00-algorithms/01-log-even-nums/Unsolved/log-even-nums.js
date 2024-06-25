// Write code to print all even numbers from 0 to `num`
// Assume `num` will be a positive number

var logEvenNums = function (num) {
  // loop attaches num to i to increment numbers
  for (let i = 0; i <= num; i++) {
    // conditional checks if i has a remainer of 0 when divided by 2
    if (i % 2 === 0) {
      // the code block is executed and outputs even numbers
      console.log(i);
    }
  }
};
