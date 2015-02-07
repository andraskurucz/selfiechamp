/*
 * Constructor function for the feed object
 */
function Feed(id, userId, image, time, favs) {
    var _id =          id || null;
    var _userId =      userId || null;
    var _image =       image || null;
    var _time =        time || null;
    var _favs =        favs || null;

    function setFeedData(id, userId, image, time, favs) {
        _id = id;
        _userId = userId;
        _image = image;
        _time = time;
        _favs = favs;
    }

    function getFeedData() {
        return {
            id: _id,
            userId: _userId,
            image: _image,
            time: _time,
            favs: _favs
        };
    }

    function getId(prop) {
        return _id;
    }
}

module.exports = Feed;