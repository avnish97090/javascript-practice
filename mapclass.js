// ye class maaap haai , jo ki object ka alternative hota hai 

// Map is similar to object but little bit advance from 
// object 
// map key can be of any data type , object can have only 
// string key .
// map have more frature which donnt have in object 
// map has better performance tha object 


// gfg article dekh lo mast explain haaii 




// let solve = new Map([
//     [3,4] , [5,6] , 
//     ["abanish" , "kumar"]
// ])
// console.log(solve); 



// output :- Map(3) { 3 => 4, 5 => 6, 'abanish' => 'kumar' }

let solve = new Map([
    [3,4] , [5,6] , 
    ['abanish' , 'kumar']
])
solve.set('city' , 'noida');
solve.set('city' , 'delhi'); 
//  same key ko update kaar diye ab delhi aayega noida ko replace kar dega 
console.log(solve);
console.log(solve.get(3));
console.log(solve.keys());
console.log(solve.get("abanish")); 
console.log(solve.values());
console.log(solve.size);
solve.delete(5);
console.log(solve);
console.log(solve.has(3));
console.log(solve.has(5));

// code step by step sir ka map with interview question ka ye purey hai 
// aur last ka 5 min bacha hai jismey for each , for of loop
// bhi sir laga k  use kiye hain ;
