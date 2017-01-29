# Using P5Js for creative coding

** This repository collects all the courses done at e-art sup (Paris) about Creative Coding during the second semester (2017). You can find all th sketch developed during this courses. **

## Setup P5JS :
	1. Download P5JS (http://p5js.org/download/)
	2. Create folder and add the P5JS folder
	3. Create a HTML file and import P5JS in the <header></header> using <script src="YourP5JSSource.js"></script>
		1 Use a local file such as : <script src="../p5.min.js"></script>
		2 Or use a hosted online version stored in CDN (Content Delivery Network). See all verson at : https://cdnjs.com/libraries/p5.js. Import using : <script src="//cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.6/p5.js"></script>
	4. A simple HTML fil must look like :
		<html>
		  <head>
		    <script src="YourP5JSSource.JS"></script>
		    <script src="sketch.js"></script>
		  </head>
		  <body>
		  </body>
		</html>
	5. Use your favorite code editor such as Sublime Text, NotePad++, Atom...
	6. P5JS work as Processing using two main function :
		function setup(){
			//Called only once per loaded
			//setup all your variables, objects...
		}

		function draw(){
			//Loop function called at each frame
			//Put all your drawing here
		}

		P5JS is based on Processing for the syntax using Javascript. Javascript is a untype languages which means there is no type declaration. Learn more at http://stackoverflow.com/questions/964910/is-javascript-an-untyped-language

		In Java you use :
			int x = 10;
			float x = 10.5;
			char x = 'a';
			String x = "alex"

		In javascript you use
			var x = 10;
			var x = 10.0;
			var x = 'a';
			var x = "alex";

		As said, P5JS has a syntax based on Processing which means you will find a lot of function named such as in Processing like drawing methods :

			ellipse(x, y, w, h);

## Ressources :
Find exemples or ressources 
1. [Official site of P5JS](p5js.org)
2. (hello.p5js.org)
2. (openProcessing.org)
3. (https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw)

Find all ressource from the first semester : (https://github.com/alexr4/e-artsup-GxD_Semestre1);
