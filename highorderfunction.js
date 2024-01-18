// A function which takes another function as an argument or returns 
//a function from it is known as high order function  



setTimeout(()=> console.log("i am callback function "),4000);
function x (y){
    console.log(" hello");
    y();
}
  // bhaiya se pucho why not on writing param instead of y ;

x(function y(){
    console.log(" i am argument");
});

// function x is high order function 
// function y is all back function .


//Akkshay saini sir video 