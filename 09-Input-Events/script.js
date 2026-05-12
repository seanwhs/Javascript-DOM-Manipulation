/**
 * INPUT EVENTS
 * Capturing real-time data from form elements.
 */

const nameInput = document.querySelector("#name-input");
const colorInput = document.querySelector("#color-input");
const nameDisplay = document.querySelector("#name-display");
const profileCard = document.querySelector("#profile-card");

// 1. Real-time Text Update
// The 'input' event fires on every keystroke, unlike 'change' 
// which only fires when the user leaves the input (blurs).
nameInput.addEventListener("input", (event) => {
    const value = event.target.value;
    
    // Update UI instantly
    nameDisplay.textContent = value || "Your Name";
    
    // Logic: Simple validation feedback
    if (value.length > 15) {
        nameDisplay.style.color = "red";
    } else {
        nameDisplay.style.color = "#333";
    }
});

// 2. Real-time Color Update
// 'input' also works for sliders, checkboxes, and color pickers!
colorInput.addEventListener("input", (event) => {
    const pickedColor = event.target.value;
    
    // Apply dynamic styling
    profileCard.style.borderTopColor = pickedColor;
    nameDisplay.style.color = pickedColor;
});

console.log("Listeners active. Type in the boxes to see live updates.");