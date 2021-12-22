import React, { useState } from "react";
import { connectSpotify } from "../../controller/connectApi";
import NotifAuthComponent from '../../components/Auth/NotifAuthComponent'

export default function LoginSpotify(setSpotifyConnected) {
    const [statusLog, setStatusLog] = useState("");
    return (
        <div>
            <center>
                {connectSpotify(setSpotifyConnected, setStatusLog)}
                {NotifAuthComponent(statusLog)}
            </center>
        </div>
    );
}