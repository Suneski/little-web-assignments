var users = document.querySelector('#users');
var searchQuery = document.querySelector('#search-query');
var nextButton = document.querySelector('#next-button');
var previousButton = document.querySelector('#previous-button');

var page = 1;
var totalResults;
var pageCount;


function makeAjaxCall() {
  users.innerHTML = '';

  var promise = $.ajax({
    url: 'https://api.github.com/search/users?q=' + searchQuery.value + '&page=' + page
  });


  promise.done(function(data) {

    totalResults = data.total_count;
    pageCount = Math.ceil(totalResults / 30);

    for (var i = 0; i < data.items.length; i++){
      var anLi = document.createElement('li');

      var login = document.createElement('h2');
      login.textContent = data.items[i].login;
      anLi.appendChild(login);

      var profile = document.createElement('a');
      // profile.textContent = 'Github Profile';
      profile.href = data.items[i].html_url;
      anLi.appendChild(profile);

      var image = document.createElement('img');
      image.src = data.items[i].avatar_url;
      profile.appendChild(image);




      users.appendChild(anLi);
    }

    if (page === 1) {
      previousButton.style.display = 'none';
    }
    else {
      previousButton.style.display = 'inline';
    }

    if (page >= pageCount) {
      nextButton.style.display = 'none';
    }
    else {
      nextButton.style.display = 'inline';
    }


  });



}


searchQuery.addEventListener('keyup', function(evt){

  if (evt.keyCode !== 13) {
    return;
  }

  makeAjaxCall();

});



nextButton.addEventListener('click', function() {

  //increment number
  page += 1;

  //do ajax call again
  makeAjaxCall();

});


previousButton.addEventListener('click', function() {

  //decrease number
  page -= 1;

  //do ajax call again
  makeAjaxCall();

});
