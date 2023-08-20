const url = 'https://api.openweathermap.org/data/2.5/weather?&units=metric';
const ApiKey = "03b3225b55f0186be16f42df77ee964f";

async function check() {
    const city = document.getElementById("City").value;
    console.log(city);
    const response = await fetch(url + `&appid=${ApiKey}` + `&q=${city}`);
    const data = await response.json();
    console.log(data);
    const name = data.name;

    
    const cityElement = document.querySelector(".city");
    const temp = document.querySelector(".temp");
    const humidity=document.querySelector(".Humidity");
    const wind = document.querySelector(".wind_speed");
    const weather_icon=document.querySelector(".weather_icon");

    const weather_main=data.weather[0].main;
	console.log(cityElement);
    
    cityElement.innerHTML = data.name;
    temp.innerHTML=data.main.temp+"°C";
    humidity.innerHTML=data.main.humidity+"%";
    wind.innerHTML=Math.round(data.wind.speed)+" km/h";

    if(weather_main=="Clouds"){
        weather_icon.src="images/clouds.png";
    }
    else if(weather_main=="Clear"){
        weather_icon.src="images/clear.png";   
    }
    else if(weather_main=="Rain"){
        weather_icon.src="images/rain.png";   
    }
    else if(weather_main=="Drizzle"){
        weather_icon.src="images/drizzle.png";   
    }
    else if(weather_main=="Mist"){
        weather_icon.src="images/mist.png";   
    }
    
    else if(weather_main=="Snow"){
        weather_icon.src="images/snow.png";   
    }
    
    
}

check();
