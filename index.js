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

//For Fade in animation on text
$(document).ready(function() {
    // Function to check if an element is in the viewport
    function isInViewport(element) {
      var rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    // Function to handle the scroll event
    function handleScroll() {
      $('.fade-in').each(function() {
        if (isInViewport(this)) {
          $(this).addClass('fade-in-active');
        }
      });
    }

    // Initial check when the page loads
    handleScroll();

    // Event listener for scroll event
    $(window).on('scroll', handleScroll);
  });