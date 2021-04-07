var cat,catSleeping,catSitting,catWalking;
var rat,ratCheese,ratTeasing,ratGlass;
var garden,gardenImg;

function preload() {

catSleeping = loadAnimation("images/cat1.png");
catWalking= loadAnimation("images/cat2.png","images/cat3.png");
catSitting= loadAnimation("images/cat4.png");

ratCheese = loadAnimation("images/mouse1.png");
ratTeasing = loadAnimation("images/mouse2.png","images/mouse3.png");
ratGlass = loadAnimation("images/mouse4.png");

gardenImg = loadImage("images/garden.png");

}
function setup(){
  createCanvas(950,800);

  garden = createSprite(470,400,1000,800)
  garden.addImage(gardenImg)
  garden.scale=1.15

  cat = createSprite(800,600,20,20);
  cat.addAnimation("sleeping",catSleeping);
  cat.addAnimation("walking",catWalking);
  cat.addAnimation("sitting",catSitting);
  cat.scale=0.17

  rat = createSprite(200,600,200,200)
  rat.addAnimation("standing",ratCheese)
  rat.addAnimation("teasing",ratTeasing)
  rat.addAnimation("holding",ratGlass)
  rat.scale=0.17
}
function draw() {

  background("yellow");
  
  if(keyCode===LEFT_ARROW){
    cat.velocityX=-3

    cat.addAnimation("walking",catWalking)
    cat.changeAnimation("walking")
    rat.addAnimation("teasing",ratTeasing) 
    rat.changeAnimation("teasing")
  
  }

rat.setCollider("circle",60,90,250)

keyPressed()
drawSprites();
}
function keyPressed(){
  if(cat.x - rat.x < cat.width/2 + rat.width/2
    && rat.x - cat.x < cat.width/2 + rat.width/2)
    {
   cat.changeAnimation("sitting",catSitting)
   rat.changeAnimation("holding",ratGlass)
    }
     

}