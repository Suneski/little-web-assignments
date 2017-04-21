// INTRO SCREEN
var body = document.querySelector('body');
var intro = document.querySelector('#intro');
var yes = document.querySelector("#yes");
var no = document.querySelector("#no");
var initialDecision = document.querySelector("#initial-decision");


var missionAccepted = document.querySelector("#mission-accepted");
var missionRejected = document.querySelector("#mission-rejected");

initialDecision.addEventListener('click', function(evt) {
  if (evt.target === yes) {
    intro.style.display = "none";
    body.style.backgroundColor = "white";
    missionAccepted.style.display = "block";

  }
});





var grid = document.querySelector(".grid");
var ghost = document.querySelector("#ghost");
var burger = document.querySelector("#burger");
var ghostGameOver = document.querySelector("#ghost-game-over");

grid.addEventListener('click', function(evt) {
  if (evt.target === burger) {
    burger.style.opacity = "1";
    setTimeout(function () {
      grid.style.display = "none";
    }, 500);

  }
  else if (evt.target === ghost) {
    ghost.style.opacity = "1";
    ghostGameOver.style.display = "block";
  }
});
