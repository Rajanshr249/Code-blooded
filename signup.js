document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signup-form");
    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault(); 
            const fullname = document.getElementById("fullname").value.trim();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirm-password").value;
            if (!fullname || !email || !password || !confirmPassword) {
                showPopup("All fields are required.");
                return;
            }
            if (password.length < 8) {
                showPopup("Password must be at least 8 characters long.");
                return;
            }
            if (password !== confirmPassword) {
                showPopup("Passwords do not match.");
                return;
            }
            localStorage.setItem("username", fullname);
            localStorage.setItem("userLoggedIn", "true");
            showPopup("Account successfully created!", function () {        
                    window.location.href = "home2.html"; 
            });
        });
    }
});
function showPopup(message, callback) {
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerHTML = `<p>${message}</p>`;
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.backgroundColor = "#333";
    popup.style.color = "#fff";
    popup.style.padding = "15px 30px";
    popup.style.borderRadius = "5px";
    popup.style.zIndex = "1000";
    popup.style.textAlign = "center";
    popup.style.fontSize = "16px";
    popup.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
    document.body.appendChild(popup);
    setTimeout(() => {
        popup.remove();
        if (callback) callback();
    }, 100);
}
