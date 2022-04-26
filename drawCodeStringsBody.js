
function drawCodeStringsBody(stringSwitch){
  console.log(stringSwitch);
  push();
  textFont(apercu);
  textSize(gridShapeW*0.05);
  translate(gridGutter*2, gridShapeH*1.25);
  for(let s=0; s<codeStringFolderBody[stringSwitch].length; s++){
    text(codeStringFolderBody[stringSwitch][s], 0, s*((gridShapeW*0.07)));
  }
  pop();
}
