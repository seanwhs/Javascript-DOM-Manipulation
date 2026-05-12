/**
 * FORM EVENTS & preventDefault
 * Managing submission without page reloads.
 */

const loginForm = document.querySelector("#login-form");
const msg = document.querySelector("#message");

loginForm.addEventListener("submit", (event) => {
    // 1. STOP THE REFRESH
    // By default, forms try to send data to a server and reload the page.
    // This stops that behavior so we can stay on the same page.
    event.preventDefault();

    // 2. CAPTURE THE DATA
    const username = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;

    // 3. PROCESS THE DATA
    console.log("Form Submitted Successfully!");
    console.log("Data Captured:", { username, email });

    // 4. FEEDBACK TO USER
    msg.textContent = `Welcome back, ${username}!`;
    
    // Optional: Clear the form
    loginForm.reset();
});