/**
 * DYNAMIC STYLING DEMO
 * Controlling the UI via the .style property
 */

// 1. SELECTING THE ELEMENT
const title = document.querySelector("h1");
const box = document.getElementById("box-demo");

// 2. APPLYING INLINE STYLES
// Note: These are applied directly to the element's 'style' attribute.
// Inline styles generally override external CSS due to high specificity.
title.style.color = "crimson";
title.style.fontSize = "40px";
title.style.textShadow = "2px 2px 5px rgba(0,0,0,0.1)";

// 3. CAMELCASE CONVERSION
// CSS: background-color  => JS: backgroundColor
// CSS: border-radius     => JS: borderRadius
box.style.backgroundColor = "skyblue";
box.style.borderRadius = "12px";
box.style.transition = "all 0.5s ease"; // Preparing for dynamic change

// 4. DYNAMIC INTERACTION
// Using JS to change styles based on user action
box.addEventListener("mouseenter", () => {
    box.style.transform = "scale(1.2)";
    box.style.backgroundColor = "gold";
});

box.addEventListener("mouseleave", () => {
    box.style.transform = "scale(1)";
    box.style.backgroundColor = "skyblue";
});

console.log("Current inline color:", title.style.color);