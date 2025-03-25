
---

## **1️⃣ Basic `for` Loop - Counting Balloons 🎈**
**Concept:** Use a `for` loop to count and display balloons.  

```js
for (let i = 1; i <= 5; i++) {
    console.log(`🎈 Balloon ${i} is flying!`);
}
```
**Output:**
```
🎈 Balloon 1 is flying!
🎈 Balloon 2 is flying!
🎈 Balloon 3 is flying!
🎈 Balloon 4 is flying!
🎈 Balloon 5 is flying!
```

---

## **2️⃣ `while` Loop - Countdown Rocket Launch 🚀**
**Concept:** A `while` loop to launch a rocket.  

```js
let countdown = 5;

while (countdown > 0) {
    console.log(`🚀 Launching in... ${countdown}`);
    countdown--;
}

console.log("🔥 Boom! The rocket has launched!");
```
**Output:**
```
🚀 Launching in... 5
🚀 Launching in... 4
🚀 Launching in... 3
🚀 Launching in... 2
🚀 Launching in... 1
🔥 Boom! The rocket has launched!
```

---

## **3️⃣ `forEach()` - Animal Sounds 🐶🐱🐮**
**Concept:** Loop through an array of animals and make them speak.  

```js
let animals = ["🐶 Dog", "🐱 Cat", "🐮 Cow"];

animals.forEach(animal => {
    console.log(`${animal} says Hello!`);
});
```
**Output:**
```
🐶 Dog says Hello!
🐱 Cat says Hello!
🐮 Cow says Hello!
```

---

## **4️⃣ `map()` - Double the Chocolates 🍫🍫**
**Concept:** Use `map()` to **double** the number of chocolates each friend gets.  

```js
let chocolates = [1, 2, 3, 4];

let doubleChocolates = chocolates.map(choco => choco * 2);

console.log(doubleChocolates);
```
**Output:**
```
[2, 4, 6, 8]
```

---

## **5️⃣ `filter()` - Pick Only Red Apples 🍎**
**Concept:** Use `filter()` to find **only red apples** from a basket.  

```js
let fruits = ["🍎 Red Apple", "🍌 Banana", "🍏 Green Apple", "🍎 Red Apple"];

let redApples = fruits.filter(fruit => fruit.includes("Red Apple"));

console.log(redApples);
```
**Output:**
```
["🍎 Red Apple", "🍎 Red Apple"]
```

---

## **6️⃣ `reduce()` - Counting Coins 💰**
**Concept:** Use `reduce()` to count the **total coins in a piggy bank.**  

```js
let coins = [1, 2, 5, 10, 1, 5];

let totalCoins = coins.reduce((total, coin) => total + coin, 0);

console.log(`💰 Total coins: ${totalCoins}`);
```
**Output:**
```
💰 Total coins: 24
```
