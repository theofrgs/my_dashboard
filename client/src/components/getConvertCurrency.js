import Cookies from 'js-cookie'

export default function getConvertCurrency(setExchangesSession, setExchangesConnected) {

    const cookierConvertCurrency = Cookies.get('convertCurrency');

    if (!cookierConvertCurrency)
        return
    setExchangesSession(JSON.parse(cookierConvertCurrency));
    setExchangesConnected(true);
}