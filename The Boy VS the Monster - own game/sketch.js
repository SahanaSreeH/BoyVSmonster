var boy,boyImg,monster,monsterImg,ground,
    snake,snakeImg,tree,treeImg,backgroundImg,restart;
var score = 0; 
var PLAY = 1, END = 0;
var gameState = PLAY;  

function preload(){
backgroundImg = loadImage("images/background.jpg")
boyImg = loadImage("images/boy.png");
monster = loadImage("images/monster.png");
}

function setup(){
  canvas = createCanvas(1300,700);

  boy = createSprite(200,530,50,80);
  boy.addImage(boyImg);
  

  ground = createSprite(650, 585, 1300, 20);
  ground.visible = false;

  restart = createSprite(650,350,50,50);

  monstersGroup = new Group();
}

function draw(){
  background(backgroundImg);

  text("Score: "+ score, 1000, 50);

  if (gameState===PLAY){
    score = score + Math.round(getFrameRate()/60);
    ground.velocityX = -(6 + 3*score/100);
  

    if(keyDown("space") && boy.y >= 159) {
      boy.velocityY = -12;
    }
  
    boy.velocityY = boy.velocityY + 0.8;
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
    boy.collide(ground);

    if(monstersGroup.isTouching(boy)){
      gameState = END;
  }

  restart.visible = false;

  spawnMonsters();
}

  else if (gameState === END) {
  
  ground.velocityX = 0;
  boy.velocityY = 0;
  monstersGroup.setVelocityXEach(0);
 
  monstersGroup.setLifetimeEach(-1);

  restart.visible = true;
  
  if(mousePressedOver(restart)) {
    reset();
  }
  }
  

  drawSprites();
  
}

function spawnMonsters(){
  if(frameCount % 60 === 0 ){
  monster = createSprite(1300,530,50,50);
  monster.addImage("monster",monsterImg);
  monster.scale = +0.2;

  var x = Math.round(random(500,1300));
  var y = Math.round(random(400,550));

  monster.velocityX = -(6 + 3*score/100);
  
monster.lifetime = 300;  
monstersGroup.add(monster);
  }
}

function reset(){
  gameState = PLAY;
  
  monstersGroup.destroyEach();

  score = 0;
  
}