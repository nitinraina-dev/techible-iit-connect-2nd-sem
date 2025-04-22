## 🧠 What is `localStorage`?

`localStorage` lets your site **save data in the browser**, so it stays even after the user refreshes or closes the page.

- Stored as key–value pairs (both must be strings).
- Stored per domain and browser.
- Doesn’t expire (until cleared manually).

---

### ✅ How to Use It

```js
// Save to localStorage
localStorage.setItem('key', 'value');

// Read from localStorage
const value = localStorage.getItem('key');

// Remove an item
localStorage.removeItem('key');

// Clear all localStorage
localStorage.clear();
```

---

### 🧪 Example with Array of Tasks

```js
const tasks = ['Buy milk', 'Walk dog'];

// Save
localStorage.setItem('myTasks', JSON.stringify(tasks));

// Load
const saved = JSON.parse(localStorage.getItem('myTasks'));
console.log(saved); // ['Buy milk', 'Walk dog']
```

> Use `JSON.stringify()` to convert arrays/objects to strings  
> Use `JSON.parse()` to turn them back into usable JS data

---

## 🔧 Now Let’s Add `localStorage` to Your To-Do App

We’ll:
1. Save all tasks whenever they're added/edited/deleted/toggled
2. Load saved tasks when the page loads

---

### 🛠 Step-by-Step Plan

Each task will be an object like this:

```js
{
  text: 'Do homework',
  done: false
}
```

### 🔄 Functions we'll use:
- `saveTasksToStorage()`: Saves task array to localStorage
- `loadTasksFromStorage()`: Reads tasks from localStorage
- `renderTasks()`: Renders all tasks on the screen

---

Ready for the upgrade? Let’s dive into your updated app with full localStorage support 




### **JavaScript Breakdown:**

```js
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

let tasks = [];
```

- **`form`**: This holds the reference to the form element where users input new tasks.
- **`input`**: This holds the reference to the input field where users type the task.
- **`list`**: This holds the reference to the unordered list (`<ul>`) where all tasks are displayed.
- **`tasks`**: An array where all the tasks are stored. Each task is an object with `text` and `done` properties. `text` holds the task description, and `done` is a boolean that tracks whether the task is completed or not.

---

### **Load Tasks from Local Storage:**

```js
window.addEventListener('DOMContentLoaded', () => {
  const stored = localStorage.getItem('tasks');
  if (stored) {
    tasks = JSON.parse(stored);
    renderTasks();
  }
});
```

- **`window.addEventListener('DOMContentLoaded', () => {...})`**:  
  This event fires when the HTML document has fully loaded. It's a great place to initialize your app (like loading tasks from `localStorage`).
  
- **`const stored = localStorage.getItem('tasks');`**:  
  This tries to fetch the stored tasks from the browser's `localStorage` using the key `'tasks'`.

- **`if (stored) {...}`**:  
  If tasks are found in `localStorage`, the stored tasks are parsed from JSON into a JavaScript array with `JSON.parse(stored)`.

- **`tasks = JSON.parse(stored);`**:  
  This updates the `tasks` array with the tasks stored in `localStorage`.

- **`renderTasks();`**:  
  This calls the `renderTasks()` function to display the tasks on the page after loading them.

---

### **Add a New Task:**

```js
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const taskText = input.value.trim();
  if (taskText !== '') {
    tasks.push({ text: taskText, done: false });
    input.value = '';
    saveTasks();
    renderTasks();
  }
});
```

- **`form.addEventListener('submit', function(e) {...})`**:  
  Listens for the **submit** event on the form when the user adds a new task.

- **`e.preventDefault();`**:  
  This prevents the default form submission behavior (which would reload the page).

- **`const taskText = input.value.trim();`**:  
  Retrieves the text entered by the user and removes any leading/trailing spaces.

- **`if (taskText !== '') {...}`**:  
  Only proceed if the input is not empty.

- **`tasks.push({ text: taskText, done: false });`**:  
  Adds a new task to the `tasks` array. The task is an object containing the task text and a `done` property, which is initially set to `false` (task not done).

- **`input.value = '';`**:  
  Clears the input field after adding the task.

- **`saveTasks();`**:  
  Calls the `saveTasks()` function to save the updated `tasks` array to `localStorage`.

- **`renderTasks();`**:  
  Calls `renderTasks()` to re-render the task list on the page.

---

### **Save Tasks to Local Storage:**

```js
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
```

- **`function saveTasks()`**:  
  This function is used to save the current tasks to `localStorage`.

- **`localStorage.setItem('tasks', JSON.stringify(tasks));`**:  
  Converts the `tasks` array into a JSON string using `JSON.stringify(tasks)` and stores it in `localStorage` with the key `'tasks'`.

---

### **Render Tasks on the Page:**

```js
function renderTasks() {
  list.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    if (task.done) li.classList.add('task-done');

    li.innerHTML = `
      <div class="left-section">
        <input type="checkbox" class="task-check" ${task.done ? 'checked' : ''} data-index="${index}" />
        <span class="task-text">${task.text}</span>
      </div>
      <div class="right-section">
        <button class="edit-btn" data-index="${index}">Edit</button>
        <button class="delete-btn" data-index="${index}">Delete</button>
      </div>
    `;
    list.appendChild(li);
  });
}
```

