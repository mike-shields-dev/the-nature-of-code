let x;
let y;
let stepSize = 8;
let hue = 0;
let nextMove;

function setup() {
  createCanvas(400, 400);
  x = 200;
  y = 200;
}



function draw() {
  noStroke();
  
  colorMode(HSB);
  hue = (hue + 1) % 360;
  stroke(hue, 255, 100, 0.25);
  strokeWeight(4);
  point(x, y);
  

  switch(floor(random(4))) {
    case 0:
      nextMove = x - stepSize
      if(nextMove > 0) {
        x = nextMove;
      }
      break;
    case 1:
      nextMove = x + stepSize
      if(nextMove < width) {
        x = nextMove;
      }
      break;
    case 2:
      nextMove = y - stepSize
      if(nextMove > 0) {
        y = nextMove;
      }
      break;
    case 3: 
      nextMove = y + stepSize
      if(nextMove < width) {
        y = nextMove;
      }
      break;
  }
}