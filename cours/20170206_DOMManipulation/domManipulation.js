//DOM manipulation example using P5JS dom library

function setup(){
	createCanvas(400, 400);
	increment = 1;
	createElement('h1', 'The following paragraphes will be created by P5JS');
	createP("This paragraph number "+increment+" has been created by P5JS.");
	createA('http://arivaux.com', 'textLink', '_Blank');
	increment ++;
}

function draw(){
	background(127);
	fill(255);
	noStroke();
	ellipse(width/2, height/2, 50, 50);
}

function mousePressed(){
	createP("This paragraph number "+increment+" has been created by P5JS.");
	increment ++;
}