import Axios from 'axios'
import formatDate from "../formatDate";

const connectExchanges = (setExchangesConnected, dateFrom) => {

    var dateFromAPi = formatDate(dateFrom);

    Axios.post("http://localhost:8080/connectApi/exchanges", {
        dateFrom: dateFromAPi
    }).then((response) => {
        if (response.data) {
            localStorage.setItem('exchanges', JSON.stringify(response.data));
            setExchangesConnected(true);
        }
    })
};

export default connectExchanges;