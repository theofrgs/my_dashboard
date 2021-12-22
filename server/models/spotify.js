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
            console.log(tokenresponse.data.access_token);
            res.send(tokenresponse.data);
        });
    }
}

function refreshToken(req, res) {

    var refresh_token = req.query.refresh_token;
    var authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        headers: { 'Authorization': 'Basic ' + (new Buffer(apiConfig.spotifyClientId + ':' + apiConfig.spotifyClientKey).toString('base64')) },
        form: {
            grant_type: 'refresh_token',
            refresh_token: refresh_token
        },
        json: true
    };

    request.post(authOptions, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var access_token = body.access_token;
            res.send({
                'access_token': access_token
            });
        }
    });
}

module.exports = {
    connect,
    refreshToken,
}