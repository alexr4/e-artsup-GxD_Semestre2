//DOM manipulation example using P5JS dom library
var canvas;
var h1;
function setup(){
	canvas = createCanvas(windowWidth, 100);
	canvas.position(0, 0);
	h1 = createElement('h1', 'The following paragraphes will be created by P5JS');
}

function draw(){
	//background(127);
	clear(); //setthe background to transparent
	h1.position(mouseX, mouseY);
	fill(255, 0, 0);
	ellipse(width/2, height/2, 100, 100);
}

function mousePressed(){
	h1.html("Now the P5JS paragraph has a random numer for you : "+random(1000));
}

