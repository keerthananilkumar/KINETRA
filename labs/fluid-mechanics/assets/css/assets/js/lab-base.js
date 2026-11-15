
/* =========================================
   KINETRA — LABORATORY FOUNDATION
   SHARED JAVASCRIPT v1.0
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    // CURRENT YEAR
    const yearElements = document.querySelectorAll(
        "[data-current-year]"
    );

    yearElements.forEach(element => {
        element.textContent = new Date().getFullYear();
    });


    // SCROLL REVEAL
    const revealElements = document.querySelectorAll(
        "[data-reveal]"
    );

    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });

    } else {

        revealElements.forEach(element => {
            element.classList.add("is-visible");
        });

    }


    // MOBILE NAVIGATION
    const menuToggle = document.querySelector(
        ".lab-menu-toggle"
    );

    const navLinks = document.querySelector(
        ".lab-nav-links"
    );

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            const isOpen = navLinks.classList.toggle("is-open");

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        });

    }

});


// KINETRA ENGINEERING UTILITIES
window.KinetraLab = {

    clamp(value, min, max) {
        return Math.max(min, Math.min(max, value));
    },

    lerp(start, end, amount) {
        return start + (end - start) * amount;
    },

    formatNumber(value, decimals = 2) {
        return Number(value).toFixed(decimals);
    },

    radians(degrees) {
        return degrees * (Math.PI / 180);
    },

    degrees(radians) {
        return radians * (180 / Math.PI);
    }

};
