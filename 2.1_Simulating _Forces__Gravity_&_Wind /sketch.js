let mover;
let gravity;
let wind;

function setup() {
  createCanvas(400, 400);
  mover = new Mover(width / 2, height / 2);
  gravity = createVector(0, 0.1);
  wind = createVector(0.01, 0);
}

function draw() {
  background(0);
  
  if(mouseIsPressed) {
    mover.applyForce(wind);
  }

  mover.applyForce(gravity);
  mover.update();
  mover.edges();
  mover.show();
}