/**
 * KEYBOARD EVENTS
 * Listening for global inputs across the entire document.
 */

const keyDisplay = document.getElementById('key-display');
const metaInfo = document.getElementById('meta-info');

document.addEventListener("keydown", (event) => {
    // 1. Capture the key name
    const key = event.key;
    
    // 2. Update the UI
    keyDisplay.textContent = key === " " ? "Space" : key;
    keyDisplay.classList.add('highlight');
    
    // Remove highlight effect after a short delay
    setTimeout(() => keyDisplay.classList.remove('highlight'), 100);

    // 3. PRACTICE: Detecting Specific Keys
    // We use a switch or if/else to handle special logic
    switch (key) {
        case "Enter":
            console.log("✅ Action Confirmed (Enter)");
            document.body.style.backgroundColor = "#27ae60"; // Green
            break;
            
        case "Escape":
            console.log("❌ Action Canceled (Escape)");
            document.body.style.backgroundColor = "#c0392b"; // Red
            break;
            
        case "ArrowUp":
        case "ArrowDown":
        case "ArrowLeft":
        case "ArrowRight":
            console.log(`🕹️ Directional Input: ${key}`);
            document.body.style.backgroundColor = "#2980b9"; // Blue
            break;
            
        default:
            // Neutral color for other keys
            document.body.style.backgroundColor = "#2c3e50";
    }

    // 4. META DATA (Shift, Ctrl, Alt)
    if (event.shiftKey && key === "S") {
        console.log("Special Shortcut: Shift + S detected!");
    }
    
    metaInfo.textContent = `Code: ${event.code} | Shift: ${event.shiftKey}`;
});