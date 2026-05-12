/**
 * PROJECT: TODO APP (WITH COMPLETION)
 */

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

let tasks = JSON.parse(localStorage.getItem("todo_data")) || [];

function render() {
    todoList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        
        // APPLY COMPLETION CLASS
        if (task.completed) li.classList.add("completed");

        li.innerHTML = `
            <span class="task-text" data-index="${index}">${task.text}</span>
            <div class="actions">
                <button class="edit-btn" data-index="${index}">✏️</button>
                <button class="delete-btn" data-index="${index}">🗑️</button>
            </div>
        `;
        todoList.appendChild(li);
    });

    localStorage.setItem("todo_data", JSON.stringify(tasks));
}

// CREATE
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const val = todoInput.value.trim();
    if (val) {
        tasks.push({ text: val, completed: false }); // New tasks start as false
        todoInput.value = "";
        render();
    }
});

// UPDATE & DELETE
todoList.addEventListener("click", (e) => {
    const index = e.target.dataset.index;
    if (index === undefined) return;

    // TOGGLE COMPLETION (Clicking the text)
    if (e.target.classList.contains("task-text")) {
        tasks[index].completed = !tasks[index].completed; // Flip the true/false
        render();
    } 
    
    // DELETE
    else if (e.target.classList.contains("delete-btn")) {
        tasks.splice(index, 1);
        render();
    } 

    // EDIT
    else if (e.target.classList.contains("edit-btn")) {
        const newName = prompt("Edit your task:", tasks[index].text);
        if (newName !== null && newName.trim() !== "") {
            tasks[index].text = newName.trim();
            render();
        }
    }
});

render();