
function setup(){
  canvas = createCanvas(windowWidth,windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  imageMode(CENTER);
  libSetup();
}

function draw(){
  background(color1);
  menuBar01();
}
