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
You can create HTML element using various p5JS method such as :
* Paragraph using ```createP("You text");```
* Span using ```createSpan("You text");```
* Link using ```createA(Link, TextLink, Target);```
* Image using ```createImage(image link);```
* Button using ```createButton('Some Text');```
* Slider using ```createSlider(min, max, value, step);```
* Checkbox using ```createCheckbox(label, value);```
* Div using ```createDiv(content);```
* Any element using ```createElement(tag, content);``` for exemple ```createElement('h1', 'A Title');```

### Manipulate an element 
You can manipulate a HTML element by using one of the following methods :
* ```element.html(content)``` changes the content of the element
* ```element.position(x, y)``` changes the absolute position of the element
* ```element.style("Style Name", value)``` changes the CSS style of the element
* ```element.show()``` Shows the element on the page
* ```element.hide()``` Hides the element on the page
* ```element.attribute("attibuts", value)``` change the attribute of the element
* ```element.size(w, h)``` changes the size of the element
* ```element.remove()``` removes the element

### Create Callback

mousePressed
mouseOut
mouseOver
changed
input

### CSS manipulation


Learn more on [P5.dom reference](http://p5js.org/reference/#/libraries/p5.dom) and on [GitHub](https://github.com/processing/p5.js/wiki/Beyond-the-canvas)

Learn more on [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

