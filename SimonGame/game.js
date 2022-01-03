var buttonColor = ["red","blue","green","yellow"];
var gamePattern = [];

function nextSequence(){
    var randNum = Math.floor(Math.random() * 4);
    var randColor = buttonColor[randNum];
    gamePattern.push(randColor);
}
