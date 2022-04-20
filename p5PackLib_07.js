
////////////////////////////

function lineDrawStart(posX, posY, mySize){
  drawCodeImgs(1);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }

  if(mySize == undefined){
    mySize = 100;
  }
  stroke(255,0,0);
  strokeWeight(5);
  line(posX, posY, posX+mySize, posY+mySize);
}

////////////////////////////

function shapeDrawStart(posX, posY, mySize){
  drawCodeImgs(3);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }
  circle(posX, posY, mySize);
}

////////////////////////////

function imageContentKey(posX, posY, mySize){
  drawCodeImgs(4);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }

  if(keyIsPressed === true){
    image(pImg2, posX, posY, mySize, mySize);
  } else{
    image(pImg1, posX, posY, mySize, mySize);
  }
}

////////////////////////////

function imageContentMouse(posX, posY, mySize){
  drawCodeImgs(5);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }
  if(mouseX > width/2){
    image(pImg2, width/2,height/2,200,200);
  } else{
    image(pImg1, width/2,height/2,200,200);
  }
}

////////////////////////////

function imageContentMouseClick(posX, posY, mySize){
  drawCodeImgs(6);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }
  if(mouseIsPressed == true){
    image(pImg2, posX, posY, mySize, mySize);
  } else{
    image(pImg1, posX, posY, mySize, mySize);
  }

}

////////////////////////////

function imageContentRandom(posX, posY, mySize){
  drawCodeImgs(7);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }
  randomNum = random(0,10);
  if(randomNum > 5){
    image(pImg2, posX, posY, mySize, mySize);
  } else{
    image(pImg1, posX, posY, mySize, mySize);
  }
}

////////////////////////////

function imageContentStart(posX, posY, mySize){
  drawCodeImgs(8);


  for(let c=0; c<clockLength; c++){
    if(c != 0){
      startClockSet[c] = 0;
    }
  }
  startClockSet[0]++;

  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }
  if(startClockSet[0] > 10){
    image(pImg2, posX, posY, mySize, mySize);
  } else{
    image(pImg1, posX, posY, mySize, mySize);
  }
}

////////////////////////////

function imageContentTime(posX, posY, mySize){
  drawCodeImgs(9);


  for(let c=0; c<clockLength; c++){
    if(c != 1){
      startClockSet[c] = 0;
    }
  }
  startClockSet[1]++;

  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }
  if(startClockSet[1] > 200){
    image(pImg2, posX, posY, mySize, mySize);
  } else{
    image(pImg1, posX, posY, mySize, mySize);
  }
}

////////////////////////////

function imageCopiesKey(posX, posY, mySize){
  drawCodeImgs(10);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 20;
  }
  image(pImg2, width/2,0,200,200);
  if(keyIsPressed == true){
    imageCopiesKeyCount++;
  }
  for(let x=0; x<imageCopiesKeyCount; x++){
    image(pImg2, posX+(x*mySize), posY, mySize, mySize);
  }
}

////////////////////////////

function imageCopiesMouse(posX, posY, mySize){
  drawCodeImgs(11);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 20;
  }
  image(pImg2, width/2,0,200,200);
  if(mouseX != pmouseX || mouseY != pmouseY){
    imageCopiesMouseCount++;
  }
  for(let x=0; x<imageCopiesMouseCount; x++){
    image(pImg2, posX+(x*mySize), posY, mySize, mySize);
  }
}

////////////////////////////

function imageCopiesMouseClick(posX, posY, mySize){
  drawCodeImgs(12);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 20;
  }
  image(pImg2, width/2,0,200,200);
  if(mouseIsPressed){
    imageCopiesMouseClickCount++;
  }
  for(let x=0; x<imageCopiesMouseClickCount; x++){
    image(pImg2, posX+(x*mySize), posY, mySize, mySize);
  }
}

////////////////////////////

function imageCopiesRandom(posX, posY, mySize){
  drawCodeImgs(13);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 20;
  }
  image(pImg2, posX, posY, mySize, mySize);
  randomNum = random(0,10);
  if(randomNum > 9){
    imageCopiesRandomCount++;
  }
  for(let x=0; x<imageCopiesRandomCount; x++){
    image(pImg2, posX+(x*mySize), posY, mySize, mySize);
  }
}

////////////////////////////

function imageCopiesStart(posX, posY, mySize){
  drawCodeImgs(14);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 20;
  }
  image(pImg2, posX, posY, mySize, mySize);
  imageCopiesStartCount+=0.1;
  for(let x=0; x<imageCopiesStartCount; x++){
    image(pImg2, posX+(x*mySize), posY, mySize, mySize);
  }
}

////////////////////////////

function imageCopiesTime(posX, posY, mySize){
  drawCodeImgs(15);


  for(let c=0; c<clockLength; c++){
    if(c != 2){
      startClockSet[c] = 0;
    }
  }
  startClockSet[2]++;

  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }
  image(pImg2, posX, posY, mySize, mySize);
  if(startClockSet[2] > 200){
    imageCopiesTimeCount+=0.1;
    for(let x=0; x<imageCopiesTimeCount; x++){
      image(pImg2, posX+(x*mySize), posY, mySize, mySize);
      }
    }
}

////////////////////////////

function imageDrawKey(posX, posY, mySize){
  drawCodeImgs(16);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }
  if(keyIsPressed == true){
    image(pImg1, posX, posY, mySize, mySize);
  }
}

////////////////////////////

function imageDrawMouse(posX, posY, mySize){
  drawCodeImgs(17);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }
  if(mouseX != pmouseX){
    image(pImg1, posX, posY, mySize, mySize);
  }
}

////////////////////////////

function imageDrawMouseClick(posX, posY, mySize){
  drawCodeImgs(18);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }
  if(mouseIsPressed){
    image(pImg1, posX, posY, mySize, mySize);
  }
}

////////////////////////////

function imageDrawRandom(posX, posY, mySize){
  drawCodeImgs(19);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }
  randomNum = random(0,10);
  if(randomNum > 9){
    image(pImg2, posX, posY, mySize, mySize);
  }
}

////////////////////////////

function imageDrawStart(posX, posY, mySize){
  drawCodeImgs(20);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }
  image(pImg2, posX, posY, mySize, mySize);

}

////////////////////////////

function imageDrawTime(posX, posY, mySize){
  drawCodeImgs(21);


  for(let c=0; c<clockLength; c++){
    if(c != 3){
      startClockSet[c] = 0;
    }
  }
  startClockSet[3]++;

  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }
  if(startClockSet[3] > 200){
    image(pImg2, posX, posY, mySize, mySize);
  }
}

////////////////////////////

function imagePositionKey(posX, posY, mySize){
  drawCodeImgs(22);


  push();
  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }

  translate(posX,posY);
  image(pImg1, keyRight*10-keyLeft*10,keyDown*10-keyUp*10,200,200);
  pop();
}

////////////////////////////

function imagePositionMouse(posX, posY, mySize){
  drawCodeImgs(23);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }

  image(pImg1, mouseX, mouseY, mySize, mySize);
}

