// The find method returns the index  of the first element in the provided array that satisfies the provided  condition


// only difference between find and findindex is that 
// finde return value ,  whereas finindex return index 

const array = [ 30 ,50 ,30 , 80 , 90];

const findingindex = array.findIndex((value)=> value >60);
console.log(findingindex);
// output:- 3 ;