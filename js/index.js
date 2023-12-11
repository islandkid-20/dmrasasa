// Select all the nav-links
var navLinks = document.querySelectorAll('.nav-link');

// Function to remove 'active' class from all nav-links
function removeActiveClass() {
    navLinks.forEach(function(navLink) {
        navLink.classList.remove('active');
    });
}

// Add 'click' event listener to each nav-link
navLinks.forEach(function(navLink) {
    navLink.addEventListener('click', function(event) {
        event.preventDefault();

        // Remove 'active' class from all nav-links
        removeActiveClass();

        // Add 'active' class to clicked nav-link
        this.classList.add('active');
    });
});