////////////////////////////

function imagePositionMouseClick(mySize){
  drawCodeImgs(24);


  if(mySize == undefined){
    mySize = 100;
  }

  if(mouseIsPressed ==  true){
    xPos = mouseX;
    yPos = mouseY;
  }
  image(pImg1, xPos, yPos, mySize, mySize);
}

////////////////////////////

function imagePositionRandom(posX, posY, mySize){
  drawCodeImgs(25);


  if(mySize == undefined){
    mySize = 100;
  }
  randomNum = random(0,width);
  randomNum2 = random(0,height);
  image(pImg1, randomNum, randomNum2, mySize, mySize);
}

////////////////////////////

function imagePositionStart(posX, posY, mySize){
  drawCodeImgs(26);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }

  if(moveX < 500){
    moveX+=4;
  }
  image(pImg1, posX+moveX, posY, mySize, mySize);
}

////////////////////////////

function imagePositionTime(posX, posY, mySize){
  drawCodeImgs(27);


  for(let c=0; c<clockLength; c++){
    if(c != 6){
      startClockSet[c] = 0;
    }
  }
  startClockSet[6]++;

  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }

  image(pImg1, moveX+posX, posY, mySize, mySize);
  if(startClockSet[6] > 100){
    if(moveX < 500){
      moveX+=4;
    }
  }
}

////////////////////////////

function imageRotationKey(posX, posY, mySize){
  drawCodeImgs(28);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }

  push();
  translate(posX, posY);
  rotate(keyRight*QUARTER_PI);
  rotate(-1*(keyLeft*QUARTER_PI));
  image(pImg1, 0, 0, mySize, mySize);
  pop();
}

////////////////////////////

function imageRotationMouse(posX, posY, mySize){
  drawCodeImgs(29);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }
  translate(posX, posY);
  rotate(mouseY*0.025);
  image(pImg1, 0, 0, mySize, mySize);
}

////////////////////////////

function imageRotationMouseClick(posX, posY, mySize){
  drawCodeImgs(30);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }

  translate(posX, posY);
  if(mouseIsPressed == true){
    imageRotationMouseClickCount+=0.1;
  }
  rotate(imageRotationMouseClickCount);
  image(pImg1, 0, 0, mySize, mySize);
}

////////////////////////////

function imageRotationRandom(posX, posY, mySize){
  drawCodeImgs(31);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }
  translate(posX, posY);
  if((frameCount*0.1)%2 == 1){
    imageRotationRandomCount +=random(0,360);
  }
  rotate(imageRotationRandomCount);
  image(pImg1, 0, 0, mySize, mySize);
}

////////////////////////////

function imageRotationStart(posX, posY, mySize){
  drawCodeImgs(32);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }
  translate(posX, posY);
  imageRotationStartCount += 0.01;
  rotate(imageRotationStartCount);
  image(pImg1, 0, 0, mySize, mySize);
}

////////////////////////////

function imageRotationTime(posX, posY, mySize){
  drawCodeImgs(33);


  for(let c=0; c<clockLength; c++){
    if(c != 4){
      startClockSet[c] = 0;
    }
  }
  startClockSet[4]++;

  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }

  translate(posX, posY);
  if(startClockSet[4] > 200){
    imageRotationTimeCount += 0.01;
  }
  rotate(imageRotationTimeCount);
  image(pImg1, 0, 0, mySize, mySize);
}

////////////////////////////

function imageSizeKey(posX, posY, mySize, myScale){
  drawCodeImgs(34);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }
  if(myScale == undefined){
    myScale = 200;
  }

  translate(posX, posY);
  image(pImg1, 0, 0, mySize+(keyRight*myScale)-(keyLeft*myScale),(mySize+keyRight*myScale)-(keyLeft*myScale));
}

////////////////////////////

function imageSizeMouse(posX, posY){
  drawCodeImgs(35);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }

  image(pImg1, posX, posY, mouseX, mouseX);
}

////////////////////////////

function imageSizeMouseClick(posX, posY){
  drawCodeImgs(36);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }

  if(mouseIsPressed == true){
    imageSizeMouseClickCount+=2;
  }
  image(pImg1, posX, posY, imageSizeMouseClickCount, imageSizeMouseClickCount);
}

////////////////////////////

function imageSizeRandom(posX, posY, mySize){
  drawCodeImgs(37);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }

  imageSizeRandomCount = random(0,500);
  image(pImg1, posX, posY, imageSizeRandomCount, imageSizeRandomCount);
}

////////////////////////////

function imageSizeStart(posX, posY, mySize){
  drawCodeImgs(38);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }

  if(imageSizeStartCount < height){
    imageSizeStartCount+=10;
  }
  image(pImg2, posX, posY, imageSizeStartCount, imageSizeStartCount);
}

////////////////////////////

function imageSizeTime(posX, posY, mySize){
  drawCodeImgs(39);


  for(let c=0; c<clockLength; c++){
    if(c != 5){
      startClockSet[c] = 0;
    }
  }
  startClockSet[5]++;

  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }

  if(startClockSet[5] > 200){
    if(imageSizeTimeCount < height){
      imageSizeTimeCount+=10;
    }
  }
  image(pImg2, posX, posY, imageSizeTimeCount, imageSizeTimeCount);
}

////////////////////////////

function lineColorKey(posX, posY, mySize){
  drawCodeImgs(40);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 300;
  }

  if(keyIsPressed == true){
    stroke(color2);
  } else{
    stroke(color3);
  }
  line(posX-(mySize/2), posY, posX+(mySize/2), posY);
}

////////////////////////////

function lineColorMouse(posX, posY, mySize){
  drawCodeImgs(41);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 300;
  }

  if(mouseX != pmouseX){
    stroke(color2);
  } else{
    stroke(color3);
  }
  line(posX-(mySize/2), posY, posX+(mySize/2), posY);
}

////////////////////////////

function lineColorMouseClick(posX, posY, mySize){
  drawCodeImgs(42);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 300;
  }

  if(mouseIsPressed){
    stroke(color2);
  } else{
    stroke(color3);
  }
  line(posX-(mySize/2), posY, posX+(mySize/2), posY);
}

////////////////////////////

function lineColorRandom(posX, posY, mySize){
  drawCodeImgs(43);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 300;
  }

  randomNum = random(0,10);
  if(randomNum > 2){
    stroke(color2);
  } else{
    stroke(color3);
  }
  line(posX-(mySize/2), posY, posX+(mySize/2), posY);
}

////////////////////////////

function lineColorStart(posX, posY, mySize){
  drawCodeImgs(44);


  for(let c=0; c<clockLength; c++){
    if(c != 7){
      startClockSet[c] = 0;
    }
  }
  startClockSet[7]++;

  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 300;
  }

  stroke(color3);
  if(startClockSet[7] > 10){
    stroke(color2);
  }
  line(posX-(mySize/2), posY, posX+(mySize/2), posY);
}

////////////////////////////

