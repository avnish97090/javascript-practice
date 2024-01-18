// the foreach() method calls a function once for each element in an array , in order .
// foreach takes two parameter one is callback function and other is this argument .
// humara callback function jo hai jo ki pahela paramter hai wo khud 3 arguments leta hai 
// syntax :  array.forEach(callback(currentValue , index , array) , thisArg) 

// forEach is very similar to map but has two key differences:

// First of all, map returns a new Array, but forEach doesn't.
// And second, you can do method chaining in map but not in forEach.
//   method chaining wo kartey the na . map phir usper .filter laga dete the ya phir se .map hi wahi 

// sabse main baat most imporatant 
// Note: map and forEach don't mutate (change) the original array.
// syntax :  array.forEach(callback(currentValue , index , array) , thisArg) 



const myFavProg = [ 'javascript' , 'C++' , 'Python ' , 'c'];

// console.log(myFavProg[0]);
// console.log(myFavProg[1]);
// console.log(myFavProg[2]);
// console.log(myFavProg[3]);

// for(let i = 0 ; i < myFavProg.length; i ++){
//     console.log(myFavProg[i]);
// }



// myFavProg.forEach(function(value){
//     console.log(value);
// })

 
// myFavProg.forEach(function(value , index ){
//     console.log(`at index ${index} value is ${value}`);
// });
// output :- 
// at index 0 value is javascript
// at index 1 value is C++
// at index 2 value is Python
// at index 3 value is c



// Q. create one array for each element in the array  add the value 100
// to each items ans update the element value .

const suno = [ 10 , 20 , 30 , 49 , 79 , 97];
suno.forEach(function(value , index , arr){
    // console.log(arr);
//     output :- 
//     [ 10, 20, 30, 49, 79, 97 ]
// [ 10, 20, 30, 49, 79, 97 ]
// [ 10, 20, 30, 49, 79, 97 ]
// [ 10, 20, 30, 49, 79, 97 ]
// [ 10, 20, 30, 49, 79, 97 ]
// [ 10, 20, 30, 49, 79, 97 ]
//     console.log(arr[0]);
//     output:- 
//     10
// 10
// 10
// 10
// 10
// 10
console.log(arr[index]+100);
// output:- 
// 110
// 120
// 130
// 149
// 179
// 197
});


// pura thapa sir se padhy hain best hai ;