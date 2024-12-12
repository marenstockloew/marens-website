function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	// createCanvas(300, 300);
	// put setup code here
}

let task_done = false;
let last_done = 0;

function draw() {
	const delay = 200 //ms
  	if(!task_done) {
    	display();
    	task_done = true;
    	last_done = millis();
  	}
  	else {
    	if(millis() - last_done > delay) {
      	task_done = false;
    }
  }
}

function mousePressed() {
	createCanvas(windowWidth, windowHeight);
	// window.open("portfolio.html","_self")
}

function display() {
	fill(255,255,255,70);
	textSize(80);
	text('\u{2601}', mouseX , mouseY);
}