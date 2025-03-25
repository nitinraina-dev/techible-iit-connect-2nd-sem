Let's dive deep into **functions** and **loops** in JavaScript, breaking down their core concepts, use cases, and best practices.

---

## **Functions in JavaScript**
Functions are reusable blocks of code that perform a specific task. They help **modularize** and **organize** code efficiently.

### **1. Function Declarations**
A function declaration is the most common way to define a function in JavaScript.

#### **Syntax:**
```js
function functionName(parameters) {
    // Function body
    return result; // Optional
}
```

#### **Example:**
```js
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Nitin")); // Output: Hello, Nitin!
```

- Functions declared this way are **hoisted**, meaning they can be called before their definition.

---

### **2. Function Expressions**
A function expression is when a function is assigned to a variable.

#### **Example:**
```js
const greet = function(name) {
    return `Hello, ${name}!`;
};

console.log(greet("Nitin")); // Output: Hello, Nitin!
```
- **Not hoisted**: You must define it before calling.

---

### **3. Arrow Functions (ES6)**
Arrow functions provide a **shorter syntax** and automatically bind `this`.

#### **Syntax:**
```js
const functionName = (parameters) => expression;
```

#### **Example:**
```js
const greet = (name) => `Hello, ${name}!`;

console.log(greet("Nitin")); // Output: Hello, Nitin!
```

- If only **one parameter**, you can **omit parentheses**:  
  ```js
  const square = x => x * x;
  ```
- If multiple lines, use `{}` and `return`:
  ```js
  const add = (a, b) => {
      return a + b;
  };
  ```

### **Arrow Functions vs Regular Functions**
| Feature          | Arrow Functions            | Regular Functions          |
|-----------------|--------------------------|--------------------------|
| `this` behavior | Lexically bound (`this` comes from surrounding scope) | `this` refers to the function object itself |
| Hoisting        | No                        | Yes |
| `arguments` object | Not available | Available |

---

## **Callbacks in JavaScript**
A **callback function** is a function passed as an argument to another function. It is commonly used in **asynchronous programming**.

#### **Example:**
```js
function processUser(name, callback) {
    console.log(`Processing ${name}...`);
    callback();
}

function onComplete() {
    console.log("Process completed!");
}

processUser("Nitin", onComplete);
```
Output:
```
Processing Nitin...
Process completed!
```

### **Common Uses of Callbacks**
1. **Event handling:**
   ```js
   document.getElementById("btn").addEventListener("click", () => {
       console.log("Button clicked!");
   });
   ```
2. **Asynchronous API calls:**
   ```js
   setTimeout(() => {
       console.log("Executed after 2 seconds!");
   }, 2000);
   ```

---

## **Loops in JavaScript**
Loops are used to execute a block of code multiple times.

### **1. `for` Loop**
Used when the number of iterations is known.

#### **Syntax:**
```js
for (initialization; condition; increment/decrement) {
    // Code to execute
}
```

#### **Example:**
```js
for (let i = 1; i <= 5; i++) {
    console.log(`Iteration ${i}`);
}
```

---

### **2. `while` Loop**
Used when the number of iterations is **unknown** (depends on a condition).

#### **Example:**
```js
let i = 1;
while (i <= 5) {
    console.log(`Iteration ${i}`);
    i++;
}
```

---

### **3. Higher-Order Array Loops (`map`, `filter`, `reduce`)**
ES6 introduced **array methods** that provide better readability and performance.

#### **`map()` – Transform an array**
Applies a function to each element and returns a new array.

```js
const numbers = [1, 2, 3, 4];
const squares = numbers.map(num => num * num);

console.log(squares); // Output: [1, 4, 9, 16]
```

---

#### **`filter()` – Filter elements**
Returns a new array containing elements that satisfy a condition.

```js
const numbers = [10, 15, 20, 25, 30];
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // Output: [10, 20, 30]
```

---

#### **`reduce()` – Accumulate values**
Reduces an array to a single value.

```js
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);

console.log(sum); // Output: 10
```

---

## **Comparison of Loops**
| Loop Type | Use Case | Example |
|-----------|---------|---------|
| `for` | When you know the exact number of iterations | Loop through numbers 1 to 10 |
| `while` | When the number of iterations is unknown | Read input until user enters "stop" |
| `map` | Transform each element in an array | Convert Fahrenheit to Celsius |
| `filter` | Select specific elements | Get students who passed an exam |
| `reduce` | Compute a single value from an array | Find the total price of products |

---

## **Practice Problems**
1. **Write a function using a callback** that processes an order:
   ```js
   function orderFood(order, callback) {
       console.log(`Order placed for: ${order}`);
       setTimeout(() => {
           callback(order);
       }, 2000);
   }

   function orderReady(order) {
       console.log(`Your ${order} is ready!`);
   }

   orderFood("Pizza", orderReady);
   ```
2. **Use `map` to double each element in an array.**
3. **Use `filter` to get all numbers greater than 50 in an array.**
4. **Use `reduce` to find the total of an array of prices.**
5. **Create a function that runs a `while` loop until a random number is greater than 0.9.**

---

This covers **functions, callbacks, and loops** in depth.





