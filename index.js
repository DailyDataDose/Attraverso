// 1. FOR FADING IN ANIMATIONS
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

$(document).ready(function() {
  // Function to check if an element is near the viewport
  function isNearViewport(element, distance = 30) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) + distance
    );
  }

  // Function to handle the scroll event
  function handleScroll() {
    $('.fade-in').each(function() {
      if (isNearViewport(this)) {
        $(this).addClass('fade-in-active');
      }
    });
  }

  // Initial check when the page loads
  handleScroll();

  // Event listener for scroll event
  $(window).on('scroll', handleScroll);
});

// 2. FOR CARD ANIMATIONS
const cards = document.querySelectorAll('.ani-card');

cards.forEach(card => {
    let isAnimating = false;

    card.addEventListener('mouseenter', function() {
        if (!isAnimating) {
            this.classList.add('hover-end');
        }
    });

    card.addEventListener('mouseleave', function() {
        isAnimating = true;
        this.classList.remove('hover-end');

        this.addEventListener('transitionend', () => {
            isAnimating = false;
        }, { once: true });
    });
});

