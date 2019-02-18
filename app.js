const fetch = require('node-fetch');
require('dotenv').config()

var setLocation = getQueryVariable("location");
function getQueryVariable(variable) {
  var location = window.location.search.substring(1);
}


var self = this
fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + location + ',uk&APPID=' + process.env.API_KEY)
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
    self.result = data
  }
