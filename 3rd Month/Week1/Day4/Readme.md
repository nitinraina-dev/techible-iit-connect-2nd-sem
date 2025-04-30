Let's go **step-by-step**, from **basic to advanced**, to master **Promises** in JavaScript. This guide is structured like a mini-course.

---

# 🧠 JavaScript Promises: From Basic to Advanced

---

## 🔹 1. **What is a Promise?**

A **Promise** is a placeholder for a value that will **eventually** be available (or fail).

### States of a Promise:
- `pending`: still running
- `fulfilled`: finished successfully (calls `resolve`)
- `rejected`: failed (calls `reject`)

---

## 🔹 2. **Creating a Basic Promise**

```js
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("✅ Success!");
    // Or: reject("❌ Failed!");
  }, 1000);
});
```

---

## 🔹 3. **Using `.then()` and `.catch()`**

```js
myPromise
  .then(result => console.log("Resolved:", result))
  .catch(error => console.error("Rejected:", error));
```

- `.then()` → runs if resolved
- `.catch()` → runs if rejected

---

## 🔹 4. **Chaining Promises**

```js
function double(num) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(num * 2), 500);
  });
}

double(2)
  .then(result => double(result))
  .then(result => double(result))
  .then(result => console.log("Final result:", result));  // 16
```

Each `.then()` passes its result to the next.

---

## 🔹 5. **Handling Errors in Chain**

```js
doSomething()
  .then(result => doNextThing(result))
  .then(result => throw new Error("Oops"))
  .catch(err => {
    console.error("Caught an error:", err.message);
  });
```

If any `.then()` throws, the chain jumps to `.catch()`.

---

## 🔹 6. **Promise.all() — Run in Parallel**

Wait for **all** Promises to resolve:

```js
Promise.all([
  fetchData1(),
  fetchData2(),
  fetchData3()
])
.then(results => {
  console.log("All done:", results); // Array of results
})
.catch(err => console.error("One failed:", err));
```

---

## 🔹 7. **Promise.race() — First wins**

```js
Promise.race([
  slowFetch(),
  fastFetch()
])
.then(result => console.log("First finished:", result));
```

Returns the **first** settled Promise (resolve or reject).

---

## 🔹 8. **Promise.allSettled() — Wait for all outcomes**

```js
Promise.allSettled([
  Promise.resolve("A"),
  Promise.reject("B"),
])
.then(results => {
  console.log(results);
  /*
  [
    { status: "fulfilled", value: "A" },
    { status: "rejected", reason: "B" }
  ]
  */
});
```

Useful when you **don’t want to stop** if one fails.

---

## 🔹 9. **Promise.any() — First to Fulfill**

```js
Promise.any([
  Promise.reject("A"),
  Promise.resolve("B"),
  Promise.resolve("C")
])
.then(result => console.log(result))  // B
.catch(err => console.log("All failed"));
```

Only rejects if **all fail**.

---

## 🔹 10. **Creating Custom Delay with Promises**

```js
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

wait(1000).then(() => console.log("1 second passed"));
```

---

## 🔹 11. **Error Propagation in Async Chains**

You can return `Promise.reject(...)` or throw an error to stop the chain:

```js
function risky() {
  return Promise.reject("Something went wrong");
}

risky()
  .then(() => console.log("Success")) // skipped
  .catch(err => console.error("Caught:", err));
```

---

## 🔹 12. **Combining with `async/await`**

Promises work beautifully with `async/await`:

```js
async function run() {
  try {
    const result = await myPromise;
    console.log("Success:", result);
  } catch (err) {
    console.error("Error:", err);
  }
}
```

---

## Summary Table:

| Feature              | Purpose                                  |
|----------------------|------------------------------------------|
| `.then()`            | Handle resolved value                    |
| `.catch()`           | Handle rejected value                    |
| `.finally()`         | Run after settled (success or failure)   |
| `Promise.all()`      | Wait for all Promises                    |
| `Promise.race()`     | Wait for the first to finish             |
| `Promise.allSettled()`| Get result of all, even if failed       |
| `Promise.any()`      | First successful one                     |

---





---

## 🍽️ Real-World Analogy: Ordering Pizza

### Imagine this flow:

1. Place an order 🍕
2. Restaurant prepares it 🔥
3. It gets delivered 🚗
4. You eat it 😋

---

### ✅ Step-by-step with Promises

```js
function placeOrder() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("📦 Order placed");
      resolve("Pepperoni Pizza");
    }, 1000);
  });
}

function cookPizza(order) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("👨‍🍳 Cooking", order);
      resolve(`${order} cooked`);
    }, 2000);
  });
}

function deliverPizza(cookedPizza) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("🚚 Delivering", cookedPizza);
      resolve(`${cookedPizza} delivered`);
    }, 1500);
  });
}

function eatPizza(deliveredPizza) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("😋 Eating", deliveredPizza);
      resolve("Yum! Done.");
    }, 1000);
  });
}
```

---

### 🔗 Chaining with `.then()`

```js
placeOrder()
  .then(order => cookPizza(order))
  .then(cooked => deliverPizza(cooked))
  .then(delivered => eatPizza(delivered))
  .then(finalMessage => console.log("✅", finalMessage))
  .catch(error => console.error("❌ Error:", error));
```

---

### ✅ Benefits:
- Every step returns a Promise
- Clean chaining with `.then()`
- Errors handled once with `.catch()`

---

### 🔄 Bonus: Same example with `async/await` (optional)

```js
async function orderFlow() {
  try {
    const order = await placeOrder();
    const cooked = await cookPizza(order);
    const delivered = await deliverPizza(cooked);
    const finalMessage = await eatPizza(delivered);

    console.log("✅", finalMessage);
  } catch (error) {
    console.error("❌ Error:", error);
  }
}

orderFlow();
```

---
