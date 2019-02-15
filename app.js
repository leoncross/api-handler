const fetch = require('node-fetch');

var setLocation = getQueryVariable("location");
function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
}


var self = this
fetch('http://api.openweathermap.org/data/2.5/forecast?q=london,uk&APPID=58c78eb23a6c145f7916168937c977c6')
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
