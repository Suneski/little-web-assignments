var peeps = ['Ali', 'Stevie', 'Haley', 'Monica', 'Brian', 'Sam', 'Nikki', 'David'];

var randomPeeps = [];
var totalCount = peeps.length;


// for-loop solution

// for (var i = 0; i < totalCount; i++) {
//   var randomNumber = Math.random();
//   randomNumber = Math.floor(randomNumber * peeps.length);
//
//   randomPeeps.push(peeps[randomNumber]);
//   peeps.splice(randomNumber, 1);
// }
//
// console.log(randomPeeps);




// while loop solution

while (peeps.length > 0) {
  var randomNumber = Math.random();
  randomNumber = Math.floor(randomNumber * peeps.length);

  randomPeeps.push(peeps[randomNumber]);
  peeps.splice(randomNumber, 1);
}

console.log(randomPeeps);
