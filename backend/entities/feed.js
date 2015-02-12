/*
 * Constructor function for the feed object
 */
function Feed(id, userId, title, image, time, favs) {
    var _id =          id || null;
    var _userId =      userId || null;
    var _title =       title || null;
    var _image =       image || null;
    var _time =        time || new Date();
    var _favs =        favs || [];

    this.setFeedData = setFeedData;
    this.getFeedData = getFeedData;
    this.getId = getId;
    this.setId = setId;
    this.setUserId = setUserId;
    this.setTitle = setTitle;
    this.setImage = setImage;
    this.setTime = setTime;
    this.setFavs = setFavs;
    this.addFav = addFav;
    this.isComplete = isComplete;

    function setFeedData(id, userId, title, image, time, favs) {
        _id = id;
        _userId = userId;
        _title = title;
        _image = image;
        _time = time;
        _favs = favs;
    }

    function getFeedData() {
        return {
            id: _id,
            userId: _userId,
            title: _title,
            image: _image,
            time: _time,
            favs: _favs
        };
    }

    function setId(value) {
        _id = value;
    }

    function setUserId(value) {
        _userId = value;
    }

    function setTitle(value) {
        _title = value;
    }

    function setImage(value) {
        _image = value;
    }

    function setTime(value) {
        _time = value;
    }

    function setFavs(value) {
        _favs = value;
    }

    function addFav(value) {
        _favs.push(value);
    }

    function getId() {
        return _id;
    }

    // check that all the fields are set
    function isComplete() {
        return _id && _userId && _title && _image && _time && _favs;
    }
}

module.exports = Feed;