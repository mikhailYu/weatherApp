function filterData(result) {
  let weatherData = {
    placeName: result.name,
    weather: result.weather[0].main,
    description: result.weather[0].description,
    icon: result.weather[0].icon,
    humidity: result.main.humidity,
    pressure: result.main.pressure,
    temp: Math.ceil(result.main.temp),
    windSpeed: result.wind.speed,
    country: result.sys.country,
  };

  return weatherData;
}

export { filterData };
