// function double(num) {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(num * 2), 500);
//     });
// }


// function greet() {
//     console.log("Hello");
// }

// greet();



// double(2)
//     .then((result) => {
//         console.log("First result:", result);

//         return double(result);
//     })
//     .then((result) => {
//         console.log("Second result:", result);

//         return double(result);
//     })
//     .then((result) => {
//         console.log("Third result:", result);

//         return double(result);
//     }
//     )
//     .then(result => console.log("Final result:", result));







// function fetchData1() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(2), 500);
//     });
// }

// function fetchData2() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(2), 500);
//     });
// }

// function fetchData3() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(2), 500);
//     });
// }

// function fetchData4() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(2), 500);
//     });
// }


// Promise.all([fetchData1(), fetchData2(), fetchData3(), fetchData4()])
//     .then((results) => {

//         console.log("results:", results);
//     })
//     .catch((error) => {
//         console.error("Error fetching data:", error);
//     });


// slowFetch = () => {


//     return new Promise((resolve) => {
//         setTimeout(() => resolve("Slow fetch completed"), 2000);
//     });
// }
// fastFetch = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("Fast fetch completed"), 1000);
//     }
//     );
// }


// Promise.race([
//     slowFetch(),
//     fastFetch()
// ])
//     .then(result => console.log("First finished:", result));










    // let newPromise = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         reject("Promise rejected");
    //     }, 1000);
    // }
    // );


    // async function run() {
    //     try {
    //       const result = await newPromise;
    //       console.log("Success:", result);
    //     } catch (err) {
    //       console.error("Error:", err);
    //     }



    //   }
      

    //   run()



    