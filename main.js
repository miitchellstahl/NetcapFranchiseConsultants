const hamburger = document.querySelector('.hamburger');
const header = document.querySelector(".header");
const list = document.querySelector("#list");
const mobile_menu = document.querySelector(".mobile-nav");
let newWidth = document.documentElement.clientWidth;
let newHeight = document.documentElement.clientHeight;
let lastScrollY = window.scrollY;

hamburger.addEventListener('click', function () {

    this.classList.toggle("is-active");

})

window.addEventListener('resize', function (window) {
    newWidth = document.documentElement.clientWidth;
    newHeight = document.documentElement.clientHeight;
});

window.addEventListener('scroll', () => {

    console.log(lastScrollY);

    if (lastScrollY < window.scrollY && newWidth < 850 && lastScrollY > 100) {
        header.classList.add("nav--hidden");
    }
    else {
        header.classList.remove("nav--hidden");
    }

    lastScrollY = window.scrollY;
})
