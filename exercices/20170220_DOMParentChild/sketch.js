var monParagraphe;
var maBoolean;

function setup(){
	noCanvas();
	monParagraphe = createP("mon petit paragraphe en js");
	maBoolean = false;
}

function draw(){

}

function mousePressed(){
	maBoolean = !maBoolean;
	console.log(maBoolean);
	if(maBoolean == true){
		//monParagraphe.addClass('title');
		monParagraphe.show();
	}else{
		//monParagraphe.removeClass('title');
		monParagraphe.hide();
	}
}
