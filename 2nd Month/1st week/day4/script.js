//numbers greater than 50 in an array
//guess game
//print star pattern
//factorial
// program to find the factorial of a number

// take input from the user
// const number = parseInt(prompt('Enter a positive integer: '));

// checking if number is negative
// if (number < 0) {
//     console.log('Error! Factorial for negative number does not exist.');
// }

// if number is 0
// else if (number === 0) {
//     console.log(`The factorial of ${number} is 1.`);
// }

// if number is positive
// else {
//     let fact = 1;
//     for (i = 1; i <= number; i++) {
//         fact *= i;
//     }
//     console.log(`The factorial of ${number} is ${fact}.`);
// }







// arr = [3, 5, 6, 9, 0, 1, 2, 99]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
//         console.log("fuzzbuzz");

//     } else if (arr[i] % 3 === 0) {
//         console.log("fuzz");

//     } else if (arr[i] % 5 === 0) {
//         console.log("buzz");

//     } else {
//         console.log("not divisible");

//     }
// }

// for(let i=0;i<=20;i+=2){
// console.log(i);
// }

// for(let i=10;i>0;i--){
// console.log(i);
// }

let sum = 0
for (let i = 1; i <= 10; i++) {

    sum = sum + i;
    // sum =0+1;
    // sum=1+2;
    // sum=3+3;
    // sum=6+4;
    // sum=10+5;

    console.log(`sum is ${sum} and i is ${i}`);

}
console.log(sum);
