var img;
var density;

function preload(){
	img = loadImage("starryNight.jpg");
}

function setup(){
	createCanvas(windowWidth, windowHeight);
	background(20);
	//image(img, 0, 0);
	img.loadPixels();
	density = pixelDensity();
}

function draw(){
	var randX = round(random(img.width));
	var randY = round(random(img.height));


	//var color = img.get(randX, randY) //simplest way to get the color of the pixel

	//array of pixel is packed as  [r, g, b, a, r, g, b , a...]
	var index =  (randY * img.width + randX) * 4;

	var red = img.pixels[index];
	var green = img.pixels[index + 1];
	var blue = img.pixels[index + 2];
	var alpha = img.pixels[index + 3];

	//random size
	var randomSize = random(2, 20);

	fill(red, green, blue, alpha);
	noStroke();
	ellipse(randX, randY, randomSize, randomSize);
}