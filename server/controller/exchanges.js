var ech = require("../models/exchanges");

function session(req, res) {
    ech.session(req, res);
}

function sessionConverterCurrency(req, res) {
    ech.sessionconvertCurrency(req, res);
}

module.exports = {
    session: session,
    sessionConverterCurrency
}