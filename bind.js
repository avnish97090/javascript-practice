// the bind method looks exactly same as call method the only difference is 
// instead of directly calling  method , the bind method binds the method with the object 
// and returns us the copy of the method ;




//bind method does'nt directly invokes the method like csll it gives you 
// the copy of the exactly same method which can be invoke later .

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
let binded = suno.bind(obj1, "manjhaul", "bihar");   // the first parameter will always be the refrence to this ,and later argument be the argument of function 
 
console.log(binded);
binded();

// output :- 

// [Function: bound suno]
//  Abanish  hobby is watching the   movie  and hometown is manjhaul and state is bihar

