const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".list-group");
const clearButton = document.querySelector(".clear")
const filter = document.querySelector("#filter");

// Load tasks from local storage
document.getElementById("task-list").innerHTML = localStorage.getItem("tasks")

const addTask = (e) => {

    // check if input is empty, if not then proceed to add the task
    if (taskInput.value !== "") {

        // create a list item from the input
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.appendChild(document.createTextNode(taskInput.value))
        
        // create the link icon for deleting tasks and add it to list item 
        const link = document.createElement("a");
        link.appendChild(document.createTextNode("X"));
        link.href = "#";
        link.className = "float-right badge badge-pill badge-danger delete-item";        
        li.appendChild(link);

        // append the task to ul element and clear the input field
        taskList.appendChild(li);
        taskInput.value = "";

        // update local storage with the contents of the ul element
        const tasks = document.getElementById("task-list").innerHTML
        localStorage.setItem("tasks", tasks)

        e.preventDefault();
    }


};

const deleteTask = (e) => {

    // check to see if the target is the actual link icon then delete the whole parent list item
    if (e.target.classList.contains("delete-item")) {
        e.target.parentElement.remove();
    }

    // update local storage with the contents of the ul element
    const tasks = document.getElementById("task-list").innerHTML
    localStorage.setItem("tasks", tasks)

}

const clearTasks = (e) => {

    // clear the content of the ul element
    taskList.innerHTML = "";

    // update local storage with the (empty) contents of the ul element
    const tasks = document.getElementById("task-list").innerHTML
    localStorage.setItem("tasks", tasks)

}

const filterTasks = (e) => {

    // grab all the list items from the ul element and cycle through them. If they don't contain the input text,
    // if not then toggle their display property to none
    const input = e.target.value.toLowerCase();
    document.querySelectorAll(".list-group-item").forEach(task => {
        const text = task.firstChild.textContent;
        if (text.toLowerCase().indexOf(input) != -1) {
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }
    })
    
}



// initialie all event listeners
form.addEventListener("submit", addTask);

taskList.addEventListener("click", deleteTask);

clearButton.addEventListener("click", clearTasks);

filter.addEventListener("keyup", filterTasks);





