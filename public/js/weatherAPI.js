const fetch = require('node-fetch');

function WeatherAPI () {

}

WeatherAPI.prototype.getWeatherData = function (key, location) {
  // var setLocation = getQueryVariable("location");
  // function getQueryVariable(variable) {
  //   var location = window.location.search.substring(1);
  //   console.log('location is:')
  //   console.log(location)
  // }


  console.log(location)
  var self = this
  fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + location + ',uk&APPID=' + key)
    .then(data => data.json())
    .then(data => {
      let promise = new Promise(function(resolve, reject) {
        setTimeout(() => resolve("done!"), 500);
      });
        promise.then(
          result => returnResults(data, self),
        )
    })
    .catch(err => console.log(err));

    function returnResults (data, self) {
      console.log('complete')
      console.log(data)
    }
}

  module.exports = WeatherAPI
