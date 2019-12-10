var diameter = 1;

function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  canvas.parent('processing');
  //noLoop();
}

function draw() {
 background('silver');
if (diameter > 200) {
    fill('yellow');
}

else {
    fill('white');
}
 
nostroke();
  ellipse(225,225, diameter); 
  diameter=constrian(diameter,0,450);
  diameter++;

}
