
  function formatDate() {
  let currentTime = new Date();

  let currenthour = currentTime.getHours();
  if (currenthour < 10) {
    currenthour = `0${currenthour}`;
  }
  let currentminute = currentTime.getMinutes();
  if (currentminute < 10) {
    currentminute = `0${currentminute}`;
  }
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[currentTime.getDay()];

  let time = document.querySelector("p");
  time.innerHTML = `${day} ${currenthour}:${currentminute} `;
}
formatDate();

/* changing the city name*/
function displayForecast() {
  let forecastElement = document.querySelector("#forecast");
  let forecastHTML = `<div class="row">`;
  let days = ["Thur", "Sat", "Sun", "Mon", "Tue", "Wed"];
  days.forEach(function (day) {
    forecastHTML =
      forecastHTML +
      ` 
            <div class="col-2">
              <div class="weather-forecast-date">${day}</div>

              <div class="weather-emoji"></div>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
                class="forecast-image"
              />
              <br />
              <div class="temperature-container">
                <span class="temperature temperature-1">18°</span>
                <span class="temperature temperature-2">13°</span>
              </div>
            </div>
           `;
  });
   forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
function search(city) {
  let apiKey = "aac97fb2fbt9362853a0a43aca162o74";

  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`; //
  axios.get(apiUrl).then(showTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text-input").value;
  search(city);
}

let form = document.querySelector("#search-form");

form.addEventListener("submit", handleSubmit);

function showCelsiusTemp(event) {
  event.preventDefault;
  let celsiusTemp = document.querySelector("#celsius");
  clickcelcius.classList.add("active");
  clickfaren.classList.remove("active");
  celsiusTemp.innerHTML = Math.round(celsiusTemperature);
}

function showFahrenheitTemp(event) {
  event.preventDefault();
  let celsiusTemp = document.querySelector("#celsius");
  //remove class from celcuis link//
  clickcelcius.classList.remove("active");
  clickfaren.classList.add("active");
  let fahrenheitTemp = (celsiusTemperature * 9) / 5 + 32;
  celsiusTemp.innerHTML = Math.round(fahrenheitTemp);
}

let clickcelcius = document.querySelector("#celcius-link");
clickcelcius.addEventListener("click", showCelsiusTemp);

let clickfaren = document.querySelector("#faren-link");
clickfaren.addEventListener("click", showFahrenheitTemp);

/*api sec*/
  function getForeCast(coordinates) {
  console.log(coordinates);
  apiKey = "fb2fbt9362853a0a43aca162o74";
  apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${coordinates.longitude}&lat=${coordinates.latitude}&key=${apiUrl}$units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function showTemperature(response) {
  document.querySelector("#city").innerHTML = response.data.city;

  document.querySelector("#celsius").innerHTML = celsiusTemperature;

  celsiusTemperature = Math.round(response.data.temperature.current);

  document.querySelector(
    "#humidity"
  ).innerHTML = `Humidity:${response.data.temperature.humidity}%`;

  document.querySelector("#wind").innerHTML = `Wind:${Math.round(
    response.data.wind.speed
  )}km/hr`;

  document.querySelector("#description").innerHTML =
    response.data.condition.description;

  document
    .querySelector("#weather-icon")
    .setAttribute(
      "src",
      `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon_url}`
    );
  document
    .querySelector("#weather-icon")
    .setAttribute("alt", response.data.condition.description);
  getForeCast(response.data.coordinates);
}
function searchPosition(position) {
  let apiKey = "aac97fb2fbt9362853a0a43aca162o74";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${position.coordinates.longitude}&lat=${position.coordinates.latitude}&key=${apiKey}&units=metric`; //
  axios.get(apiUrl).then(showTemperature);
}
function getCurrentTemp(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchPosition);
}

let currentLocationButton = document.querySelector("#current");
currentLocationButton.addEventListener("click", getCurrentTemp);

let celsiusTemperature = null;

search("Nairobi");


  
  

  
    
  


