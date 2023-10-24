window.onload = () => {
    
 
  //navbar code
  const mobile_nav = document.querySelector(".mobile-navbar-btn");
  const nav_header = document.querySelector(".header");
  
  const toggleNavbar = () => {
    nav_header.classList.toggle("active");
  };
  
  mobile_nav.addEventListener("click", () => toggleNavbar());


  //Input search city recommandation code
  const search = document.getElementById("city");
  const matchList = document.getElementById("list");

  const searchStates = async (searchText) => {
    const response = await fetch("data.json");
    const city = await response.json();

    // Get matches to current text input
    let matches = city.filter((element) => {
      const regex = new RegExp(`^${searchText}`, "gi");
      return element.city.match(regex) || element.state.match(regex);
    });

    if (searchText == 0) {
      matches = [];
    }

    outputHtml(matches);
  };

  const outputHtml = (matches) => {
    if (matches.length > 0) {
      const html = matches.map(
          (element) =>
            // `<div class="match" data-city="${element.city}">${element.city}</div>`
            `<option value="${element.city}" class="match" data-city="${element.city}">`
        )
        .join(" ");
      console.log(html);
         matchList.innerHTML = html;

    } else {
      matchList.innerHTML = "";
    }
  };

  search.addEventListener("input", () => searchStates(search.value));



let  functionDate =(data)=>{
    let a = new Date(data*1000);
    let b = a.toLocaleTimeString();
    return b ;
}



  const options = {
    method: "GET",
    headers: {
      'X-RapidAPI-Key': '655cda7e5fmshbadaae8536313d0p19421ejsncf3e51386016',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };
    //So without using get element by ID I can also accessID directly
    const myWeather = async(city) => {
      const preloader = document.getElementById("loader");
      preloader.style.display = "flex";
      let a ;
          let d  = new Date();

   await fetch(
      'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city,
      options
    )
      .then((response) => {
       console.log(response.ok);
       console.log(response);
        a = response.ok ;
        return response.json() ;
    })
      .then((response) => {

        
        const cityNameR = document.getElementById("cityName");
        cityNameR.innerHTML = city.substring(0, 1).toUpperCase() + city.substring(1);
         
        const cloud_pctR = document.getElementById("clould_pct")
        cloud_pctR.innerHTML = response.cloud_pct

        const tempR = document.getElementById("temp");
        tempR.innerHTML = response.temp;
        const tempR1 = document.getElementById("temp1");
        tempR1.innerHTML = response.temp;

        const feels_likeR = document.getElementById("feels_like");
        feels_likeR.innerHTML = response.feels_like;

        const humidityR = document.getElementById("humidity");
        humidityR.innerHTML = response.humidity;
        const humidityR1 = document.getElementById("humidity1");
        humidityR1.innerHTML = response.humidity;

        const min_tempR = document.getElementById("min_temp");
        min_tempR.innerHTML = response.min_temp;

        const max_tempR = document.getElementById("max_temp");
        max_tempR.innerHTML = response.max_temp;

        const wind_speedR = document.getElementById("wind_speed");
        wind_speedR.innerHTML = response.wind_speed;
        const wind_speedR1 = document.getElementById("wind_speed1");
        wind_speedR1.innerHTML = response.wind_speed;

        const wind_degreesR = document.getElementById("wind_degrees");
        wind_degreesR.innerHTML = response.wind_degrees;

        const sunriseR = document.getElementById("sunrise");
        // sunriseR.innerHTML = response.sunrise;
        sunriseR.innerHTML = functionDate(response.sunrise);

        const sunsetR = document.getElementById("sunset");
        sunsetR.innerHTML = functionDate(response.sunset) ;

        if (!a) {
          const message = `Error: Could not fetch weather data for ${city}. Please check the city name or try after some time.`
          alert(message) ;
          window.location.reload();
        }
      }).catch((err) => console.error(err));
      return a ;
      
       
  };

 


//-----------------------------------------------------------------------------------------

  //Weather information for other common city(4 City)


const myWeatherA = async(city) => {
      let a ;

 await fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
  .then((response) => {
    console.log(response.ok);
    console.log(response);
     a = response.ok ;
     return response.json() ;
  }) .then((response)=>{
      
      const cityNameR = document.getElementById("cityNameA");
      cityNameR.innerHTML = city.substring(0, 1).toUpperCase() + city.substring(1);
       
      const cloud_pctR = document.getElementById("clould_pctA")
      cloud_pctR.innerHTML = response.cloud_pct

      const tempR = document.getElementById("tempA");
      tempR.innerHTML = response.temp;


      const feels_likeR = document.getElementById("feels_likeA");
      feels_likeR.innerHTML = response.feels_like;

      const humidityR = document.getElementById("humidityA");
      humidityR.innerHTML = response.humidity;

      const min_tempR = document.getElementById("min_tempA");
      min_tempR.innerHTML = response.min_temp;

      const max_tempR = document.getElementById("max_tempA");
      max_tempR.innerHTML = response.max_temp;

      const wind_speedR = document.getElementById("wind_speedA");
      wind_speedR.innerHTML = response.wind_speed;


      const wind_degreesR = document.getElementById("wind_degreesA");
      wind_degreesR.innerHTML = response.wind_degrees;

      const sunriseR = document.getElementById("sunriseA");
      sunriseR.innerHTML = functionDate(response.sunrise);

      const sunsetR = document.getElementById("sunsetA");
      sunsetR.innerHTML = functionDate(response.sunset) ;
    })
    .catch((err) => console.error(err));
    return a ;
 };



 const myWeatherB = async(city) => {
    
   let a ;
 await fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
          .then((response) => {
       console.log(response.ok);
       console.log(response);
        a = response.ok ;
        return response.json() ;
    })
      .then((response) => {
      
      const cityNameR = document.getElementById("cityNameB");
      cityNameR.innerHTML = city.substring(0, 1).toUpperCase() + city.substring(1);
       
      const cloud_pctR = document.getElementById("clould_pctB")
      cloud_pctR.innerHTML = response.cloud_pct

      const tempR = document.getElementById("tempB");
      tempR.innerHTML = response.temp;


      const feels_likeR = document.getElementById("feels_likeB");
      feels_likeR.innerHTML = response.feels_like;

      const humidityR = document.getElementById("humidityB");
      humidityR.innerHTML = response.humidity;

      const min_tempR = document.getElementById("min_tempB");
      min_tempR.innerHTML = response.min_temp;

      const max_tempR = document.getElementById("max_tempB");
      max_tempR.innerHTML = response.max_temp;

      const wind_speedR = document.getElementById("wind_speedB");
      wind_speedR.innerHTML = response.wind_speed;


      const wind_degreesR = document.getElementById("wind_degreesB");
      wind_degreesR.innerHTML = response.wind_degrees;

      const sunriseR = document.getElementById("sunriseB");
      sunriseR.innerHTML = functionDate(response.sunrise);

      const sunsetR = document.getElementById("sunsetB");
      sunsetR.innerHTML = functionDate(response.sunset) ;
    })
    .catch((err) => console.error(err));
    return a ;
 };





 const myWeatherC = async(city) => {
    
   let a ;
 await fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
  .then((response) => {
    console.log(response.ok);
    console.log(response);
     a = response.ok ;
     return response.json() ;
 })
   .then((response) => {
      
      const cityNameR = document.getElementById("cityNameC");
      cityNameR.innerHTML = city.substring(0, 1).toUpperCase() + city.substring(1);
       
      const cloud_pctR = document.getElementById("clould_pctC")
      cloud_pctR.innerHTML = response.cloud_pct

      const tempR = document.getElementById("tempC");
      tempR.innerHTML = response.temp;


      const feels_likeR = document.getElementById("feels_likeC");
      feels_likeR.innerHTML = response.feels_like;

      const humidityR = document.getElementById("humidityC");
      humidityR.innerHTML = response.humidity;

      const min_tempR = document.getElementById("min_tempC");
      min_tempR.innerHTML = response.min_temp;

      const max_tempR = document.getElementById("max_tempC");
      max_tempR.innerHTML = response.max_temp;

      const wind_speedR = document.getElementById("wind_speedC");
      wind_speedR.innerHTML = response.wind_speed;


      const wind_degreesR = document.getElementById("wind_degreesC");
      wind_degreesR.innerHTML = response.wind_degrees;

      const sunriseR = document.getElementById("sunriseC");
      sunriseR.innerHTML = functionDate(response.sunrise);

      const sunsetR = document.getElementById("sunsetC");
      sunsetR.innerHTML = functionDate(response.sunset) ;
    })
    .catch((err) => console.error(err));
    return a ;
 };


 const myWeatherD = async(city) => {
     let a ;

 await fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
  .then((response) => {
    console.log(response.ok);
    console.log(response);
    a = response.ok ;
     return response.json() ;
 })
   .then((response) => {
      
      const cityNameR = document.getElementById("cityNameD");
      cityNameR.innerHTML = city.substring(0, 1).toUpperCase() + city.substring(1);
       
      const cloud_pctR = document.getElementById("clould_pctD")
      cloud_pctR.innerHTML = response.cloud_pct

      const tempR = document.getElementById("tempD")
      tempR.innerHTML = response.temp;


      const feels_likeR = document.getElementById("feels_likeD");
      feels_likeR.innerHTML = response.feels_like;

      const humidityR = document.getElementById("humidityD");
      humidityR.innerHTML = response.humidity;

      const min_tempR = document.getElementById("min_tempD");
      min_tempR.innerHTML = response.min_temp;

      const max_tempR = document.getElementById("max_tempD");
      max_tempR.innerHTML = response.max_temp;

      const wind_speedR = document.getElementById("wind_speedD");
      wind_speedR.innerHTML = response.wind_speed;


      const wind_degreesR = document.getElementById("wind_degreesD");
      wind_degreesR.innerHTML = response.wind_degrees;

      const sunriseR = document.getElementById("sunriseD");
      sunriseR.innerHTML = functionDate(response.sunrise);

      const sunsetR = document.getElementById("sunsetD");
      sunsetR.innerHTML = functionDate(response.sunset) ;
    })
    .catch((err) => console.error(err));
    return a ;
 };


 //Code for dynamic city input
 let count = 0 ;
 const myAsyncFunction = async function(city) {
   const a = await myWeather(city); 
   if(a==true && count>0){
     var preloader = document.getElementById("loader");
     preloader.style.display = "none";
   }
   count++;
   if(a!=true && count>1){
       alert("API Server Busy")
   }
  }

myAsyncFunction("pune");
 

 @keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
 const submitButton = document.getElementById("submit_button");
 submitButton.addEventListener("click", function(event) {
   event.preventDefault(); // Prevent the form from submitting
   if (!cityInput.value) {
     // If the input field is empty, show an error message
     alert("Please enter a city");
     return;
   }
     // If the input field is not empty, call the myWeather function
   //myWeather(cityInput.value);
   myAsyncFunction(cityInput.value);
   city.value="" ;
 });
 
 cityInput.addEventListener("keypress", (event)=>{
  if(event.key==="Enter"){
     event.preventDefault();
     submitButton.click();
  }
 })



const myAsyncFunctionOther = async function() {
const a =await myWeatherA("Mumbai")
const b =await myWeatherB("chennai")
const c =await myWeatherC("kolkata")
const d =await myWeatherD("bangalore")


if(a && b && c && d == true){
    
  var preloader = document.getElementById("loader");
  preloader.style.display = "none";

}
else{
alert("API not available. Try after some time.");
window.location.reload();
}
 }
 myAsyncFunctionOther();
}



//  myWeatherA("Mumbai")
//  myWeatherB("chennai")
//  myWeatherC("kolkata")
//  myWeatherD("bangalore")
  






  
  


