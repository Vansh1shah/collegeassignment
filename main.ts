document.getElementById("login-candidate")?.addEventListener("click", () => {
    alert("Candidate login clicked!");
});

document.getElementById("login-admin")?.addEventListener("click", () => {
    // Redirect to admin-login.html
    window.location.href = "admin-login.html";
});
    
