var car1, car2,car1image,car2image;
var bg1,bg1image,bg2,bg2image,bg3,bg3image;
var h1,h1image;
var level=1;
var gameState=1;
var time=0;
var edges;
var invisibleGround
var car1group
var gameState=1
var grass,grassimage
var coconut,coconutimage;
var score=0


function preload(){
  bg1image=loadImage("images/bg.jpg");
  h1image=loadAnimation("images/s1.png","images/s2.png","images/s3.png","images/s4.png",
  "images/s5.png","images/s6.png","images/s7.png","images/s8.png");
  car1image=loadImage("images/c1.png")
  bg2image=loadImage("images/village.jpg");
  grassimage=loadImage("images/grass.png")
  bg3image=loadImage("images/bg3.jpg")
  coconutimage=loadImage("images/coconut.png")
}


function setup(){
  createCanvas(800,600);
  bg1 = createSprite(300,250,800,600);
  bg1.addImage("bg",bg1image);
  bg1.scale=1.5;
  
 
 
  edges= createEdgeSprites();

 invisibleGround=createSprite(80,500,800,20)
   
  car1group=new Group();
  grassgroup=new Group();
  coconutgroup=new Group();

  bg2=createSprite(0,300,800,600)
  bg2.addImage("bg2",bg2image);
  bg2.scale=1.8;

  bg3=createSprite(0,250,700,600)
  bg3.addImage("bg3",bg3image);
  bg3.scale=0.6;

  h1=createSprite(80,250,50,50);
  h1.addAnimation("h1",h1image);
  h1.scale=0.8
}

function draw(){
  background(0)
  drawSprites();
   time+=1;
 
 

  // to jump h1 
   if(keyDown("space")){
     h1.velocityY=-15;

   }

   // gravity to h1 since velocity in -ve direction to pull back the h1 lets take positive velocity;
   h1.velocityY=h1.velocityY+0.5;
 
  
 
  h1.collide(invisibleGround);
  invisibleGround.visible=false
  drawSprites();
  text("Time :"+time, 400,100);

  if(h1.isTouching(car1group)){
score=score+(5)
  }
  if(gameState===1){
    if (time < 1500) {
      
      level1();
    }
     if(time > 1500 && time < 3000) {
      level2();
  
    }
    else if(time > 3000 && time < 4500) {
      level3();
      
    }
    else if(time > 4500 ) {
      level4();
    }
  }
  else if(gameState===2){
text("GAME OVER",400,400)
  }
  text("Score :"+score,200,150)

}



function level1(){
  fill("red");
  textSize(30);
  text("Level1 ", 200,200);
  // framecount 60,120,180,240,300,360........
  // adding depth concepts depth means layer who has to come 1st on the screen;
bg2.visible=false
  if(frameCount%200===0){
    car1= createSprite(600,450,50,50)
    car1.addImage("c1", car1image)
    car1.scale=0.6;
    car1.velocityX=-5;
   console.log(car1.depth);
   car1.lifetime=100
   car1group.add(car1)
    h1.depth=h1.depth+3;


  }
  bg1.velocityX=-8;
  if(bg1.x<200){
    bg1.x=350;
  }
  bg3.visible=false


   //console.log(h1.depth);
  
 //h1.velocityX=5;
 //if(h1.x>700){
   //h1.x=80;
 //}
 


}
function level2(){
  fill("red");
  textSize(30);
  text("Level2", 200,200);
bg1.visible=false
bg2.visible=true
bg3.visible=false

bg2.velocityX=-8;
if(bg2.x<200){
  bg2.x=450;
}
if(frameCount%200===0){
grass=createSprite(600,450,50,50)
grass.addImage("grass",grassimage)
grass.velocityX=-5;
grass.scale=0.2
grass.lifetime=100
grassgroup.add(grass)
}
}

function level3(){
  fill("red");
  textSize(30);
  text("Level3", 200,200);
bg1.visble=false
bg2.visble=false
bg3.visible=true

bg3.velocityX=-8
if(bg3.x<100){
bg3.x=500

}
if(frameCount%200===0){
  coconut=createSprite(600,250,50,50)
  coconut.addImage("coconut",coconutimage)
  coconut.velocityX=-5;
  coconut.scale=0.3
  coconut.lifetime=100
  coconutgroup.add(coconut)
  }

}
