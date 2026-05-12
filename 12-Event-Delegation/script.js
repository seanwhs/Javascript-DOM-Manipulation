/**
 * EVENT DELEGATION
 * One listener to rule them all.
 */

const list = document.querySelector("#task-list");
const input = document.querySelector("#task-input");
const addBtn = document.querySelector("#add-btn");

// 1. THE DELEGATED LISTENER
// We listen on the 'ul', but we use 'event.target' to find the 'li'
list.addEventListener("click", (event) => {
    // Check if the actual thing clicked matches our criteria
    if (event.target.matches("li")) {
        console.log("Delegated Click:", event.target.textContent);
        
        // Example action: Toggle a completed style
        event.target.style.textDecoration = 
            event.target.style.textDecoration === "line-through" ? "none" : "line-through";
    }
});

// 2. DYNAMIC CONTENT DEMO
// Adding a new item to show that delegation works for elements
// that didn't even exist when the listener was created!
addBtn.addEventListener("click", () => {
    if (input.value.trim() !== "") {
        const newLi = document.createElement("li");
        newLi.textContent = input.value;
        list.appendChild(newLi); // This new <li> is automatically "clickable"
        input.value = "";
    }
});