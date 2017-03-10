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
    this.miniMap = new Minimap(this.mapWidth, this.mapHeight);
  }



  update() {

  }

  draw() {
    
    this.miniMap.draw();

  }

  bindKeys() {

  }
}

export default Game
