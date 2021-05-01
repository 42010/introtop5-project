function setup() {
  canvas = createCanvas(700, 490);
  canvas.position(150, 150);
  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  image(video, 170, 130, 300, 300);

  fill(255, 0, 0);
  stroke(255, 0, 0);
  circle(90, 95, 80);

  fill(0, 128, 0);
  stroke(0, 128, 0);
  rect(130, 90, 432, 20);

  fill(255, 0, 0);
  stroke(255, 0, 0);
  circle(530, 90, 80);

  fill(0, 128, 0);
  stroke(0, 128, 0);
  rect(520, 125, 20, 400);

  rect(520, 125, 20, 400);

  fill(255, 0, 0);
  stroke(255, 0, 0);
  circle(530, 450, 80);

  fill(0, 128, 0);
  stroke(0, 128, 0);
  rect(90, 500, 510, 20);

  rect(95, 450, 400, 20);

  fill(255, 0, 0);
  stroke(255, 0, 0);
  circle(90, 450, 80);
 
  fill(0, 128, 0);
  stroke(0, 182, 0);
  rect(80, 130, 20, 280);
}