'use strict';


/** nav variable */

const menuToggleBtn = document.querySelector("[data-navbar-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");


/** element toggle function  */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }
menuToggleBtn.addEventListener("click", function() { elemToggleFunc(navbar); } );