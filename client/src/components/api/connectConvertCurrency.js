import Axios from 'axios'

const connectConvertCurrency = (currencyToConvert, setExchangesConnected) => {
    Axios.post("http://localhost:8080/connectApi/converterCurrency", {
        currencyToConvert: currencyToConvert
    }).then((response) => {
        setExchangesConnected(true);
    })
};

export default connectConvertCurrency;