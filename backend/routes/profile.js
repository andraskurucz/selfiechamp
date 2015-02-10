/**
 * Created by Szabolcs on 2015.02.07..
 */

var db = require('../db');
var auth = require('../utils/authentication');

function profile (req, res, next) {
    res.send(db.getProfile().getUserData());
}

module.exports = {
    before: auth,
    profile: profile
}
