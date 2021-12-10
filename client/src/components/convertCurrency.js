import Alert from '@mui/material/Alert';

function convertCurrency(exchangesSession, currencyToConvert, currencyDesired) {
    if (!exchangesSession.data)
        return (null);
    if (exchangesSession.data[currencyToConvert] !== undefined && exchangesSession.data[currencyDesired] !== undefined && currencyToConvert !== currencyDesired) {
        var output = `${currencyToConvert} -> ${currencyDesired} = ${exchangesSession.data[currencyDesired]}`
        return (
            <h3>
                {output}
            </h3>
        )
    } else {
        var error = ""
        if (currencyToConvert.length === 3) {
            error = `Currency ${currencyToConvert}`;
            if (currencyDesired.length === 3)
                error = `${error} or ${currencyDesired}`;
            error = `${error} not found`;
            return (
                <Alert variant="filled" size="10" severity="warning">
                    {error}
                </Alert>
            )
        }
    }
}

export default convertCurrency;