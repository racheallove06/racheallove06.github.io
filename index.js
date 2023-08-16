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
function search(city) {
  let apiKey = "05196328f3a63c6924aa5222ffc3236b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`; //
  axios.get(apiUrl).then(showTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text-input").value;
  search(city);
}

let form = document.querySelector("#search-form");

form.addEventListener("submit", handleSubmit);

/*function click(event) {
  event.preventDefault;
  let changecelsius = document.querySelector("#celsius");
  changecelsius.innerHTML = "24"; 
}

function faren(event) {
  event.preventDefault();
  let changefaren = document.querySelector("#celsius");
  changefaren.innerHTML = `76`;
}

let clickcelcius = document.querySelector("#celcius-link");
clickcelcius.addEventListener("click", click);
let clickfaren = document.querySelector("#faren-link");
clickfaren.addEventListener("click", faren);*/

/*api sec*/

function showTemperature(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#celsius").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector(
    "#humidity"
  ).innerHTML = `Humidity:${response.data.main.humidity}%`;
  document.querySelector("#wind").innerHTML = `Wind:${Math.round(
    response.data.wind.speed
  )}km/hr`;
  document.querySelector("#cloudy").innerHTML = response.data.weather[0].main;
}
function searchPosition(position) {
  let apiKey = "05196328f3a63c6924aa5222ffc3236b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`; //
  axios.get(apiUrl).then(showTemperature);
}
function getCurrentTemp(event) {
  event.preventDefault;
  navigator.geolocation.getCurrentPosition(searchPosition);
}

let currentLocationButton = document.querySelector("#current");
currentLocationButton.addEventListener("click", getCurrentTemp);

search("Nairobi");

/*function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  

  
    
  


