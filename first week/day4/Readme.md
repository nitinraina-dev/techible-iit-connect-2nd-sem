
### 🚀 **Semantic HTML Example with Forms & Tables**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Semantic HTML Example</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            line-height: 1.6;
        }
        header, section, article, footer {
            border: 1px solid #ccc;
            padding: 15px;
            margin: 10px 0;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
        }
        th, td {
            border: 1px solid #000;
            padding: 8px;
            text-align: left;
        }
        button {
            background-color: blue;
            color: white;
            padding: 10px;
            border: none;
            cursor: pointer;
        }
        button:hover {
            background-color: darkblue;
        }
    </style>
</head>
<body>

    <header>
        <h1>Welcome to My Webpage</h1>
        <p>This is the header section.</p>
    </header>

    <nav>
        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>

    <section id="about">
        <h2>About Us</h2>
        <p>This section contains details about our website.</p>
    </section>

    <article>
        <h3>Article Title</h3>
        <p>This is an article discussing an interesting topic.</p>
    </article>

    <section>
        <h2>Student Information Table</h2>
        <table>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Course</th>
            </tr>
            <tr>
                <td>Alice</td>
                <td>22</td>
                <td>Web Development</td>
            </tr>
            <tr>
                <td>Bob</td>
                <td>23</td>
                <td>Graphic Design</td>
            </tr>
        </table>
    </section>

    <section>
        <h2>Login Form</h2>
        <form>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>
            <br><br>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
            <br><br>

            <button type="submit">Login</button>
        </form>
    </section>

    <footer>
        <p>&copy; 2025 My Webpage. All rights reserved.</p>
    </footer>

</body>
</html>
```

---

### **What Students Learn from This?**
✅ **Semantic Elements:** `<header>`, `<section>`, `<article>`, `<footer>`  
✅ **Tables:** `<table>`, `<tr>`, `<th>`, `<td>`  
✅ **Forms:** `<form>`, `<input>`, `<label>`, `<button>`  
✅ **Navigation:** `<nav>`, `<ul>`, `<li>`, `<a>`  
