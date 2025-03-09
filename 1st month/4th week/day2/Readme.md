### **CSS Position Property Explained**

The `position` property in CSS defines how an element is positioned in the document. There are **five** main values:

1. **`static`** (default)
2. **`relative`**
3. **`absolute`**
4. **`fixed`**
5. **`sticky`**

---

## **1. `static` (Default)**
- Elements are positioned **normally** as per the document flow.
- **No effect** of `top`, `bottom`, `left`, or `right`.

```css
.box {
  position: static;
}
```

🔹 **Example:**
```html
<div class="box">I am static</div>
```

---

## **2. `relative`**
- The element is **positioned relative to itself**.
- You can use `top`, `left`, `right`, `bottom` to **shift** it.

```css
.box {
  position: relative;
  top: 20px;
  left: 30px;
}
```

🔹 **Example:**  
The box will move **20px down** and **30px right**, but the space it originally occupied remains.

---

## **3. `absolute`**
- The element is positioned **relative to the nearest positioned ancestor** (if none, then the `body`).
- **Removes** the element from normal document flow.

```css
.box {
  position: absolute;
  top: 50px;
  left: 100px;
}
```

🔹 **Example:**  
If there's a parent with `relative` positioning, the box will move **50px down** and **100px right** from it.

---

## **4. `fixed`**
- The element stays **fixed** relative to the **viewport** (browser window).
- **Does not move** even when scrolling.

```css
.box {
  position: fixed;
  top: 10px;
  right: 20px;
}
```

🔹 **Example:**  
A **sticky navbar** that stays at the top of the screen.

---

## **5. `sticky`**
- The element **acts like `relative`** until it reaches a **scroll threshold**, then it **sticks** like `fixed`.

```css
.box {
  position: sticky;
  top: 0;
}
```

🔹 **Example:**  
A **sticky header** that remains visible at the top when scrolling.

---

## **Visualization Example**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    .container {
      height: 200px;
      border: 2px solid black;
      position: relative;
    }

    .box {
      width: 100px;
      height: 100px;
      background: red;
      color: white;
      text-align: center;
      line-height: 100px;
    }

    .relative { position: relative; top: 20px; left: 20px; }
    .absolute { position: absolute; top: 30px; right: 30px; }
    .fixed { position: fixed; top: 10px; left: 10px; }
    .sticky { position: sticky; top: 0; background: blue; }
  </style>
</head>
<body>

  <div class="container">
    <div class="box relative">Relative</div>
    <div class="box absolute">Absolute</div>
  </div>

  <div class="box fixed">Fixed</div>

  <div class="box sticky">Sticky</div>

</body>
</html>
```

---

### **Summary Table**
| Position  | Moves with `top`/`left`/etc? | Stays in Flow? | Moves on Scroll? | Sticks at Position? |
|-----------|-----------------------------|----------------|------------------|---------------------|
| `static`  | ❌ No  | ✅ Yes | ✅ Yes | ❌ No |
| `relative` | ✅ Yes | ✅ Yes | ✅ Yes | ❌ No |
| `absolute` | ✅ Yes | ❌ No | ✅ Yes | ❌ No |
| `fixed` | ✅ Yes | ❌ No | ❌ No | ✅ Yes |
| `sticky` | ✅ Yes (after scroll) | ✅ Yes | ✅ Yes (until threshold) | ✅ Yes |

---
