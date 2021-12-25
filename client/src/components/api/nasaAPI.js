import { env } from "../../config.js"

function getPicture(callback, locations, mode) {
    fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${env.NASA_API_KEY}`
    )
        .then((res) => {
            console.log("CALL");
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

export default getPicture;