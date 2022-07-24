const iconsList = [
  { iconID: "01", src: "./images/01clearSky.png" },
  { iconID: "02", src: "./images/02fewClouds.png" },
  { iconID: "03", src: "./images/03ScatteredClouds.png" },
  { iconID: "04", src: "./images/03ScatteredClouds.png" },
  { iconID: "09", src: "./images/09showers.png" },
  { iconID: "10", src: "./images/09showers.png" },
  { iconID: "11", src: "./images/11thunderstorm.png" },
  { iconID: "13", src: "./images/13snow.png" },
  { iconID: "50", src: "./images/50mist.png" },
];
function getIcon(icon) {
  let iconSearch = icon.slice(0, 2);
  function isIcon(iconArr) {
    return iconArr.iconID === iconSearch;
  }
  return iconsList.find(isIcon).src;
}

export default getIcon;
