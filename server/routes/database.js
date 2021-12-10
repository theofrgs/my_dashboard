function database(app) {
    var cors = require("cors");
    var login = require("../controller/auth/login")
    var logout = require("../controller/auth/logout")
    var register = require("../controller/auth/register")
    var bodyParser = require("body-parser");
    var cookieParser = require("cookie-parser");
    var session = require("express-session");

    app.use(cors({
        origin: ["https://172.18.0.2:3000"],
        methods: ["GET", "POST"],
        credentials: true
    }));

    app.use(cookieParser());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(session({
        key: "userId",
        secret: "subscribe",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60 * 60 * 24
        }
    }))

    app.post("/db/login", (req, res) => {
        login.database(req, res);
    });

    app.post("/db/logout", (req, res) => {
        logout.database(req, res);
    });

    app.get("/db/login", (req, res) => {
        login.session(req, res)
    });

    app.post("/db/register", (req, res) => {
        register.database(req, res);
    });
}

module.exports = {
    database: database
}