element = document.getElementById("scroll-element");
var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
function preset() {
    if (isMobile.any()) {
        document.getElementById("row-div").innerHTML = "<div id='myCarousel1' class='carousel slide' data-ride='carousel' data-interval='2000'><div class='carousel-inner' id='carousel-inner1'><div class='carousel-item active'><img src='assets/img/cover1.jpg' alt='Cover 1' class='img-responsive img-carousel img-carousel1'></div><div class='carousel-item'><img src='assets/img/cover2.jpg' alt='Cover 2' class='img-responsive img-carousel img-carousel1'></div><div class='carousel-item'><img src='assets/img/cover3.jpg' alt='Cover 3' class='img-responsive img-carousel img-carousel1'></div><div class='carousel-item'><img src='assets/img/cover4.jpg' alt='Cover 4' class='img-responsive img-carousel img-carousel1'></div><div class='carousel-item'><img src='assets/img/cover5.jpg' alt='Cover 5' class='img-responsive img-carousel img-carousel1'></div></div></div></div>";
        document.getElementById("body").style.maxWidth = "95%";
        document.getElementById("current-time").style.left = "40px";
        document.getElementById("duration").style.right = "40px";
    } else {
        return;
    }
}
$(document).ready(function () {
    $(".electronic").click(function () {
        $(".song-electronic").toggle(500);
        $(".song-bgm").hide(500);
        $(".song-pop-rock").hide(500);
        $(".song-anime").hide(500);
        $(".song-motivation").hide(500);
    });
    $(".bgm").click(function () {
        $(".song-bgm").toggle(500);
        $(".song-electronic").hide(500);
        $(".song-pop-rock").hide(500);
        $(".song-anime").hide(500);
        $(".song-motivation").hide(500);
    });
    $(".pop-rock").click(function () {
        $(".song-pop-rock").toggle(500);
        $(".song-electronic").hide(500);
        $(".song-bgm").hide(500);
        $(".song-anime").hide(500);
        $(".song-motivation").hide(500);
    });
    $(".anime").click(function () {
        $(".song-anime").toggle(500);
        $(".song-electronic").hide(500);
        $(".song-pop-rock").hide(500);
        $(".song-bgm").hide(500);
        $(".song-motivation").hide(500);
    });
    $(".motivation").click(function () {
        $(".song-motivation").toggle(500);
        $(".song-electronic").hide(500);
        $(".song-pop-rock").hide(500);
        $(".song-anime").hide(500);
        $(".song-bgm").hide(500);
    });
    $(".alan-walker").click(function () {
        $(".artist-alan-walker").toggle(500);
        $(".artist-hoober").hide(500);
        $(".artist-ilkan-gunuc").hide(500);
        $(".artist-poc").hide(500);
        $(".artist-chris-linton").hide(500);
        $(".artist-imagine-dragons").hide(500);
        $(".artist-anime").hide(500);
        $(".artist-ender-guney").hide(500);
    });
    $(".hoober").click(function () {
        $(".artist-hoober").toggle(500);
        $(".artist-alan-walker").hide(500);
        $(".artist-ilkan-gunuc").hide(500);
        $(".artist-poc").hide(500);
        $(".artist-chris-linton").hide(500);
        $(".artist-imagine-dragons").hide(500);
        $(".artist-anime").hide(500);
        $(".artist-ender-guney").hide(500);
    });
    $(".ilkan-gunuc").click(function () {
        $(".artist-ilkan-gunuc").toggle(500);
        $(".artist-hoober").hide(500);
        $(".artist-alan-walker").hide(500);
        $(".artist-poc").hide(500);
        $(".artist-chris-linton").hide(500);
        $(".artist-imagine-dragons").hide(500);
        $(".artist-anime").hide(500);
        $(".artist-ender-guney").hide(500);
    });
    $(".poc").click(function () {
        $(".artist-poc").toggle(500);
        $(".artist-hoober").hide(500);
        $(".artist-ilkan-gunuc").hide(500);
        $(".artist-alan-walker").hide(500);
        $(".artist-chris-linton").hide(500);
        $(".artist-imagine-dragons").hide(500);
        $(".artist-anime").hide(500);
        $(".artist-ender-guney").hide(500);
    });
    $(".chris-linton").click(function () {
        $(".artist-chris-linton").toggle(500);
        $(".artist-hoober").hide(500);
        $(".artist-ilkan-gunuc").hide(500);
        $(".artist-poc").hide(500);
        $(".artist-alan-walker").hide(500);
        $(".artist-imagine-dragons").hide(500);
        $(".artist-anime").hide(500);
        $(".artist-ender-guney").hide(500);
    });
    $(".imagine-dragons").click(function () {
        $(".artist-imagine-dragons").toggle(500);
        $(".artist-hoober").hide(500);
        $(".artist-ilkan-gunuc").hide(500);
        $(".artist-poc").hide(500);
        $(".artist-chris-linton").hide(500);
        $(".artist-alan-walker").hide(500);
        $(".artist-anime").hide(500);
        $(".artist-ender-guney").hide(500);
    });
    $(".anime1").click(function () {
        $(".artist-anime").toggle(500);
        $(".artist-hoober").hide(500);
        $(".artist-ilkan-gunuc").hide(500);
        $(".artist-poc").hide(500);
        $(".artist-chris-linton").hide(500);
        $(".artist-imagine-dragons").hide(500);
        $(".artist-alan-walker").hide(500);
        $(".artist-ender-guney").hide(500);
    });
    $(".ender-guney").click(function () {
        $(".artist-ender-guney").toggle(500);
        $(".artist-hoober").hide(500);
        $(".artist-ilkan-gunuc").hide(500);
        $(".artist-poc").hide(500);
        $(".artist-chris-linton").hide(500);
        $(".artist-imagine-dragons").hide(500);
        $(".artist-anime").hide(500);
        $(".artist-alan-walker").hide(500);
    });
    $(".up-btn").click(function () {
        $(".music-player-section").addClass("active");
        $(".up-btn").hide(100);
    });
    $(".back-btn").click(function () {
        $(".music-player-section").removeClass("active");
        $(".up-btn").show(100);
    });
});