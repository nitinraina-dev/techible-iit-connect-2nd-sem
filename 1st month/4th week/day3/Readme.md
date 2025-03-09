### Bootstrap 5.3 Utility Classes: Rows & Containers

Bootstrap 5.3 provides **utility classes** for **layout, spacing, and responsiveness**. The two key elements of Bootstrap's grid system are:

1. **Containers** – Used to wrap and center content.
2. **Rows & Columns** – Used for structuring content within a grid.

---

## 1️⃣ **Containers** (Used to Center Content)
Containers provide a way to **wrap** elements and control their width across breakpoints.

### 🔹 Types of Containers:
| Class            | Behavior |
|-----------------|-----------|
| `.container`     | Responsive fixed-width container |
| `.container-fluid` | Full-width container (100% width) |
| `.container-{breakpoint}` | Fixed-width container at specific breakpoints (`sm`, `md`, `lg`, `xl`, `xxl`) |

#### ✅ **Example**
```html
<div class="container">
  <h2>This is inside a container</h2>
</div>

<div class="container-fluid bg-light">
  <h2>This is inside a full-width container</h2>
</div>
```
> 📌 `.container` will have **max-width** based on screen size, while `.container-fluid` always takes **full width**.

---

## 2️⃣ **Rows & Columns** (Bootstrap Grid System)
Bootstrap uses **Flexbox-based** rows & columns to create responsive layouts.

### 🔹 **How Rows & Columns Work**
- **`.row`** → Creates a horizontal row.
- **`.col`** → Automatically divides columns equally.
- **`.col-{size}`** → Defines specific column width (`1-12`).
- **`.col-{breakpoint}-{size}`** → Defines column width for specific breakpoints (`sm`, `md`, `lg`, `xl`, `xxl`).

#### ✅ **Example**
```html
<div class="container">
  <div class="row">
    <div class="col bg-primary text-white">Column 1</div>
    <div class="col bg-secondary text-white">Column 2</div>
  </div>
</div>
```
> 📌 The two columns will be equal in width.

---

## 3️⃣ **Columns with Specific Sizes**
You can define custom column sizes using `col-{size}`.

#### ✅ **Example**
```html
<div class="container">
  <div class="row">
    <div class="col-4 bg-danger text-white">Takes 4 columns</div>
    <div class="col-8 bg-warning text-dark">Takes 8 columns</div>
  </div>
</div>
```
> 📌 Bootstrap's grid system is **12 columns wide**. Here, the first div takes **4/12** and the second **8/12**.

---

## 4️⃣ **Responsive Columns**
You can make columns responsive using `col-{breakpoint}-{size}`.

#### ✅ **Example**
```html
<div class="container">
  <div class="row">
    <div class="col-md-6 col-lg-4 bg-success text-white">Column 1</div>
    <div class="col-md-6 col-lg-8 bg-info text-dark">Column 2</div>
  </div>
</div>
```
> 📌 Here:
- On `md` screens → Both columns take **6/12**.
- On `lg` screens → First column takes **4/12**, second **8/12**.

---

## 5️⃣ **Bootstrap Utility Classes**
Bootstrap provides utility classes for **spacing, alignment, colors, and more**.

### 🔹 **Spacing (Margin & Padding)**
| Class | Description |
|--------|--------------|
| `.m-{size}` | Margin (`0` to `5`, `auto`) |
| `.p-{size}` | Padding (`0` to `5`) |
| `.mt-3` | Margin-top |
| `.pt-3` | Padding-top |

#### ✅ **Example**
```html
<div class="container mt-3 p-4 bg-light">
  <h2 class="mb-3">Spacing Example</h2>
  <p class="p-3 bg-warning">This paragraph has padding.</p>
</div>
```

---

## 6️⃣ **Row Alignment & Justification**
| Class | Description |
|--------|--------------|
| `.align-items-start` | Aligns items to top |
| `.align-items-center` | Aligns items to center |
| `.align-items-end` | Aligns items to bottom |
| `.justify-content-start` | Aligns content to left |
| `.justify-content-center` | Aligns content to center |
| `.justify-content-end` | Aligns content to right |

#### ✅ **Example**
```html
<div class="container">
  <div class="row align-items-center justify-content-center" style="height: 200px;">
    <div class="col-4 bg-primary text-white">Aligned Center</div>
    <div class="col-4 bg-secondary text-white">Aligned Center</div>
  </div>
</div>
```

---

## 🎯 **Final Example (Combining Everything)**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Grid</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
</head>
<body>

<div class="container mt-4">
    <h2 class="text-center mb-4">Bootstrap Grid Example</h2>

    <div class="row">
        <div class="col-md-4 p-3 bg-primary text-white">Column 1</div>
        <div class="col-md-4 p-3 bg-secondary text-white">Column 2</div>
        <div class="col-md-4 p-3 bg-success text-white">Column 3</div>
    </div>

    <div class="row mt-3">
        <div class="col-lg-6 p-3 bg-danger text-white">Half width on large</div>
        <div class="col-lg-6 p-3 bg-warning text-dark">Half width on large</div>
    </div>

    <div class="row mt-3 justify-content-center">
        <div class="col-6 p-3 bg-info text-dark text-center">Centered Column</div>
    </div>

</div>

</body>
</html>
```

---

### 📌 **Key Takeaways**
- **Use `.container`, `.container-fluid`, or `.container-{breakpoint}` for layouts.**
- **Use `.row` to create a row and `.col` for responsive columns.**
- **Use `.col-{size}` for fixed widths and `.col-{breakpoint}-{size}` for responsive behavior.**
- **Use Bootstrap utility classes (`m-`, `p-`, `align-items-`, `justify-content-`) for styling.**
