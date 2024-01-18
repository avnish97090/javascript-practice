// The find method returns the value of the first element in the provided array that satisfies the provided  condition
//  otherwise undefined is return ab aray m tum 100 doondh rahe wo ararray m hai hi nahi to undefined return hoga 
    
// find takes two parameter one is callback function and other is this argument .
// humara callback function jo hai jo ki pahela paramter hai wo khud 3 arguments leta hai 
// syntax: array1.find(callback(element , index , array), thisArg)
// const array1 = [5,15,29,79,97]; 
// const newarray = array1.find((value)=>value>79);
// console.log(newarray);
// output :- 97  


// const newarray = array1.find((value)=>value>100);
// console.log(newarray);

// output :- undefined 


// const newarray = array1.find((value , index )=>{
//     return value >79;
// });
// console.log(newarray);

// hum kis index per ye aayaa normail jaisey find  use kartey hain usse nahi nikal saktey uskey liye findindex use karna paareyga  . find se kaisey nikalengey nichey code hai 
// Q. find the value which is greater than 79 and also at which indexthat value is present .

// bhaiya se pucho kahan galti kiye hain ismey 
// const array = [5,15,29,79,97];
// let indexing = -1;
//  const arrfind = array.find(function(value, index){
//              if( value >79) {
//                 indexing = 1;
            
//              }
//              if(indexing ==1) {
//                 console.log(` value is at index ${index} and value is ${value}`);
//              }
//              return value ;
//  })
 
//     console.log(arrfind);
 





    
const array = [5,15,29,79,97];
let indexing = -1;
 const arrfind = array.find(function(value, index){
             if( value >79) {
                indexing = index;
            
             }
          
             return value ;
 })
 
    if(arrfind  !== undefined){
    console.log(`value is ${arrfind} and is at index ${index}`)
    }
    else {
        console.log( `undefined value`)
    };

