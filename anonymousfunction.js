// In JavaScript, when you create two separate anonymous function expressions with the same content, they will be distinct function objects with different memory locations. Even if the content and behavior of the functions are the same, JavaScript treats them as separate objects.



// const function1 = function () { console.log("hello"); };
// const function2 = function () { console.log("hello"); };

// console.log(function1 === function2);  // This will output: false
// The === comparison will return false because function1 and function2 refer to different function objects, even though their contents are the same. This is because each function expression creates a new function object in memory.

// If you want two functions to share the same memory location (refer to the same function object), you would need to explicitly create the function once and assign it to multiple variables:



// const sharedFunction = function () { console.log("hello"); };
// const function1 = sharedFunction;
// const function2 = sharedFunction;

// console.log(function1 === function2);  // This will output: true
// In this case, function1 and function2 both reference the same sharedFunction object, so the comparison using === will return true.