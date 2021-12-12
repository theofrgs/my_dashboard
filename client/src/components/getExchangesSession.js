function getExchangesSession(setEchanges, setExchangesConnected) {
    const exchangesSession = JSON.parse(localStorage.getItem('exchanges'));

    if (exchangesSession) {
        setEchanges(exchangesSession);
        setExchangesConnected(true);
    }
}

export default getExchangesSession;