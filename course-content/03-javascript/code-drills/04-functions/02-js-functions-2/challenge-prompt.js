// define a function "warble" that takes in a string as an argument,
// appends " arglebargle" to the end of it, and returns the result
function warble(str) {
  // argument defined as str
  let result = str + " arglebargle";
  // Append string to end of argument and assign it to result
  return result;
  // return resulting string
}
console.log(warble("hello"));
// call the function with the str argument as "hello" and log result

// define a function "wibble" that takes a string as an argument,
// console logs the argument, prepends "wibbly " to the argument, and returns the result
function wibble(str) {
  let result = "wibbly " + str;
  return result;
}

console.log(wibble("bibbly"));
// console log the result of calling your "wibble" function with the argument "bibbly"

// define a function "consoleSum" that takes in two numbers as arguments
// and console logs the sum of those two numbers
function consoleSum(x, y) {
  let result = x + y;
  console.log(result);
}

consoleSum(1, 2);
// testing your function - un-comment the following two lines when you have finished your function

console.log("The following should be 5");
consoleSum(2, 3);

// define a function "returnSum" that takes in two numbers as arguments
// and returns the sum of those two numbers
function returnSum(a, b) {
  let sum = a + b;
  console.log(sum);
}

returnSum(1, 2);
// testing your function - un-comment the following two lines when you have finished your function

console.log("The following should be 12");
console.log(returnSum(5, 7));

// using either "consoleSum" or "returnSum" and no mathematical operators,
// define a function that takes in 3 arguments and finds the sum of those 3 numbers
function consoleSum(arg1, arg2, arg3) {
  let sum = arg1 + arg2 + arg3;
  console.log(sum);
}
consoleSum(1, 2, 3);
// define a function "danceParty" that takes in a string as an argument,
// creates an alert that says "dance!",
// saves the result of calling your "wibbly" function with that argument,
// saves the result of calling your "warble" function with that argument,
// concatenates the two results together and returns that string
function danceParty(str) {
  alert("dance!");
  let result1 = wibble(str);
  let result2 = warble(str);
  let concat = `${result1}, 
  ${result2}`;
  return concat;
}
// console log the result of calling your "danceParty" function with your name as the argument
console.log(danceParty("Rory"));
