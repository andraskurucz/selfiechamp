/**
 * Created by Szabolcs on 2015.02.04..
 */
var User = require('./entities/user');
var Feed = require('./entities/feed');

var users = [];
var feeds = [];
var profile = new User(
    '1',
    'Szabolcs Varadi',
    'Szabolcs',
    'Varadi',
    'test123',
    '24',
    'male',
    'facebook_1234565',
    'szabolcs.va@gmail.com'
);

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

    users.forEach(function(item, index) {
        if (item.getId() === id) {
            user = item.getUserData();
        }
    });

    return user;
}

function setUser (userData) {
    if (userData.id) return "missing id";
    if (userData.name) return "missing name";
    if (userData.firstName) return "missing firstName";
    if (userData.lastName) return "missing lastName";
    if (userData.password) return "missing password";
    if (userData.age) return "missing password";
    if (userData.gender) return "missing password";
    if (userData.facebook_id) return "missing password";
    if (userData.email) return "missing email";

    var user = {};

    users.forEach(function(item, index) {
        if (item.getId() === userData.id) {
            user = new User(
                userData.id,
                userData.name,
                userData.firstName,
                userData.lastName,
                userData.age,
                userData.gender,
                userData.facebook_id,
                userData.email
            );
            return "successfully updated";
        }
    });

    users.push(user);
    return "successfully inserted";
}

function getFeed (id) {
    var feed = {};

    feeds.forEach(function(item, index) {
        if (item.getId() === id) {
            feed = item.getFeedData();
        }
    });

    return feed;
}

function getProfile() {
    return profile;
}

module.exports = {
    users: users,
    getUser: getUser,
    setUser: setUser,

    feeds: feeds,
    getFeed: getFeed,

    getProfile: getProfile
}