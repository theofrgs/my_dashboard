import { useEffect, useState } from "react";

import Login from "../LoginPage/LoginSpotify"
import SpotifyLastRelease from "../../components/SpotifyLastRelease";


import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// import Cookies from 'js-cookie'

export default function Spotify() {
    const [spotifyConnected, setSpotifyConnected] = useState(false);
    const [statusLog, setStatusLog] = useState("");
    const [anchorEl, setAnchorEl] = useState(null);
    const [country, setCountry] = useState("");

    const open = Boolean(anchorEl);
    if (!spotifyConnected) {
        return Login(setSpotifyConnected, statusLog, setStatusLog)
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (event) => {
        setAnchorEl(null);
    };
    const handleItemClick = (country) => {
        setCountry(country)
        setAnchorEl(null);
    };
    return (

        <div>
            <Button
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}>
                Country
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}>
                <MenuItem onClick={() => handleItemClick("France")}>France</MenuItem>
                <MenuItem onClick={() => handleItemClick("UnitedState")}>United States</MenuItem>
                <MenuItem onClick={() => handleItemClick("China")}>China</MenuItem>
            </Menu>
        </div>
    )
}