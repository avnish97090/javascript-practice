// performance :-

// measure speed of code 
// how to write efficient and performing code 

// STANDARD WAY TO MEASUR HOW LONG YOUR CODE TAKES TO RUN 

// is 
// performance.now()

// ye method ek timestamp provide kar deta hai 


// ading 100 para 
 
const t1 = performance.now();

for(let i = 0 ; i <=100; i ++){
    let newElement = document.createElement('p');
    newElement.textContent = 'this is para' + i ;

    document.body.appendChild(newElement);
}
const t2 = performance.now();
console.log("this took " + (t2-t1) + "ms");

// optimising a bit 
const t3 = performance.now();
let mydiv = document.createElement('div');

for(let i = 1; i <= 100; i++){
        let element = document.createElement('p');
        element.textContent= 'this is para ' + i ;
        mydiv.appendChild(element);
}
const t4 = performance.now();
console.log(" this took " + (t4-t3) + " ms ");