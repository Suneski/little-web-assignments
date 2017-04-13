var repos = document.querySelector('#repos');
var searchQuery = document.querySelector('#search-query');
var nextButton = document.querySelector('#next-button');
var previousButton = document.querySelector('#previous-button');
var navBar = document.querySelector('nav');
var searchResults = document.querySelector('.search-results');
var totalResults = document.querySelector('.total-results');
var totalRepos = document.querySelector('.total-repos');

var page = 1;
var totalResults;
var pageCount;

function makeAjaxCall() {

  repos.innerHTML = '';

  var promise = $.ajax({
    url: 'https://api.github.com/search/repositories?q=' + searchQuery.value + '&page=' + page
  });








  promise.done(function(data) {

    totalResults = data.total_count;
    pageCount = Math.ceil(totalResults / 30);

    searchResults.textContent = 'Page: ' + page + '/' + pageCount;
    searchResults.style.display = 'inline-block';

    totalRepos.textContent = 'Total Repositories: ' + data.total_count;
    totalRepos.style.display = 'inline-block';

    for (var i = 0; i < data.items.length; i++){
      var anLi = document.createElement('li');

      var image = document.createElement('img');
      image.src = data.items[i].owner.avatar_url;
      anLi.appendChild(image);

      var repoName = document.createElement('a');
      repoName.href = 'https://github.com/' + data.items[i].full_name;
      repoName.textContent = data.items[i].name;
      repoName.target = '_blank';
      repoName.classList.add("bold");
      anLi.appendChild(repoName);

      var userName = document.createElement('a');
      userName.href = 'https://github.com/' + data.items[i].owner.login;
      userName.textContent = 'by: ' + data.items[i].owner.login;
      userName.target = '_blank';
      anLi.appendChild(userName);




      repos.appendChild(anLi);
    }

    if (page === 1) {
      previousButton.style.display = 'inline';
      previousButton.style.color = 'grey';
    }
    else {
      previousButton.style.color = 'rgba(255, 0, 0, 0.6)';

    }

    if (page >= pageCount) {

      nextButton.style.color = 'grey';
    }
    else {
      nextButton.style.display = 'inline';
      nextButton.style.color = 'rgba(255, 0, 0, 0.6)';
    }

  });

}



searchQuery.addEventListener('keyup', function(evt){

  if (evt.keyCode !== 13) {
    page = 1;
    return;
  }


  makeAjaxCall();

});




nextButton.addEventListener('click', function() {

  //increment number
  page += 1;

  if (page >= pageCount) {
    page = pageCount;
  }

  //do ajax call again
  makeAjaxCall();

});




previousButton.addEventListener('click', function() {

  //decrease number
  page -= 1;

  if (page <= 1) {
    page = 1;
  }

  //do ajax call again
  makeAjaxCall();

});
