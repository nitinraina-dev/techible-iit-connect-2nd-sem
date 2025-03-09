### 🎯 **Mini Goal: Create a Simple Web Page Using Semantic HTML**  

### **Step-by-Step Guide**  

#### **1️⃣ Understanding Semantic HTML**  
Semantic HTML makes your web pages **more meaningful** by using elements that describe their content.  
Examples:  
- `<header>` → Represents the top section (logo, navigation, etc.)  
- `<nav>` → Defines a navigation menu  
- `<section>` → Groups related content  
- `<article>` → Contains independent content  
- `<aside>` → Sidebar content  
- `<footer>` → Bottom section (copyright, links, etc.)  

---

### **2️⃣ Basic Structure of a Semantic Web Page**  
Let's build a simple **"My Portfolio"** webpage!  

🔹 **What we’ll include:**  
✔ A **header** with a title  
✔ A **navigation bar**  
✔ A **main content section** with an **article**  
✔ An **aside** (for additional info)  
✔ A **footer**  

---

### **3️⃣ Code Example: My Portfolio Webpage**  

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        header {
            background: #333;
            color: white;
            text-align: center;
            padding: 15px;
        }
        nav {
            background: #555;
            padding: 10px;
            text-align: center;
        }
        nav a {
            color: white;
            margin: 10px;
            text-decoration: none;
            font-weight: bold;
        }
        section {
            padding: 20px;
        }
        article {
            background: #f4f4f4;
            padding: 15px;
            border-radius: 5px;
        }
        aside {
            background: #ddd;
            padding: 15px;
            margin-top: 10px;
        }
        footer {
            background: #333;
            color: white;
            text-align: center;
            padding: 10px;
            margin-top: 20px;
        }
    </style>
</head>
<body>

    <header>
        <h1>Welcome to My Portfolio</h1>
    </header>

    <nav>
        <a href="#">Home</a>
        <a href="#">Projects</a>
        <a href="#">About Me</a>
        <a href="#">Contact</a>
    </nav>

    <section>
        <h2>About Me</h2>
        <article>
            <h3>Hi, I'm [Your Name]!</h3>
            <p>I am a web developer passionate about building amazing websites.</p>
        </article>
        
        <aside>
            <h3>Quick Info</h3>
            <p>Email: example@example.com</p>
        </aside>
    </section>

    <footer>
        <p>&copy; 2025 My Portfolio. All rights reserved.</p>
    </footer>

</body>
</html>
```

---

### **4️⃣ Explanation of the Code**  
✅ **`<header>`** → Displays the website title.  
✅ **`<nav>`** → Provides navigation links.  
✅ **`<section>`** → Groups the main content.  
✅ **`<article>`** → Contains a self-contained block of information.  
✅ **`<aside>`** → Displays additional information.  
✅ **`<footer>`** → Adds a footer with copyright details.  

---

### **5️⃣ Your Task 🎯**
1. Copy & paste this code into a file named `index.html`.  
2. Open it in a browser and see how it looks!  
3. Try changing the content, colors, or layout to make it your own!  