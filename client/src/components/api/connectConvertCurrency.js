import Axios from 'axios'

const connectConvertCurrency = (currencyToConvert, setExchangesConnected) => {
    Axios.post("http://localhost:8080/connectApi/converterCurrency", {
        currencyToConvert: currencyToConvert
    }).then((response) => {
        if (response.data) {
            localStorage.setItem('convertCurrency', JSON.stringify(response.data));
            setExchangesConnected(true);
        }
    })
};

export default connectConvertCurrency;