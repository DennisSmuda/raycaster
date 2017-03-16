import Game from './game'

// Start Game
let game = new Game();
loop();


function loop() {
  game.update();
  game.draw();

  window.requestAnimationFrame(loop);
}

