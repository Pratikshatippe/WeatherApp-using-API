﻿// javascript file for weather.html file to show city, state, condition and temperature from below array.
// use class daydate show date and time
let temperature;
class weather{
getDaydate(){
let today = new Date();
let day = today.getDay();
let daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
let time = (
today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
)
document.getElementById("time").innerHTML = daylist[day]+","+time;
  }

// using api shows current weather of city
getApiData(){
document.getElementById("search").onclick = () =>{
 let select = document.getElementById("list").value;
 fetch("http://api.openweathermap.org/data/2.5/weather?q="+select+"&units=metric&APPID=5299c506b1cefa6863651e1dff0b3cc8")
 .then(response=>response.json()).then(data1 =>{
  //  console.log(data1);
   document.getElementById("city").innerHTML=data1.name;
   temperature = Math.round(data1.main.temp);
   document.getElementById("temp").innerHTML=temperature; 
   document.getElementById("weather").innerHTML=data1.weather[0].main;

   let iconcode = data1.weather[0].icon;
   let iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
   document.getElementById('wicon').src = iconurl;
 });
}
}
}
//Conversion celsius to fahrenheit 
function getFahrenheit(){
        let Fahrenheit = Math.round((temperature * 9/5) + 32); 
        document.getElementById("temp").innerHTML = Fahrenheit;
        document.getElementById("celsius").style.color="rgb(0, 0, 0)";
        document.getElementById("fahrenheit").style.color="rgb(67, 150, 228)";
}
  // Conversion fahrenheit to celsius 
  function getCelsius(){
      document.getElementById("temp").innerHTML = temperature;
      document.getElementById("celsius").style.color="rgb(67, 150, 228)";
      document.getElementById("fahrenheit").style.color="rgb(0, 0, 0)";
}

 
let input = new weather();
input.getDaydate();
input.getApiData();

  
