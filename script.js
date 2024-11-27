const hamburgerMenu = document.querySelector('.hamburger-menu');
const navCenter = document.querySelector('.nav-center');
const hamburgerIcon = document.getElementById('hamburger-icon');
const closeIcon = document.getElementById('close-icon');
const navLinks = document.querySelectorAll('.nav-center a'); // Select all nav links

// Toggle the navigation menu and icons
hamburgerMenu.addEventListener('click', () => {
    navCenter.classList.toggle('active'); // Toggle menu visibility

    if (navCenter.classList.contains('active')) {
        hamburgerIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    } else {
        hamburgerIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
});

// Close the menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default anchor behavior
        const targetId = link.getAttribute('href').substring(1); // Get the section ID

        // Smoothly scroll to the section
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        // Close the navbar
        navCenter.classList.remove('active');
        hamburgerIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    });
});

// Sticky navbar on scroll
const navbar = document.querySelector('nav');
const servicesSection = document.getElementById('services');

window.addEventListener('scroll', () => {
    const servicesOffset = servicesSection.offsetTop;
    const scrollPosition = window.scrollY + 60; // Adjust for offset value

    if (scrollPosition >= servicesOffset) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});
document.addEventListener('DOMContentLoaded', function () {
    // Select all anchor links that are meant for scrolling
    const links = document.querySelectorAll('a[href*="#"]:not([href="#"])');

    // Add click event listener to each link
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            // Check if the clicked link's pathname and hostname match the current location
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                // Get the target element (section) that matches the hash in the URL
                let target = document.querySelector(this.hash);

                // If the target exists, scroll to it smoothly
                if (target) {
                    // Prevent the default link behavior
                    e.preventDefault();

                    // Smooth scroll to the target element
                    window.scrollTo({
                        top: target.offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
