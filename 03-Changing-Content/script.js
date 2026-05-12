/**
 * CONTENT UPDATING DEMO
 * Comparing textContent vs. innerHTML
 */

// ---------------------------------------------------------
// ⚠️ SECURITY NOTE: THE "INNERHTML" WARNING
// Using .innerHTML can be dangerous if content comes from a user.
// 👉 UNSAFE innerHTML can cause XSS (Cross-Site Scripting) 
//    attacks by executing malicious <script> tags.
// ✅ Use .textContent or .innerText for safer updates.
// ---------------------------------------------------------

const title = document.querySelector("#title");
const debug = document.querySelector("#debug");
const displayArea = document.querySelector("#display-area");

// 1. textContent (Safe & Literal)
// Sets text exactly as provided. HTML tags are treated as plain text.
// Use this by default for any user-provided data.
title.textContent = "Hello World";

// 2. innerHTML (Powerful & Risky)
// Parses the string as HTML. Tags like <span> are rendered as elements.
// Use only when you trust the source or need to inject structural HTML.
displayArea.innerHTML = "This is <span>Updated</span> content with HTML.";

// ---------------------------------------------------------
// 3. VISUALIZING THE DIFFERENCE
// ---------------------------------------------------------

// Example A: textContent preserves tags as text
const testA = document.createElement('p');
testA.textContent = "Setting with textContent: <b>Bold Me?</b>"; 
// Result: Browser displays the literal string "<b>Bold Me?</b>"
document.body.appendChild(testA);

// Example B: innerHTML renders tags as elements
const testB = document.createElement('p');
testB.innerHTML = "Setting with innerHTML: <b>Bold Me!</b>"; 
// Result: Browser renders the word "Bold Me!" in bold.
document.body.appendChild(testB);

// Update debug helper
// Note: .textContent retrieves the raw text without any HTML tags.
debug.textContent = title.textContent;

console.log("--- THE LESSON ---");
console.log("textContent: Safely handles strings, ignores tags.");
console.log("innerHTML: Parses strings as code, creates security risks.");