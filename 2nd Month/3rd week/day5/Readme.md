Let’s go deep into **JavaScript events**, focusing on:

1. **Event Object**
2. **Event Delegation**
3. **Event Bubbling (and Capturing)**

---

## 🧠 1. Event Object (`event` or `e`)

Whenever an event (like click, mouseover, keypress, etc.) occurs in JavaScript, the browser creates an **event object** that holds **all the information about that event**.

### Example:
```js
document.getElementById("btn").addEventListener("click", function(event) {
  console.log(event);
});
```

### Common properties of the `event` object:

| Property | Description |
|---------|-------------|
| `type` | Type of event (`click`, `keydown`, etc.) |
| `target` | The actual element that triggered the event |
| `currentTarget` | The element the event handler is attached to |
| `preventDefault()` | Stops the default browser behavior |
| `stopPropagation()` | Stops the event from bubbling up the DOM |
| `clientX`, `clientY` | X/Y coordinates of the mouse event |
| `key`, `keyCode` | Key pressed (for keyboard events) |

### Example with properties:
```js
document.getElementById("btn").addEventListener("click", function(e) {
  console.log("Type:", e.type);                    // "click"
  console.log("Target:", e.target);                // the clicked element
  console.log("Current Target:", e.currentTarget); // element with the handler
});
```

---

## 🪄 2. Event Delegation

Event Delegation is a technique where you **attach a single event listener to a parent element**, and use the `event.target` to handle events for child elements.

### Why use it?

- Efficient when you have **many child elements** (like a list of items).
- Useful when elements are added **dynamically** after the page loads.

### Example:
Suppose you have a list:
```html
<ul id="todoList">
  <li>Buy milk</li>
  <li>Learn JavaScript</li>
  <li>Build projects</li>
</ul>
```

Instead of adding event listeners to each `<li>`, do this:
```js
document.getElementById("todoList").addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    console.log("Clicked:", e.target.textContent);
    e.target.style.textDecoration = "line-through";
  }
});
```

👉 Even if you add a new `<li>` later, it will still work!

---

## 🌊 3. Event Bubbling (and Capturing)

### What is Event Bubbling?

When an event occurs on an element, it **bubbles up** the DOM tree — from the target element to its ancestors.

### Example (Bubbling):
```html
<div id="parent">
  <button id="child">Click me</button>
</div>
```

```js
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});
```

When you click the button, output will be:
```
Child clicked
Parent clicked
```

This is bubbling: the event fires on `#child` first, then `#parent`.

### Use `stopPropagation()` to stop bubbling:
```js
document.getElementById("child").addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Child clicked");
});
```

Now, clicking the button won’t trigger the parent’s handler.

---

### What is Capturing?

Event capturing (also called "trickling") is the **opposite** of bubbling: the event starts from the top (root) and goes **down** to the target element.

You can listen during the capturing phase by setting the third argument to `true`:

```js
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent capturing");
}, true);
```

---

## 📊 Quick Summary Table

| Concept         | Description |
|----------------|-------------|
| `event` object  | Info about the event (target, type, position, etc.) |
| Event Delegation | Listen on a parent, check `event.target` for the real child |
| Event Bubbling | Event goes up from the target to ancestors |
| Event Capturing | Event goes down from root to the target |
| `stopPropagation()` | Stops bubbling or capturing |
| `preventDefault()` | Stops default browser action (like link navigation) |

---





