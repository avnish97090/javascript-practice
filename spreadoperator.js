// sabse main kaam spread operator ka array ko coppy kartey hain spread operator k through to , naye araay m kuch change karengey to puraney m reflect nahi hogaa  , matlaab ki refrence type nahi hoga 
// it replaces apply method  basically , it also replace concat method , it also replaces copy method .

//Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element

//When …arr is used in the function call, it “expands” an iterable object arr into the list of arguments

//The Spread operator allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 value is expected. It allows us the privilege to obtain a list of parameters from an array. 
//ye gfg ka line haai 


// function sum ( a, b , c){
//     console.log(a+b+c);
// }

// sum (1,2,3);

// output :- 
// 6


// second code 

// function sum (a,b,c){
//     console.log(a+b+c);
// }

// var arrVal = [5,2,3];

// sum.apply(null, arrVal);

// output :- 10 



// third code 

// es6 


// function sum ( a,b,c){
//     console.log(a+b+c);
// }

// var arrVal = [5,2,3];
// console.log(...arrVal)   // 5 2 3
// console.log(arrVal)  //   [5,2,3]
// sum(...arrVal);

// output :- 10


// it replace concat

//pahley 

// let arr1 = [1,2,3];
// let arr2 = [4,5,6];

// arr1 = arr1.concat(arr2);

// console.log(arr1);

// output :-  [ 1, 2, 3, 4, 5, 6 ]


// ab

// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let arr3 = [7,8,9];

// arr1 = [...arr1 , ...arr2 , ...arr3];
// console.log(arr1);

// output :-  [ 1, 2, 3, 4, 5, 6, 7, 8, 9]

// replces copy method 

//pahley 
// let arrc1 = [1,2,3];
// let arrc2 =  arrc1;
// console.log(arrc2);

// output :- [ 1, 2, 3 ]   


 // second code 

// let arrc1 = [ 1,2,3];
// let arrc2 = arrc1;
// arrc2.push(4,5);
// console.log(arrc2);
// console.log(arrc1);

// output :-
// [ 1, 2, 3, 4, 5 ]
// [ 1, 2, 3, 4, 5 ]

//ab
// ismey refrence type se nahi hota hai spread operator laganey se.
// let arrc1 = [ 1,2,3];
// let arrc2 = [...arrc1 , 4,5 ];
// console.log(arrc1);
// console.log(arrc2);
// arrc1.push(9 ,10);
// console.log(arrc1);
// console.log(arrc2);

// // output :- 
// // [ 1, 2, 3 ]
// // [ 1, 2, 3, 4, 5 ]
// // [ 1, 2, 3, 9, 10 ]
// // [ 1, 2, 3, 4, 5 ]


// let arrc1 = [1,2,3];
// let arrc3 = [6,78,8];

// let arrc2 = [...arrc1 , 4,5 , ...arrc3 , 9];

// console.log(arrc2);
// console.log(arrc1);

// //output :-
// [ 1,  2, 3, 4, 5,6, 78, 8, 9]
// [ 1, 2, 3 ]


//ye thoda sa hat k hai bus dekh lo  ismey object ko kisi variable ko assign kaarnegey aur us variable m change  kaarengey to object m bhi reflect kareygaa kyonki pass by refrence hota hai object aur array , yahi agar hum object ko destructure kar k variable ko assign kaarengey matlab ki spread operator ko use kaarkey tab refrence naahai hogaa , tab agaar varaibale m change kiye to bus usi m reflect hogaa aachaa sa code kiye hain nichey dekhooo

let obj = {
    key1 : "hello",
    key2 : "suno "
};
let user = obj  
user.key1 = "aree";
console.log(user);
console.log(obj);

// output:- 
// { key1: 'aree', key2: 'suno ' }
// { key1: 'aree', key2: 'suno ' }



// let obj = {
//     key1 : "hello",
//     key2 : "suno "
// };
// let user = {...obj}  // ...obj kiye na isko destructing of object bhi boltey hain 
// user.key1 = "aree";
// console.log(user);
// console.log(obj);

// output :-
// { key1: 'aree', key2: 'suno ' }
// { key1: 'hello', key2: 'suno ' }


// free code camp ye documentation padh lo 
//https://www.freecodecamp.org/news/an-introduction-to-spread-syntax-in-javascript-fba39595922c/
// thapa technical sir se padhey hain ye pura code 

// mdn ka bhi documentation aachaa hai deekh loo 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax


// gfg ka bhi documentation best haai best ek baar zaroor padhnaa  , yaa sabse pahley yahi paadhnaaa tab mdn tab freecodecamp 