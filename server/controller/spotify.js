var spot = require("../models/spotify");

function refreshToken(req, res) {
    spot.refreshToken(req, res);
}

function getRelease(req, res) {
    spot.getRelease(req, res);
}

function getTop(req, res) {
    spot.getTop(req, res);
}

module.exports = {
    refreshToken,
    getRelease,
    getTop,
}