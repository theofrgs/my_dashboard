import React, { useState } from "react";
import { Button, TextField, Box, InputAdornment } from "@mui/material";
import { FaCloudSunRain, FaCity } from "react-icons/fa"
import getWeather from "../../api/weatherAPI.js";
import "../../App.css"

export default function CurrentWeatherWidget() {
    const [weather, setWeather] = useState({});
    const [locations, setLocations] = useState("");
    const callWeatherService = () => {
        getWeather((data) => {
            setWeather(data)
        }, locations, "weather"
        )
    }

    return (
        <div className="app">
            <div className="wrapper">
                <Box className="search" sx={{
                    marginBottom: "10px"
                }}>
                    <TextField
                        type="text"
                        value={locations}
                        onChange={(e) => setLocations(e.target.value)}
                        label="Enter location"
                        className="location_input"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <FaCity />
                                </InputAdornment>
                            ),
                        }}
                        variant="standard"
                    />
                </Box>
                <div>
                    <Button variant="outlined" startIcon={<FaCloudSunRain />} className="location_searcher" onClick={callWeatherService}>
                        Get weather
                    </Button>
                </div>
                <div className="app__data">
                    <h3 className="temp">Current Temparature: {weather?.main?.temp}°C</h3>
                </div>
            </div>
        </div>
    );
};