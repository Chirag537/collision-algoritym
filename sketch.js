function setup() {
  createCanvas(800,400);
 tree=createSprite(200,300,40,40);
 tree.shapeColor="green"

 car=createSprite(400, 200, 50, 50);
 car.shapeColor="red"
}

function draw() {
  background(255,255,255);  
  drawSprites();
  car.x=mouseX;
  car.y=mouseY;
 if(car.x-tree.x<tree.width/2+car.width/2
  &&tree.x-car.x<tree.width/2+car.width/2
  &&car.y-tree.y<tree.height/2+car.height/2
  &&tree.y-car.y<tree.height/2+car.height/2){
  car.shapeColor="yellow"
  tree.shapeColor="blue"


  }
  else{
  car.shapeColor="red"
  tree.shapeColor="green"


  }

}