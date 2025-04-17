
    const taskInput = document.getElementById('taskInput');
    const addBtn = document.getElementById('addBtn');
    const todoList = document.getElementById('todoList');

    // Add task
    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText === '') return;

      const li = document.createElement('li');
      li.innerHTML = `
        <span>${taskText}</span>
        <div class="actions">
          <button class="edit">✏️</button>
          <button class="delete">🗑️</button>
        </div>
      `;
      todoList.appendChild(li);
      taskInput.value = '';
    }

    // Add task on button click or Enter key
    addBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') addTask();
    });

    // Event Delegation: handle complete, delete, edit
    todoList.addEventListener('click', (e) => {
      const li = e.target.closest('li');
      const span = li.querySelector('span');

      if (e.target.classList.contains('delete')) {
        li.remove();
      }

      if (e.target.classList.contains('edit')) {
        const currentText = span.textContent;
        const input = document.createElement('input');
        input.type = 'text';
        input.value = currentText;
        input.style.flex = "1";
        span.replaceWith(input);
        input.focus();

        input.addEventListener('keydown', (ev) => {
          if (ev.key === 'Enter') {
            span.textContent = input.value.trim() || currentText;
            input.replaceWith(span);
          }
        });

        input.addEventListener('blur', () => {
          span.textContent = input.value.trim() || currentText;
          input.replaceWith(span);
        });
      }

      if (e.target.tagName === 'SPAN') {
        li.classList.toggle('completed');
      }
    });
 