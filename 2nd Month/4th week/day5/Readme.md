Let's break down **`setTimeout`** and **`setInterval`** — two essential tools for working with time in JavaScript.

---

# ⏱️ `setTimeout` and `setInterval` Explained

---

## ✅ 1. `setTimeout(fn, delay)`

### 🔹 What it does:
Runs a function **once** after a specified time.

### 🧪 Example:
```js
setTimeout(() => {
  console.log("⏰ This runs after 2 seconds");
}, 2000); // delay in milliseconds
```

🕐 The function runs **once** after `2000ms` (2 seconds).

### 🔁 Cancel with `clearTimeout`
```js
const timerId = setTimeout(() => {
  console.log("You won't see this");
}, 3000);

clearTimeout(timerId); // Cancels the above timeout
```

---

## ✅ 2. `setInterval(fn, interval)`

### 🔹 What it does:
Runs a function **repeatedly** at a given time interval.

### 🧪 Example:
```js
const intervalId = setInterval(() => {
  console.log("⏳ This runs every 1 second");
}, 1000);
```

📌 This keeps running **every 1000ms** (until stopped).

### ❌ Cancel with `clearInterval`
```js
clearInterval(intervalId); // Stops the repeated calls
```

---

## 🔁 Example: Count from 1 to 5 with `setInterval`

```js
let count = 1;
const id = setInterval(() => {
  console.log(count);
  count++;
  if (count > 5) {
    clearInterval(id);
  }
}, 1000);
```

---

## 🧠 Difference Summary:

| Feature        | `setTimeout`                   | `setInterval`                |
|----------------|--------------------------------|------------------------------|
| Runs...        | Once after delay               | Repeatedly at intervals      |
| Use for...     | Delayed actions                | Repeating tasks (like clocks)|
| Cancel with... | `clearTimeout(id)`             | `clearInterval(id)`          |

---

## 🧪 Real-World Uses:

| Use Case               | Use               |
|------------------------|------------------|
| Splash screen delay     | `setTimeout`     |
| Auto-logout timer       | `setTimeout`     |
| Live clock updates      | `setInterval`    |
| Polling server every 5s | `setInterval`    |

---


