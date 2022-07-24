import getIcon from "./icons";
let locationName = document.querySelector(".locationName"),
  weatherImg = document.querySelector(".weatherImg"),
  weatherDesc = document.querySelector(".weatherDesc"),
  weatherTempVal = document.querySelector(".weatherTempVal"),
  celUnit = document.querySelector(".celUnit"),
  farUnit = document.querySelector(".farUnit"),
  humidityDesc = document.querySelector(".humidityDesc"),
  pressureDesc = document.querySelector(".pressureDesc"),
  windDesc = document.querySelector(".windDesc"),
  weatherTemp,
  isCel = true;

function updateDom(weatherData) {
  updateText(weatherData);
  updateIcon(weatherData);
  weatherTemp = weatherData.temp;
  updateTemp();
}

function updateText(weatherData) {
  locationName.textContent = weatherData.placeName + ", " + weatherData.country;
  weatherDesc.textContent =
    weatherData.weather + " | " + weatherData.description;

  humidityDesc.textContent = "Humidity: " + weatherData.humidity + "%";
  pressureDesc.textContent = "Pressure: " + weatherData.pressure;
  windDesc.textContent = "Wind: " + weatherData.windSpeed + "mph";
}

function updateIcon(weatherData) {
  weatherImg.src = getIcon(weatherData.icon);
}

farUnit.addEventListener("click", tempToggle);
celUnit.addEventListener("click", tempToggle);

farUnit.classList.toggle("inactive");

function updateTemp() {
  if (isCel == true) {
    weatherTempVal.textContent = weatherTemp;
  } else {
    weatherTempVal.textContent = Math.ceil((weatherTemp * 9) / 5 + 32);
  }
}

function tempToggle() {
  if (isCel == true) {
    convertToFar();
  } else {
    convertToCel();
  }
}

function convertToFar() {
  isCel = false;
  toggleInactive();
  weatherTempVal.textContent = Math.ceil((weatherTemp * 9) / 5 + 32);
}

function convertToCel() {
  isCel = true;
  toggleInactive();
  weatherTempVal.textContent = weatherTemp;
}

function toggleInactive() {
  farUnit.classList.toggle("inactive");
  celUnit.classList.toggle("inactive");
}

export default updateDom;
