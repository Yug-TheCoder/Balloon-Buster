//all varibles
var bow,scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score=0;

var redB,blueB,greenB,pinB,arrowG;

var background;

//All preloaded images
function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}


//creating sprites and group
function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  //Assingning all groups
  redB= new Group();
  pinkB= new Group();
  blueB= new Group();
  greenB= new Group();
  arrowG= new Group();
  
  //the score
  score = 0    
}

function draw() {
  background(0);
  // moving ground
    scene.velocityX = -3 

  // moving scene  
  if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY

  //spawwnin arrow
  if (keyDown("space")){
  
  spawnArrow();  
  } 

  //arrow colliding with all balloons and increasing score
  if (arrowG.isTouching(redB)){
    
    arrowG.destroyEach();
    redB.destroyEach();
    score=score+1;
  }
  
  if (arrowG.isTouching(greenB)){
    
    arrowG.destroyEach();
    greenB.destroyEach();
    score=score+1;
  }
  
  if (arrowG.isTouching(blueB)){
    
    arrowG.destroyEach();
    blueB.destroyEach();
    score=score+1;
  }
  
  if (arrowG.isTouching(pinkB)){
    
    arrowG.destroyEach();
    pinkB.destroyEach();
    score=score+1;
  }
  
  
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }  
  
  //drwingSprites
  drawSprites();
  //displaying Score
  text("Score: "+ score, 300,50);
}

//Function for spawning red balloons
function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redB.add(red);

}

//Function for spawning blue balloons
function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueB.add(blue);

}

//Function for spawning green balloons
function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenB.add(green);

}

//Function for spawning pink balloons
function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1
  pinkB.add(pink);

}

//Function for spawning Arrows
function spawnArrow(){
var arrow=createSprite(360,100,60,10);
 arrow.addImage(arrowImage);
 arrow.velocityX=-4;
 arrow.lifetime= 150 ;   
 arrow.y=bow.y;
 arrow.scale=0.1;
 arrowG.add(arrow);

}