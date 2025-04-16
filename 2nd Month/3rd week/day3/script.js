let notes = document.getElementsByClassName("note");
console.log(notes);
notes = Array.from(notes);

notes.forEach((note) => {
    console.log(note);
});

let headings = document.getElementsByTagName("h2");
console.log(headings);
Array.from(headings).forEach((heading)=>{
    console.log(heading);
    
})



let childInsideBox=document.querySelector(".box .child");
console.log(childInsideBox);

let childrenInsideBox=document.querySelectorAll(".box .child");
console.log(childrenInsideBox);



(childrenInsideBox).forEach((child)=>{
    console.log(child);
}
)
