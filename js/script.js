function playGame(){
    var url = document.querySelector('#playButton').dataset.src;
    var html = `<iframe src="${url}" style="width:100%;height:100%" frameborder="0" id="gameframe"></iframe>`;
    document.querySelector('.game-play').innerHTML = html;
}
function open_fullscreen(){
    let game = document.getElementById("gameframe");
	if (game.requestFullscreen) {
	  game.requestFullscreen();
	} else if (game.mozRequestFullScreen) { /* Firefox */
	  game.mozRequestFullScreen();
	} else if (game.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
	  game.webkitRequestFullscreen();
	} else if (game.msRequestFullscreen) { /* IE/Edge */
	  game.msRequestFullscreen();
	}
}