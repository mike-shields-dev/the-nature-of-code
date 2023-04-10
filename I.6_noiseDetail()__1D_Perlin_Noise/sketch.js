let increment = 0.01;

let detailSlider;
let detailOutput;
let detail = 1;

let fallOffSlider;
let fallOffOutput;
let fallOff = 1;

function setup() {
  detailOutput = document.querySelector('#detail-output');
  detailOutput.textContent = detail;

  detailSlider = document.querySelector('#detail-slider');
  detailSlider.min = 0;
  detailSlider.max = 36;
  detailSlider.step = 1;
  detailSlider.value = detail;

  detailSlider.addEventListener('input', e => {
    detail = +e.target.value
    detailOutput.innerText = detail;
  });

  fallOffOutput = document.querySelector('#falloff-output');
  fallOffOutput.textContent = fallOff;

  fallOffSlider = document.querySelector('#falloff-slider');
  fallOffSlider.min = 0;
  fallOffSlider.max = 1;
  fallOffSlider.step = 0.001;
  fallOffSlider.value = fallOff;

  fallOffSlider.addEventListener('input', e => {
    fallOff = +e.target.value;
    fallOffOutput.value = fallOff;
  });

  createCanvas(400, 400);
  pixelDensity(1);
}

function draw() {
  noiseDetail(detail, fallOff);
  loadPixels();

  let yOffset = 0;

  for (let y = 0; y < width; y++) {
    let xOffset = 0;

    for (let x = 0; x < height; x++) {
      const index = (x + y * width) * 4;
      const r = noise(xOffset, yOffset) * 255;

      pixels[index + 0] = r;    // R
      pixels[index + 1] = r;    // G
      pixels[index + 2] = r;    // B
      pixels[index + 3] = 255;  // A

      xOffset += increment;
    }
    yOffset += increment;
  }

  updatePixels();
}