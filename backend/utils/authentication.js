var db = require('../db');

function before (req, res, next) {
    var token = req.params.token;

    if (token && token === db.getAuthToken()) {
        next();
    } else {
        res.status(401);
        res.send({
            message: 'Authentication token missing'
        });
    }
}

module.exports = before;