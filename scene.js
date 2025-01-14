class Scene{
  static scene;
  constructor(geometry, camera, lights, options = {}){
    this.geometry = geometry;
    this.camera = camera;
    this.lights = lights;
    this.options = options;
  }

}

