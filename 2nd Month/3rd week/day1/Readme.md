 DOM manipulation is a key part of JavaScript and web development. 

## 🔍 What is the DOM?

DOM stands for **Document Object Model**. When a web page is loaded, the browser creates a **tree-like structure** of the HTML elements — that's the DOM.

Think of it like this:
- HTML is the content.
- DOM is the **JS-friendly** version of that HTML.

---

## ✅ Why do we use DOM Manipulation?

To **change**, **add**, **remove**, or **style** HTML elements using JavaScript.

---

## 🔧 Basic DOM Manipulation Examples

Let’s start with a simple HTML structure:

```html
<!DOCTYPE html>
<html>
<head>
  <title>DOM Basics</title>
</head>
<body>
  <h1 id="heading">Hello DOM!</h1>
  <button onclick="changeText()">Click me</button>

  <script>
    function changeText() {
      document.getElementById("heading").innerText = "Text Changed!";
    }
  </script>
</body>
</html>
```

### 🔹 Explanation:

- `getElementById("heading")` grabs the `<h1>` element.
- `.innerText = "Text Changed!"` changes the text of that element.

---

## 🛠 Common DOM Methods

| Method | What it does |
|--------|--------------|
| `getElementById()` | Selects an element by its ID |
| `getElementsByClassName()` | Selects elements by class name (returns HTMLCollection) |
| `getElementsByTagName()` | Selects elements by tag name |
| `querySelector()` | Selects the first match of a selector |
| `querySelectorAll()` | Selects all matches (returns NodeList) |

---

## 🧪 Try this (Exercise):

```html
<p id="para">Original text</p>
<button onclick="changePara()">Change Paragraph</button>

<script>
  function changePara() {
    let p = document.getElementById("para");
    p.innerText = "This is new content!";
    p.style.color = "blue";
    p.style.fontWeight = "bold";
  }
</script>
```

---

Let me know if you want to dive into:
- Adding elements
- Removing elements
- Event handling
- Or real project ideas to practice!
