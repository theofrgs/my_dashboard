function exchanges(app) {
    var connectApi = require("../controller/connectApi.js");

    app.post("/connectApi/exchanges", (req, res) => {
        connectApi.exchanges(req, res);
    });

    app.post("/connectApi/converterCurrency", (req, res) => {
        connectApi.converterCurrency(req, res);
    });
}

module.exports = {
    exchanges: exchanges
}