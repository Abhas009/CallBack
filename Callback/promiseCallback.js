//A Promise is an object representing the eventual completion or failure of an asynchronous operation.

// const promise = new Promise((resolve, reject) => {
//     // Simulating an asynchronous operation
//     setTimeout(() => {
//       const success = true;
//       if (success) {
//         resolve("Operation completed successfully");
//       } else {
//         reject("Operation failed");
//       }
//     }, 2000);
//   });
  
//   promise.then(
//     (result) => {
//       console.log("Success:", result);
//     },
//     (error) => {
//       console.error("Error:", error);
//     }
//   );



  //  Try Promise czllback 


//   const promise = new Promise((accept,reject)=> 
//   {
//     const success = true;
//     if(success)
//     {
//         document.querySelector("button").addEventListener("click",function()
//         {
//             accept(" CLicked on button");
//         })
//     }
//     else
//     {
//         reject("Failed");
        
//     }
//   })

//   promise.then(
//     (result) => {
//         console.log("Working correctly");
//     },
//     (error) => {
//         alert("Done");
//     }
//   )




const promise = new Promise((accept, reject) => {
    const success = true;

    setTimeout(() => {
        if (success) {
            accept("Promise resolved");
        } else {
            reject("Promise rejected");
        }
    }, 15000); 
});

document.querySelector("button").addEventListener("click", function() {
    promise.then(
        (result) => {
            alert("Success: " + result);
        },
        (error) => {
            alert("Error: " + error);
        }
    );
});
