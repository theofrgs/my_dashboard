var db = require("./tools/connectDb");
var bcrypt = require("bcrypt");

function login(req, res) {
    const username = req.body.username;
    const userpassword = req.body.userpassword;

    db.query(
        "SELECT * FROM Users WHERE username = ?;",
        [username],
        (error, results, fields) => {
            if (error) {
                res.send({ error: error });
            }
            if (results.length > 0) {
                bcrypt.compare(userpassword, results[0].userpassword, (err, response) => {
                    if (response) {
                        req.session.user = results;
                        res.send("User logged");
                    } else {
                        res.send("Wrong username or password !");
                    }
                });
            } else {
                res.send("Wrong username or password !");
            }
        }
    );
}

function logout(req, res) {
    req.session.user = null;
    res.send("logout");
}

function sessionlogin(req, res) {
    if (req.session.user) {
        res.send({loggedIn: true, user: req.session.user})
    } else {
        res.send({loggedIn: false})
    }
}

function insertUserInto(username, userpassword) {
    bcrypt.hash(userpassword, 10, (err, hash) => {
        if (err) {
            res.send({ err: err });
        }
        db.query(
            "INSERT INTO Users (username, userpassword) VALUE(?, ?)",
            [username, hash],
            (error, results, fields) => {
                if (error) {
                    res.send({ error: error });
                }
            }
        );
    });
}

function register(req, res) {
    const username = req.body.username;
    const userpassword = req.body.userpassword;

    db.query(
        "SELECT * FROM Users WHERE username = ?", [username], (error, results, fields) => {
            if (error) {
                res.send({ error: error });
            }
            if (results.length > 0) {
                res.send("User already exist");
            } else {
                res.send("User register");
                insertUserInto(username, userpassword);
            }
        }
    );
}

module.exports = {
    register: register,
    login: login,
    logout: logout,
    sessionlogin: sessionlogin
}