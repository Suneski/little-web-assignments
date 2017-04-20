var firstNameInput = document.querySelector('#first-name');
var lastNameInput = document.querySelector('#last-name');
var clearButton = document.querySelector('#clear');
var submitButton = document.querySelector('#submit');
var errorMessage = document.querySelector('#error');

clearButton.addEventListener('click', function(evt) {
  evt.preventDefault();

  firstNameInput.value = '';
  lastNameInput.value = '';
});

submitButton.addEventListener('click', function(evt) {
  if (firstNameInput.value === '' || lastNameInput.value === '') {
    evt.preventDefault();
    // alert('Fill in both first AND last name!');
    errorMessage.style.display = "inline-block";
    errorMessage.textContent = "ERROR! Please include both first AND last name!"
  }
});
