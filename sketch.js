let gap = 15;
let cirNum = 50;
let cirSize = 0;
let angle;


function setup() {
  createCanvas(900, 900);
  angleMode(degrees);
}

function draw() {
  background(0);
 
 
  translate(width/2, height/2);
  rotate(angle);
  angle = map(mouseX, 0, width, -90, 90);
  angle = angle + map(mouseX, 0 , width, -0.01, 0.01);
  noFill();
  for (let i =0; i  < cirNum*1.7; i++){
    arc(0, 0, cirSize + gap * i/2, cirSize +gap * i/2, angle * i, 200-i);
    stroke(10+i*10, 140+ i*0.2, 255-i);
  strokeWeight(1);
  }
  for (let i =0; i  < cirNum; i++){
    arc(0, 0, cirSize + gap * i, cirSize +gap * i, angle * i, 200-i);
    stroke(10+i*10, (140+ i*0.2), 255-i * 3);
  strokeWeight(1+i/8);
}

}

 // ellipse(x, 50, size * tan(frame), size * - cos(frame))