function lineColorTime(posX, posY, mySize){
  drawCodeImgs(45);


  for(let c=0; c<clockLength; c++){
    if(c != 8){
      startClockSet[c] = 0;
    }
  }
  startClockSet[8]++;

  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 300;
  }

  stroke(color3);
  if(startClockSet[8] > 200){
    stroke(color2);
  }
  line(posX-(mySize/2), posY, posX+(mySize/2), posY);
}

////////////////////////////

function lineCopiesKey(posX, posY, mySize){
  drawCodeImgs(46);


  if(posX == undefined || posY == undefined){
    posX = 0;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }

  stroke(color3);
  if(keyIsPressed == true){
    lineCopiesKeyCount+=1;
  }
  for(let x=0; x<lineCopiesKeyCount; x++){
    line(posX*x, posY, (posX+mySize)*x, posY);
  }
}

////////////////////////////

function lineCopiesMouse(posX, posY, mySize){
  drawCodeImgs(47);


  if(posX == undefined || posY == undefined){
    posX = 0;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 300;
  }
  stroke(color3);
  if(mouseX != pmouseX){
    lineCopiesMouseCount+=1;
  }
  for(let x=0; x<lineCopiesMouseCount; x++){
    line(posX*x, posY, (posX+mySize)*x, posY);
  }
}

////////////////////////////

function lineCopiesMouseClick(posX, posY, mySize){
  drawCodeImgs(48);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 300;
  }

  stroke(color3);
  if(mouseIsPressed == true){
    lineCopiesMouseClickCount+=1;
  }
  for(let x=0; x<lineCopiesMouseClickCount; x++){
    line(posX*x, posY, (posX+mySize)*x, posY);
  }
}

////////////////////////////

function lineCopiesRandom(posX, posY, mySize){
  drawCodeImgs(49);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = 0;
  }
  if(mySize == undefined){
    mySize = 100;
  }

  stroke(color3);
  randomNum = random(0,10);
  if(randomNum > 9){
    lineCopiesRandomCount+=1;
  }
  for(let x=0; x<lineCopiesRandomCount; x++){
    line(posX, posY+x*50, posX+mySize, posY+x*50);
  }
}

////////////////////////////

function lineCopiesStart(posX, posY, mySize){
  drawCodeImgs(50);


  for(let c=0; c<clockLength; c++){
    if(c != 9){
      startClockSet[c] = 0;
    }
  }
  startClockSet[9]++;

  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = 0;
  }
  if(mySize == undefined){
    mySize = 100;
  }
  stroke(color3);
  if(startClockSet[9] > 10 && startClockSet[9] < width){
    lineCopiesStartCount+=1;
  }
  for(let x=0; x<lineCopiesStartCount; x++){
    line(posX, posY+x*50, posX+mySize, posY+x*50);
  }
}

////////////////////////////

function lineCopiesTime(posX, posY, mySize){
  drawCodeImgs(51);


  for(let c=0; c<clockLength; c++){
    if(c != 10){
      startClockSet[c] = 0;
    }
  }
  startClockSet[10]++;

  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = 0;
  }
  if(mySize == undefined){
    mySize = 100;
  }

  stroke(color3);
  if(startClockSet[10] > 100){
    lineCopiesTimeCount+=1;
  }
  for(let x=0; x<lineCopiesTimeCount; x++){
    line(posX, posY+x*50, posX+mySize, posY+x*50);
  }
}

////////////////////////////

function lineDrawKey(posX, posY, mySize){
  drawCodeImgs(52);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 300;
  }

  stroke(color3);
  if(keyIsPressed == true){
    line(posX-(mySize/2), posY, posX+(mySize/2), posY);
  }
}

////////////////////////////

function lineDrawMouse(posX, posY, mySize){
  drawCodeImgs(53);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 300;
  }

  stroke(color3);
  if(mouseX != pmouseX){
    line(posX-(mySize/2), posY, posX+(mySize/2), posY);
  }
}

////////////////////////////

function lineDrawMouseClick(posX, posY, mySize){
  drawCodeImgs(54);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 300;
  }

  stroke(color3);
  if(mouseIsPressed == true){
    line(posX-(mySize/2), posY, posX+(mySize/2), posY);
  }
}

////////////////////////////

function lineDrawRandom(posX, posY, mySize){
  drawCodeImgs(55);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 300;
  }

  stroke(color3);
  randomNum = random(0,10);
  if(randomNum > 5){
    line(posX-(mySize/2), posY, posX+(mySize/2), posY);
  }
}

// ////////////////////////////
//
// function lineDrawStart(posX, posY, mySize){
//   drawCodeImgs(56);
//   for(let c=0; c<clockLength; c++){
//     if(c != 11){
//       startClockSet[c] = 0;
//     }
//   }
//   startClockSet[11]++;
//
//   if(posX == undefined || posY == undefined){
//     posX = width/2;
//     posY = height/2;
//   }
//   if(mySize == undefined){
//     mySize = 300;
//   }
//   stroke(color3);
//   if(startClockSet[11] > 5){
//     line(posX-(mySize/2), posY, posX+(mySize/2), posY);
//   }
// }

////////////////////////////

function lineDrawTime(posX, posY, mySize){
  drawCodeImgs(57);


  for(let c=0; c<clockLength; c++){
    if(c != 12){
      startClockSet[c] = 0;
    }
  }
  startClockSet[12]++;

  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 300;
  }

  stroke(color3);
  if(startClockSet[12] > 100){
    line(posX-(mySize/2), posY, posX+(mySize/2), posY);
  }
}

////////////////////////////

function linePositionKey(posX, posY, mySize, myDistance){
  drawCodeImgs(58);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 300;
  }
  if(myDistance == undefined){
    myDistance = 100
  }

  stroke(color3);
  push();
  line(posX+(keyRight*myDistance-keyLeft*myDistance),posY+(keyDown*myDistance-keyUp*myDistance),posX+(keyRight*myDistance-keyLeft*myDistance+mySize),posY+(keyDown*myDistance-keyUp*myDistance));
  pop();
}

////////////////////////////

function linePositionMouse(posX, posY, mySize){
  drawCodeImgs(59);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 300;
  }

  stroke(color3);
  let lineSize = 100;
  line(mouseX,mouseY,mouseX+lineSize,mouseY);
}

////////////////////////////

function linePositionMouseClick(posX, posY, mySize){
  drawCodeImgs(60);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 300;
  }

  stroke(color3);
  if(mouseIsPressed ==  true){
    xPos = mouseX;
    yPos = mouseY;
  }
  line(xPos, yPos, xPos+mySize, yPos);
}

////////////////////////////

function linePositionRandom(posX, posY, mySize){
  drawCodeImgs(61);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 300;
  }

  stroke(color3);
  randomNum = random(0,width);
  randomNum2 = random(0,height);
  line(randomNum, randomNum2, randomNum+mySize, randomNum2);
}

////////////////////////////

function linePositionStart(posX, posY, mySize){
  drawCodeImgs(62);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 300;
  }

  stroke(color3);
  moveX+=4;
  line(posX+moveX, posY, posX+moveX+mySize, posY);
}

