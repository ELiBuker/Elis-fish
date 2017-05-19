//Driver: Eli Typer: Lisa

function setup() { //chose setup function
  createCanvas(600, 400);// made canvas
	background(0, 64, 135);// colored background
}


function draw() {// called draw function
  	strokeWeight(4);// the thickness of shapes
	  stroke(255);//color of the border
	
		for (var i = 07; i <= width; i += 60) { // i is 0; as long as i is less then the width; add 60 to i
		for (var j = 0; j <= height; j += 60) { // j is 0; as long as j is less then height; add 60 to j
			fill(mouseX, random(255), mouseY); // colr the inner shape (based onthe the mouse X axis, random value from 0-255, based on the mouse Y axis)
		//	rect(i, j, 35, 35); 
		//triangle(i, j, 58, 20, 86, 75);// triangle(i for X axis, j for Y axis, width, height)
arc(i, j, 80, 80, 0, PI+QUARTER_PI, OPEN);// i chose a different shape

//if(function mouseClicked() {
//noFill(255);
 //if 

		}
  }
}
