//DOM manipulation example using P5JS dom library

var spanElement =[];
var bool;
var zoff;

function setup(){
	noCanvas();
	splitParargraphIntLetters();
	moveElement();
	var title = select('h1');
	title.mouseClicked(explode);
}

function draw(){
	if(bool){
		moveElement();
	}
}

function splitParargraphIntLetters(){
	//grab the paragrah from the source HTML element by its #id
	var p = select('#mainParagraph');
	var words = p.html();
	var wordsArray = words.split('');
	for(var i=0; i<wordsArray.length; i+=10){	
		var letter = wordsArray[i];
		var position = createVector(random(windowWidth), random(windowHeight));
		var span = createP(letter);
		span.hide();
		spanElement.push(span);
	}
}

function explode(){
	bool = !bool;
	var p = select('#mainParagraph');
	if(bool){
		for(var i=0; i<spanElement.length; i++){
			spanElement[i].show();
		}
		p.hide();
	}else{
		for(var i=0; i<spanElement.length; i++){
			spanElement[i].hide();
			spanElement[i].position(random(windowWidth), random(windowHeight));
		}
		p.show();
	}
	
}

function moveElement(){
	var xoff = 0;
	var yoff = 0;
	for(var i=0; i<spanElement.length; i++){
		spanElement[i].position(noise(frameCount * 0.005, xoff, zoff) * windowWidth, noise(frameCount * 0.005, yoff, zoff) * windowHeight);
		xoff += 0.001 * i;
		yoff += 0.002 * i;
	}
	zoff = 0.01;
}
