//DOM manipulation example using P5JS dom library

function setup(){
	var canvas = createCanvas(windowWidth, 200);
	canvas.parent('#PandCanvas'); //Get and element and allign a parent to it
	var p = select('#child');
	p.child('#PandCanvas'); //invert of Parent : get the element and add parameter as a child
}

function draw(){
	background(127);
	ellipse(width/2, height/2, 100, 100);
}