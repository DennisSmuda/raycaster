import Game from './game'



let game = new Game();


loop();


// Update loop
function loop() {
  game.update();
  game.draw();

  window.requestAnimationFrame(loop);
}

