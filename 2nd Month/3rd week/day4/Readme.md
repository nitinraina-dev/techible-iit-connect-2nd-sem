
🎯 Goal: Change content, attributes, and styles using JavaScript

### ✅ What is the DOM?
The **DOM (Document Object Model)** is a tree-like structure representing your webpage in memory. Every HTML tag becomes an object you can access and manipulate using JavaScript.

---

### 🧩 1. `innerText`, `textContent`, `innerHTML`

| Property        | Description                                          | Notes |
|----------------|------------------------------------------------------|-------|
| `innerText`     | Gets/sets the **visible text** inside an element     | Ignores hidden text |
| `textContent`   | Gets/sets **all text**, including hidden ones        | Faster performance |
| `innerHTML`     | Gets/sets the **HTML content** (including tags)      | Useful for inserting HTML |

🔍 **Difference Example:**

```html
<p id="demo" style="display: none">Hi there!</p>
```

```js
console.log(demo.innerText);   // Returns "", since text is hidden
console.log(demo.textContent); // Returns "Hi there!"
```

---

### 🧩 2. `setAttribute` and `getAttribute`

These are used to **add, modify, or read attributes** of HTML elements.

```html
<img id="logo" src="logo1.png" alt="Old Logo">
```

```js
const logo = document.getElementById("logo");

logo.setAttribute("src", "logo2.png"); // Change image
logo.setAttribute("alt", "New Logo");  // Change alt text

console.log(logo.getAttribute("alt")); // "New Logo"
```

> You can also use `element.src`, `element.alt`, etc., but `setAttribute` is more flexible.

---

### 🧩 3. Changing Styles Directly

Every HTML element has a `style` property.

```js
const box = document.getElementById("box");

box.style.color = "red";
box.style.backgroundColor = "yellow";
box.style.border = "2px solid black";
box.style.fontSize = "24px";
```

> Use camelCase in JS for CSS properties:  
> `background-color` becomes `backgroundColor`, `font-size` becomes `fontSize`.

---

## 🧪 Full Code Example (with comments)

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Day 1 - DOM Manipulation</title>
  </head>
  <body>
    <h1 id="heading">Welcome!</h1>
    <a id="myLink" href="https://google.com" target="_blank">Visit Google</a>
    <br><br>
    <button id="changeBtn">Click to Change</button>

    <script>
      const heading = document.getElementById("heading");
      const link = document.getElementById("myLink");
      const button = document.getElementById("changeBtn");

      button.addEventListener("click", () => {
        // Change text
        heading.innerText = "Thanks for clicking!";
        
        // Change style
        heading.style.color = "green";
        heading.style.fontFamily = "Arial";
        heading.style.textTransform = "uppercase";

        // Change link
        link.setAttribute("href", "https://openai.com");
        link.innerText = "Visit OpenAI";
        link.style.color = "blue";
      });
    </script>
  </body>
</html>
```

---

## 🧠 Bonus Tips

- Don't overuse `innerHTML` unless needed — it can overwrite the whole element.
- Use `classList.add()` and `classList.remove()` for adding/removing CSS classes instead of `style` when possible.
- You can also use `style.cssText` to apply multiple styles at once (not recommended for beginners but good to know).

---

## 📚 Recap (Day 1)

| Feature         | Description |
|----------------|-------------|
| `innerText`     | Changes visible text only |
| `textContent`   | Changes all text including hidden |
| `innerHTML`     | Reads/writes HTML |
| `setAttribute`  | Sets attribute like `href`, `src`, `id` |
| `getAttribute`  | Reads attribute |
| `element.style` | Direct styling using JS |

---





Let’s go **in-depth** into how you can **work with CSS classes using JavaScript**, which is a cleaner and more scalable approach than using `element.style`.

---

## 🎨 JavaScript and CSS Classes

When you want to **add**, **remove**, or **toggle** styles dynamically, instead of changing `element.style`, it’s best to use CSS classes. You write the styling in CSS and just **toggle the class names in JS**.

---

## 🔹 `classList` – The Powerful Way to Work with Classes

Every DOM element has a property called `.classList`. It’s not a string — it’s a special object with **methods** to manage classes:

---

### ✅ `element.classList.add("className")`

Adds a class to an element.

```js
element.classList.add("highlight");
```

```css
/* In CSS */
.highlight {
  background-color: yellow;
  color: black;
}
```

---

### ❌ `element.classList.remove("className")`

Removes a class from an element.

```js
element.classList.remove("highlight");
```

---

### 🔁 `element.classList.toggle("className")`

Adds the class **if it’s not present**, or removes it **if it is**.

```js
element.classList.toggle("highlight");
```

This is super useful for:
- Dark/light mode switches
- Like buttons
- Expand/collapse actions

---

### 🤔 `element.classList.contains("className")`

Checks if the class is already there.

```js
if (element.classList.contains("highlight")) {
  console.log("Already highlighted!");
}
```

---

## 💡 Bonus: `element.style.cssText`

This allows you to apply multiple inline styles in one go.

```js
element.style.cssText = "color: white; background-color: blue; font-size: 20px;";
```

⚠️ Not beginner-friendly because:
- You overwrite existing inline styles.
- Less maintainable than using CSS classes.

---

## 👕 Why Prefer `classList` Over `element.style`?

| Using classList            | Using element.style         |
|----------------------------|-----------------------------|
| Cleaner and reusable       | Messy if applied repeatedly |
| Uses CSS (good practice)   | Inline styles (hard to manage) |
| Easier to switch styles    | Hard to reset styles        |
| Promotes separation of concerns | Mixes logic and presentation |

---

## 🧪 Example: Dark Mode Toggle

```html
<style>
  .dark-mode {
    background-color: #111;
    color: white;
  }
