x = 0;
y = 0;
var screen_wdith = 0;
var screen_height = 0;
var apple = ""
draw_apple = "";
var speak_data = ""
var to_number = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();


 function preload () {
  apple_img = loadimage('apple.png');
  
  }

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {
  to_number = Number(content);
 console.log(event); 
 if(Number.isInteger(to_number))
 {
document.getElementById("status").innerHTML = " Started Drawing Apple ";
draw_apple = "set";
 }else {
  document.getElementById("status").innerHTML = "The speech has not recognized a number: "; 
}
function setup() {
screen_width = window.innerWidth;
screen_height = window.innerHeight;
canvas = createCanvas(screen_width, screen_height-150);
canvas.position(0,150);
}
 
function draw() {
  if(draw_apple == "set"){
  for(var i=0; i<to_number; i++);
  {
    x = Math.floor(Math.random() * 700);
    y = Math.floor(Math.random() * 400);
    Image(apple, x, y, 50,50);
  
  }
  document.getElementById("status").innerHTML = to_number+ "Apples Drawn"; 
  speak_data = to_number+ "Apples Drawn";
 speak();
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    speak_data = "";

    
}
