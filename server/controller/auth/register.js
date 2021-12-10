var db = require("../../models/database");
var gl = require("../../models/google");

function database(req, res) {
    db.register(req, res);
}

function google(req, res) {
    gl.register(req, res);
}

module.exports = {
    google: google,
    database: database
}