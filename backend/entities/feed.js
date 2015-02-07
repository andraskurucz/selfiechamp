/*
 * Constructor function for the feed object
 */
function Feed(id, userId, image, time, favs) {
    this._id =          id || null;
    this._userId =      userId || null;
    this._image =       image || null;
    this._time =        time || null;
    this._favs =        favs || null;

    function setfeedData(id, userId, image, time, favs) {
        this._id = id;
        this._userId = userId;
        this._image = image;
        this._time = time;
        this._favs = favs;
    }

    function getfeedData() {
        return {
            id: this._id,
            userId: this._userId,
            image: this._image,
            time: this._time,
            favs: this._favs
        };
    }

    function set(prop, value) {
        this.feed['_' + prop] = value;
    }

    function get(prop) {
        return this.feed['_' + prop];
    }
}

module.exports = Feed;