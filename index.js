function listenClick(sel) {
  sel.addEventListener("click", handleClick);
}

function audioPlay(ele) {
  switch (ele) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(ele);
  }
}

function animateButton(keyPressed) {
  var doc = document.querySelector("."+keyPressed);
  doc.classList.add("pressed");
  setTimeout(function () {
    doc.classList.remove("pressed");
  }),
    100;
}

btns = document.querySelectorAll("button.drum");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var inHTML = this.innerHTML;
    audioPlay(inHTML);
    animateButton(inHTML);
  });
}

document.addEventListener("keydown", function (event) {
  var pressed = event.key;
  audioPlay(pressed);
  animateButton(pressed);
});
