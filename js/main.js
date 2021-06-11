$.ajax({
  method: 'GET',
  url: 'https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json',
  data: 'json',
  success: function (data) {
    console.log(data);
  },
})
