/*
 * Constructor function for the user object
 */
function User(id, name, firstName, lastName, password, age, gender, facebook_id, email) {
    this._id =              id || null;
    this._name =            name || null;
    this._firstName =       firstName || null;
    this._lastName =        lastName || null;
    this._password =        password || null;
    this._age =             age || null;
    this._gender =          gender || null;
    this._facebook_id =     facebook_id || null;
    this._email =           email || null;

    function setUserData(id, name, firstName, lastName, password, age, gender, facebook_id, email) {
        this._id = id;
        this._name = name;
        this._firstName = firstName;
        this._lastName = lastName;
        this._password = password;
        this._age = age;
        this._gender = gender;
        this._facebook_id = facebook_id;
        this._email = email;
    }

    function getUserData() {
        return {
            id:             this._id,
            name:           this._name,
            firstName:      this._firstName,
            lastName:       this._lastName,
            age:            this._age,
            gender:         this._gender,
            facebook_id:    this._facebook_id,
            email:          this._email
        };
    }

    function set(prop, value) {
        this['_' + prop] = value;
    }

    function get(prop) {
        return this['_' + prop];
    }
}

module.exports = User;