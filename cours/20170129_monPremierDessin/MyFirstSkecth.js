var diameter;
var ampY;

function setup() {
	createCanvas(800, 800);
	//use windowsWidth and windowsHeight variable to get the innerwindows size for running fullscreen program.
	
	diameter = 100;
	ampY = height/4;
}

function draw() {
	background(127);

	var fr = round(frameRate());
	var fc = frameCount;
	var radFrameCount = radians(fc);
	var incY = sin(radFrameCount) * ampY;

	ellipseMode(CENTER);
	fill(20);
	noStroke();
	ellipse(width/2, height/2 + incY, diameter, diameter);

	text("frameRate : "+fr, 20, 20);
	text("FrameCount : "+fc, 20, 40);
}