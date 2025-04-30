const timerId = setTimeout(() => {
    console.log("You won't see this");
  }, 3000);

  clearTimeout(timerId);
  


  const intervalId = setInterval(() => {
    console.log("⏳ This runs every 1 second");
  }, 1000);

  clearInterval(intervalId);


  let count = 1;












const id = setInterval(() => {
  console.log(count);
count++;
 if(count>5){
    clearInterval(id)
 }
}, 1000);