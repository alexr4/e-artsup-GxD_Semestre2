var stuck;
var diameter;
var walker;
var points = [];

function setup(){
	createCanvas(400, 400);
	stuck = false;
	points[0] = createVector(width/2, height/2);
	diameter = 20;
	walker = createVector(random(width), random(height));
}

function draw(){
	background(20);

	if(stuck == false){ //if(!stuck)	
		var vel =  createVector(random(-1, 1), random(-1, 1));
		vel.mult(100);
		walker.add(vel);
		walker.x = constrain(walker.x, 0, width);
		walker.y = constrain(walker.y, 0, height);
		
		for(var i = 0; i< points.length; i++){
			var position = points[i];
			var distance = dist(walker.x, walker.y, position.x, position.y);
			if(distance < diameter){
				stuck = true;
				console.log("It's Stuck");
				break;
			}
		}
	}else{
		points.push(walker);
		walker = createVector(random(width), random(height));
		stuck = false;
	}
	noStroke();
	fill(255, 0, 0);
	ellipse(walker.x, walker.y, diameter, diameter);

	fill(255, 255, 0);
	for(var i=0; i<points.length; i++){
		var position = points[i];
		ellipse(position.x, position.y, diameter, diameter);
	}
}










