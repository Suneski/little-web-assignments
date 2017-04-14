var repos = document.querySelector('#repos');
var template = document.querySelector('#list-template').innerHTML;


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



    repos.innerHTML = '';

    var totalHtml = '';

    for (var i = 0; i < data.items.length; i++){

      var items = data.items[i];

      var imageSrc = items.owner.avatar_url;

      var repoNameHref = 'https://github.com/' + items.full_name;
      var repoNameContent = items.name;

      var userNameHref = 'https://github.com/' + items.owner.login;
      var userNameContent = 'by: ' + items.owner.login;

      var html = Mustache.render(template, {
        imageSrc: imageSrc,
        repoNameHref: repoNameHref,
        repoNameContent: repoNameContent,
        userNameHref: userNameHref,
        userNameContent: userNameContent
      });


      totalHtml += html;
    }

    repos.innerHTML = totalHtml;

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
