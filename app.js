const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".list-group");
const clearButton = document.querySelector(".clear")
const filter = document.querySelector("#filter");


document.getElementById("task-list").innerHTML = localStorage.getItem("tasks")

const addTask = (e) => {

    if (taskInput.value !== "") {

        const li = document.createElement("li");
        li.className = "list-group-item";
        li.appendChild(document.createTextNode(taskInput.value))

        const link = document.createElement("a");
        link.appendChild(document.createTextNode("X"));
        link.href = "#";
        link.className = "float-right badge badge-pill badge-danger delete-item";

        li.appendChild(link);

        taskList.appendChild(li);
        taskInput.value = "";

        const tasks = document.getElementById("task-list").innerHTML
        localStorage.setItem("tasks", tasks)

        e.preventDefault();
    }


};

const deleteTask = (e) => {

    if (e.target.classList.contains("delete-item")) {
        e.target.parentElement.remove();
    }

    const tasks = document.getElementById("task-list").innerHTML
    localStorage.setItem("tasks", tasks)

}

const clearTasks = (e) => {

    taskList.innerHTML = "";

    const tasks = document.getElementById("task-list").innerHTML
    localStorage.setItem("tasks", tasks)

}

const filterTasks = (e) => {
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




form.addEventListener("submit", addTask);

taskList.addEventListener("click", deleteTask);

clearButton.addEventListener("click", clearTasks);

filter.addEventListener("keyup", filterTasks);





