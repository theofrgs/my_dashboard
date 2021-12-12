var express = require('express');
var app = express();
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
