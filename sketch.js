var zues,clouds,lightning;
var poseidon,water,shark;

var bolt,bolt_img;
var trident,trident_img;




var gameState = "begin";
function preload(){

  bolt_img = loadImage("Bolt.png");
  trident_img = loadImage("Trident.jpg");
 
}

function setup() {

  createCanvas(1200,400);

  bolt = createSprite(104,height/2,10,10);
bolt.addImage("Bolt",bolt_img);

trident = createSprite(408,height/2,100,100);
//trident.addImage("Trident",trident_img);
//trident.scale = 0.3;

zues = createSprite(100,380,10,50); 
zues.visible = false;

ground =createSprite(width/2,380,width,20);
ground.visible=false;

 // start = new Begin();



  
}

function draw() {

  background(0);  
  
  
  stroke("red");
  strokeWeight(1.8);

  textSize(15);

  text("Which Quest Does thine want to take",480,10);

  text("Zues and The Lightning Thief",15,390);
  text("Poseidon and The Ocean's Trident",357,390);

  if(mousePressedOver(trident)){

    // background("green");
     gameState = "trident";
     bolt.destroy();
     trident.destroy();
    }
 if(mousePressedOver(bolt)){

 // background("green");
  gameState = "bolt";
  bolt.destroy();
  trident.destroy();
 }
  
//var zuesGame = new Zues();
 // zuesGame.clear();
  //zuesGame.create();
 // zuesGame.lightning();


if(gameState ==="bolt"|| gameState ==="trident"){
background("green");
zues.visible=true;
ground.visible=true;
zues.collide(ground);
if(keyDown("space")){
  zues.velocityY=-10;
}
zues.velocityY=zues.velocityY+1;
ground.velocityX=-3;
if(ground.x<0){
  ground.x=ground.width/2;
}
createLightning();
}

 // start.show();
  
  

  drawSprites();

}

function createLightning(){
  if(frameCount%60===0){
    var light =createSprite(width/2+40,40,10,70);
    light.shapeColor="yellow";
    light.x=random(100,width-40);
    light.velocityY=10;
    
  }
}