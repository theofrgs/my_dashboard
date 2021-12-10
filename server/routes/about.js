function about(app) {
    var aboutval = require("../about.json");

    app.get("/about.json", (req, res) => {
        var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
        var time = new Date().getTime();
        res.send({
            " client ": {
                " host ": ip
            },
            " server ": {
                " current_time ": time,
                " services ": [
                    {
                        " name ": " weather ",
                        " widgets ": [
                            {
                                " name ": " city_temperature ",
                                " description ": " Display temperature for a city ",
                                " params ": [
                                    {
                                        " name ": " city ",
                                        " type ": " string "
                                    }
                                ]
                            },
                            {
                                " name ": " city_temperature_forecast ",
                                " description ": " Display temperature forecast 5 days for a city ",
                                " params ": [
                                    {
                                        " name ": " city ",
                                        " type ": " string "
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        " name ": " exchange ",
                        " widgets ": [
                            {
                                " name ": " convertcurrency ",
                                " description ": " Compare two differents currencies ",
                                " params ": [
                                    {
                                        " name ": " currency ",
                                        " type ": " string "
                                    },
                                    {
                                        " name ": " currency ",
                                        " type ": " string "
                                    }
                                ]
                            },
                            {
                                " name ": " exchanges ",
                                " description ": " Get the value of the currency compared to EUR ",
                                " params ": [
                                    {
                                        " name ": " currency ",
                                        " type ": " string "
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        });
    });
}

module.exports = {
    about: about
}