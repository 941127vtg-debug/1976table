/* ========================
   MOBILE MENU
======================== */

const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");

    });

}


/* ========================
   HOME SLIDESHOW
======================== */

const slides = document.querySelectorAll(".hero-slide");

let currentSlide = 0;

function showNextSlide() {

    if (slides.length === 0) {
        return;
    }

    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");
}

if (slides.length > 1) {

    setInterval(showNextSlide, 5000);

}


/* ========================
   CUSTOM CURSOR
======================== */

const supportsMouse =
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;

if (supportsMouse) {

    const cursor = document.createElement("div");

    cursor.classList.add("custom-cursor");

    document.body.appendChild(cursor);


    document.addEventListener("mousemove", (event) => {

        cursor.style.left = event.clientX + "px";
        cursor.style.top = event.clientY + "px";

        cursor.classList.add("visible");

    });


    document.addEventListener("mouseleave", () => {

        cursor.classList.remove("visible");

    });


    document.addEventListener("mouseenter", () => {

        cursor.classList.add("visible");

    });

}