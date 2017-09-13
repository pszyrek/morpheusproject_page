$(document).ready(function () {
    $("#link-section-button").click(function () {
        $('html, body').animate({
            scrollTop: $("#link-section").offset().top - 64
        }, 2000);
    });
    $("#about-project-section-button").click(function () {
        $('html, body').animate({
            scrollTop: $("#about-section").offset().top - 64
        }, 2000);
    });
    $("#team-section-button").click(function () {
        $('html, body').animate({
            scrollTop: $("#team-section").offset().top - 64
        }, 2000);
    });
});

window.addEventListener('scroll', function (item) {
    var scroll = this.pageYOffset;
    var navItems = document.getElementsByClassName('header__navbar-item');

    if (scroll >= 100) {
        document.getElementById("header").classList.add("bg-header");
        for (var i = 0; i < navItems.length; i++) {
            navItems[i].classList.add('bg-item');
        }
    } else {
        document.getElementById("header").classList.remove("bg-header");
        for (var i = 0; i < navItems.length; i++) {
            navItems[i].classList.remove('bg-item');
        }
    }
});

window.sr = ScrollReveal({ reset: true });
sr.reveal('.link-section__container__tab', 300);
sr.reveal('.team-section__list-item__tab', 300);

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("step");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
}