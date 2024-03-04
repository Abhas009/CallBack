function doSomething(callback) {
    console.log('Doing something...');
    callback(); // Execute the callback immediately
}

function callbackFunction() {
    console.log('Callback executed.');
}

// Call the doSomething function with the callback
doSomething(callbackFunction);

console.log('After calling doSomething'); // This line will be executed after the callback
