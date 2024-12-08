const apiKey = "82d9dcc1445eed9692a69e2f14f9999b";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric" ;

const searchbox = document.querySelector('.js-input');
const searchbutton = document.querySelector('.js-search-button');
const weatherIcon = document.querySelector('.js-weather-icon');

async function checkWeather(city){
    const response = await fetch(apiURL + `&q=${city}` + `&appid=${apiKey}`);

    if (response.status == 404){
        document.querySelector('.error').style.display = 'block';
    } else{
        document.querySelector('.weather').style.display = 'block';
        document.querySelector('.error').style.display = 'none';

        
        var data = await response.json();

        if (data.weather[0].main == 'Clouds'){
            weatherIcon.src = "./images/clouds.png";
        }else if (data.weather[0].main == 'Drizzle'){
            weatherIcon.src = "./images/drizzle.png"
        }else if (data.weather[0].main == 'Clear'){
            weatherIcon.src = "./images/clear.png";
        }else if (data.weather[0].main == 'Rain'){
            weatherIcon.src = "./images/rain.png";
        }else if (data.weather[0].main === 'Mist'){
            weatherIcon.src = "./images/mist.png";
        }else if (data.weather[0].main === 'Snow'){
            weatherIcon.src = "./images/snow.png";
        }

        document.querySelector('.city').innerHTML= data.name;
        document.querySelector('.temp').innerHTML= Math.round(data.main.temp)+"&deg;C";
        document.querySelector('.humidity').innerHTML= data.main.humidity+ "%";
        document.querySelector('.wind').innerHTML= data.wind.speed + "km/h";

    }
}

searchbutton.addEventListener('click',() => {
    checkWeather(searchbox.value);
});

/*  ---Developers note---
this code are all referred from youtube(https://www.youtube.com/watch?v=MIYQR-Ybrn4&t=232s)
 // need to add weather animation instead of  weather icon
 //need for background display
 //adding location of the device for auto display 
 //debugg

 ##lessons learned
 1. using linear gradient as background in css
 2. using boxsizing: border-box;
 3. linking to other url and fetching data
 */
