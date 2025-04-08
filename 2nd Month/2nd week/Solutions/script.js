// function addition(num1,num2){
// return num1+num2;
// }
// let a =  parseInt(prompt("enter a number"));
// let b= parseInt(prompt ("enter a numbr"));
// console.log(addition(a,b));
// ;


// function subtraction(num1,num2){
// return num1-num2;
// }
// let c =  parseInt(prompt("enter a number"));
// let d= parseInt(prompt ("enter a numbr"));
// console.log(subtraction(c,d));


// function multiplication(num1,num2){
// return num1*num2;
// }
// let e =  parseInt(prompt("enter a number"));
// let f= parseInt(prompt ("enter a numbr"));  
// console.log(multiplication(e,f));




// let division =(num1,num2)=>{
// if(num2 === 0){
//     return ;
// }
// else{
//     return num1/num2;
// }
// }

// console.log( division(10,4));





// function evenOrOdd(num){
// if(num % 2 ===0){
// return "even"
// }else{
//     return "odd"
// }


//     // return num%2===0 ? "even" : "odd";
// }


function maxNum(a,b,c){
 return  Math.max(a,b,c);
}

function minNum(a,b,c){
    return Math.min(a,b,c);
};







let fact=(n)=>{
    // if(n===0 || n===1){
    //     return 1;
    // }
    // else{
    //     return n*fact(n-1);
    // }

    for (let i = n-1; i >= 1; i--){
        n =n * i;
    }
    return n;
    // return n===0 || n===1 ? 1 : n*fact(n-1);
}



function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
if(isPrime(7)){
    console.log("prime");
}
else{
    console.log("not prime");
}





function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
};



