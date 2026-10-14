let currentWeather = "";
let changes = 0;
let weatherChosen = false;

function weatherChanger(userChoice) {

    if (weatherChosen === true && currentWeather === userChoice) {
        document.getElementById("message").innerHTML = "This weather is already being shown";
    
    } else {
        currentWeather = userChoice;
        weatherChosen = true;
        changes = changes + 1;

        if (currentWeather === "sunny") {
            document.body.style.backgroundColor = "#fffb00ff";
            document.getElementById("weather").innerHTML = "Sunny Day ☀️ ";
            document.getElementById("message").innerHTML = "Wear a cap!";
        } else if (currentWeather === "rainy") {
            document.body.style.backgroundColor = "#4d7594ff";
            document.getElementById("weather").innerHTML = "Rainy Day 🌧️";
            document.getElementById("message").innerHTML = "Bring an umbrella!";
        } else {
            document.body.style.backgroundColor = "#f4ececff";
            document.getElementById("weather").innerHTML = "Snowy Day ❄️";
            document.getElementById("message").innerHTML = "Wear a good jacket!";
        }
        document.getElementById("count").innerHTML = "Weather changes: " + changes;
    }
}
