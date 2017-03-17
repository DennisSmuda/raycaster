import map from './map'
import Minimap from './minimap'
import Raycaster from './raycaster'
import Player from './player'

let mapWidth = 0;
let mapHeight = 0;
const miniMapScale = 8;

/**
 * Game Class
 */
class Game {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.mapWidth = map[0].length;
    this.mapHeight = map.length;
    this.player = new Player(this.mapWidth, this.mapHeight);
    this.miniMap = new Minimap(this.mapWidth, this.mapHeight, this.player);

    this.bindKeys();
  }



  update() {
    this.player.update();

  }

  draw() {
    this.miniMap.draw();
  }

  bindKeys() {
    let game = this;
    document.onkeydown = function(e) {
      e = e || window.event;
      e.preventDefault(); // Prevent scroll

      switch (e.keyCode) {
        case 38: // Up
          game.player.speed = 1;
          break;

        case 40: // Down
          game.player.speed = -1;
          break;

        case 37: // Left
          game.player.dir = -1;
          break;

        case 39: // Right
          game.player.dir = 1
      }
    }

    document.onkeyup = function(e) {
      e = e || window.event;
      switch (e.keyCode) { 
        case 38: // Up
        case 40: // Down
          game.player.speed = 0;
          break;
        case 37:
        case 39:
          game.player.dir = 0;
          break;
      }

    }
  }
}

export default Game
