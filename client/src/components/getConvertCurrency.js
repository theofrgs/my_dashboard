import Cookies from 'js-cookie'

function getConvertCurrency(setExchangesSession, setExchangesConnected) {

    const cookierConvertCurrency = Cookies.get('convertCurrency');

    if (!cookierConvertCurrency)
        return
    setExchangesSession(JSON.parse(cookierConvertCurrency));
    setExchangesConnected(true);
}

export default getConvertCurrency;