console.log("dupa");

window.addEventListener('scroll', function () {
    console.log(this);
    var scroll = this.pageYOffset;
    if (scroll >= 100) {
        document.getElementById("header").classList.add("bg-col-tertiary");
    } else {
        document.getElementById("header").classList.remove("bg-col-tertiary");
    }
});

