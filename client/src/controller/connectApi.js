import convertCurrency from '../components/api/connectConvertCurrency'
import exchanges from '../components/api/connectExchanges'

function connectExchanges(setExchangesConnected, dateFrom) {
    exchanges(setExchangesConnected, dateFrom);
}

function connectConvertCurrency(currencyToConvert, setExchangesConnected) {
    convertCurrency(currencyToConvert, setExchangesConnected);
}

export {
    connectExchanges,
    connectConvertCurrency
}