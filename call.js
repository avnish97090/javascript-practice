// using call method we can do a function borrowing we can borrow function from other object 
// and use it with the data of some other object 
// let obj1 = {
//     name : " Abanish",
//     hobby : " movie ",
//     suno : function(){
//         console.log(`${this.name}  hobby is watching ${this.hobby}`) 
//     }
// }

// obj1.suno();

// let obj2 = {
//     name : "Abhi", 
//     hobby : " movie ",

// }
// //first of all take the function which needs to be called  , yahan per obj1.suno () hai
// // each and every method in js has an access of  special function which is call 
// // in call the first argument will be the refrence or in simple term what we want this this to be pointed.
// // so we pass obj2 as the first argument 
// obj1.suno.call(obj2);

//output 
// Abanish  hobby is watching  movie 
// Abhi  hobby is watching  movie




// however in general case we don't keep our method inside the object like this  if we want to resuse them 
// let obj1 = {
    //     name : " Abanish",
    //     hobby : " movie ",
    //     suno : function(){
    //         console.log(`${this.name}  hobby is watching ${this.hobby}`) 
    //     }
    // }

    // rather than we take  them offf like this 



//     let obj1 = {
//             name : " Abanish",
//             hobby : " movie ",
        
//         }

//        let suno  =  function(){
//             console.log(`${this.name}  hobby is watching the  ${this.hobby}`) 
//         }

        
// let obj2 = {
//     name : "Abhi", 
//     hobby : " movie ",

// }
//     suno.call(obj1);
//     suno.call(obj2);

    // output :-
    // Abanish  hobby is watching the   movie  
    // Abhi  hobby is watching the   movie 
    
    

    // what if have more parameter in the function
    //  like this 
    
//        let suno  =  function( hometown){
//             console.log(`${this.name}  hobby is watching the  ${this.hobby}`) 
//         }


// code :- 


    let obj1 = {
            name : " Abanish",
            hobby : " movie ",
        
        }

       let suno  =  function(hometown, state){
            console.log(`${this.name}  hobby is watching the  ${this.hobby} and hometown is ${hometown} and state is ${state}`) 
        }

        
let obj2 = {
    name : "Abhi", 
    hobby : " movie ",

}
    suno.call(obj1, "manjhaul", "bihar");   // the first parameter will always be the refrence to this ,and later argument be the argument of function 
    suno.call(obj2,"thumb", "bihari");

    // output :- 
    // Abanish  hobby is watching the   movie  and hometown is manjhaul and state is bihar
    // Abhi  hobby is watching the   movie  and hometown is thumb and state is bihari




    