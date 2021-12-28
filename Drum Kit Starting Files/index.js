var crashK = new Audio('sounds/crash.mp3');
var kickL = new Audio('sounds/kick-bass.mp3');
var snareJ = new Audio('sounds/snare.mp3');
var tom1W = new Audio('sounds/tom-1.mp3');
var tom2A = new Audio('sounds/tom-2.mp3');
var tom3S = new Audio('sounds/tom-3.mp3');
var tom4D = new Audio('sounds/tom-4.mp3');


for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}


function handleClick() {
    switch(this.innerHTML) {
        case "w":
            tom1W.play();
            break;
        case "a":
            tom2A.play();
            break;
        case "s":
            tom3S.play();
            break;
        case "d":
            tom4D.play();
            break;
        case "j":
            snareJ.play();
            break;
        case "k":
            crashK.play();
            break;
        case "l":
            kickL.play();
            break;
        default:
            console.log("wrong")
    }
}


document.addEventListener("keypress", function(event) {
    handlePress(event);
    buttonAnimation(event.key);
});

function handlePress (event) {
    switch(event.key) {
        case "w":
            tom1W.play();
            break;
        case "a":
            tom2A.play();
            break;
        case "s":
            tom3S.play();
            break;
        case "d":
            tom4D.play();
            break;
        case "j":
            snareJ.play();
            break;
        case "k":
            crashK.play();
            break;
        case "l":
            kickL.play();
            break;
        default:
            console.log("wrong")
    }
}


function buttonAnimation(key) {
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}