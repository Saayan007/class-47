var bg1, bg1image
var h1,h1image
var time=0;
var gamestate=1;
var level=1; 


function preload(){
    bg1image=loadImage("images/b-2.jpg")
    h1image=loadAnimation("images/sprite1.png","images/sprite01.png","images/sprite2.png", "images/sprite02.png", 
    "images/sprite3.png", "images/sprite03.png", "images/sprite4.png","images/sprite04.png")


}
function setup() {
      createCanvas(1000,600);
}
function draw() {
  background(0,0,0);  
  
  
    if(gamestate===1){
    time=time+5;
    }
    //if(time>15000){
   // gamestate=2;
    //}
    if(gamestate===1){
    if(time<1500){
    level1();
    }
    else if(time>1500&&time<3000){
    level2();
    }
    else if(time>3000&&time<4500){
      level3();
    }
    else if(time>4500&&time<6000){
        level4();
        }
      }
      drawSprites();
      fill("black");
      text("score"+time,500,200)

  }
      function level1(){
        text("level1",100,100)
        bg1=createSprite(300,400)
        bg1.addImage("bg1",bg1image)
        bg1.scale=1.7
    
        h1=createSprite(100,470)
        h1.addAnimation("h1",h1image)
        bg1.velocityX=15;
        if(bg1.x>600){
        bg1.x=500
      }
      }