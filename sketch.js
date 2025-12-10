
var textarea = document.getElementById("text_area");
var textarea_main = document.getElementById("text_area_main");
var textarea_h2 =document.getElementById("text_area_h2");
var font;
function preload(){
  font = loadFont("font/texgyreheroscn-bold.otf");
}
function setup() {
  var c=createCanvas(400, 400);
  c.parent("canvasWrapper");
}

function draw() {
  background(220);
  textFont(font);
  textSize(20);
  noStroke();
  fill(0);

  //estil del header1
  textAlign(LEFT);
  text(textarea.value, 0,30);

  //estilo main
  textAlign(RIGHT);
  stroke(0);
  fill(255);
  text(textarea_main.value,400,height/2);

  //estilo h2
textAlign(RIGHT); 
 noStroke();
  fill(0);
  text(textarea_h2.value,400,300);
}
