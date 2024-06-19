//Variables
//the nouns of programming

//this is a comment
//any code commented out is not run
//meaning that any code or text commented out is ignored.

/*
this is a multiline comment
You can comment out many lines at once.
For the most part you will see single line comments
but it is good to see this.
As in single line comments, any code contained within multi-line comments are not run -
meaning that any code commented out is ignored.
*/

//Topic: strings

// Create a variable named `subject` without giving it a value:
// example: let hobby;

let subject;

// Assign a value of "Programmers" to the variable `subject`
// example: hobby = "problem solving"

subject = "problem solving";

// Create a variable `firstName` and assign it a value of an empty string.
// example: let emptyString = "";

let firstName = "";

// Assign a value of "Ada" to the variable `firstName`

firstName = "Ada";

// Create a variable `lastName` and assign it a value of a string "Lovelace".

const lastName = "LoveLace";

// Create a variable `fullName` and assign it a value of `firstName` and `lastName` concatenated together with a space between them.

const fullName = `${firstName} ${lastName}`;

// Create a variable `profession` and assign it a value of a string, "Computer Programmer".

const profession = "Computer Programmer";

// Create a variable `knownFor` and assign it a value of a string, "first computer programmer".

const knownFor = "first computer programmer";

// Create a variable `firstAlgorithm` and assign it a value of a string, "Analytical Engine".

const firstAlgorithm = "Analytical Engine";

// Create a variable `cityLocation` and assign it a value of a string, "London";

const cityLocation = "London";

// Create a variable `countryLocation` and assign it a value of a string, "England";

const countryLocation = "England";

// Create a variable `nationality` and assign it a value of a string, "British";

const nationality = "British";

//Topic: integers

// Create a variable `birthYear` and assign it a value of the integer, 1815.

const birthYear = 1815;

// Create a variable `deathYear` and assign it a value of the integer, 1852.

const deathYear = 1852;

// Create a variable `ageAtPassing` and assign it to be the difference between `deathYear` and `birthYear`.

const ageAtPassing = deathYear - birthYear;

// Create a variable `yearOfPublish` and assign it a value of the integer, 1842.

const yearOfPublish = 1842;

// Create a variable `ageAtYearOfPublish` and assign it to be the difference between `yearOfPublish` and `birthYear`.

const ageAtYearOfPublish = yearOfPublish - birthYear;

//Topic: console log
//console log: "First Name: Ada" by concatenating the `firstName` variable to the back of a string of "First Name: "
console.log(`First Name: ${firstName}`);

//console log: "Last Name: Lovelace" by concatenating the `lastName` variable to the back of a string of "Last Name: "
console.log(`First Name: ${lastName}`);

//console log: "Profession: Computer Programmer" by concatenating the `profession` variable to the back of a string of "Profession: "
console.log(`Profession: ${profession}`);

//console log: "BirthYear: 1815" by concatenating the `birthYear` variable to the back of a string of "BirthYear: "
console.log(`BirthYear: ${birthYear}`);

//Topic: Concat Values

// Create a variable `statementOne` and assign it a value of a string:
// "Programmers: Ada Lovelace is a British Computer Programmer born in 1815."
const statementOne = `Programmers: ${firstName} ${lastName} is a ${nationality} ${profession} born in ${birthYear}`;
console.log(statementOne);
//
// Use the `subject`, `fullName`, `nationality`, `profession`, and `birthYear` variables instead of hard coding in the full string
// much like you did for the console logs and `fullName`

// Create a variable `statementTwo` and assign it a value of a string:
// "She is commonly referred to as the first computer programmer"
//
const statementTwo = `She is commonly referred to as the ${knownFor}`;
console.log(statementTwo);

// Use the `knownFor` variable instead of hard coding in the full string
// much like you did for the console logs and `fullName`

// Create a variable `statementThree` and assign it a value of a string:
// "In 1842 she published the first Algorithm, the Analytical Engine, at the age of 27."
//

const statementThree = `In ${yearOfPublish} she published the first algorithm, the ${firstAlgorithm}, at the age of ${ageAtYearOfPublish}.`;
console.log(statementThree);
// Use the `yearOfPublish`, `firstAlgorithm`, and `ageAtYearOfPublish` variables instead of hard coding in the full string
// much like you did for the console logs and `fullName`

// Create a variable `statementFour` and assign it a value of a string:
// "She was a British Citizen who lived in London, England until her passing in 1852 at the age of 37.
//

const statementFour = `She was a ${nationality} Citizen who lived in ${cityLocation}, England until her passing in 1852 at the age of ${ageAtPassing}.`;
console.log(statementFour);
// Use the `nationality`, `cityLocation`, `countryLocation`, and `ageAtPassing` variables instead of hard coding in the full string
// much like you did for the console logs and `fullName`

//Topic: console.log()

//console log statementOne

//console log statementTwo

//console log statementThree

//console log statementFour
