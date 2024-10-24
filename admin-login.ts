const adminUsername = "admin"; // Hardcoded username
const adminPassword = "password123"; // Hardcoded password

document.getElementById("admin-login-form")?.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form from submitting normally

    const username = (document.getElementById("username") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;
    const messageDiv = document.getElementById("message");

    // Validate credentials
    if (username === adminUsername && password === adminPassword) {
        messageDiv!.innerText = "Login successful!";
        messageDiv!.style.color = "green"; // Set success message color
    } else {
        messageDiv!.innerText = "Invalid credentials. Please try again.";
        messageDiv!.style.color = "red"; // Set error message color
    }
});
