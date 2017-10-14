function setup() { 
  createCanvas(410, 410);
	colorMode(HSB);
 background(0);
} 

function draw() { 

	stroke(255);
for (x=0,y=410,h=250;x<200;x=x+10,y=y-20,h=h-18){
fill(h,66,74);
	strokeWeight(0.5);
	stroke(33,100,88)
	rect(x,x,y,y)
}


}
