var gameState=0;
var score=0;
var door;
var livingroom;
var hauntedroom;
var hollywoodset;
var crimescene;
var tickmark;
var key;
var border;
var wheel,chair,chefshat,doll,duck,fish,pistol,wheel,woodenbox,butterfly,broccoli,play,nextbutton,nextimage;
var flag1=false;
var flag2=false;
var flag3=false;
var flag4=false;
var flag5=false;
var flag6=false;
var flag7=false;
var flag8=false;

function preload(){
door= loadImage('Images/door_temp.jfif');
livingroom= loadImage('Images/livingroomfinal.png');
hauntedroom=loadImage('Images/haunted room game.jpg');
hollywoodset=loadImage('Images/hollywood set game.jpg');
crimescene=loadImage('Images/crime.png');
tickmark=loadImage('Images/tickmark.png');
key=loadImage('Images/key game.jfif');
border=loadImage('Images/border.png');
borderwheel=loadImage('Images/wheel.png');
broccoli=loadImage('Images/Broccoli.png');
butterfly=loadImage('Images/butterfly.png');
chair=loadImage('Images/Chair.png');
chefshat=loadImage('Images/Chefs hat.png');
doll=loadImage('Images/doll.png');
duck=loadImage('Images/Duck.png');
fish=loadImage('Images/fish.png');
pistol=loadImage('Images/pistole.png');
woodenbox=loadImage('Images/Wooden box.png');
nextimage=loadImage('Images/nextimage.jfif');
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  
      border1=createSprite(402,650,500,45);
      border1.addImage("border",border);
      border1.visible=false;

      border2=createSprite(930,650,500,45);
      border2.addImage("borderwheel",borderwheel);
      border2.visible=false;

      border3=createSprite(900,650,500,45);
      border3.addImage("fish",fish);
      border3.visible=false;

      border4=createSprite(650,650,500,45);
      border4.addImage("doll",doll);
      border4.visible=false;

      border5=createSprite(400,650,500,45);
      border5.addImage("butterfly",butterfly);
      border5.visible=false;

      border6=createSprite(150,650,500,45);
      border6.addImage("pistole",pistol);
      border6.visible=false;

      border7=createSprite(380,600,500,45);
      border7.addImage("Chefs hat",chefshat);
      border7.visible=false;

      border8=createSprite(130,600,500,45);
      border8.addImage("Chair",chair);
      border8.visible=false;

      border9=createSprite(250,600,500,45);
      border9.addImage("Duck",duck);
      border9.visible=false;

      border10=createSprite(624,600,500,45);
      border10.addImage("Broccoli",broccoli);
      border10.visible=false;

      nextbutton=createSprite(1162,600,20,20);
      nextbutton.addImage("nextimage",nextimage)
      nextbutton.visible=false;

      //creating sprite and setting visability to false(GAME STATE 1)
    icecream=createSprite(725,464,40,90);
    icecream.visible=false;
    wheel=createSprite(652,120,65,90);
    wheel.visible=false;
    

    //creating sprite and setting visability to false(GAME STATE 2)
    fishclick=createSprite(860,192,40,140);
    fishclick.visible=false;
    dollclick=createSprite(200,286,80,120);
    dollclick.visible=true;
    butterflyclick=createSprite(600,38,80,90);
    butterflyclick.visible=true;
    pistolclick=createSprite(650,281,135,40);
    pistolclick.visible=false;
    }

