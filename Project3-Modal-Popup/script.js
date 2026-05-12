/**
 * PROJECT 03: MODAL POPUP
 */

const openBtn = document.querySelector("#open-modal");
const closeBtn = document.querySelector("#close-btn");
const overlay = document.querySelector("#modal-overlay");

// Function: Open
const openModal = () => {
    overlay.classList.remove("hidden");
};

// Function: Close
const closeModal = () => {
    overlay.classList.add("hidden");
};

// --- EVENT LISTENERS ---

// 1. Open Button
openBtn.addEventListener("click", openModal);

// 2. Close Button (The X)
closeBtn.addEventListener("click", closeModal);

// 3. Overlay Click (The most common request)
// We check if e.target is EXACTLY the overlay to avoid closing when clicking inside the modal
overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
        closeModal();
    }
});

// 4. Escape Key Handling
// We attach this to 'document' so it works globally
document.addEventListener("keydown", (e) => {
    // Only fire if the Escape key is pressed AND the modal is visible
    if (e.key === "Escape" && !overlay.classList.contains("hidden")) {
        closeModal();
    }
});