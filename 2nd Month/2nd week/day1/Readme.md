The `map()` method in JavaScript is used to transform elements of an array by applying a function to each element. It returns a **new array** with the transformed values, without modifying the original array.

---

## **1. Syntax**
```js
array.map(callbackFunction(currentValue, index, array), thisArg)
```
### **Parameters:**
- **callbackFunction** → A function that runs for each element in the array.
  - `currentValue` → The current element being processed.
  - `index` (optional) → The index of the current element.
  - `array` (optional) → The array `map()` was called on.
- **thisArg** (optional) → A value to use as `this` inside the callback function.

---

## **2. Basic Example**
```js
const numbers = [1, 2, 3, 4];
const squared = numbers.map(num => num * num);

console.log(squared); // [1, 4, 9, 16]
console.log(numbers); // [1, 2, 3, 4] (original array remains unchanged)
```

---

## **3. Using `index` and `array` parameters**
```js
const names = ["Alice", "Bob", "Charlie"];

const nameWithIndex = names.map((name, index) => `${index + 1}: ${name}`);

console.log(nameWithIndex);
// ["1: Alice", "2: Bob", "3: Charlie"]
```

---

## **4. Mapping Over an Array of Objects**
### **Transforming Object Properties**
```js
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
];

const names = users.map(user => user.name);
console.log(names); // ["Alice", "Bob"]
```

---

## **5. Chaining `map()` with Other Methods**
You can combine `map()` with methods like `filter()` and `reduce()`.

### **Example: Filter even numbers and square them**
```js
const numbers = [1, 2, 3, 4, 5, 6];

const squaredEvens = numbers
    .filter(num => num % 2 === 0) // [2, 4, 6]
    .map(num => num * num); // [4, 16, 36]

console.log(squaredEvens);
```

---

## **6. `map()` vs. `forEach()`**
| Feature  | `map()` | `forEach()` |
|----------|--------|------------|
| Returns a new array? | ✅ Yes | ❌ No |
| Modifies the original array? | ❌ No | ❌ No |
| Used for transformation? | ✅ Yes | ❌ No (only used for side effects) |

### **Example**
```js
const nums = [1, 2, 3];

const doubled = nums.map(num => num * 2); // [2, 4, 6]
console.log(doubled);

nums.forEach(num => console.log(num * 2)); // Just prints values, no new array
```

---

## **7. `map()` with `thisArg`**
The optional `thisArg` allows you to pass an object as `this` inside the callback.

```js
const multiplier = {
    factor: 2,
    multiply(num) {
        return num * this.factor;
    }
};

const numbers = [1, 2, 3];
const result = numbers.map(multiplier.multiply, multiplier);

console.log(result); // [2, 4, 6]
```

---

## **8. Common Mistakes**
### **Not Returning a Value in Callback**
```js
const numbers = [1, 2, 3];

const incorrect = numbers.map(num => {
    num * 2; // No return statement!
});

console.log(incorrect); // [undefined, undefined, undefined]
```
✅ Fix:
```js
const correct = numbers.map(num => num * 2);
console.log(correct); // [2, 4, 6]
```

---

## **9. Using `map()` with Promises (Async)**
Since `map()` executes synchronously, using it with async functions returns an array of **promises**.

```js
const fetchData = async (id) => {
    return `Data for ID: ${id}`;
};

const ids = [1, 2, 3];

const promises = ids.map(fetchData);
console.log(promises); // [Promise, Promise, Promise]

// To get actual values, use Promise.all
Promise.all(promises).then(data => console.log(data));
```

---

## **10. Alternative: `flatMap()`**
`flatMap()` is like `map()`, but it **flattens** the resulting array by one level.

```js
const nestedArray = ["hello", "world"];

const mapped = nestedArray.map(word => word.split(""));
console.log(mapped); // [["h", "e", "l", "l", "o"], ["w", "o", "r", "l", "d"]]

const flatMapped = nestedArray.flatMap(word => word.split(""));
console.log(flatMapped); // ["h", "e", "l", "l", "o", "w", "o", "r", "l", "d"]
```

---

## **Summary**
- `map()` creates a **new array** by applying a function to each element.
- It doesn’t modify the original array.
- Works well with **array transformations**, especially objects.
- Can be **chained** with other methods like `filter()`, `reduce()`.
- Avoid common mistakes like forgetting to return values.


