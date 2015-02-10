/**
 * Created by Szabolcs_Varadi on 2015-02-10.
 */

var db = require('../db');
var auth = require('../utils/authentication');
var fs = require('fs');
var Busboy = require('connect-busboy');

function create(req, res, next) {

    req.busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
        console.log('File [' + fieldname + ']: filename: ' + filename + ', encoding: ' + encoding + ', mimetype: ' + mimetype);
        file.on('data', function(data) {
            console.log('File [' + fieldname + '] got ' + data.length + ' bytes');
        });
        file.on('end', function() {
            console.log('File [' + fieldname + '] Finished');
        });
    });

    req.busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated) {
        console.log('Field [' + fieldname + ']: value: ' + inspect(val));
    });

    req.busboy.on('finish', function() {
        console.log('Done parsing form!');
        res.writeHead(303, { Connection: 'close', Location: '/' });
        res.end();
    });

    req.pipe(req.busboy);

    /*
    fs.writeFile(__dirname + '/public/images/' + image.name, function (err) {
        if (err) {
            res.status(500);
            res.send({
                status: false,
                message: 'Failed to save the picture'
            });
        } else {
            res.send({
                status: true,
                message: 'Image uploaded successfully',
                path: '/images/' + image.name
            });
        }
    });*/
}

module.exports = {
    create: create
}

