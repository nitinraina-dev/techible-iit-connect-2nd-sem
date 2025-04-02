# 🔁 **Recursion in JavaScript**  
Recursion is a technique where a function **calls itself** until a base condition is met. It is commonly used for problems that can be broken down into **smaller subproblems**, such as factorial, Fibonacci, and tree traversal.

---

## **🔹 1. Understanding Recursion**
A recursive function has **two parts**:  
1. **Base Case** → The condition to stop recursion.  
2. **Recursive Case** → The function calls itself with a smaller input.

### **Example: Countdown using Recursion**
```js
function countdown(n) {
    if (n <= 0) { // Base Case
        console.log("Done!");
        return;
    }
    console.log(n);
    countdown(n - 1); // Recursive Call
}

countdown(5);
```
### **🔍 How it works?**
```
countdown(5)
 ↓
countdown(4)
 ↓
countdown(3)
 ↓
countdown(2)
 ↓
countdown(1)
 ↓
countdown(0)  // Base case met: "Done!"
```

---

## **🔹 2. Factorial using Recursion**
Factorial of `n` (`n!`) is:
```
n! = n × (n-1) × (n-2) × ... × 1
```
Example:  
```
5! = 5 × 4 × 3 × 2 × 1 = 120
```
### **Recursive Solution**
```js
function factorial(n) {
    if (n === 0 || n === 1) return 1; // Base Case
    return n * factorial(n - 1); // Recursive Call
}

console.log(factorial(5)); // Output: 120
```

### **How it Works?**
```
factorial(5) → 5 × factorial(4)
factorial(4) → 4 × factorial(3)
factorial(3) → 3 × factorial(2)
factorial(2) → 2 × factorial(1)
factorial(1) → 1 (Base case)
```

---

## **🔹 3. Fibonacci Sequence using Recursion**
The Fibonacci sequence:
```
0, 1, 1, 2, 3, 5, 8, 13, ...
```
Formula:
```
fib(n) = fib(n-1) + fib(n-2)
```
### **Recursive Solution**
```js
function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // Output: 8
```
💡 **Problem?**  
This has **exponential time complexity O(2ⁿ)**, making it slow for large `n`. We can optimize it using **memoization**.

### **Optimized Fibonacci (Memoization)**
```js
function fibonacciMemo(n, memo = {}) {
    if (n in memo) return memo[n]; // Return if already computed
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    return memo[n];
}

console.log(fibonacciMemo(50)); // Fast!
```

---

## **🔹 4. Sum of an Array using Recursion**
```js
function sumArray(arr, index = 0) {
    if (index === arr.length) return 0; // Base case
    return arr[index] + sumArray(arr, index + 1);
}

console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
```

---

## **🔹 5. Reverse a String using Recursion**
```js
function reverseString(str) {
    if (str === "") return ""; // Base case
    return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("hello")); // Output: "olleh"
```

---

## **🔹 6. Traversing a Nested Object using Recursion**
```js
function printNested(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "object") {
            printNested(obj[key]); // Recursive call
        } else {
            console.log(`${key}: ${obj[key]}`);
        }
    }
}

let data = {
    name: "Alice",
    info: {
        age: 25,
        address: {
            city: "New York",
            zip: 10001
        }
    }
};

printNested(data);
```

---

## **🔹 7. Tree Traversal (Recursive)**
### **Example Tree**
```js
let tree = {
    value: 1,
    children: [
        { value: 2, children: [{ value: 4, children: [] }, { value: 5, children: [] }] },
        { value: 3, children: [{ value: 6, children: [] }, { value: 7, children: [] }] }
    ]
};
```

### **Recursive Tree Traversal**
```js
function traverseTree(node) {
    console.log(node.value);
    for (let child of node.children) {
        traverseTree(child); // Recursive call
    }
}

traverseTree(tree);
```
📌 **Output:**  
```
1
2
4
5
3
6
7
```

---

## **⏳ Recursion vs Iteration**
| Feature  | Recursion  | Iteration  |
|----------|-----------|-----------|
| Memory Usage | Higher (stack calls) | Lower |
| Readability | Sometimes easier | Usually simpler |
| Performance | Slower for deep recursion | Faster |

⚠ **Stack Overflow:** Too many recursive calls can cause a **stack overflow** error. Use **iteration** or **tail recursion optimization** (if supported).

---

## **🎯 Key Takeaways**
- A recursive function **calls itself** until a base case is met.
- Useful for **problems with repetitive subproblems** (e.g., factorial, Fibonacci, tree traversal).
- Avoid deep recursion in JavaScript (use iteration or memoization when necessary).
- Be cautious of **stack overflow errors** in deep recursion.

---

🔥 **Want more practice?** Try implementing:
1. **Power function:** `power(base, exponent)`
2. **Find maximum in an array recursively**
3. **Checking if a number is a palindrome**

