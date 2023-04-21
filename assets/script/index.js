// Variables
const mobileButton = document.querySelector("#mobileButton");

// Functions
const showMenu = () => {
    const mobileMenu = document.querySelector("#mobileMenu");
    const fade = document.querySelector("#fade");

    mobileMenu.classList.toggle("hide");
    fade.classList.toggle("hide");
    mobileButton.classList.toggle("navbar__mobile-button--close");
}

// Events
mobileButton.addEventListener("click", showMenu);