var PLAY 
var END 
var gameState
var ground 
var monkey 
var invisibleGround 
var bananagroup
var obstaclesgroup
var count 
function preload(){
  monkeyimage=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  
}
function setup() {
  createCanvas(400, 400);
PLAY =1;
 END =0;
gameState = PLAY;

 ground = createSprite(200, 200,10,10);
//ground.addAnimation("background");
 monkey = createSprite(200, 350,1,1);
monkey.addAnimation("monkey",monkeyimage);

monkey.scale = 0.2;
monkey.x = 50;
ground.velocityX=-1;
ground.x = ground.width /2;
invisibleGround = createSprite(200,385,400,5);
invisibleGround.visible = false;
 bananagroup = createGroup();
 obstaclesgroup = createGroup();
 count = 0;
textSize(18);
textFont("Georgia");
textStyle(BOLD);
createEdgeSprites();
}

function draw() {
  monkey.collide(invisibleGround);
  background("red");
  drawSprites();
   text("Score: "+ count, 250, 100);
  console.log(gameState);
   if(gameState === PLAY){
    //move the ground
    ground.velocityX = -(6 + 3*count/100);
    //scoring
    count=count+1;
    
    if (count>0 && count%100 === 0){
      
    }
    if (ground.x<0) {
   ground.x=ground.width/2;
  }
  if(keyDown("space") && monkey.y >= 300){
      monkey.velocityY = -12 ;
      playSound("jump.mp3");
    }
    monkey.velocityY = monkey.velocityY + 0.8;
    
      
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
              if(obstaclesgroup.isTouching(monkey)){
     // playSound("jump.mp3");
      gameState = END;
     // playSound("die.mp3");
    }
  }
  
  else if(gameState === END) {
    
    
    //set velcity of each game object to 0
    ground.velocityX = 0;
    monkey.velocityY = 0;
    obstaclesgroup.setVelocityXEach(0);
    bananagroup.setVelocityXEach(0);
  
  obstaclesgroup.setLifetimeEach(-1);
    bananagroup.setLifetimeEach(-1);
   if(mousePressedOver(restart)) {
    reset();
  }
  } 
}
    