### **JavaScript `filter()` Method**  
The `filter()` method in JavaScript is used to **create a new array** containing only the elements that pass a specified condition. It does **not modify the original array**.

---

## **1. Syntax**
```js
array.filter(callbackFunction(currentValue, index, array), thisArg);
```
### **Parameters:**
- **callbackFunction** → Function executed for each element.
  - `currentValue` → The current element.
  - `index` (optional) → The index of the current element.
  - `array` (optional) → The array `filter()` was called on.
- **thisArg** (optional) → A value to use as `this` inside the callback function.

---

## **2. Basic Example**
```js
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // [2, 4, 6]
console.log(numbers); // [1, 2, 3, 4, 5, 6] (original array remains unchanged)
```

---

## **3. Filtering an Array of Objects**
### **Example: Filter users above age 25**
```js
const users = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 25 }
];

const olderUsers = users.filter(user => user.age > 25);
console.log(olderUsers);
// [{ name: "Alice", age: 30 }]
```

---

## **4. Filtering Out Falsy Values**
In JavaScript, falsy values include `false`, `0`, `""`, `null`, `undefined`, and `NaN`.

### **Example: Remove falsy values from an array**
```js
const values = [0, "Hello", "", false, 42, null, undefined, "JavaScript"];

const truthyValues = values.filter(Boolean);
console.log(truthyValues); // ["Hello", 42, "JavaScript"]
```
✅ **Tip:** Using `Boolean` as a callback removes falsy values.

---

## **5. Filtering with Index Parameter**
You can also use the index parameter inside `filter()`.

```js
const numbers = [10, 20, 30, 40, 50];

const filteredNumbers = numbers.filter((num, index) => index % 2 === 0);
console.log(filteredNumbers); // [10, 30, 50] (keeps elements at even indices)
```

---

## **6. Chaining `filter()` with Other Methods**
### **Example: Filter even numbers and double them using `map()`**
```js
const numbers = [1, 2, 3, 4, 5, 6];

const doubledEvens = numbers
    .filter(num => num % 2 === 0) // [2, 4, 6]
    .map(num => num * 2); // [4, 8, 12]

console.log(doubledEvens);
```

---

## **7. `filter()` vs. `map()` vs. `forEach()`**
| Feature  | `filter()` | `map()` | `forEach()` |
|----------|--------|--------|------------|
| Creates a new array? | ✅ Yes | ✅ Yes | ❌ No |
| Modifies original array? | ❌ No | ❌ No | ❌ No |
| Used for transformation? | ❌ No | ✅ Yes | ❌ No |
| Used for filtering? | ✅ Yes | ❌ No | ❌ No |

---

## **8. Using `filter()` with `thisArg`**
If you need to use `this` inside the callback function, you can pass `thisArg`.

```js
const threshold = {
    min: 10
};

const numbers = [5, 10, 15, 20];

const greaterThanMin = numbers.filter(function(num) {
    return num > this.min;
}, threshold);

console.log(greaterThanMin); // [15, 20]
```

---

## **9. Common Mistakes**
### **Forgetting to Return a Value**
```js
const numbers = [1, 2, 3, 4];

const incorrect = numbers.filter(num => {
    num % 2 === 0; // No return statement!
});

console.log(incorrect); // []
```
✅ **Fix:**
```js
const correct = numbers.filter(num => num % 2 === 0);
console.log(correct); // [2, 4]
```

---

## **10. Filtering Data from an API (Real-World Example)**
If you fetch data from an API, you can use `filter()` to extract relevant items.

```js
const products = [
    { name: "Laptop", price: 1000, category: "Electronics" },
    { name: "Phone", price: 500, category: "Electronics" },
    { name: "Shoes", price: 100, category: "Fashion" }
];

// Get only electronics
const electronics = products.filter(product => product.category === "Electronics");

console.log(electronics);
// [{ name: "Laptop", price: 1000, category: "Electronics" }, { name: "Phone", price: 500, category: "Electronics" }]
```

---

## **Summary**
- `filter()` creates a **new array** with elements that **pass a condition**.
- It **does not** modify the original array.
- Works well for **filtering objects**, **removing falsy values**, and **chaining with other array methods**.
- Be careful to **always return a value** inside the callback.

### **JavaScript `reduce()` Method**  
The `reduce()` method executes a **callback function** on each element of an array to **accumulate a single result**. It’s useful for summing values, flattening arrays, grouping data, and more.

