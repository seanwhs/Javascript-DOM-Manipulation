/**
 * EVENT LISTENERS: Click Interactions
 * Syntax: element.addEventListener(event, function)
 */

const button = document.querySelector("#main-btn");
const counterDisplay = document.querySelector(".counter");
let count = 0;

// 1. Basic Click Listener
// The arrow function () => { ... } is the "Callback"
button.addEventListener("click", (event) => {
    // Increment logic
    count++;
    
    // Update the UI
    counterDisplay.textContent = count;
    
    // Log the event object to see hidden data (coordinates, target, etc.)
    console.log("Button Clicked!");
    console.log(`Mouse Coordinates: X=${event.clientX}, Y=${event.clientY}`);
    
    // Example: Logic based on count
    if (count % 5 === 0) {
        document.body.style.backgroundColor = getRandomColor();
    }
});

/**
 * Helper function for dynamic feedback
 */
function getRandomColor() {
    const colors = ['#ffebee', '#e3f2fd', '#f1f8e9', '#fff3e0', '#f3e5f5'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// 2. Multiple Listeners
// You can attach more than one function to the same event!
button.addEventListener("click", () => {
    button.style.letterSpacing = count + "px";
});