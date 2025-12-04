

function setup(){
  createCanvas(windowWidth,windowHeight);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  noStroke();
}

function draw(){
  translate(width/2, height/2)
  background('#91e3eeff');
  fill(255);
  rect(0, 0, width-100, height-100);

  fill(0);
  text('This is the place to make a family portrait', 0, 0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function showCaption(){
  document.getElementById("profilepic").style.display = "block";
}

function hideCaption(){
    document.getElementById("profilepic").style.display = "none";
}

//constant variable htmlDoc
const myButton = document.getElementById('mybutton');
const myDiv = document.getElementById('punchline');
//waiting for somethign happen

//waiting for licking 1.what am i listening for? 2.the function i wanna have when button got clicked
myButton.addEventListener('click', function() {
  myDiv.innerHTML = 'To get to the other side';
});
