
let index;
let r;
let g;
let b;

function setup () {
  // turns off p5's (rather verbose but) friendly errors
  p5.disableFriendlyErrors = true;
  // Create the canvas
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('sketch-holder')
  background(220);
  pixelDensity(1)
  r = random(0,255);
  g = random(0,255);
  b = random(0,255);
  frameRate(15)
};


function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function saveImage() {
  saveCanvas(canvas)
}

function draw () {
  loadPixels();
  background(220)
  
  for(var y =0;y<height;y++){
    for(var x=0;x<width;x++){
      
      index = (x+y*width)*4
      if(y < random(height)){
        // pixels[index] = random(map(index, 0, 640000, 255, 0));
        pixels[index] = map(y, 0, height, r, 255);
        pixels[index+1] = map(y, 0, height, g, 255);
        pixels[index+2] = map(y, 0, height, b, 255);
        pixels[index+3] = 255;
      } else {
        pixels[index] = map(y, 0, height, 255, r);
        pixels[index+1] = map(y, 0, height, 255, g);
        pixels[index+2] = map(y, 0, height, 255, b);
        pixels[index+3] = 255;
      }
    }
  }
  updatePixels()
}

