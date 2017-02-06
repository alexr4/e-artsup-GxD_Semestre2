var monTitre;
var canvas;
function setup(){
	canvas = createCanvas(400, 400);
	canvas.position(0,0);
	//noCanvas();
	monTitre = createP("ceci un est paragraphe p5js");
	createA("http://www.facebook.com", "Facebook", "_Blank");
	createElement("h1", "Un titre de niveau 1");
}

function draw(){
	//background(127);
	ellipse(width/2, height/2, 100, 100);
	monTitre.position(mouseX, mouseY);
}

function mousePressed(){
	monTitre.html("BLAAAAAAAAAAAAAAAA "+random(1000));
}