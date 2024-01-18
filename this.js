// The this keyword is a reference variable that refers to the current object  

// this keyword in arrow function shraddha mam aachaa se padhaye hain dekh lo . ekdum clear ho jaayega 

// humara method jo hota hai object k under wo directly humarey oject k 
// property ko acces nahi kaar pata hai , uskey liye hum this keyword ko
//  use kartey hain , yahan this ka matlab basically hota hai ki calling 
// object ki baat kaar rahe hain , matlab ki jo object is function ko call kaar rahi hai 


// this keyword refers to an object that is executing the current piece of code 


// Arrow functionn k liye this uski calling object nahi hoti hai jaisey normal method 
// k liye hoti hai , arrow function k liye this ka matlab hoga  parent's scope , refers to parent's scope ; yami ki uska parent ka this jisko darsta hai wahi arrow object ka this darsata hai 
// jab hum window object k inbuilt function ko use kartey hain like setTimeout , tab arrow function use karney se fayde hotey hain  sabse nichey code likhey hainn aachey se 

// freecode camp ka article this keyword on arrow function aachey se diya hua hai dekh lo 

// const student = {
//     firstname : "abanish",
//     lastname : " kumar",
//     hobby : " movie ",
//     greet : function(){
//         console.log("hello");
//     },
//     greet2 : function(){
//         console.log(" suno to");
//     },

// }

// console.log(student.firstname) ;
// console.log(student.lastname) ;
// student.greet2() ;
// student.greet() ;

// console.log(student.greet2()) ;
// last ka output suno to aur undefined aayegaa kyonki 
// hum kuch return nahi kaar raahe hainn , isliye undefined 



// const student = {
//     name : "abanish",
//     age: 23,
//     eng : 95,
//     math : 93,
//     phy : 97 ,
//     getAvg : function() {
        
//         let avg = ( this.eng + this.math + this. phy ) / 3;
//           console.log(avg);
//     }

    

// }

// console.log(student.name) ;
// student.getAvg();


// output :- abanish 
//            95



// const student = {
//     name : "abanish",
//     age: 23,
//     eng : 95,
//     math : 93,
//     phy : 97 ,
//     getAvg : function() {
        
//         console.log(this);     
//         //  yahan this se pura ka pura object aa jayegaa 
//     }

    

// }

// console.log(student.name) ;
// student.getAvg();

// output : -
// abanish
// {
//   name: 'abanish',
//   age: 23,
//   eng: 95,
//   math: 93,
//   phy: 97,
//   getAvg: [Function: getAvg]

// code 

// const student = {
//     name : "abanish",
//     age: 23,
//     eng : 95,
//     math : 93,
//     phy : 97 ,
   
// };

// function getAvg(){
//     //   console.log(this);     ye window object ko point kareyga , global object    
  
// };



// code 

// const student = {
//     name: "abanish",
//     marks : 97,
//     props : this ,    // ye window object dikhayega , global scope 

// }

// console per jaakey student likho to aisa output aayega 

// student

// {name: 'abanish', marks: 97, props: Window}marks: 97name: "abanish"props: Window {0: Window, 1: Window, 2: global, 3: global, 4: Window, 5: global, 6: global, 7: Window, 8: Window, 9: global, 10: global, 11: global, 12: global, 13: global, 14: global, 15: global, window: Window, self: Window, document: document, name: '', location: Location, …}[[Prototype]]: Object
// props m dekho window dikha raha na ; 




// const student = {
//     name : " abanish",
//     marks : 95 ,
//     prop : this ,
//     getName : function() {
//         console.log(this);  //  object k liye uska this tha window object lekin yahan method k liye this hota hai calling object to yahan k liye this student wali ojbect hogi , 
//         return this.name ;
//     },
//     getmarks : () => {
//         console.log ( this);
//         return this.marks;  // this. marks return undefined kareyga 
//     }

// };

// student.getName();
// student.getmarks();  // yahan arrow function k this m print hogi window object , kyonki arrow fumction me this refers to the parents scope aur yahan parent hai student object jiska scope global haaii , isliye window object print hua 



//  code  

const student = {
    name : " abanish",
    marks : 95 ,
    prop : this ,
    getName : function() {
        console.log(this);  //  object k liye uska this tha window object lekin yahan method k liye this hota hai calling object to yahan k liye this student wali ojbect hogi , 
        return this.name ;
    },
    getmarks : () => {
        console.log ( this); // ye this apney parent k scope ko refer kareyga , jo ki yahan student object hai jiska scope global object , window object hai ,
        return this.marks;  // this. marks return undefined kareyga 
    },

    getinfo1: function() {
        setTimeout (() => {
            console.log (this);      //  iske liye print hogi student object , kyonki arrow function k liye this kya hota hai , arrow function k liye this hota hai  uskey parent ka this .aur yahan arrow function k liye parent hai abhi ye function      getinfo1: function() {
        }, 2000);

// arrow function k liye abhi y e hai parent  ye function function()
// function() {
//     setTimeout (() => {
//         console.log (this);
// na ki settimeout , kyonki settimeout m to ye as a callback ye pass hua hai  ye arrow function .
//aur humarey  is function() {  function ka this hai  student object . isliye ans me student object ayaa ;

    },
    getinfo2 :  function () {
        setTimeout(function () {
            console.log(this);   // iske liye print hogi window object 
// normal method k liye this hota hai jisney us funcction ko call kiya hai  , jisney settimeout k liye call lagaya hai , aur settimeout ki call window lagta hai , isliye window print hua 
        }, 2000);
    }
    



};
student.getinfo1();
student.getinfo2();
