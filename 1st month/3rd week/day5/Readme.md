Here are **10 CSS animation examples** with explanations:  

---

### **1. Bounce Animation**
```css
@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}

.bounce {
    animation: bounce 1s infinite;
}
```
🔹 The element moves up and down like a bouncing ball.  

---

### **2. Fade In Animation**
```css
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.fade {
    animation: fadeIn 2s ease-in-out;
}
```
🔹 Smoothly fades the element in.  

---

### **3. Rotate Animation**
```css
@keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.rotate {
    animation: rotate 2s linear infinite;
}
```
🔹 Continuously rotates the element.  

---

### **4. Pulse Animation**
```css
@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}

.pulse {
    animation: pulse 1.5s infinite;
}
```
🔹 The element expands and contracts like a heartbeat.  

---

### **5. Slide In from Left**
```css
@keyframes slideIn {
    from { transform: translateX(-100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
}

.slide-in {
    animation: slideIn 1s ease-out;
}
```
🔹 The element slides in smoothly from the left.  

---

### **6. Shake Effect**
```css
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    25%, 75% { transform: translateX(-5px); }
    50% { transform: translateX(5px); }
}

.shake {
    animation: shake 0.5s ease-in-out infinite;
}
```
🔹 The element shakes from side to side.  

---

### **7. Expand and Contract**
```css
@keyframes expand {
    0%, 100% { width: 100px; }
    50% { width: 200px; }
}

.expand {
    animation: expand 2s infinite alternate ease-in-out;
}
```
🔹 The width of the element increases and decreases.  

---

### **8. Flip Animation**
```css
@keyframes flip {
    from { transform: rotateY(0); }
    to { transform: rotateY(180deg); }
}

.flip {
    animation: flip 1s linear infinite;
}
```
🔹 The element flips horizontally.  

---

### **9. Loading Spinner**
```css
@keyframes spinner {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.spinner {
    width: 50px;
    height: 50px;
    border: 5px solid lightgray;
    border-top-color: blue;
    border-radius: 50%;
    animation: spinner 1s linear infinite;
}
```
🔹 Creates a simple loading spinner.  

---

### **10. Typewriter Effect**
```css
@keyframes typing {
    from { width: 0; }
    to { width: 100%; }
}

.typewriter {
    width: 0;
    overflow: hidden;
    white-space: nowrap;
    border-right: 2px solid black;
    animation: typing 3s steps(20, end) forwards;
}
```
🔹 Creates a typewriter-style text animation.  

---

## **Complete HTML + CSS Code**
Here's a **combined version** of all 10 animations in a single file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Animations Examples</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
            padding: 20px;
            background-color: #f4f4f4;
        }

        .container {
            text-align: center;
            padding: 20px;
        }

        /* 1. Bounce Animation */
        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
        }
        .bounce {
            animation: bounce 1s infinite;
        }

        /* 2. Fade In Animation */
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .fade {
            animation: fadeIn 2s ease-in-out;
        }

        /* 3. Rotate Animation */
        @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .rotate {
            animation: rotate 2s linear infinite;
        }

        /* 4. Pulse Animation */
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
        .pulse {
            animation: pulse 1.5s infinite;
        }

        /* 5. Slide In from Left */
        @keyframes slideIn {
            from { transform: translateX(-100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        .slide-in {
            animation: slideIn 1s ease-out;
        }

        /* 6. Shake Effect */
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25%, 75% { transform: translateX(-5px); }
            50% { transform: translateX(5px); }
        }
        .shake {
            animation: shake 0.5s ease-in-out infinite;
        }

        /* 7. Expand and Contract */
        @keyframes expand {
            0%, 100% { width: 100px; }
            50% { width: 200px; }
        }
        .expand {
            animation: expand 2s infinite alternate ease-in-out;
        }

        /* 8. Flip Animation */
        @keyframes flip {
            from { transform: rotateY(0); }
            to { transform: rotateY(180deg); }
        }
        .flip {
            animation: flip 1s linear infinite;
        }

        /* 9. Loading Spinner */
        @keyframes spinner {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .spinner {
            width: 50px;
            height: 50px;
            border: 5px solid lightgray;
            border-top-color: blue;
            border-radius: 50%;
            animation: spinner 1s linear infinite;
        }

        /* 10. Typewriter Effect */
        @keyframes typing {
            from { width: 0; }
            to { width: 100%; }
        }
        .typewriter {
            width: 0;
            overflow: hidden;
            white-space: nowrap;
            border-right: 2px solid black;
            animation: typing 3s steps(20, end) forwards;
        }

        .box {
            width: 100px;
            height: 100px;
            background-color: blue;
            margin: 10px;
        }
    </style>
</head>
<body>

    <div class="container"><div class="box bounce"></div>Bounce</div>
    <div class="container"><div class="box fade"></div>Fade In</div>
    <div class="container"><div class="box rotate"></div>Rotate</div>
    <div class="container"><div class="box pulse"></div>Pulse</div>
    <div class="container"><div class="box slide-in"></div>Slide In</div>
    <div class="container"><div class="box shake"></div>Shake</div>
    <div class="container"><div class="box expand"></div>Expand</div>
    <div class="container"><div class="box flip"></div>Flip</div>
    <div class="container"><div class="spinner"></div>Loading Spinner</div>
    <div class="container"><p class="typewriter">Typing Animation</p></div>

</body>
</html>
```

✅ **Try this out!** It includes all **10 animations** in one place. 🚀