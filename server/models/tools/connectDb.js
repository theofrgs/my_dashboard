const mysql = require('mysql');
var mariadbConfig = require("../../mariadb_config.json");

const db = mysql.createConnection({
    host: mariadbConfig.host,
    user: mariadbConfig.user,
    password: mariadbConfig.password,
    database: mariadbConfig.database
});

module.exports = db;