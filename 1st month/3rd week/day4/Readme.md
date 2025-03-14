Here are 10 examples of CSS transitions with explanations:

### 1. **Smooth Background Color Change**
```css
.button {
    background-color: blue;
    color: white;
    padding: 10px 20px;
    transition: background-color 0.5s ease;
}

.button:hover {
    background-color: red;
}
```
🔹 Changes the background color smoothly when hovered.

---

### 2. **Width Expansion**
```css
.box {
    width: 100px;
    height: 100px;
    background-color: green;
    transition: width 0.5s ease-in-out;
}

.box:hover {
    width: 200px;
}
```
🔹 Increases the width when hovered.

---

### 3. **Fading Effect (Opacity)**
```css
.text {
    opacity: 1;
    transition: opacity 0.5s ease;
}

.text:hover {
    opacity: 0.3;
}
```
🔹 Reduces the opacity on hover.

---

### 4. **Rotate on Hover**
```css
.square {
    width: 100px;
    height: 100px;
    background: purple;
    transition: transform 0.5s ease-in-out;
}

.square:hover {
    transform: rotate(45deg);
}
```
🔹 Rotates the element when hovered.

---

### 5. **Scale (Zoom In) Effect**
```css
.image {
    width: 200px;
    transition: transform 0.3s ease;
}

.image:hover {
    transform: scale(1.2);
}
```
🔹 Enlarges the image on hover.

---

### 6. **Button Press Effect (Shrink)**
```css
.button {
    padding: 10px 20px;
    background-color: orangered;
    transition: transform 0.2s ease;
}

.button:active {
    transform: scale(0.9);
}
```
🔹 Shrinks the button when clicked.

---

### 7. **Border Radius Transition**
```css
.circle {
    width: 100px;
    height: 100px;
    background-color: blue;
    transition: border-radius 0.5s ease-in-out;
}

.circle:hover {
    border-radius: 50%;
}
```
🔹 Transforms a square into a circle when hovered.

---

### 8. **Sliding Text Effect**
```css
.text {
    position: relative;
    left: 0;
    transition: left 0.5s ease;
}

.text:hover {
    left: 20px;
}
```
🔹 Moves the text slightly when hovered.

---

### 9. **Shadow Glow Effect**
```css
.card {
    width: 200px;
    height: 100px;
    background: white;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.5s ease;
}

.card:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
}
```
🔹 Increases the shadow effect on hover.

---

### 10. **Text Color Transition**
```css
.link {
    color: black;
    text-decoration: none;
    transition: color 0.5s ease;
}

.link:hover {
    color: red;
}
```
🔹 Changes the text color smoothly on hover.

These transitions make UI elements feel more interactive and engaging. 