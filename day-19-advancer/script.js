var previousButton = document.querySelector('#previous-button');
var nextButton = document.querySelector('#next-button');
var display = document.querySelector('#display');

var currentMessageIndex = 0;

var messages = [
  'Go to sleep',
  'Brush your hair',
  'Stop that',
  'WTF did you do this time?',
  'You are literally THE WORST',
  'Get a haircut',
  'Are you really going outside dressed like THAT?!',
  'How... wait, what? HOW DID YOU DO THAT?!',
  'How the %#&$ did you get stuck in the sink? AGAIN?'
];

display.textContent = messages[0];


nextButton.addEventListener('click', function() {
  currentMessageIndex += 1;

  if (currentMessageIndex === messages.length) {
    currentMessageIndex = 0;
  }

  display.textContent = messages[currentMessageIndex];
});


previousButton.addEventListener('click', function() {
  currentMessageIndex -= 1;

  if (currentMessageIndex < 0) {
    currentMessageIndex = messages.length - 1;
  }

  display.textContent = messages[currentMessageIndex];
});
