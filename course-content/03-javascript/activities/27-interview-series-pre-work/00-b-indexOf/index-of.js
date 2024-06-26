function indexof(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        // Step One:
        // Q: What are you going to do? 
        // A: I want to iterate through the array.

        // Q: How are you going to do it? 
        // A: With a for loop

        // Q: Why are you going to do it? 
        // A: To examine each element of the array. 
        if (arr[i] === element)
            return i;
        // Step Two:
        // Q: What are you going to do? 
        // A: Return the index *if* the value at that index is the same as the input target

        // Q: How are you going to do it? 
        // A: With a conditional statement and comparison operators, by comparing to see whether they are equal values. 

        // Q: Why are you going to do it? 
        // A: To check for matching values. 
    }
    return -1;
    // Step Three:
    // Q: What are you going to do? 
    // A: Once we compare all elements to the target, return -1 if no matches are found

    // Q: How are you going to do it? 
    // A: With a return statement

    // Q: Why are you going to do it? 
    // A: To return -1 if we have determined that the element does not exist in the array. 
}

console.log(indexof([1, 2, 3, 4], 3))