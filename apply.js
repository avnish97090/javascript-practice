// The only difference between apply method and call method is the way we pass arguments 
// so , instead of passing the arguments  individually in the call method , in apply method we pass 
// these arguments in a array list 



// in call method we will pass the arguments  individually comma seperated ,
// and in the apply method we will pass it as a second argument  as a array list  
// let obj1 = {
//     name : " Abanish",
//     hobby : " movie ",

// }

// let suno  =  function(hometown, state){
//     console.log(`${this.name}  hobby is watching the  ${this.hobby} and hometown is ${hometown} and state is ${state}`) 
// }


// let obj2 = {
// name : "Abhi", 
// hobby : " movie ",

// }
// suno.apply(obj1, ["manjhaul", "bihar"]);   // the first parameter will always be the refrence to this ,and second argument is list to the arguments what we have to pass in the function     
// suno.apply(obj2,["thumb", "bihari"]);




// best use of Apply 

// var array = ['a' , 'b'];
// var elements = [ 1,2,3];
// array.push(elements);
// console.log(array);

// output :-
// ['a' , 'b' , [1,2,3]]


// var array = ['a' , 'b'];
// var elements = [ 1,2,3];
// array.push.apply(array ,elements);
// console.log(array);

// output :-
// [ 'a', 'b', 1, 2, 3 ]


// Maximum in array 

let array = [ 34,55,75, 97 , 55, 99]

// console.log(Math.max(array)); output NaN 

console.log(Math.max.apply(null,array));
// output:- 99
