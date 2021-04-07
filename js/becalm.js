// *nav variables
const burgerBtn = document.body.querySelector(".nav__box-barsBtn");
const navBox = document.body.querySelector(".nav__links--mobile");
const navLinks = document.body.querySelectorAll(".nav__links--mobile-item");
const navLogo = document.body.querySelector(".nav__box-logo");
// nav variables*

// this toggle css class to set nav visible on mobile devices
const navBurgerBtnHandler = () => {
    navBox.classList.toggle("nav__links--mobile--active");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navBox.classList.remove("nav__links--mobile--active");
        })
    })
}

// nav burger-btn event listener which uses navBurgerHandler
burgerBtn.addEventListener("click", navBurgerBtnHandler);
// nav logo event listener for closing nav when user click logo during nav is --active
navLogo.addEventListener("click", () => {
        navBox.classList.remove("nav__links--mobile--active");
})