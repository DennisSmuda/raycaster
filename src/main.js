import map from './map'
import Raycaster from './raycaster'
import Player from './player'

let mapWidth = 0;
let mapHeight = 0;
const miniMapScale = 8;

const bgColor = '56, 42, 36';


let canvas           = document.getElementById('canvas');
let miniMap          = document.getElementById('minimap');
let raycaster        = new Raycaster();

mapWidth             = map[0].length;
mapHeight            = map.length;

miniMap.width        = mapWidth * miniMapScale;
miniMap.height       = mapHeight * miniMapScale;
miniMap.style.width  = (mapWidth * miniMapScale) + "px";
miniMap.style.height = (mapHeight * miniMapScale) + "px";



// Initialize
player = new Player();
bindKeys();


loop();




function loop() {
  drawMiniMap();
  move();


  window.requestAnimationFrame(loop);

}


/**
 * Draw Top-Down 2d View
 *
 */
function drawMiniMap() {
  let ctx = miniMap.getContext("2d");

  for (let y = 0; y < mapHeight; y++) {
    for (let x = 0; x < mapWidth; x++) {
      let wall = map[y][x];

      if (wall > 0) {
        ctx.fillStyle = "rgb(124, 67, 43)";
        ctx.fillRect(
          x * miniMapScale,
          y * miniMapScale,
          miniMapScale, miniMapScale
        );
      }
    }
  }
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

