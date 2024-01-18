// arrow function ko generally hum kisi variable ko assign kartey hain ya callback ki tarah use kartey hain 


// const sum = (a,b) => {
//     console.log(a+b); 
// };
//  sum (2,3);


// (a,b) => {
//     console.log(a+b);  is arrow function ko humney assign kar diya hai ek variable k under jiska naam hai sum 
// };


const sum2 = (a,b) => {
    console.log(a+b); 
};
const cube = (n) => {
    let x = n*n*n;
    console.log('inside cube:', x);
    return x ;
};

console.log(cube(2));
sum2(2,3);