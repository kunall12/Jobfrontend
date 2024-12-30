document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", (event) => {
        const email = document.getElementById("email");
        const password = document.getElementById("password");

        if (!email.checkValidity() || !password.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
            loginForm.classList.add("was-validated");
        }
    });
});
