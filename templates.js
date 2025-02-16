document.addEventListener("DOMContentLoaded", function() {
    const userData = {
        name: "John Doe",
        email: "john@example.com",
        phone: "+1234567890",
        address: "123 Street, City, Country",
        summary: "Experienced software developer with expertise in JavaScript.",
        education: "B.Sc. in Computer Science",
        skills: "JavaScript, HTML, CSS, React, Node.js",
        experience: "Software Engineer at XYZ Company"
    };

    const templates = {
        modern: `
            <div class="modern-template">
                <header>
                    <h1>${userData.name}</h1>
                    <div class="contact-info">
                        <p><i class="fas fa-envelope"></i> ${userData.email}</p>
                        <p><i class="fas fa-phone"></i> ${userData.phone}</p>
                        <p><i class="fas fa-map-marker-alt"></i> ${userData.address}</p>
                    </div>
                </header>
                <section>
                    <h2>Summary</h2>
                    <p>${userData.summary}</p>
                </section>
                <section>
                    <h2>Education</h2>
                    <p>${userData.education}</p>
                </section>
                <section>
                    <h2>Skills</h2>
                    <p>${userData.skills}</p>
                </section>
                <section>
                    <h2>Experience</h2>
                    <p>${userData.experience}</p>
                </section>
            </div>
        `,
        professional: `
            <div class="professional-template">
                <h1>${userData.name}</h1>
                <p>${userData.email} | ${userData.phone} | ${userData.address}</p>
                <section>
                    <h2>Summary</h2>
                    <p>${userData.summary}</p>
                </section>
                <section>
                    <h2>Education</h2>
                    <p>${userData.education}</p>
                </section>
                <section>
                    <h2>Skills</h2>
                    <p>${userData.skills}</p>
                </section>
                <section>
                    <h2>Experience</h2>
                    <p>${userData.experience}</p>
                </section>
            </div>
        `,
        creative: `
            <div class="creative-template">
                <h1>${userData.name}</h1>
                <p>${userData.email} | ${userData.phone} | ${userData.address}</p>
                <section>
                    <h2>Summary</h2>
                    <p>${userData.summary}</p>
                </section>
            </div>
        `,
        minimal: `
            <div class="minimal-template">
                <h1>${userData.name}</h1>
                <p>${userData.email} | ${userData.phone} | ${userData.address}</p>
                <h2>Education</h2>
                <p>${userData.education}</p>
            </div>
        `,
        executive: `
            <div class="executive-template">
                <h1>${userData.name}</h1>
                <p>${userData.email} | ${userData.phone} | ${userData.address}</p>
                <h2>Professional Experience</h2>
                <p>${userData.experience}</p>
            </div>
        `,
        elegant: `
            <div class="elegant-template">
                <h1>${userData.name}</h1>
                <p>${userData.email} | ${userData.phone} | ${userData.address}</p>
            </div>
        `,
        bold: `
            <div class="bold-template">
                <h1>${userData.name}</h1>
                <h2>Contact</h2>
                <p>${userData.email} | ${userData.phone} | ${userData.address}</p>
            </div>
        `,
        compact: `
            <div class="compact-template">
                <h1>${userData.name}</h1>
                <p>${userData.email} | ${userData.phone} | ${userData.address}</p>
            </div>
        `
    };

    document.getElementById("resume").innerHTML = templates.modern;

    window.changeTemplate = function(templateName) {
        if (templates[templateName]) {
            document.getElementById("resume").innerHTML = templates[templateName];
        }
    };
});
