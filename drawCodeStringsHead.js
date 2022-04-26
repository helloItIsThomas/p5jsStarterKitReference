
function drawCodeStringsHead(stringSwitch){
  console.log(stringSwitch);
  push();
  textFont(apercu);
  // textSize(gridShapeW*0.05);
  for(let s=0; s<codeStringFolderHead[stringSwitch].length; s++){
    text(codeStringFolderHead[stringSwitch][s], gridGutter*2, gridShapeH*0.55);
  }
  pop();
}
