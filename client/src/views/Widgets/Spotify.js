import { useState } from "react";
import { connectSpotify } from "../../controller/connectApi";
import NotifAuthComponent from '../../components/Auth/NotifAuthComponent'

export default function Spotify() {

    const [spotifyConnected, setSpotifyConnected] = useState(false);
    const [statusLog, setStatusLog] = useState("");

    if (!spotifyConnected) {
        return (
            <div>
                <center>
                    {connectSpotify(setSpotifyConnected, setStatusLog)}
                    {NotifAuthComponent(statusLog)}
                </center>
            </div>
        );
    }
    return (null)
}