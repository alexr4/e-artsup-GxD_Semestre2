var buttonBackground;
var colorBackground;
var titre;
var nom;
var diametre;
var diametreSlider;
var inputName;
var elementH1;

function setup(){
	createCanvas(windowWidth, 250);
	buttonBackground = createButton("Change Background");
	buttonBackground.mousePressed(changeBackground);
	colorBackground = round(random(255));
	titre = "Hello : ";
	nom = "John Doe";
	diametre = 10;
	diametreSlider = createSlider(10, 200, 127);
	inputName = createInput("Indiquez votre nom");
	inputName.changed(changeName);
	elementH1 = select('h1');
	//elementH1.html("tartampion");
}

function draw(){
	diametre = diametreSlider.value();

	background(colorBackground);

	fill(255, 0, 0);
	noStroke();
	ellipse(width/2, height/2, diametre, diametre);
}

function mousePressed(){
}

function changeBackground(){
	colorBackground = round(random(255));
}

function changeName(){
	elementH1.html("Hello : "+inputName.value());
	elementH1.style('color', 'red');
}