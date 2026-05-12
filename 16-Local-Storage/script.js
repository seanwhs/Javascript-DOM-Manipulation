/**
 * LOCAL STORAGE DEMO
 * Persistence across page refreshes.
 */

const btn = document.querySelector("#theme-toggle");
const statusText = document.querySelector("#status");

// 1. READ DATA ON LOAD
// Check if the user has a saved preference from a previous visit
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    statusText.textContent = "Current Theme: Dark";
}

// 2. SAVE DATA ON INTERACTION
btn.addEventListener("click", () => {
    // Toggle the class
    const isDark = document.body.classList.toggle("dark-mode");

    if (isDark) {
        // SET DATA: Store the string "dark" under the key "theme"
        localStorage.setItem("theme", "dark");
        statusText.textContent = "Current Theme: Dark";
    } else {
        // REMOVE or OVERWRITE DATA
        localStorage.setItem("theme", "light");
        statusText.textContent = "Current Theme: Light";
    }
});

/**
 * PRO-TIP: You can clear everything using:
 * localStorage.clear();
 */