// wip do not touch, all credit goes to Jacco Baauw
var radius = 10;
var eyeSize = 24;
var xSize = 600;
var ySize = 600;
var xSpeedjes = []
var ySpeedjes = []
var xBobjes = []
var yBobjes = []
var aantalBobs = 0
var eifel65 = 163
var communism = 16
let gestart = false;
var audio1 = new Audio('failed.mp3');
var audio2 = new Audio('won.mp3')
var secondaries = []

var hard
var medium
var easy

function Hardmode() {
  hard = Math.floor(random(8,16));
  aantalBobs = hard
  console.log(aantalBobs)
  xxx()
}
function Easymode() {
  easy = Math.floor(random(1,6));
  aantalBobs = easy
  console.log(aantalBobs)
  xxx()
}
function Mediummode() {
  medium = Math.floor(random(7,10));
  if (medium == hard) {
    medium = medium + 1
  }
  aantalBobs = medium
  console.log(aantalBobs)
  xxx()
}
function maakBobjes () {
  gestart = true;
//  easy = Math.floor(random(1,6));
//  medium = Math.floor(random(7,10));
//  hard = Math.floor(random(8,16));
  //console.log(medium)
  //console.log(hard)
//  aantalBobs = hard
  if (medium == hard) {
    medium = medium + 1
  }
  createCanvas(xSize, ySize);
  background(51, 0, 0);
  console.log(aantalBobs)
  for (var i = 0; i < aantalBobs; i++) {
    xBobjes.push(50)
    yBobjes.push(100)
    var r1 = random(-5, 5)
    var r2 = random(-5, 5)
    xSpeedjes.push(r1)
    ySpeedjes.push(r2)
    setTimeout(evil, 10000)
  }
}
function evil(){
  createCanvas(0, 0);
}
function setup(){
//  createCanvas(xSize, ySize);
//	maakBobjes();			//dit komt uiteindelijk in een onclick functie
  //die onclick fucntie maakt de bobjes en beslist jouw diffculty
}
function tekenBob (x, y) {
    noStroke();
    fill(communism, eifel65, 143);
    rect(x, y, 100, 75);
    rect(x + 10, y-22, 70, 40);
    stroke(255);
    strokeWeight(2);
    fill(255, 5, 5);
    ellipse(x + 25, y + 21, eyeSize + 10, eyeSize + 10);
    ellipse(x + 80, y + 21, eyeSize, eyeSize);
    stroke(1);
    line(x + 5, y + 40 + eyeSize/2, x + 90, y + 40 + eyeSize/2);
}
function SubmitAnswer(){
  var antw = int(document.getElementById("answer").value);
  console.log(antw)
  if (antw == aantalBobs){
    audio2.play();
    alert(aantalBobs + " was the correct answer!" + "\n" + "Yay");
  }
  else {
    audio1.play();
    alert(antw + " was incorrect, the correct answer was " + aantalBobs);
  }
}
function draw(){
  if (gestart) {
    if (medium == hard) {
      medium = medium + 1
    }
    background(255);
  	for (var i = 0; i < aantalBobs + 1; i++) {
      tekenBob(xBobjes[i], yBobjes[i])
  		if (xBobjes[i] > xSize - 100 || xBobjes[i] < radius){
  			xSpeedjes[i] = -xSpeedjes[i];
        if (aantalBobs == hard) {
          eifel65 = Math.floor(random(255));
        }
  		}
  		if (yBobjes[i] > ySize - 75 || yBobjes[i] < radius){
  			ySpeedjes[i] = -ySpeedjes[i];
        if (aantalBobs == hard) {
        communism = Math.floor(random(255));
        }
  		}
  		xBobjes[i] += xSpeedjes[i];
  		yBobjes[i] += ySpeedjes[i];
    }
//    console.log(easy)
}
}
function xxx(){
   var secondaries = document.getElementsByClassName("secondary")
   for (var p = 0; p<secondaries.length; p++){
     secondaries[p].style.visibility = "visible"
   }
