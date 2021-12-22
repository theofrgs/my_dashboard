import LoginSpotify from "../LoginPage/LoginSpotify"
import { useState } from "react";

export default function Spotify() {

    const [spotifyConnected, setSpotifyConnected] = useState(false);

    if (true) {
        return (LoginSpotify(setSpotifyConnected))
    } else {
        console.log("spotifyConnected")
    }
    return (null)
}