import Axios from 'axios';

function getExchangesSession(setEchanges, setExchangesConnected) {

    // Axios.defaults.withCredentials = true;

    Axios.get("http://localhost:8080/connectApi/exchanges/session").then((response) => {
        if (response && response.data.exchangesConnected === true) {
            setEchanges(response.data.exchanges);
            setExchangesConnected(true);
        }
    });
}

export default getExchangesSession;