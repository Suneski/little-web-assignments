var sentence = 'The woman now gave Dorothy a bed to sleep in, and Toto lay down beside her, while the Lion guarded the door of her room so she might not be disturbed. The Scarecrow and the Tin Woodman stood up in a corner and kept quiet all night, although of course they could not sleep.';

var array = sentence.split(' ');

var output = '';


// FOR-LOOP METHOD
// for (var i = 0; i < array.length; i++) {
//   if (array[i].length > output.length) {
//     output = array[i];
//   }
// }
// console.log(output);



// FOR EACH METHOD
array.forEach(function(x) {
  if (x.length > output.length) {
    output = x;
  }
});

console.log(output);
