let xOffset = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  const x = map(noise(xOffset), 0, 1, 0, width);

  ellipse(x, 200, 24, 24);
  
  xOffset += 0.01;
}