require('dotenv').config()
var path = require('path');
const fetch = require('node-fetch');
const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function(req, res){
  res.render('index', {
  });
});

app.get('/weather', function(req, res){
  location = req.query.location
  console.log(location)
  var WeatherAPI = require ('./public/js/weatherAPI.js')
  api = new WeatherAPI()
  api.getWeatherData(process.env.WEATHER_KEY, location)
  setTimeout(function(){ res.send(api.weatherData) }, 2000);
});


app.listen(port, () => console.log(`app listening on port ${port}!`))
