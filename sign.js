document.getElementById("signin-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    if (email === "" || password === "") {
        alert("Please enter both email and password.");
    } else {
        window.location.href = "home.html";
    }
});

