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
    var header = document.getElementById("header");
    var brand = document.getElementById("header__brand");
    var navbar = document.getElementById('header__navbar');

    if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && scroll >= 100) {
        navbar.style.opacity = '0';
        header.style.background = 'transparent';
        brand.style.background = 'rgba(20, 20, 20, 0.84)';
        for (var i = 0; i < navItems.length; i++) {
            navItems[i].style.display = 'none';
        }
    } else {
        if (scroll >= 100) {
            header.style.background = 'rgba(20, 20, 20, 0.84)';
            for (var i = 0; i < navItems.length; i++) {
                navItems[i].classList.add('bg-item');
            }
        } else {
            header.style.background = '#151515';
            for (var i = 0; i < navItems.length; i++) {
                navItems[i].classList.remove('bg-item');
            }
        }
        navbar.style.opacity = '1';
        brand.style.background = 'none';
        for (var i = 0; i < navItems.length; i++) {
            navItems[i].style.display = 'flex';
        }
    }
});

window.sr = ScrollReveal({
    reset: true
});
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
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
}