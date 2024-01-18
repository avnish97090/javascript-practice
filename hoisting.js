// console.log(x);
// getname();

// var x = 7 ;

// function getname () {
//     console.log(" hosisting happens ");
// }

// output :- 
// undefined 
// hosisting happens 

// second code 


// getname();
// console.log(x);
// function getname() {
//     console.log(" hello ") ;
// }

// output :-
// hello 
// refrence error x is not defined 


// console.log (getname);
// function getname (){
//     console.log(" hello");
// }

// output :-
// purey function ka body aa jaayegaa 
// ans m function getname likhaa raheyga 


// console.log (suno);
//  var suno = function getname (){
//     console.log(" hello");
// }
 
// output:-
// undefined 




// console.log (getname);
//   var suno = function getname (){
//    console.log(" hello");
//   }

//   output :- refrence errror  getname is not defined 

// console.log (getname); 
//    var suno = function getname (){
//    console.log(" hello");
//    }
//    console.log(suno);

//    output :- 
//    getname is not defined 


//    var suno = function getname (){
//     console.log(" hello");
//     }
//     console.log(suno);

//     output :-
//     function getname 



// console.log(getname);
// console.log(x) ;
// var x = 7;
//  var getname =()=> console.log (" helloo");


//  output :- 
//  undefined 
//  undefined 


 
// getname();
// console.log(x) ;
// var x = 7;
//  var getname =()=> console.log (" helloo");

//  output :- 
//  error , getname is not a function 



// in last two example it happens because in arrow function it treat as normal variable like , memory alloct 
// as memory alloct for variable , so getname() jab likhey tab not a function likhaya aur jab console.log(getname) kiye to 
// undefined aayaa 


// most importaant thing :-
// jab hum function expression create kaartey hain to memory allocation 
// variable type se hota hai aur jab function declaaration kartey hain tab
// memory allocation m function ka pura ka body jataa haai isliye function 
// k under jo bhi rahta hai wo print ho jata hai 




// getname();
// console.log(x) ;
// var x = 7;
// getname =()=> console.log (" helloo");


// output :- 
// getname is not a function 



// console.log(hello);
 
//  var x = 7;
//   var hello =  getname =()=> console.log (" helloo");

// output :- 
// undefined 
