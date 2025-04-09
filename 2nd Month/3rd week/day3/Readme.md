

## 📚 **Types of DOM Selectors**

### 🔹 1. `getElementById()`
Selects a **single element** by its unique `id`.

```html
<p id="greeting">Hello!</p>
```

```js
let para = document.getElementById("greeting");
```

✅ Returns: **Element** (or `null` if not found)  
⚠️ Only works with **IDs**

---

### 🔹 2. `getElementsByClassName()`
Selects **all elements** with a specific class name.

```html
<p class="note">Note 1</p>
<p class="note">Note 2</p>
```

```js
let notes = document.getElementsByClassName("note");
```

✅ Returns: **HTMLCollection** (like an array but not exactly)

```js
Array.from(notes).forEach(note => console.log(note.textContent));
```

---

### 🔹 3. `getElementsByTagName()`
Selects **all elements** with a specific tag name.

```html
<h2>Heading 1</h2>
<h2>Heading 2</h2>
```

```js
let headings = document.getElementsByTagName("h2");
```

✅ Returns: **HTMLCollection**

---

### 🔹 4. `querySelector()`
Selects the **first matching element** using **CSS-style selectors**.

```html
<p class="intro">Hey!</p>
```

```js
let para = document.querySelector(".intro"); // .class
let div = document.querySelector("#main");   // #id
let heading = document.querySelector("h1");  // tag
```

✅ Returns: **Element** or `null`

---

### 🔹 5. `querySelectorAll()`
Selects **all matching elements** using CSS selectors.

```html
<ul>
  <li class="item">One</li>
  <li class="item">Two</li>
</ul>
```

```js
let items = document.querySelectorAll(".item");
```

✅ Returns: **NodeList** (can use `.forEach()` directly!)

```js
items.forEach(item => console.log(item.textContent));
```

---

## 🧠 Bonus: **CSS Selectors You Can Use with `querySelector` / `querySelectorAll`**

| Selector | Example | Selects |
|----------|---------|---------|
| `.class` | `.btn` | All elements with class="btn" |
| `#id` | `#header` | Element with id="header" |
| `tag` | `p`, `div`, `h1` | Elements by tag |
| `tag.class` | `button.primary` | `<button class="primary">` |
| `parent > child` | `div > p` | Direct child `<p>` inside `<div>` |
| `element[attr]` | `input[type="text"]` | Inputs of type text |
| `:nth-child(n)` | `li:nth-child(2)` | Second `<li>` |
| `:first-child` / `:last-child` | `ul li:first-child` | First item in a list |

---

## 🧪 Practice Exercise

```html
<body>
  <div id="container">
    <h1 class="title">Welcome</h1>
    <p class="info">Info 1</p>
    <p class="info">Info 2</p>
    <ul>
      <li class="item">Apple</li>
      <li class="item">Banana</li>
    </ul>
    <input type="text" name="username">
  </div>

  <script>
    // By ID
    const box = document.getElementById("container");

    // By class
    const infos = document.getElementsByClassName("info");

    // By tag
    const paragraphs = document.getElementsByTagName("p");

    // querySelector
    const title = document.querySelector(".title");

    // querySelectorAll
    const items = document.querySelectorAll(".item");

    // By attribute
    const input = document.querySelector('input[name="username"]');

    console.log(box, infos, paragraphs, title, items, input);
  </script>
</body>
```

---



Let’s keep the learning fun! Here's what I’ve got lined up for you:

---

## 🧠 **Mini Quiz: DOM Selectors**

Answer these in your head or note them down. I’ll give you the answers at the end 👇

### **1. Which selector returns a single element by ID?**
a) `getElementsByClassName()`  
b) `getElementById()`  
c) `querySelectorAll()`  
d) `getElementsByTagName()`

---

### **2. What does `document.querySelector(".card")` select?**
a) The first element with tag `<card>`  
b) All elements with class "card"  
c) The first element with class "card"  
d) An element with id "card"

---

### **3. How would you select all `<li>` elements?**
a) `getElementById("li")`  
b) `querySelectorAll("li")`  
c) `getElementsByTagName("#li")`  
d) `querySelector("li")`

---

### **4. What does this return?**

```js
document.querySelectorAll("p");
```

a) One paragraph element  
b) An array of elements  
c) A NodeList of all paragraph elements  
d) HTMLCollection of one `<p>`

---

### **5. Which is correct to select input with name="email"?**
a) `querySelector("input#email")`  
b) `querySelector("[name='email']")`  
c) `querySelector(".email")`  
d) `querySelectorAll("input.name=email")`

---

### ✅ **Answers**
1. **b**
2. **c**
3. **b**
4. **c**
5. **b**

---

## 🧩 **Mini Project: Build a DOM Selector Playground**

### 🛠️ Goal:
Click buttons to highlight different elements using JavaScript selectors.

### 🧪 HTML + JS Code:

```html
<!DOCTYPE html>
<html>
<head>
  <title>DOM Selector Playground</title>
  <style>
    .highlight {
      background-color: yellow;
      border: 2px solid red;
    }
  </style>
</head>
<body>
  <h1 id="mainTitle">Hello DOM</h1>
  <p class="text">Paragraph 1</p>
  <p class="text">Paragraph 2</p>
  <button onclick="highlightById()">Highlight by ID</button>
  <button onclick="highlightByClass()">Highlight by Class</button>
  <button onclick="highlightAllP()">Highlight All &lt;p&gt;</button>
  <button onclick="clearHighlights()">Clear</button>

  <script>
    function highlightById() {
      const title = document.getElementById("mainTitle");
      title.classList.add("highlight");
    }

    function highlightByClass() {
      const texts = document.getElementsByClassName("text");
      Array.from(texts).forEach(el => el.classList.add("highlight"));
    }

    function highlightAllP() {
      const paras = document.querySelectorAll("p");
      paras.forEach(p => p.classList.add("highlight"));
    }

    function clearHighlights() {
      const all = document.querySelectorAll(".highlight");
      all.forEach(el => el.classList.remove("highlight"));
    }
  </script>
</body>
</html>
```

