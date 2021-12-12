function database(app) {
    var cors = require("cors");
    var login = require("../controller/auth/login")
    var logout = require("../controller/auth/logout")
    var register = require("../controller/auth/register")

    app.use(cors());
    app.options('*', cors());

    app.post("/db/login", (req, res) => {
        login.database(req, res);
    });

    app.post("/db/logout", (req, res) => {
        logout.database(req, res);
    });

    app.post("/db/register", (req, res) => {
        register.database(req, res);
    });
}

module.exports = {
    database: database
}