- **`list.innerHTML = '';`**:  
  Clears the current list of tasks from the DOM before re-rendering them.

- **`tasks.forEach((task, index) => {...})`**:  
  Loops over the `tasks` array and creates an `<li>` for each task.

- **`const li = document.createElement('li');`**:  
  Creates a new list item (`<li>`) element to hold each task.

- **`if (task.done) li.classList.add('task-done');`**:  
  If the task is marked as "done", it adds the `task-done` class to the `<li>`. This class could be used for styling purposes (e.g., strikethrough).

- **`li.innerHTML = ...`**:  
  Sets the HTML content inside the `<li>`, including:
  - A checkbox (`<input type="checkbox" class="task-check" />`), which is checked if the task is done.
  - A span to show the task text (`<span class="task-text">${task.text}</span>`).
  - Edit and delete buttons, each with a `data-index` attribute pointing to the task's index in the array.

- **`list.appendChild(li);`**:  
  Appends the newly created `<li>` element to the `list` (`<ul>`) in the DOM.

---

### **Handle Task Actions (Edit, Delete, Mark Done):**

```js
list.addEventListener('click', function (e) {
  const index = e.target.dataset.index;
  
  // DELETE
  if (e.target.classList.contains('delete-btn')) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
  }

  // DONE
  else if (e.target.classList.contains('task-check')) {
    tasks[index].done = e.target.checked;
    saveTasks();
    renderTasks();
  }

  // EDIT / SAVE
  else if (e.target.classList.contains('edit-btn')) {
    const li = e.target.closest('li');
    const leftSection = li.querySelector('.left-section');
    const task = tasks[index];
    const isEditing = li.classList.contains('editing');

    if (isEditing) {
      const inputField = leftSection.querySelector('.edit-input');
      const newText = inputField.value.trim();

      if (newText !== '') {
        task.text = newText;
        li.classList.remove('editing');
        e.target.textContent = 'Edit';
        saveTasks();
        renderTasks();
      }
    } else {
      const span = leftSection.querySelector('.task-text');
      const inputField = document.createElement('input');
      inputField.type = 'text';
      inputField.value = span.textContent;
      inputField.className = 'edit-input';

      leftSection.replaceChild(inputField, span);
      li.classList.add('editing');
      e.target.textContent = 'Save';
    }
  }
});
```

- **`list.addEventListener('click', function (e) {...})`**:  
  This listens for any click event inside the `todo-list`. We then check what was clicked (delete button, checkbox, or edit button).

- **`const index = e.target.dataset.index;`**:  
  This retrieves the `data-index` attribute of the clicked element, which indicates the index of the task in the `tasks` array.

#### **Delete Task:**

```js
if (e.target.classList.contains('delete-btn')) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}
```

- If the "Delete" button was clicked (`delete-btn`), we remove the task from the `tasks` array using `splice()`. After that, we save the updated array to `localStorage` and re-render the tasks.

#### **Mark Task as Done:**

```js
else if (e.target.classList.contains('task-check')) {
  tasks[index].done = e.target.checked;
  saveTasks();
  renderTasks();
}
```

- If the checkbox is clicked (`task-check`), we update the `done` property of the task. If the checkbox is checked, `e.target.checked` will be `true`, otherwise, it will be `false`.

#### **Edit Task:**

```js
else if (e.target.classList.contains('edit-btn')) {
  const li = e.target.closest('li');
  const leftSection = li.querySelector('.left-section');
  const task = tasks[index];
  const isEditing = li.classList.contains('editing

');

  if (isEditing) {
    const inputField = leftSection.querySelector('.edit-input');
    const newText = inputField.value.trim();

    if (newText !== '') {
      task.text = newText;
      li.classList.remove('editing');
      e.target.textContent = 'Edit';
      saveTasks();
      renderTasks();
    }
  } else {
    const span = leftSection.querySelector('.task-text');
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.value = span.textContent;
    inputField.className = 'edit-input';

    leftSection.replaceChild(inputField, span);
    li.classList.add('editing');
    e.target.textContent = 'Save';
  }
}
```

- If the **Edit** button is clicked, we toggle between edit and normal mode:
  - If the task is in **edit mode**, we save the updated text and switch back to the normal mode.
  - If the task is **not in edit mode**, we create an input field so the user can modify the task text.

---

### **Summary:**

- **Saving and Loading Tasks**: Tasks are saved to `localStorage`, and they persist when the page is reloaded.
- **Adding a Task**: A task is added to the array, saved to `localStorage`, and displayed.
- **Editing a Task**: Clicking "Edit" toggles between edit and save modes.
- **Deleting a Task**: Clicking "Delete" removes the task from both the array and `localStorage`.
- **Marking a Task as Done**: Clicking the checkbox toggles the task's "done" status.

This setup allows the to-do list to persist data between page reloads and gives users the ability to manage tasks dynamically.


Let's break down the edit button code in detail, focusing on how the "Edit" and "Save" functionality works when you click on the **edit button** in your to-do list.

