// WRITE YOUR CODE HERE
let studentNames = ["Joshua", "Rory", "John"];

console.log(studentNames.length);

console.log("Welcome to the class, " + studentNames[0]);
console.log("Welcome to the class, " + studentNames[1]);
console.log("Welcome to the class, " + studentNames[2]);

studentNames[0] = "Mary";

if ((studentNames[0] = "Mary")) {
  console.log(studentNames[0] + " is in class");
}
