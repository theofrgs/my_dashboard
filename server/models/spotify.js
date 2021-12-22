var Axios = require("axios")
var apiConfig = require("../api_config.json");
var querystring = require('querystring');
var btoa = require('btoa');
var querystring = require("querystring");

function connect(req, res) {
    var code = req.body.code || null;

    if (code === null) {
        res.send("Error with spotify authentification");
    } else {
        var authOptions = {
            form: {
                code: code,
                redirect_uri: apiConfig.spotifyRedirectUri,
                grant_type: 'authorization_code'
            },
            headers: {
                'Authorization': 'Basic ' + btoa(apiConfig.spotifyClientId + ':' + apiConfig.spotifyClientKey)
            },
            json: true,
        };
        Axios.post('https://accounts.spotify.com/api/token', querystring.stringify(authOptions.form),
            authOptions
        ).then(tokenresponse => {
            res.send(tokenresponse.data);
        });
    }
}

function refreshToken(req, res) {
    var authOptions = {
        form: {
            grant_type: 'refresh_token',
            refresh_token: req.body.refresh_token
        },
        headers: {
            'Authorization': 'Basic ' + btoa(apiConfig.spotifyClientId + ':' + apiConfig.spotifyClientKey)
        },
        json: true,
    };

    Axios.post('https://accounts.spotify.com/api/token', querystring.stringify(authOptions.form),
        authOptions
    ).then(response => {
        res.send(response.data);
    });
}

module.exports = {
    connect,
    refreshToken,
}