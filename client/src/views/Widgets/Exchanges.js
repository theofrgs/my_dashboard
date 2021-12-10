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
    // eslint-disable-next-line
    const dateFrom = new Date();

    dateFrom.setMonth(dateFrom.getMonth() - 1);
    useEffect(() => {
        if (currency !== "" && currency.length === 3)
            connectExchanges(setExchangesConnected, dateFrom);
    }, [exchangesConnected, setExchangesConnected, dateFrom, currency]);

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
                    onClick={() => getExchangesSession(setExchangesSession, setExchangesConnected)}
                    variant="outlined">
                    Get stat
                </Button>
                {findCurrency(exchangesSession, dateFrom, currency)}
            </center>
        </div>
    );
}