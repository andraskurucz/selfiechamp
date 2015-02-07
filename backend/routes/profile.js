/**
 * Created by Szabolcs on 2015.02.07..
 */

var db = require('../db');

function profile (req, res, next) {
    res.send(db.getProfile().getUserData());
}

module.exports = {
    profile: profile
}
