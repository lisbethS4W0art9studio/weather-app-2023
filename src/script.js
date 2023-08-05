function displayTemperature(response) {
  console.log(response.data.main.temp);
}

let apiKey = "46bcab46c54344b46e2378407235d572";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
