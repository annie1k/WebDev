var buttonColor = ["red","blue","green","yellow"];
var gamePattern = [];
var blue = new Audio('sounds/blue.mp3');
var green = new Audio('sounds/green.mp3');
var red = new Audio('sounds/red.mp3');
var yellow = new Audio('sounds/yellow.mp3');
var wrong = new Audio('sounds/wrong.mp3');

function nextSequence(){
    var randNum = Math.floor(Math.random() * 4);
    var randColor = buttonColor[randNum];
    gamePattern.push(randColor);
    $("#" + randColor).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + randColor + ".mp3");
    audio.play();
}