function draw() {
  background(225); 
  if(gameState===0){
 background(door);
 textSize(165);
 fill(0,0,0)
 textFont('chiller');
 text("MYSTERY GAME",displayWidth/2-390,displayHeight/2-10);
 textSize(20);
 textFont('inconsolata');
 text("press ENTER to start",displayWidth/2-50,displayHeight-20);
 textSize(35)
 fill('white')
 text("DEVELOPED BY: YUVIKA SACHDEVA", displayWidth/2-280,displayHeight-290)
  
  if (keyDown("enter")){
     gameState=1
    }
  }

  if(gameState===1){
    Level1();
     } 
  
  if(gameState===2){
    Level2();

  } 

  if(gameState===3){
    background(hollywoodset);
    
    //setting visability to the selected sprite
    border7.visible=true;
    border8.visible=true;
    //border9.visible=true;
    border10.visible=true;

    text(""+mouseX+","+mouseY,mouseX,mouseY);

    //creating sprite and setting visability to false
    fishclick=createSprite(874,192,40,140);
    fishclick.visible=false;
    dollclick=createSprite(252,286,80,120);
    dollclick.visible=false;
    butterflyclick=createSprite(690,38,80,90);
    butterflyclick.visible=false;
    pistolclick=createSprite(690,281,135,40);
    pistolclick.visible=false;

    //changing the image to tickmark if mouse pressed on iceceam or wheel
    
    if(mousePressedOver(fishclick)){
      border3.addImage("fish",tickmark)
      //text("YOU FOUND IT!!",displayWidth/2-50,displayHeight-20)
    }

    if(mousePressedOver(dollclick)){
      border4.addImage("doll",tickmark)
      //text("WELL DONE!",displayWidth/2-50,displayHeight-20)
    }

    if(mousePressedOver(butterflyclick)){
      border5.addImage("butterfly",tickmark)
    }

    if(mousePressedOver(pistolclick)){
      border6.addImage("pistole",tickmark)
    }
    
    
  } 
  if(gameState===4){
    background(crimescene);
  } 

  if(gameState===5){
    
  } 
drawSprites();
}

function Level1(){
  background(livingroom);  
    
   
    //setting visability to the selected sprite
    border1.visible=true;
    border2.visible=true;

    text(""+mouseX+","+mouseY,mouseX,mouseY);

   

    //changing the image to tickmark if mouse pressed on iceceam or wheel
    
     if(mousePressedOver(icecream)){
      //icecream.destroy();
      border1.addImage("border",tickmark);
      flag1=true;
      
    }

    if(mousePressedOver(wheel)){
      //wheel.destroy();
      border2.addImage("borderwheel",tickmark);
      flag2=true;
      
      }

      if(flag1===true&& flag2===true){
        textSize(80);
        
        fill(0);
        text("WELL DONE!!",displayWidth/2-200,displayHeight/2);
        nextbutton.visible=true;
        if(mousePressedOver(nextbutton)){
          flag3=true; 
          nextbutton.visible=false
          gameState=2;
        }
      }
     
      if(flag3===true){
        flag1=false;
          flag2=false;
         //text("NEXT",1162,654)
         background(0);
         border1.visible=false;
         border2.visible=false;
         
      }


}

function Level2(){
  background(hauntedroom);

    //setting visability to the selected sprite
    border3.visible=true;
    border4.visible=true;
    border5.visible=true;
    border6.visible=true;

    text(""+mouseX+","+mouseY,mouseX,mouseY);

   

    //changing the image to tickmark if mouse pressed on iceceam or wheel
    
    if(mousePressedOver(fishclick)){
      border3.addImage("fish",tickmark)
      //text("YOU FOUND IT!!",displayWidth/2-50,displayHeight-20)
      flag4=true;
    }

    if(mousePressedOver(dollclick)){
      border4.addImage("doll",tickmark)
      //text("WELL DONE!",displayWidth/2-50,displayHeight-20)
      flag5=true;
    }

    if(mousePressedOver(butterflyclick)){
      border5.addImage("butterfly",tickmark)
      flag6=true;
    }

    if(mousePressedOver(pistolclick)){
      border6.addImage("pistole",tickmark)
      flag7=true;
    }

    if(flag4===true&& flag5===true && flag6===true && flag7===true){
      textSize(80);
      fill(221,160,221);
      text("AMAZING !!",displayWidth/2-200,displayHeight/2);
      nextbutton.visible=true;
      if(mousePressedOver(nextbutton)){
        flag3=true; 
        nextbutton.visible=false
        gameState=3;
      }
    }
}