/*DLA or Diffusuon limited Aggregation is a growing model discribing the diffusion and aggregation 
of Zinc Ions in an electrolytic solution onto Electrode.
Diffusion is mean for the random position of the aggregation. this aggregation is limited on particle at the time 

The algorithms can be described as :
1. Start with a random point on the scene
2. Introduced new points on other random positions and randomly walk until they ar close enough to stick to a, existing point
NB : Point walks using a brownian random approach

Find more about Diffusion Limited Agregation here :
http://paulbourke.net/fractals/dla/
https://en.wikipedia.org/wiki/Diffusion-limited_aggregation
*/
var dla = []; //this variable is a arry of all the DLA points
var walkers = [];//Our walkers
var numberOfWalker;
var diameter; //Diameter of the walkers/points

function setup() {
	createCanvas(windowWidth, windowHeight);

	dla[0]  = createVector(width/2, height/2);
	/*
	here we introduce the notion of Vector with is a two component variable which allow us
	to save two dimensional coordinates x and y. This can use use like :
	var myVector = createVector(posX, posY);
	var x = myVector.x;
	var y = myVector.y;
	*/
	diameter = 30;
	numberOfWalker = 1000;
	for(var i=0; i<numberOfWalker; i++){
		walkers[i] = createVector(random(width), random(height));
	}
}

function draw() {
	background(25);
	noStroke();
	fill(255);
	text("Frame : "+ frameCount, 20, 20);
	text("FrameRate : "+ round(frameRate()), 20, 40);
	text("Number of Walker : "+ walkers.length, 20, 60);
	text("Number of DLA : "+ dla.length, 20, 80);
	noFill();

	/*check all point on the dla array and check the distance between them and the walkers
	if the distance is lower or equal than the diameter then the walker should be stuck and add to the dla Array
	Else the distance is bigger than the diameter the walker continues his random walking
	*/
	for(var j=walkers.length-1; j >= 0; j--){
		var vel = p5.Vector.random2D();
		walkers[j].add(vel);
		walkers[j].x = constrain(walkers[j].x, diameter/2, width-diameter);
		walkers[j].y = constrain(walkers[j].y, diameter/2, height-diameter);

		stroke(255, 0, 0);
		ellipse(walkers[j].x, walkers[j].y, diameter, diameter);
		
		for(var i=0; i< dla.length; i++){
			var position = dla[i];
			var distance = dist(walkers[j].x, walkers[j].y, position.x, position.y);
			if(distance < diameter){
				dla.push(walkers[j]);
				walkers.splice(j, 1);
				break;
				console.log("stuck");
			}
		}
	}
	
			



	//draw dla
	stroke(255, 255, 0);
	for(var i=0; i<dla.length; i++){
		var position = dla[i];
		ellipse(position.x, position.y, diameter, diameter);
	}
}