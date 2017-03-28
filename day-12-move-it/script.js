var downButton = document.querySelector('#down-button');
var upButton = document.querySelector('#up-button');
var leftButton = document.querySelector('#left-button');
var rightButton = document.querySelector('#right-button');
var theCircle = document.querySelector('.circle');

var topValue = 0;
var rightValue = 0;

downButton.addEventListener('click', function () {
  topValue += 5;
  console.log('topValue = ' + topValue);

  theCircle.style.top = topValue + 'px';
});

upButton.addEventListener('click', function () {
  topValue -= 5;
  console.log('topValue = ' + topValue);

  theCircle.style.top = topValue + 'px';
});

leftButton.addEventListener('click', function () {
  rightValue -= 5;
  console.log('rightValue = ' + rightValue);

  theCircle.style.left = rightValue + 'px';
});

rightButton.addEventListener('click', function () {
  rightValue += 5;
  console.log('rightValue = ' + rightValue);

  theCircle.style.left = rightValue + 'px';
});
