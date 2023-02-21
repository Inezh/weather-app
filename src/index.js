
let now = new Date();

let weekDayMain = document.querySelector("#weekDay");
let hours = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
weekDayMain.innerHTML = `${day} ${hours}:${minutes}`;



function searching(event) {
  event.preventDefault();
  let inputValue = document.querySelector("#search");
  let h3 = document.querySelector("#cityName");
  h3.innerHTML = `Searching for ${inputValue.value}`;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searching);


function showTemperature(response) {
  console.log(response.data);
  let temperature = Math.round(response.data.main.temp);
  let temp = document.querySelector("#mein-number");
  temp.innerHTML = `${temperature}°C`;

  let humidity = Math.round(response.data.main.humidity);
  let hum = document.querySelector("#humidity");
  hum.innerHTML = `Humidity: ${humidity}%`;

  let windSpeed = Math.round(response.data.wind.speed * 3.6);
  let wind = document.querySelector("#windSp");
  wind.innerHTML = `Wind: ${windSpeed} km/h`;

  let feelLike = Math.round(response.data.main.feels_like);
  let feel = document.querySelector("#feels-like");
  feel.innerHTML = `Feels like: ${feelLike}°C`;

let iconElement = document.querySelector("#icon");
iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);

  // let cityTime = (response.data.dt);
  // let time = document.querySelector("#time");
  // time.innerHTML = formatDate(response.data.dt * 1000)

  // console.log(response.data.dt)

}

function searching2(event) {
  event.preventDefault();
  let inputValue = document.querySelector("#search");
  let city = inputValue.value;
  let apiKey = "168764a2fd3c9f595ae76224b0bf4cca";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=63214c4281922e3bb72fdf12dada7734`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);

  let h3 = document.querySelector("#cityName");
  h3.innerHTML = `Searching for ${inputValue.value}`;
}

let form2 = document.querySelector("#search-form");
form2.addEventListener("submit", searching2);



