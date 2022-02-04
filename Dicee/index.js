//dice 1

var randomNumber1 = Math.floor(Math.random() * 6) + 1; // random number 1-6

var randomImage = "dice" + randomNumber1 + ".png"; // img1-6

var randomImageSource = "/Users/mao/Documents/GitHub/learning/Dicee/images/" + randomImage; // src of img.

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

// Dice 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage2 = "dice" + randomNumber2 + ".png"; // img1-6

var randomImageSource2 = "/Users/mao/Documents/GitHub/learning/Dicee/images/" + randomImage2; // src of img.

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);


// h1 modify

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player1 Win!";
}else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player2 Win!";
}else {
  document.querySelector("h1").innerHTML = "Draw!";
}