////////////////////////////

function linePositionTime(posX, posY, mySize, startTime){
  drawCodeImgs(63);


  for(let c=0; c<clockLength; c++){
    if(c != 13){
      startClockSet[c] = 0;
    }
  }
  startClockSet[13]++;

  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 300;
  }
  if(startTime == undefined){
    startTime = 200;
  }

  stroke(color3);
  if(startClockSet[13] > startTime){
    if(moveX < 500){
      moveX+=4;
    }
  }
  line(moveX+posX, posY, moveX+posX+mySize, posY);
}

////////////////////////////

function lineRotationKey(posX, posY, mySize){
  drawCodeImgs(64);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 300;
  }

  stroke(color3);
  push();
  translate(posX,posY);
  rotate(keyRight*QUARTER_PI);
  rotate(-1*(keyLeft*QUARTER_PI));
  line(-posX/2, posY, mySize, posY);
  pop();
}

////////////////////////////

function lineRotationMouse(posX, posY, mySize){
  drawCodeImgs(65);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 300;
  }
  stroke(color3);
  push();
  translate(posX,posY);
  rotate(mouseY*0.025);
  line(-posX/2, posY, mySize, posY);
  pop();
}

////////////////////////////

function lineRotationMouseClick(posX, posY, mySize){
  drawCodeImgs(66);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 300;
  }
  stroke(color3);
  if(mouseIsPressed == true){
    lineRotationMouseClickCount+=0.1;
  }
  push();
  translate(posX,posY);
  rotate(lineRotationMouseClickCount);
  line(-posX/2, posY, mySize, posY);
  pop();
}

////////////////////////////

function lineRotationRandom(posX, posY, mySize){
  drawCodeImgs(67);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 300;
  }

  stroke(color3);
  if((frameCount*0.1)%2 == 1){
    lineRotationRandomCount += random(0,360);
  }
  push();
  translate(posX,posY);
  rotate(lineRotationRandomCount);
  line(-posX/2, posY, mySize, posY);
  pop();
}

////////////////////////////

function lineRotationStart(posX, posY, mySize){
  drawCodeImgs(68);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 300;
  }

  stroke(color3);
  lineRotationStartCount += 0.01;
  push();
  translate(posX,posY);
  rotate(lineRotationStartCount);
  line(-posX/2, -posY/2, mySize, posY);
  pop();
}

////////////////////////////

function lineRotationTime(posX, posY, mySize, startTime){
  drawCodeImgs(69);


  for(let c=0; c<clockLength; c++){
    if(c != 14){
      startClockSet[c] = 0;
    }
  }
  startClockSet[14]++;

  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 300;
  }
  if(startTime == undefined){
    startTime = 200;
  }

  stroke(color3);
  if(startClockSet[14] > startTime){
    lineRotationTimeCount += 0.01;
  }
  push();
  translate(posX,posY);
  rotate(lineRotationTimeCount);
  line(-posX/2, posY, mySize, posY);
  pop();
}

////////////////////////////

function lineSizeKey(posX, posY, mySize, myScale){
  drawCodeImgs(70);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 300;
  }
  if(myScale == undefined){
    myScale = 200;
  }

  stroke(color3);
  line(posX,posY,posX+((keyRight*myScale)-(keyLeft*myScale)),posY);
  line(posX, posY, posX, posY+((keyDown*myScale)-(keyUp*myScale)));
}

////////////////////////////

function lineSizeMouse(posX, posY){
  drawCodeImgs(71);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }

  stroke(color3);
  line(posX, posY, posX+mouseX, posY);
  line(posX, posY, posX, posY+mouseY);
}

////////////////////////////

function lineSizeMouseClick(posX, posY, mySize, myScale){
  drawCodeImgs(72);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 300;
  }
  if(myScale == undefined){
    myScale = 2;
  }

  stroke(color3);
  if(mouseIsPressed == true){
    lineSizeMouseClickCount++;
  }
  line(posX, posY, posX+(lineSizeMouseClickCount*myScale), posY+(lineSizeMouseClickCount*myScale));
}

////////////////////////////

function lineSizeRandom(posX, posY, mySize, myDistance){
  drawCodeImgs(73);


  if(posX == undefined || posY == undefined){
    posX = 0;
    posY = 0;
  }
  if(mySize == undefined){
    mySize = 300;
  }
  if(myDistance == undefined){
    myDistance = height;
  }

  stroke(color3);
  lineSizeRandomCount = random(0, myDistance);
  line(posX, posY, posX+lineSizeRandomCount, posY+lineSizeRandomCount);
}

////////////////////////////

function lineSizeStart(posX, posY, mySize, endPoint){
  drawCodeImgs(74);


  for(let c=0; c<clockLength; c++){
    if(c != 15){
      startClockSet[c] = 0;
    }
  }
  startClockSet[15]++;

  if(posX == undefined || posY == undefined){
    posX = 50;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }
  if(endPoint == undefined){
    endPoint = 500;
  }

  stroke(color3);
  if(startClockSet[15] > 5){
    if(lineSizeStartCount < endPoint){
      lineSizeStartCount+=10;
    }
  }
  line(posX, posY, posX+mySize+lineSizeStartCount, posY);
}

////////////////////////////

function lineSizeTime(posX, posY, mySize, endPoint, myDelay){
  drawCodeImgs(75);


  for(let c=0; c<clockLength; c++){
    if(c != 16){
      startClockSet[c] = 0;
    }
  }
  startClockSet[16]++;

  if(posX == undefined || posY == undefined){
    posX = 100;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }
  if(endPoint == undefined){
    endPoint = 500;
  }
  if(myDelay == undefined){
    myDelay = 100;
  }

  stroke(color3);
  if(startClockSet[16] > myDelay){
    if(lineSizeTimeCount < endPoint){
      lineSizeTimeCount+=10;
    }
  }
  line(posX, posY, posX+mySize+lineSizeTimeCount, posY);
}

////////////////////////////

function shapeColorKey(posX, posY, mySize){
  drawCodeImgs(76);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }

  if(keyIsPressed == true){
    fill(color2);
  } else{
    fill(color3);
  }
  circle(posX,posY,mySize);
}

////////////////////////////

function shapeColorMouse(posX, posY, mySize){
  drawCodeImgs(77);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }

  if(mouseX != pmouseX){
    fill(color2);
  } else{
    fill(color3);
  }
  circle(posX,posY,mySize);
}

////////////////////////////

function shapeColorMouseClick(posX, posY, mySize){
  drawCodeImgs(78);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }

  if(mouseIsPressed){
    fill(color2);
  } else{
    fill(color3);
  }
  circle(posX,posY,mySize);
}

////////////////////////////

function shapeColorRandom(posX, posY, mySize){
  drawCodeImgs(79);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }

  randomNum = random(0,10);
  if(randomNum > 2){
    fill(color2);
  } else{
    fill(color3);
  }
  circle(posX,posY,mySize);
}

////////////////////////////

