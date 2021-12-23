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
export default function SpotifyRelease() {
    const [spotifyConnected, setSpotifyConnected] = useState(false);
    const [statusLog, setStatusLog] = useState("");
    const [anchorEl, setAnchorEl] = useState(null);
    const [country, setCountry] = useState("");
    const [spotifyLastRelease, setSpotifyLastRelease] = useState("");
    const [timer, setTimer] = useState(0);
    const [interact, setInteract] = useState(false);
    const [timerState, setTimerState] = useState(false);

    useEffect(() => {
        if (country !== "") {
            getCountryLastRelease(country, setSpotifyLastRelease);
            setTimerState(true);
            setTimer(0);
            console.log("call");
        }
    }, [country, interact, setSpotifyLastRelease])

    useEffect(() => {
        if (timerState) {
            if (timer === 20) {
                setInteract(!interact);
                setTimer(0);
            }
            const interval = setInterval(() => {
                setTimer(timer => timer + 1);
            }, 1000);
            return () => {
                clearInterval(interval);
            }
        }
    }, [timer, timerState, interact, setTimer, setTimerState, setInteract]);

    if (!spotifyConnected) {
        return Login(setSpotifyConnected, statusLog, setStatusLog)
    }

    return (
        <div>
            <center>
                {dropDownCountryMenu(anchorEl, setAnchorEl, setCountry)}
                {updateCountryName(country)}
                {releaseCarousel(spotifyLastRelease)}
            </center>
            <p1>Timer: {timer}</p1>
        </div>
    )

}