</style>

<button id="themeToggle">Toggle Theme</button>
<div id="container">Hello, world!</div>

<script>
  const button = document.getElementById("themeToggle");
  const container = document.getElementById("container");

  button.addEventListener("click", () => {
    container.classList.toggle("dark-mode");
  });
</script>
```

---

## 🛠️ Summary of Useful Methods

| Method                   | What it does                            |
|--------------------------|-----------------------------------------|
| `add("class")`           | Adds a class                            |
| `remove("class")`        | Removes a class                         |
| `toggle("class")`        | Adds if not present, removes if present |
| `contains("class")`      | Returns true/false if class is there    |

---

## 🧩 Challenge for Practice

1. Create a box.
2. Add buttons: “Add Red”, “Remove Red”, “Toggle Border”.
3. Use `classList.add`, `remove`, and `toggle` to control styles.
4. Define the classes in CSS (`.red`, `.bordered`, etc).




---

 **Creating and Removing Elements from the DOM**

**🎯 Goal: Dynamically add or remove elements using JavaScript**



## 📘 Core Concepts

### 🧩 1. `document.createElement()`
Creates a new HTML element in memory (not yet on the page).

```js
const newDiv = document.createElement("div");
```

This gives you a new empty `<div>` element. You can then set its content, classes, styles, and finally place it into the page.

---

### 🧩 2. `appendChild()`  
Adds a new child **at the end** of a parent element.

```js
const parent = document.getElementById("container");
parent.appendChild(newDiv);
```

---

### 🧩 3. `insertAdjacentHTML(position, html)`
A powerful method to insert HTML relative to a given element without replacing it.

**Positions**:
- `"beforebegin"` → before the element
- `"afterbegin"` → inside the element, before its first child
- `"beforeend"` → inside the element, after its last child
- `"afterend"` → after the element

```js
element.insertAdjacentHTML("beforeend", "<p>Hi!</p>");
```

> Great for inserting HTML templates or multiple elements quickly.

---

### 🧩 4. `remove()`  
Removes the element from the DOM.

```js
element.remove();
```

> The element must exist first. Often paired with a `click` event on a "delete" button.

---

## 🛠️ Mini Project: **To-Do List**

> ✅ Add items to the list  
> ❌ Remove items on click

---

### 🧪 Full Example Code (To-do List)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Day 2 - To-Do List</title>
  <style>
    body { font-family: Arial; padding: 20px; }
    ul { padding: 0; list-style-type: none; }
    li { padding: 8px; border-bottom: 1px solid #ccc; display: flex; justify-content: space-between; }
    button.removeBtn { background: red; color: white; border: none; cursor: pointer; }
  </style>
</head>
<body>

  <h2>My To-Do List</h2>
  <input type="text" id="taskInput" placeholder="Enter a task" />
  <button id="addBtn">Add Task</button>

  <ul id="taskList"></ul>

  <script>
    const addBtn = document.getElementById("addBtn");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    addBtn.addEventListener("click", () => {
      const taskText = taskInput.value.trim();

      if (taskText === "") {
        alert("Please enter a task!");
        return;
      }

      // Create new <li>
      const li = document.createElement("li");

      // Add task text
      li.textContent = taskText;

      // Create remove button
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.classList.add("removeBtn");

      // Add event to remove the item
      removeBtn.addEventListener("click", () => {
        li.remove();
      });

      // Append button to list item
      li.appendChild(removeBtn);

      // Add list item to task list
      taskList.appendChild(li);

      // Clear input
      taskInput.value = "";
    });
  </script>

</body>
</html>
```

---

## 🔍 Additional Tips

- You can **clone nodes** using `.cloneNode(true)` for templating.
- You can use `insertAdjacentHTML()` for inserting HTML faster than `createElement`+`appendChild`, but you lose the ability to attach event listeners directly.
- Always **sanitize user input** if you're inserting into `innerHTML` to avoid security risks (like XSS).

