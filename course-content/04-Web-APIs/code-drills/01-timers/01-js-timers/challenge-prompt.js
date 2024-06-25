// Practice with timers

console.log("==================== Question 01 ====================");
// Create a timer that creates an alert that says "Question 1" after 5 seconds
// setInterval(function () {
//   // JS requires function as first argument, not direct function call (like alert) - put alert in function
//   alert("Question 1");
// }, 5000);

console.log("==================== Question 02 ====================");
// Create a timer that creates an alert that says "Question 2" after 15 seconds

// Remove the timer you just made for Question 2

console.log("==================== Question 03 ====================");
// Create a timer that creates an alert that says "Question 3 part 1" after 15 seconds
// setInterval(function () {
//   alert("Question 3 Part 1");
// }, 15000);
// Create a timer that creates an alert that says "Question 3 part 2" after 16 seconds
// setInterval(function () {
//   alert("Question 3 Part 2");
// }, 16000);
console.log("==================== Question 04 ====================");
// Remove the timer from Question 3 part 1
// setInterval(function () {
//   alert("Question 3 Part 1");
// });
console.log("==================== Question 05 ====================");
// Create a timer that plays a sound after 11 seconds and console logs "Question 5 Completed!"
const sound = new Audio("");
// insert file path

setInterval(function () {
  alert("Question 5 Completed!");
  sound.play();
}, 11000);
