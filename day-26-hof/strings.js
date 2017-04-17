var someStrings = ['Rem', 'Ram', 'Emilia', 'Felt', 'Beatrix', 'Subaru'];

someStrings.forEach(function(arr) {
  console.log(arr);
});




//Use filter to return all items that contain the letter 'i'


// Longer version
// var hasLetterI = someStrings.filter(function(arr) {
//   if (arr.indexOf('i') > -1) {
//     return true;
//   }
// });

// console.log('Name contains the letter "i"', hasLetterI);


// Shorter/Faster Route
var hasLetterIPart2 = someStrings.filter(function(x) {
  return x.indexOf('i') > -1;
});

console.log('Name contains the letter "i"', hasLetterIPart2);



//Use filter to return all strings longer than five characters


// Longer version
// var longerThan5 = someStrings.filter(function(arr) {
//   if (arr.length > 5) {
//     return true;
//   }
// });
//
// console.log('String is longer than 5 characters', longerThan5);


// Shorter/Faster Route
var longerThan5Part2 = someStrings.filter(function(x) {
  return x.length > 5;
});

console.log('String is longer than 5 characters', longerThan5Part2)


//MAP

//I ate a sandwich.
//I ate cookies.
//I ate chips.
//I ate tangerines.

var foods = ['a sandwich', 'cookies', 'chips', 'tangerines'];

var whatIAte = foods.map(function(x) {
  return 'I ate ' + x + '.';
});

console.log(whatIAte);
