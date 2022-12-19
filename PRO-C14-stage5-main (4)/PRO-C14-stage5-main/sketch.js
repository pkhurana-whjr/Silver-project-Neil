var backgroundImg;
var screwImg;
var roverForwardImg, roverLeftImg, roverRightImg;
var fuelImg;
var rover;
var fuel, screws;

function preload()
{
  backgroundImg = loadImage("mars-background2.webp");
  screwImg = loadImage("screw.png");
  roverForwardImg = loadAnimation("roverForward.png");
  roverLeftImg = loadAnimation("roverLeft.png");
  roverRightImg = loadAnimation("roverRight.png");
  fuelImg = loadImage("fuel_canisters.png");

}

function setup()
{
  createCanvas(1600,800);
  rover = createSprite(800,400,20,20);
  rover.addAnimation("forward", roverForwardImg);
  rover.addAnimation("right", roverRightImg);
  rover.addAnimation("left", roverLeftImg);
  rover.scale = 0.5;
}

function draw()
{
  background("grey");
  image(backgroundImg,0,-height*3,1600*2,800*4)
  drawSprites();
  camera.position.x = rover.position.x;
  camera.position.y = rover.position.y;

  if(keyDown(DOWN_ARROW))
  {
    rover.changeAnimation("forward");
    rover.position.y += 5;
  }

  if(keyDown(UP_ARROW))
  {
    rover.changeAnimation("forward");
    rover.position.y -= 5;
  }

  if(keyDown(RIGHT_ARROW))
  {
    rover.changeAnimation("right");
    rover.position.x += 5;
  }

  if(keyDown(LEFT_ARROW))
  {
    rover.changeAnimation("left");
    rover.position.x -= 5;
  }

  fuelSpawn();
  screwSpawn();
}

function fuelSpawn()
{
  if(frameCount%180 == 0)
  {
    fuel = createSprite(Math.round(random(50,3150)), Math.round(random(-height*3+50,750)), 20, 20);
    fuel.addImage(fuelImg);
    fuel.scale = 0.3;
    setTimeout(() => {
      fuel.destroy();
    }, 1000);
  }
  
}

function screwSpawn()
{
  if(frameCount%180 == 0)
  {
    screw = createSprite(Math.round(random(50,3150)), Math.round(random(-height*3+50,750)), 20, 20);
    screw.addImage(screwImg);
    screw.scale = 0.2;
  }
  
}