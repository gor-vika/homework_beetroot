"use strict";

var API_KEY = '45d460e17b3eb935566f52f9298a4c37';
var btn = document.getElementById('weather');

btn.onclick = function () {
  var city = document.getElementById('search').value;

  if (city !== '') {
    checkTime(city);
  } else {
    toast.error('Enter city title');
  }
};

function checkTime(city) {
  var currentTime = new Date().getTime();
  var lastRequestTime = localStorage.getItem('lastRequestTime');

  if (lastRequestTime) {
    var diffHours = (currentTime - parseInt(lastRequestTime)) / (1000 * 60 * 60);

    if (diffHours < 2) {
      toast.info('Information updated once every 2 hours');
      var storedWeatherData = JSON.parse(localStorage.getItem('weatherData'));
      displayWeather(storedWeatherData);
      return;
    }
  }

  searchWeather(city);
}

function searchWeather(city) {
  var response, json;
  return regeneratorRuntime.async(function searchWeather$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(city, "&appid=").concat(API_KEY, "&units=metric&units=meter/sec")));

        case 2:
          response = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          json = _context.sent;

          if (json.cod === 200) {
            localStorage.setItem('lastRequestTime', new Date().getTime().toString());
            localStorage.setItem('weatherData', JSON.stringify(json));
            displayWeather(json);
          } else {
            toast.error("".concat(json.message));
          }

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}

function displayWeather(data) {
  var weatherList = document.getElementById('weather-list');
  weatherList.innerHTML = weatherHTML(data);
}

function weatherHTML(data) {
  return "<div class=\"card mb-3 mt-5 border-primary\" style=\"max-width: 540px;\">\n                <div class=\"row g-0\">\n                <div class=\"col-md-4 weather-block\">\n                    <img src=\"http://openweathermap.org/img/w/".concat(data.weather[0].icon, ".png\" class=\"img-fluid rounded-start weather-img\">\n                </div>\n                <div class=\"col-md-8\">\n                    <div class=\"card-body\">\n                    <h5 class=\"card-title\"><b>").concat(data.name, "</b></h5>\n                    <p class=\"card-text\">").concat(data.weather[0].main, "</p>\n                    <p class=\"card-text\"><span class=\"badge text-bg-primary\">Temperature</span>  ").concat(parseInt(data.main.temp), " C</p>\n                    <p class=\"card-text\"><span class=\"badge text-bg-primary\">Feels like</span>  ").concat(parseInt(data.main.feels_like), " C</p>\n                    <p class=\"card-text\"><span class=\"badge text-bg-primary\">Wind speed</span>  ").concat(data.wind.speed, " meter/sec</p>\n                    <p class=\"card-text\"> <span class=\"badge text-bg-primary\">Sunrise time</span>  ").concat(new Date(data.sys.sunrise * 1000).toLocaleTimeString(), "</p>\n                    <p class=\"card-text\"><span class=\"badge text-bg-primary\">Sunset time</span>  ").concat(new Date(data.sys.sunset * 1000).toLocaleTimeString(), "</p>\n                    </div>\n                </div>\n                </div>\n            </div>");
}