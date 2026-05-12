/**
 * DYNAMIC CREATION: document.createElement()
 * 1. Create: Memory allocation
 * 2. Configure: Add text, classes, or styles
 * 3. Place: Attach to the actual DOM
 */

const list = document.querySelector("#list-container");
const addBtn = document.querySelector("#add-item-btn");

function addNewItem() {
    // 1. CREATE
    // The element exists in JS memory but is NOT yet on the screen.
    const li = document.createElement("li");

    // 2. CONFIGURE
    // Give it text and potentially styling/classes.
    li.textContent = "Fresh Apple 🍎";
    li.style.fontWeight = "bold";

    // 3. PLACE (Append)
    // This 'plugs' the element into the DOM tree as the last child of 'list'.
    list.appendChild(li);
    
    console.log("New element created and appended!");
}

addBtn.addEventListener("click", addNewItem);

// PRO-TIP: You can also use .prepend() to add to the TOP of the list!