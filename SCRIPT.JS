// const weatherdata = {
//     name: "",
//     temp: "0",
//     humidity: "0",
//     icon: "",
//     description: "0",
//     speed: "0"

// }


// function displayweather(data) {
//     const { name } = data;
//     const { temp, humidity } = data.main;
//     const { icon, description } = data.weather[0];
//     const { speed } = data.wind;
//     console.log(name, temp, humidity, icon, description, speed);
// }

// function displayweather(data) {
//     weatherdata.name = data;
//     weatherdata.temp, weatherdata.humidity = data.main;
//     weatherdata.icon, weatherdata.description = data.weather[0];
//     weatherdata.speed = data.wind;
//     console.log(weatherdata.name, weatherdata.temp, weatherdata.humidity,weatherdata.icon, weatherdata.description  ,  weatherdata.speed);
// }

let weather = {
    apikey: "0e41ca0971ea2f1a63082fbdce8fe278",
    fetchweather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=" + this.apikey)
            .then((Response) => Response.json())
            .then((data) => this.displayweather(data));
    },
    displayweather: function (data) {
        const { name } = data;
        const { temp, humidity } = data.main;
        const { icon, description } = data.weather[0];
        const { speed } = data.wind;
        console.log(name, temp, humidity, icon, description, speed);
        document.querySelector(".city").innerText = " weather in " + name;
        // document.queryselector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".temp").innerText = temp + " °C";
        document.querySelector(".humidity").innerText = "humidity : " + humidity + "%";
        document.querySelector(".description").innerText = description;
        document.querySelector(".wind-speed").innerText = "wind speed :" + speed + "km/hr";
        document.body.style.backgroundimage = "url('https://unsplash.com/s/photos/"+name+"')" ;
        // https://unsplash.com/s/photos/land-scape
    },
    search: function () {
        this.fetchweather(document.querySelector(".search-bar").value);
    }


};
document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});
document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter")
        weather.search();
})
