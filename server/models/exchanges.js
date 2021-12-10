var Axios = require("axios")
var apiConfig = require("../api_config.json");

function session(req, res) {
    if (req.session.exchanges) {
        res.send({ exchangesConnected: true, exchanges: req.session.exchanges })
    } else {
        res.send({ exchangesConnected: false })
    }
}

function connect(req, res) {
    Axios.get(`https://freecurrencyapi.net/api/v2/historical?apikey=${apiConfig.exchanges}&base_currency=EUR&date_from=${req.body.dateFrom}`, {
    }).then((response) => {
        if (response.data) {
            req.session.exchanges = response.data;
            res.send(response.data);
        }
    });
}

function connectConverterCurrency(req, res) {
    Axios.get(`https://freecurrencyapi.net/api/v2/latest?apikey=${apiConfig.exchanges}&base_currency=${req.body.currencyToConvert}`, {
    }).then((response) => {
        if (response.data) {
            req.session.convertCurrency = response.data;
            res.send(response.data);
        }
    });
}

function sessionconvertCurrency(req, res) {
    if (req.session.convertCurrency) {
        res.send({ exchangesConnected: true, convertCurrency: req.session.convertCurrency })
    } else {
        res.send({ exchangesConnected: false })
    }
}

module.exports = {
    connect: connect,
    connectConverterCurrency: connectConverterCurrency,
    session: session,
    sessionconvertCurrency: sessionconvertCurrency
}