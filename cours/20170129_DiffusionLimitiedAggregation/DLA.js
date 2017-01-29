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
var diameter; //Diameter of the walkers/points
var stuck; //our stuck variable
var walker;//Our walker

function setup() {
	createCanvas(300, 300);

	dla[0]  = createVector(width/2, height/2);
	/*
	here we introduce the notion of Vector with is a two component variable which allow us
	to save two dimensional coordinates x and y. This can use use like :
	var myVector = createVector(posX, posY);
	var x = myVector.x;
	var y = myVector.y;
	*/
	diameter = 10;
	walker = createVector(random(width), random(height));
}

function draw() {
	background(25);
	noStroke();
	fill(255);
	text("Frame : "+ frameCount, 20, 20);
	noFill();

	/*check all point on the dla array and check the distance between them and the walker
	if the distance is lower or equal than the diameter then the walker should be stuck and add to the dla Array
	Else the distance is bigger than the diameter the walker continues his random walking
	*/
	for(var j=0; j<2000; j++){
		if(!stuck){
			for(var i=0; i< dla.length; i++){
				var position = dla[i];
				var distance = dist(walker.x, walker.y, position.x, position.y);
				if(distance < diameter){
					stuck = true;
					console.log("stuck");
					break;
				}
			}

			var vel = p5.Vector.random2D();
			walker.add(vel);
			walker.x = constrain(walker.x, diameter/2, width-diameter);
			walker.y = constrain(walker.y, diameter/2, height-diameter)
		}else {
			//add walker
			dla.push(walker);
			//define new walker
			console.log("define new walker");
			walker = createVector(random(width), random(height));
			stuck = false;
		}
		//draw walker
		stroke(255, 0, 0);
		ellipse(walker.x, walker.y, diameter, diameter);
	}
	


	//draw dla
	stroke(255, 255, 0);
	for(var i=0; i<dla.length; i++){
		var position = dla[i];
		ellipse(position.x, position.y, diameter, diameter);
	}
}