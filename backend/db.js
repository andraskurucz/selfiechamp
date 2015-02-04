/**
 * Created by Szabolcs on 2015.02.04..
 */
// faux database

var users = [];

users.push({
    id: '1234',
    name: 'Thomas Jalalo',
    foreName: 'Thomas',
    lastName: 'Jalalo',
    userName: 'tealcjn',
    password: 'asdasd',
    email: 'kresshy@gmail.com'
});

users.push({
    id: '1235',
    name: 'Guillermo Ablala',
    foreName: 'Guillermo',
    lastName: 'Ablala',
    userName: 'guilly',
    password: 'asdasd',
    email: 'kresshy+1@gmail.com'
});

users.push({
    id: '1236',
    name: 'Nathan Yolo',
    foreName: 'Nathan',
    lastName: 'Yolo',
    userName: 'yolonathan',
    password: 'asdasd',
    email: 'kresshy+2@gmail.com'
});

function getUser (id) {

    var user = {};

    users.forEach(function(value, index) {
        if (value.id === id) {
            user = value;
        }
    });

    return user;
}

function setUser (userData) {
    if (userData.id) return "missing id";
    if (userData.name) return "missing name";
    if (userData.foreName) return "missing foreName";
    if (userData.lastName) return "missing lastName";
    if (userData.userName) return "missing userName";
    if (userData.password) return "missing password";
    if (userData.email) return "missing email";

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

module.exports = {
    users: users,
    getUser: getUser,
    setUser: setUser
}