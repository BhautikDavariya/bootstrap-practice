let head = document.getElementById("header");
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 200) {
        head.style.boxShadow = "0px 0px 10px grey";
    } else {
        head.style.boxShadow = "none";
    }
})

let topbtn = document.getElementById("totopbtn")
function topFunction() {
    document.documentElement.scrollTop = 0;
}

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        topbtn.style.display = "block"
    }
    else {
        topbtn.style.display = "none"
    }
})

$(document).ready(function () {

    var two = $("#two");
    var one = $("#one");

    two.owlCarousel({
        loop: true,
        margin: 5,
        nav: false,
        center: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });

    one.owlCarousel({
        center: true,
        items: 2,
        loop: true,
        margin: 25,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

})


// ankit files......................>


// for Mobile-nav ** Start **
function hid1() {
    let dp1 = document.getElementById("mobile_drop1");
    dp1.classList.toggle("mobile_drop1");
}
function hid2() {
    let dp2 = document.getElementById("mobile_drop2");
    dp2.classList.toggle("mobile_drop2");
}
// for Mobile-nav ** End **



// ankit files end .....................>
















