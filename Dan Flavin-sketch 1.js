function setup() { 
  createCanvas(400, 400);
	colorMode(HSB);
} 

function draw() { 
  background(201,100,20);
	stroke(random(255));
	strokeWeight(5);
	line(20,150,380,150);
	line(20,250,380,250);
	
for(x=20;x<380;x=x+380/5){
	stroke(327,100,random(100));
	line(x,155,x,245);
}
stroke(327,100,random(100));
	line(380,155,380,245)
}
