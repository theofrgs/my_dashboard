var express = require('express');
var app = express();
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');
const hostname = '0.0.0.0';
var port = 8080;
var database = require("./routes/database");
var exchanges = require("./routes/exchanges");
var google = require("./routes/google");
var about = require("./routes/about");

app.use(express.json());
database.database(app);

app.listen(port, hostname, () => console.log(`API Server listening on port ${port}`));

google.google(app);
exchanges.exchanges(app);
about.about(app);

var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-m5ryrkbo.us.auth0.com/.well-known/jwks.json'
    }),
    audience: 'https://www.dashboard-api.com',
    issuer: 'https://dev-m5ryrkbo.us.auth0.com/',
    algorithms: ['RS256']
});

app.use(jwtCheck);
