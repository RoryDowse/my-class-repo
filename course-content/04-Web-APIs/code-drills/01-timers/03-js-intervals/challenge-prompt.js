// Set the interval

// ------------------------------------------------------------------
console.log("==================== Question 01 ====================");
// Create an interval that console logs "Question 01" every 5 seconds
let question01 = setInterval(() => {
  console.log("Question 01");
}, 5000);

setInterval(function () {
  console.log("Question 01");
}, 5000);

// ------------------------------------------------------------------
console.log("==================== Question 02 ====================");
// Create an interval that creates an alert that says "Question 02" every 10 seconds
setInterval(() => {
  console.log("Question 02");
}, 10000);
// Clear the interval you made in this question

// ------------------------------------------------------------------
console.log("==================== Question 03 ====================");
// Create an interval that appends "3" to the div with an id of "question-03"
// every 2 seconds
setInterval(() => {
  let append = document.getElementById("question-03");
  append.textContent += "3"; //assign and add 3 to the element
}, 2000);
// ------------------------------------------------------------------
console.log("==================== Question 04 ====================");
// Create an interval that empties the "#question-03" element every 6 seconds
setInterval(() => {
  //use setInverval rather than setTimeout to repeatedly clear text
  let clear = document.getElementById("question-03");
  clear.textContent = "";
}, 6000);
// ------------------------------------------------------------------
console.log("==================== Question 05 ====================");
// Create an interval that appends "5" to the div with an id of "question-05"
// every second and clear this interval after 5 seconds

// set interval
let intervalId = setInterval(() => {
  // get question
  let question = document.getElementById("question-05");
  // append number
  question.textContent += "5";
  // add timing
}, 1000);
// clear
setInterval(() => {
  //use setInverval rather than setTimeout to repeatedly clear text
  let clear = document.getElementById("question-05");
  clear.textContent = "";
}, 5000);
// adding timing

// ------------------------------------------------------------------
console.log("==================== Question 06 ====================");
// Create an interval that appends "6" to the div with an id of "question-06"
// every second
setInterval(() => {
  let append = document.getElementById("question-06");
  append.textContent += "6";
}, 1000);
// Create a timer to clear the interval after 6 seconds
setInterval(() => {
  let clear = document.getElementById("question-06");
  clear.textContent = "";
}, 6000);
// ------------------------------------------------------------------
console.log("==================== Question 07 ====================");
// create a timer to clear the interval from question 1 after 10 seconds
setTimeout(() => {
  clearInterval(question01);
}, 10000);
