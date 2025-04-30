
---

## ✅ 1. `.then()` — Handle Resolved Value

`.then()` runs when the Promise is **fulfilled** (i.e., successful).

```js
const promise = Promise.resolve("🎉 Success!");

promise.then(result => {
  console.log("Resolved value:", result); // 🎉 Success!
});
```

---

## ✅ 2. `.catch()` — Handle Rejected Value

`.catch()` runs when the Promise is **rejected** (i.e., failed).

```js
const promise = Promise.reject("❌ Error happened");

promise.catch(error => {
  console.log("Caught error:", error); // ❌ Error happened
});
```

---

## ✅ 3. `.finally()` — Run After Settle (Success or Failure)

`.finally()` runs **no matter what** (after `.then()` or `.catch()`).

```js
Promise.resolve("✅ Done")
  .then(result => console.log("Result:", result))
  .catch(err => console.log("Error:", err))
  .finally(() => console.log("🧹 Cleaned up"));  // Always runs
```

Use this for cleanup like hiding a loader, closing modals, etc.

---

## ✅ 4. `Promise.all()` — Wait for All Promises

Runs multiple Promises in **parallel**, returns when **all are done**.

```js
const p1 = Promise.resolve("🧃 Juice");
const p2 = Promise.resolve("🍞 Bread");

Promise.all([p1, p2])
  .then(results => {
    console.log("All done:", results); // ["🧃 Juice", "🍞 Bread"]
  })
  .catch(err => {
    console.error("One failed:", err);
  });
```

🛑 If **any one fails**, it jumps to `.catch()` immediately.

---

## ✅ 5. `Promise.race()` — First to Finish Wins

Returns the result of the **first settled** Promise (resolved OR rejected).

```js
const fast = new Promise(resolve => setTimeout(() => resolve("🚀 Fast!"), 100));
const slow = new Promise(resolve => setTimeout(() => resolve("🐢 Slow..."), 1000));

Promise.race([fast, slow])
  .then(result => console.log("Winner:", result)); // 🚀 Fast!
```

Useful for timeouts, fallbacks, etc.

---

## ✅ 6. `Promise.allSettled()` — All Results (Even Failed Ones)

Returns an array of **status + value/reason** for all Promises.

```js
const p1 = Promise.resolve("✅ OK");
const p2 = Promise.reject("❌ Fail");

Promise.allSettled([p1, p2])
  .then(results => {
    console.log(results);
    /*
    [
      { status: "fulfilled", value: "✅ OK" },
      { status: "rejected", reason: "❌ Fail" }
    ]
    */
  });
```

Great when you want to **run all tasks** and handle each outcome individually.

---

## ✅ 7. `Promise.any()` — First One to Fulfill

Returns the first Promise that **fulfills**, ignoring rejections.

```js
const p1 = Promise.reject("🙅 Fail 1");
const p2 = Promise.resolve("🎯 Success!");
const p3 = Promise.resolve("✅ Another one");

Promise.any([p1, p2, p3])
  .then(result => console.log("First success:", result)) // 🎯 Success!
  .catch(() => console.log("All failed"));
```

🧠 If **all Promises fail**, `.catch()` is triggered.

---

## 🔁 Recap Table

| Feature               | Purpose                                  |
|------------------------|------------------------------------------|
| `.then()`              | Handle resolved value                    |
| `.catch()`             | Handle rejected value                    |
| `.finally()`           | Always runs at the end                   |
| `Promise.all()`        | Waits for all Promises to succeed        |
| `Promise.race()`       | Resolves/rejects with the first one      |
| `Promise.allSettled()` | Waits for all to settle (success/failure)|
| `Promise.any()`        | Returns first successful one             |

---
