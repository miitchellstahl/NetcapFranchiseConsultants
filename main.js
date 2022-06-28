const hamburger = document.querySelector('.hamburger');
const header = document.querySelector(".header");
const mobileNav = document.querySelector(".mobile-nav");
const main = document.querySelector(".main");
let newWidth = document.documentElement.clientWidth;
let newHeight = document.documentElement.clientHeight;
let lastScrollY = window.scrollY;

hamburger.addEventListener('click', function () {

    mobileNav.classList.toggle("is-active");
    hamburger.classList.toggle("is-active");
    main.classList.toggle("is-active");

})

window.addEventListener('resize', function (window) {
    newWidth = document.documentElement.clientWidth;
    newHeight = document.documentElement.clientHeight;
    if (newWidth > 850) {
        mobileNav.classList.remove("is-active");
        main.classList.remove("is-active");
        hamburger.classList.remove("is-active");
    }
});





// window.addEventListener('scroll', () => {

//     console.log(lastScrollY);

//     if (lastScrollY < window.scrollY && newWidth < 850 && lastScrollY > 100) {
//         header.classList.add("nav--hidden");
//     }
//     else {
//         header.classList.remove("nav--hidden");
//     }

//     lastScrollY = window.scrollY;
// })
