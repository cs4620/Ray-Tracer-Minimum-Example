class Camera {

  constructor(origin, direction, up, angle = Math.PI / 4) {
    this.origin = origin;
    this.direction = direction.normalize()
    this.up = up.normalize();
    this.angle = angle
  }

  getOrigin(x, y) {
    return this.origin;
  }
  
  getDirection(x, y) {

    //Take a cross product to determine the right direction
    let right = this.direction.cross(this.up).normalize()

    //Recalculate the up direction for our sanity
    let up = right.cross(this.direction).normalize()

    let cos = Math.cos(this.angle);
    let sin = Math.sin(this.angle);

    let xOffset = right.scale(x).scale(sin)
    let yOffset = up.scale(y).scale(sin);


    let newDirection = this.direction.scale(cos).add(xOffset).add(yOffset).normalize();


    return newDirection


  }

}