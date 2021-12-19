function spotify(app) {
    var connectApi = require("../controller/connectApi.js");

    app.post("/connectApi/spotify", (req, res) => {
        connectApi.spotify(req, res);
    });
}

module.exports = {
    spotify
}