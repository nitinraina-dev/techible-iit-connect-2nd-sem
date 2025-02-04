### 1️⃣ **Tables in HTML**
Tables allow us to display data in rows and columns.

#### **Basic Table Example:**
```html
<table border="1">
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>John</td>
    <td>25</td>
    <td>USA</td>
  </tr>
  <tr>
    <td>Lisa</td>
    <td>22</td>
    <td>UK</td>
  </tr>
</table>
```
✅ **Key elements**:
- `<table>`: Defines a table.
- `<tr>`: Table row.
- `<th>`: Table header.
- `<td>`: Table data/cell.

---

### 2️⃣ **Input Fields in HTML**
Input fields let users enter data.

#### **Example: Basic Form with Input Fields**
```html
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" placeholder="Enter your name">
  
  <br><br>
  
  <label for="email">Email:</label>
  <input type="email" id="email" placeholder="Enter your email">
  
  <br><br>
  
  <input type="submit" value="Submit">
</form>
```
✅ **Common Input Types**:
- `text`: For normal text input.
- `email`: Validates email format.
- `password`: Hides input as dots.
- `number`: Only allows numbers.
- `submit`: Submits the form.

---

### 3️⃣ **Buttons in HTML**
Buttons allow users to perform actions.

#### **Example: Different Buttons**
```html
<button>Click Me</button>

<input type="button" value="Input Button">

<button onclick="alert('Hello!')">Alert Button</button>
```
✅ **Button Types**:
- `<button>`: Standard button.
- `<input type="button">`: Another way to create a button.
- `onclick`: Adds a click event.

---

### 4️⃣ **Labels in HTML**
Labels are used to improve accessibility and usability.

#### **Example: Label with Input Field**
```html
<form>
  <label for="username">Username:</label>
  <input type="text" id="username">
  
  <br><br>
  
  <label for="password">Password:</label>
  <input type="password" id="password">
</form>
```
✅ **Why use labels?**
- Clicking the label focuses the input field.
- Improves accessibility for screen readers.

---

### 🎯 **Mini Practice Task**
👉 **Create a simple login form** with:
- A table displaying usernames and roles.
- Input fields for **username and password**.
- A **Login** button.
- Proper **labels**.