function shapeColorStart(posX, posY, mySize){
  drawCodeImgs(80);


  for(let c=0; c<clockLength; c++){
    if(c != 17){
      startClockSet[c] = 0;
    }
  }
  startClockSet[17]++;

  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }
  fill(color3);
  if(startClockSet[17] > 25){
    fill(color2);
  }
  circle(posX,posY,mySize);
}

////////////////////////////

function shapeColorTime(posX, posY, mySize, myDelay){
  drawCodeImgs(81);


  for(let c=0; c<clockLength; c++){
    if(c != 18){
      startClockSet[c] = 0;
    }
  }
  startClockSet[18]++;

  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }
  if(myDelay == undefined){
    myDelay = 100;
  }

  fill(color3);
  if(startClockSet[18] > myDelay){
    fill(color2);
  }
  circle(posX,posY,mySize);
}

////////////////////////////

function shapeCopiesKey(posX, posY, mySize){
  drawCodeImgs(82);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }

  circle(posX,posY,mySize);
  if(keyIsPressed == true){
    shapeCopiesKeyCount++;
  }
  for(let x=0; x<shapeCopiesKeyCount; x++){
    circle(x*mySize,posY,mySize);
  }
}

////////////////////////////

function shapeCopiesMouse(posX, posY, mySize){
  drawCodeImgs(83);


  if(posX == undefined || posY == undefined){
    posX = 50;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }
  if(mouseX != pmouseX){
    shapeCopiesMouseCount+=1;
  }
  for(let x=0; x<shapeCopiesMouseCount; x++){
    circle(x*mySize+posX,posY,mySize);
  }
}

////////////////////////////

function shapeCopiesMouseClick(posX, posY, mySize){
  drawCodeImgs(84);


  if(posX == undefined || posY == undefined){
    posX = 50;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }

  if(mouseIsPressed == true){
    shapeCopiesMouseClickCount+=1;
  }
  for(let x=0; x<shapeCopiesMouseClickCount; x++){
    circle(x*mySize+posX,posY,mySize);
  }
}

////////////////////////////

function shapeCopiesRandom(posX, posY, mySize){
  drawCodeImgs(85);


  if(posX == undefined || posY == undefined){
    posX = 50;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }

  randomNum = random(0,10);
  if(randomNum > 9){
    shapeCopiesRandomCount+=1;
  }
  for(let x=0; x<shapeCopiesRandomCount; x++){
    circle(x*mySize+posX, posY, mySize);
  }
}

////////////////////////////

function shapeCopiesStart(posX, posY, mySize){
  drawCodeImgs(86);


  if(posX == undefined || posY == undefined){
    posX = 50;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }

  shapeCopiesStartCount+=0.1;
  for(let x=0; x<shapeCopiesStartCount; x++){
    circle(x*mySize+posX,posY,mySize);
  }
}

////////////////////////////

function shapeCopiesTime(posX, posY, mySize, myDelay, numCopies){
  drawCodeImgs(87);


  for(let c=0; c<clockLength; c++){
    if(c != 19){
      startClockSet[c] = 0;
    }
  }
  startClockSet[19]++;

  if(posX == undefined || posY == undefined){
    posX = 50;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }
  if(myDelay == undefined){
    myDelay = 100;
  }
  if(numCopies == undefined){
    numCopies = 5;
  }

  stroke(color3);
  if(startClockSet[19] > myDelay && shapeCopiesTimeCount < numCopies){
    shapeCopiesTimeCount+=1;
  }
  for(let x=0; x<shapeCopiesTimeCount; x++){
    circle(x*mySize+posX,posY,mySize);
  }
}

////////////////////////////

function shapeDrawKey(posX, posY, mySize){
  drawCodeImgs(88);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }

  if(keyIsPressed === true){
    circle(posX, posY, mySize);
  }
}

////////////////////////////

function shapeDrawMouse(posX, posY, mySize){
  drawCodeImgs(89);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }

  if(mouseX != pmouseX){
    circle(posX, posY, mySize);
  }
}

////////////////////////////

function shapeDrawMouseClick(posX, posY, mySize){
  drawCodeImgs(90);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }

  if(mouseIsPressed){
    circle(posX, posY, mySize);
  }
}

// ////////////////////////////
//
// function shapeDrawStart(posX, posY, mySize){
//  drawCodeImgs(91);
//
//
//   if(posX == undefined || posY == undefined){
//     posX = width/2;
//     posY = height/2;
//   }
//   if(mySize == undefined){
//     mySize = 100;
//   }
//
//   circle(posX, posY, mySize);
// }

////////////////////////////

function shapeDrawTime(posX, posY, mySize, myDelay){
  drawCodeImgs(92);


  for(let c=0; c<clockLength; c++){
    if(c != 20){
      startClockSet[c] = 0;
    }
  }
  startClockSet[20]++;

  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }
  if(myDelay == undefined){
    myDelay = 100;
  }

  if(startClockSet[20] > myDelay){
    circle(posX, posY, mySize);
  }
}

////////////////////////////

function shapePositionKey(posX, posY, mySize, myScale){
  drawCodeImgs(93);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }
  if(myScale == undefined){
    myScale = 100;
  }

  circle((keyRight*myScale-keyLeft*myScale)+posX, (keyDown*myScale-keyUp*myScale)+posY, mySize);
}

////////////////////////////

function shapePositionMouse(mySize){
  drawCodeImgs(94);


  if(mySize == undefined){
    mySize = 100;
  }

  circle(mouseX, mouseY ,mySize);
}

////////////////////////////

function shapePositionMouseClick(posX, posY, mySize){
  drawCodeImgs(95);


  if(mySize == undefined){
    mySize = 100;
  }

  if(mouseIsPressed == true){
    shapeMousePosX = mouseX;
    shapeMousePosY = mouseY;
  }
  circle(shapeMousePosX, shapeMousePosY, mySize);
}

////////////////////////////

function shapePositionRandom(posX, posY, mySize){
  drawCodeImgs(96);


  if(mySize == undefined){
    mySize = 100;
  }

  circle(random(width),random(height), 50);
}

////////////////////////////

function shapePositionStart(posX, posY, mySize, endPoint){
  drawCodeImgs(97);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }
  if(endPoint == undefined){
    endPoint = 300;
  }

  if(moveX < endPoint){
    moveX+=4;
  }
  circle(moveX+posX,posY,mySize);
}

////////////////////////////

function shapePositionTime(posX, posY, mySize, myDelay, endPoint){
  drawCodeImgs(98);


  for(let c=0; c<clockLength; c++){
    if(c != 21){
      startClockSet[c] = 0;
    }
  }
  startClockSet[21]++;

  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }
  if(myDelay == undefined){
    myDelay = 100;
  }
  if(endPoint == undefined){
    endPoint = 200;
  }

  if(startClockSet[21] > myDelay && startClockSet[21] < endPoint){
    startClockSet[21]+=4;
  }
  circle(startClockSet[21],height/2,windowWidth*0.25);
}

////////////////////////////

