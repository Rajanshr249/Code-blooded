document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 50,
                    behavior: "smooth",
                });
            }
        });
    });
    document.querySelectorAll(".dropdown").forEach(dropdown => {
        dropdown.addEventListener("mouseover", function () {
            this.querySelector(".dropdown-content").style.display = "block";
        });

        dropdown.addEventListener("mouseleave", function () {
            this.querySelector(".dropdown-content").style.display = "none";
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const username = localStorage.getItem("username");

    if (username) {
        const authLinks = document.querySelector(".auth-links");
        const userNameElement = document.createElement("span");
        userNameElement.innerText = username;
        userNameElement.style.marginLeft = "10px";
        userNameElement.style.fontWeight = "bold";
        userNameElement.style.color = "#333"; 

        authLinks.appendChild(userNameElement);
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const usernameDisplay = document.getElementById("username-display");
    const storedUsername = localStorage.getItem("username");

    if (storedUsername) {
        usernameDisplay.textContent = storedUsername; 
    } else {
        usernameDisplay.textContent = "Guest"; 
    }
});

