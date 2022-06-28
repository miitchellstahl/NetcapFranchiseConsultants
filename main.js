const hamburger = document.querySelector('.hamburger');
const header = document.querySelector(".header");
const list = document.querySelector("#list");
const mobile_menu = document.querySelector(".mobile-nav");
let newWidth = document.documentElement.clientWidth;
let lastScrollY = window.scrollY;

hamburger.addEventListener('click', function () {

    this.classList.toggle("is-active");

})

window.addEventListener('resize', function (window) {
    newWidth = document.documentElement.clientWidth;
    if (newWidth > 850) {
        console.log("YES");
    }
});

window.addEventListener('scroll', () => {

    console.log(newWidth);

    if (lastScrollY < window.scrollY && newWidth < 850) {
        header.classList.add("nav--hidden");
    }
    else {
        header.classList.remove("nav--hidden");
    }

    lastScrollY = window.scrollY;
})
