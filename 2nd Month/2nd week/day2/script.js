let todos = []; // Array to store tasks

function addTask() {
    let task = prompt("Enter a task:");
    if (task) {
        todos.push(task);
        console.log(`Added: "${task}"`);
    } else {
        console.log("No task entered.");
    }
    showTasks();
}

function removeTask() {
    showTasks(); // Show tasks before asking for input
    let index = parseInt(prompt("Enter the task number to remove:")) - 1;

    if (!isNaN(index) && index >= 0 && index < todos.length) {
        console.log(`Removed: "${todos[index]}"`);
        todos.splice(index, 1); // Removes 1 task at given index
    } else {
        console.log("Invalid task number.");
    }
    showTasks();
}

function showTasks() {
    console.log("\nYour To-Do List:");
    if (todos.length === 0) {
        console.log("No tasks yet.");
    } else {
        todos.forEach((task, i) => console.log(`${i + 1}. ${task}`));
    }
}

function showMenu() {
    let choice;
    do {
        choice = prompt(
            "Choose an option:\n1. Add Task\n2. Remove Task\n3. View Tasks\n4. Exit"
        );

        switch (choice) {
            case "1":
                addTask();
                break;
            case "2":
                removeTask();
                break;
            case "3":
                showTasks();
                break;
            case "4":
                console.log("Exiting...");
                break;
            default:
                console.log("Invalid choice.");
        }
    } while (choice !== "4");
}

// Run the menu
showMenu();
