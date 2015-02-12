/*
 * Constructor function for the feed object
 */
function Feed(id, userId, title, image, time, favs) {

    // private fields
    var _id =          id || null;
    var _userId =      userId || null;
    var _title =       title || null;
    var _image =       image || null;
    var _time =        time || new Date();
    var _favs =        favs || [];

    // public functions
    this.isComplete = isComplete;
    this.addFav = addFav;

    // setters
    this.setFeedData = setFeedData;
    this.setId = setId;
    this.setUserId = setUserId;
    this.setTitle = setTitle;
    this.setImage = setImage;
    this.setTime = setTime;
    this.setFavs = setFavs;

    // getters
    this.getFeedData = getFeedData;
    this.getId = getId;
    this.getUserId = getUserId;
    this.getTitle = getTitle;
    this.getImage = getImage;
    this.getTime = getTime;
    this.getFavs = getFavs;

    // check that all the fields are set
    function isComplete() {
        return _id && _userId && _title && _image && _time && _favs;
    }

    function addFav(value) {
        _favs.push(value);
    }

    /*
     * Setters and Getters
     */
    function setFeedData(id, userId, title, image, time, favs) {
        _id = id;
        _userId = userId;
        _title = title;
        _image = image;
        _time = time;
        _favs = favs;
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

    function getId() {
        return _id;
    }

    function getUserId(value) {
        return _userId;
    }

    function getTitle(value) {
        return title;
    }

    function getImage(value) {
        return image;
    }

    function getTime(value) {
        return time;
    }

    function getFavs(value) {
        return favs;
    }
}

module.exports = Feed;