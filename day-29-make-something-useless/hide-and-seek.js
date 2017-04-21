var grid = document.querySelector(".grid");
var body = document.querySelector('body');
var intro = document.querySelector('#intro');
var yes = document.querySelector("#yes");
var no = document.querySelector("#no");
var initialDecision = document.querySelector("#initial-decision");

var missionAccepted = document.querySelector("#mission-accepted");
var missionRejected = document.querySelector("#mission-rejected");

var proceed = document.querySelector("#proceed");

var ghost = document.querySelector("#ghost");
var burger = document.querySelector("#burger");
var ghostGameOver = document.querySelector("#ghost-game-over");
var burgerCatVictory = document.querySelector("#burger-cat-victory");
var attempts = document.querySelector("#attempts");
var ghostParty = document.querySelector("#ghost-party");
var burgerRain = document.querySelector("#burger-rain");
var pumpkin = document.querySelector('#pumpkin-man');

var spookyMusic = new Audio('spookyMusic.mp4');
var celebrate = new Audio ('celebrate.mp4');
var hallelujah = new Audio ('hallelujah.mp4');
var tooSexy = new Audio ('tooSexy.mp4');

initialDecision.addEventListener('click', function(evt) {
  if (evt.target === yes) {
    intro.style.display = "none";
    missionAccepted.style.display = "block";
  }

  if (evt.target === no) {
    intro.style.display = "none";
    missionRejected.style.display = "block";
  }
});

proceed.addEventListener('click', function() {
  missionAccepted.style.display = "none";
  grid.style.display = "block";
  body.style.backgroundColor = "black";
});

function gridBoxes() {
  for (var i = 0; i < 25; i++) {
    var div = document.createElement('div');
    div.classList.add("box-" + (i+1));
    grid.appendChild(div);
  }

  var ghostRandomNumber = Math.ceil((Math.random() * 25));

  var burgerRandomNumber = Math.ceil((Math.random() * 25));

  if (ghostRandomNumber === burgerRandomNumber && ghostRandomNumber < 25) {
    burgerRandomNumber = ghostRandomNumber + 1;
  }

  if (ghostRandomNumber === burgerRandomNumber && ghostRandomNumber === 25) {
    burgerRandomNumber = 13;
  }

  console.log("ghost: " + ghostRandomNumber);
  console.log("burger: " + burgerRandomNumber);

  var ghostLocation = document.getElementsByClassName("box-" + ghostRandomNumber)[0].appendChild(ghost);

  var burgerLocation = document.getElementsByClassName("box-" + burgerRandomNumber)[0].appendChild(burger);

  spookyMusic.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
  }, false);
  spookyMusic.play();
}

gridBoxes();

var counter = 5;
attempts.textContent = "Remaining Attempts: " + counter;

grid.addEventListener('click', function(evt) {


  if (evt.target !== burger && evt.target !== ghost) {
    counter -= 1;
    attempts.textContent = "Remaining Attempts: " + counter;
  }

  if (evt.target === burger || evt.target === ghost || counter === 0) {
    attempts.style.display = "none";
  }

  if (counter === 0) {
    spookyMusic.pause();
    tooSexy.addEventListener('ended', function() {
      this.currentTime = 10;
      this.play();
    }, false);
    tooSexy.play();
    setTimeout(function () {
      grid.style.display = "none";
      pumpkin.style.display = "block";
    }, 500);
  }

  if (evt.target === burger) {
    burger.style.opacity = "1";

    setTimeout(function () {
      burgerCatVictory.style.display = "block";
      spookyMusic.pause();
      hallelujah.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
      }, false);
      hallelujah.play();
    }, 500);

    setTimeout(function () {
      grid.style.display = "none";
      burgerRain.style.display = "block";
    }, 2000);

    ghost.style.display = "none";
  }

  if (evt.target === ghost) {
    ghost.style.opacity = "1";

    setTimeout(function () {
      ghostGameOver.style.display = "block";
    }, 500);

    setTimeout(function () {
      grid.style.display = "none";
      ghostParty.style.display = "block";
      spookyMusic.pause();
      celebrate.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
      }, false);
      celebrate.play();
    }, 2000);



    burger.style.display = "none";
  }
});
