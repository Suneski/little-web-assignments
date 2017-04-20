var firstPage = document.querySelector('#page-1');
var secondPage = document.querySelector('#page-2');
var thirdPage = document.querySelector('#page-3');


var firstNameInput = document.querySelector('#first-name');
var lastNameInput = document.querySelector('#last-name');

var nextButtonOne = document.querySelector('#next-page-one');

var previousPage2 = document.querySelector('#previous-page-two');
var nextPage2 = document.querySelector('#next-page-two');

var previousPage3 = document.querySelector('#previous-page-three');
var submit = document.querySelector('#submit');



// PAGE 1

nextButtonOne.addEventListener('click', function(evt) {
  evt.preventDefault();

  if (firstNameInput.value === '' || lastNameInput.value === '') {
    alert("ERROR! Please include both first AND last name!");
  }
  else {
    firstPage.style.display = "none";
    secondPage.style.display = "block";
  }

});

// PAGE 2

previousPage2.addEventListener('click', function(evt) {
  evt.preventDefault();

  firstPage.style.display = "block";
  secondPage.style.display = "none";

});

nextPage2.addEventListener('click', function(evt) {
  evt.preventDefault();



  var IsChecked = $('.age-radio').is(':checked');

  if(IsChecked) {
    secondPage.style.display = "none";
    thirdPage.style.display = "block";
  }
  else {
    alert('ERROR! Please select your age range!');
  }

});

// PAGE 3

previousPage3.addEventListener('click', function(evt) {
  evt.preventDefault();

  secondPage.style.display = "block";
  thirdPage.style.display = "none";

});
