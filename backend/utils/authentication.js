function before (req, res, nex) {
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