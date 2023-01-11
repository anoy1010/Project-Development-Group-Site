'use strict';


/** nav variable */

const menuToggleBtn = document.querySelector("[data-navbar-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");


/** element toggle function  */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }
menuToggleBtn.addEventListener("click", function() { elemToggleFunc(navbar); } );





/**go to top */


const goToBtn = document.querySelector("[data-go-top]");
window.addEventListener("scroll", function() {
    if (window.scrollY >= 800) {
        goToBtn.classList.add("active")
    }else {
        goToBtn.classList.remove("active")
    }
})