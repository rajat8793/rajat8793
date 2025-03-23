// Smooth Scrolling Effect
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form Submission Alert
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Your message has been sent!");
});
