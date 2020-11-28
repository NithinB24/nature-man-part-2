var normalnman,nman, nmanleft, nmanright, bg1, ground,nmanjump,nmanjumpL,nmanjumpR;

function preload() {

  nmanleft = loadAnimation("left1.png", "left2.png");
  nmanright = loadAnimation("right1.png", "right2.png");
  bg1 = loadImage("forest.png");
  normalnman = loadAnimation("nman.png");
  nmanjump = loadAnimation("nmanJU.png");
  nmanjumpL = loadAnimation("nmanJL.png");  
  nmanjumpR = loadAnimation("nmanJR.png"); 
}

function setup() {
  createCanvas(1200, 800);
  nman = createSprite(600, 700, 50, 50);
  nman.addAnimation("normalnman",normalnman)
  nman.addAnimation("right", nmanright);
  nman.addAnimation("left", nmanleft);
  nman.addAnimation("nmanjump",nmanjump);
  nman.addAnimation("nmanJL",nmanjumpL);
  nman.scale = 0.2
  ground = createSprite(600, 750, 1200, 20);
  ground.visible = false;

}

function draw() {
  background(bg1);

  if (keyWentDown("left")) {
    nman.changeAnimation("left", nmanleft);
    //nman.x = nman.x - 10;
    nman.velocityX = -10;
  }

  if (keyWentDown("right")){
    nman.changeAnimation("right", nmanright)
    //nman.x = nman.x + 10;
    nman.velocityX = 10;
  }
  if (keyWentUp("left")||keyWentUp("right")||keyWentUp("up")){
     nman.changeAnimation("normalnman",normalnman)    
     nman.velocityX = 0;
  }
  
  if (keyWentDown("up")){
  nman.changeAnimation("nmanjump",nmanjump);
  nman.velocityY = -8;
  }

  nman.velocityY = nman.velocityY + 0.2;

  if (keyWentDown("up")&&keyWentDown("left")){
  nman.changeAnimation("nmanJL",nmanjumpL)
  nman.velocityX = -10;
  nman.velocityy = -20;
  }

  nman.collide(ground);
  drawSprites();
}