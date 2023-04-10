let range = 0.01;
let rangeSlider;
let travel = 0.01;
let travelSlider;
let gain = 0.5;
let gainSlider;
let start = 0;

function setup() {
  rangeSlider = document.querySelector('#range-slider');
  rangeSlider.min = 0;
  rangeSlider.max = 1;
  rangeSlider.step = 0.0001;
  rangeSlider.value = range;

  rangeSlider.addEventListener('input', e => {
    range = +e.target.value
  });

  travelSlider = document.querySelector('#travel-slider');
  travelSlider.min = 0;
  travelSlider.max = 1;
  travelSlider.step = 0.001;
  travelSlider.value = travel;

  travelSlider.addEventListener('input', e => {
    travel = +e.target.value
  });

  gainSlider = document.querySelector('#gain-slider');
  gainSlider.min = 0;
  gainSlider.max = 1;
  gainSlider.step = 0.0001;
  gainSlider.value = gain;

  gainSlider.addEventListener('input', e => {
    gain = +e.target.value;
  });

  createCanvas(400, 400);
}

function draw() {
  background(0);
  stroke(255);
  noFill();
  beginShape()

  let xOffset = start;

  for (let x = 0; x < width; x++) {
    const y = map(noise(xOffset), 0, 1, -height * gain, height * gain) + 200;
    vertex(x, y);
    xOffset += range;
  }
  endShape();

  start += travel;
}