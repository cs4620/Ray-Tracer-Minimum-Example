/**
 * The data about a collision that is required to shade and/or recursively ray trace
 */
class Collision{
  /**
   * Create a collision object
   * @param {Number} timeToCollision Distance from the origin to the collision
   * @param {Vector3} collisionLocation The position in world space of the collision
   * @param {Integer} depth How many additional ray casts are allowed. (Unused.)
   */
  constructor(timeToCollision, collisionLocation)
  {
    this.timeToCollision = timeToCollision;
    this.collisionLocation = collisionLocation;
  }
}