let todos = [];

 let showTasks =()=>{

if(todos.length === 0){
    console.log("no tasks added");
    
}else{
    todos.forEach((curr,index)=>{
console.log(`task ${index+1}  ${curr}`);

    })
}

 }



function removeTask(){
    let number=parseInt(prompt("enter task"))-1;
    if(  !isNaN(number) && number>0 && number<todos.length  ){
        todos.splice(number,1);
    }else{
        console.log("invalid");
        
    }
}

function addTask() {
    let task = prompt("Enter a task:");
    if (task ) {
        todos.push(task);
    } else {
        console.log("nothing added")
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

showMenu();