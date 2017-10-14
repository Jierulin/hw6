function setup() { 
  createCanvas(410, 410);
	colorMode(HSB);
 background(0);
} 

function draw() { 


for (x=0,y=410,h=250;x<200;x=x+10,y=y-20,h=h-18){
	noFill();
	stroke(255);
	strokeWeight(0.5);
	rect(x,x,y,y)
}


}
