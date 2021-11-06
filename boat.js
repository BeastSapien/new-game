class Boat {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };
	
    this.image1 = loadImage("boat.png");
	this.image2 = loadImage("boat2.png");
	this.image = this.image1;
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    if(keyIsDown(RIGHT_ARROW)){
		this.image = this.image1
	} else if(keyIsDown(LEFT_ARROW)){
		this.image = this.image2;
	} 
	image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}