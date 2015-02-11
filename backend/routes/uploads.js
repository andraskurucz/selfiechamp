/**
 * Created by Szabolcs_Varadi on 2015-02-10.
 */

var db = require('../db');
var auth = require('../utils/authentication');
var fs = require('fs');
var multiparty = require('multiparty');
var format = require('util').format;

function create(req, res, next) {

    var form = new multiparty.Form();

    // uploads the file to a temporary location after you can move it...
    form.on('file', function(name, file) {
        console.log(file);
        res.send(file);
    });

    // parse the form
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
    create: create,
    index: index
}

