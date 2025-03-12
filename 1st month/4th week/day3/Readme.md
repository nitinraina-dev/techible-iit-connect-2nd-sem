Let's go step by step through **Bootstrap 5.3** concepts, including **Containers, Rows, Columns, Flex utilities, Tables, and Forms** with examples.

---

# **1. Bootstrap Containers**
### ✅ Containers are the basic layout structure in Bootstrap.
They provide padding and alignment for your content.

## **Types of Containers in Bootstrap 5.3:**
1. **`.container`** – A responsive fixed-width container.
2. **`.container-fluid`** – A full-width container that spans the entire viewport.
3. **`.container-{breakpoint}`** – A responsive container that changes width at different breakpoints (`sm`, `md`, `lg`, `xl`, `xxl`).

### **Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap Containers</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
</head>
<body>

    <div class="container bg-light p-3">
        <p>This is a fixed-width container.</p>
    </div>

    <div class="container-fluid bg-primary text-white p-3">
        <p>This is a full-width container.</p>
    </div>

    <div class="container-md bg-warning p-3">
        <p>This container adapts at `md` breakpoints.</p>
    </div>

</body>
</html>
```
---
# **2. Bootstrap Rows & Columns**
### ✅ Bootstrap’s Grid system is based on **12 columns**.

### **Row & Column Rules:**
1. **`.row`** → Creates a horizontal row.
2. **`.col`** → Automatically adjusts column width.
3. **`.col-{size}`** → Defines column width (`1` to `12`).
4. **`.col-{breakpoint}-{size}`** → Responsive columns (`sm`, `md`, `lg`, etc.).
5. **`.g-{size}`** → Adds gaps between columns.

### **Example:**
```html
<div class="container">
    <div class="row">
        <div class="col bg-danger text-white p-3">Auto Column</div>
        <div class="col bg-success text-white p-3">Auto Column</div>
    </div>
    <div class="row">
        <div class="col-4 bg-info text-white p-3">4 Columns</div>
        <div class="col-8 bg-warning text-dark p-3">8 Columns</div>
    </div>
    <div class="row g-3"> <!-- Adds gap -->
        <div class="col-md-6 bg-primary text-white p-3">Half-width at `md`</div>
        <div class="col-md-6 bg-secondary text-white p-3">Half-width at `md`</div>
    </div>
</div>
```

---
# **3. Bootstrap Flex Utilities**
### ✅ `d-flex` makes elements flex containers.

### **Common Flex Classes:**
| Class | Effect |
|--------|---------|
| `.d-flex` | Enables flexbox |
| `.justify-content-start` | Aligns items to the start |
| `.justify-content-center` | Centers items |
| `.justify-content-end` | Aligns items to the end |
| `.justify-content-between` | Distributes items with space between |
| `.align-items-start` | Aligns items to top |
| `.align-items-center` | Centers items vertically |
| `.align-items-end` | Aligns items to bottom |

### **Example:**
```html
<div class="d-flex justify-content-between bg-light p-3">
    <div class="p-2 bg-danger text-white">Box 1</div>
    <div class="p-2 bg-success text-white">Box 2</div>
    <div class="p-2 bg-primary text-white">Box 3</div>
</div>

<div class="d-flex align-items-center bg-dark text-white p-3" style="height: 150px;">
    <div class="p-2 bg-warning">Centered Vertically</div>
</div>
```

---
# **4. Bootstrap Tables**
### ✅ Bootstrap provides responsive and styled tables.

### **Table Classes:**
| Class | Effect |
|--------|---------|
| `.table` | Adds basic styling |
| `.table-striped` | Alternating row colors |
| `.table-bordered` | Adds borders to the table |
| `.table-hover` | Adds hover effect |
| `.table-dark` | Dark mode table |
| `.table-responsive` | Makes table scrollable on small screens |

### **Example:**
```html
<table class="table table-striped table-bordered table-hover">
    <thead class="table-dark">
        <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Alice</td>
            <td>24</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Bob</td>
            <td>27</td>
        </tr>
    </tbody>
</table>
```

---
# **5. Bootstrap Forms**
### ✅ Bootstrap makes form styling easy.

### **Form Elements:**
| Class | Effect |
|--------|---------|
| `.form-control` | Styles inputs |
| `.form-label` | Labels for inputs |
| `.form-select` | Styles select dropdowns |
| `.form-check` | Styles checkboxes |
| `.form-switch` | Toggle switch |
| `.input-group` | Groups input and button |

### **Example:**
```html
<form class="p-3">
    <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" placeholder="Enter your name">
    </div>
    <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" placeholder="Enter email">
    </div>
    <div class="mb-3">
        <label for="select" class="form-label">Select an Option</label>
        <select class="form-select" id="select">
            <option selected>Choose...</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
        </select>
    </div>
    <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="agree">
        <label class="form-check-label" for="agree">Agree to terms</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

---
## **Final Thoughts**
✅ **Containers** → Define layout structure  
✅ **Rows & Columns** → Grid system (12 columns)  
✅ **Flex** → Align and distribute elements  
✅ **Tables** → Responsive and styled tables  
✅ **Forms** → Well-designed input fields  

Now, you can start using **Bootstrap 5.3** effectively! 