var db = require("./tools/connectDb");

function login(req, res) {
    const username = req.body.username;
    const userid = req.body.userid;

    db.query(
        "SELECT * FROM Users WHERE username = ?", [username], (error, results, fields) => {
            if (error) {
                res.send({ error: error });
            }
            if (results.length > 0 && results[0].usergoogleid === userid) {
                res.send("User logged");
            } else {
                res.send("User not found");
            }
        }
    );
}

function logout(req, res) {
    req.session.user = null;
    res.send("logout");
}

function insertUserInto(username, usergoogleid) {
    db.query(
        "INSERT INTO Users (username, usergoogleid) VALUE(?, ?)",
        [username, usergoogleid],
        (error, results, fields) => {
            if (error) {
                res.send({ error: error });
            }
        });
}

function register(req, res) {
    const username = req.body.username;
    const userid = req.body.userid;

    db.query(
        "SELECT * FROM Users WHERE username = ?", [username], (error, results, fields) => {
            if (error) {
                res.send({ error: error });
            }
            if (results.length > 0) {
                if (results[0]["usergoogleid"])
                    res.send("Account with this google account already exit")
                else {
                    res.send("An account with goodle email as id already exist")
                }
            } else {
                insertUserInto(username, userid);
                res.send("User register");
            }
        }
    );
}

module.exports = {
    register: register,
    login: login,
    logout: logout
}