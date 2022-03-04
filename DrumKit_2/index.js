var numberOfDrumButtons = document.querySelectorAll(".drum").length;

var audio = new Audio('/Users/mao/Documents/GitHub/learning/DrumKit/sounds/crash.mp3');

for (var i = 0; i < numberOfDrumButtons; i++){

document.querySelectorAll(".drum")[i].addEventListener("click", function (){

  audio.play();
  });
}
