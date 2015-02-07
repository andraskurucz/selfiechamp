/**
 * Created by Szabolcs on 2015.02.07..
 */
var db = require('../db');

function login (req, res, next) {
    var profile = db.getProfile();

    if (req.body.email === profile.getEmail() && req.body.password === profile.getPassword()) {
        res.send({
            status: true,
            token: db.getAuthToken()
        });
    } else {
        res.send({
            status: false,
            token: null
        });
    }
}

module.exports = {
    login: login
};
