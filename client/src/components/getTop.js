import Axios from 'axios'
import Cookies from 'js-cookie'

export default function getTop(country, setSpotifyTop) {
    var spotifyCookie = JSON.parse(Cookies.get("spotify"))

    Axios.post("http://localhost:8080/spotify/top", {
        token: spotifyCookie.access_token,
        playlist_id: country
    }).then((response) => {
        if (response.data) {
            setSpotifyTop(JSON.parse(JSON.stringify(response.data)))
        }
    })
}