// components.js

const navHTML = `
<nav>
    <button class="hamburger" id="hamburger-menu">
        <i class="fas fa-bars"></i>
    </button>

    <ul class="nav-links" id="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="personal_detail.html">Personal Detail</a></li>
        <li><a href="academic.html">Academic Journey</a></li>
        <li><a href="projects.html">Previous Project</a></li>
        <li><a href="certificates.html">Certificate</a></li>
        <li><a href="resume.html">My Resume</a></li>
    </ul>
</nav>
`;

const footerHTML = `
<footer id="shared-footer" style="padding: 40px 20px 30px; text-align: center; background-color: var(--color-dark); color: #d1dfd2; display: flex; flex-direction: column; align-items: center; gap: 20px;">
    
    <div style="text-align: center; margin-bottom: 10px;">
        <img src="gallery/github_photo.jpg" alt="Click to enlarge" 
             onclick="openFooterImage()"
             style="width: 240px; height: auto; border-radius: 8px; border: 3px solid var(--color-light); box-shadow: 0 8px 20px rgba(0,0,0,0.3); cursor: pointer; transition: transform 0.3s ease;"
             onmouseover="this.style.transform='scale(1.05)'" 
             onmouseout="this.style.transform='scale(1)'"
             title="Click to enlarge">
        <p style="font-size: 0.85rem; margin-top: 12px; color: var(--color-light); font-weight: 500;">
            <i class="fas fa-search-plus"></i> Click photo to enlarge
        </p>
    </div>

    <a href="https://github.com/IrynOoi" target="_blank" rel="noopener" 
       style="display: inline-flex; align-items: center; justify-content: center; gap: 10px; padding: 12px 28px; background-color: var(--color-bg); color: var(--color-dark); font-weight: 700; text-decoration: none; border-radius: 50px; font-size: 1.05rem; transition: all 0.3s ease; box-shadow: 0 5px 15px rgba(0,0,0,0.2);"
       onmouseover="this.style.backgroundColor='var(--color-medium)'; this.style.color='#fff'; this.style.transform='translateY(-3px)';" 
       onmouseout="this.style.backgroundColor='var(--color-bg)'; this.style.color='var(--color-dark)'; this.style.transform='translateY(0)';">
        <i class="fab fa-github" style="font-size: 1.3rem;"></i> Visit My GitHub Profile
    </a>

    <div style="margin-top: 20px; width: 100%; max-width: 600px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px; display: flex; justify-content: space-around; flex-wrap: wrap; gap: 15px;">
        <span style="font-weight: 500;">&copy; 2026 OOI XIEN XIEN - Personal Portfolio</span>
        <a href="#top" style="color: #fff; text-decoration: none; font-weight: 600; transition: color 0.3s;" onmouseover="this.style.color='var(--color-light)'" onmouseout="this.style.color='#fff'">Back to top ↑</a>
    </div>

    <div id="footer-lightbox" class="modal" onclick="closeFooterImage(event)" style="z-index: 9999;">
        <span class="close-modal" onclick="closeFooterImage(event)">&times;</span>
        <img class="modal-content" src="gallery/github_photo.jpg" alt="Enlarged GitHub Photo" style="border: 4px solid var(--color-light); border-radius: 12px; max-height: 80vh; width: auto;">
    </div>
</footer>
`;

function injectComponents() {
    const navPlaceholder = document.getElementById('nav-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (navPlaceholder) {
        navPlaceholder.innerHTML = navHTML;

        // ADDED THIS: Attach the mobile menu listener immediately after injecting the HTML
        const hamburger = document.getElementById('hamburger-menu');
        const navLinks = document.getElementById('nav-links');

        if (hamburger && navLinks) {
            hamburger.addEventListener('click', () => {
                navLinks.classList.toggle('active');

                // Toggle the FontAwesome icon (Bars <-> X)
                const icon = hamburger.querySelector('i');
                if (navLinks.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        }
    }

    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }

    if (typeof highlightActiveLink === 'function') {
        highlightActiveLink();
    }
}

// Global functions to handle the footer image click
window.openFooterImage = function () {
    const modal = document.getElementById('footer-lightbox');
    if (modal) {
        modal.style.display = 'block';
    }
};

window.closeFooterImage = function (event) {
    // Only close if clicking the dark background or the X button
    if (event.target.id === 'footer-lightbox' || event.target.className === 'close-modal') {
        document.getElementById('footer-lightbox').style.display = 'none';
    }
};

document.addEventListener("DOMContentLoaded", injectComponents);