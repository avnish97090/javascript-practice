// Javascript is a synchronous single threaded language and it can do one thing at a time 
// it has just one call stack and  it an execute just one thinng at a timee and whatever 
// code we give to js it will be quickly executed by the js engine , it doesnot wait for anything 

// using callback is a powerful way to do asynchrornous thing in js 

// console.log( " Namaste ");
// setTimeout(function(){
//     console.log("javascript");
// }, 5000)// we gave this callback function to this settimeout now it is the job of settimeout to execute this callback function after 5 sec .
// // // using callback is a powerful way to do asynchrornous thing in js 

// console.log("season 2");





const cart = [ " shoes" , "pants" , "kurtas"] ;


// once we have items into our cart first we need to create a order then we proceed to payment
// suppose we have acces to two backend apis one is the createOrder api that creates an order and 
// another api which can be proceed to payment . after an order is created  then only we procced to payment there is a dependency between them 
// so how we mange that dependency in our code because this is async operation so here callback come into picture and callback help us to write code for this kind of behaviour 


//  api.createOrder()  


 // we wrap our proceed to payment api inside a callbackfunctionn 
//  function(){
//     api.proceedTopayment();
//  }

// and where will this callback function go . 
// we will take this callback function  and we will pass along with the cart items to this  create order api 


// api.createOrder(cart , function(){
//     api.proceedTopayment();
// })

// so how will this code will execute 
// when javascript engine execute this piece of code it will just call the create order api, and we have passed a callback function to call order api 
//  now it is the responsibility of create oder api to create an order and then call this function back   
//   function(){
    // api.proceedTopayment();
    // is function ki baat ho rahi 


    // this way we can handel the asynchronous operation in javascript 

    // after payment we have to show ordersummary so how we do that
    // api.showOrdersummary 
    // we have too call this api only after  we have done with the payments so again here callbackfunction comes into picture 
    // we will wrap this api into callbackfunction and we will pass this callback function  into proceed to payment 

// function(){
//     api.showOrdersummary
// }


// api.createOrder(cart , function(){
//     api.proceedTopayment(
//         function(){
//                 api.showOrdersummary()
//             }
//     );
// })

// we gave this callback function to proceedTopayment api  now it is the responsibilty 
// of proceed to payment api to  complete the payment and call this function back thats how we manage the dependency between this whole flow 
// which happens one after the another 



// now update the wallet 

// function(){
//     api.updateWallet()
// }




api.createOrder(cart , function(){
    api.proceedTopayment(
        function(){
                api.showOrdersummary( function(){
                        api.updateWallet()
                    }
                    )
            }
    );
})

// sabse main ye line bolna hai 

//  when we have a large code base and there are so many apis here and there and apis are dependent on one after the another 
// so what happens is we end up falling into this callback hell , what is callback hell one calback inside another callback 
// inside another api or some if statemensts and rondom things happening makes this callback hell and our code starts 
// to  grow horizonatlly instead of vertically  
// and this type of structure is like very unmaintainable , we can,t mainatain it properly it,s very  tough to manage all this .

// this structure is know as  pyramid of doom 

// second problem is inversion of control while using callbacks .

// Inversion of control is like that you lose the control of code when we are using callback.

// aur aagey dekhna hai to namste javascript notes dekh lo 
// mainly hota ye hai ki hum apna important code kisi api ko saup detee hain aur usper depend ho jaatey haainn 
// ab  create order api per depend kaar raahe ki wo at some point of time ek order crete kareyga aur  humaraa procced to payment walaa function 
// baad m call kaareygaa . it is risky . we give the control of our program to create order api , now it is the responsibiltyy of create order api to call our function back and we are blindly trusting our api now we dont know 
//   




// what we did is we gave the control of
// our program to create order api
// now we now it is the responsibility of
// create order api
// to call our function back
// and we are blindly trusting create order
// api now we don't know create order api
// must have been in some other service or
// some other developer wrote it or an
// intern wrote it right there could be a
// lot of bugs inside create order api
// isn't it
// what if our callback function was never
// called
// can happen right you don't know what is
// the code return and create order api we
// are just blindly trusting it
// what if our callback function is called
// twice
// proceed to payment happens twice
// because we don't know what is happening
// created in the create order api so what
// i am trying to explain is that whenever
// we have this callback function and we
// pass it to some other function we are
// giving the control of our function right
// our piece of written code to some other
// code
// and we don't know
// what's happening behind the scenes now
// right

// namaste javascript callback hell video lecure hai 