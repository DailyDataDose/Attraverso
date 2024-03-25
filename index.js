// Select all navbar links
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

// Add click event listener to each navbar link
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior

        // Get the target section ID from the href attribute
        const targetId = this.getAttribute('href');

        // Get the target section element
        const targetSection = document.querySelector(targetId);

        // Scroll to the target section using smooth behavior
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});