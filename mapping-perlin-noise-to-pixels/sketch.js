let increment = 0.01;

function setup() {
  createCanvas(200, 200);
  pixelDensity(1);
}

function draw() {
  let yOff = 0;
  
  loadPixels();
  
  for (let y = 0; y < width; y++) {
    let xOff = 0;
    
    for(let x = 0; x < height; x++) {
      const index = (x + y * width) * 4;
      const r = noise(xOff, yOff) * 255;
      
      pixels[index+0] = r;    // R
      pixels[index+1] = r;    // G
      pixels[index+2] = r;    // B
      pixels[index+3] = 255;  // A

      xOff += increment;
    }
    yOff += increment;
  }

  updatePixels();
}