//DOM manipulation example using P5JS dom library
var sliderRotation;
var sliderSize;
var someText;
var textBox;
var incRotation;
var incSize;

var htmlElementH1;
var htmlElementButton;
var htmlElementP;

function setup(){
	noCanvas(); //here we don't want to to draw a canvas
	sliderRotation = createSlider(0, 360, 0);
	sliderRotation.input(rotateTitle);
	textBox = createInput('Put some text here');
	textBox.input(getInputText);
	sliderSize = createSlider(12, 60, 12);
	sliderSize.input(updateSize);
	incRotation = sliderRotation.value();
	incSize = sliderSize.value();
	someText = createP("Hello World");
	someText.style('background-color', 'orange');
	someText.style('font-size', 'orange');

	htmlElementH1 = select('#main-title');
	htmlElementH1.mouseOver(changeBackgroundOver);
	htmlElementH1.mouseOut(changeBackgroundOut);

	htmlElementP = selectAll('.paragraph-class');
	for (var i = 0; i < htmlElementP.length; i++){
		htmlElementP[i].mouseOver(selectIn);
		htmlElementP[i].mouseOut(selectOut);
	}
	htmlElementButton = select('.button-class');
	htmlElementButton.mousePressed(randomFontSize);
}

function rotateTitle(){
	incRotation = sliderRotation.value();
	//someText.style('transform', 'rotate('+incRotation+'deg)'); //more proper way to do the rotation
	someText.style('rotate', incRotation);
}

function getInputText(){
	someText.html(textBox.value());
}

function updateSize(){
	incSize = sliderSize.value();
	//someText.style('font-size', incSize+"pt");//more proper way to do the font-size
	someText.style('font-size', incSize);
}

function changeBackgroundOver(){
	htmlElementH1.style('background-color', 'orange');
}

function changeBackgroundOut(){
	htmlElementH1.style('background-color', 'yellow');
}

function randomFontSize(){
	var value = random(12, 24);
	for (var i = 0; i < htmlElementP.length; i++){
    htmlElementP[i].style('font-size', value);
  }
}

function selectIn(){
	this.style('padding', 10);
	this.style('background-color', 'grey');
	this.style('color', 'black');
}

function selectOut(){
	this.style('padding', 0);
	this.style('background-color', 'white');
	this.style('color', 'grey');
}