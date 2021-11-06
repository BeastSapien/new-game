const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var fishes = [];
var garbage ,boat ,fish ,octo ,shrimp ,turtle;
function preload(){
  boatImage=loadImage("boat.png");
  boatImage2=loadImage("boat2.png");
  bgImg=loadImage('bg.png');
  fishImage1=loadImage("fish.png");
  fishImage2=loadImage("fish2.png");
  fishImage3=loadImage("fish3.png");
  fishImage4=loadImage("fish4.png");
  fishImage5=loadImage("fish5.png");
  fishImage7=loadImage("fish1.png");
  fishImage6=loadImage("fish6.png");
  fishImage8=loadImage("fish2a.png");
  fishImage9=loadImage("fish3a.png");
  fishImage10=loadImage("fish4a.png");
  fishImage11=loadImage("fish5a.png");
  fishImage12=loadImage("fish6a.png");
}
function setup() {
  createCanvas(1400,700);
  
  engine = Engine.create();
  world = engine.world;
  
  var render = Matter.Render.create({ element:document.body, 
  engine:engine, options: { width:1400, height:700, wireframes:true } }); 
  Matter.Render.run(render);
  
  boat = new Boat(400,200 ,300 ,200);
  fish2 = new Fish2(30,random(300,550),50,40);
  ground = new Ground(0, height - 1, width * 2, 10);
}

function draw() {
  background(bgImg); 
  Engine.update(engine);
  ground.display();
  boat.display();
    showfish()

  Matter.Body.setVelocity(fish.body, { x: -0.9, y: 0 });
  Matter.Body.setVelocity(fish2.body, { x: 0.9, y: 0 });
  fish.display();
  fish2.display();
  
  drawSprites();
  text(mouseX +' , '+mouseY,mouseX,mouseY);
}

function keyPressed(){
	if (keyCode === LEFT_ARROW){  
		translation={x:-20,y:0} 
		Matter.Body.translate(boat.body, translation)
	} else if (keyCode === RIGHT_ARROW){
		translation={x:20,y:0} 
		Matter.Body.translate(boat.body, translation) 
	}
}

function showfish() {
	
  if (fishes.length > 0) {
    if (
      fishes.length < 4 &&
      fishes[fishes.length - 1].body.position.x < width - 300
    ) {
      var positions = [-40, -60, -70, -20];
      var position = random(positions);
      var fish = new Fish(
        width-30,
		random(300,550),
		50,
		40
      );
      fishes.push(fish);
    }

    for (var i = 0; i < fishes.length; i++) {
		fishes[i].setVelocityX=-0.9;
		fishes[i].setVelocityY=-0;
      Matter.Body.setVelocity(fishes[i].body, {
        x: -0.9,
        y: 0
      });

      fishes[i].display();
      var collision = Matter.SAT.collides(tower.body, fishes[i].body);
      if (collision.collided && !fish[i].isBroken) {
      }
    }
  } else {
    var fish = new Fish(width-30,random(300,550),50,40);
    fishes.push(fish);
  }
}


