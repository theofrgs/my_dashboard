import { useEffect, useState } from "react";

import Login from "../LoginPage/LoginSpotify"
import dropDownCountryMenu from "../../components/dropDownCountryMenu";
import getCountryLastRelease from "../../components/getCountryLastRelease"
import releaseCarousel from "../../components/releaseCarousel"


const updateCountryName = (country) => {
    if (!country)
        return (null)

    var countryName = ""

    if (country === "FR") {
        countryName = "France"
    }
    if (country === "US") {
        countryName = "United States"
    }
    if (country === "CH") {
        countryName = "China"
    }
    return (
        < p1 >
            Last Release of {countryName}
        </p1 >
    )
}
export default function Spotify() {
    const [spotifyConnected, setSpotifyConnected] = useState(false);
    const [statusLog, setStatusLog] = useState("");
    const [anchorEl, setAnchorEl] = useState(null);
    const [country, setCountry] = useState("");
    const [spotifyLastRelease, setSpotifyLastRelease] = useState("");

    useEffect(() => {
        if (country !== "") {
            getCountryLastRelease(country, setSpotifyLastRelease);
        }
    }, [country, setSpotifyLastRelease])

    if (!spotifyConnected) {
        return Login(setSpotifyConnected, statusLog, setStatusLog)
    }

    return (
        <>
            <center>
                {dropDownCountryMenu(anchorEl, setAnchorEl, setCountry)}
                {updateCountryName(country)}
                {releaseCarousel(spotifyLastRelease)}
            </center>
        </>
    )

}