var foodList = document.querySelector('ul');

var promise = $.ajax({
  url: '/api/favoritefoods'
});

promise.done(function(data) {
  for (var i = 0; i < data.foods.length; i++){
    var li = document.createElement('li');

    var food = document.createElement('p');
    food.textContent = data.foods[i];
    li.appendChild(food);


    foodList.appendChild(li);
  }
});
