import Game from './game'





let game = new Game();


loop();




function loop() {
  console.log("BUTZ")
  game.update();
  game.draw();


  window.requestAnimationFrame(loop);
}





// function bindKeys() {
//   document.onkeydown = function(e) {
//     e = e ||  window.event;
//
//     switch (e.keyCode) {
//       case 38: // Up
//         player.speed = 1;
//         break;
//
//       case 40: // Down
//         player.speed = -1;
//         break;
//
//       case 37: // Left
//         player.dir = -1;
//         break;
//
//       case 39: // Right
//         player.dir = -1;
//         break;
//     }
//   }
//
//   document.onkeyup = function(e) {
//
//   }
// }

