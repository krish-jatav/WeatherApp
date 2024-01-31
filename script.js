document.addEventListener('DOMContentLoaded', function() {
    const apiKey = "d70b10a82b699e2ea1f57adbd5f2a18a";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


    async function checkWeather(city) {
        const response = await fetch(apiUrl + `${city}&appid=${apiKey}`);
        const data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        const weatherIcon = document.querySelector(".weather-icon")

        if (data.weather[0].main === "clouds") {
            weatherIcon.src = "images/clouds.png"
        } else if (data.weather[0].main === "Clear") {
            weatherIcon.src = "images/clouds.png"
        } else if (data.weather[0].main === "Rain") {
            weatherIcon.src = "images/rain.png"
        } else if (data.weather[0].main === "Drizzle") {
            weatherIcon.src = "images/drizzle.png"
        } else if (data.weather[0].main === "Mist") {
            weatherIcon.src = "images/mist.png"
        }
        // document.querySelector(".weather").style.display = "block";



    }

    // Initial weather check for a default city (you can change this)
    checkWeather("Bhopal");

    // Event listener for the search button
    document.querySelector('.ri-search-line').addEventListener('click', function() {
        const cityInput = document.querySelector('input').value;
        checkWeather(cityInput);
    });
});