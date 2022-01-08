let song, currentMusic;
music = document.querySelector("#audio-source");
playBtn = document.querySelector(".play-btn");
pauseBtn = document.querySelector(".pause-btn");
restartBtn = document.querySelector(".restart-btn");
forwardBtn = document.querySelector(".forward-btn");
backwardBtn = document.querySelector(".backward-btn");
volumeBtn = document.querySelector(".volume-btn");
musicSlider = document.querySelector(".music-seek-bar");
volumeSlider = document.querySelector(".volume-slider");
cover = document.querySelector(".cover");
currentMusicTime = document.querySelector("#current-time");
duration = document.querySelector("#duration");
songName = document.querySelector(".current-song-name");
artistName = document.querySelector(".artist-name");
var songs = [
    {
        name: 'Faded',
        path: 'assets/music/faded.mp3',
        artist: 'Alan Walker',
        genre: 'Electronica',
        cover: 'assets/img/faded.jpg'
    },
    {
        name: 'Alone',
        path: 'assets/music/alone.mp3',
        artist: 'Alan Walker',
        genre: 'Dance/Electronic',
        cover: 'assets/img/alone.jpg'
    },
    {
        name: 'The Spectre',
        path: 'assets/music/the-spectre.mp3',
        artist: 'Alan Walker',
        genre: 'Dance/Electronic',
        cover: 'assets/img/the-spectre.jpg'
    },
    {
        name: 'Astronomia',
        path: 'assets/music/astronomia.mp3',
        artist: '32Stitches & Hoober',
        genre: 'Dance/Electronic',
        cover: 'assets/img/astronomia.jpg'
    },
    {
        name: 'Bella Ciao (My Name is Tokyo)',
        path: 'assets/music/bella-ciao.mp3',
        artist: 'Ilkan Gunuc & Emrah Turken',
        genre: 'BGM',
        cover: 'assets/img/money-heist.jpg'
    },
    {
        name: 'Pirates of the Caribbean',
        path: 'assets/music/poc.mp3',
        artist: 'Pirates of the Caribbean',
        genre: 'BGM',
        cover: 'assets/img/poc.jpg'
    },
    {
        name: 'Superhero',
        path: 'assets/music/superhero.mp3',
        artist: 'Chris Linton',
        genre: 'Dance/Electronic',
        cover: 'assets/img/superhero.jpg'
    },
    {
        name: 'Believer',
        path: 'assets/music/believer.mp3',
        artist: 'Imagine Dragons',
        genre: 'Pop rock, Alternative/Indie',
        cover: 'assets/img/believer.jpg'
    },
    {
        name: 'Death Note',
        path: 'assets/music/death-note.mp3',
        artist: 'Death Note',
        genre: 'Anime',
        cover: 'assets/img/death-note.jpg'
    },
    {
        name: 'Naruto',
        path: 'assets/music/naruto.mp3',
        artist: 'Naruto',
        genre: 'Anime',
        cover: 'assets/img/naruto.jpg'
    },
    {
        name: 'Kong',
        path: 'assets/music/kong.mp3',
        artist: 'Ender Güney',
        genre: 'Motivation',
        cover: 'assets/img/kong.jpg'
    },
];
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
        document.getElementById("cover").style.marginLeft = "0px";
        document.getElementById("volume-slider").style.marginRight = "-22px";
    } else {
        document.getElementById("restart").style.marginLeft = "30px";
        document.getElementById("volume-up").style.marginRight = "30px";
    }
}
$(document).ready(function () {
    $(window).keypress(function (e) {
        if (e.key === " " || e.key === "Spacebar") {
            e.preventDefault();
            if ($(".play-btn").hasClass("active")) {
                playBtn.click();
            } else {
                pauseBtn.click();
            }
        }
    })
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
    $(".faded").click(function () {
        $(".music-player-section").slideDown(100);
        $(".bottom-space").show(100);
        updateSong(0);
    });
    $(".alone").click(function () {
        $(".music-player-section").slideDown(100);
        $(".bottom-space").show(100);
        updateSong(1);
    });
    $(".spectre").click(function () {
        $(".music-player-section").slideDown(100);
        $(".bottom-space").show(100);
        updateSong(2);
    });
    $(".astronomia").click(function () {
        $(".music-player-section").slideDown(100);
        $(".bottom-space").show(100);
        updateSong(3);
    });
    $(".bella-ciao").click(function () {
        $(".music-player-section").slideDown(100);
        $(".bottom-space").show(100);
        updateSong(4);
    });
    $(".poc1").click(function () {
        $(".music-player-section").slideDown(100);
        $(".bottom-space").show(100);
        updateSong(5);
    });
    $(".superhero").click(function () {
        $(".music-player-section").slideDown(100);
        $(".bottom-space").show(100);
        updateSong(6);
    });
    $(".believer").click(function () {
        $(".music-player-section").slideDown(100);
        $(".bottom-space").show(100);
        updateSong(7);
    });
    $(".death-note").click(function () {
        $(".music-player-section").slideDown(100);
        $(".bottom-space").show(100);
        updateSong(8);
    });
    $(".naruto").click(function () {
        $(".music-player-section").slideDown(100);
        $(".bottom-space").show(100);
        updateSong(9);
    });
    $(".kong").click(function () {
        $(".music-player-section").slideDown(100);
        $(".bottom-space").show(100);
        updateSong(10);
    });
    $(".play-btn").click(function () {
        $(".pause-btn").addClass("active");
        $(".play-btn").removeClass("active");
        $(".volume-btn").removeClass("active");
        $(".volume-slider").removeClass("active");
        music.play();
    });
    $(".pause-btn").click(function () {
        $(".play-btn").addClass("active");
        $(".pause-btn").removeClass("active");
        $(".volume-btn").removeClass("active");
        $(".volume-slider").removeClass("active");
        music.pause();
    });
});
music.loop = true;
document.querySelector(".music-seek-bar").addEventListener("click", function () {
    this.focus();
});
function updateSong(i) {
    song = songs[i];
    music.src = song.path;
    currentMusic = i;
    cover.src = song.cover;
    songName.innerHTML = song.name;
    artistName.innerHTML = song.artist;
    musicSlider.value = "0";
    musicSlider.max = music.duration;
    playBtn.classList.add("active");
    pauseBtn.classList.remove("active");
    duration.innerHTML = "Loading...";
    music.addEventListener('loadedmetadata', function () {
        musicSlider.max = music.duration;
        duration.innerHTML = formatTime(music.duration);
    });
    currentMusicTime.innerHTML = "00:00";
}
const formatTime = (time) => {
    let min = Math.floor(time / 60);
    if (min < 10) {
        min = "0" + min;
    }
    let sec = Math.floor(time % 60);
    if (sec < 10) {
        sec = "0" + sec;
    }
    return `${min}:${sec}`;
}
setInterval(() => {
    musicSlider.value = music.currentTime;
    currentMusicTime.innerHTML = formatTime(music.currentTime);
}, 1000);
musicSlider.addEventListener("change", () => {
    music.currentTime = musicSlider.value;
    volumeBtn.classList.remove("active");
    volumeSlider.classList.remove("active");
});
forwardBtn.addEventListener("click", () => {
    if (currentMusic >= songs.length - 1) {
        currentMusic = 0;
    } else {
        currentMusic++;
    }
    updateSong(currentMusic);
    playBtn.click();
    volumeBtn.classList.remove("active");
    volumeSlider.classList.remove("active");
});
backwardBtn.addEventListener("click", () => {
    if (currentMusic <= 0) {
        currentMusic = songs.length - 1;
    } else {
        currentMusic--;
    }
    updateSong(currentMusic);
    playBtn.click();
    volumeBtn.classList.remove("active");
    volumeSlider.classList.remove("active");
});
restartBtn.addEventListener("click", () => {
    updateSong(currentMusic);
    playBtn.click();
    volumeBtn.classList.remove("active");
    volumeSlider.classList.remove("active");
});
volumeBtn.addEventListener("click", () => {
    volumeBtn.classList.toggle("active");
    volumeSlider.classList.toggle("active");
});
volumeSlider.addEventListener("change", () => {
    music.volume = volumeSlider.value;
});