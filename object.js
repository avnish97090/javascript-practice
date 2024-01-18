// key in object cant not be non-string  ;
// humesha string hi raheyga key object me 
// an object is an instance of a class , this means using a class , i can create as many objects ans they all share methods and properties 

//  let obj = {
//     firstname : 'ABANISH',
//     lastname : "kumar",
//     hobby : " movie "
// };
   
// const value = obj['firstname'] ;
// console.log(value);

// const value2 = obj.lastname;
// console.log(value2);


// console.log(typeof(obj)) ;




const student = {
    firstname : "abanish",
    lastname : " kumar",
    hobby : " movie ",
    greet : function(){
        console.log("hello");
    },
    greet2 : function(){
        console.log(" suno to");
    },

}

console.log(student.firstname) ;
console.log(student.lastname) ;
student.greet2() ;
student.greet() ;

console.log(student.greet2()) ;

// output  :-
// abanish
//  kumar
//  suno to
// hello
//  suno to
// undefined