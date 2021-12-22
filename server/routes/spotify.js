function spotify(app) {
    var connectApi = require("../controller/connectApi.js");
    var spotify = require("../controller/spotify.js");

    app.post("/connectApi/spotify", (req, res) => {
        connectApi.spotify(req, res);
    });

    app.post("/spotify/refresh", (req, res) => {
        spotify.refreshToken(req, res);
    });
}

module.exports = {
    spotify
}