function shapeRotationKey(posX, posY, mySize){
  drawCodeImgs(99);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }

  push();
  translate(posX, posY);
  rotate(keyRight*QUARTER_PI);
  rotate(-1*(keyLeft*QUARTER_PI));
  translate(-mySize/2, -mySize/2);
  rect(0, 0, mySize, mySize);
  pop();
}

////////////////////////////

function shapeRotationMouse(posX, posY, mySize){
  drawCodeImgs(100);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }

  translate(posX, posY);
  push();
  rotate(mouseY*0.015);
  translate(-mySize/2, -mySize/2);
  rect(0, 0, mySize, mySize);
  pop();
}

////////////////////////////

function shapeRotationMouseClick(posX, posY, mySize){
  drawCodeImgs(101);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }
  if(mouseIsPressed == true){
    shapeRotationMouseClickCount+=0.1;
  }

  translate(posX, posY);
  push();
  rotate(shapeRotationMouseClickCount);
  translate(-mySize/2, -mySize/2);
  rect(0, 0, mySize, mySize);
  pop();
}

////////////////////////////

function shapeRotationRandom(posX, posY, mySize){
  drawCodeImgs(102);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }

  if((frameCount*0.1)%2 == 1){
    shapeRotationRandomCount += random(0,360);
  }
  translate(posX, posY);
  push();
  rotate(shapeRotationRandomCount);
  translate(-mySize/2, -mySize/2);
  rect(0,0, mySize, mySize);
  pop();
}

////////////////////////////

function shapeRotationStart(posX, posY, mySize){
  drawCodeImgs(103);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }
  translate(posX, posY);
  shapeRotationStartCount += 0.01;
  push();
  rotate(shapeRotationStartCount);
  translate(-mySize/2, -mySize/2);
  rect(0, 0, mySize, mySize);
  pop();
}

////////////////////////////

function shapeRotationTime(posX, posY, mySize){
  drawCodeImgs(104);


  for(let c=0; c<clockLength; c++){
    if(c != 22){
      startClockSet[c] = 0;
    }
  }
  startClockSet[22]++;

  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }
  translate(width/2,height/2);
  if(startClockSet[22] > 100){
    shapeRotationTimeCount += 0.01;
  }

  push();
  rotate(shapeRotationTimeCount);
  translate(-mySize/2, -mySize/2);
  rect(0, 0, mySize, mySize);
  pop();
}

////////////////////////////

function shapeSizeKey(posX, posY, mySize, myScale){
  drawCodeImgs(105);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }
  if(myScale == undefined){
    myScale = 100;
  }

  circle(posX, posY, mySize+(keyUp*myScale)-(keyDown*myScale));
}

////////////////////////////

function shapeSizeMouse(posX, posY, mySize){
  drawCodeImgs(106);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }

  circle(posX, posY, mySize+mouseX);
}

////////////////////////////

function shapeSizeMouseClick(posX, posY, mySize){
  drawCodeImgs(107);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }
  if(mouseIsPressed == true){
    shapeSizeMouseClickCount++;
  }
  circle(posX, posY, mySize+shapeSizeMouseClickCount);
}

////////////////////////////

function shapeSizeRandom(posX, posY){
  drawCodeImgs(108);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }

  shapeSizeRandomCount = random(0,500);
  circle(posX, posY, shapeSizeRandomCount);
}

////////////////////////////

function shapeSizeStart(posX, posY, mySize){
  drawCodeImgs(109);


  for(let c=0; c<clockLength; c++){
    if(c != 23){
      startClockSet[c] = 0;
    }
  }
  startClockSet[23]++;

  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 200;
  }

  if(startClockSet[23] > 5){
    if(shapeSizeStartCount < mySize){
      shapeSizeStartCount+=10;
    }
  }
  circle(posX, posY, shapeSizeStartCount);
}

////////////////////////////

function shapeSizeTime(posX, posY, mySize, myDelay){
  drawCodeImgs(110);


  for(let c=0; c<clockLength; c++){
    if(c != 24){
      startClockSet[c] = 0;
    }
  }
  startClockSet[24]++;

  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 200;
  }
  if(myDelay == undefined){
    myDelay = 100;
  }

  if(startClockSet[24] > myDelay){
    if(shapeSizeTimeCount < mySize){
      shapeSizeTimeCount+=1;
    }
  }
  circle(posX, posY, 20+shapeSizeTimeCount);
}

////////////////////////////

function typeColorKey(posX, posY, mySize){
  drawCodeImgs(111);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }

  if(keyIsPressed == true){
    fill(color2);
  } else{
    fill(color3);
  }
  textSize(mySize);
  text(messageOne, posX-(mySize/2), posY);
}

////////////////////////////

function typeColorStart(posX, posY, mySize){
  drawCodeImgs(112);


  for(let c=0; c<clockLength; c++){
    if(c != 25){
      startClockSet[c] = 0;
    }
  }
  startClockSet[25]++;

  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }

  if(startClockSet[25] >= 200){
    fill(color3);
  } else{
    fill(color5);
  }
  textSize(mySize);
  text(messageOne, posX, posY);
}

////////////////////////////

function typeColorTime(posX, posY, mySize){
  drawCodeImgs(113);


  for(let c=0; c<clockLength; c++){
    if(c != 31){
      startClockSet[c] = 0;
    }
  }
  startClockSet[31]++;

  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }

  if(startClockSet[31] >= 200){
    fill(color2);
  } else{
    fill(color5);
  }
  textSize(mySize);
  text(messageOne, posX, posY);
}

////////////////////////////

function typeColorRandom(posX, posY, mySize){
  fill(color3);
  textSize(50);

  drawCodeImgs(143);

  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }

  randomNum = random(0,10);
  if(randomNum > 9){
    fill(color2);
  } else{
    fill(color5);
  }
  text(messageOne, posX, posY);
}

////////////////////////////

function typeColorMouse(posX, posY, mySize){
  drawCodeImgs(114);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }

  if(mouseX != pmouseX){
    fill(color2);
  } else{
    fill(color3);
  }
  textSize(mySize);
  text(messageOne, posX-(mySize/2), posY);
}

////////////////////////////

function typeColorMouseClick(posX, posY, mySize){
  drawCodeImgs(115);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }

  if(mouseIsPressed){
    fill(color2);
  } else{
    fill(color3);
  }
  textSize(mySize);
  text(messageOne, posX, posY);
}

////////////////////////////

function typeCopiesRandom(posX, posY, mySize, numCopies){
  drawCodeImgs(116);


  if(posX == undefined || posY == undefined){
    posX = 50;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }
  if(numCopies == undefined){
    numCopies = 5;
  }

  fill(color5);
  textSize(mySize);
  text(messageOne, posX, posY);
  randomNum = random(0,10);
  if(randomNum > 9){
    if(typeCopiesRandomCount < numCopies){
      typeCopiesRandomCount++;
    }
  }
  for(let x=0; x<typeCopiesRandomCount; x++){
    text(messageOne, (x*mySize)+posX, posY*noise(x));
  }
}

////////////////////////////

