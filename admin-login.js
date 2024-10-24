var _a;
var adminUsername = "admin"; // Hardcoded username
var adminPassword = "password123"; // Hardcoded password
(_a = document.getElementById("admin-login-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var messageDiv = document.getElementById("message");
    // Validate credentials
    if (username === adminUsername && password === adminPassword) {
        messageDiv.innerText = "Login successful!";
        messageDiv.style.color = "green"; // Set success message color
    }
    else {
        messageDiv.innerText = "Invalid credentials. Please try again.";
        messageDiv.style.color = "red"; // Set error message color
    }
});
