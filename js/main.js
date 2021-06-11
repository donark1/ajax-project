// Basketball Teams
$.ajax({
  method: 'GET',
  url: 'https://www.balldontlie.io/api/v1/teams',
  data: 'json',
  success: function (data) {
    console.log("Team:", data);
  },
})

// Basketball Players
$.ajax({
  method: 'GET',
  url: 'https://www.balldontlie.io/api/v1/players',
  data: 'json',
  success: function (data) {
    console.log("Player:", data);
  },
})

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
  url: 'https://www.balldontlie.io/api/v1/season_averages?season=2018&player_ids[]=1&player_ids[]=2 ',
  data: 'json',
  success: function (data) {
    console.log("Season Averages:", data);
  },
})
