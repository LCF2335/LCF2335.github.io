document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navContainer = document.querySelector('.nav-container');

    mobileMenuToggle.addEventListener('click', function () {
        navContainer.classList.toggle('show');
    });
});