var _a, _b;
(_a = document.getElementById("login-candidate")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    alert("Candidate login clicked!");
});
(_b = document.getElementById("login-admin")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    // Redirect to admin-login.html
    window.location.href = "admin-login.html";
});
