function exchanges(app) {
    var connectApi = require("../controller/connectApi.js");
    var exchanges = require("../controller/exchanges.js");

    app.post("/connectApi/exchanges", (req, res) => {
        connectApi.exchanges(req, res);
    });

    app.post("/connectApi/converterCurrency", (req, res) => {
        connectApi.converterCurrency(req, res);
    });

    app.get("/connectApi/exchanges/session", (req, res) => {
        exchanges.session(req, res)
    });

    app.get("/connectApi/converterCurrency/session", (req, res) => {
        exchanges.sessionConverterCurrency(req, res)
    });
}

module.exports = {
    exchanges: exchanges
}