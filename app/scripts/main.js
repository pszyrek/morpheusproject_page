console.log("dupa");

window.addEventListener('scroll', function (item) {
    var scroll = this.pageYOffset;
    if (scroll >= 100) {
        document.getElementById("header").classList.add("bg-col-tertiary");
    } else {
        document.getElementById("header").classList.remove("bg-col-tertiary");
    }

    var i = 0;

    function myLoop() {
        setTimeout(function () {
            tabs[i].classList.add("hidden-tab");
            i++;
            if (i < tabs.length) {
                myLoop();
            }
        }, 300);
    }

    var tabs = document.getElementsByClassName("link-section__container__tab");

    if (scroll > 1050) {
        target = true;
        myLoop();
    } else {
        for (var i; i < tabs.length; i++) {
            tabs[i].classList.remove("hidden-tab");
        }
    }

    console.log(scroll);
});