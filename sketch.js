var fixed_rect, moving_rect;
function setup() {
  createCanvas(800,400);
  fixed_rect = createSprite(400, 200, 100, 50);
  moving_rect = createSprite(100, 100, 50, 100);
  fixed_rect.shapeColor = "#ddfca7";
  moving_rect.shapeColor = "#69ffb6";
  fixed_rect.debug = true;
  moving_rect.debug = true;
}

function draw() {
  background("#9379e0"); 
  moving_rect.x = World.mouseX;
  moving_rect.y = World.mouseY; 
  if (fixed_rect.x - moving_rect.x <= fixed_rect.width/2 + moving_rect.width/2 &&
     moving_rect.x - fixed_rect.x <= fixed_rect.width/2 + moving_rect.width/2 &&
     fixed_rect.y - moving_rect.y<= fixed_rect.height/2 + moving_rect.height/2 &&
     moving_rect.y - fixed_rect.y <= fixed_rect.height/2 + moving_rect.height/2){
    fixed_rect.shapeColor = "#69ffb6";
    moving_rect.shapeColor = "#ddfca7";
  }
  else{
    fixed_rect.shapeColor = "#ddfca7";
  moving_rect.shapeColor = "#69ffb6";
  }
  drawSprites();
}