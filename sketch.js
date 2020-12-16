var movingRect, fixedRect;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(800,200,50,50);
  movingRect.shapeColor = "green";
 movingRect.velocityX = -2;
 fixedRect.velocityX = 2;
}

function draw() {
  background(255,255,255);  

  //movingRect.x = mouseX;
  //movingRect.y = mouseY

if (fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 && 
  movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
  fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2 &&
  movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2) {
   fixedRect.shapeColor = "red";
   movingRect.shapeColor = "red";
} else {
  fixedRect.shapeColor = "green";
   movingRect.shapeColor = "green";
}

if (fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
  movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2) {
  movingRect.velocityX = movingRect.velocityX * (-1);
  fixedRect.velocityX = fixedRect.velocityX * (-1); 
  }




  drawSprites();
}