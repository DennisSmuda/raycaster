import map from './map.js'


/**
 * Minimap Constructor
 */
class Minimap {

  constructor(width, height, player) {
    this.player = player;
    this.mapWidth = width;
    this.mapHeight = height;

    this.miniMap = document.getElementById('minimap');
    this.miniMapObjects = document.getElementById('minimapobjects');
    this.ctx = this.miniMap.getContext('2d');

    this.miniMapObjects.width = width;
    this.miniMapObjects.height = height;
    this.miniMapScale = 8;

    this.init();
    // this.move();
  }


  init() {
    this.miniMap.style.width = (this.mapWidth * this.miniMapScale) + "px";
    this.miniMap.style.height = (this.mapHeight * this.miniMapScale) + "px";
    this.miniMap.width = this.mapWidth * this.miniMapScale;
    this.miniMap.height = this.mapHeight * this.miniMapScale;
  }

  /** 
   *Draw Top-Down 2d View
   */
  draw() {
    let ctx = this.miniMap.getContext("2d");
    ctx.clearRect(0, 0, this.miniMap.width, this.miniMap.height);

    // Draw Tiles
    for (let y = 0; y < this.mapHeight; y++) {
      for (let x = 0; x < this.mapWidth; x++) {
        let wall = map[y][x];

        if (wall > 0) {
          ctx.fillStyle = "rgb(124, 67, 43)";
          ctx.fillRect(
            x * this.miniMapScale,
            y * this.miniMapScale,
            this.miniMapScale, this.miniMapScale
          );
        }
      }
    }

    // Draw Player
    ctx.fillStyle = "rgb(255, 255, 255)"
    ctx.fillRect(
      this.player.x * this.miniMapScale - 2,
      this.player.y * this.miniMapScale - 2,
      this.miniMapScale, this.miniMapScale
    );

    ctx.beginPath();
    ctx.moveTo(this.player.x * this.miniMapScale, this.player.y * this.miniMapScale);
    ctx.lineTo(
      (this.player.x + Math.cos(this.player.rot) * 4) * this.miniMapScale,
      (this.player.y + Math.sin(this.player.rot) * 4) * this.miniMapScale
    );
    ctx.closePath();
    ctx.strokeStyle = 'white';
    ctx.stroke();
  }

}

export default Minimap;

