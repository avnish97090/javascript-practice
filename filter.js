// filter bhi map ki hi tarah same ek callback function leta hai 
// jiska 3 parameter hota hai pahela value , dusara index aur teesra array ;
// filter method creates a new array with the elements that pass the test implenented by the provided function ;

// filter karta ye hai ki jo bhi callback condition hum detee hain usko 
// puraa karkey wo return kaar deta hai filterred new aaray ;
// let arr = [ 1,4,3,6,11,12];

// filter  takes two parameter one is callback function and other is this argument .
// humara callback function jo hai jo ki pahela paramter hai wo khud 3 arguments leta hai 
// syntax: array1.find(callback(element , index , array), thisArg)

//  let filtered = arr.filter(function hello(value){
//  return (value>4) ;
// });
// console.log(filtered) ;

// let arr = [ 1,4,3,6,11,12];

//  let filtered = arr.filter(function (value){
//  return (value>4) ;
// });
// console.log(filtered) ;



// let arrr = [3,4,56,9] ;
// let filtered = arrr.filter(value=> value>50) ;


// console.log (filtered) ;
// console.log(arrr) ;


// output - 
// [ 56 ]
// [ 3, 4, 56, 9 ]



// const  arr = [10 ,20 ,50 ,90 ,75,87]

// function callback(x){
//  return x > 50 ;
// }

// const filteredarr = arr.filter(callback);
// console.log(filteredarr);

// output :-
// [ 90, 75, 87 ]


// let winners = ["Anna", "Beth", "Cara"]

// let gold = winners.filter((winner, index) => index == 0)
// let silver = winners.filter((winner, index) => index == 1)
// let bronze = winners.filter((winner, index) => index == 2)

// console.log(`Gold winner: ${gold}, Silver Winner: ${silver}, Bronze Winner: ${bronze}`)


// context object kya hota hai padh lo , isi  use hota hai 
// sabse best freecodecamp ka article dekh lo filter per 
// best haai best 



let users = [
    { firstname: "akshay" , lastname: " saini ", age :26},
    { firstname: "donald" , lastname: " trump ", age :75},
    { firstname: "elon" , lastname: " musk", age :58},
    { firstname: "deepika" , lastname: " padukone ", age :26},
]  

const output = users.filter(x=> x.age<30);
console.log(output);
