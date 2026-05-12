/**
 * PROJECT 01: COUNTER APP
 * State Management & DOM Updates
 */

// 1. INITIAL STATE
// This variable lives in JS memory and tracks the "truth" of our app.
let count = 0;

// 2. SELECT ELEMENTS
const countDisplay = document.querySelector("#count");
const buttonsContainer = document.querySelector(".buttons");

// 3. EVENT DELEGATION
// Instead of 3 listeners, we use 1 on the parent container.
buttonsContainer.addEventListener("click", (e) => {
    const btn = e.target;

    // Check which button was clicked using classList
    if (btn.classList.contains("btn-increase")) {
        count++;
    } else if (btn.classList.contains("btn-decrease")) {
        count--;
    } else if (btn.classList.contains("btn-reset")) {
        count = 0;
    }

    // 4. UPDATE DOM
    // Sync the "State" (JS variable) with the "UI" (HTML display)
    updateDisplay();
});

/**
 * Updates the text and color based on the current state
 */
function updateDisplay() {
    countDisplay.textContent = count;

    // Visual feedback logic
    if (count > 0) {
        countDisplay.style.color = "#28a745";
    } else if (count < 0) {
        countDisplay.style.color = "#dc3545";
    } else {
        countDisplay.style.color = "#333";
    }
}