
### **JavaScript Breakdown:**

```js
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');
```

- **`form`**: This stores the reference to the form element, which contains the input field and the "Add" button.
- **`input`**: This stores the reference to the input field where the user types the task.
- **`list`**: This stores the reference to the unordered list (`<ul>`) that will hold the list of tasks.

---

### **Listening for Form Submission:**

```js
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const taskText = input.value.trim();
  if (taskText !== '') {
    addTask(taskText);
    input.value = '';
  }
});
```

- **`form.addEventListener('submit', function(e) {...})`**:  
  This sets up an event listener on the form that listens for the **submit** event (when the user clicks "Add" or presses Enter).

- **`e.preventDefault()`**:  
  Prevents the default form submission behavior (which would cause the page to reload).

- **`const taskText = input.value.trim();`**:  
  This grabs the value from the input field and removes any leading or trailing spaces (using `.trim()`).

- **`if (taskText !== '') {...}`**:  
  We only proceed if the input is not empty (i.e., the user has typed something).

- **`addTask(taskText);`**:  
  Calls the `addTask()` function, passing the task text to it. This function handles the actual creation and adding of the task to the list.

- **`input.value = '';`**:  
  Clears the input field after the task has been added.

---

### **Adding a Task (`addTask` Function):**

```js
function addTask(text) {
  const li = document.createElement('li');

  li.innerHTML = `
    <div class="left-section">
      <input type="checkbox" class="task-check" />
      <span class="task-text">${text}</span>
    </div>
    <div class="right-section">
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    </div>
  `;

  li.setAttribute('data-task', text);
  list.appendChild(li);
}
```

- **`function addTask(text)`**:  
  This is the function that adds a task to the list. It takes the task text as a parameter.

- **`const li = document.createElement('li');`**:  
  Creates a new `<li>` (list item) element to represent a single task.

- **`li.innerHTML = ...`**:  
  The `innerHTML` property sets the HTML content of the newly created `<li>`. It includes:
  - A **checkbox** (`<input type="checkbox" class="task-check" />`) to mark the task as done.
  - A **span** to display the task text (`<span class="task-text">${text}</span>`).
  - Two **buttons**: one for editing (`Edit`) and one for deleting (`Delete`).

- **`li.setAttribute('data-task', text);`**:  
  Adds a custom attribute `data-task` to the `<li>` element that stores the task text. This can be useful for accessing the task later.

- **`list.appendChild(li);`**:  
  Adds the newly created `<li>` element to the `<ul>` (the task list) in the DOM.

---

### **Event Listener for Task Actions (Clicking on Tasks)**

```js
list.addEventListener('click', function (e) {
  const li = e.target.closest('li');
```

- **`list.addEventListener('click', function(e) {...})`**:  
  This listens for clicks on any element inside the `todo-list`. Since multiple elements (checkbox, edit button, delete button) are involved, we use event delegation to listen for clicks on those specific elements.

- **`const li = e.target.closest('li');`**:  
  This finds the closest `<li>` element that was clicked, so we can easily target the specific task (whether the user clicked the checkbox, edit button, or delete button).

---

### **Deleting a Task:**

```js
if (e.target.classList.contains('delete-btn')) {
  li.remove();
}
```

- **`if (e.target.classList.contains('delete-btn'))`**:  
  Checks if the clicked element has the class `delete-btn`, which means the user clicked the "Delete" button.

- **`li.remove();`**:  
  Removes the `<li>` element (the task) from the DOM, effectively deleting it from the list.

---

### **Marking a Task as Done (Checkbox):**

```js
else if (e.target.classList.contains('task-check')) {
  li.classList.toggle('task-done');
}
```

- **`else if (e.target.classList.contains('task-check'))`**:  
  Checks if the clicked element is the checkbox (`task-check`). If it is, this means the user is marking the task as done or not done.

- **`li.classList.toggle('task-done');`**:  
  This toggles the class `task-done` on the task (`li`). If the checkbox is checked, it adds the `task-done` class (indicating the task is done), and if it’s unchecked, it removes the class (indicating the task is not done).
  
  The class `task-done` can be used to style the task differently (e.g., strike-through the text to indicate it’s completed).

---

### **Editing a Task (Toggling Between Edit/Save):**

```js
else if (e.target.classList.contains('edit-btn')) {
  const isEditing = li.classList.contains('editing');
  const leftSection = li.querySelector('.left-section');

  if (isEditing) {
    const inputField = leftSection.querySelector('.edit-input');
    const newText = inputField.value.trim();

    if (newText !== '') {
      const span = document.createElement('span');
      span.textContent = newText;
      span.className = 'task-text';

      leftSection.replaceChild(span, inputField);
      li.classList.remove('editing');
      e.target.textContent = 'Edit';
    }
  } else {
    const span = leftSection.querySelector('.task-text');
    const currentText = span.textContent;

    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.value = currentText;
    inputField.className = 'edit-input';

    leftSection.replaceChild(inputField, span);
    li.classList.add('editing');
    e.target.textContent = 'Save';
  }
}
```

- **`else if (e.target.classList.contains('edit-btn'))`**:  
  Checks if the clicked element is the "Edit" button.

- **`const isEditing = li.classList.contains('editing');`**:  
  Checks if the `li` element has the class `editing`, which indicates that the task is currently in **edit mode**.

#### **If the Task is in Edit Mode (`isEditing === true`)**:

- **Get the input field**:  
  `const inputField = leftSection.querySelector('.edit-input');` grabs the input field that is used for editing.
  
- **Get the new task text**:  
  `const newText = inputField.value.trim();` retrieves the new text entered by the user.

- **Update the task if new text is valid**:  
  If the new text is not empty, a new `<span>` is created with the updated task text, and the old input field is replaced with the new `<span>`.

- **Remove editing mode**:  
  `li.classList.remove('editing');` removes the `editing` class to switch back to normal mode.

- **Change button text**:  
  `e.target.textContent = 'Edit';` changes the button text back to "Edit".

#### **If the Task is NOT in Edit Mode (`isEditing === false`)**:

- **Get the current task text**:  
  The current task text is retrieved from the `<span>`.

- **Create an input field**:  
  A new `<input>` field is created with the current text as the value, allowing the user to edit it.

- **Switch to edit mode**:  
  `li.classList.add('editing');` adds the `editing` class to indicate that the task is now in edit mode.

- **Change button text**:  
  `e.target.textContent = 'Save';` changes the button text to "Save", so the user knows they can save their changes.

---

### **Summary:**
- **Adding a Task**: When the form is submitted, it creates a new task and adds it to the list.
- **Deleting a Task**: Clicking the "Delete" button removes the task from the list.
- **Marking a Task as Done**: Clicking the checkbox toggles a class to mark the task as done.
- **Editing a Task**: Clicking "Edit" switches the task into an editable state. Clicking "Save" saves the changes.

This makes for a fully interactive and editable to-do list. 