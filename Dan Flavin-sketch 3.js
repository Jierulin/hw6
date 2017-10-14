function setup() { 
  createCanvas(400, 400);
	colorMode(HSB);
} 

function draw() { 
  background(202+random(10),100,80);
	
	strokeWeight(7);
	stroke(52,100,100-random(20));
	line(60,100,170,100);
	
	strokeWeight(3);
	stroke(347,97,90+random(10));
	line(90,95,140,95);
	
strokeWeight(8);
	stroke(199,100,86+random(20));
	line(120,109,350,109);


}
