const navToggle = document.querySelector("button.mobile-nav-toggle")
const primaryNav = document.querySelector("nav#primary-navigation")
const primaryHeader = document.querySelector("header.primary-header")

navToggle.addEventListener("click", (e) => {
    if (!primaryNav.hasAttribute("data-visible")) {
        navToggle.setAttribute("aria-expanded", "true")
    } else {
        navToggle.setAttribute("aria-expanded", "false")
    }

    primaryNav.toggleAttribute("data-visible")
    primaryHeader.toggleAttribute("data-overlay")
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