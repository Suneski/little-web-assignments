var numbers = [7, 18, 25, 32, 49];

var randomNumbers = [];
var totalCount = numbers.length;

// FOR-LOOP SYNTAX
// for (var i = 0; i < count; i++)
while (numbers.length > 0) {
  var randomNumber = Math.floor(Math.random() * numbers.length);

  randomNumbers.push(numbers[randomNumber]);
  numbers.splice(randomNumber, 1);
}

console.log(randomNumbers);





var pokemon = ['snorlax', 'dragonite', 'porygon-z', 'raichu', 'mewtwo'];

var randomPokemonArray = [];
var count = pokemon.length;

while (pokemon.length > 0) {
  var randomPokemon = Math.floor(Math.random() * pokemon.length);

  randomPokemonArray.push(pokemon[randomPokemon]);
  pokemon.splice(randomPokemon, 1);
}


console.log(randomPokemonArray);
