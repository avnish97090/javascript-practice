// reduce is used where we need to iterate over all the
// element and find out a particular value (or one value) like in sum
// of elements of array , greateast element of array , average .

// the second argument to reduce function is initial value of the
// accumulator , and first argument is a function which takes two
// parameter first is accumulator and second is current .

// synatx :- 

// reduce(callbackFn( accumulator , currentvalue ,currentindex ), initialValue)
// arr.reduce(function(acc,current){

// },0);

// function(acc,current){   :- this function will be called for each and every
//     value for array ,

// }

// finding sum how we do normal

// let arr = [10,20 ,30, 70 ,80, 99]
// let sum = 0 ;
// for(let i = 0 ; i< arr.length ; i++){

//     sum = sum + arr[i] ;
// };
// console.log(sum);

// output :- 309

// by using function
// let arr = [45,67,89,79];
// let sumarray =(hello)=>{
//     let sum = 0 ;
//     for(let i = 0 ; i < arr.length ; i++ ){
//         sum = sum+arr[i];
//     };
//     return sum ;
// };
//  console.log(sumarray(arr));

//  output 280

// by using reduce

// let arr = [45,67,89,97];

// let onadd = arr.reduce(function(acc,total){
//         acc = acc + total ;
//         return acc;
// },0)

// console.log(onadd);

// output :- 298

// greatest number in aray

// let arr = [ 47 ,35 ,97 , 43 ,93];
// let max = 0 ;
// for (i = 0 ; i <arr.length ; i++){
//      if (arr[i]> max) max = arr[i];
//     }
// console.log(max);

// let arr = [ 39 , 47 , 89 , 97];

// let greatest = arr.reduce(function(acc, next){
//       if(next > acc){
//         return next;
//       }

// },0)

// console.log(greatest);

// let users = [
//   { firstname: "akshay", lastname: " saini ", age: 26 },
//   { firstname: "donald", lastname: " trump ", age: 75 },
//   { firstname: "elon", lastname: " musk", age: 58 },
//   { firstname: "deepika", lastname: " padukone ", age: 26 },
// ];

// let output = users.reduce(function (acc, current) {
//   // current.age = 26 , acc = {}
//   // acc[26] -> false            obj['firstname'] aisey bhi oject k property ko access  kiya jata hai ;                                                      
//   if (acc[current.age]) {
//     acc[current.age] = ++acc[current.age];
//   } else {
//     acc[current.age] = 1;
//   }
//   return acc;
// }, {});

// console.log(output);

// Q. find out all the people with age <30 and
// get the list of first name of that .

// let users = [
//     { firstname: "akshay" , lastname: " saini ", age :26},
//     { firstname: "donald" , lastname: " trump ", age :75},
//     { firstname: "elon" , lastname: " musk", age :58},
//     { firstname: "deepika" , lastname: " padukone ", age :26},
// ]

// let output = users.reduce(function(acc,current){
//    if(current.age<30){
//       acc.push(current);
//    }
//    return acc;
// },[])

// console.log(output);



let users = [
    { firstname: "akshay" , lastname: " saini ", age :26},
    { firstname: "donald" , lastname: " trump ", age :75},
    { firstname: "elon" , lastname: " musk", age :58},
    { firstname: "deepika" , lastname: " padukone ", age :26},
]

let output = users.reduce(function(acc,current){
    if(current.age <30){
         acc.push(current.firstname);
    }
    return acc;
    
   
},[])

console.log(output);






// piping with reduce
// first multiply then increment then decrement

//  function double(input) {
//        return input * 4;
//  }

//  function add(input){
//      return  input+7;
//  }

//  function half(input){
//     return input / 2 ;
//  }

// let pipeline = [double , add , half];

// let result = pipeline.reduce(function(total, func){
//     return func(total)
// },10);

// console.log(result);








