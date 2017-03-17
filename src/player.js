import map from './map'

class Player {

  constructor(mapWidth, mapHeight) {
    this.x = 1;
    this.y = 1;
    this.dir = 0;
    this.rot = 0; // the current angle of rotation
    this.speed = 0; // is the playing moving forward (speed = 1) or backwards (speed = -1).
    this.moveSpeed = 0.18; // how far (in map units) does the player move each step/update
    this.rotSpeed = 6; // how much does the player rotate each step/update (in degrees)
    this.mapWidth = mapWidth;
    this.mapHeight = mapHeight;
  }

  update() {
    let moveStep = this.speed * this.moveSpeed;
    this.rot += (this.dir * this.rotSpeed * Math.PI / 180);

    let newX = this.x + Math.cos(this.rot) * moveStep;
    let newY = this.y + Math.sin(this.rot) * moveStep;

    if (this.isBlocking(newX, newY)) {
      return;
    }

    this.x = newX;
    this.y = newY;
  }

  isBlocking(x, y) {
    // Game field Bounds
    if (y < 0 ||  y > this.mapHeight ||  x < 0 ||  x > this.mapWidth) {
      return true;
    }

    // Return tru if tile is not 0
    return (map[Math.floor(y)][Math.floor(x)] != 0);
  }
}

export default Player

