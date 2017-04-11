// ARRAY
var foods = [
  'takoyaki',
  'ramen',
  'steak',
  'pupusas',
  'seaweed',
  'pho',
  'melted cheese',
  'rice crackers'
];

// FIND INPUT IN HTML
var input = document.querySelector('#query');

// FIND OL IN HTML
var foodListOL = document.querySelector('#food-list');

// RUN createList function on initial array (foods)
createList(foods);

// SET UP EVENT LISTENER IN INPUT BOX.
input.addEventListener('keyup', function() {

  // CREATE A NEW BLANK ARRAY
  var newList = [];

  // DEPENDING ON WHAT HAS BEEN ENTERED INTO INPUT BOX, PUSH THOSE CHARACTERS INTO NEW ARRAY (newList)
  for (var i = 0; i < foods.length; i++) {

    //
    var containsLetter = foods[i].indexOf(input.value) > -1;

    if (containsLetter) {
      newList.push(foods[i]);
    }
  }

  // REMOVE OLD LIST FROM SCREEN, DEPENDENT ON NEW LIST
  foodListOL.innerHTML = '';

  // ADD NEW LIST TO SCREEN
  createList(newList);
});


// DEFINE FUNCTION (createList)
function createList(arr) {

  // FOR LOOP, LOOP THROUGH ARRAY
  for (var i = 0; i < arr.length; i++) {

    //
    var li = document.createElement('li');
    li.textContent = arr[i];
    foodListOL.appendChild(li);
  }
}
