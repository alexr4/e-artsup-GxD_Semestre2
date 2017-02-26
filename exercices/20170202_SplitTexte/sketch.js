var monParagraphe;
var monTableauDeCaracteres = [];

function setup(){
	noCanvas();
	monParagraphe = select('p');
	var words = monParagraphe.html();
	var wordsArray = words.split('');
	for(var i = 0; i<wordsArray.length; i++){
		var letter = wordsArray[i];
		var pos = createVector(random(windowWidth), random(windowHeight));
		var span = createSpan(letter);
		span.position(pos.x, pos.y);
		monTableauDeCaracteres.push(span);
	}
	monParagraphe.hide();
}

function draw(){

}
