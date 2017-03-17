import map from './map'


class Player {

  constructor(...args) {
    this.x = 1;
    this.y = 1;
    this.dir = 0;
    this.rot = 0; // the current angle of rotation
    this.speed = 0; // is the playing moving forward (speed                            = 1) or backwards (speed = -1).
    this.moveSpeed = 0.18; // how far (in map units) does the player move each step/update
    this.rotSpeed = 6; // how much does the player rotate each step/update (in degrees)
    this.mapWidth = args[0];
    this.mapHeight = args[1];
    this.screenWidth = args[2];
    // Rays
    this.stripWidth = 4;
    this.fov = 60 * Math.PI / 180;
    this.numRays = Math.ceil();
    this.fovHalf = this.fov / 2;
    this.viewDistance = (this.screenWidth / 2) / Math.tan((this.fov / 2));
    this.twoPI = Math.PI * 2;
  }

  update() {
    this.move();
    this.castRays();
  }

  /**
   * Basic FOV Raycast
   */
  castRays() {
    let stripId = 0;

    for (let i = 0; i < this.numRays; i++) {
      let rayScreenPos = (-this.numRays / 2 + i) * this.stripWidth;

      let rayViewDist = Math.sqrt(rayScreenPos * rayScreenPos + viewDistance * viewDistance);
      let rayAngle = Math.asin(rayScreenPos / rayViewDist);

      this.castSingleRay(
        this.rot + rayAngle,
        stripId++
      );
    }
  }

  castSingleRay(rayAngle, stripId) {
    rayAngle %= twoPI;
    if (rayAngle < 0) rayAngle += this.twoPI;

    // Determine Quadrant
    var right = (rayAngle > twoPI * 0.75 || rayAngle < twoPI * 0.25);
    let up    = (rayAngle < 0 || rayAngle > Math.PI);

    let angleSin = Math.sin(rayAngle);
    let angleCos = Math.cos(rayAngle);

    // Distance + Coordinates of the wallhit.
    let dist = 0;
    let xHit = 0;
    let yHit = 0;


  }

  move() {
    let moveStep = this.speed * this.moveSpeed;
    this.rot += (this.dir * this.rotSpeed * Math.PI / 180);

    let newX = this.x + Math.cos(this.rot) * moveStep;
    let newY = this.y + Math.sin(this.rot) * moveStep;

    // Check Collisions
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

