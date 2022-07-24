(()=>{"use strict";const e=[{iconID:"01",src:"./images/01clearSky.png"},{iconID:"02",src:"./images/02fewClouds.png"},{iconID:"03",src:"./images/03ScatteredClouds.png"},{iconID:"04",src:"./images/03ScatteredClouds.png"},{iconID:"09",src:"./images/09showers.png"},{iconID:"10",src:"./images/09showers.png"},{iconID:"11",src:"./images/11thunderstorm.png"},{iconID:"13",src:"./images/13snow.png"},{iconID:"50",src:"./images/50mist.png"}];let t,n=document.querySelector(".locationName"),c=document.querySelector(".weatherImg"),i=document.querySelector(".weatherDesc"),r=document.querySelector(".weatherTempVal"),o=document.querySelector(".celUnit"),s=document.querySelector(".farUnit"),a=document.querySelector(".humidityDesc"),u=document.querySelector(".pressureDesc"),d=document.querySelector(".windDesc"),m=!0;function l(){1==m?(m=!1,p(),r.textContent=Math.ceil(9*t/5+32)):(m=!0,p(),r.textContent=t)}function p(){s.classList.toggle("inactive"),o.classList.toggle("inactive")}s.addEventListener("click",l),o.addEventListener("click",l),s.classList.toggle("inactive");const h=function(o){!function(e){n.textContent=e.placeName+", "+e.country,i.textContent=e.weather+" | "+e.description,a.textContent="Humidity: "+e.humidity+"%",u.textContent="Pressure: "+e.pressure,d.textContent="Wind: "+e.windSpeed+"mph"}(o),function(t){c.src=function(t){let n=t.slice(0,2);return e.find((function(e){return e.iconID===n})).src}(t.icon)}(o),t=o.temp,r.textContent=1==m?t:Math.ceil(9*t/5+32)},g=document.querySelector(".searchBtn"),y=document.getElementById("search");let f;function w(){f=y.value,D()}function D(){(async function(e){try{let t=await fetch("http://api.openweathermap.org/data/2.5/weather?q="+e+"&APPID=01c00abe30f84eddc02f6860fd722dad&units=metric");return await t.json()}catch(e){alert(e)}})(f).then((e=>{if("200"!=e.cod)alert("Location not found");else{let t=function(e){return{placeName:e.name,weather:e.weather[0].main,description:e.weather[0].description,icon:e.weather[0].icon,humidity:e.main.humidity,pressure:e.main.pressure,temp:Math.ceil(e.main.temp),windSpeed:e.wind.speed,country:e.sys.country}}(e);h(t)}}))}g.addEventListener("click",w),document.addEventListener("keypress",(function(e){if(13===e.keyCode||13===e.which)return e.preventDefault(),w(),!1})),f="london",D()})();