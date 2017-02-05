# Using P5Js for creative coding

**This repository collects all the courses done at e-art sup (Paris) about Creative Coding during the second semester (2017). You can find all th sketch developed during this courses.**

## What is DOM :
DOM stands for Document Object Model. It's a cross-platform and language independant application programming interface that treats an HTML or XML as a tree structure where each node is an object representing a part of the document. [Learn more on Wikipedia](https://en.wikipedia.org/wiki/Document_Object_Model).

DOM Hierarchy can be represented as : 
1. DOCUMENT
	1. Element : ```<html>```
		1. Element : ```<head>```
			1. Element : ```<meta>```
			2. Element : ```<title>```
			3. Element : ```<script>```
		2. Element : ```<body>```
			1. Element ```<h1>```
				1. Text : "Title"
			2. Element :```<a>```, attribute : ```href=""```
				1. Text : "Link"


## Manipulating DOM with P5Js library : p5.dom.js
We can manipulate any DOM element using P5Js library p5.dom.js
p5.dom.js is avaliable in the addons foled of P5Js and we can load it by adding it into our ```<header>``` as follow :
```
<script src="yourPathToP5Folder/addons/p5.dom.js"></script>
```