const city ="Murree";
const apikey = "&appid=69cd75666f09f54ed1bbab484c6f1618";
const apiUrl =`https://api.openweathermap.org/data/2.5/weather?&units=metric&q=`;


 const myInput = document.querySelector("#weather-input")
 const searchBtn = document.querySelector("#button")
 const weatherImg = document.querySelector("#weather-image");
 
  // function


  function fetchWeather(city){
    fetch(apiUrl + city + apikey)
     .then((response )=>{
        if(response.status =="404"){
          document.querySelector("#error").style.display = "block";
      }else if(response.status =="200"){
        document.querySelector("#error").style.display = "none";
        }
    
      return response.json(); 
    })
    .then((data) =>{
      console.log(data)

      

    const city = document.querySelector("#city").innerHTML = data.name;
    const temp = document.querySelector("#temp").innerHTML = Math.round(data.main.temp) +"°C";
    const wind = document.querySelector("#wind").innerHTML = data.wind.speed +"Km/h" ;
    const humidity = document.querySelector("#humidity").innerHTML = data.main.humidity +"%";
            
      //  images

         switch (data.weather[0].main) {
          case "Rain":
               weatherImg.src = "rainy.png";
               break;
           case "Clouds":
               weatherImg.src = "cloudy.png";
               break;
           case "Clear":
              weatherImg.src = "clear.png";
               break;
           case "Drizzle":
               weatherImg.src = "drizzle.png";
              break;
           case "Thunderstorm":
               weatherImg.src = "thunder.png";
               break;
           case "Sunny":
               weatherImg.src = "sunny.png";
               break;
           default:
               weatherImg.src = "rainy.png"; 
       }
      

   })
     .catch((error) =>{
        console.error("Error fetching weather:",error);
      }); 
  }

   searchBtn.addEventListener("click",()=>{
    fetchWeather(myInput.value)
   })
  
   
      

















        