var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  loadImage (path.png) 
  loadAnimation (jake1.png, jake2.png, jake3.png, jake4.PNG, jake5.png);
}

function setup(){
  
  createCanvas(400,400);
  createSprite (200,300);
  loadImage("path.png");
  background("path.png"), velocityY = 5
path.scale=1.2;

createSprite(12,13)
loadAnimation(jake1.png, jake2.png, jake3.png, jake4.PNG, jake5.png);
boy.scale=0.08;
  
createSprite(boundary)
leftBoundary=createSprite(0,0,100,800);
 visiblity = false

 createSprite(boundary)
rightBoundary=createSprite(410,0,100,800);
visiblity = false
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  mouseX = 4
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary, rightBoundary)
  
  Translate()
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
