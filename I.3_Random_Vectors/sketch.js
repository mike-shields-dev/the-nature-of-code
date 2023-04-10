function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  translate(width / 2, height / 2);
  v = p5.Vector.random2D();
  
  v.mult(random(0, 200));
  strokeWeight(4);

  const r = random(255);
  const g = random(255);
  const b = random(255);
  
  stroke(255, 50);
  line(0, 0, v.x, v.y);
}