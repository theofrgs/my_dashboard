var ech = require("../models/exchanges");
var spot = require("../models/spotify")

function exchanges(req, res) {
    ech.connect(req, res);
}

function converterCurrency(req, res) {
    ech.connectConverterCurrency(req, res);
}

function spotify(req, res) {
    spot.connect(req, res);
}

module.exports = {
    exchanges: exchanges,
    converterCurrency,
    spotify,
}