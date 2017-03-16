class Player {

  constructor() {
    this.x = 1;
    this.y = 1;
    this.dir = 0;
    this.rot = 0; // the current angle of rotation
    this.speed = 0; // is the playing moving forward (speed = 1) or backwards (speed = -1).
    this.moveSpeed = 0.18; // how far (in map units) does the player move each step/update
    this.rotSpeed = 6; // how much does the player rotate each step/update (in degrees)
  }

  update() {
    console.log("Update Player")
  }
}

export default Player

