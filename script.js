document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav");
    const dropdownToggles = document.querySelectorAll("nav ul li > a");

    // Toggle the mobile menu
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("show");
    });

    // Toggle dropdown menus on mobile
    dropdownToggles.forEach((toggle) => {
        toggle.addEventListener("click", function (e) {
            let dropdown = this.nextElementSibling;
            if (dropdown && dropdown.classList.contains("dropdown")) {
                e.preventDefault(); // Prevent navigation if dropdown exists
                dropdown.classList.toggle("show");
            }
        });
    });
});
