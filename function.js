// the main diffencce between function expression and function 
//statement  is hoisting .




// a();     // abc 
// b(); // undefined ;


// // function statement   // it is also known as function decalaration 

//  function a(){
//     console.log(" abc");
//  };

//  // function expression 
//  var b = function(){      // this bis treated like any other variable ; 
//     console.log("b is called ");
//  }


//  // anomonous function 
//  // a function without a name is anomonus function .
//  // anomonus function doesnt have their own identity means if we create function like this 
//   function (){

//   }; // syntaxt error , function statemnet require a function name ;

// // it will throws a eoor  syntax error , because anonymus function looks like 
// //function statement , but it has no name and according to ecmasscript a function statement should 
// //alwaays have name 
// function abc(){

// };


// //  when we can,t create anonymus function without name whats the use,
// // anonomus function are used in a place where functions are used as values


// var b = function() {
//     console.log(" hello");
// }


// // named function expression 

// var b = function abc() {
//     console.log(" abc");
// }

// b();
// abc() ; // refrence eroor ;


// var b = function abc(){      // this abc is not created in outer scope or global scope but it is created as a local variable  if we want to aceess this function inside this function we can  access it 
//     console.log(" hello ");  
//     console.log(abc);// output function abc ()
// };



// parameter and arguments 

// the value which we pass inside the function are known as arguments and the label the identifier which we gets those values are known as parameters 

function abc(param1, param2){
console.log(param1,param2);
};

abc(3, 4);


// first class function or first class citizen 

// the ability to use function like values and can be passed as an argument to another function 
// and can be returned from function makes the function as first class citizen 


// namaste javascript video first class citizen complete 
