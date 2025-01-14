"use strict"

let width = 400
let height = 400
let triangle = new Triangle(new Vector3(0, 0, 0), new Vector3(0, 49, 0), new Vector3(49, 0, 0));
let camera = new Camera(new Vector3(0, 0, 100), new Vector3(0, 0, -1), Vector3.up, Camera.Perspective, Math.PI / 4)

/**
 * The main ray tracing routine
 */
async function main() {
  //Setup the html for the page
  let canvas = document.querySelector("canvas");
  canvas.width = width * 2;
  canvas.height = height;
  let ctx = canvas.getContext("2d")

  //Ray Tracer starts
  //Loop over all the pixels
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let color = render(x, y);
      ctx.fillStyle = `rgb(${color.r}, ${color.g}, ${color.b})`
      ctx.fillRect(x, y, 1, 1)
    }
  }
}

/**
 * Run our ray tracer
 */
function render(x, y) {
  //Determine the origin and direction of the ray
  let startX = x - width / 2;
  let startY = y - height / 2;
  let origin = camera.origin
  let direction = camera.getDirection(startX / (width / 2), startY / (height / 2));

  let result = closestCollision(origin, direction, null, 1);
  
  if (!result) return { r: 128, g: 128, b: 128 }; //Hard coded background color
  return { r: 255, g: 255, b: 255 }; //Hard coded object color
}

function closestCollision(origin, direction) {
  let closestPositiveT = Number.MAX_VALUE;
  let closestCollision;

  //The color of the closest collision for this pixel
  let geometry = triangle

  //Find the intersection with this object
  let collision = geometry.intersect(origin, direction);

  //Check to see if the collision exists...
  //...and if it is closer than any other collision we've seen
  if (collision && collision.timeToCollision < closestPositiveT) {
    //Get the distance to collision
    closestPositiveT = collision.timeToCollision
    collision.rayTracedObject = geometry;

    closestCollision = collision;
  }

  return closestCollision;
}

//Run the main ray tracer
main();