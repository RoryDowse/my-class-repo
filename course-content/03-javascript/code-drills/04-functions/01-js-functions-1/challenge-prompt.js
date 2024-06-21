// define a function "fun" that console logs "Functions are FUN!"
function fun() {
  console.log(`functions are fun!`);
}
fun(); //remember to call function
// functions take input (template literal) and product output when function called

// before moving on, open index.html and see what console logs have been made.
// why doesn't "Functions are FUN! appear yet?"
/*

Your Answer here
// function fun() must be called
*/

// define a function "thirtySeven" that console logs the sum of 18 and 19
function thirtySeven() {
  let sum = 18 + 19;
  console.log(sum);
}
thirtySeven();
// call two functions you've defined so far
fun();
thirtySeven();
// define a function "log" that takes in an argument and console logs that argument
function log(arg) {
  console.log(arg);
}
log(1 + 1);
// define a function "hello" that calls on the "log" function to console log "Hello World"
function hello(log) {
  console.log(log);
}
hello(`Hello World`);
// call your "hello" function

// define a function "popUp" that creates an alert that says "This is an alert."
function popUp() {
  alert(`This is an alert.`);
}
popUp();
// define a function "noPopUp" that creates an alert that says "Okay, you won't get a pop up."
function noPopUp() {
  alert("Okay, you won't get a pop up.");
}
noPopUp();
// define a function "goodDay" that creates a confirm dialogue asking the user if they are having a nice day
// and uses your "log" function to display the response
function goodDay() {
  let response = prompt("Are you having a nice day?"); // Add variable to store prompt response
  log(response); // response text passed through to console using log function
}
goodDay();
// call your "goodDay" function

// define a function "userPopUp" that creates a confirm dialogue asking the user if they would like a popup
// if they answer yes, call upon your "popUp" function; otherwise, call upon your "noPopUp" function
function userPopUp() {
  if (confirm("Would you like a popup?")) {
    popUp();
  } else {
    noPopUp();
  }
}
userPopUp();
// call your "userPopUp" function

// define a function "userName" that prompts the user for their name and then
// uses your "log" function to display the response
function userName() {
  let name = prompt("What is your name");
  log(name);
}
userName();
// call your "userName" function

// define a function "favoriteFruit" that prompts the user for their favorite fruit
// and the creates an alert that displays the response
function favoriteFruit() {
  let fruit = prompt(`What is your favorite fruit?`);
  let display = alert(`Your favorite fruit is: "${fruit}"!`);
}
favoriteFruit();
// call your "favoriteFruit" function
