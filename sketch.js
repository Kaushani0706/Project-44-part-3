var canvas;
var backgroundImage;
var bg2Image;
var bg3Image;
var bg4Image;
var bg5Image;
var hint;
var round1, round2, round3, round4;


function preload() {
  backgroundImage = loadImage("./assets/background scrabble 2.jpg");
  bg2Image = loadImage("./assets/background scrabble.jpg");
  bg3Image = loadImage("./assets/background3.jpg");
  bg4Image = loadImage("./assets/background4.jpg");
  bg5Image = loadImage("./assets/background5.jpg");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
 
 
}

function draw() {
  background(backgroundImage);


  fill("white");
  stroke(10);
  textSize(20);
  text("CLICK SPACE TO MOVE TO THE NEXT PAGE", 50,height -120);

  if(keyCode === 32 ){
    round1 = new Round1();
    round1.play();
  }


  
  form = new Form(); 
  form.display();

  round1 = new Round1();
  round1.display();

  //round3 = new Round3();
  //round3.display();

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
