/**
 * Created by Szabolcs_Varadi on 2015-02-10.
 */

var db = require('../db');
var auth = require('../utils/authentication');
var fs = require('fs');

function create(req, res, next) {
    for (var i = 0; i < req.files.length; i++) {
        var file = req.files.item(i);
        fs.writeFileSync('../public/images/' + file.name, file, '');
    }

}

/* nothing is exported yet don't affects the routes */