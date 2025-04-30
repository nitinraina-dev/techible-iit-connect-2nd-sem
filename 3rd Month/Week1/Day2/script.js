
function returnNumber() {
    setTimeout(() => {
        return 1;
    }, 2000)

}

console.log(returnNumber())









function returnNumber(callback) {
    setTimeout(() => {
      callback(1); // Call the callback with the number 1
    }, 2000);
  }
  



  function handleResult(result) {
    console.log("Received:", result);
  }


  
  returnNumber(handleResult);


  
  