//Run this on console
//A higher-order function is a function that takes one or more functions as arguments or returns a function as its result. 





function doSomething(callback) {
    console.log('Doing something...');
    callback();
}

// Using the doSomething function with a callback
doSomething(function() {
    console.log('Callback called after doing something.');
});


/* So Here function()  is passed as an arguement ...
see
doSomething( arg );

and 

arg = function() {
    console.log('Callback called after doing something.');
}




in doSomething function, callback is parameter,,,which is callback
*/ 


function higherOrderFunction(callback) {
    console.log("Before callback");
    callback();
    console.log("After callback");
}

function callbackFunction() {
    console.log("Inside callback function");
}

higherOrderFunction(callbackFunction);



