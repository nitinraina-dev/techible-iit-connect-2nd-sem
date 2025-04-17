let con=document.getElementById("container");
let newElt=document.createElement("div");
newElt.innerHTML=`
        <div class="item-3">3</div>`;

document.querySelector(".btn").addEventListener("click",

 ()=>{
    con.appendChild(newElt);
 }   
)