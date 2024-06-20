// declare a variable named ourArray and assign an empty array to it
const ourArray = [];

// we can `push` values into an array with the push method. Documentation can be found here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

// Let's push the number 1 into ourArray
const pushOne = ourArray.push(1);

// push the string "hello" into ourArray
const pushTwo = ourArray.push("hello");
// push the boolean false into ourArray
const pushThree = ourArray.push(false);
// push the number 84 into ourArray
const pushFour = ourArray.push(84);
// push the string "world" into our Array
const pushFive = ourArray.push("world");
// console log ourArray
console.log(ourArray);
// This seperator is here to make your console logs a little easier to read
// by creating seperations between the different sections of the activity
console.log("--------------------------Seperator 1--------------------------");

// declare a variable named oneToTen and assign it an array containing the numbers from 1 to 10
const oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console log the element at index 4
console.log(oneToTen[4]);
// console log the element at index 7
console.log(oneToTen[7]);
// This seperator is here to make your console logs a little easier to read
// by creating seperations between the different sections of the activity
console.log("--------------------------Seperator 2--------------------------");

// We've declared this array for you
let numArray = [2, 65, 3, 7, 39, 22, 11, 94, 299, 9, 20, 21, 51, 37];
// iterate through numArray and create an individual console log for every number greater than 50
for (let i = 0; i < numArray.length; i++) {
  if (numArray[i] > 50) {
    // accesses the element at index i of numArray
    // checks if number is greater than 50
    console.log(numArray[i]);
  }
}
// iterate through numArray and create an alert that tells us
// the index of all the occurances of the number 11
for (let i = 0; i < numArray.length; i++) {
  if (numArray[i] === 11) {
    alert(`Index of 11: ${i}`); // i represents the index of the current element in 'numAray'
  }
}
// iterate through numArray and console log the sum of all the numbers
let sum = 0; // variable created and initialized to store value of sum
for (let i = 0; i < numArray.length; i++) {
  sum += numArray[i]; // += is an 'addition assignment' which assigns result to left operand
}
console.log(sum);
// iterate through numArray and console log the sum of all the numbers greater than 50
let sumGreaterThan50 = 0;
for (let i = 0; i < numArray.length; i++) {
  if (numArray[i] > 50) {
    sumGreaterThan50 += numArray[i];
  }
}
console.log(sumGreaterThan50);
// iterate through numArray and console log the sum of all the even numbers
let evenNumbers = 0;
for (let i = 0; i < numArray.length; i++) {
  if (numArray[i] % 2 === 0) {
    // checks if no remainer when divided by 2 - even numbers have a remainder of 0, while odd numbers have a remainer of 1
    evenNumbers += numArray[i];
  }
}
console.log(evenNumbers);
// This seperator is here to make your console logs a little easier to read
// by creating seperations between the different sections of the activity
console.log("--------------------------Seperator 3--------------------------");

// We've declared this array for you
let fruits = [
  "Apple",
  "Orange",
  "Banana",
  "Pomelo",
  "Apple",
  "Kiwi",
  "Peach",
  "Banana",
  "Grape",
  "Tomato",
  "Kiwi",
  "Apple",
  "Watermelon",
  "Lemon",
  "Pomelo",
  "Apple",
  "Banana",
  "Peach",
  "Apricot",
  "Grape",
];
// iterate through fruits and console log the number of times "Apple" appears in the array
let appleTotal = 0;
for (i = 0; i < fruits.length; i++) {
  if (fruits[i] === "Apple") {
    appleTotal += 1; // Increment the count by 1 each time "Apple" is found
  }
}
console.log(appleTotal);
// iterate through fruits and console log the number of times "Peach" appears in the array
let peachTotal = 0;
for (i = 0; i < fruits.length; i++) {
  if (fruits[i] === "Peach") {
    peachTotal += 1;
  }
}
console.log(peachTotal);
// iterate through fruits and console log the number of fruits that start with "P" in the array
let pStartTotal = 0;
for (i = 0; i < fruits.length; i++) {
  if (fruits[i].charAt(0) === "P") {
    // charAt() method returns character at a specified index
    pStartTotal += 1;
  }
}
console.log(pStartTotal);
// create a new empty array named uniqueFruits

// iterate through fruits and populate uniqueFruits with only unique values from fruits
// you should a shorter array without repeated values

// console log out your uniqueFruits array

// This seperator is here to make your console logs a little easier to read
// by creating seperations between the different sections of the activity
console.log("--------------------------Seperator 4--------------------------");

// CHALLENGE (Optional!)
// In this challenge we're going to be working with nested arrays.
// You can store any type of data within an array- even other arrays!
let twoDimArray = [
  [54, 6, 7, 46, 78],
  [43, 9, 6, 65, 65],
  [32, 1, 44, 1, 23],
  [55, 12, 2, 34, 2],
  [2, 12, 44, 2, 12],
];

// another seperator for your convenience
console.log("     first array      ");
// iterate through the first array inside twoDimArray and console log all the numbers less than 25

// another seperator for your convenience
console.log("     second array      ");
// iterate through the second array inside twoDimArray and console log all the numbers less than 25

// another seperator for your convenience
console.log("     third array      ");
// iterate through the third array inside twoDimArray and console log all the numbers less than 25

// another seperator for your convenience
console.log("     fourth array      ");
// iterate through the fourth array inside twoDimArray and console log all the numbers less than 25

// another seperator for your convenience
console.log("     fifth array      ");
// iterate through the fifth array inside twoDimArray and console log all the numbers less than 25

// another seperator for your convenience
console.log("     odd numbers      ");
// iterate through twoDimArray and the arrays inside of it and console log all the odd numbers

// another seperator for your convenience
console.log("     sum of multiples of 3      ");
// iterate through twoDimArray and the arrays inside of it and
// console log the sum of all the numbers that are a multiple of 3
