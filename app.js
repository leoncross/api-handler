require('dotenv').config()
var path = require('path');
const fetch = require('node-fetch');
const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));

app.get('/weather', function(req, res){
  res.send(req.query);
  // var WeatherAPI = require ('./public/js/weatherAPI.js')
  // api = new WeatherAPI()
  // api.getWeatherData(process.env.WEATHER_KEY, id)
  // res.render('index', {
  // });
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
