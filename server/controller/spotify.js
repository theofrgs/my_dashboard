var spot = require("../models/spotify");

function refreshToken(req, res) {
    spot.refreshToken(req, res);
}

module.exports = {
    refreshToken,
}