var peeps = [
  { firstName: 'Jane', lastName: 'Jones', age: 12 },
  { firstName: 'John', lastName: 'Smith', age: 18 },
  { firstName: 'Fred', lastName: 'Johnson', age: 11 },
  { firstName: 'Jaime', lastName: 'Oliver', age: 9 },
  { firstName: 'Ragan', lastName: 'Perkinson', age: 1 },
  { firstName: 'Chris', lastName: 'Smith', age: 5 },
  { firstName: 'George', lastName: 'Jungle', age: 17 },
  { firstName: 'Mike', lastName: 'Tyson', age: 16 },
  { firstName: 'Jimmy', lastName: 'Smith', age: 21 },
  { firstName: 'Chris', lastName: 'Thompson', age: 17 }
];

// // CONSOLE LOG OBJECT
// peeps.forEach(function(obj) {
//   console.log(obj);
// });




// // CONSOLE LOG FIRST NAME
// peeps.forEach(function(obj) {
//   console.log(obj.firstName);
// });




// // CONSOLE LOG ONLY IF YOUNGER THAN 15
// var youngerThan15 = peeps.filter(function(obj) {
//   return obj.age < 15;
// });
//
// console.log('younger than 15', youngerThan15);
//
//
// // CONSOLE LOG ONLY IF 15 OR OLDER
// var fifteenAndOlder = peeps.filter(function(obj) {
//   return obj.age >= 15;
// });
//
// console.log('15 and older', fifteenAndOlder);




// // CONSOLE LOG ONLY IF firstName === 'Chris'
//
// var onlyChris = peeps.filter(function(obj) {
//   return obj.firstName === 'Chris';
// });
//
// console.log('only Chris', onlyChris);




// // CONSOLE LOG ONLY IF firstName has letter 'i';
// var hasLetterI = peeps.filter(function(obj) {
//   return obj.firstName.indexOf('i') > -1;
// })
//
// console.log('Name contains the letter "i"', hasLetterI);



// // Return array of peeps' first names
// var firstNames = peeps.map(function(obj) {
//   return obj.firstName;
// });
//
// console.log(firstNames);


// // Return array of peeps' first and last names
// var firstAndLastName = peeps.map(function(obj) {
//   return obj.firstName + ' ' + obj.lastName;
// });
//
// console.log(firstAndLastName);



/// Create a new array with firstName, lastName, age, AND fullName

var objectsWithFullNames = peeps.map(function(obj) {
  return {
    firstName: obj.firstName,
    lastName: obj.lastName,
    age: obj.age,
    fullName: obj.firstName + ' ' + obj.lastName
  }
});

console.log(objectsWithFullNames);
