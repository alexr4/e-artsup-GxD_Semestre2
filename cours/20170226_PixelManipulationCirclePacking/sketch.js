var img;
var circleList = [];

function preload(){
	img = loadImage("starryNight.jpg");
}

function setup(){
	createCanvas(windowWidth, windowHeight);
	img.loadPixels();
	density = pixelDensity();
	circle = new Circle(200, 200);
}

function draw(){
	background(20);

	if(circleList.length < 800){
		var newCircle = getNewCircle(img.width, img.height);
		if(newCircle != null){
			circleList.push(newCircle);
		}
	}else{
		//console.log("Packing finished");
		if(circleList[0].checkUngrow()){
			circleList.shift();
		}else{
			circleList[0].unGrow();
		}
	}


	for(var i=0; i<circleList.length; i++){
		var circle = circleList[i];
		if(circle.growing){
			if(circle.checkEdges()){
				circle.growing = false;
			}else{
				for(var j=0; j<circleList.length; j++){
					var other = circleList[j];
					if(circle != other){
						var distance = dist(circle.x, circle.y, other.x, other.y);
						if(distance < circle.radius + other.radius){
							circle.growing = false;
							break;
						}
					}
				}
			}
		}
		circle.grow();
		circle.display();
	}

	fill(255);
	text("FPS :"+ frameRate(), 20, 20);
}

function getNewCircle(w_, h_){
	var x = round(random(w_));
	var y = round(random(h_));

	var index =  (x * w_ + y) * 4;

	var red = img.pixels[index];
	var green = img.pixels[index + 1];
	var blue = img.pixels[index + 2];
	var alpha = img.pixels[index + 3];

	var validCircle = true;
	for(var i=0; i<circleList.length; i++){
		var other = circleList[i];
		var distance = dist(x, y, circle.x, circle.y);
		if(distance < circle.radius){
			validCircle = false;
			break;
		}
	}

	if(validCircle){
		return new Circle(x, y, red, green, blue, alpha);
	}else{
		return null;
	}
}

var Circle = function(x_, y_, r_, g_, b_, a_){
	this.x = x_;
	this.y = y_;
	this.growing = true;
	this.radius = 0.0;
	this.r = r_;
	this.g = g_;
	this.b = b_;
	this.a = a_;

	this.grow = function(){
		if(this.growing){
			this.radius += 1;
		}
	}

	this.unGrow = function(){
		this.radius -= 1;
	}

	this.checkUngrow = function(){
		return this.radius < 0;
	}

	this.checkEdges = function(){
		return this.x + this.radius > windowWidth || this.x - this.radius < 0 || this.y + this.radius > windowHeight || this.y - this.radius < 0;
	}

	this.display = function(){
		fill(this.r, this.g, this.b, this.a);
		noStroke();
		ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
	}
}