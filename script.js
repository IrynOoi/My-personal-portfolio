// script.js
// =======================================================
// JAVASCRIPT FUNCTIONS FOR INTERACTIVE ELEMENTS
// =======================================================

document.addEventListener("DOMContentLoaded", () => {

    /* * 1. Display Current Date & Time
     */
    const datetimeDisplay = document.getElementById("datetime-display");
    function updateDateTime() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        if (datetimeDisplay) {
            datetimeDisplay.textContent = now.toLocaleDateString('en-US', options);
        }
    }
    updateDateTime();
    setInterval(updateDateTime, 60000);

    /* * 2. Hobbies Toggle Button
     */
    // const toggleHobbiesBtn = document.getElementById("toggle-hobbies-btn");
    // const hobbiesSection = document.getElementById("hobbies-section");
    // if (toggleHobbiesBtn && hobbiesSection) {
    //     toggleHobbiesBtn.addEventListener("click", () => {
    //         const isHidden = hobbiesSection.classList.contains("hidden");
    //         if (isHidden) {
    //             hobbiesSection.classList.remove("hidden");
    //             toggleHobbiesBtn.textContent = "Hide My Hobbies";
    //         } else {
    //             hobbiesSection.classList.add("hidden");
    //             toggleHobbiesBtn.textContent = "Show My Hobbies";
    //         }
    //     });
    // }

    // // 3. THIS IS THE CRUCIAL LINE! It tells the certificates to become clickable.
    initCertModal();
});


/**
 * 4. Highlights the active link in the navigation
 */
function highlightActiveLink() {
    const pathname = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (pathname.includes(href) || (pathname === "/" && href === "index.html") || (pathname.endsWith("/") && href === "index.html")) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/**
 * 5. Initializes the Certificate Zoom Modal
 */
function initCertModal() {
    const modal = document.getElementById("cert-modal");
    const modalImg = document.getElementById("modal-img");
    const captionText = document.getElementById("modal-caption");
    const certCards = document.querySelectorAll(".certificate-card");

    // If we aren't on the certificates page, stop running this code
    if (!modal || !certCards.length) return;

    // FIX: Only grab the 'X' button inside the certificate modal (ignores the footer modal)
    const closeBtn = modal.querySelector(".close-modal");

    certCards.forEach(card => {
        card.addEventListener("click", () => {
            const img = card.querySelector("img");
            if (img) {
                modal.style.display = "block";
                modalImg.src = img.src;
                captionText.innerHTML = img.alt;
                document.body.style.overflow = "hidden"; // Prevent scrolling
            }
        });
    });

    const closeModal = () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    };

    if (closeBtn) closeBtn.onclick = closeModal;

    // Close modal when clicking the dark background
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

/**
 * 6. Circular Progress Bar Animation
 */
document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".circular-progress");
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let progressContainer = entry.target;
                let valueElement = progressContainer.querySelector(".progress-value");
                let targetValue = parseInt(valueElement.innerText);
                let currentValue = 0;
                let speed = 25;

                progressContainer.style.setProperty('--progress', '0%');
                valueElement.innerText = '0%';

                let progressAnimation = setInterval(() => {
                    currentValue++;
                    valueElement.innerText = `${currentValue}%`;
                    progressContainer.style.setProperty('--progress', `${currentValue}%`);
                    if (currentValue >= targetValue) {
                        clearInterval(progressAnimation);
                    }
                }, speed);
                observer.unobserve(progressContainer);
            }
        });
    }, { threshold: 0.3 });

    progressBars.forEach(bar => { observer.observe(bar); });
});

/**
 * 7. Show More / Show Less feature for Projects
 */
document.addEventListener("DOMContentLoaded", () => {
    const showMoreBtns = document.querySelectorAll(".show-more-btn");
    showMoreBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            const desc = this.previousElementSibling;
            desc.classList.toggle("expanded");
            if (desc.classList.contains("expanded")) {
                this.innerHTML = 'Show Less <i class="fas fa-chevron-up"></i>';
            } else {
                this.innerHTML = 'Show More <i class="fas fa-chevron-down"></i>';
            }
        });
    });
});