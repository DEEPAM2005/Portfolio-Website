
const apikey="4ac5b87081689940d83f9304dc010549";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city){
    const response=await fetch(apiUrl + city+ `&appid=${apikey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".details").style.display = "none";
    }

    else if(response.status == "empty"){
        console.log("Enter city name");
    }
    else{ 
    var data= await response.json();
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".windspeed").innerHTML = data.wind.speed + "Km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src= "img/cloud-rembag.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src="img/rain-rembag.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src="img/clear-rembag.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src="img/mist-rembag.png";
    }
    document.querySelector(".weather").style.display="block";
    document.querySelector(".details").style.display = "flex";
    document.querySelector(".error").style.display = "none";

}}

searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value)
});
document.getElementByClassName("city").innerHTML = "CITY";
 checkWeather();

