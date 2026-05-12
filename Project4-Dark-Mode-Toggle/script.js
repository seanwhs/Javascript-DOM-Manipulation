/**
 * PROJECT 04: DARK MODE TOGGLE
 */

const toggleBtn = document.querySelector("#theme-toggle");
const body = document.body;

// 1. Check LocalStorage on Load
// We look for a key called 'darkMode'
const currentTheme = localStorage.getItem("darkMode");

// If the saved theme is "enabled", apply the class immediately
if (currentTheme === "enabled") {
    body.classList.add("dark-mode");
}

// 2. Toggle Event Listener
toggleBtn.addEventListener("click", () => {
    // Check again inside the click handler
    const isDark = body.classList.toggle("dark-mode");

    // 3. Persist the choice
    if (isDark) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});