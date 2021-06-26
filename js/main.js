const $homepageteams = document.querySelector('.homepageteams');
const $playersearchform = document.querySelector('.playersearchform');
const $homepageplayers = document.querySelector('.homepageplayers');
const $tablestats = document.querySelector('.tablestats');
const $tablestatsbody = document.querySelector('.tablestatsbody');
const $playername = document.querySelector('.playername');
const $team = document.querySelector('.team');
const $position = document.querySelector('.position');
const $headerlink = document.querySelector('.headerlink');
const $playerprofilepage = document.querySelector('.playerprofilepage');
const $homepage = document.querySelector('.homepage');

const previousDataJson = localStorage.getItem('playerData');
if (previousDataJson !== null) {
const data = JSON.parse(previousDataJson);
}

function profileStorage(event) {
  const dataJson = JSON.stringify(data);
  localStorage.setItem('playerData', dataJson);
}

window.addEventListener('beforeunload', profileStorage);

// Dropdown Menu of Basketball Teams

function getTeams() {
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', 'https://www.balldontlie.io/api/v1/teams');
  xhttp.responseType = 'json',
  xhttp.addEventListener('load', function () {
    for (var i = 0; i <= xhttp.response.data.length - 1; i++) {
      const $option = document.createElement('option');
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



// Player Search Form

function ballDontLie(player) {
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', 'https://www.balldontlie.io/api/v1/players?search=' + player);
  xhttp.responseType = 'json';
  xhttp.addEventListener('loadstart', function () {
  });
  xhttp.addEventListener('load', function () {
    const storage = [];
    if (xhttp.status === 200) {
      $tablestatsbody.innerHTML = '';
      const firstLast = player.split(' ');
      if ((firstLast[0].toLowerCase() === xhttp.response.data[0].first_name.toLowerCase()) && (firstLast[1].toLowerCase() === xhttp.response.data[0].last_name.toLowerCase())) {
        var playerID
        playerID = xhttp.response.data[0].id;
        $playername.textContent = xhttp.response.data[0].first_name + ' ' + xhttp.response.data[0].last_name;
        $team.textContent = 'Team: ' + xhttp.response.data[0].team.abbreviation;
        $position.textContent = 'Position: ' + xhttp.response.data[0].position;
        for (var i = 2010; i <= 2020; i++) {
          ballDontLieSeasonAvg(i, playerID);
        }
      } else {
        $playername.textContent = 'Player Name';
      }
    }
  });
  xhttp.addEventListener('error', function () {
    failed();
  });
    xhttp.send();
}

function ballDontLieSeasonAvg(season, id) {
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', 'https://www.balldontlie.io/api/v1/season_averages?season=' + season + '&player_ids[]=' + id);
  xhttp.responseType = 'json';
  xhttp.addEventListener('load', function () {
    const queryData = ['season', 'pts', 'ast', 'reb', 'stl', 'blk', 'ft_pct', 'fg3_pct', 'turnover'];
    const $tr = document.createElement('tr');
    $tr.classList.add(queryData[0]);
    for (var i = 0; i <= queryData.length - 1; i++) {
      if (xhttp.response.data[0] !== undefined) {
        const $td = document.createElement('td');
        $td.textContent = xhttp.response.data[0][queryData[i]];
        $td.classList.add(queryData[i]);
        $tr.appendChild($td);
      }
    }
    $tablestatsbody.appendChild($tr);

    for (var x = 1; x <= queryData.length - 1; x++) {
      const name = '.' + queryData[x];
      const statClass = document.querySelectorAll(name);
      storage.push(statClass);
    }
  });
  xhttp.addEventListener('error', function () {
    failed();
  });
  xhttp.send();
}

$playersearchform.addEventListener('submit', function (e) {
  $tablestatsbody.innerHTML = '';
  e.preventDefault();
  ballDontLie($homepageplayers.value);
  const storage = [];
  $homepage.classList.add('hidden');
  $playerprofilepage.classList.remove('hidden');
  $headerlink.classList.remove('hidden');
  if ($playername.textContent === 'Player Name') {
    $playername.textContent = 'Player not found. Please try again.'
  }
  $homepageplayers.value = '';
});
