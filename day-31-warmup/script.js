var inventory = {
  eggs: 247,
  stripsOfBacon: 200,
  cheeseUnits: 143
}


function fullfillOrder(orders) {
  // Implement this
  for (var i = 0; i < orders.omelets; i++) {
    inventory.eggs -= 3;
    inventory.stripsOfBacon -= 2;
    inventory.cheeseUnites -= 1;
  }
  for (var i = 0; i < orders.eggPlates; i++) {
    inventory.eggs -= 2;
    inventory.stripsOfBacon -= 3;
  }

  console.log("remaining eggs: " + inventory.eggs, "remaining bacon: " + inventory.stripsOfBacon, "remaining cheeseUnits: " + inventory.cheeseUnits)
}


//every omelet uses 3 eggs, 2 strips of bacon, and 1 cheese unit
//every egg plate uses 2 eggs and 3 strips of bacon
fullfillOrder({
  omelets: 4, // (3 eggs, 2 strips of bacon, and 1 cheese unit) (total: 12 eggs, 8 pieces of bacon, 4 cheese units)
  eggPlates: 12 // (2 eggs, 3 strips of bacon) (total: 24 eggs, 36 strips of bacon)
});




// How many eggs do you have left?
// How many strips of bacon do you have left?
// How many units of cheese do you have left?
