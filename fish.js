class Fish {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };
	
    this.image1 = loadImage("fish.png");
	this.image2 = loadImage("fish2.png");
	this.image3 = loadImage("fish3.png");
	this.image4 = loadImage("fish4.png");
	this.image5 = loadImage("fish5.png");
	this.image6 = loadImage("fish6.png");
	var rand = Math.round(random(1,6))
	if(rand === 1){
		this.image = this.image1;
	} else if(rand === 2){
		this.image = this.image2;
	} else if(rand === 3){
		this.image = this.image3;
	} else if(rand === 4){
		this.image = this.image4;
	} else if(rand === 5){
		this.image = this.image5;
	} else if(rand === 6){
		this.image = this.image6;
	}
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
	image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}