function typeCopiesStart(posX, posY, mySize, numCopies){
  drawCodeImgs(117);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }
  if(numCopies == undefined){
    numCopies = 5;
  }

  fill(color5);
  textSize(mySize);
  text(messageOne, posX, posY);
  if(typeCopiesStartCount < numCopies){
    typeCopiesStartCount++;
  }
  for(let x=0; x<typeCopiesStartCount; x++){
    text(messageOne, (x*mySize)+posX, posY*noise(x));
  }
}

////////////////////////////

function typeCopiesTime(posX, posY, mySize, myDelay, numCopies){
  drawCodeImgs(118);


  for(let c=0; c<clockLength; c++){
    if(c != 26){
      startClockSet[c] = 0;
    }
  }
  startClockSet[26]++;

  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }
  if(myDelay == undefined){
    myDelay = 100;
  }
  if(numCopies == undefined){
    numCopies = 5;
  }

  fill(color5);
  textSize(mySize);
  text(messageOne, posX, posY);
  if(startClockSet[26] > myDelay){
    if(typeCopiesTimeCount < numCopies){
      typeCopiesTimeCount+=1;
    }
    for(let x=0; x<typeCopiesTimeCount; x++){
      text(messageOne, (x*mySize)+posX, posY*noise(x));
      }
    }
}

////////////////////////////

function typeDrawKey(posX, posY, mySize){
  drawCodeImgs(119);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }

  fill(color5);
  textSize(mySize);
  if(keyIsPressed == true){
    text(messageOne, posX, posY);
  }
}

////////////////////////////

function typeDrawMouse(posX, posY, mySize){
  drawCodeImgs(120);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }

  fill(color5);
  textSize(mySize);
  if(mouseX != pmouseX){
    text(messageOne, posX, posY);
  }
}

////////////////////////////

function typeDrawMouseClick(posX, posY, mySize){
  drawCodeImgs(121);

  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }

  fill(color5);
  textSize(mySize);
  if(mouseIsPressed == true){
    text(messageOne, posX, posY);
  }
}

////////////////////////////

function typeDrawRandom(posX, posY, mySize){
  drawCodeImgs(122);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }

  fill(color5);
  randomNum = random(0,10);
  textSize(mySize);
  if(randomNum > 9){
    text(messageOne, posX, posY);
  }
}

////////////////////////////

function typeDrawStart(posX, posY, mySize){
  drawCodeImgs(123);

  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }

  fill(color5);
  textSize(mySize);
  text(messageOne, posX, posY);
}

////////////////////////////

function typeDrawTime(posX, posY, mySize, myDelay){
  drawCodeImgs(124);


  for(let c=0; c<clockLength; c++){
    if(c != 27){
      startClockSet[c] = 0;
    }
  }
  startClockSet[27]++;

  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }
  if(myDelay == undefined){
    myDelay = 100;
  }

  fill(color5);
  textSize(mySize);
  if(startClockSet[27] > myDelay){
    text(messageOne, posX, posY);
  }
}

////////////////////////////

function typePositionKey(posX, posY, mySize, myScale){
  drawCodeImgs(125);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }
  if(myScale == undefined){
    myScale = 100;
  }

  fill(color5);
  textSize(mySize);
  text(messageOne, (keyRight*myScale-keyLeft*myScale)+posX, (keyDown*myScale-keyUp*myScale)+posY);
}

////////////////////////////

function typePositionMouse(mySize){
  drawCodeImgs(126);


  if(mySize == undefined){
    mySize = 100;
  }

  fill(color5);
  textSize(mySize);
  text(messageOne, mouseX, mouseY);
}

////////////////////////////

function typePositionMouseClick(posX, posY, mySize){
  drawCodeImgs(127);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }

  fill(color5);
  textSize(mySize);
  if(mouseIsPressed ==  true){
    typeMousePosX = mouseX;
    typeMousePosY = mouseY;
  }
  text(messageOne, typeMousePosX, typeMousePosY);
}

////////////////////////////

function typePositionRandom(mySize){
  drawCodeImgs(128);


  if(mySize == undefined){
    mySize = 100;
  }

  fill(color5);
  textSize(mySize);
  randomNum = random(0,width);
  randomNum2 = random(0,height);
  text(messageOne, random(randomNum), random(randomNum2));
}

////////////////////////////

function typePositionStart(posX, posY, mySize, endPoint){
  drawCodeImgs(129);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }
  if(endPoint == undefined){
    endPoint = 800;
  }

  fill(color5);
  textSize(mySize);
  if(moveX < endPoint){
    moveX+=1;
  }
  text(messageOne, moveX + posX, posY);
}

////////////////////////////

function typePositionTime(posX, posY, mySize, endPoint){
  drawCodeImgs(130);


  for(let c=0; c<clockLength; c++){
    if(c != 28){
      startClockSet[c] = 0;
    }
  }
  startClockSet[28]++;

  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }
  if(endPoint == undefined){
    endPoint = 400;
  }

  if(startClockSet[28] > 100){
    if(moveX < endPoint){
      moveX+=4;
    }
  }
  fill(color5);
  textSize(mySize);
  text(messageOne, moveX, height/2);
}

////////////////////////////

function typeRotationKey(posX, posY, mySize, myScale){
  drawCodeImgs(131);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }

  fill(color5);
  textSize(mySize);
  push();
  translate(posX, posY);
  rotate(keyRight*QUARTER_PI*3);
  rotate(-1*(keyLeft*QUARTER_PI*3));
  text(messageOne, 0, 0);
  pop();
}

////////////////////////////

function typeRotationMouse(posX, posY, mySize){
  drawCodeImgs(132);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }

  fill(color5);
  textSize(mySize);
  translate(posX, posY);
  rotate(mouseY*0.025);
  text(messageOne, 0, 0);
}

////////////////////////////

function typeRotationMouseClick(posX, posY, mySize){
  drawCodeImgs(133);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }

  if(mouseIsPressed == true){
    typeRotationMouseClickCount+=0.1;
  }

  fill(color5);
  textSize(mySize);
  translate(posX, posY);
  push();
  rotate(typeRotationMouseClickCount);
  text(messageOne, 0, 0);
  pop();
}

////////////////////////////

function typeRotationRandom(posX, posY, mySize){
  drawCodeImgs(134);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }

  fill(color5);
  textSize(mySize);
  push();
  translate(posX, posY);
  if((frameCount*0.1)%2 == 1){
    typeRotationRandomCount +=random(0,360);
  }
  rotate(typeRotationRandomCount);
  text(messageOne, 0, 0);
  pop();
}

////////////////////////////

function typeRotationStart(posX, posY, mySize){
  drawCodeImgs(135);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }

  fill(color5);
  textSize(mySize);
  push();
  translate(posX, posY);
  typeRotationStartCount += 0.01;
  rotate(typeRotationStartCount);
  text(messageOne, 0, 0);
  pop();
}

////////////////////////////

