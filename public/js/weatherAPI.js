const fetch = require('node-fetch');

function WeatherAPI () {
  this.weatherData
}

WeatherAPI.prototype.getWeatherData = function (key, location) {
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
    self.weatherData = data
  }
}

module.exports = WeatherAPI
