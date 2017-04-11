var users = document.querySelector('#users');
var searchQuery = document.querySelector('#search-query');


searchQuery.addEventListener('keyup', function(evt){

  if (evt.keyCode !== 13) {
    return;
  }

  users.innerHTML = '';

  var promise = $.ajax({
    url: 'https://api.github.com/search/users?q=' + searchQuery.value
  });


  promise.done(function(data) {

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
  });

});
