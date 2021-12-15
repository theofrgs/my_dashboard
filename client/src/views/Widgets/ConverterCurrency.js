import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { getConvertCurrency } from "../../controller/session";
import convertCurrency from "../../components/convertCurrency";
import { Button } from "@mui/material";
import { connectConvertCurrency } from "../../controller/connectApi";


export default function ConverterCurrency() {
    const [exchangesSession, setExchangesSession] = useState("");
    const [exchangesConnected, setExchangesConnected] = useState(false);
    const [currencyToConvert, setCurrencyToConvert] = useState("EUR");
    const [currencyDesired, setCurrencyDesired] = useState("");
    const [timer, setTimer] = useState(0);
    const [interact, setInteract] = useState(false);
    const [timerState, setTimerState] = useState(false);

    useEffect(() => {
        if (currencyToConvert !== "" && currencyDesired !== "" && currencyToConvert.length === 3 && currencyDesired.length === 3) {
            connectConvertCurrency(currencyToConvert, setExchangesConnected);
        }
    }, [exchangesConnected, currencyToConvert, currencyDesired, interact, setExchangesSession, setExchangesConnected]);

    useEffect(() => {
        if (timerState) {
            if (timer === 10) {
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

    const onClickConvert = () => {
        setTimerState(true);
        setTimer(0);
        getConvertCurrency(setExchangesSession, setExchangesConnected)
    }

    return (
        <div>
            <center>
                <TextField
                    id="outlined-basic"
                    label="Currency to convert (ex: EUR)"
                    variant="outlined"
                    onChange={(e) => { setCurrencyToConvert(e.target.value.toUpperCase()) }} />
                <TextField
                    id="outlined-basic"
                    label="Currency desired (ex: USD)"
                    variant="outlined"
                    onChange={(e) => { setCurrencyDesired(e.target.value.toUpperCase()) }} />
                <Button
                    onClick={() => onClickConvert()}
                    variant="outlined">
                    Convert / Update
                </Button>
                {convertCurrency(exchangesSession, currencyToConvert, currencyDesired)}
            </center>
            <p1>Timer: {timer}</p1>
        </div>
    );
}