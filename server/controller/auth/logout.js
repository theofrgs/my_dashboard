var db = require("../../models/database");
var gl = require("../../models/google");

function database(req, res) {
    db.logout(req, res);
}

function google(req, res) {
    gl.logout(req, res);
}

module.exports = {
    database: database,
    google: google
}