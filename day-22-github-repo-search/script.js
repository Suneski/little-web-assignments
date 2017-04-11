var repos = document.querySelector('#repos');
var searchQuery = document.querySelector('#search-query');


searchQuery.addEventListener('keyup', function(evt){

  if (evt.keyCode !== 13) {
    return;
  }

  repos.innerHTML = '';

  var promise = $.ajax({
    url: 'https://api.github.com/search/repositories?q=' + searchQuery.value
  });


  promise.done(function(data) {

    for (var i = 0; i < data.items.length; i++){
      var anLi = document.createElement('li');

      var image = document.createElement('img');
      image.src = data.items[i].owner.avatar_url;
      anLi.appendChild(image);

      var repoName = document.createElement('a');
      repoName.href = 'https://github.com/' + data.items[i].full_name;
      repoName.textContent = data.items[i].name;
      repoName.target = '_blank';
      anLi.appendChild(repoName);

      var userName = document.createElement('a');
      userName.href = 'https://github.com/' + data.items[i].owner.login;
      userName.textContent = 'by: ' + data.items[i].owner.login;
      userName.target = '_blank';
      anLi.appendChild(userName);

      repos.appendChild(anLi);
    }
  });

});
