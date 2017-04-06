var down = document.querySelector('.down');
var number = document.querySelector('.number');
var up = document.querySelector('.up');
var displayNum = 0;

number.textContent = displayNum;

up.addEventListener('click', function() {
  displayNum++;
  number.textContent = displayNum;
});


down.addEventListener('click', function() {
  if (displayNum <= 0) {
    number.textContent = 0;
    alert('STOP TOUCHING ME!! I NEED AN ADULT!!');
  }
  else {
    displayNum--;
    number.textContent = displayNum;
  }

  return number.textContent = displayNum;
});
