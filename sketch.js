var bow , arrow, green_balloon,greenGroup, red_balloon ,redGroup,pink_balloon,pinkGroup,blue_balloon,blueGroup, bkground;
var bowImage, arrowImage,arrowGroup, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;


function preload(){
  
  //loading the images for sprites
  
  backgroundImage = loadImage("background0.png");
  
  bowImage = loadImage("bow0.png");
  
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  arrowImage = loadImage("arrow0.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //creating the background
  bkground=createSprite(0,0,width,height);  
  bkground.addImage(backgroundImage);
  bkground.scale = 3.5
  
  //adding image of bow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  score=0;
    
  arrowGroup=new Group();
  pinkGroup=new Group();
  redGroup=new Group();
  blueGroup=new Group();
  greenGroup=new Group();
  
  
}

function draw() {
  
  // moving the background
  bkground.velocityX = -3 
  if (bkground.x < 0){
   bkground.x = bkground.width/2;
  }
  
  //moving the bow with the move of mouse
  bow.y = World.mouseY
  
  //moving the arrow on press of space key and adding its image
  if (keyDown("space")) {
    var shoot_arrow = createArrow();
    shoot_arrow.addImage(arrowImage);
    shoot_arrow.y = bow.y;
  }
  
  var select_balloon=Math.round(random(1,4));
  console.log(select_balloon)
  
  if(World.frameCount % 80==0){
     if(select_balloon==1){
       redBalloon();
     }else if(select_balloon==2){
       blueBalloon();
     }else if(select_balloon==4){
       greenBalloon();
     }else if(select_balloon==3){
       pinkBalloon();
     }
 }
  
   if(arrowGroup. isTouching (pinkGroup)){
      pinkGroup.destroyEach();
      arrowGroup.destroyEach();
      score=score+2;
    }
  if(arrowGroup. isTouching (blueGroup)){
      blueGroup.destroyEach();
      arrowGroup.destroyEach();
      score=score+1;
    }
  if(arrowGroup. isTouching (redGroup)){
      redGroup.destroyEach();
      arrowGroup.destroyEach();
      score=score+3;
    }
  if(arrowGroup. isTouching (greenGroup)){
      greenGroup.destroyEach();
      arrowGroup.destroyEach();
      score=score+1;
    }

  
  drawSprites();
  
  text("Score: "+ score, 500,50);
}

//giving speed and scale to arrow
function createArrow() {
  arrow= createSprite(360, 100, 5, 10);
  arrow.velocityX = -6;
  arrow.lifetime=100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
  return arrow;
}

function redBalloon(){
  var red=createSprite(0,Math.round(random(20,370)),10,10);
  red.addImage(red_balloonImage);
  red.velocityX=3;
  red.lifetime=150;
  red.scale=0.1;
  redGroup.add(red);
  return red;
}

function greenBalloon(){
  var green =createSprite(0,Math.round(random(20,370)),10,10);
green.addImage(green_balloonImage);
  green.velocityX=3;
  green.lifetime=150;
  green.scale=0.1;
  greenGroup.add(green);
  return green;
}

function pinkBalloon(){
  var pink=createSprite(0,Math.round(random(20,370)),10,10);
 pink.addImage(pink_balloonImage);
  pink.velocityX=3;
  pink.lifetime=150;
  pink.scale=1;
  pinkGroup.add(pink);
  return pink;
}

function blueBalloon(){
  var blue=createSprite(0,Math.round(random(20,370)),10,10);
  blue.addImage(blue_balloonImage);
  blue.velocityX=3;
  blue.lifetime=150;
  blue.scale=0.1;
  blueGroup.add(blue);
  return blue;
}
