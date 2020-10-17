var wall,thickness;
var bullet,speed,weight;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
 
  speed=random(55,90);
  weight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(50,200,20,20);
  bullet.shapeColor="white";
  
  wall=createSprite(1200,200,thickness,height/2);
  bullet.velocityX=speed;
}

function draw() {
  background("black");
  
  if (hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    
     if(damage>10){
       wall.shapeColor="green";
     }
     if(damage<10){
       wall.shapeColor="red";
     }
  }  
  drawSprites();
}
function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true;
}
return false;

}