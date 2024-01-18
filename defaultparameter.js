// Default function parameters allows named parameters  to be initialezd with default values
// if no values or undefined is passed 



// pahley aisey use hota tha 



// function multiply(a,b){
    // console.log(b) ; // ye undefined aayegaa 
//     console.log(a*b );

// }


// multiply(4);

// output : - Nan

// iskey liye kartey the use ternatory operator 


// function multiply(a,b){
//     b = (typeof b !=='undefined' )? b: 2
//     console.log(a*b);
// }

// multiply(4);
// output :- 8


// ES6  Default parameter 


function multiply( a, b = 7){
    console.log(a*b);

}
 
multiply(5);

// technical thapa sir se padhey best hai , definition mdn 


