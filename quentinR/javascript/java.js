var btn = document.querySelector('input');
var player =  iframe.getElementById('player');
player.un();


btn.addEventListener('click', updateBtn);

document.onclick = function updateBtn() {

});

<script>
const nameInput = document.querySelector('input');
const form = document.querySelector('mute');
var videoPlayer = document.getElementById('sound');


videoPlayer.play()

nameInput.addEventListener('input', function() {
  if (videoPlayer.paused == false) {
    videoPlayer.pause();
    videoPlayer.firstChild.nodeValue = 'Play';
  }
  else {
    videoPlayer.play();
    videoPlayer.firstChild.nodeValue = 'Pause';
  }
});

</script>
