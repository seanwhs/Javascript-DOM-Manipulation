/**
 * THE FETCH API
 * Requesting data from a remote server.
 */

const btn = document.querySelector("#load-users");
const container = document.querySelector("#user-container");
const status = document.querySelector("#status");

btn.addEventListener("click", () => {
    status.textContent = "Connecting to server...";
    container.innerHTML = ""; // Clear old results

    // 1. THE FETCH CALL
    // Returns a Promise that resolves to a Response object.
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            // 2. PARSE THE JSON
            // We must convert the raw HTTP response into a JS object.
            if (!response.ok) throw new Error("Network response was not ok");
            return response.json(); 
        })
        .then(users => {
            // 3. USE THE DATA
            status.textContent = "";
            renderUsers(users);
            console.log("Data successfully loaded:", users);
        })
        .catch(error => {
            // 4. HANDLE ERRORS
            status.textContent = "Error loading data. Please try again.";
            console.error("Fetch error:", error);
        });
});

function renderUsers(users) {
    users.forEach(user => {
        const card = document.createElement("div");
        card.classList.add("user-card");
        
        card.innerHTML = `
            <h3>${user.name}</h3>
            <p>📧 ${user.email}</p>
            <p>🏢 ${user.company.name}</p>
        `;
        
        container.appendChild(card);
    });
}