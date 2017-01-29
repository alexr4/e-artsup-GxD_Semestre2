var diameter; //diameter of the ellipse
var ampY; //max amplitude

function setup() {
	createCanvas(800, 800);
	//Use windowsWidth and windowsHeight variable to get the innerwindows size for running fullscreen program.
	
	diameter = 100; //diameter of the ellipse
	ampY = height/4; //max amplitude
}

function draw() {
	background(127);

	var fr = round(frameRate()); //Get the frame rate as the round number (integer)
	var fc = frameCount; //Get the total frame count 
	var radFrameCount = radians(fc); //Convert frame count into radians
	var incY = sin(radFrameCount) * ampY; //Compute a increment for Y based on sinus of radians framecount multiply by a max height. This computation allow us to create an easing effect

	ellipseMode(CENTER); //Draw ellipse from center
	fill(20); //Fill the drawing with a grey value Red : 20, Green : 20, Blue : 20;
	noStroke(); //Do not draw stroke
	ellipse(width/2, height/2 + incY, diameter, diameter); //draw ellipse athe center of the scene

	text("frameRate : "+fr, 20, 20);//draw actual frame rate
	text("FrameCount : "+fc, 20, 40);//draw actual frame count
}