function setup() { 
  createCanvas(400, 400);
	colorMode(HSB);
} 

function draw() { 
  background(255,66,20);
	
for(x=50;x<350;x=x+350/10){
	strokeWeight(6);
	stroke(327,100,random(100));
	line(x,120,x+20,265);
}
stroke(327,100,random(100));

}
