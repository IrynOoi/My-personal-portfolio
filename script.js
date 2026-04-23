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

    // 4. Initialize Certificate Modal
    initCertModal();
});



/**
 * Highlights the active link in the navigation based on the current page
 */
function highlightActiveLink() {
    const pathname = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        // Check if the current path includes the link href, or handle root index.html cases
        if (pathname.includes(href) || (pathname === "/" && href === "index.html") || (pathname.endsWith("/") && href === "index.html")) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/**
 * Initializes the certificate zoom modal
 */
function initCertModal() {
    const modal = document.getElementById("cert-modal");
    const modalImg = document.getElementById("modal-img");
    const captionText = document.getElementById("modal-caption");
    const certCards = document.querySelectorAll(".certificate-card");
    const closeBtn = document.querySelector(".close-modal");

    if (!modal || !certCards.length) return;

    certCards.forEach(card => {
        card.addEventListener("click", () => {
            const img = card.querySelector("img");
            if (img) {
                modal.style.display = "block";
                modalImg.src = img.src;
                captionText.innerHTML = img.alt;
                document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
            }
        });
    });

    const closeModal = () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    };

    if (closeBtn) closeBtn.onclick = closeModal;

    // Close modal when clicking outside the image
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Close on Escape key
    window.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && modal.style.display === "block") {
            closeModal();
        }
    });
}


// Add this to your script.js file

document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".circular-progress");

    // Create an observer so the animation only plays when scrolled into view
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let progressContainer = entry.target;
                let valueElement = progressContainer.querySelector(".progress-value");

                // Get the final target number (e.g., "85%" -> 85)
                let targetValue = parseInt(valueElement.innerText);
                let currentValue = 0;

                // Animation speed (lower is faster)
                let speed = 25;

                // Reset it to 0 before starting the animation
                progressContainer.style.setProperty('--progress', '0%');
                valueElement.innerText = '0%';

                // Start the counting animation
                let progressAnimation = setInterval(() => {
                    currentValue++;

                    // Update the text number
                    valueElement.innerText = `${currentValue}%`;
                    // Update the CSS variable for the conic-gradient circle
                    progressContainer.style.setProperty('--progress', `${currentValue}%`);

                    // Stop the animation when it hits the target value
                    if (currentValue >= targetValue) {
                        clearInterval(progressAnimation);
                    }
                }, speed);

                // Stop observing this element so it only animates once per page load
                observer.unobserve(progressContainer);
            }
        });
    }, {
        // Start animation when 30% of the element is visible on screen
        threshold: 0.3
    });

    // Attach the observer to all skill rings
    progressBars.forEach(bar => {
        observer.observe(bar);
    });
}
);

document.addEventListener("DOMContentLoaded", () => {
    // Select all the "Show More" buttons
    const showMoreBtns = document.querySelectorAll(".show-more-btn");

    showMoreBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            // Find the description div right above the button
            const desc = this.previousElementSibling;

            // Toggle the 'expanded' class to show/hide text
            desc.classList.toggle("expanded");

            // Change the button text and icon based on state
            if (desc.classList.contains("expanded")) {
                this.innerHTML = 'Show Less <i class="fas fa-chevron-up"></i>';
            } else {
                this.innerHTML = 'Show More <i class="fas fa-chevron-down"></i>';
            }
        });
    });
});
