var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

// Video player
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: 'adwn1MU20RA',
        playerVars: {
            autoplay: 1,
            controls: 0,
            loop: 1,
            rel: 0,
            enablejsapi: 1,
            playlist: 'adwn1MU20RA'
        },
        events: {
            'onReady': function (e) {
                e.target.mute()
            }
        }
    });
}

var playerButton = document.getElementById('main-section__play-button');
var mainSection = document.getElementsByClassName('main-section');
var playerContainer = document.getElementsByClassName('player-container')

function showPlayer() {
    mainSection[0].classList.toggle('bg-col-primary');
    mainSection[0].classList.toggle('bg-col-primary-alpha');
}
function hidePlayer() {
    mainSection[0].classList.toggle('bg-col-primary');
    mainSection[0].classList.toggle('bg-col-primary-alpha');
}

function playMovie() {
    player.stopVideo();
    player.setVolume(70)
    player.playVideo();
    player.unMute()
    playerContainer[0].style.zIndex = '3';
}