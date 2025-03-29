//menu toggle button in android
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

//dropdown option
document.addEventListener("DOMContentLoaded", function () {
    // Select all dropdowns
    let dropdowns = document.querySelectorAll(".dropdown");

    // Function to close all dropdowns
    function closeDropdowns() {
        dropdowns.forEach(dropdown => {
            dropdown.style.display = "none";
        });
    }

    // Toggle dropdown menu on click
    document.querySelectorAll("nav > ul > li").forEach(item => {
        item.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevent immediate closure when clicking inside
            let dropdown = this.querySelector(".dropdown");
            if (dropdown) {
                let isOpen = dropdown.style.display === "block";
                closeDropdowns(); // Close all before opening new one
                dropdown.style.display = isOpen ? "none" : "block";
            }
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener("click", function () {
        closeDropdowns();
    });
});

//slide changing one by one
document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelector(".slides");
    let index = 0;

    function showSlide() {
        slides.style.transform = `translateX(-${index * 100}%)`;
    }

    document.querySelector(".next-btn").addEventListener("click", function () {
        index = (index + 1) % slides.children.length;
        showSlide();
    });

    document.querySelector(".prev-btn").addEventListener("click", function () {
        index = (index - 1 + slides.children.length) % slides.children.length;
        showSlide();
    });

    // Auto-slide every 3 seconds
    setInterval(function () {
        index = (index + 1) % slides.children.length;
        showSlide();
    }, 3000);
});

