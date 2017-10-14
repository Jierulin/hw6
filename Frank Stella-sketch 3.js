function setup() { 
  createCanvas(410, 410);
	colorMode(HSB);
 background(0);
} 

function draw() { 

	stroke(255);
for (x=0,y=410,h=250,b=40;x<200;x=x+10,y=y-20,h=h-18,b=b+3){

	strokeWeight(5);
	stroke(h,100,b)
	rect(x,x,y,y)
}


}
