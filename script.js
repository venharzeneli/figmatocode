const hamburgerMenu = document.querySelector('.hamburger-menu');
const navCenter = document.querySelector('.nav-center');
const hamburgerIcon = document.getElementById('hamburger-icon');
const closeIcon = document.getElementById('close-icon');
const navLinks = document.querySelectorAll('.nav-center a');
const navbar = document.querySelector('nav');
const servicesSection = document.getElementById('services');
const slider = document.querySelector('.case-studies-boxes');

let currentIndex = 0;
let startX = 0;
let currentX = 0;
let isDragging = false;

hamburgerMenu.addEventListener('click', () => {
    navCenter.classList.toggle('active');
    hamburgerIcon.style.display = navCenter.classList.contains('active') ? 'none' : 'block';
    closeIcon.style.display = navCenter.classList.contains('active') ? 'block' : 'none';
});

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth', block: 'start' });
        navCenter.classList.remove('active');
        hamburgerIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    });
});

window.addEventListener('scroll', () => {
    navbar.classList.toggle('sticky', window.scrollY + 60 >= servicesSection.offsetTop);
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href*="#"]:not([href="#"])').forEach(link => {
        link.addEventListener('click', (e) => {
            const target = document.querySelector(link.hash);
            if (target) {
                e.preventDefault();
                window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
            }
        });
    });
});

function updateSliderPosition() {
    slider.style.transform = `translateX(-${currentIndex * slider.children[0].offsetWidth}px)`;
}

slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
});

slider.addEventListener('touchmove', (e) => {
    if (isDragging) currentX = e.touches[0].clientX;
});

slider.addEventListener('touchend', () => {
    if (isDragging) {
        const deltaX = currentX - startX;
        if (deltaX > 50 && currentIndex > 0) currentIndex--;
        else if (deltaX < -50 && currentIndex < slider.children.length - 1) currentIndex++;
        updateSliderPosition();
        isDragging = false;
    }
});
