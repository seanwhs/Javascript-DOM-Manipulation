/**
 * EVENT BUBBLING
 * Understanding how events travel up the DOM tree.
 */

const button = document.querySelector("#main-btn");
const outerDiv = document.querySelector(".outer-div");

// 1. Target Listener
button.addEventListener("click", (event) => {
    console.log("1. BUTTON clicked");
    
    // To stop the bubble, uncomment the line below:
    // event.stopPropagation();
});

// 2. Parent Listener
outerDiv.addEventListener("click", () => {
    console.log("2. DIV (Parent) clicked");
});

// 3. Ancestor Listener
document.body.addEventListener("click", () => {
    console.log("3. BODY (Grandparent) clicked");
});

// 4. Global Listener
window.addEventListener("click", () => {
    console.log("4. WINDOW clicked");
});