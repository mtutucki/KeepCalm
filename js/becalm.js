// *nav variables
const burgerBtn = document.body.querySelector(".nav__box-barsBtn");
const navBox = document.body.querySelector(".nav__links--mobile");
const navLinks = document.body.querySelectorAll(".nav__links--mobile-item");
const navLogo = document.body.querySelector(".nav__box-logo");
// therapy variables
const helpLow = document.body.querySelector(".helpme-button-low");
const helpMedium = document.body.querySelector(".helpme-button-medium");
const helpHigh = document.body.querySelector(".helpme-button-high");
// contact variables
const contactTextArea = document.body.querySelector(".contact__box__textarea");
let contactTextAreaText;
const contactSubmit = document.body.querySelector(".contact__box__button");
const contactSubmitInfo = document.body.querySelector(".contact__box__submit-text");

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

// event listener on click which write some information into conatct text area
helpLow.addEventListener("click", function () {
    contactTextArea.textContent = "Chossed option: LOW \r\n";
    contactTextArea.textContent += "Help me with:  \r\n";
    contactTextArea.textContent += "Progress that I made myself: ";
});

helpMedium.addEventListener("click", function () {
    contactTextArea.textContent = "Chossed option: Medium \r\n";
    contactTextArea.textContent += "Help me with:  \r\n";
    contactTextArea.textContent += "Progress that I made myself: ";
});

helpHigh.addEventListener("click", function () {
    contactTextArea.textContent = "Chossed option: High \r\n";
    contactTextArea.textContent += "Help me with:  \r\n";
    contactTextArea.textContent += "Progress that I made myself: ";
});

contactSubmit.addEventListener("click", function() {
    contactSubmitInfo.style.opacity = "1";
    location.hash = "contact";
})

window.addEventListener("scroll", function(){
    if (scrollY == 5){
        location.hash = "header";
    }
})