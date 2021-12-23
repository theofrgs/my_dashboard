var spot = require("../models/spotify");

function refreshToken(req, res) {
    spot.refreshToken(req, res);
}

function getRelease(req, res) {
    spot.getRelease(req, res);
}

module.exports = {
    refreshToken,
    getRelease,
}