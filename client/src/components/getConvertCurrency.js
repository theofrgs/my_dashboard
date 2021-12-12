function getConvertCurrency(setExchangesSession, setExchangesConnected) {
    const convertCurrency = JSON.parse(localStorage.getItem('convertCurrency'));

    if (convertCurrency) {
        setExchangesSession(convertCurrency);
        setExchangesConnected(true);
    }
}

export default getConvertCurrency;