import Axios from 'axios'
import Cookies from 'js-cookie'

const connectConvertCurrency = (currencyToConvert, setExchangesConnected) => {
    Axios.post("http://localhost:8080/connectApi/converterCurrency", {
        currencyToConvert: currencyToConvert
    }).then((response) => {
        if (response.data) {
            // localStorage.setItem('convertCurrency', JSON.stringify(response.data));
            Cookies.set('convertCurrency', JSON.stringify(response.data));
            setExchangesConnected(true);
        }
    })
};

export default connectConvertCurrency;