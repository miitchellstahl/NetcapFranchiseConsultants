const hamburger = document.querySelector('.hamburger');
const header = document.querySelector(".header");
const list = document.querySelector("#list");
const mobile_menu = document.querySelector(".mobile-nav");
let newWidth;

hamburger.addEventListener('click', function () {

    this.classList.toggle("is-active");

})

window.addEventListener('resize', function (window) {
    newWidth = document.documentElement.clientWidth;
    if (newWidth > 850) {
        console.log("YES");
    }
});
