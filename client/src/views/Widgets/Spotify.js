import { useState } from "react";
import Login from "../LoginPage/LoginSpotify"

export default function Spotify() {
    const [spotifyConnected, setSpotifyConnected] = useState(false);
    const [statusLog, setStatusLog] = useState("");

    if (!spotifyConnected) {
        return Login(spotifyConnected, statusLog, setStatusLog)
    }
    return (null)
}