import { env } from "../../config";
import OauthPopup from "react-oauth-popup";
import querystring from "querystring";
import { FaSpotify } from "react-icons/fa";
import Button from "@material-ui/core/Button";

const onCode = (code) => {
    console.log(JSON.parse(JSON.stringify(code)));
}
const onClose = () => console.log("closed!");

const connectSpotify = () => {
    const url = 'https://accounts.spotify.com/authorize?' +
        querystring.stringify({
            response_type: 'code',
            client_id: env.SPOTIFY_CLIENT_ID,
            scope: 'user-read-private user-read-email',
            redirect_uri: env.SPOTIFY_REDIRECT_URI,
        });

    return (
        <OauthPopup
            url={url}
            onCode={onCode}
            onClose={onClose} >
            <div>
                <Button startIcon={<FaSpotify />} />
            </div>
        </OauthPopup>
    )
};

export default connectSpotify;