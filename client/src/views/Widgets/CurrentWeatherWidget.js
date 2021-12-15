import React, { useState, useCallback, useEffect} from "react";
import { Button, TextField, Box, InputAdornment } from "@mui/material";
import { FaCloudSunRain, FaCity } from "react-icons/fa"
import getWeather from "../../components/api/weatherAPI.js";
import "../../App.css"

export default function CurrentWeatherWidget() {
    const [weather, setWeather] = useState({});
    const [locations, setLocations] = useState("");
    const [timer, setTimer] = useState(0);
    const [timerState, setTimerState] = useState(false);

    const callWeatherService = useCallback(() => {
        console.log("api CurrentWeatherWidgetz")
        getWeather((data) => {
            setWeather(data)
        }, locations, "weather"
        )
    }, [locations]);

    useEffect(() => {
        if (timerState) {
            if (timer === 10) {
                callWeatherService()
                setTimer(0);
            }
            const interval = setInterval(() => {
                setTimer(timer => timer + 1);
            }, 1000);
            return () => {
                clearInterval(interval);
            }
        }

    }, [timer, timerState, setTimer, setTimerState, callWeatherService]);

    const onClickCurrent = () => {
        setTimerState(true);
        setTimer(0);
        callWeatherService();
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
                    <Button variant="outlined" startIcon={<FaCloudSunRain />} className="location_searcher" onClick={onClickCurrent}>
                        Get weather
                    </Button>
                </div>
                <div className="app__data">
                    <h3 className="temp">Current Temparature: {weather?.main?.temp}°C</h3>
                </div>
            </div>
            <p1>Timer: {timer}</p1>
        </div>
    );
};