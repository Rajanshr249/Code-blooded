document.addEventListener("DOMContentLoaded", function() {
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (!userData) {
        alert("No user data found. Please fill out your resume first.");
        return;
    }

    const templates = {
        modern: `
            <div class="modern-template">
                <header>
                    <h1>${userData.name || "Your Name"}</h1>
                    <div class="contact-info">
                        <p><i class="fas fa-envelope"></i> ${userData.email || "Email"}</p>
                        <p><i class="fas fa-phone"></i> ${userData.phone || "Phone"}</p>
                        <p><i class="fas fa-map-marker-alt"></i> ${userData.address || "Address"}</p>
                    </div>
                </header>
                <section class="summary">
                    <h2><i class="fas fa-user"></i> Summary</h2>
                    <div class="content">${userData.summary || "No summary provided"}</div>
                </section>
                <section class="education">
                    <h2><i class="fas fa-graduation-cap"></i> Education</h2>
                    <div class="content">${userData.education || "No education provided"}</div>
                </section>
                <section class="skills">
                    <h2><i class="fas fa-tools"></i> Skills</h2>
                    <div class="content">${userData.skills || "No skills provided"}</div>
                </section>
                <section class="experience">
                    <h2><i class="fas fa-briefcase"></i> Experience</h2>
                    <div class="content">
                        <p><strong>${userData.jobTitle || "Job Title"}</strong> at ${userData.company || "Company"}</p>
                        <p>${userData.jobDescription || "No job description provided"}</p>
                    </div>
                </section>
            </div>
        `,
        professional: `
            <div class="professional-template">
                <div class="header">
                    <h1>${userData.name || "Your Name"}</h1>
                    <div class="contact-grid">
                        <span>${userData.email || "Email"}</span>
                        <span>${userData.phone || "Phone"}</span>
                        <span>${userData.address || "Address"}</span>
                    </div>
                </div>
                <div class="main-content">
                    <section>
                        <h2>Summary</h2>
                        <div class="section-content">${userData.summary || "No summary provided"}</div>
                    </section>
                    <section>
                        <h2>Education</h2>
                        <div class="section-content">${userData.education || "No education provided"}</div>
                    </section>
                    <section>
                        <h2>Skills</h2>
                        <div class="section-content">${userData.skills || "No skills provided"}</div>
                    </section>
                    <section>
                        <h2>Experience</h2>
                        <div class="section-content">
                            <p><strong>${userData.jobTitle || "Job Title"}</strong> at ${userData.company || "Company"}</p>
                            <p>${userData.jobDescription || "No job description provided"}</p>
                        </div>
                    </section>
                </div>
            </div>
        `
    };

    const defaultTemplate = 'modern';
    document.getElementById("resume").innerHTML = templates[defaultTemplate];
    window.changeTemplate = function(templateName) {
        if (templates[templateName]) {
            document.getElementById("resume").innerHTML = templates[templateName];
            document.getElementById("resume").className = `resume ${templateName}`;
        }
    };
    window.downloadPDF = function() {
        const element = document.getElementById("resume");
        html2pdf(element);
    };
});
