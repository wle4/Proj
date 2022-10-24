let bx;
let by;
let boxSize = 75;
let overBox = false;
let locked = false;
let xOffset = 0.0;
let yOffset = 0.0;
let bed;
function preload() {
  bed = loadImage('BED.png');
}

function setup() {
  createCanvas(720, 400);
  bx = width / 2.0;
  by = height / 2.0;

}

function draw() {
  background(237, 34, 93);
  image(bed, 10, 10)

  if (
    mouseX > bx - boxSize &&
    mouseX < bx + boxSize &&
    mouseY > by - boxSize &&
    mouseY < by + boxSize
  ) {
    overBox = true; 

  }

  // Draw the box
  rect(bx, by, boxSize, boxSize);
}

function mousePressed() {
  if (overBox) {
    locked = true;
  } else {
    locked = false;
  }
  xOffset = mouseX - bx;
  yOffset = mouseY - by;
}

function mouseDragged() {
  if (locked) {
    bx = mouseX - xOffset;
    by = mouseY - yOffset;
  }

}
