/**
 * Created by Szabolcs_Varadi on 2015-02-10.
 */

var db = require('../db');
var auth = require('../utils/authentication');
var fs = require('fs');
var multiparty = require('multiparty');

function create(req, res, next) {

    var form = new multiparty.Form();

    form.on('file', function(name, file) {

        var source = fs.createReadStream(file.path);
        var dest = fs.createWriteStream('./public/images/' + file.originalFilename);

        source.pipe(dest);

        source.on('end', function() {
            res.send('/images/' + file.originalFilename);
        });

        source.on('error', function(err) {
            next(err, 500);
        })
    });

    form.parse(req)
}

function index (req, res, next) {
    res.send(
    '<form method=\"post\" enctype=\"multipart/form-data\" action=\"/uploads/create/' + db.getAuthToken() + '\">'
    + '<p>Title: <input type="text" name="title" /></p>'
    + '<p>Image: <input type="file" name="image" /></p>'
    + '<p><input type="submit" value="Upload" /></p>'
    + '</form>');
}

module.exports = {
    before: auth,
    create: create,
    index: index
};

