// Rest parameter is an improved way to handel function parameter , allowing us to more easily handel 
// various input as parameters in a function . 
// The rest parameter syntax allows us to represent an indefinite number of arguments as an array 


// NOTE 

//  When … is at the end of the function parameter, it is the rest parameter. It stores n number of parameters as an array

//  The rest parameter has to be the last argument, as its job is to collect all the remaining arguments into an array.


// pahley 

// function sum(a,b,c,d,e,f){
//     console.log(a+b+c+d+e+f);
// }


// sum(1,2,3,4,5,6);


// now 

// function sum (...inputs){
//     console.log(inputs);
// };

// sum(1,2,3,4,5,6)

// output :-  [ 1, 2, 3, 4, 5, 6 ]     it will return all the value in  the form of array 



// function sum (...inputs){
//     console.log(...inputs);
//     let total = 0;
//     for (let i of inputs ){
//         total += i ;
//     }
//     console.log(total);
// };

// sum(1,2,3,4,5,6);

// output : - 
// 1 2 3 4 5 6
// 21



function fun(a,b,...c){
    console.log(`${a} ${b}`); //Mukul Latiyan
    console.log(c);  //[ 'Lionel', 'Messi', 'Barcelona' ]
    console.log(c[0]); //Lionel
    console.log(c.length); //3
    console.log(c.indexOf('Lionel')); //0
}
fun('Mukul','Latiyan','Lionel','Messi','Barcelona');


// thapa technical sir se padhey hain 



