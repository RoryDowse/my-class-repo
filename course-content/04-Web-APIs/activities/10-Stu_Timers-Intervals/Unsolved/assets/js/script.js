// get the elements that will display the countdown and main text
const timerEl = document.getElementById("countdown");
const mainEl = document.getElementById("main");

// store the message in a vairable
const message =
  "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
// use the split method to create an array for each word
const words = message.split(" ");
// create a function for the countdown
function countdown() {
  // initialize the countdown to start from 5
  let timeLeft = 5;

  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  // use the setInverval method
  const timeInterval = setInterval(function () {
    // display time left and update textConent of timerEl
    timerEl.textContent = `${timeLeft} seconds left`;
    // decrement the time left
    timeLeft--;
    // if time left is less than 0, stop counter and start displaying message
    if (timeLeft < 0) {
      clearInterval(timeInterval);
      displayMessage();
    }
    // declare second part of setInterval function by updating every 1 second
  }, 1000);
}

// Displays the message one word at a time
// declare the function to display the message
function displayMessage() {
  // initialize the word count at 0
  let wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  // use setInterval method
  const msgInterval = setInterval(function () {
    // If there are no more words left in the message
    if (words[wordCount] === undefined) {
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);
    } else {
      // Display one word of the message
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 1000);
}

countdown();
