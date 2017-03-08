import map from './map'
import Raycaster from './raycaster'

let mapWidth = 0;
let mapHeight = 0;
const miniMapScale = 8;

const bgColor = '56, 42, 36';

(function() {

  let canvas = document.getElementById('canvas');
  let miniMap = document.getElementById('minimap');
  let raycaster = new Raycaster();

  mapWidth = map[0].length;
	mapHeight = map.length;

  miniMap.width = mapWidth * miniMapScale;
  miniMap.height = mapHeight * miniMapScale;
  miniMap.style.width = (mapWidth * miniMapScale) + "px";
  miniMap.style.height = (mapHeight * miniMapScale) + "px";


  drawMiniMap();


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
  console.log(map);

})();

