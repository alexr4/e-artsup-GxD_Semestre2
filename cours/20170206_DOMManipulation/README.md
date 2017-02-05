# Using P5Js for creative coding

**This repository collects all the courses done at e-art sup (Paris) about Creative Coding during the second semester (2017). You can find all th sketch developed during this courses.**

## What is DOM :
DOM stands for Document Object Model. It's a cross-platform and language independant application programming interface that treats an HTML or XML as a tree structure where each node is an object representing a part of the document. [Learn more on Wikipedia](https://en.wikipedia.org/wiki/Document_Object_Model).

DOM Hierarchy can be represented as : 
* DOCUMENT
	* Element : ```<html>```
		* Element : ```<head>```
			* Element : ```<meta>```
			* Element : ```<title>```
			* Element : ```<script>```
		* Element : ```<body>```
			* Element ```<h1>```
				* Text : "Title"
			* Element :```<a>```, attribute : ```href=""```
				*. Text : "Link"


## Manipulating DOM with P5Js
### Add the library p5.dom.js to your HTML Document
We can manipulate any DOM element using P5Js library p5.dom.js
p5.dom.js is avaliable in the addons foled of P5Js and we can load it by adding it into our ```<header>``` as follow :
```
<script src="yourPathToP5Folder/addons/p5.dom.js"></script>
```

### Create HTML element using P5.DOM.JS
You can create various HTML element using p5JS.Dom method such as :
* Paragraph using ```createP("You text");```
* Span using ```createSpan("You text");```
* Link using ```createA(Link, TextLink, Target);```
* Image using ```createImage(image link);```
* Button using ```createButton('Some Text');```
* Slider using ```createSlider(min, max, value, step);```
* Checkbox using ```createCheckbox(label, value);```
* Div using ```createDiv(content);```
* Any element using ```createElement(tag, content);``` for exemple ```createElement('h1', 'A Title');```

You can either create a direct element using  ```createP("You text");``` which will create a simple paragraphe or create a new variable in order to access the element you have created using  ```var paragraph = createP("You text");```

### Manipulate an element 
You can manipulate a HTML element in order to create interactive experience by using one of the following methods :
* ```element.html(content)``` changes the content of the element
* ```element.position(x, y)``` changes the absolute position of the element
* ```element.style("Style Name", value)``` changes the CSS style of the element
* ```element.show()``` Shows the element on the page
* ```element.hide()``` Hides the element on the page
* ```element.attribute("attibuts", value)``` change the attribute of the element
* ```element.size(w, h)``` changes the size of the element
* ```element.remove()``` removes the element
* ...

Where ```element``` is your variable's name

### Create Callback
Callback methods are usefull if you want to add behaviors to HTML element or interact with the elements on your canvas. Callback allow you to trigger action (methods) when you interact with element by attaching the action (method) to an interaction on the elements.

The fisrt step is to create your behavior such as :
```function doSomething(){
	//do something here withe element or drawing
}```

the second step is to attach the behavior to the callback. You can attach your behavior to differents callback such as :
* ```element.mousePressed(behavior)``` trigger behavior (method) on click on the element
* ```element.mouseOver(behavior)``` trigger behavior (method) on mouse over on the element
* ```element.mouseOut(behavior)``` trigger behavior (method) on mouse out on the element
* ```element.mouseWheel(behavior)``` trigger behavior (method) on mouse scroll on the element
* ```element.mouseReleased(behavior)``` trigger behavior (method) on mouse clicked release on the element
* ```element.mouseClicked(behavior)``` trigger behavior (method) on mouse clicked release on the element
* ```element.mouseMoved(behavior)``` trigger behavior (method) when the mouse moves on the element
* ```element.changed(behavior)``` trigger behavior (method) when the element has changed
* ```element.input(behavior)``` trigger behavior (method) on the action on the element
* ...

example :
```
var element;
function setup(){
	var element = createButton('some button title');
	element.mousePressed(doSomething);
}

function doSomething(){
	//do something here withe element or drawing
}
```

### CSS manipulation
You can access to an HTML element by its tag, id or its class name in order to manipulate it or change its css bu using the method ```select(tag)```. This method can take tag, id or class name as parameters.

example :
```
var paragraph = select(p); //by using the tag 'p' we can get the first paragraph element in the page
var elementById = select('#id'); //by using the '#id' we can get the first element with the '#id' name on the page
var elementByClass = select('.class'); //by using the '.class' we can get the first element width '.class' name on the page
```

Then you can modify all CSS Style by using the method ```element.style('css style', value)```.
You can find all CSS Style on various website such as [Mozilla Developper](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference); 

example :
```
var paragraph = select(p); //by using the tag 'p' we can get the first paragraph element in the page
paragraph.style('color', '#000');
```

You can acces to all HTML elements by their tag, id or class name using the method ```selectAll(tag)```. This method creates an array with all the HTML element which has the same tag, id or class

example :
```
var paragraph = selectAll(p); //by using the tag 'p' we can get all paragraphs element in the page
var elementById = selectAll('#id'); //by using the '#id' we can get all elements with the '#id' name on the page
var elementByClass = selectAll('.class'); //by using the '.class' we can get all elements width '.class' name on the page
```

When using an array element you can change its style via a loop operation.
example :
```
var paragraphs = selectAll(p);
for(var i=0; i<paragraphs.length; i++){
	paragraph[i].style('color', '#000');
}

```

If you want to trigger an action using a callback method on a array of HTML element you need to acces the element using ```this``` in order to target the element.

example
```
var elements;
function setup(){
	var elements = selectAll(p);
	for(var i=0; i<paragraphs.length; i++){
		paragraph[i].mouseOver(doSomething);
	}
}

function doSomething(){
	this.style('font-size', '27pts');
}
```

### Childs and Parents
You can parents an element in order to move it on the page. this method can be usefull if you want to create list places inside a specific HTML element. You only can parents an element by using ```#id```. You can do it with two differents methods :
* ```element.parent(#parent);``` the element will be parent to the HTML element with the id ```#Parent```
* ```element.child(#parent);``` the element will have the HTML element with the id ```#Parent``` as a child

### Add and remove class
You can add and remove class to an element in order to change its classification or css style by using the methods
* ```element.class('className');``` add the element to the class names ```className```
* ```element.removeClass('className');``` remove the element from the class names ```className```

Learn more on [P5.dom reference](http://p5js.org/reference/#/libraries/p5.dom) and on [GitHub](https://github.com/processing/p5.js/wiki/Beyond-the-canvas)
Learn more on [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

