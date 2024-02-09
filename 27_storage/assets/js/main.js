const API_KEY = '45d460e17b3eb935566f52f9298a4c37';
const btn = document.getElementById('weather');


btn.onclick = function(){
    const city = document.getElementById('search').value;
    if (city !== ''){
        checkTime(city);
    } else {
        toast.error('Enter city title')
    }
}

function checkTime(city){
    const currentTime = new Date().getTime();
    const lastRequestTime = localStorage.getItem('lastRequestTime');
    if (lastRequestTime) {
        const diffHours = (currentTime - parseInt(lastRequestTime)) / (1000 * 60 * 60);
        if (diffHours < 2) {
            toast.info('Information updated once every 2 hours');
            const storedWeatherData = JSON.parse(localStorage.getItem('weatherData'));
            displayWeather(storedWeatherData);
            return;
        }
    }
    searchWeather(city);
}

async function searchWeather(city){
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&units=meter/sec`);
    const json = await response.json();
    if (json.cod === 200){

        localStorage.setItem('lastRequestTime', new Date().getTime().toString());
        localStorage.setItem('weatherData', JSON.stringify(json));
        displayWeather(json);
    } else {
        toast.error(`${json.message}`)
    }
}

function displayWeather(data) {
    const weatherList = document.getElementById('weather-list');
    weatherList.innerHTML = weatherHTML(data);
}

function weatherHTML(data){
    return `<div class="card mb-3 mt-5 border-primary" style="max-width: 540px;">
                <div class="row g-0">
                <div class="col-md-4 weather-block">
                    <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" class="img-fluid rounded-start weather-img">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                    <h5 class="card-title"><b>${data.name}</b></h5>
                    <p class="card-text">${data.weather[0].main}</p>
                    <p class="card-text"><span class="badge text-bg-primary">Temperature</span>  ${(parseInt(data.main.temp))} C</p>
                    <p class="card-text"><span class="badge text-bg-primary">Feels like</span>  ${(parseInt(data.main.feels_like))} C</p>
                    <p class="card-text"><span class="badge text-bg-primary">Wind speed</span>  ${data.wind.speed} meter/sec</p>
                    <p class="card-text"> <span class="badge text-bg-primary">Sunrise time</span>  ${(new Date(data.sys.sunrise * 1000)).toLocaleTimeString()}</p>
                    <p class="card-text"><span class="badge text-bg-primary">Sunset time</span>  ${(new Date(data.sys.sunset * 1000)).toLocaleTimeString()}</p>
                    </div>
                </div>
                </div>
            </div>`
}