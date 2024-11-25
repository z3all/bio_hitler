const hamburger = document.getElementById('hamburger-menu');
const navLinks = document.querySelector('.nav-links');

// Menambahkan event listener untuk hamburger
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});