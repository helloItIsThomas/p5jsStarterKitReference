
function drawCodeImgs(tempIndex){

  push();
  translate(gridGutter,gridShapeH/2+gridGutter);

  // push();
  // // ellipseMode(CENTER);
  // noStroke();
  // fill(color5);
  // // translate(gridShapeW*0.15,0);
  // rect(gridShapeW*1.95, gridShapeH*0.035, gridShapeW*0.265, gridShapeH*0.175, 50);
  // fill(color1);
  // square(gridShapeW*1.961,gridShapeH*0.046,gridShapeH*0.15,50);
  // textFont(apercu);
  // textSize(gridShapeW*0.06);
  // fill(color1);
  // text("ON",gridShapeW*2.14,gridShapeH*0.15);
  // pop();

  // textSize(25);
  textAlign(CORNER);
  noFill();
  // fill(0);
  strokeWeight(1);
  stroke(color5);
  rect(0, 0, gridShapeW*2.25, gridShapeH*0.25, 10, 10, 0, 0);
  // rect(0, gridShapeH*0.25, gridShapeW*2.25, gridShapeH*0.5, 0, 0, 0, 0);
  fill(color5);
  noStroke();
  textSize(gridShapeW*0.065);
  textFont(apercuBold);
  text(menuString,gridGutter*2, gridShapeH*0.15);
  if(showCode == true){
    noFill();
    stroke(color5);
    rect(0, 0, gridShapeW*2.25, gridShapeH*4, 10);
    rect(0, gridShapeH*0.25, gridShapeW*2.25, gridShapeH*0.5,0, 0, 0, 0);
    fill(0);
    stroke(color5);
    rect(0, gridShapeH*0.75, gridShapeW*2.25, gridShapeH*0.25, 0, 0, 0, 0);

    fill(color4);
    noStroke();
    textSize(gridShapeW*0.065);
    textFont(apercu);
    drawCodeStringsHead(tempIndex);
    // text("function imageRotationMouse();",gridGutter*2, gridShapeH*0.55);

    // textSize(gridShapeW*0.1);
    fill(color5);
    textFont(apercuBold);
    text("to run this:", gridGutter*2, gridShapeH*0.9);
    textFont(apercu);
    fill(color4);
    textSize(gridShapeW*0.05);
    // text("function imageRotationMouse(posX, posY, mySize){\n   if(posX == undefined || posY == undefined){\n      posX = width/2;\n      posY = height/2;\n   }\n   if(mySize == undefined){\n      mySize = 100;\n   }\n   translate(posX, posY);\n   rotate(mouseY*0.025);\n   image(pImage1, 0, 0, mySize, mySize);\n}",gridGutter*2, gridShapeH*1.25);
    drawCodeStringsBody(tempIndex);
    // text("mySize);\nmySize);\nmySize);\nmySize);\nmySize);\nmySize);\nmySize);\nmySize);\nmySize);\nmySize);\nmySize);\nmySize);\nmySize);\nmySize);\nmySize);\nmySize);\nmySize);\nmySize);\nmySize);\nmySize);\nmySize);\nmySize);\nmySize);\nmySize);\nmySize);\nmySize);\nmySize);\nmySize);\nmySize);\n}",gridGutter*2, gridShapeH*1.25);
    // push();
    // blendMode(EXCLUSION);
    // imageMode(CORNER);
    // image(codeImgs[tempIndex], 0, gridShapeH*1, codeImgs[tempIndex].width*0.5,  codeImgs[tempIndex].height*0.5);
    // codeImgs[tempIndex].resize(gridShapeW*2.25,0);
    // image(codeImgs[tempIndex], 0, gridShapeH);
    // pop();
  }
  // rect(0, gridShapeH*0.5, gridShapeW*2.25, gridShapeH*0.75, 0, 0, 0, 0);
  // rect(0, gridShapeH*1.25, gridShapeW*2.25, gridShapeH*0.25, 0, 0, 0, 0);
  pop();




  push();
  textFont(apercu);
  textSize(20);
  fill(color5);
  textAlign(CORNER);
  // text("press h to toggle code", 20, 125);
  pop();
}
