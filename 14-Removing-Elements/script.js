/**
 * REMOVING ELEMENTS
 * element.remove() vs parent.removeChild()
 */

const container = document.querySelector("#notification-container");

// Using Delegation to handle all "Dismiss" buttons
container.addEventListener("click", (event) => {
    if (event.target.matches(".close-btn")) {
        // Find the specific notification div that contains this button
        const notification = event.target.closest(".notification");

        // 1. Modern Method: .remove()
        // Simple and direct. The element removes itself from the DOM.
        notification.remove();
        
        console.log("Element removed using .remove()");
    }
});

/**
 * PRO-TIP: The Older Method
 * Before .remove() existed, you had to go to the parent first:
 * 
 * const parent = notification.parentElement;
 * parent.removeChild(notification);
 */