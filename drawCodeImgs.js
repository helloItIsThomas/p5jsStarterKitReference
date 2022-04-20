
function drawCodeImgs(tempIndex){
  if(showCode == true){
    push();
    blendMode(EXCLUSION);
    imageMode(CORNER);
    image(codeImgs[tempIndex], -15, 175,   codeImgs[tempIndex].width*0.5,  codeImgs[tempIndex].height*0.5);
    pop();
  }
  push();
  textFont(apercu);
  textSize(20);
  fill(color5);
  textAlign(CORNER);
  text("press h to toggle code", 20, 125);
  pop();
}
