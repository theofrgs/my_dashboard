import Axios from 'axios';

function getConvertCurrency(exchangesConnected, currencyToConvert, setEchanges, setExchangesConnected) {

    // Axios.defaults.withCredentials = true;

    Axios.get("http://localhost:8080/connectApi/converterCurrency/session").then((response) => {
        if (response && response.data.exchangesConnected === true) {
            setEchanges(response.data.convertCurrency);
            setExchangesConnected(true);
        }
    });
}

export default getConvertCurrency;