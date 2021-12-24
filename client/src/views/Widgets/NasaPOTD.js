import React, { useState, useCallback, useEffect } from "react";
import getPicture from "../../components/api/nasaAPI";
import "../../App.css"

export default function NasaPOTD() {
    const [potd, setPicture] = useState({});
    const [timer, setTimer] = useState(0);
    const [timerState, setTimerState] = useState(true);

    const callNasaPOTD = useCallback(() => {
        getPicture((data) => {
            setPicture(data)
        },
        )
    }, []);

    callNasaPOTD();

    useEffect(() => {
        if (timerState) {
            if (timer === 30) {
                callNasaPOTD()
                setTimer(0);
            }
            const interval = setInterval(() => {
                setTimer(timer => timer + 1);
            }, 1000);
            return () => {
                clearInterval(interval);
            }
        }

    }, [timer, timerState, setTimer, setTimerState, callNasaPOTD]);

    return (
        <div className="app">
            <div className="wrapper">
                <div className="app__data">
                    <img className="temp" src={potd?.url} alt="pic" width={200} />
                </div>
            </div>
            <p1>Timer: {timer}</p1>
        </div>
    );
};