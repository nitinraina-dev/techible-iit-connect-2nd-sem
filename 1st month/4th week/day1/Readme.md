## CSS Media Queries: A Complete Guide  

### **What Are Media Queries?**  
CSS media queries allow you to apply styles based on the device's screen size, resolution, or other properties. This is essential for creating **responsive** web designs that look good on all screen sizes.

---

### **Basic Syntax of Media Queries**
```css
@media (condition) {
  /* CSS styles here */
}
```
Example:  
```css
@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```
This means **if the screen width is 600px or less, the background color will change to light blue.**

---

### **Common Media Query Conditions**
| Condition | Description |
|-----------|-------------|
| `max-width` | Applies styles when the screen width is **below** the given value |
| `min-width` | Applies styles when the screen width is **above** the given value |
| `max-height` | Applies styles when the screen height is **below** the given value |
| `min-height` | Applies styles when the screen height is **above** the given value |
| `orientation: portrait` | Applies styles when the device is in **portrait mode** |
| `orientation: landscape` | Applies styles when the device is in **landscape mode** |

---

### **Examples of Media Queries**
#### **1. Responsive Typography**
```css
body {
  font-size: 16px;
}

@media (max-width: 768px) {
  body {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  body {
    font-size: 12px;
  }
}
```
✅ Adjusts text size based on the screen width.

---

#### **2. Changing Layout for Different Screens**
```css
.container {
  display: flex;
  flex-direction: row;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
```
✅ Changes layout from **row to column** on smaller screens.

---

#### **3. Hiding Elements on Small Screens**
```css
.menu {
  display: block;
}

@media (max-width: 600px) {
  .menu {
    display: none;
  }
}
```
✅ Hides the menu on screens **less than 600px**.

---

### **Mobile-First vs Desktop-First Approach**
- **Mobile-First**: Start with styles for small screens, then use `min-width` for larger screens.
- **Desktop-First**: Start with styles for large screens, then use `max-width` for smaller screens.

✅ **Example of Mobile-First:**
```css
body {
  font-size: 14px;
}

@media (min-width: 768px) {
  body {
    font-size: 16px;
  }
}

@media (min-width: 1024px) {
  body {
    font-size: 18px;
  }
}
```

✅ **Example of Desktop-First:**
```css
body {
  font-size: 18px;
}

@media (max-width: 1024px) {
  body {
    font-size: 16px;
  }
}

@media (max-width: 768px) {
  body {
    font-size: 14px;
  }
}
```

---

### **Combining Multiple Conditions**
```css
@media (max-width: 768px) and (orientation: portrait) {
  body {
    background-color: pink;
  }
}
```
✅ This applies styles **only if** the screen is **less than 768px** **AND** in **portrait mode**.

---

### **Responsive Image Example**
```css
img {
  width: 100%;
  max-width: 500px;
  height: auto;
}
```
✅ Ensures images **scale down** but never exceed `500px`.

---

### **Breakpoints (Standard Screen Sizes)**
Here are some commonly used **breakpoints** for responsive design:

| Device Type | Max Width |
|------------|------------|
| Large Screens | `min-width: 1200px` |
| Laptops | `min-width: 1024px` |
| Tablets | `max-width: 768px` |
| Mobile Devices | `max-width: 480px` |

---

### **Media Queries for Dark Mode**
```css
@media (prefers-color-scheme: dark) {
  body {
    background-color: black;
    color: white;
  }
}
```
✅ Changes styles **when the user has dark mode enabled**.

---

### **Practice Exercise**
**Try creating a responsive webpage where:**
1. The background is white on large screens, gray on tablets, and light blue on mobile.
2. The text size adjusts for different screen sizes.
3. A sidebar appears only on large screens.
