function calculateSum(arr){
	// Step One:
		// Q: What are you going to do? 
		// A: Instantiate a variable `sum` with an initial value of zero (0)
		
		// Q: How are you going to do it? 
		// A: Keyword `var` and assignment operator

		// Q: Why are you going to do it? 
		// A: To track the cumulative sum.
	let sum = 0;
	// Step Two: 
		// Q: What are you going to do? 
		// A: Iterate over the array 

		// Q: How are you going to do it? 
		// A: with a for loop

		// Q: Why are you going to do it? 
		// A: to examine every element
	for (let i = 0; i < arr.length; i++) {
	// Step Three: 
		// Q: What are you going to do? 
		// A: While examining every element, we will add that value to the previous value of the variable `sum`

		// Q: How are you going to do it? 
		// A: with the += operator 

		// Q: Why are you going to do it? 
		// A: to begin to incrementally sum up all the numbers in the input array
		sum += arr[i];
	}
	// Step Four: 
		// Q: What are you going to do? 
		// A: After completely iterating over the entire input array (completing my initial for loop), we will return the value of `sum`

		// Q: How are you going to do it? 
		// A: With a return statement

		// Q: Why are you going to do it? 
		// A: To have the output / final return value of the function be the sum of all the integers in the input array

	return sum;
}


let nums = [1,3,5]; 
console.log(calculateSum(nums)) //returns 9

let otherNums = [0,13,100];
console.log(calculateSum(otherNums)) //returns 113

let testCase1 = [1,2,5];
console.log(calculateSum(testCase1))//returns 8

let testCase2 = [1,2,3,4];
console.log(calculateSum(testCase2))//returns 10

let testCase3 = [100,50,75,80]
console.log(calculateSum(testCase3))//returns 305



