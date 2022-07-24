import { getWeather } from "./modules/fetchData";
import { filterData } from "./modules/filterData";
import updateDom from "./modules/dom";

const searchBtn = document.querySelector(".searchBtn"),
  locationInput = document.getElementById("search");

let locationSearch;

searchBtn.addEventListener("click", searchClicked);
document.addEventListener("keypress", function (e) {
  if (e.keyCode === 13 || e.which === 13) {
    e.preventDefault();
    searchClicked();
    return false;
  }
});

function searchClicked() {
  locationSearch = locationInput.value;
  startSearch();
}

function startSearch() {
  getWeather(locationSearch).then((result) => {
    if (result.cod != "200") {
      alert("Location not found");
    } else {
      let weatherData = filterData(result);
      updateDom(weatherData);
    }
  });
}

function initialize() {
  locationSearch = "london";
  startSearch();
}
initialize();
