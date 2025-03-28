
// greet()

// function greet(){
//     console.log("Greetings");

// }

// let age=8;
// if(age>=18){
//     console.log("hello");

// }else{
//     greet();
// }


// const greet2 = function() {
//     console.log("Hello from a function expression!");
//   };

//   greet2();















let xyz = function (name) {
    console.log("greetings ", name);

};


xyz("nitin");


function divisibleBy2(num = 2) {
    if (num % 2 === 0) {
        console.log("even");

    } else {
        console.log("no");

    }
}

divisibleBy2()




// const abc = ()=>{
// console.log("i am an arrow function");

// }

// abc()


function subtraction(num1, num2) {
    let res = num1 - num2;
    return 99;

}

let c = subtraction(9, 3);
console.log(c);

console.log(subtraction(1, 2))



let mul = (a, b) => a * b;

console.log(mul(3, 6));






(function (name) {
    console.log(name);

})("nitin");



function processUser(name, callback) {
    console.log(`Processing user: ${name}`);
    callback();
}
function done() {
    console.log("abcd");

}








function calc(operation, num1, num2) {
    return operation(num1, num2);
}


function addition(a,b){
    return a+b;

}
function subtraction(a,b){
    return a-b;
    
}
function multiplication(a,b){
    return a*b;
    
}


console.log(
    calc(subtraction,1,2));



