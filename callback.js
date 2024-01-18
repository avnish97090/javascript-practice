// function abc() {
//     console.log("callback") ;
// }


// function def(abc) {
//     console.log("main function")
//     abc();
// }   

// def(abc);

output :- 
// main function
// callback






function def(abc) {
    console.log("main function")
    abc();
}

def(function abc() {
    console.log("callback") ;
});

// output :-
// main function
// callback




