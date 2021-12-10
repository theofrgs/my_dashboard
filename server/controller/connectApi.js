var ech = require("../models/exchanges");

function exchanges(req, res) {
    ech.connect(req, res);
}

function converterCurrency(req, res) {
    ech.connectConverterCurrency(req, res);
}

module.exports = {
    exchanges: exchanges,
    converterCurrency,
}