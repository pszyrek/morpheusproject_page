// Video player
function onYouTubeIframeAPIReady() {
    player = new YT.Player('main-section__video-player', {
        videoId: 'adwn1MU20RA',
        playerVars: {
            autoplay: 1,        // Auto-play the video on load
            controls: 1,        // Show pause/play buttons in player
            showinfo: 0,        // Hide the video title
            modestbranding: 1,  // Hide the Youtube Logo
            loop: 1,            // Run the video in a loop
            fs: 0,              // Hide the full screen button
            cc_load_policy: 0, // Hide closed captions
            iv_load_policy: 3,  // Hide the Video Annotations
            autohide: 0         // Hide video controls when playing
        },
        events: {
            'onReady': function (e) {
                e.target.mute()
            }
        }
    });
}
setTimeout(onYouTubeIframeAPIReady, 500);

var playerButton = document.getElementById('main-section__play-button');
var mainSection = document.getElementsByClassName('main-section');

function showPlayer() {
    mainSection[0].classList.toggle('bg-col-primary');
    mainSection[0].classList.toggle('bg-col-primary-alpha');
}
function hidePlayer() {
    mainSection[0].classList.toggle('bg-col-primary');
    mainSection[0].classList.toggle('bg-col-primary-alpha');
}