/*
 * Constructor function for the user object
 */
function User() {
    var user = {
        _name: null,
        _foreName: null,
        _lastName: null,
        _password: null,
        _age: null,
        _gender: null,
        _facebook_id: null,
        _email: null
    }

    function setUserData(name, foreName, lastName, password, age, gender, facebook_id, email) {
        user._name = name;
        user._foreName = foreName;
        user._lastName = lastName;
        user._password = password;
        user._age = age;
        user._gender = gender;
        user._facebook_id = facebook_id;
        user._email = email;
    }
    
    function getUserData() {
        return user;
    }

    function set(prop, value) {
        user[prop] = value;
    }

    function get(prop) {
        return user[prop];
    }
}

module.exports = User;