var tom,jerry;
var mouseImg,mouseImg2,mouseImg3;
var catImg,catImg2,catImg3;
var gardenImg1;
var garden;
function preload() {
    //load the images here
    gardenImg1=loadImage("images/garden.png");
    mouseImg=loadAnimation("images/mouse4.png");
    catImg=loadAnimation("images/cat4.png");
    catImg2=loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg2=loadAnimation("images/mouse3.png","images/mouse3.png");
    mouseImg3=loadAnimation("images/mouse1.png");
    catImg3=loadAnimation("images/cat1.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    var garden=createSprite(100,100,100000,5000);
    garden.addImage("garden",gardenImg1);
    tom=createSprite(500,400,20,20);
    tom.addAnimation("cat",catImg);
    tom.scale=0.1;
    jerry=createSprite(100,400,20,20);
    jerry.addAnimation("jerry",mouseImg);
    jerry.scale=0.1;
    garden.scale = 1;
 
   
   

}

function draw() {

    background("white");
    
    //Write condition here to evalute if tom and jerry collide
     console.log(jerry.x);
     console.log(tom.x);
     if(jerry.x ===255 ){
         jerry.addAnimation("jerry1",mouseImg3);
        jerry.changeAnimation("jerry1");
        jerry.velocityX=0;
       
    }
    if(tom.x=== 345){
        tom.addAnimation("cat1",catImg3);
        tom.changeAnimation("cat1");
        tom.velocityX=0;
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === RIGHT_ARROW){
        jerry.addAnimation("mouse",mouseImg2);
        jerry.changeAnimation("mouse");
        jerry.frameDelay=25;
        jerry.velocityX=1;
    }
    if(keyCode === LEFT_ARROW){
        tom.addAnimation("tomMoving",catImg2);
        tom.changeAnimation("tomMoving");
        tom.velocityX=-1;
    }


    
}

