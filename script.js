//script.js
// =======================================================
// JAVASCRIPT FUNCTIONS FOR INTERACTIVE ELEMENTS
// =======================================================

document.addEventListener("DOMContentLoaded", () => {
    
    /* 
     * JavaScript Function 1: Display Current Date & Time
     * Updates an element in the hero section dynamically.
     */
    const datetimeDisplay = document.getElementById("datetime-display");

    function updateDateTime() {
        const now = new Date();
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        if (datetimeDisplay) {
            datetimeDisplay.textContent = now.toLocaleDateString('en-US', options);
        }
    }

    // Call immediately and refresh every minute
    updateDateTime();
    setInterval(updateDateTime, 60000);

    /* 
     * JavaScript Function 2: Interactive Button (Show/Hide block)
     * Toggles the visibility of the hobbies section when clicked.
     */
    const toggleHobbiesBtn = document.getElementById("toggle-hobbies-btn");
    const hobbiesSection = document.getElementById("hobbies-section");

    if (toggleHobbiesBtn && hobbiesSection) {
        toggleHobbiesBtn.addEventListener("click", () => {
            // Toggle the visibility CSS class
            const isHidden = hobbiesSection.classList.contains("hidden");

            if (isHidden) {
                hobbiesSection.classList.remove("hidden");
                toggleHobbiesBtn.textContent = "Hide My Hobbies";
            } else {
                hobbiesSection.classList.add("hidden");
                toggleHobbiesBtn.textContent = "Show My Hobbies";
            }
        });
    }

    /* 
     * JavaScript Function 3: Form Validation & Alert
     * Validates inputs before allowing submission.
     */
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            // Prevent actual form submission to a server for this assignment
            e.preventDefault();

            // Collect form values
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            // Basic Check: Are fields empty?
            if (name === "" || email === "" || message === "") {
                alert("Validation Error: Please fill in all fields before submitting.");
                return;
            }

            // Regex Check: Is email format valid?
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert("Validation Error: Please enter a correct email address notation.");
                return;
            }

            // Success Result Alert
            alert(`Thanks for reaching out, ${name}!\nYour message has been processed correctly by our JS validation.`);

            // Clear the form fields after successful 'submission'
            contactForm.reset();
        });
    }
});
