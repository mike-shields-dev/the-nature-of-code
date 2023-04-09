let xOffsetA = 0;
let xOffsetB = 1000;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  const x = map(noise(xOffsetA), 0, 1, 0, width);
  const y = map(noise(xOffsetB), 0, 1, 0, height);
  ellipse(x, y, 24, 24);
  
  xOffsetA += 0.01;
  xOffsetB += 0.01;
}