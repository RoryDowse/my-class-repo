// TODO: What does 'this' refer to?
console.log(this); // global this refers to the object window

// TODO: What does 'this' refer to? // string literal, refering to the object window
function helloThis() {
  console.log(`Inside this function, this is ${this}`);
}

// TODO: What will this log? // 20
const child = {
  age: 10,
  ageTenYears: function () {
    console.log(this.age + 10);
  },
};

// TODO: What will this log? // 5750
const investor = {
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {
      console.log(this.initialInvestment * 1.15);
    },
  },
};

// TODO: After commenting, check your results!
helloThis();

// TODO: After commenting, check your results!
child.ageTenYears();
investor.investment.investmentGrowth();

// Example array
const myArray = ["apple", "banana", "cherry", "date", "elderberry"];

// Step 1: Generate a random index
const randomIndex = Math.floor(Math.random() * myArray.length);

// Step 2: Access the array element at the random index
const randomElement = myArray[randomIndex];

// Output the randomly selected element
console.log(randomElement);
