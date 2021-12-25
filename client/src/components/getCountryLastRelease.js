import Axios from 'axios'
import Cookies from 'js-cookie'

export default function getCountryLastRelease(country, setSpotifyLastRelease) {
    var spotifyCookie = JSON.parse(Cookies.get("spotify"))

    Axios.post("http://localhost:8080/spotify/release", {
        token: spotifyCookie.access_token,
        country: country
    }).then((response) => {
        if (response.data) {
            setSpotifyLastRelease(JSON.parse(JSON.stringify(response.data)))
        }
    })
}