/**
 * DOM STATE MANAGEMENT: classList
 * Why this is better than .style:
 * 1. Separates Design (CSS) from Logic (JS).
 * 2. High Performance (Browser optimizes class changes).
 * 3. Easier to maintain complex UI changes.
 */

const box = document.querySelector(".box");
const body = document.body;

// 1. classList.add()
// Adds a class if it's not already there.
// Use for: Triggering "Success" animations or "Open" states.
document.getElementById("toggle-active").addEventListener("click", () => {
    box.classList.toggle("active");
    
    // Check if a class exists
    if (box.classList.contains("active")) {
        box.textContent = "I am Active!";
    } else {
        box.textContent = "Back to Normal";
    }
});

// 2. classList.toggle()
// Automatically adds the class if missing, removes it if present.
// Perfect for: Dark/Light mode switches.
document.getElementById("toggle-dark").addEventListener("click", () => {
    body.classList.toggle("dark");
});

// 3. classList.remove()
// Explicitly ensures a state is taken away.
document.getElementById("hide-box").addEventListener("click", () => {
    box.classList.toggle("hidden");
});

// 4. Debugging classes
console.log("Current classes on box:", box.classList);