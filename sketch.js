var kid, coin, bag;
var kidImage, coinImage, bagImage;
var bgImage, bg;
var velocityX = 1;
var velocityY = 2;
var angle = 0;

function preload() {
  bgImage = loadImage("images/background.png");
  kidImage = loadImage("images/kid.png");
  coinImage = loadImage("images/coin.png");
  
}

function setup() {
  createCanvas(600, 300, WEBGL);

}

function draw() {
  background(0);

  bg = createSprite(0, 0, 600, 300);
  bg.addImage(bgImage);
  bg.scale = 1.3;

  kid = createSprite(-70, 40, 20, 20);
  kid.addImage(kidImage);
  kid.scale = 1;

  coin = createSprite(200, 500, 10, 10);
  coin.addImage(coinImage);
  coin.scale = 1;

  push();

  angle = angle + 10;

  translate(10, 10);

  rotateY(-angle);

  imageMode(CENTER);

  image(coinImage, 0, 0, 50, 50);
  
  pop();

  drawSprites();

}