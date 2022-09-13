const form = document.querySelector("form");
const search = document.querySelector("input");
const result = document.querySelector(".result");
const API_KEY = "876a6f28bf27a2f6fe723065ba825c83";

const getWeather = async (city)=>{
    try{
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        const response = await fetch(URL);
        const weatherData = await response.json();
        const IMG_URL = `http://api.openweathermap.org/img/w/${weatherData.weather[0].icon}`;
        
        console.log(weatherData);
        result.innerHTML = `
        <div class="image">
                <img src=${IMG_URL} alt="">
            </div>
            <div class="temp">
                ${weatherData.main.temp} ℃
            </div>`
    }catch(e){
        console.log(e);
        result.innerHTML = `
        <h3 style = "color:white">City not found</h3>`
    }
}

form.addEventListener("submit",(event)=>{
        let city = search.value;
        event.preventDefault();
        getWeather(city);

})
