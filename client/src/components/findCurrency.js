import Alert from '@mui/material/Alert';
import fomatDate from "./formatDate";

function calcPoint(exchangesSession, currency ,dateFrom) {
    var todayDate = fomatDate(new Date())

    return ((exchangesSession.data[dateFrom][currency] - exchangesSession.data[todayDate][currency]) / exchangesSession.data[todayDate][currency]) * 100;

}

function findCurrency(exchangesSession, date, currency) {
    if (!exchangesSession.data)
        return null;
    var todayDate = fomatDate(new Date())
    if (exchangesSession.data[date][currency] !== undefined && currency !== "EUR") {
        var output1 = `At ${date} = ${currency} -> ${exchangesSession.data[date][currency]}`
        var output2 = `Today ${todayDate} = ${currency} -> ${exchangesSession.data[todayDate][currency]}`
        var output3 = `Rate => ${calcPoint(exchangesSession, currency, date)}%`
        return (
            <h3>
                {output1}<br/>
                {output2}<br/>
                {output3}<br/>
            </h3>
        )
    } else {
        if (currency.length === 3) {
            return (
                <Alert variant="filled" size="10" severity="warning">
                    Currency {currency} not found
                </Alert>
            )
        }
    }
}

export default findCurrency;