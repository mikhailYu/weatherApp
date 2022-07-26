async function getWeather(location) {
  try {
    let response = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=" +
        location +
        "&APPID=01c00abe30f84eddc02f6860fd722dad&units=metric",
      { mode: "cors" }
    );
    let retrievedData = await response.json();

    return retrievedData;
  } catch (err) {
    console.log(err);
  }
}

export { getWeather };
