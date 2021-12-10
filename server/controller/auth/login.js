var db = require("../../models/database");
var gl = require("../../models/google");

function database(req, res) {
    db.login(req, res);
}

function google(req, res) {
    gl.login(req, res);
}

function session(req, res) {
    db.sessionlogin(req, res);
}

module.exports = {
    database: database,
    google: google,
    session: session
}