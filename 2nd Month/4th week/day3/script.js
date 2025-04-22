
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const list = document.getElementById('todo-list');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const taskText = input.value.trim();
      if (taskText !== '') {
        addTask(taskText);
        input.value = '';
      }
    });

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

    list.addEventListener('click', function (e) {
      const li = e.target.closest('li');

      // DELETE
      if (e.target.classList.contains('delete-btn')) {
        li.remove();
      }

      // CHECK/DONE
      else if (e.target.classList.contains('task-check')) {
        li.classList.toggle('task-done');
      }

      // EDIT / SAVE
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
    });