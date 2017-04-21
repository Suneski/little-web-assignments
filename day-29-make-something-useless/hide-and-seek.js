var grid = document.querySelector(".grid");
var ghost = document.querySelector("#ghost");
var burger = document.querySelector("#burger");
var ghostGameOver = document.querySelector("#ghost-game-over");
var burgerCatVictory = document.querySelector("#burger-cat-victory");
var attempts = document.querySelector("#attempts");
var ghostParty = document.querySelector("#ghost-party");
var pumpkin = document.querySelector('#pumpkin-man');

function gridBoxes() {
  for (var i = 0; i < 25; i++) {
    var div = document.createElement('div');
    div.classList.add("box-" + (i+1));
    grid.appendChild(div);
  }

  var ghostRandomNumber = Math.ceil((Math.random() * 25));
  console.log("ghost: " + ghostRandomNumber);

  var ghostLocation = document.getElementsByClassName("box-" + ghostRandomNumber)[0].appendChild(ghost);

  var burgerRandomNumber = Math.ceil((Math.random() * 25));
  console.log("burger: " + burgerRandomNumber);

  var burgerLocation = document.getElementsByClassName("box-" + burgerRandomNumber)[0].appendChild(burger);

}

gridBoxes();

var counter = 5;
attempts.textContent = "Remaining Attempts: " + counter;

grid.addEventListener('click', function(evt) {


  if (evt.target !== burger && evt.target !== ghost) {
    counter -= 1;
    attempts.textContent = "Remaining Attempts: " + counter;
  }

  if (counter === 0) {
    attempts.style.display = "none";

    setTimeout(function () {
      grid.style.display = "none";

      pumpkin.style.display = "block";
    }, 500);
  }


  if (evt.target === burger) {
    burger.style.opacity = "1";

    setTimeout(function () {
      burgerCatVictory.style.display = "block";
    }, 500);

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
    }, 2000);

    burger.style.display = "none";
  }
});
