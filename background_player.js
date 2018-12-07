document.write('<audio id="player" controls>');

chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {
        var player = document.getElementById('player');
        if (request.action == "play"){
            player.src = request.channel;
            player.volume = request.volume;
            player.play();
        }

        if(request.action == "pause") {
            player.pause();
        }

        if(request.action == "changeVolume") {
            player.volume = request.volume;
        }

});