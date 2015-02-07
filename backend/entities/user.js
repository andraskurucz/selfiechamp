/*
 * Constructor function for the user object
 */
function User(id, name, firstName, lastName, password, age, gender, facebook_id, email) {
    var _id =              id || null;
    var _name =            name || null;
    var _firstName =       firstName || null;
    var _lastName =        lastName || null;
    var _password =        password || null;
    var _age =             age || null;
    var _gender =          gender || null;
    var _facebook_id =     facebook_id || null;
    var _email =           email || null;
    var _image =           image || null;

    this.setUserData = setUserData;
    this.getUserData = getUserData;
    this.getId = getId;

    function setUserData(id, name, firstName, lastName, age, gender, facebook_id, email) {
        _id = id;
        _name = name;
        _firstName = firstName;
        _lastName = lastName;
        _age = age;
        _gender = gender;
        _facebook_id = facebook_id;
        _email = email;
    }

    function getUserData() {
        return {
            id:             _id,
            name:           _name,
            firstName:      _firstName,
            lastName:       _lastName,
            age:            _age,
            gender:         _gender,
            facebook_id:    _facebook_id,
            email:          _email,
            image:          '/images/no_photo.jpg'
        };
    }

    function getId() {
        return _id
    }
}

module.exports = User;