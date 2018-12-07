console.log('loaded player.js');

var station = "http://ice1.somafm.com/groovesalad-256-mp3"

var launchButton = document.getElementById('launch-button');

launchButton.addEventListener('click', () => {
    console.log('play button clicked');
    chrome.extension.sendMessage({action: "play", channel: station});
    chrome.browserAction.setBadgeText({text: ">"});
});

var pauseButton = document.getElementById('pause-button');

pauseButton.addEventListener('click', () => {
    console.log('pause button clicked');
    chrome.extension.sendMessage({action: "pause"});
    chrome.browserAction.setBadgeText({text: "="});
});

var selectStation = document.getElementById('select-station');

selectStation.addEventListener('change', (e) => {
    console.log(e.srcElement.value);
    station = e.srcElement.value;
});
