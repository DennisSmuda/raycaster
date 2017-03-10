import map from './map'
import Minimap from './minimap'
import Raycaster from './raycaster'
import Player from './player'

let mapWidth = 0;
let mapHeight = 0;
const miniMapScale = 8;



let canvas           = document.getElementById('canvas');


mapWidth             = map[0].length;
mapHeight            = map.length;




// Initialize
let player    = new Player();
let minimap   = new Minimap(mapWidth, mapHeight);
let raycaster = new Raycaster();
bindKeys();


loop();




function loop() {
  console.log("BUTZ")
  minimap.draw();
  move();


  window.requestAnimationFrame(loop);

}





function bindKeys() {
  document.onkeydown = function(e) {
      e = e ||  window.event;

      switch (e.keyCode) {
        case 38: // Up
          player.speed = 1;
          break;

        case 40: // Down
          player.speed = -1;
          break;

        case 37: // Left
          player.dir = -1;
          break;

        case 39: // Right
          player.dir = -1;
          break;
    }
  }

  document.onkeyup = function(e) {

  }
}

function move() {
  let moveStep = player.speed * player.moveSpeed;
  player.rot += player.dir * player.rotSpeed * Math.PI / 180;
}

