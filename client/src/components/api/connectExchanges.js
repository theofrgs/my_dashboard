import Axios from 'axios'
import formatDate from "../formatDate";
import Cookies from 'js-cookie'

const connectExchanges = (setExchangesConnected, dateFrom) => {
    var dateFromAPi = formatDate(dateFrom);

    const getOldData = (response) => {
        var data = JSON.parse(JSON.stringify(response.data))
        var dataDateFrom = data.data[dateFromAPi]

        data.data = {};
        data.data[dateFromAPi] = dataDateFrom
        return data
    }

    const getCurrentData = (response) => {
        var data = JSON.parse(JSON.stringify(response.data))
        var dateToday = Object.keys(data.data).sort().reverse()[0]
        var dataToday = data.data[dateToday]

        data.data = {};
        data.data[dateToday] = dataToday
        return data
    }

    Axios.post("http://localhost:8080/connectApi/exchanges", {
        dateFrom: dateFromAPi
    }).then((response) => {
        if (response.data) {
            Cookies.set('exchanges_old', JSON.stringify(getOldData(response)));
            Cookies.set('exchanges_current', JSON.stringify(getCurrentData(response)));
            setExchangesConnected(true);
        }
    })
};

export default connectExchanges;