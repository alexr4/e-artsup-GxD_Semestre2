//DOM manipulation example using P5JS dom library

function setup(){
	noCanvas();
	var p = select('.pclass1');
	p.mouseOver(over);
	p.mouseOut(out);
}

function over()
{
	this.removeClass('pclass1');
	this.class('pclass0');
}

function out(){
	this.removeClass('pclass0');
	this.class('pclass1');
}