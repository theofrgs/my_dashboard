var Axios = require("axios")
var apiConfig = require("../api_config.json");

function connect(req, res) {
    Axios.get(`https://freecurrencyapi.net/api/v2/historical?apikey=${apiConfig.exchanges}&base_currency=EUR&date_from=${req.body.dateFrom}`, {
    }).then((response) => {
        if (response.data) {
            res.send(response.data);
        }
    });
}

function connectConverterCurrency(req, res) {
    Axios.get(`https://freecurrencyapi.net/api/v2/latest?apikey=${apiConfig.exchanges}&base_currency=${req.body.currencyToConvert}`, {
    }).then((response) => {
        if (response.data) {
            res.send(response.data);
        }
    });
}

module.exports = {
    connect: connect,
    connectConverterCurrency: connectConverterCurrency,
}