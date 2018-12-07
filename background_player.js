chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.action == "play"){
            document.write('<audio id="player">');
            document.getElementById('player').src = request.channel;
            document.getElementById('player').play();
            source1.src= request.channel;
            audioElement.load;
            audioElement.play();
        }

        if(request.action == "pause") {
            document.getElementById('player').pause();
        }

});