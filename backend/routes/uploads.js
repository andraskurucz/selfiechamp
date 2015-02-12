/**
 * Created by Szabolcs_Varadi on 2015-02-10.
 */

var db = require('../db');
var auth = require('../utils/authentication');
var fs = require('fs');
var multiparty = require('multiparty');
var crypto = require('crypto');
var Feed = require('../entities/feed');

function create(req, res, next) {

    var form = new multiparty.Form();
    var newFeedItem = new Feed();
    var imageStored = false;

    form.on('file', function (name, file) {

        newFeedItem.setImage(hashFile(file));
        complete();
    });

    form.on('field', function (name, value) {
        switch (name) {
            case 'id':
                newFeedItem.setId(value);
                break;
            case 'userId':
                newFeedItem.setUserId(value);
                break;
            case 'title':
                newFeedItem.setTitle(value);
                break;
        }

        complete();
    });

    form.parse(req);

    function hashFile(file) {
        var hash = crypto.createHash('sha1');
        hash.setEncoding('hex');

        var source = fs.createReadStream(file.path);

        source.on('end', function () {
            var hashString;
            hash.end();
            hashString = hash.read();

            if (hashString === null) {
                next(new Error('Problems when uploading image'));
            }

            newFeedItem.setImage(hashString + '.' + file.originalFilename.split('.')[1]);
            moveFile(file.path,'./public/images/', hashString + '.' + file.originalFilename.split('.')[1]);

            return hashString + '.' + file.originalFilename.split('.')[1];
        });

        source.pipe(hash);
    }

    function moveFile(oldPath, newPath, fileName) {
        var source = fs.createReadStream(oldPath);
        var dest = fs.createWriteStream(newPath + fileName);

        // copying the file to an other directory from tmp
        source.on('end', function () {
            imageStored = true;
            complete();
        });

        source.on('error', function (err) {
            next(err, 500);
        });

        source.pipe(dest);
    }

    function complete() {

        if (newFeedItem.isComplete() && imageStored) {
            res.send(newFeedItem.getFeedData());
        }
    }
}

function index(req, res, next) {
    res.send(
        '<form method=\"post\" enctype=\"multipart/form-data\" action=\"/uploads/create/' + db.getAuthToken() + '\">'
        + '<p>Title: <input type="text" name="title" /></p>'
        + '<p>Id: <input type="text" name="id" /></p>'
        + '<p>UserId: <input type="text" name="userId" /></p>'
        + '<p>Image: <input type="file" name="image" /></p>'
        + '<p><input type="submit" value="Upload" /></p>'
        + '</form>');
}

module.exports = {
    before: auth,
    create: create,
    index: index
};

