/*
 * Constructor function for the feed object
 */
function Feed(id, userId, image, time, favs) {
    this.feed = {
        _id: id || null,
        _userId: userId || null,
        _image: image || null,
        _time: time || null,
        _favs: favs || null
    }

    function setfeedData(id, userId, image, time, favs) {
        this.feed._id = id;
        this.feed._userId = userId;
        this.feed._image = image;
        this.feed._time = time;
        this.feed._favs = favs;
    }

    function getfeedData() {
        return this.feed;
    }

    function set(prop, value) {
        this.feed[prop] = value;
    }

    function get(prop) {
        return this.feed[prop];
    }
}

module.exports = Feed;