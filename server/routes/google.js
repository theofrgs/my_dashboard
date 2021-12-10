function google(app) {
    var register = require("../controller/auth/register.js");
    var login = require("../controller/auth/login.js");
    var logout = require("../controller/auth/logout")

    app.post('/authorized', function (req, res) {
        res.send('Secured Resource');
    });

    app.post("/google/register", (req, res) => {
        register.google(req, res);
    });

    app.post("/google/login", (req, res) => {
        login.google(req, res);
    });

    app.post("/google/logout", (req, res) => {
        logout.google(req, res);
    });
}

module.exports = {
    google: google
}