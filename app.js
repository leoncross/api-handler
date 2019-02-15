const fetch = require('node-fetch');

$( document ).ready(function() {
  Url = {
    get get(){
      var vars= {};
      if(window.location.search.length!==0)
        window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value){
          key=decodeURIComponent(key);
          if(typeof vars[key]==="undefined") {vars[key]= decodeURIComponent(value);}
          else {vars[key]= [].concat(vars[key], decodeURIComponent(value));}
        });
      return vars;
    }
  };
  Url.get.location
  location = Url.get.location

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
    self.result = data
  }

});
