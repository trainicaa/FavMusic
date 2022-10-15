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
        name: 'Not Afraid',
        path: 'assets/music/not-afraid.mp3',
        artist: 'Eminem',
        genre: 'Hip Hop',
        cover: 'assets/img/not-afraid.jpg'
    },
    {
        name: 'The Real Slim Shady',
        path: 'assets/music/the-real-slim-shady.mp3',
        artist: 'Eminem',
        genre: 'Hip Hop',
        cover: 'assets/img/the-real-slim-shady.jpg'
    },
    {
        name: 'Without Me',
        path: 'assets/music/without-me.mp3',
        artist: 'Eminem',
        genre: 'Hip Hop',
        cover: 'assets/img/without-me.jpg'
    },
    {
        name: 'Hope',
        path: 'assets/music/hope.mp3',
        artist: 'XXXTENTACION',
        genre: 'Hip Hop',
        cover: 'assets/img/hope.jpg'
    },
    {
        name: 'Blinding Lights',
        path: 'assets/music/blinding-lights.mp3',
        artist: 'The Weeknd',
        genre: 'Soul',
        cover: 'assets/img/blinding-lights.jpg'
    },
    {
        name: 'Starboy',
        path: 'assets/music/starboy.mp3',
        artist: 'The Weeknd',
        genre: 'Soul',
        cover: 'assets/img/starboy.jpg'
    },
    {
        name: 'Faded',
        path: 'assets/music/faded.mp3',
        artist: 'Alan Walker',
        genre: 'Electronica',
        cover: 'assets/img/faded.jpg'
    },
    {
        name: 'Cold',
        path: 'assets/music/cold.mp3',
        artist: 'NEFFEX',
        genre: 'Soul',
        cover: 'assets/img/cold.jpg'
    },
    {
        name: 'Heat Waves',
        path: 'assets/music/heat-waves.mp3',
        artist: 'Glass Animals',
        genre: 'Pop',
        cover: 'assets/img/heat-waves.jpg'
    },
    {
        name: 'Stay',
        path: 'assets/music/stay.mp3',
        artist: 'The Kid LAROI',
        genre: 'Pop',
        cover: 'assets/img/stay.jpg'
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
    $(".hip-hop").click(function () {
        $(".song-hip-hop").toggle(500);
        $(".song-soul").hide(500);
        $(".song-electronic").hide(500);
        $(".song-anime").hide(500);
    });
    $(".soul").click(function () {
        $(".song-soul").toggle(500);
        $(".song-hip-hop").hide(500);
        $(".song-electronic").hide(500);
        $(".song-pop").hide(500);
    });
    $(".electronic").click(function () {
        $(".song-electronic").toggle(500);
        $(".song-hip-hop").hide(500);
        $(".song-soul").hide(500);
        $(".song-pop").hide(500);
    });
    $(".pop").click(function () {
        $(".song-pop").toggle(500);
        $(".song-hip-hop").hide(500);
        $(".song-electronic").hide(500);
        $(".song-soul").hide(500);
    });

    $(".eminem").click(function () {
        $(".artist-eminem").toggle(500);
        $(".artist-xxxtentacion").hide(500);
        $(".artist-the-weeknd").hide(500);
        $(".artist-alan-walker").hide(500);
        $(".artist-neffex").hide(500);
        $(".artist-glass-animals").hide(500);
        $(".artist-the-kid-laroi").hide(500);
    });
    $(".xxxtentacion").click(function () {
        $(".artist-xxxtentacion").toggle(500);
        $(".artist-eminem").hide(500);
        $(".artist-the-weeknd").hide(500);
        $(".artist-alan-walker").hide(500);
        $(".artist-neffex").hide(500);
        $(".artist-glass-animals").hide(500);
        $(".artist-the-kid-laroi").hide(500);
    });
    $(".the-weeknd").click(function () {
        $(".artist-the-weeknd").toggle(500);
        $(".artist-eminem").hide(500);
        $(".artist-xxxtentacion").hide(500);
        $(".artist-alan-walker").hide(500);
        $(".artist-neffex").hide(500);
        $(".artist-glass-animals").hide(500);
        $(".artist-the-kid-laroi").hide(500);
    });
    $(".alan-walker").click(function () {
        $(".artist-alan-walker").toggle(500);
        $(".artist-eminem").hide(500);
        $(".artist-xxxtentacion").hide(500);
        $(".artist-the-weeknd").hide(500);
        $(".artist-neffex").hide(500);
        $(".artist-glass-animals").hide(500);
        $(".artist-the-kid-laroi").hide(500);
    });
    $(".neffex").click(function () {
        $(".artist-neffex").toggle(500);
        $(".artist-eminem").hide(500);
        $(".artist-xxxtentacion").hide(500);
        $(".artist-the-weeknd").hide(500);
        $(".artist-alan-walker").hide(500);
        $(".artist-glass-animals").hide(500);
        $(".artist-the-kid-laroi").hide(500);
    });
    $(".glass-animals").click(function () {
        $(".artist-glass-animals").toggle(500);
        $(".artist-eminem").hide(500);
        $(".artist-xxxtentacion").hide(500);
        $(".artist-the-weeknd").hide(500);
        $(".artist-alan-walker").hide(500);
        $(".artist-neffex").hide(500);
        $(".artist-the-kid-laroi").hide(500);
    });
    $(".the-kid-laroi").click(function () {
        $(".artist-the-kid-laroi").toggle(500);
        $(".artist-eminem").hide(500);
        $(".artist-xxxtentacion").hide(500);
        $(".artist-the-weeknd").hide(500);
        $(".artist-alan-walker").hide(500);
        $(".artist-neffex").hide(500);
        $(".artist-glass-animals").hide(500);
    });
    $(".up-btn").click(function () {
        $(".music-player-section").addClass("active");
        $(".up-btn").hide(100);
    });
    $(".back-btn").click(function () {
        $(".music-player-section").removeClass("active");
        $(".up-btn").show(100);
    });
    $(".not-afraid").click(function () {
        $(".music-player-section").slideDown(100);
        $(".bottom-space").show(100);
        updateSong(0);
    });
    $(".the-real-slim-shady").click(function () {
        $(".music-player-section").slideDown(100);
        $(".bottom-space").show(100);
        updateSong(1);
    });
    $(".without-me").click(function () {
        $(".music-player-section").slideDown(100);
        $(".bottom-space").show(100);
        updateSong(2);
    });
    $(".hope").click(function () {
        $(".music-player-section").slideDown(100);
        $(".bottom-space").show(100);
        updateSong(3);
    });
    $(".blinding-lights").click(function () {
        $(".music-player-section").slideDown(100);
        $(".bottom-space").show(100);
        updateSong(4);
    });
    $(".starboy").click(function () {
        $(".music-player-section").slideDown(100);
        $(".bottom-space").show(100);
        updateSong(5);
    });
    $(".faded").click(function () {
        $(".music-player-section").slideDown(100);
        $(".bottom-space").show(100);
        updateSong(6);
    });
    $(".cold").click(function () {
        $(".music-player-section").slideDown(100);
        $(".bottom-space").show(100);
        updateSong(7);
    });
    $(".heat-waves").click(function () {
        $(".music-player-section").slideDown(100);
        $(".bottom-space").show(100);
        updateSong(8);
    });
    $(".stay").click(function () {
        $(".music-player-section").slideDown(100);
        $(".bottom-space").show(100);
        updateSong(9);
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
    playBtn.classList.remove("active");
    pauseBtn.classList.add("active");
    duration.innerHTML = "Loading...";
    music.addEventListener('loadedmetadata', function () {
        musicSlider.max = music.duration;
        duration.innerHTML = formatTime(music.duration);
        music.play();
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
