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
var vertA = [];
var vertB = [];
var gray = [];
var diameter; //Diameter of the walkers/points
var maxDiameter;
var debug = false;
var center;
var dialRes;
var maxDial;
var minDial;
var thickDial;
var isAuto;

function setup() {
	createCanvas(windowWidth, windowHeight);
	initDLA();
	dialRes = round(360 / 1.1);
	maxDial = maxDiameter - maxDiameter/10;
	minDial = maxDiameter - maxDiameter/8;
	thickDial = maxDial - minDial;
	background(25);
}

function draw() {
	if(debug){
		background(25);
		noStroke();
		fill(255);
		text("Frame : "+ frameCount, 20, 20);
		text("FrameRate : "+ round(frameRate()), 20, 40);
		text("Number of Walker : "+ walkers.length, 20, 60);
		text("Number of DLA : "+ dla.length, 20, 80);
		noFill();
	}
	else{
		rectMode(CORNER);
		fill(25, 127);
		noStroke();
		rect(0, 0, width, height);
	}

	push();
	translate(width /2, height/2);
	rotate(radians(frameCount) * 0.15);
	/*check all point on the dla array and check the distance between them and the walkers
	if the distance is lower or equal than the diameter then the walker should be stuck and add to the dla Array
	Else the distance is bigger than the diameter the walker continues his random walking
	*/
	if(walkers.length > 0){
		for(var j=walkers.length-1; j >= 0; j--){
			var vel = p5.Vector.random2D();	
			var centerDist = dist(center.x, center.y, walkers[j].x, walkers[j].y);
			//checkEdge
			if(centerDist > maxDiameter/2){
				
			}else{
				walkers[j].add(vel);
			}

			if(debug){
				stroke(255, 0, 0);
				ellipse(walkers[j].x, walkers[j].y, diameter, diameter);
			}
			
			for(var i=0; i< dla.length; i++){
				var position = dla[i];
				var distance = dist(walkers[j].x, walkers[j].y, position.x, position.y);
				if(distance < diameter){
					var cdist = dist(center.x, center.y, walkers[j].x, walkers[j].y);
					var grayValue = 1 - norm(cdist, 0, maxDiameter/2);
					gray.push(grayValue);
					vertA.push(position);
					vertB.push(walkers[j]);
					dla.push(walkers[j]);
					walkers.splice(j, 1);
					break;
					console.log("stuck");
				}
			}
		}
	}
	if(debug){
		stroke(0, 255, 0);
		ellipse(center.x, center.y, maxDiameter, maxDiameter);
		for(var i=0; i< dla.length; i++){
			stroke(255, 255, 0);
			ellipse(dla[i].x, dla[i].y, diameter, diameter);
		}
	}
	
	//draw dla
	stroke(255, 255, 0);
	for(var i=0; i<vertA.length; i++){
		var vA = vertA[i];
		var vB = vertB[i];
		var grayValue = gray[i];
		stroke(255 * grayValue);
		beginShape(LINES);
		vertex(vA.x, vA.y);
		vertex(vB.x, vB.y);
		endShape();
	}

	//draw Dial
	stroke(50);
	noFill();
	ellipse(center.x, center.y, maxDial, maxDial);
	ellipse(center.x, center.y, minDial, minDial);
	for(var i=0; i<dialRes; i++){
		var angle = norm(i, 0, dialRes) * TWO_PI;
		var xA =  cos(angle) * (minDial / 2);
		var yA =  sin(angle) * (minDial / 2);
		var xB =  cos(angle) * (maxDial / 2);
		var yB =  sin(angle) * (maxDial / 2);
		line(xA, yA, xB, yB);
	}
	pop();

	if(isAuto){
		if(walkers.length == 0){
			clearAll();
			initDLA();
		}
	}
}

function keyPressed(){
	if(key == 'd' || key == 'D'){
		debug = !debug;
	}
	if(key == 'i' || key == 'I'){
		initDLA();
	}
	if(key == 'c' || key == 'C'){
		clearAll();
		initDLA();
	}
	if(key == 'a' || key == 'A'){
		isAuto = !isAuto;
	}
}

function initDLA(){
	center  = createVector(0, 0)
	dla.push(center);
	/*
	here we introduce the notion of Vector with is a two component variable which allow us
	to save two dimensional coordinates x and y. This can use use like :
	var myVector = createVector(posX, posY);
	var x = myVector.x;
	var y = myVector.y;
	*/
	diameter = 40;
	numberOfWalker = 500;
	maxDiameter = width;
	for(var i=0; i<numberOfWalker; i++){
		var angle = norm(i, 0, numberOfWalker) * TWO_PI;
		var rad = random(diameter, maxDiameter/2 - maxDiameter/10);
		var x = dla[0].x + cos(angle) * rad;
		var y = dla[0].y + sin(angle) * rad;
		walkers[i] = createVector(x, y);
	}

	for(var i = 0 ; i < 1; i++){
		vertA[i] = [];
		vertB[i] = [];
	} 
}

function clearAll(){
	dla = []; //this variable is a arry of all the DLA points
	walkers = [];//Our walkers
	numberOfWalker;
	vertA = [];
	vertB = [];
	gray = [];
}