---

## 📚 Recap 

| Method                | Use                                 |
|-----------------------|--------------------------------------|
| `createElement()`     | Create an element in memory          |
| `appendChild()`       | Add the new element to the DOM       |
| `insertAdjacentHTML()`| Insert HTML next to an element       |
| `remove()`            | Remove the element from the DOM      |

---

## 🧠 Quiz / Practice

1. What’s the difference between `createElement` and `insertAdjacentHTML`?
2. How would you add an `<img>` tag to a div using JavaScript?
3. How do you safely remove a list item from a list?

---




Sweet, let’s dive into the final and **most interactive** day of your DOM journey!


---


**🎯 Goal: Handle user interactions with events like click, keydown, etc.**



## 📘 Core Concepts

### 🧩 1. `addEventListener(event, callback)`
Used to “listen” for an event on an element.

```js
button.addEventListener("click", function() {
  console.log("Button clicked!");
});
```

✅ You can use arrow functions, named functions, or anonymous functions.

---

### 🧩 2. Common Events You’ll Use:

| Event      | Triggered When...                        |
|------------|------------------------------------------|
| `click`    | Element is clicked                       |
| `submit`   | Form is submitted                        |
| `keydown`  | Any key is pressed down                  |
| `keyup`    | Key is released after being pressed      |
| `input`    | Input field value changes (live typing)  |
| `change`   | Input value changes and loses focus      |

---

### 🧩 3. Event Object (`event` or `e`)

Every event handler receives an object with **info** about the event:

```js
element.addEventListener("click", function(event) {
  console.log(event.target); // The actual element clicked
});
```

---

### 🧩 4. Event Bubbling (and Delegation)

#### Bubbling:
Events **start from the innermost** element and **bubble outward**.

```html
<div id="outer">
  <button id="inner">Click me</button>
</div>
```

If both `div` and `button` have click listeners, both will fire unless stopped.

#### Delegation:
Use **a parent** to handle clicks on multiple children (like dynamic elements):

```js
list.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.style.color = "blue";
  }
});
```

✅ Very useful when you dynamically add/remove items (like to-do list).

---

## 🛠️ Mini Project: Events Playground

We’ll build:
1. A button that listens for `click`
2. An input that logs keys (`keydown`)
3. A list using **delegation** to handle item clicks

---

### 🧪 Full Code Example

```html
<!DOCTYPE html>
<html>
<head>
  <title>Day 3 - DOM Events</title>
  <style>
    ul { list-style: none; padding: 0; }
    li { padding: 8px; border: 1px solid #ddd; margin: 4px 0; cursor: pointer; }
    .highlight { background-color: yellow; }
  </style>
</head>
<body>

  <h2>Event Handling</h2>

  <button id="clickBtn">Click Me!</button>
  <p id="clickMsg"></p>

  <hr>

  <input type="text" id="textInput" placeholder="Type something..." />
  <p id="typed"></p>

  <hr>

  <ul id="myList">
    <li>Item A</li>
    <li>Item B</li>
    <li>Item C</li>
  </ul>
  <p>Click on an item to highlight it.</p>

  <script>
    // 1. Button click
    const clickBtn = document.getElementById("clickBtn");
    const clickMsg = document.getElementById("clickMsg");

    clickBtn.addEventListener("click", () => {
      clickMsg.innerText = "Button was clicked!";
    });

    // 2. Typing into input
    const input = document.getElementById("textInput");
    const typed = document.getElementById("typed");

    input.addEventListener("keydown", (e) => {
      typed.innerText = `You pressed: ${e.key}`;
    });

    // 3. List item click (event delegation)
    const list = document.getElementById("myList");

    list.addEventListener("click", (e) => {
      if (e.target.tagName === "LI") {
        // Remove previous highlight
        document.querySelectorAll("li").forEach(li => li.classList.remove("highlight"));
        
        // Highlight clicked one
        e.target.classList.add("highlight");
      }
    });
  </script>

</body>
</html>
```

---

## 🧠 Extra Tips

- Use `e.preventDefault()` to stop default behavior (e.g. form submission).
- Use `e.stopPropagation()` if you want to stop bubbling.
- Debounce `keydown` if you want to avoid too many logs/actions (advanced).

---

## 📚 Recap (Day 3)

| Topic               | Description                           |
|---------------------|---------------------------------------|
| `addEventListener`  | Attach event handlers to elements     |
| `click`, `keydown`  | Most common events                    |
| `event.target`      | Element that triggered the event      |
| Event Delegation    | Handle many items from parent         |
| `e.preventDefault()`| Stop default (like form submission)   |

---

## 🧪 Challenge:  
Try this by yourself:

1. Create a list (`ul`) and add a new list item on every keypress of `Enter`.
2. Clicking a list item should remove it from the list.
3. Make sure to use **event delegation** for click handling.

---
