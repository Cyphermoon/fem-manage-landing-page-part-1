const navToggle = document.querySelector("button.mobile-nav-toggle")
const primaryNav = document.querySelector("nav#primary-navigation")
const primaryHeader = document.querySelector("header.primary-header")
const hamburgerIcon = document.getElementById("icon-hamburger")

navToggle.addEventListener("click", (e) => {
    // toggle aria expanded attribute
    if (!primaryNav.hasAttribute("data-visible")) {
        navToggle.setAttribute("aria-expanded", "true")
    } else {
        navToggle.setAttribute("aria-expanded", "false")
    }

    primaryNav.toggleAttribute("data-visible")
    primaryHeader.toggleAttribute("data-overlay")


    //toggle hamburger icon
    if (navToggle.getAttribute("aria-expanded") === "true")
        hamburgerIcon.setAttribute("src", "/images/icon-close.svg")
    else
        hamburgerIcon.setAttribute("src", "/images/icon-hamburger.svg")
})

const slider = new A11YSlider(document.querySelector('.slider'), {
    adaptiveHeight: true,
    dots: true,
    centerMode: true,
    arrows: false,
    responsive: {
        480: {
            dots: false
        }
    }
});