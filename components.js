// components.js

const headerHTML = `
<nav id="shared-nav">
    <ul class="nav-links">
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
<footer id="shared-footer">
    <p>&copy; 2026 OOI XIEN XIEN - Personal Portfolio.</p>
    <div class="footer-links">
        <a href="https://github.com/" target="_blank" rel="noopener">My GitHub</a> |
        <a href="#top">Back to top ↑</a>
    </div>
</footer>
`;

function injectComponents() {
    const navPlaceholder = document.getElementById('nav-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');

    // Inject the HTML into the placeholders
    if (navPlaceholder) {
        navPlaceholder.innerHTML = headerHTML;
    }
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }

    // Run the active link highlighter from your script.js
    if (typeof highlightActiveLink === 'function') {
        highlightActiveLink();
    }
}

// Run this when the page loads
document.addEventListener("DOMContentLoaded", injectComponents);