### Full Explanation:

```javascript
else if (e.target.classList.contains('edit-btn')) {
  const li = e.target.closest('li'); // 1
  const leftSection = li.querySelector('.left-section'); // 2
  const task = tasks[index]; // 3
  const isEditing = li.classList.contains('editing'); // 4

  if (isEditing) { // 5
    const inputField = leftSection.querySelector('.edit-input'); // 6
    const newText = inputField.value.trim(); // 7

    if (newText !== '') { // 8
      task.text = newText; // 9
      li.classList.remove('editing'); // 10
      e.target.textContent = 'Edit'; // 11
      saveTasks(); // 12
      renderTasks(); // 13
    }
  } else { // 14
    const span = leftSection.querySelector('.task-text'); // 15
    const inputField = document.createElement('input'); // 16
    inputField.type = 'text'; // 17
    inputField.value = span.textContent; // 18
    inputField.className = 'edit-input'; // 19

    leftSection.replaceChild(inputField, span); // 20
    li.classList.add('editing'); // 21
    e.target.textContent = 'Save'; // 22
  }
}
```

### **Detailed Breakdown:**

1. **`const li = e.target.closest('li');`**
   - This line finds the closest `<li>` element that contains the clicked button (edit button). `e.target` is the element that triggered the event (in this case, the **edit button**), and `closest('li')` looks for the nearest parent `<li>` element. This helps identify the task associated with the edit button.

2. **`const leftSection = li.querySelector('.left-section');`**
   - This finds the `.left-section` of the `li`, which is the part of the task item where the task text and checkbox are located.

3. **`const task = tasks[index];`**
   - This retrieves the task object from the `tasks` array at the current index (`index`) to work with the data associated with the task you're editing.

4. **`const isEditing = li.classList.contains('editing');`**
   - This checks if the `li` element already has an `editing` class. The presence of this class determines if the task is currently being edited or not.
   - If `isEditing` is `true`, it means the task is in "edit mode" (you’re editing it). If `false`, the task is in "view mode" (not being edited).

### **If Block - Editing Mode (`isEditing === true`):**

5. **`if (isEditing) {`**
   - If the task is currently being edited (i.e., `isEditing` is `true`), the following code will handle saving the changes made to the task.

6. **`const inputField = leftSection.querySelector('.edit-input');`**
   - This finds the input field (where you typed the new task text) in the left section of the `li`. This input field is created when the task is switched into "edit mode".

7. **`const newText = inputField.value.trim();`**
   - This gets the value from the input field (i.e., the new text that the user has entered) and removes any leading or trailing spaces using `.trim()`.

8. **`if (newText !== '') {`**
   - This checks if the user has entered some text. If the `newText` is not an empty string, it proceeds with updating the task.

9. **`task.text = newText;`**
   - This updates the `text` property of the task object in the `tasks` array with the new text the user entered.

10. **`li.classList.remove('editing');`**
    - This removes the `editing` class from the `li` element, signaling that the task is no longer in "edit mode."

11. **`e.target.textContent = 'Edit';`**
    - This changes the text of the **edit button** back to "Edit". This indicates that the task is no longer in the process of editing and you can click it to start editing again.

12. **`saveTasks();`**
    - This calls a function (presumably saving the updated `tasks` array to local storage or elsewhere) to persist the changes made to the task.

13. **`renderTasks();`**
    - This calls a function (presumably rendering the updated tasks on the page) to re-render the list of tasks, showing the updated task text.

### **Else Block - View Mode (`isEditing === false`):**

14. **`else {`**
    - If the task is not in "edit mode" (i.e., `isEditing` is `false`), the following code switches the task into "edit mode".

15. **`const span = leftSection.querySelector('.task-text');`**
    - This retrieves the current task text, which is inside a `<span>` with the class `.task-text`. This is the text the user will be editing.

16. **`const inputField = document.createElement('input');`**
    - This creates a new input field where the user will type the updated task text.

17. **`inputField.type = 'text';`**
    - This sets the input field's type to "text", so it will accept normal text input.

18. **`inputField.value = span.textContent;`**
    - This sets the value of the new input field to the current task's text (from the `.task-text` span), so the user can see the current text in the input field when editing.

19. **`inputField.className = 'edit-input';`**
    - This adds a class `edit-input` to the input field, which can be used for styling purposes.

20. **`leftSection.replaceChild(inputField, span);`**
    - This replaces the current task text (the `<span>`) with the newly created `<input>` field. Now the user can edit the task.

21. **`li.classList.add('editing');`**
    - This adds the `editing` class to the `li` element to signal that the task is in "edit mode."

22. **`e.target.textContent = 'Save';`**
    - This changes the text of the **edit button** to "Save". This indicates that the button will now save the changes when clicked.

### **Summary:**
- The logic checks whether the task is currently being edited or not using the `editing` class.
- If it's being edited, the entered text is saved to the task, the task is re-rendered, and the `edit` button text is switched back.
- If it's not being edited, it allows the user to edit the task by converting the text into an input field, updating the button to say "Save", and adding the `editing` class.