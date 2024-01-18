// ye functional map haaai , ismey array per iterate kaartey haain ,;
// map  sirf ek call back function  leta hai , jiska 3  parameter hota hai 
// lekin map m bus ek call back function hi paas kaartey haain ,nichey
// example dekho 
// map bus array per lagtaa hai na ki object per 
// agar object per lagayega bhi to wo array of object hoga 

// // map  takes two parameter one is callback function and other is this argument .
// humara callback function jo hai jo ki pahela paramter hai wo khud 3 arguments leta hai 
// syntax: array1.find(callback(element , index , array), thisArg)
// let arr = [ 2,3,45,5];

// const doublearray = arr.map((x)=> x*2) ;

// console.log(doublearray);
// console.log(arr);

// output

// let arr = [ 3,5,9,7,9]

// let newarray = arr.map(
//     function (value){
//         console.log(value*2) ;

//     });

//     console.log(newarray);

// output

// let arr = [4, 5, 8, 9, 9];

// function double(val, idx, currArr) {
//   console.log(val, idx, currArr);
//   return val * 2;
// }
// let doublearray = arr.map(double);

// console.log(`value of double is ${doublearray}`);

// output :-
// 4 0 [ 4, 5, 8, 9, 9 ]
// 5 1 [ 4, 5, 8, 9, 9 ]
// 8 2 [ 4, 5, 8, 9, 9 ]
// 9 3 [ 4, 5, 8, 9, 9 ]
// 9 4 [ 4, 5, 8, 9, 9 ]



// let obj = [{
//     firstname : "abanish",
//     lastname : " kumar" ,
//     hobby : "movie"

// },{
// firstname : "ABHI",
//     lastname : " kumar" ,
//     hobby : "movie"
// }
// ];
// function callback(value , ind , arr) {
//     console.log(` ${JSON.stringify(value)} ,${ind} ,${JSON.stringify(arr)}`);
// return value;
// }

// let mutatedobj = obj.map(callback);

// console.log(mutatedobj);

// output :-




// new code 



let obj = [{
    firstname : "abanish",
    lastname : " kumar" ,
    hobby : "movie"

},{
firstname : "ABHI",
    lastname : " kumar" ,
    hobby : "movie"
}
];
function callback(value , ind , arr) {
    console.log(ind);
return (`${ind} ${value.firstname}   ${value.hobby}`);
}

let mutatedobj = obj.map(callback);

console.log(mutatedobj);
// json.stringify padh lo aur JSON.parse paaadh lo aaachey se 