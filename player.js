console.log('loaded player.js');

var launchButton = document.getElementById('launch-button');

launchButton.addEventListener('click', () => {
    console.log('play button clicked');
    chrome.extension.sendMessage({action: "play", channel: "http://ice1.somafm.com/groovesalad-256-mp3"});
});

var pauseButton = document.getElementById('pause-button')

pauseButton.addEventListener('click', () => {
    console.log('pause button clicked');
    chrome.extension.sendMessage({action: "pause"});
});