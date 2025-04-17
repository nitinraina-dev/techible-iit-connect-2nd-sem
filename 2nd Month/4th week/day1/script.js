// document.querySelector(".target").addEventListener("click",(e)=>{
//     console.log(e.target)
// })

// document.getElementsByClassName("btn")[0].addEventListener("click", function(e) {
        //     alert("Button clicked!");
        //     console.log(e)
        // });

        // document.getElementsByTagName("div")[1].addEventListener("click", function(e) {
            
        //     console.log(e.currentTarget)
        // });
        // document.querySelector("form").addEventListener("submit", function(e) {
        //     e.preventDefault(); // Prevent the default form submission
        //     alert("Form submitted!");
        // });

// let buttons=document.querySelectorAll("button");

// Array.from(buttons).map((button,index)=>{
//     button.addEventListener("click",function(e){
//         console.log(`button ${index + 1} clicked`);
//     })
// })

document.querySelector(".target").addEventListener("click",(e)=>{
    if(e.target.tagName==="BUTTON"){
        console.log(`${e.target.textContent} clicked`)
    }else{
        return
    }
}
)














document.getElementById("child").addEventListener("click", (e) => {
    // e.stopPropagation();
    console.log("Child clicked");
  });
  


  document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent capturing");
  }, true);