let arr=[1,3,42,4];
console.log(arr);




let newArr=arr.map((curr,ind)=>{
    console.log(curr,ind);
    return curr*5
    
})


console.log(newArr);
