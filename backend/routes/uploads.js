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
    var newFeeditem = new Feed();
    var imageStored = false;

    form.on('file', function (name, file) {

        newFeeditem.setImage(hashFile(file));
        complete();
    });

    form.on('field', function (name, value) {
        switch (name) {
            case 'id':
                newFeeditem.setId(value);
                break;
            case 'userId':
                newFeeditem.setUserId(value);
                break;
            case 'title':
                newFeeditem.setTitle(value);
                break;
        }

        complete();
    });

    form.parse(req)

    function hashFile(file) {
        var hash = crypto.createHash('sha1');
        hash.setEncoding('hex');

        var source = fs.createReadStream(file.path);

        source.on('end', function () {
            var hashString = null;
            hash.end();
            hashString = hash.read();

            if (hashString === null) {
                next(new Error('Problems when uploading image'));
            }

            newFeeditem.setImage(hashString);
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

        if (newFeeditem.isComplete() && imageStored) {
            res.send(newFeeditem.getFeedData());
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

