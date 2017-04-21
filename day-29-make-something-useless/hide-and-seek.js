var grid = document.querySelector(".grid");
var ghost = document.querySelector("#ghost");
var burger = document.querySelector("#burger");
var ghostGameOver = document.querySelector("#ghost-game-over");
var burgerCatVictory = document.querySelector("#burger-cat-victory");
var attempts = document.querySelector("#attempts");
var ghostParty = document.querySelector("#ghost-party");

var counter = 5;
attempts.textContent = "Remaining Attempts: " + counter;

grid.addEventListener('click', function(evt) {


  if (evt.target !== burger && evt.target !== ghost) {
    counter -= 1;

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
