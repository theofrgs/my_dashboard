import React, { useState, useEffect, useCallback} from "react";
import { styled } from "@mui/material/styles";
import { Button, TextField, Box, InputAdornment, Paper, Grid } from "@mui/material";
import { FaCloudSunRain, FaCity } from "react-icons/fa"
import getWeather from "../../components/api/weatherAPI";
import "../../App.css"

export default function ForecastWeatherWidget() {
    const [weather, setWeather] = useState(undefined);
    const [locations, setLocations] = useState("");
    const [timer, setTimer] = useState(0);
    const [timerState, setTimerState] = useState(false);

    const callWeatherService = useCallback(() => {
        getWeather((data) => {
            setWeather(data)
        }, locations, "forecast"
        )
    }, [locations]);

    useEffect(() => {
        if (timerState) {
            if (timer === 30) {
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

    const onClickForecast = () => {
        setTimerState(true);
        setTimer(0);
        callWeatherService();
    }

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary
    }));

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
                <Box sx={{
                    marginBottom: "10px"
                }}>
                    <Button variant="outlined" startIcon={<FaCloudSunRain />} className="location_searcher" onClick={onClickForecast}>
                        Get weather
                    </Button>
                </Box>
                <Box className="app__data" sx={{ alignItems: "center" }}>
                    <Grid container spacing={1}>
                        <Grid item xs>
                            <Item>Today</Item>
                            {weather !== undefined ? <Item>{weather?.list[0]?.main?.temp}°C</Item> : null}
                        </Grid>
                        <Grid item xs>
                            <Item>Tomorrow</Item>
                            {weather !== undefined ? <Item>{weather?.list[8]?.main?.temp}°C</Item> : null}
                        </Grid>
                        <Grid item xs>
                            <Item>In 3 days</Item>
                            {weather !== undefined ? <Item>{weather?.list[16]?.main?.temp}°C</Item> : null}
                        </Grid>
                        <Grid item xs>
                            <Item>In 4 days</Item>
                            {weather !== undefined ? <Item>{weather?.list[24]?.main?.temp}°C</Item> : null}
                        </Grid>
                        <Grid item xs>
                            <Item>In 5 days</Item>
                            {weather !== undefined ? <Item>{weather?.list[38]?.main?.temp}°C</Item> : null}
                        </Grid>
                    </Grid>
                </Box>
            </div>
            <p1>Timer: {timer}</p1>
        </div>
    );
};