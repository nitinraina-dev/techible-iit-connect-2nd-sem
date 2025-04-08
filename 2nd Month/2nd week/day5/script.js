function factorial(n) {
    if (n === 0 || n === 1) return 1; // Base Case
    return n * factorial(n - 1); // Recursive Call
}

console.log(factorial(5)); // Output: 120



function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // Output: 8


function reverseNumber(num) {
    return parseInt(num.toString().split("").reverse().join(""));
}


let s = "hello";
let a = s.split("").reverse().join("");
// a=['h','e','l','l','o']
let b = a.reverse();
// b=['o','l','l','e','h']
let c = b.join("");
// c='olleh'

let num = 12345;
let d = num.toString();
d = "12345";




function sumOfDigits(num) {
    return num.toString().split("").reduce((sum, digit) => sum + parseInt(digit), 0);
}



// 541
// "541".split("");
// ['5','4','1']


// ['5','4','1'].reduce((sum,digit)=>sum+parseInt(digit),0);



function isPalindrome(num) {
    let str = num.toString();
    return str === str.split("").reverse().join("");
}


// 5432;
// str="5432";
// return str ====  "5432".split("").reverse().join("");

return str= ['5','4','3','2'].reverse().join("");
return str === ['2','3','4','5'].join("");
return str === "2345";



isPalindrome(121)




function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}





function hcf(a,b){
if (b===0){
    return a;   
}

else {
    return hcf(b,a%b);
}


}



function gcdIterative(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}




