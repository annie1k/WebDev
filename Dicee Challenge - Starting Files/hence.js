var randomVar1 = Math.floor(Math.random() * 6 + 1);
var randomVar2 = Math.floor(Math.random() * 6 + 1);
var randomImg1 = "images/dice" + randomVar1 + ".png";
var randomImg2 = "images/dice" + randomVar2 + ".png";
var img1 = document.querySelectorAll("img")[0];
var img2 = document.querySelectorAll("img")[1];
img1.setAttribute("src",randomImg1);
img2.setAttribute("src",randomImg2);

if (randomVar1 > randomVar2) {
  document.querySelector("h1").innerHTML = "Player 1 WINS!";
} else if (randomVar1 < randomVar2) {
  document.querySelector("h1").innerHTML = "Player 2 WINS!";
} else {
  document.querySelector("h1").innerHTML = "DRAW!!!";
}
