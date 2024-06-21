// User Input and Writing to DOM 1

// Declare a variable `userName`
let userName;

// Prompt the user for their name and store their response into `userName`
// hint: use javascript's built in `prompt` method
function setUsername() {
  userName = prompt(`Please enter your username`);
}
setUsername(); // function must be called immediately
console.log(userName);

// Create an alert welcoming the user to the "Sandwich Shop" using the name they just gave us
function welcomeUser() {
  alert(`Welcome to the Sandwich Shop, ${userName}!`);
}
welcomeUser();
console.log(welcomeUser);

// Using the `confirm` method, ask the user if they would like a sandwich
// Store their response into a new `wantsSandwich` variable
let sandwich;
function checkSandwich() {
  // Check if the user wanted a sandwich
  sandwich = confirm(`Would you like a sandwich?`);
  // If the user did want a sandwich, use the `document.write` method to write "Your sandwich will be ready soon!" to the DOM
  if (sandwich === true) {
    document.write(`Your sandwich will be ready soon!`);
  } else {
    document.write(`Goodbye, ${userName}!`);
  }
  // Else, say goodbye to the user using the name they gave us earlier
}
checkSandwich();
console.log(sandwich);
