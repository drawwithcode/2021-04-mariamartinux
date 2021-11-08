const phrase = "CATCH ME IF YOU CAN";
const words = phrase.split(" ");
let allButtons;
let bottone;
let iterator = 0;
let sfondo;
let badge;

function setup() {
  sfondo = loadImage("assets/catchme.jpeg");
  badge = loadImage("./assets/fbibadge.png");
  createCanvas(windowWidth, windowHeight);

  noCursor();

  //create a button with a single word of the phrase
  words.forEach((word) => {
    bottone = createElement("button", word);
  });

  allButtons = selectAll("button");

  //what happens when you click on a button
  bottone.mouseClicked(function () {
    console.log("caught");
    window.open("caught.html", "_self");
  });
}

function draw() {
  cursor(badge);

  //behaviour of the buttons
  iterator++;
  allButtons.forEach((singleButton, i) => {
    let x = noise((iterator + 40 * i) / 110) * windowWidth;
    let y = noise((iterator - 40 * i) / 110) * windowHeight;
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
