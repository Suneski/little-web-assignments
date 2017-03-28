var theHeader = document.querySelector('#the-header');
theHeader.textContent = 'Please leave me alone...';


function clickTheHeader() {
  console.log('clicked!');
  theHeader.textContent = "You killed my header, you sick, sick individual!"
}

theHeader.addEventListener('click', clickTheHeader);







theHeader.addEventListener('mouseover', function() {
  theHeader.classList.add('hovery');
  theHeader.textContent = "What?? What are you doing? Go away!!"
});

theHeader.addEventListener('click', function() {
  theHeader.classList.remove('hovery');
});

theHeader.addEventListener('mouseout', function() {
  console.log('the mouse has left the station');
});




var theP = document.querySelector('.the-p');

theP.addEventListener('click', function() {
  console.log('clicked the paragraph');
  theP.textContent = "Also changed this on click."
  theP.classList.toggle('on');
});
