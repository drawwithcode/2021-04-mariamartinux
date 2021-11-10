let sfondo;

function setup() {
  sfondo = loadImage("assets/caught.jpg");
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //allButtons.class("my-buttons");
  background("black");
  backgroundImage(sfondo);
  push();
  textAlign(CENTER);
  textSize(350);
  noStroke();
  fill("red");
  text("CAUGHT!", width / 2, height / 1.5);
  pop();
}

function backgroundImage(img) {
  push();
  translate(width / 2, height / 2);
  imageMode(CENTER);
  let scale = Math.max(width / img.width, height / img.height);
  image(img, 0, 0, img.width * scale, img.height * scale);
  pop();
}
