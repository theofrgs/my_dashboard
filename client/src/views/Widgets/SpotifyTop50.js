import { useEffect, useState } from "react";

import Login from "../LoginPage/LoginSpotify"
import dropDownCountryMenuTop from "../../components/dropDownCountryMenuTop";
import getTop from "../../components/getTop"
import topSpotify from "../../components/topSpotify"
// import Cookies from "js-cookie";


const updateCountryName = (country) => {
    if (!country)
        return (null)

    var countryName = ""

    if (country === "37i9dQZEVXbIPWwFssbupI") {
        countryName = "France"
    }
    if (country === "37i9dQZEVXbLRQDuF5jeBp") {
        countryName = "United States"
    }
    if (country === "37i9dQZEVXbMDoHDwVN2tF") {
        countryName = "World"
    }
    return (
        < p1 >
            Top 50 {countryName}
        </p1 >
    )
}

function reduceSpotifyTracks(spotifyTop) {
    if (spotifyTop.tracks.items.length !== 50) {
        spotifyTop.tracks.items.pop();
        reduceSpotifyTracks(spotifyTop)
    }
}

export default function SpotifyTop50() {
    const [spotifyConnected, setSpotifyConnected] = useState(false);
    const [spotifyTop, setSpotifyTop] = useState();
    const [statusLog, setStatusLog] = useState("");
    const [anchorEl, setAnchorEl] = useState(null);
    const [country, setCountry] = useState("");

    useEffect(() => {
        if (country !== "") {
            getTop(country, setSpotifyTop);
        }
    }, [country, setSpotifyTop])

    if (!spotifyConnected) {
        return Login(setSpotifyConnected, statusLog, setStatusLog)
    }
    if (spotifyTop)
        reduceSpotifyTracks(spotifyTop)
    return (
        <div>
            {dropDownCountryMenuTop(anchorEl, setAnchorEl, setCountry)}
            {updateCountryName(country)}
            {topSpotify(spotifyTop)}
        </div>
    )

}