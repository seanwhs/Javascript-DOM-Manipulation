/**
 * TIMERS: setTimeout
 * Scheduling code to run after a specific delay.
 */

const btn = document.querySelector("#trigger-btn");
const toast = document.querySelector("#notification");

btn.addEventListener("click", () => {
    btn.disabled = true;
    btn.textContent = "Processing...";

    // 1. SETTIMEOUT
    // Arguments: (Callback function, Delay in milliseconds)
    // 2000ms = 2 seconds
    setTimeout(() => {
        // This code runs AFTER the delay
        showNotification();
        
        btn.disabled = false;
        btn.textContent = "Run Task (2s Delay)";
        console.log("Timer finished: Hello!");
    }, 2000);
});

function showNotification() {
    toast.classList.add("show");

    // Nesting a second timer to auto-hide the toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

/**
 * PRO-TIP: Canceling a timer
 * const myTimer = setTimeout(() => { ... }, 5000);
 * clearTimeout(myTimer); // The code inside will never run
 */