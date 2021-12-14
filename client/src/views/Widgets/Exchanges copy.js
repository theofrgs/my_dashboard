import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { getExchangesSession } from "../../controller/session";
import findCurrency from "../../components/findCurrency";
import { connectExchanges } from "../../controller/connectApi";
import Button from "@material-ui/core/Button";

export default function Exchanges() {
    const [exchangesSession, setExchangesSession] = useState("");
    const [exchangesConnected, setExchangesConnected] = useState(false);
    const [currency, setCurrency] = useState("");
    const [timer, setTimer] = useState(0);
    const [interact, setInteract] = useState(false);
    const [timerState, setTimerState] = useState(false);

    // eslint-disable-next-line
    const dateFrom = new Date();

    dateFrom.setMonth(dateFrom.getMonth() - 1);
    useEffect(() => {
        if (currency !== "" && currency.length === 3) {
            connectExchanges(setExchangesConnected, dateFrom);
        }
    }, [exchangesConnected, interact, setExchangesConnected, dateFrom, currency]);

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

    const onClickExchanges = () => {
        setTimerState(true);
        setTimer(0);
        getExchangesSession(setExchangesSession, setExchangesConnected);
    }

    return (
        <div>
            <center>
                <TextField
                    id="standard-basic"
                    label="Currency (compare to EUR)"
                    variant="standard"
                    color="success"
                    onChange={(e) => { setCurrency(e.target.value.toUpperCase()) }} />
                <Button
                    onClick={() => onClickExchanges()}
                    variant="outlined">
                    Get stat
                </Button>
                {findCurrency(exchangesSession, dateFrom, currency)}
            </center>
            <p1>Timer: {timer}</p1>
        </div>
    );
}