---

## **1. Syntax**
```js
array.reduce(callbackFunction(accumulator, currentValue, index, array), initialValue)
```
### **Parameters:**
- **callbackFunction** → Function executed on each element.
  - `accumulator` → Stores the accumulated result.
  - `currentValue` → The current element being processed.
  - `index` (optional) → The index of the current element.
  - `array` (optional) → The array `reduce()` was called on.
- **initialValue** (optional) → The starting value for the accumulator.

---

## **2. Basic Example: Sum of Numbers**
```js
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum); // 15
```
**How it works:**
1. `acc = 0` (initial value)
2. `acc + 1 = 1`
3. `1 + 2 = 3`
4. `3 + 3 = 6`
5. `6 + 4 = 10`
6. `10 + 5 = 15`

---

## **3. Reduce Without `initialValue`**
If `initialValue` is **not provided**, the first element is used as the initial accumulator.

```js
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, num) => acc + num);

console.log(sum); // 15
```
**⚠️ Warning:**  
If the array is empty and **no `initialValue` is given**, `reduce()` throws an error.

---

## **4. Finding the Maximum Value**
```js
const numbers = [10, 5, 20, 8];

const max = numbers.reduce((acc, num) => (num > acc ? num : acc));

console.log(max); // 20
```

---

## **5. Counting Occurrences in an Array**
### **Example: Count the occurrences of each word**
```js
const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

const wordCount = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
}, {});

console.log(wordCount);
// { apple: 3, banana: 2, orange: 1 }
```

---

## **6. Flattening an Array**
```js
const nestedArray = [[1, 2], [3, 4], [5, 6]];

const flatArray = nestedArray.reduce((acc, curr) => acc.concat(curr), []);

console.log(flatArray); // [1, 2, 3, 4, 5, 6]
```

---

## **7. Grouping Objects by Property**
```js
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 }
];

const groupedByAge = people.reduce((acc, person) => {
    (acc[person.age] = acc[person.age] || []).push(person);
    return acc;
}, {});

console.log(groupedByAge);
// { 25: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 25 }], 30: [{ name: "Bob", age: 30 }] }
```

---

## **8. Combining `map()`, `filter()`, and `reduce()`**
```js
const numbers = [1, 2, 3, 4, 5, 6];

const sumOfEvenSquares = numbers
    .filter(num => num % 2 === 0) // [2, 4, 6]
    .map(num => num * num) // [4, 16, 36]
    .reduce((acc, num) => acc + num, 0); // 4 + 16 + 36 = 56

console.log(sumOfEvenSquares); // 56
```

---

## **9. `reduce()` vs. `map()` vs. `filter()`**
| Feature  | `reduce()` | `map()` | `filter()` |
|----------|--------|--------|------------|
| Returns a new array? | ❌ No | ✅ Yes | ✅ Yes |
| Used for transformation? | ✅ Yes | ✅ Yes | ❌ No |
| Used for filtering? | ✅ Yes | ❌ No | ✅ Yes |
| Can accumulate a single value? | ✅ Yes | ❌ No | ❌ No |

---

## **10. Common Mistakes**
### **1. Forgetting the `initialValue` (for empty arrays)**
```js
const emptyArray = [];

const sum = emptyArray.reduce((acc, num) => acc + num);
console.log(sum); // ❌ TypeError: Reduce of empty array with no initial value
```
✅ **Fix:**
```js
const sum = emptyArray.reduce((acc, num) => acc + num, 0);
console.log(sum); // 0
```

### **2. Modifying the `accumulator` directly (Instead of returning it)**
```js
const numbers = [1, 2, 3, 4];

const incorrect = numbers.reduce((acc, num) => {
    acc.push(num * 2); // ❌ Mutating accumulator
}, []);

console.log(incorrect); // ❌ Undefined
```
✅ **Fix:**
```js
const correct = numbers.reduce((acc, num) => {
    acc.push(num * 2);
    return acc;
}, []);

console.log(correct); // [2, 4, 6, 8]
```

---

## **Summary**
- `reduce()` **accumulates** values into a **single result**.
- It works for **summation, finding max/min, flattening arrays, grouping data**, and more.
- Always **provide an `initialValue`** when working with an empty array.
- Be mindful of **modifying the accumulator directly**—always return it.

