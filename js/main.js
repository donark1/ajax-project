// Basketball Teams

function getTeams() {
  $.ajax({
    method: 'GET',
    url: 'https://www.balldontlie.io/api/v1/teams',
    data: 'json',
    success: function (data) {
      console.log("Team:", data);
    },
  })
}

getTeams();

// Basketball Players

function getPlayers() {
  $.ajax({
    method: 'GET',
    url: 'https://www.balldontlie.io/api/v1/players',
    data: 'json',
    success: function (data) {
      console.log("Player:", data);
    },
  })
}

getPlayers();

// BasketBall Game Stats
$.ajax({
  method: 'GET',
  url: 'https://www.balldontlie.io/api/v1/stats',
  data: 'json',
  success: function (data) {
    console.log("Game Stats:", data);
  },
})

// Basketball Player Season Averages Example
$.ajax({
  method: 'GET',
  url: 'https://www.balldontlie.io/api/v1/stats?seasons[]=2015',
  data: 'json',
  success: function (data) {
    console.log("Seasons:", data);
  },
})
