//swiper
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    effect: "fade",
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    on: {
        autoPlayTimeLeft(s, time, progess) {
            progressCircle.style.setProperty("--progess");
            progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
    }
});

//sticky navbar
window.onscroll = function () { myFunction() };

var navbar = document.getElementById("nav-container");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        navbar.style.width = "100%"; // Set the width to 100%
    } else {
        navbar.classList.remove("sticky");
        navbar.style.width = "auto"; // Set back to auto width
    }
}

//button scrollup
const btnScrollUp = document.querySelector(".button-scroll-up");

window.addEventListener('scroll', checkHeight)

function checkHeight() {
    if (window.scrollY > 200) {
        btnScrollUp.style.display = "flex"
    } else {
        btnScrollUp.style.display = "none"
    }
}

btnScrollUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

//register/login
const wrapper = document.querySelector('.login-wrapper');
const loginLink = document.querySelector('.')