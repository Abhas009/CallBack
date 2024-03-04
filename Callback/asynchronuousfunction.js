// Run the program in console//

//Asynchronous callbacks are functions passed to another function that starts executing code in the background.


//In JavaScript, asynchronous operations are commonly used for tasks like fetching data from servers, reading files, or waiting for user input. Callback functions are a way to handle the results of these asynchronous operations once they are completed.
function fetchData(callback) {
    // Simulate fetching data from a server after 2 seconds
    setTimeout(function() {
        const data = { id: 1, name: 'John Doe' };
        callback(data);   // so here data is an event, now it is looking for the same function where the same event (data) is happening ...like in this case callback(data)  is looking for a function(data).
    }, 2000);
}

// Using the fetchData function with a callback
fetchData(function(data) {
    console.log('Data received:', data);
});

//Remember callback is just a naming convention is can be anything...like call, temp etc. whatever you want..

// Another method 

function fetchData(temp) {
    // Simulate fetching data from a server after 2 seconds
    setTimeout(function() {
        const data = { id: 1, name: 'John Doe' };
        temp(data);
    }, 2000);
}
// we create a function where we clarify how callback is works
function printing(data)
{   
    console.log('Data received:', data);


}
// Using the fetchData function with a callback
fetchData(printing);
    
/*
In the example you provided, the fetchData function simulates fetching data from a server using setTimeout, which delays the execution of the callback function (temp in this case) by 2 seconds. This delay simulates an asynchronous operation, where the data is not immediately available.
*/