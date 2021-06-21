const $homepageteams = document.querySelector('.homepageteams');

// Basketball Teams

function getTeams() {
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', 'https://www.balldontlie.io/api/v1/teams');
  xhttp.responseType = 'json',

  xhttp.addEventListener('load', function () {
    for (var i = 0; i <= xhttp.response.data.length - 1; i++) {
      var $option = document.createElement('option');
      $option.textContent = xhttp.response.data[i].abbreviation;
      $homepageteams.appendChild($option);
    }
  });
  xhttp.addEventListener('error', function () {
    failed();
  });
  xhttp.send();

}
getTeams();
