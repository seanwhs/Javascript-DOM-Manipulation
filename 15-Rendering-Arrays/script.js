/**
 * RENDERING ARRAYS
 * Transforming data structures into visual elements.
 */

const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];
const list = document.querySelector("#fruit-list");

// The "Render" Function
function renderList(dataArray) {
    // 1. CLEAR existing content (to avoid duplicates if called twice)
    list.innerHTML = "";

    // 2. LOOP through the data
    dataArray.forEach(item => {
        // 3. CREATE the element
        const li = document.createElement("li");

        // 4. CONFIGURE the element
        li.textContent = item;
        
        // 5. APPEND to the DOM
        list.appendChild(li);
        
        console.log(`Rendered: ${item}`);
    });
}

// Execute the render
renderList(fruits);