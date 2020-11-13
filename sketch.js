var diwar,motapa;
var speed,weight,goli;


function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  motapa = random(25,85)
  weight = random(400,1500);
  diwar = createSprite(1200,200,motapa,height/2);
  diwar.shapeColor = color(230,230,230);
  goli = createSprite(50,200,50,5);
  goli.velocityX = speed;
  goli.shapeColor = "silver"
}

function draw() {
  background(0);
  if(hasCollided(goli,diwar)){ 

  goli.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/(motapa * motapa * motapa);

if (damage>10){
  diwar.shapeColor = color(255,0,0);
}
if (damage<10){
  diwar.shapeColor = color(0,255,0);
}
  }


  drawSprites();
}
function hasCollided(lgoli,ldiwar){
  goliRightEdge = lgoli.x + lgoli.width
  diwarLeftEdge = ldiwar.x 

  if(goliRightEdge>=diwarLeftEdge){
    return true
  }
  return false
}