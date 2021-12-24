import { connectSpotify } from "../../controller/connectApi";
import NotifAuthComponent from '../../components/Auth/NotifAuthComponent'

export default function Login(setSpotifyConnected, statusLog, setStatusLog) {
    return (
        <div>
            {/* <center> */}
                {connectSpotify(setSpotifyConnected, setStatusLog)}
                {NotifAuthComponent(statusLog)}
            {/* </center> */}
        </div>
    );
}