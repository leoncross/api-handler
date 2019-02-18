(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
exports.default = global.fetch.bind(global);

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;
},{}],2:[function(require,module,exports){
const fetch = require('node-fetch');

function WeatherAPI () {

}

WeatherAPI.prototype.getWeatherData = function (key) {
  // var setLocation = getQueryVariable("location");
  // function getQueryVariable(variable) {
  //   var location = window.location.search.substring(1);
  //   console.log('location is:')
  //   console.log(location)
  // }

  location = 'london'
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

},{"node-fetch":1}]},{},[2]);
