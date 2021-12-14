import { env } from "../../config.js"

function getWeather(callback, locations, mode) {
    fetch(
        `https://api.openweathermap.org/data/2.5/${mode}?q=${locations}&APPID=${env.WEATHER_API_KEY}&units=metric`
    )
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                if (res.status === 404) {
                    return alert("Oops, wrong location!");
                }
                alert("Oops, cannot enter empty name!");
                throw new Error("You have an error");
            }
        })
        .then((object) => {
            callback(object);
        })
        .catch((error) => console.log(error));
}

export default getWeather;