import { env } from "../../config";
import OauthPopup from "react-oauth-popup";
import querystring from "querystring";
import { FaSpotify } from "react-icons/fa";
import Axios from 'axios'
import IconButton from '@material-ui/core/IconButton';
import Cookies from 'js-cookie'

const connectSpotify = (setSpotifyConnected, setStatusLog) => {
    const url = 'https://accounts.spotify.com/authorize?' +
        querystring.stringify({
            response_type: 'code',
            client_id: env.SPOTIFY_CLIENT_ID,
            scope: 'user-read-private user-read-email',
            redirect_uri: env.SPOTIFY_REDIRECT_URI,
        });

    const getRefreshedToken = (spotifyCookie) => {
        Axios.post("http://localhost:8080/spotify/refresh", {
            refresh_token: spotifyCookie.refresh_token
        }).then((response) => {
            if (response.data) {
                Cookies.set('spotify', JSON.stringify(response.data));
                setSpotifyConnected(true);
            }
        })
    }

    const onCode = (code) => {
        Axios.post("http://localhost:8080/connectApi/spotify", {
            code: code
        }).then((response) => {
            if (response.data) {
                if (response.data !== "Error with spotify authentification") {
                    getRefreshedToken(response.data)
                    setStatusLog("Spotify API connectd")
                } else {
                    setStatusLog(response.data)
                }
            }
        })
    }

    const onClose = () => { };

    return (
        <OauthPopup
            url={url}
            onCode={onCode}
            onClose={onClose} >
            <div>
                <IconButton aria-label="delete">
                    <FaSpotify />
                </IconButton>
            </div>
        </OauthPopup>
    )
};

export default connectSpotify;