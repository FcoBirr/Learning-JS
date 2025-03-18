const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "597a1aff6cf923275bc04bbfbe254798";

weatherForm.addEventListener("submit", async event=> {
    event.preventDefault();

    const city = cityInput.value;

    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error){
            console.error(error);
            displayError(error);
        }
    }
    else{
        displayError("Please select a valid city");
    }


});

async function getWeatherData(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    if(!response.ok){
        throw new Error("Could not fetch weather data");
    }
    else{
        return await response.json();
    }
}

function displayWeatherInfo(data) {
    console.log(data)
    const {name: city, 
           main: {temp, humidity}, 
           weather: [{description, id}],
           wind: {speed, deg}} = data;

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisp = document.createElement("p");
    const weatherEmoji = document.createElement("p");
    const windDisplay = document.createElement("p");

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisp.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);
    windDisplay.textContent = `Wind: ${(speed * 3.6).toFixed(1)} kmh ${getWindEmoji(deg)}`

    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisp.classList.add("descDisp");
    weatherEmoji.classList.add("weatherEmoji");
    windDisplay.classList.add("windDisplay");


    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisp);
    card.appendChild(weatherEmoji);
    card.appendChild(windDisplay);
}

function getWeatherEmoji(weatherID){

    switch(true){
        case (weatherID >= 200 && weatherID < 300): return "⛈️";
        case (weatherID >= 300 && weatherID < 400): return "🌧️";
        case (weatherID >= 500 && weatherID < 600): return "🌧️";
        case (weatherID >= 600 && weatherID < 700): return "❄️";
        case (weatherID >= 700 && weatherID < 800): return "🌫️";
        case (weatherID === 800): return "☀️";
        case (weatherID > 800 && weatherID < 810): return "☁️";
        default: return "❓"
    }
}

function getWindEmoji(direction){

    switch(true){
        case (direction >= 335 || direction < 25): return "⬆️";
        case (direction >= 25 && direction < 65): return "↗️";
        case (direction >= 65 && direction < 115): return "➡️";
        case (direction >= 115 && direction < 155): return "↘️";
        case (direction >= 155 && direction < 205): return "⬇️";
        case (direction >= 205 && direction < 245): return "↙️";
        case (direction >= 245 && direction < 295): return "⬅️";
        case (direction >= 295 && direction < 335): return "↖️";
        default: return "❓"
    }
}

function displayError(message){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");
    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay)
}