function typeRotationTime(posX, posY, mySize, myDelay){
  drawCodeImgs(136);


  for(let c=0; c<clockLength; c++){
    if(c != 29){
      startClockSet[c] = 0;
    }
  }
  startClockSet[29]++;

  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 100;
  }
  if(myDelay == undefined){
    myDelay = 100;
  }

  fill(color5);
  textSize(mySize);
  push();
  translate(posX, posY);
  if(startClockSet[29] > myDelay){
    typeRotationTimeCount += 0.01;
  }
  rotate(typeRotationTimeCount);
  text(messageOne, 0, 0);
  pop();
}

////////////////////////////

function typeSizeKey(posX, posY, mySize, myScale){
  drawCodeImgs(137);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 20;
  }
  if(myScale == undefined){
    myScale = 20;
  }

  fill(color5);
  textSize(mySize+(keyUp*myScale)-(keyDown*myScale));
  text(messageOne, posX, posY);
}

////////////////////////////

function typeSizeMouse(posX, posY, mySize){
  drawCodeImgs(138);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 20;
  }

  fill(color5);
  textSize(mySize+mouseX);
  text(messageOne, posX, posY);
}

////////////////////////////

function typeSizeMouseClick(posX, posY, mySize){
  drawCodeImgs(139);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 20;
  }

  textSize(mySize);
  if(mouseIsPressed == true){
    typeSizeMouseClickCount++;
  }
  fill(color5);
  textSize(mySize+typeSizeMouseClickCount);
  text(messageOne, posX, posY);
}

////////////////////////////

function typeSizeRandom(posX, posY, mySize){
  drawCodeImgs(140);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 20;
  }

  fill(color5);
  typeSizeRandomCount = random(0,500);
  textSize(mySize+typeSizeRandomCount);
  text(messageOne, posX, posY);
}

////////////////////////////

function typeSizeStart(posX, posY, mySize, endPoint){
  drawCodeImgs(141);


  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 20;
  }
  if(endPoint == undefined){
    endPoint = 100;
  }

  if(typeSizeStartCount < endPoint){
    typeSizeStartCount+=4;
  }

  fill(color5);
  textSize(mySize+typeSizeStartCount);
  text(messageOne, posX, posY);
}

////////////////////////////

function typeSizeTime(posX, posY, mySize, myDelay, endPoint){
  drawCodeImgs(142);


  for(let c=0; c<clockLength; c++){
    if(c != 30){
      startClockSet[c] = 0;
    }
  }
  startClockSet[30]++;

  if(posX == undefined || posY == undefined){
    posX = width/2;
    posY = height/2;
  }
  if(mySize == undefined){
    mySize = 20;
  }
  if(myDelay == undefined){
    myDelay = 100;
  }
  if(endPoint == undefined){
    endPoint = 100;
  }

  if(startClockSet[30] > myDelay){
    if(typeSizeTimeCount < endPoint){
      typeSizeTimeCount+=4;
    }
  }
  fill(color5);
  textSize(mySize+typeSizeTimeCount);
  text(messageOne, posX, posY);
}

////////////////////////////

function typeContentStart(){
  push();
  fill(color3);
  textSize(50);
  text(errorMessage, width/2, height/2);
  pop();
}

function shapeContentStart(){
  push();
  fill(color3);
  textSize(50);
  text(errorMessage, width/2, height/2);
  pop();
}

function lineContentStart(){
  push();
  fill(color3);
  textSize(50);
  text(errorMessage, width/2, height/2);
  pop();
}

function typeContentMouse(){
  push();
  fill(color3);
  textSize(50);
  text(errorMessage, width/2, height/2);
  pop();
}

function shapeContentMouse(){
  push();
  fill(color3);
  textSize(50);
  text(errorMessage, width/2, height/2);
  pop();
}

function lineContentMouse(){
  push();
  fill(color3);
  textSize(50);
  text(errorMessage, width/2, height/2);
  pop();
}

function typeContentKey(){
  push();
  fill(color3);
  textSize(50);
  text(errorMessage, width/2, height/2);
  pop();
}

function shapeContentKey(){
  push();
  fill(color3);
  textSize(50);
  text(errorMessage, width/2, height/2);
  pop();
}

function lineContentKey(){
  push();
  fill(color3);
  textSize(50);
  text(errorMessage, width/2, height/2);
  pop();
}

function typeContentMouseClick(){
  push();
  fill(color3);
  textSize(50);
  text(errorMessage, width/2, height/2);
  pop();
}

function shapeContentMouseClick(){
  push();
  fill(color3);
  textSize(50);
  text(errorMessage, width/2, height/2);
  pop();
}

function lineContentMouseClick(){
  push();
  fill(color3);
  textSize(50);
  text(errorMessage, width/2, height/2);
  pop();
}

function typeContentRandom(){
  push();
  fill(color3);
  textSize(50);
  text(errorMessage, width/2, height/2);
  pop();
}

function shapeContentRandom(){
  push();
  fill(color3);
  textSize(50);
  text(errorMessage, width/2, height/2);
  pop();
}

function lineContentRandom(){
  push();
  fill(color3);
  textSize(50);
  text(errorMessage, width/2, height/2);
  pop();
}

function typeContentTime(){
  push();
  fill(color3);
  textSize(50);
  text(errorMessage, width/2, height/2);
  pop();
}

function shapeContentTime(){
  push();
  fill(color3);
  textSize(50);
  text(errorMessage, width/2, height/2);
  pop();
}

function lineContentTime(){
  push();
  fill(color3);
  textSize(50);
  text(errorMessage, width/2, height/2);
  pop();
}

function imageColorStart(){
  push();
  fill(color3);
  textSize(50);
  text(errorMessage, width/2, height/2);
  pop();
}

function imageColorMouse(){
  push();
  fill(color3);
  textSize(50);
  text(errorMessage, width/2, height/2);
  pop();
}

function imageColorKey(){
  push();
  fill(color3);
  textSize(50);
  text(errorMessage, width/2, height/2);
  pop();
}

function imageColorMouseClick(){
  push();
  fill(color3);
  textSize(50);
  text(errorMessage, width/2, height/2);
  pop();
}

function imageColorRandom(){
  push();
  fill(color3);
  textSize(50);
  text(errorMessage, width/2, height/2);
  pop();
}

function imageColorTime(){
  push();
  fill(color3);
  textSize(50);
  text(errorMessage, width/2, height/2);
  pop();
}

////////////////////////////

function changeBg(){
  myDiv = select('.divOne');
  push();
  for(let a=0; a<textColOne.length; a++){
    for(let b=0; b<textColTwo.length; b++){
      for(let c=0; c<textColThree.length; c++){
        if(sel1.value() == colOne[a+1] && sel2.value() == colTwo[b+1] && sel3.value() == colThree[c+1]){
          myDiv.hide();
          let tempTextOne = textColOne[a];
          let tempTextTwo = textColTwo[b];
          let tempTextThree = textColThree[c];
          window[tempTextOne+tempTextTwo+tempTextThree]();
        } else if(sel1.value() == "something" || sel2.value == "something" || sel3.value == "something"){
          introPage();
          myDiv.show();
        }
      }
    }
  }
  pop();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
