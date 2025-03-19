

## **1️⃣ Objects in JavaScript**
An **object** is like a real-world thing that has properties. Imagine a **car**: it has a **color**, a **brand**, and a **speed**.  

### **Example 1: Creating an Object**
```js
let car = {
  brand: "Tesla",
  color: "Red",
  speed: 200
};

console.log(car.brand);  // Tesla
console.log(car.color);  // Red
console.log(car.speed);  // 200
```

### **Example 2: Adding & Changing Values**
```js
car.model = "Model X";  // Adding a new property
car.speed = 250;  // Changing speed

console.log(car.model); // Model X
console.log(car.speed); // 250
```

### **Example 3: Using Objects Inside an Array**
```js
let students = [
  { name: "John", age: 10, grade: "5th" },
  { name: "Emma", age: 11, grade: "6th" }
];

console.log(students[0].name); // John
console.log(students[1].grade); // 6th
```

---

## **2️⃣ Arrays in JavaScript**
An **array** is like a list where you store multiple things together.

### **Example 1: Creating an Array**
```js
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]);  // Apple
console.log(fruits[1]);  // Banana
console.log(fruits[2]);  // Mango
```

### **Example 2: Adding & Removing Items**
```js
fruits.push("Orange");  // Adds to end
console.log(fruits);  // ["Apple", "Banana", "Mango", "Orange"]

fruits.pop();  // Removes last item
console.log(fruits);  // ["Apple", "Banana", "Mango"]

fruits.unshift("Pineapple");  // Adds to start
console.log(fruits);  // ["Pineapple", "Apple", "Banana", "Mango"]

fruits.shift();  // Removes first item
console.log(fruits);  // ["Apple", "Banana", "Mango"]
```

### **Example 3: Looping Through an Array**
```js
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

---

## **3️⃣ If-Else in JavaScript**
"If" checks if something is **true** and does something. If not, "else" runs.

### **Example 1: Simple If-Else**
```js
let age = 10;

if (age >= 18) {
  console.log("You can vote!");
} else {
  console.log("You cannot vote yet.");
}
```

### **Example 2: If-Else with Multiple Conditions**
```js
let marks = 85;

if (marks >= 90) {
  console.log("Grade: A+");
} else if (marks >= 80) {
  console.log("Grade: A");
} else if (marks >= 70) {
  console.log("Grade: B");
} else {
  console.log("You need to study more!");
}
```

---

## **4️⃣ Switch Case in JavaScript**
Instead of using **if-else** multiple times, **switch** is a cleaner way to check values.

### **Example 1: Days of the Week**
```js
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day!");
}
```

### **Example 2: Fruit Prices**
```js
let fruit = "Mango";

switch (fruit) {
  case "Apple":
    console.log("Apples cost $2 each.");
    break;
  case "Mango":
    console.log("Mangoes cost $3 each.");
    break;
  case "Banana":
    console.log("Bananas cost $1 each.");
    break;
  default:
    console.log("Sorry, we don't have that fruit.");
}
```

---

## **Conclusion**
Now you know:  
✅ **Objects** store key-value pairs.  
✅ **Arrays** store multiple values.  
✅ **If-Else** helps make decisions.  
✅ **Switch Case** makes multiple choices easy.  

🔥 **Practice Idea:**  
Try making an **object for yourself** with properties like your **name, age, favorite color, and hobbies**! 🚀