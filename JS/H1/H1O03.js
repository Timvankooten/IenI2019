function setup() {
  canvas = createCanvas(450,450);
  background('white');
  canvas.parent('processing');
  noLoop();
  colorMode(RGB,225,225,225,1);  
}

function draw() {
  noStroke();
  fill(50,205,50,0.3);
  rect(0,0,450,450)
  rect(0,150,450,150);
  rect(75,0,75,450);
circle(450, 225, 450);
triangle(225, 0, 225, 450, 450, 225);
}