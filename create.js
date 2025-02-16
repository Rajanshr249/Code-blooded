const API_KEY = "AIzaSyDhaLQWsIXZUcLVh7v89BBtMlxsJCjK9qE"; 
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyDhaLQWsIXZUcLVh7v89BBtMlxsJCjK9qE`;
const steps = document.querySelectorAll(".form-step");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const submitBtn = document.getElementById("submit-btn");
let currentStep = 0;

function showPopup(message) {
    let popup = document.createElement("div");
    popup.className = "custom-popup";
    popup.textContent = message;

    document.body.appendChild(popup);

    setTimeout(() => {
        popup.style.opacity = "0";
        setTimeout(() => popup.remove(), 500);
    }, 2000);
}
async function fetchAIResponse(prompt) {
    const requestBody = { contents: [{ parts: [{ text: prompt }] }] };

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyDhaLQWsIXZUcLVh7v89BBtMlxsJCjK9qE`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestBody),
        });

        const data = await response.json();
        return data?.candidates?.[0]?.content?.parts?.[0]?.text || "AI could not generate content. Try again.";
    } catch (error) {
        console.error("API Request Error:", error);
        return "Error generating content. Please try again later.";
    }
}
function nextStep() {
    let isValid = true;
    const step1Inputs = document.querySelectorAll("#step1 input, #step1 textarea");

    step1Inputs.forEach(input => {
        if (input.value.trim() === "") {
            isValid = false;
            input.style.border = "1px solid red";
        } else {
            input.style.border = "1px solid #ccc";
        }
    });

    if (!isValid) {
        showPopup("Please fill all required fields before proceeding.");
        return;
    }
    const userData = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        address: document.getElementById("address").value.trim(),
        education: document.getElementById("education").value.trim(),
        skills: document.getElementById("skills").value.trim(),
    };
    localStorage.setItem("userData", JSON.stringify(userData));

    document.getElementById("step1").style.display = "none";
    document.getElementById("step2").style.display = "block";
}

function prevStep() {
    document.getElementById("step2").style.display = "none";
    document.getElementById("step1").style.display = "block";
}

async function generateSummary() {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (!userData) {
        showPopup("Please fill in Step 1 first.");
        return;
    }

    const summaryBox = document.getElementById("summary");
    summaryBox.value = "Generating summary... Please wait.";

    const prompt = `Create a compelling professional summary for a resume. 
    The candidate's name is ${userData.name}, and they have the following background:
    - **Education:** ${userData.education}
    - **Skills:** ${userData.skills}

    Format it in a **third-person professional tone**, making it **concise and impactful**. 
    Avoid repeating the input exactly; instead, summarize strengths and experience naturally.`;

    summaryBox.value = await fetchAIResponse(prompt);
}

async function generateJobDescription() {
    const jobTitle = document.getElementById("jobs").value.trim();
    const companyName = document.getElementById("company").value.trim();
    const jobDescBox = document.getElementById("job-description");

    if (!jobTitle || !companyName) {
        showPopup("Please enter both Job Title and Company Name before generating a job description.");
        return;
    }

    jobDescBox.value = "Generating job description... Please wait.";

    const prompt = `Write a resume-friendly job description for a candidate who worked as a ${jobTitle} at ${companyName}. 
    Focus on their key responsibilities, achievements, and skills in bullet points for a professional resume.`;

    jobDescBox.value = await fetchAIResponse(prompt);
}

function submitResume() {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (!userData) {
        showPopup("Please complete all steps before submitting.");
        return;
    }

    let confirmationPopup = document.createElement("div");
    confirmationPopup.className = "custom-popup";
    confirmationPopup.innerHTML = `
        <p>Are you sure you want to submit your resume?</p>
        <button onclick="confirmSubmit(true)">Yes</button>
        <button onclick="confirmSubmit(false)">No</button>
    `;

    document.body.appendChild(confirmationPopup);
}

function confirmSubmit(isConfirmed) {
    if (isConfirmed) {
        window.location.href = "preview.html";
    }
    document.querySelector(".custom-popup").remove();
}
function nextStep() {
    let isValid = true;
    const step1Inputs = document.querySelectorAll("#step1 input, #step1 textarea");

    step1Inputs.forEach(input => {
        if (input.value.trim() === "") {
            isValid = false;
            input.style.border = "1px solid red";
        } else {
            input.style.border = "1px solid #ccc";
        }
    });

    if (!isValid) {
        showPopup("Please fill all required fields before proceeding.");
        return;
    }

    const userData = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        address: document.getElementById("address").value.trim(),
        education: document.getElementById("education").value.trim(),
        skills: document.getElementById("skills").value.trim(),
        summary: document.getElementById("summary")?.value.trim() || "", 
        jobTitle: document.getElementById("jobs")?.value.trim() || "",
        company: document.getElementById("company")?.value.trim() || "",
        jobDescription: document.getElementById("job-description")?.value.trim() || ""
    };

    localStorage.setItem("userData", JSON.stringify(userData));

    document.getElementById("step1").style.display = "none";
    document.getElementById("step2").style.display = "block";
}
