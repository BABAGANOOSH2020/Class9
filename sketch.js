var box;
var box1;
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200);
  box1 = createSprite(300,300);
}

function draw() 
{
  background(30);
  if (keyDown("left")){
    box.x = box.x - 5
  }
  if (keyDown("right")){
    box.x = box.x + 5
  }

  drawSprites()
}




