/*
 * Constructor function for the user object
 */
function User(id, name, firstName, lastName, password, age, gender, facebook_id, email) {
    this.user = {
        _id: id || null,
        _name: name || null,
        _firstName: firstName || null,
        _lastName: lastName || null,
        _password: password || null,
        _age: age || null,
        _gender: gender || null,
        _facebook_id: facebook_id || null,
        _email: email || null
    }

    function setUserData(id, name, firstName, lastName, password, age, gender, facebook_id, email) {
        this.user._id = id;
        this.user._name = name;
        this.user._firstName = firstName;
        this.user._lastName = lastName;
        this.user._password = password;
        this.user._age = age;
        this.user._gender = gender;
        this.user._facebook_id = facebook_id;
        this.user._email = email;
    }
    
    function getUserData() {
        return this.user;
    }

    function set(prop, value) {
        this.user[prop] = value;
    }

    function get(prop) {
        return this.user[prop];
    }
}

module.exports = User;