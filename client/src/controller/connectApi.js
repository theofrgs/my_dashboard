import convertCurrency from '../components/api/connectConvertCurrency'
import exchanges from '../components/api/connectExchanges'
import spotify from '../components/api/connectSpotify'

function connectExchanges(setExchangesConnected, dateFrom) {
    exchanges(setExchangesConnected, dateFrom);
}

function connectConvertCurrency(currencyToConvert, setExchangesConnected) {
    convertCurrency(currencyToConvert, setExchangesConnected);
}

function connectSpotify(setSpotifyConnected, setStatusLog) {
    return (spotify(setSpotifyConnected, setStatusLog));
}

export {
    connectExchanges,
    connectConvertCurrency,
    connectSpotify,
}