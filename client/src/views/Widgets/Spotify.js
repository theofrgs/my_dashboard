import { useEffect, useState } from "react";
import Axios from 'axios'

import Login from "../LoginPage/LoginSpotify"
import Cookies from "js-cookie";
import SpotifyLastRelease from "../../components/SpotifyLastRelease";
import dropDownCountryMenu from "../../components/dropDownCountryMenu";

import Carousel from 'react-elastic-carousel';

function getCountryLastRelease(country, setSpotifyLastRelease) {
    var spotifyCookie = JSON.parse(Cookies.get("spotify"))

    Axios.post("http://localhost:8080/spotify/release", {
        token: spotifyCookie.access_token,
        country: country
    }).then((response) => {
        if (response.data) {
            setSpotifyLastRelease(JSON.parse(JSON.stringify(response.data)))
        }
    })
}

const mycarrousel = (spotifyLastReleaseItem) => {
    if (!spotifyLastReleaseItem)
        return (null)

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
    ];
    const items = [0, 1, 2];

    return (
        <Carousel breakPoints={breakPoints}>
            {items.map((item) => (SpotifyLastRelease(spotifyLastReleaseItem.albums.items[item])))}
        </Carousel>
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
                {mycarrousel(spotifyLastRelease)}
            </center>
        </>
    )

}