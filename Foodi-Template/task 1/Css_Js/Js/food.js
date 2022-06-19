// let btn = document.getElementById("TopButton");
// let btn = document.getElementsByTagName("header")[0];
let btn = document.getElementsByClassName("header")[0];


window.addEventListener('scroll', function () {                         //px
    if (window.pageYOffset > 0) {
        btn.style.background = "white";
        // btn.style.csstext = "box-shadow", "0px 0px 12px 0px rgb(0 0 0 / 39%);";
        btn.style.boxShadow = "0px 0px 12px 0px rgb(0 0 0 / 39%)";

    }
    else {
        btn.style.background = "transparent";
        btn.style.boxShadow = "none";
    }
});
