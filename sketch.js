let x = 50;
let y = 50;

function setup() {
	createCanvas(600, 500);
}

function draw() {
	x,y,r = 25;
	background(25);
	a = mouseX;
	b = mouseY;
	console.log("SUM: " + a + " + " + b + " = " + sum(a, b));
	gulcirkel();
  }
  
  function sum(a, b) {
	return a + b;
  }

function gulcirkel(){
	noStroke();
	ellipse(x,y,r,25);
	fill('yellow');
}