import map from './map.js'


class Minimap {
  constructor(width, height) {
    this.miniMap = document.getElementById('minimap');
    this.ctx = this.miniMap.getContext('2d');
    this.mapWidth = width;
    this.mapHeight = height;
    this.miniMapScale = 8;


    this.init();
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
    // let ctx = miniMap.getContext("2d");

    for (let y = 0; y < this.mapHeight; y++) {
      for (let x = 0; x < this.mapWidth; x++) {
        let wall = map[y][x];

        if (wall > 0) {
          this.ctx.fillStyle = "rgb(124, 67, 43)";
          this.ctx.fillRect(
            x * this.miniMapScale,
            y * this.miniMapScale,
            this.miniMapScale, this.miniMapScale
          );
        }
      }
    }
  }
}

export default Minimap;