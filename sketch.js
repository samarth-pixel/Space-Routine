var astronaut, astronautImage;
var eat, eatImage;
var sleep, sleepImage;
var brush, brushImage;
var gym, gymImage;
var drink, drinkImage;
var move, moveImage;
var bg, bgImage;

function preload() {
  bgImage = loadImage("iss.png");
  sleepImage = loadImage("sleep.png");
  gymImage = loadAnimation("gym1.png", "gym2.png", "gym11.png", "gym12.png");
  eatImage = loadAnimation("eat1.png", "eat2.png");
  drinkImage = loadAnimation("drink1.png", "drink2.png");
  moveImage = loadAnimation("move.png", "move1.png");
  brushImage = loadImage("brush.png");
}

function setup() {
  createCanvas(600,600);
  
  bg = createSprite(300,300);
  bg.addImage(bgImage)
  bg.scale = 0.2
  
  astronaut = createSprite(300,230);
  astronaut.addImage(sleepImage);
  astronaut.scale = 0.1;

  edges = createEdgeSprites();
  
}

function draw() {
  background(0);

  astronaut.bounceOff(edges);

  if (keyDown("UP_ARROW")) {
    astronaut.addImage("brushing",brushImage);
    astronaut.changeImage("brushing");
    
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("DOWN_ARROW")) {
    astronaut.addAnimation("gymming",gymImage);
    astronaut.changeAnimation("gymming");
    
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("LEFT_ARROW")) {
    astronaut.addAnimation("eating", eatImage);
    astronaut.changeImage("eating");
    
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("RIGHT_ARROW")) {
    astronaut.addAnimation("drinking", drinkImage);
    astronaut.changeAnimation("drinking");
    
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  drawSprites();

  textSize(30);
  fill("white");
  text("Instructions: ", 20,50);
  textSize(20);
  fill("white");
  text("Up Arrow = Brushing", 20, 70);
  text("Down Arrow = Gymming", 20, 90);
  text("Left Arrow = Eating", 20, 110);
  text("Right Arrow = Drinking", 20, 130);
  

}



