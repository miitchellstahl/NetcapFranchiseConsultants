const hamburger = document.querySelector('.hamburger');
const header = document.querySelector(".header");
const list = document.querySelector("#list");
const mobile_menu = document.querySelector(".mobile-nav");
let width = window.innerWidth;

hamburger.addEventListener('click', function () {

    this.classList.toggle("is-active");

})
