// let mydiv = document.createElement ('div');
// for (let i = 0 ; i <= 6; i++){
//     let newElement = document.createElement('p');
//   newElement.textContent = 'this is para ' + i;

//   newElement.addEventListener('click' , function(event){
//     console.log('i have clicked on para');
//   });
//   mydiv.appendChild(newElement);
// }
// document.body.appendChild(mydiv);




// output :-
// this is para 0

// this is para 1

// this is para 2

// this is para 3

// this is para 4

// this is para 5

// this is para 6

// ye sare k sare para same listner se attach hain to different 
// different kyon object create kaareen , itna memory kyon waste kaaren 

// issey aachaa hum ye kar dete hain ki listner sirf ek hi ho 
// aur hum usko paragraph se aataach kaar deen issey memory bhi  kam use hoga 
// hum code thoda sa optimize kar liye uskey liye code aisa hoga 



// let mydiv = document.createElement('div');

// for(let i = 0 ; i <= 7; i ++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'this is para' + i ;
//     function obj(event){
//    console.log(" i have clicked on para ");
//     }

//     newElement.addEventListener('click' , obj);

//     mydiv.appendChild(newElement);

// }
// document.body.appendChild(mydiv);

// output 
// this is para 0

// this is para 1

// this is para 2

// this is para 3

// this is para 4

// this is para 5

// this is para 6


// EVENT TARGET PROPERTY :- 


// The target property returns the element where the event occured . 

// let mydiv = document.createElement('div');

// for(let i = 0 ; i <= 8; i ++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'this is para' + i ;


//     function obj(event){
//    console.log('PARA ' +  event.target.textContent);
//     }


//     newElement.addEventListener('click' , obj);

//     mydiv.appendChild(newElement);

// }
// document.body.appendChild(mydiv);

// output :-
// this is para 0

// this is para 1

// this is para 2

// this is para 3

// this is para 4

// this is para 5

// this is para 6

// //ab jaisey hi kisi per click karengey jaisey ki click kiye hum this is para 4 pr to onsole per jaakey dekheny to whan raheygaa 

// PARA this is para4
// PARA this is para8
// PARA this is para6
// PARA this is para3
// PARA this is para4 



// .nodename ek property hoti hai 


// each node in the DOM tree has a .nodeName property that represents the name of the node. This property returns the name of the node in uppercase, such as "DIV", "SPAN", "P", etc.



let element = document.querySelector('#wrapper');

element.addEventListener('click', function(event) {
         if(event.target.nodeName ==='SPAN' ) {
   console.log('span pr click kiya hai ' + event.target.textContent);

}
});



//DOM 2 COMPLETE LOVEBABBAR SIR , MAINLY NOTEPAD PER PUREY LIKHEY HAIN 
// FILE KA NAM HAI lovebabardom2 