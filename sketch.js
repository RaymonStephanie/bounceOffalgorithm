var sr, mr;

var o1, o2, o3, o4;

function setup() {
  createCanvas(800,400);
  sr = createSprite(200,200,50,80);
    sr.shapeColor = "blue";
  mr = createSprite(400,200,80,30);
    mr.shapeColor = "blue";
    mr.velocityY = -2;
    mr.velocityX = 2;
    mr.velocityY = 2;
    mr.velocityX = -2;
  o1 = createSprite(100,100,50,50);
    o1.shapeColor = "blue";
  o2 = createSprite(200,100,50,50);
    o2.shapeColor = "blue";
  o3 = createSprite(300,100,50,50);
    o3.shapeColor = "blue";
    o3.velocityY = -2;
    o3.velocityX = 2;
    o3.velocityY = 2;
    o3.velocityX = -2;
  o4 = createSprite(400,100,50,50);
    o4.shapeColor = "blue";
  }

function draw() {
  background(0);
  mr.x = World.mouseX;
  mr.y = World.mouseY;

 //if(mr.x >= 300) {
    //mr.velocityY = -8;
  //}

  //if(mr.x-sr.x < sr.width/2 + mr.width/2) {
    //mr.velocityY = 8;
  //}

  if (isTouching(mr,o2))
  {
    mr.shapeColor = "red";
    o2.shapeColor = "purple";
  }

  else {
    mr.shapeColor = "blue";
    o2.shapeColor = "blue";
  }

  bounceOff(mr,o3);

  drawSprites();
}

