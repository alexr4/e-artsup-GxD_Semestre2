//DOM manipulation example using P5JS dom library
var canvas;
var colorBackground;
var button;
var slider;
var wordInput;
var p;
var inputValue;

function setup(){
	p = createElement('h2','I will get the words you typed');
	p.mouseOver(overP);
	p.mouseOut(outP)
	canvas = createCanvas(windowWidth, 400);
	colorBackground = color(127);
	button = createButton("change color of the canvas");
	button.mousePressed(changeColor); //attach the changeColor method to the button via a callBack method
	slider = createSlider(4, height-100, height/2);
	wordInput = createInput('Type something here');
	//wordInput.changed(inputChanged); //Called only when input has changed and pressed enter
	wordInput.input(inputChanged);
	inputValue = wordInput.value();
}

function draw(){
	background(colorBackground);
	fill(255, 0, 0);
	noStroke();
	ellipse(width/2, height/2, slider.value(), slider.value());
	fill(255);
	textSize(20);
	textAlign(CENTER);
	text(inputValue, width/2, height/2 + slider.value()/2 + 30);
}

function changeColor(){
	colorBackground = color(random(255));
}

function overP(){
	p.html('What are you doign here... Go to the interactive parts please');
}

function outP(){
	p.html('Great... now please change the type input so I can display your word');
}

function inputChanged(){
	inputValue = wordInput.value();
	p.html("The words you typed : "+inputValue);
}
