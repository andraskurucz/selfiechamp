/**
 * Created by Szabolcs on 2015.02.04..
 */
var User = require('./entities/user');
var Feed = require('./entities/feed');

var users = [];
var feeds = [];

users.push(new User(
    '1234',
    'Thomas Jalalo',
    'Thomas',
    'Jalalo',
    'asdasd',
    '18',
    'male',
    'facebook_1234565',
    'kresshy@gmail.com'
));

users.push(new User(
    '1235',
    'Guillermo Ablala',
    'Guillermo',
    'Ablala',
    'asdasd',
    '18',
    'male',
    'facebook_1234566',
    'kresshy+1@gmail.com'
));

users.push(new User(
    '1236',
    'Nathan Yolo',
    'Nathan',
    'Yolo',
    'asdasd',
    '18',
    'male',
    'facebook_1234567',
    'kresshy+2@gmail.com'
));

feeds.push(new Feed(
    '2345',
    '1234',
    '/images/yolo.jpg',
    '2015-02-03',
    ['1234', '1235', '1236']
));

feeds.push(new Feed(
    '2346',
    '1235',
    '/images/yolo-15.gif',
    '2015-02-03',
    ['1234', '1235']
));

feeds.push(new Feed(
    '2347',
    '1236',
    '/images/yolo-final.jpg',
    '2015-02-03',
    ['1234']
));

function getUser (id) {
    var user = {};

    users.forEach(function(value, index) {
        if (value.user._id === id) {
            user = value;
        }
    });

    return user;
}

function setUser (userData) {
    if (userData._id) return "missing id";
    if (userData._name) return "missing name";
    if (userData._firstName) return "missing firstName";
    if (userData._lastName) return "missing lastName";
    if (userData._password) return "missing password";
    if (userData._age) return "missing password";
    if (userData._gender) return "missing password";
    if (userData._facebook_id) return "missing password";
    if (userData._email) return "missing email";

    var user = {};

    users.forEach(function(value, index) {
        if (value.id === userData.id) {
            user = userData;
            return "successfully updated";
        }
    });

    users.push(user);
    return "successfully inserted";
}

function getFeed (id) {
    var feed = {};

    feeds.forEach(function(value, index) {
        if (value.feed._id === id) {
            feed = value;
        }
    });

    return feed;
}

module.exports = {
    users: users,
    getUser: getUser,
    setUser: setUser,

    feeds: feeds,
    getFeed: getFeed
}