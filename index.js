var numberOfDrums = document.querySelectorAll(".drum");

for (var i = 0; i < numberOfDrums.length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(event) {
    var char = event.target.innerHTML;
    playSound(char);
    addAnimation(char);
  })
}

document.addEventListener("keypress", function(event) {
  var char = event.key;
  playSound(char);
  addAnimation(char);
})



function playSound(char) {
  switch (char) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "k":
      audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "l":
      audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    default:
      console.log(char);
  }
}

function addAnimation(char) {
  var element = document.querySelector("." + char);
  element.classList.add("pressed");

  setTimeout(function() {
    element.classList.remove("pressed");
  }, 100)
}
