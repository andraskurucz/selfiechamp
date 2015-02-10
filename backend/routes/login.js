/**
 * Created by Szabolcs on 2015.02.07..
 */
var db = require('../db');

function login (req, res, next) {
    var profile = db.getProfile();

    console.log(req.body);
    console.log(profile.getEmail() + ' ' +  profile.getPassword());

    if (req.body.email === profile.getEmail() && req.body.password === profile.getPassword()) {
        res.send({
            status: true,
            token: db.getAuthToken()
        });
    } else {
        res.status(401);
        res.send({
            status: false,
            token: null
        });
    }
}

module.exports = {
    login: login
};
