const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".fa-bars");
const closeMenuBtn = document.querySelector(".fa-xmark");


[openMenuBtn, closeMenuBtn].forEach((btn) => {
    btn.addEventListener("click", () => {
        menu.classList.toggle("open");
        menu.style.transition = "transform 0.5s ease";
    });
});

menu.addEventListener("transitionend", function() {
    this.removeAttribute("style");
});

let header = document.querySelector(".header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY >10);
});