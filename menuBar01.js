
function menuBar01(){
  sel1.position(0,0);
  sel2.position(0,0);
  sel3.position(0,0);
  changeBg();
  val1 = sel1.value();
  val2 = sel2.value();
  val3 = sel3.value();

  textFont(tiny);
  menuH = 1080/20;
  push();
  translate(10,10);
  textSize(menuH*0.5);
  noFill();
  fill('#FFFFFF');
  rect(0, 0, width-20, menuH, 2.5);
  fill('#000000');
  push();
  text("I want", menuH*1.25, menuH*0.6);
  pop();
  push();
  translate(marginW);
  sel1.position(150, marginH);
  sel1.size(120, menuH);
  pop();
  push();
  translate(marginW+220, 0);
  text("to",70,menuH*0.6);
  pop();
  push();
  sel2.position(350, marginH);
  sel2.size(120, menuH);
  pop();
  push();
  translate(marginW+245,0);
  text("when", 270, menuH*0.6);
  sel3.position(600, marginH);
  sel3.size(150, menuH);
  pop();
  pop();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
