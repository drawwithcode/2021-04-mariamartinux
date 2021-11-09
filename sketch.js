const phrase = "CATCH ME IF YOU CAN";
const words = phrase.split(" ");
let allButtons;
let bottone;
let iterator = 0;
let sfondo;
let button1;
let soundtrack;

function setup() {
  sfondo = loadImage("assets/catchme.jpeg");
  soundtrack = loadSound("assets/soundtrack.mp3");
  createCanvas(windowWidth, windowHeight);

  //create a button with a single word of the phrase
  words.forEach((word) => {
    bottone = createElement("button", word);
  });

  allButtons = selectAll("button");

  //what happens when you click on a button
  bottone.mousePressed(function () {
    console.log("caught");
    window.open("caught.html", "_self");
  });
}

function draw() {
  //behaviour of the buttons
  iterator++;
  allButtons.forEach((singleButton, i) => {
    let x = noise((iterator + 40 * i) / 100) * windowWidth;
    let y = noise((iterator - 40 * i) / 100) * windowHeight;
    //visual appearance of the buttons
    singleButton.style("position: absolute");
    singleButton.style("color: blue");
    singleButton.style("border-radius: 50px");
    singleButton.style("background-color: white");
    singleButton.style("border: 2px solid blue");
    singleButton.style("font-size: 30px");

    singleButton.position(x, y);
  });

  backgroundImage(sfondo);

  push();
  textAlign(CENTER);
  textSize(24);
  fill("white");
  text(
    "click on the escaping words to catch Leonardo di Caprio",
    width / 2,
    height / 15
  );
  pop();

  push();
  textAlign(CENTER);
  textSize(16);
  fill("white");
  text(
    "don't know what I'm talking about? 'Catch me if you can' is a cool movie by Spielberg, watch the trailer          ",
    width / 2,
    height / 1.08
  );
  pop();

  //this opens a window to watch the trailer
  push();
  let buttonText1 = "HERE";
  button1 = createButton(buttonText1);
  button1.style("background-color", "transparent");
  button1.style("color", "white");
  button1.style("cursor", "pointer");
  button1.style("font-size", "16px");
  button1.style("padding", "8px 20px 8px 20px");
  button1.style("border-radius", "15px");
  button1.style("border-style", "none");
  button1.style("border-color", "transparent");
  button1.style("border-width", "0px");
  button1.style("text-decoration", "underline");
  button1.position(windowWidth / 1.45, windowHeight / 1.115);
  pop();

  button1.mousePressed(function () {
    window.open("https://www.youtube.com/watch?v=s-7pyIxz8Qg");
  });

  //button for the soundtrack
  push();
  let buttonText2 = "PLAY SOUNDTRACK";
  button2 = createButton(buttonText2);
  button2.style("background-color", "blue");
  button2.style("color", "white");
  button2.style("cursor", "pointer");
  button2.style("font-size", "16px");
  button2.style("border-radius", "50px");
  button2.style("border: 2px solid white");

  button2.position(windowWidth / 1.2, windowHeight / 17);
  pop();

  //play and stop the soundtrack
  button2.mousePressed(function () {
    if (soundtrack.isPlaying()) {
      soundtrack.stop();
    } else {
      soundtrack.play();
    }
  });
}

//mantain proportions of the background image
function backgroundImage(img) {
  push();
  translate(width / 2, height / 2);
  imageMode(CENTER);
  let scale = Math.max(width / img.width, height / img.height);
  image(img, 0, 0, img.width * scale, img.height * scale);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
