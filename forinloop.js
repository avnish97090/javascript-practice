// for in loop me array ka index number deta hai ,
// yaa object k keys ko dikhana hai to for in loop 
// use kartey hain 


// for in loop is used to iterate over the properties of 
// an object . it allows you to access the keys of the object 
// rahther than the value .



// let arr = [65 , 45 , 68 , 79, 97];

// for (let indexhoga in arr){
//     console.log(indexhoga);
// }

output :-
0
1
2
3
4

// const objectbanaye = {
//     hobby : "movie " ,
//     khel : " cricket",
//     pasand: " panipuri",
//     emotion: " love" 
// }

// for (let objectkeydega in objectbanaye){
//     console.log(objectkeydega);
// };

// output :-
// hobby 
// khel
// pasand 
// emotion 


// let objectbanaye = {
//     emotion : " pyar",
//     hobby : " movie ",
//     value : " emotion ",
//     paisa : " bahut kamana"
// };


// for (let objectkeybanaliye in objectbanaye){
//     console.log( objectkeybanaliye +  objectbanaye[objectkeybanaliye]);
// }



let obj = {
    hobby : "movie ",
    favnumber : 5 
};

obj.khel = " cricket " ;

console.log(obj);


for ( let variablessss in  obj) {
    console.log(`variablessss  :    ${obj[variablessss]}` )
};