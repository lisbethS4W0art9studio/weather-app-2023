function displayTemperature(response) {
  let temperatureElement = document.querySelector("temperature");
  let cityElement = document.querySelector("city");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
}

let apiKey = "46bcab46c54344b46e2378407235d572";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
